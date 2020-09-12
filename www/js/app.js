// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }

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
    var ref1 = database1.ref();
    ref1.once("value")
      .then(function(snapshot) {
        console.log("first database", snapshot.val());
      })

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
    var ref2 = database2.ref();
    ref2.once("value")
      .then(function(snapshot) {
        console.log("second database", snapshot.val());
      })
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
