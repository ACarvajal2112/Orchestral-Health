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

export const convertLessonSnapshotToMap = lessonSnap => {
  const lessonDataMap = {};
  lessonSnap.docs.forEach(lessonDoc => {

    const { title } = lessonDoc.data();

    lessonDataMap[title] = {
      id: lessonDoc.id,
      title,
      instructor: {}
    }

    lessonDoc.ref
      .collection('instructor')
      .get()
      .then(instructorSnap => {
        instructorSnap.docs.forEach(instructorDoc => {
          const { name, description, imgUrl } = instructorDoc.data();
          lessonDataMap[title].instructor = {
            id: instructorDoc.id,
            name, 
            description, 
            imgUrl,
            availabilities: []
          };

          instructorDoc.ref
            .collection('availabilities')
            .get()
            .then(availabilitiesSnap => {
              availabilitiesSnap.docs.forEach(availabilityDoc => {
                const { day, times } = availabilityDoc.data();
                lessonDataMap[title].instructor.availabilities.push({
                  id: availabilityDoc.id,
                  day,
                  times
                });
              })
            })
        })
      });
  });
  return lessonDataMap;
};

export const convertShopSnapshotToMap = collectionSnap => {
  const shopDataMap = {};
  collectionSnap.docs.forEach(shopDoc => {

    const { title } = shopDoc.data();

    shopDataMap[title] = {
      id: shopDoc.id,
      title,
      instruments: []
    };

    /* use current 'shop' collection reference to query nested 'instruments' collection,
       add each instrument doc to instruments array */
    shopDoc.ref
      .collection('instruments')
      .get()
      .then((querySnapshot) => 
        querySnapshot.docs.forEach(instrumentsDoc => {
          const { name, imgUrl, items } = instrumentsDoc.data();
          shopDataMap[title].instruments.push({
            id: instrumentsDoc.id,
            name,
            imgUrl,
            items
          })
        })
      );
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
