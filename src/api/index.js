import firebase from '../configureFirebase';

export const db = firebase.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

/*===========================================================
                        USER
=============================================================*/
export const signIn = (email, password) => (
    auth.signInWithEmailAndPassword(email, password)
)

export const forgotPassword = (email) => (
    auth.sendPasswordResetEmail(email)
)

export const createUserAuth = (email, password) => (
    auth.createUserWithEmailAndPassword(email, password)
)

export const createUserFirestore = (data) => (
    db.collection('users').add(data)
)

export const getUserInfoFromFirestore = (email) => (
    db.collection("users").where("email", "==", email).get()
)

export const logoutFirebaseAuth = () => (
    auth.signOut()
)

export const addScoreToUser = (user_id, date, data) => (
    db.collection("users").doc(user_id).collection("scores").doc(date).set(data)
)

export const userScoreRef = (user_id, date) => (
    db.collection("users").doc(user_id).collection("scores").doc(date)
)

export const getResults = (user_id) => (
    db.collection("users").doc(user_id).collection("scores")
)