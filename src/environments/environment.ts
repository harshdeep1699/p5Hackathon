import { fireBaseKey } from 'private/firebase-key';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBZL_GMrl6kiOprN563KaiaCVVOAiQF0QQ",
  authDomain: "villageecommercesite.firebaseapp.com",
  databaseURL: "https://villageecommercesite.firebaseio.com",
  projectId: "villageecommercesite",
  storageBucket: "villageecommercesite.appspot.com",
  messagingSenderId: "822406741666",
  appId: "1:822406741666:web:d987f0b46d54d6d707e1fb",
  measurementId: "G-QHQZC31BBC"
  }

};
