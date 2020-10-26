import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCg__aHt3b7f0K0Vcfmbz9tojIQALEDrOs',
  authDomain: 'vue-slack-aa41d.firebaseapp.com',
  databaseURL: 'https://vue-slack-aa41d.firebaseio.com',
  projectId: 'vue-slack-aa41d',
  storageBucket: 'vue-slack-aa41d.appspot.com',
  messagingSenderId: '207028041940',
  appId: '1:207028041940:web:42cf835541f03139e2a341',
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export default firebase
