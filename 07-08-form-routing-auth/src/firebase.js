import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'XXXXX',
  authDomain: 'livre-react.firebaseapp.com',
  databaseURL: 'https://livre-react.firebaseio.com',
  projectId: 'livre-react',
  storageBucket: 'livre-react.appspot.com',
  messagingSenderId: '258365015870'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}
