import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyByRxo9NNxY43IzAMyMkHdXn6j1duNCkTc",
authDomain: "todoapp-react-4fc03.firebaseapp.com",
projectId: "todoapp-react-4fc03",
storageBucket: "todoapp-react-4fc03.appspot.com",
messagingSenderId: "1032610893001",
appId: "1:1032610893001:web:c6dafb177b8a0275691118"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export { db }