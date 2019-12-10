/**
 * *** NOTE ON IMPORTING FROM ANGULAR AND NGUNIVERSAL IN THIS FILE ***
 *
 * If your application uses third-party dependencies, you'll need to
 * either use Webpack or the Angular CLI's `bundleDependencies` feature
 * in order to adequately package them for use on the server without a
 * node_modules directory.
 *
 * However, due to the nature of the CLI's `bundleDependencies`, importing
 * Angular in this file will create a different instance of Angular than
 * the version in the compiled application code. This leads to unavoidable
 * conflicts. Therefore, please do not explicitly import from @angular or
 * @nguniversal in this file. You can export any needed resources
 * from your application's main.server.ts file, as seen below with the
 * import for `ngExpressEngine`.
 */

import 'zone.js/dist/zone-node';

import * as express from 'express';
import * as http from 'http';
import * as https from 'https';
import { join } from 'path';
import { environment } from './src/environments/environment';
import * as fs from 'fs';

const env = environment;

let credentials = null;

try {
  if (fs.existsSync(env.certificate.key)) {
    credentials = {
      key: fs.readFileSync(env.certificate.key),
      cert: fs.readFileSync(env.certificate.cert),
      minVersion: 'TLSv1.2',
      maxVersion: 'TLSv1.3'
    };
  } else {
    console.log(`Could not read file at ${ env.certificate.key }`);
  }
} catch (err) {
  console.error(err.message);
}




// Express server
const app = express();
console.log(env.port);
console.log(env.production);
const PORT = process.env.PORT || env.port;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

/*// All regular routes use the Universal engine
app.get('/', (req, res) => {
  res.render('index', { req });
});

// All regular routes use the Universal engine
app.get('/#/!*', (req, res) => {
  res.render('index', { req });
});

// All regular routes use the Universal engine
app.get('/!*', (req, res) => {
  let newUrl = '';
  if (req.secure) {
    newUrl += 'https://';
  } else {
    newUrl += 'http://';
  }

  newUrl += `${ req.get('host') }/#${ req.originalUrl }`;

  res.writeHead(302, {
    Location: newUrl
  });
  res.end();
});*/


// TODO: Check for production environment. FileReplacement in angular.json is not switching to production environment during build.
if ( credentials !== null) {
  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(PORT, () => {
    console.log(`Node Express server listening on port ${ PORT }`);
  });
} else {
  const httpServer = http.createServer(app);
  httpServer.listen(PORT, () => {
    console.log(`Node Express server listening on port ${ PORT }`);
  });
}
