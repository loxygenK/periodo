import firebase from "firebase";

const api_key = process.env.FIREBASE_API_KEY;
const project_id = process.env.FIREBASE_PROJECT_ID;
const sender_id = process.env.FIREBASE_SENDER_ID;
const app_id = process.env.FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: api_key,
  authDomain: `${project_id}.firebaseapp.com`,
  databaseURL: `https://${project_id}-default-rtdb.firebaseio.com`,
  projectId: project_id,
  storageBucket: `${project_id}.appspot.com`,
  messagingSenderId: sender_id,
  appId: app_id
};

firebase.initializeApp(firebaseConfig)