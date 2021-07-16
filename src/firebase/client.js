import firebase from 'firebase/app'
import 'firebase/storage'

const firabaseConfig = {
    apiKey: "AIzaSyCWZOAsqWpG6UfpfCOrwLeKLmdnedCaoRQ",
    authDomain: "mzmenudigital.firebaseapp.com",
    projectId: "mzmenudigital",
    storageBucket: "mzmenudigital.appspot.com",
    messagingSenderId: "616924147399",
    appId: "1:616924147399:web:76551b6af4b52a099fd8e2",
    measurementId: "G-FFQ34HRZ08"
}

!firebase.apps.length && firebase.initializeApp(firabaseConfig)

export const uploadImg = (file) => {
    const ref = firebase.storage().ref(`image/${file.name}`)
    const task = ref.put(file)
    return task
}