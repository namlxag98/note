import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA-AnGCqXV_f0_9xhbmI_OLNYeLfbWF-cg",
    authDomain: "notereact-9c59c.firebaseapp.com",
    databaseURL: "https://notereact-9c59c.firebaseio.com",
    projectId: "notereact-9c59c",
    storageBucket: "notereact-9c59c.appspot.com",
    messagingSenderId: "479690070630",
    appId: "1:479690070630:web:52ce5a2c3e351af8ef2ba7",
    measurementId: "G-HMR337LZJT"
  };
  firebase.initializeApp(firebaseConfig);
  export const noteData = firebase.database().ref();