import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect, 
    GoogleAuthProvider 
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbIFVgsTDHJaQUD0o0N8u_IRHcyMaJUU0",
    authDomain: "crown-clothing-db-36d3a.firebaseapp.com",
    projectId: "crown-clothing-db-36d3a",
    storageBucket: "crown-clothing-db-36d3a.appspot.com",
    messagingSenderId: "177060047076",
    appId: "1:177060047076:web:04510a9af04ed4283ba4f1"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch (err) {
            console.log('Error creating the user', err.message)
        }
    }

    return userDocRef;
};