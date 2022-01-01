import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyDv4FrBz3epmojjSRjQliRMesvcZ5ACluY',
    authDomain: 'e-comic-3ab73.firebaseapp.com',
    projectId: 'e-comic-3ab73',
    storageBucket: 'e-comic-3ab73.appspot.com',
    messagingSenderId: '372789809170',
    appId: '1:372789809170:web:1c1f11dbc767a8c4b3c8cb',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
