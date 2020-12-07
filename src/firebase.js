import firebase from "firebase"

// const firebaseConfig = {
//   apiKey: "AIzaSyDk75anK0FKknLEqYSc0eh8L7MtM9ISCF4",
//   authDomain: "facebook-clone-a5116.firebaseapp.com",
//   databaseURL: "https://facebook-clone-a5116.firebaseio.com",
//   projectId: "facebook-clone-a5116",
//   storageBucket: "facebook-clone-a5116.appspot.com",
//   messagingSenderId: "409930983360",
//   appId: "1:409930983360:web:b794d15b084520842a8a25",
//   measurementId: "G-JMFNRJV732",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDOjmsInYtL9sHsgs3Q1ea9KHViHsTYkEA",
  authDomain: "facebook-90016.firebaseapp.com",
  databaseURL: "https://facebook-90016.firebaseio.com",
  projectId: "facebook-90016",
  storageBucket: "facebook-90016.appspot.com",
  messagingSenderId: "582299919919",
  appId: "1:582299919919:web:afa6c2475951585b7e88da",
  measurementId: "G-Z7XWWVHT9H"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;