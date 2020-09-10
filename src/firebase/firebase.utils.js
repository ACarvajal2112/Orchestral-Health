import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBrKfhnyYAnEIBgF_3r24mYfd7S2ngNBvE",
  authDomain: "orchestral-health.firebaseapp.com",
  databaseURL: "https://orchestral-health.firebaseio.com",
  projectId: "orchestral-health",
  storageBucket: "orchestral-health.appspot.com",
  messagingSenderId: "150641349999",
  appId: "1:150641349999:web:deb18e3a57d92d8076849a",
  measurementId: "G-S48NGMPEG8"
};


export const createUserDocument = async (userAuth, additionalData) => {
  // only store user in DB if userAuth object is returned - user signed in
  if (!userAuth) return;
  // user ID from userAuth to retrieve user docRef
  const userDocRef = firestore.doc(`users/${userAuth.uid}`);
  // use docRef to query for snapshot
  const userSnapshot = await userDocRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const dateCreated = new Date();
    try {
      await userDocRef.set({
        displayName,
        email,
        dateCreated,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user ... ', error);
    }
  }
  return userDocRef;
};

export const convertDirectorySnapshotToMap = directorySnap => 
  directorySnap.docs.map(doc => {
    const { title, imgUrl } = doc.data();
    return {
      id: doc.id,
      urlLink: encodeURI(title.toLowerCase()),
      title,
      imgUrl
    };
  });

export const convertShopSnapshotToMap = collectionSnap => 
  collectionSnap.docs.reduce((accumulatedShopMap, shopDoc) => {
    const { title, instruments } = shopDoc.data();
    accumulatedShopMap[title] = {
      id: shopDoc.id,
      title,
      instruments
    };
    return accumulatedShopMap;
  }, {});

export const convertLessonSnapshotToMap = lessonSnap => 
  lessonSnap.docs.reduce((accumulatedLessonMap, lessonDoc) => {
    const { title, instructor } = lessonDoc.data();
    accumulatedLessonMap[title] = {
      id: lessonDoc.id,
      title,
      instructor
    };
    return accumulatedLessonMap;
  }, {});

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utility using Google provider object
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// trigger Google popup whenever auth provider is used for sign-in
googleProvider.setCustomParameters({ prompt: 'select_account' });
// constant to trigger Google sign-in popup window
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
