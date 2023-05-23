// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

import * as firebaseJSONData from './firebase-config.json';
import {FirebaseOptions} from '@firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebaseJSONData as FirebaseOptions;

export function initFirebase(): void {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // TODO: Do we need?
  // const analytics = getAnalytics(app);
}
