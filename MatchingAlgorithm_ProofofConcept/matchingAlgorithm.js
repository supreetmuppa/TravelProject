require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


async function matchUsers(destination, interests, threshold) {
    const client = await pool.connect();
    try {
        const interestsArray = interests.split(',').map(interest => interest.trim());
        
        // Exact match query
        const exactMatchQuery = `
            SELECT u.first_name, u.last_name
            FROM users u
            JOIN profiles p ON u.id = p.user_id
            WHERE p.location = $1
        `;
        
        // Execute exact match query
        const exactMatchResults = await client.query(exactMatchQuery, [destination]);
        
        if (exactMatchResults.rows.length >= 3) {
            return exactMatchResults.rows.slice(0, 3).map(row => `${row.first_name} ${row.last_name}`);
        }

        // Similar match query
        const similarMatchQuery = `
            SELECT u.first_name, u.last_name
            FROM users u
            JOIN profiles p ON u.id = p.user_id
            WHERE p.location = $1 AND (
                ${interestsArray.map((_, idx) => `p.interests ILIKE $${idx + 2}`).join(' OR ')}
            )
            LIMIT 3
        `;
        
        const queryParams = [destination, ...interestsArray.map(interest => `%${interest}%`)];
        
        // Execute similar match query
        const similarMatchResults = await client.query(similarMatchQuery, queryParams);
        
        return similarMatchResults.rows.map(row => `${row.first_name} ${row.last_name}`);
    } finally {
        client.release();
    }
}

module.exports = { matchUsers };
