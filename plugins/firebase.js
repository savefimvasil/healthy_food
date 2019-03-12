import firebase from 'firebase'
import 'firebase/firestore' //if use firestore

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDyeRhFnD4W89oqb4gmKojnI4yxFOByTas",
    authDomain: "ski-rent-images.firebaseapp.com",
    databaseURL: "https://ski-rent-images.firebaseio.com",
    projectId: "ski-rent-images",
    storageBucket: "ski-rent-images.appspot.com",
    messagingSenderId: "539948275039"
  })
}

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()
const storage = firebase.storage() //if use storage

export { storage, db }
