importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAgQjbjPBvf8kZxtG-1hiitsyOHKLVyyos",
  authDomain: "midi-trio.firebaseapp.com",
  databaseURL: "https://midi-trio.firebaseio.com",
  projectId: "midi-trio",
  storageBucket: "midi-trio.appspot.com",
  messagingSenderId: "260185012851",
  appId: "1:260185012851:web:c9409a57dbe41686728806",
  measurementId: "G-NYJX024NVE"
  })

const initMessaging = firebase.messaging()