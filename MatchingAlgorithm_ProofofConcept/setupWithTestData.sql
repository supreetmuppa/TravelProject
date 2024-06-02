CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    interests VARCHAR(255),
    location VARCHAR(255)
);

INSERT INTO users (first_name, last_name) VALUES
    ('John', 'Doe'),
    ('Jane', 'Smith'),
    ('Alice', 'Johnson');


INSERT INTO profiles (user_id, interests, city, country) VALUES
    (1, 'sports,music,travel', 'Paris', 'France'),
    (2, 'music,reading,cooking', 'Mexico City', 'Mexico'),
    (3, 'sports,music,travel', 'Cairo', 'Eqypt');
