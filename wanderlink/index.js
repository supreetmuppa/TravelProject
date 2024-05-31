const { auth, db, collection, getDocs, setDoc, doc } = require('./firebase')

// Example function using Firestore
async function fetchCollection() {
  const querySnapshot = await getDocs(collection(db, 'your-collection'))
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  })
}

fetchCollection()
