function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0)
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0))
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0))
  return dotProduct / (magnitudeA * magnitudeB)
}

function getUserVector(user) {
  // Convert user interests into a binary vector
  const allInterests = ['hiking', 'swimming', 'reading', 'cooking', 'traveling']
  return allInterests.map((interest) => (user.interests.includes(interest) ? 1 : 0))
}

async function matchUsers(users, currentUser) {
  const currentUserVector = getUserVector(currentUser)
  return users
    .map((user) => ({
      user,
      score: cosineSimilarity(currentUserVector, getUserVector(user))
    }))
    .sort((a, b) => b.score - a.score)
}

export { matchUsers }
