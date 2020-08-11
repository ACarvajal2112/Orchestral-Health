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

export const convertDirectorySnapshotToMap = collectionSnap => {
  const transformedCollection = collectionSnap.docs.map(doc => {
    const { title, imgUrl } = doc.data();

    return {
      id: doc.id,
      urlLink: encodeURI(title.toLowerCase()),
      title,
      imgUrl
    }
  });
  return transformedCollection;
};

export const convertShopSnapshotToMap = collectionSnap => {
  let shopDataMap = {};
  collectionSnap.docs.map(doc => {

    const { title } = doc.data();

    let currentShopObj = {
      id: doc.id,
      title,
      instruments: []
    };

    doc.ref
      .collection('instruments')
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach(doc => {
          const { name, imgUrl, items } = doc.data();
          currentShopObj.instruments.push({
            id: doc.id,
            name,
            imgUrl,
            items
          });
        })
      });
      shopDataMap[title] = currentShopObj;
      return currentShopObj;
    });
    return shopDataMap;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utility using Google provider object
const provider = new firebase.auth.GoogleAuthProvider();
// trigger Google popup whenever auth provider is used for sign-in
provider.setCustomParameters({ prompt: 'select_account' });
// constant to trigger Google sign-in popup window
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
