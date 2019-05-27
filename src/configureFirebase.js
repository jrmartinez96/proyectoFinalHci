

import firebase from 'firebase/app'; 
import 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCzsSh5CLWTjCxTzvGZhZt7J7t94H8Tdjw",
  authDomain: "proyectofinalhci-12800.firebaseapp.com",
  databaseURL: "https://proyectofinalhci-12800.firebaseio.com",
  projectId: "proyectofinalhci-12800",
  storageBucket: "proyectofinalhci-12800.appspot.com",
  messagingSenderId: "200314688481",
  appId: "1:200314688481:web:6dafe2b1e10c4cf5"
};

firebase.initializeApp(config);

export default firebase;