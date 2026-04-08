const firebaseConfig = {
  apiKey: "AIzaSyBPd22FlD60WSpazp1TPY-X0CkS8RS9W4E",
  authDomain: "moodtrack-64438.firebaseapp.com",
  databaseURL: "https://moodtrack-64438-default-rtdb.firebaseio.com",
  projectId: "moodtrack-64438"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref("registros");