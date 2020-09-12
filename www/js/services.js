angular.module('starter.services', [])

.factory('Firebase1', function() {
  var firstConfig = {
    apiKey: "AIzaSyAo5gbVRdIDcUhMGTMhBvD-0SHeYQ7OMOY",
    authDomain: "ionic-test-1-12a34.firebaseapp.com",
    databaseURL: "https://ionic-test-1-12a34.firebaseio.com",
    projectId: "ionic-test-1-12a34",
    storageBucket: "ionic-test-1-12a34.appspot.com",
    messagingSenderId: "126509417004",
    appId: "1:126509417004:web:3198ba03be60a2adafc789"
  };
  // Initialize Firebase
  var firstFirebase = firebase.initializeApp(firstConfig, "first");

  var database1 = firstFirebase.database(firstFirebase);

  return {
    getDB: function() {
      return database1;
    },
  };
})

.factory('Firebase2', function() {
  var secondConfig = {
    apiKey: "AIzaSyBaZgkdt9YQvSzRrCfxf5orAyD-wC052xQ",
    authDomain: "ionic-test-2-5c7c0.firebaseapp.com",
    databaseURL: "https://ionic-test-2-5c7c0.firebaseio.com",
    projectId: "ionic-test-2-5c7c0",
    storageBucket: "ionic-test-2-5c7c0.appspot.com",
    messagingSenderId: "1088836971260",
    appId: "1:1088836971260:web:6af48b916d1e0ac03ec579"
  };
  // Initialize Firebase
  var secondFirebase = firebase.initializeApp(secondConfig, "second");

  var database2 = secondFirebase.database(secondFirebase);

  return {
    getDB: function() {
      return database2;
    },
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
