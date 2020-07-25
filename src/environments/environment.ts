import { fireBaseKey } from 'private/firebase-key';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDpfRcYz4PngxkVsmcaQDvta_pPQsx_npc",
    authDomain: "p5hackathon.firebaseapp.com",
    databaseURL: "https://p5hackathon.firebaseio.com",
    projectId: "p5hackathon",
    storageBucket: "p5hackathon.appspot.com",
    messagingSenderId: "288070909006",
    appId: "1:288070909006:web:e2c23267932db7a5d7971f"
  }

};
