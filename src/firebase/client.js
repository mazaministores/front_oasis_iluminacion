import firebase from 'firebase/app'
import 'firebase/storage'

const firabaseConfig = {
    apiKey: "AIzaSyCwZ2P7EFxENlP1ZQFeNOjMI_S6Yr_0af4",
    authDomain: "electrilamp-f53b2.firebaseapp.com",
    projectId: "electrilamp-f53b2",
    storageBucket: "electrilamp-f53b2.appspot.com",
    messagingSenderId: "942454031107",
    appId: "1:942454031107:web:9d858ac83ea66dc3265f36"
}

!firebase.apps.length && firebase.initializeApp(firabaseConfig)

export const uploadImg = (file) => {
    const ref = firebase.storage().ref(`image/${file.name}`)
    const task = ref.put(file)
    return task
}