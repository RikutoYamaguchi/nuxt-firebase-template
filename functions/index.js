const path = require('path')
const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express')
const basicAuth = require('basic-auth-connect')

const app = express()

app.all(
  '/*',
  basicAuth(
    (user, password) =>
      user === 'basic_auth_user' && password === 'basic_auth_password'
  )
)

app.get('/*', (req, res, next) => {
  if (req.path.indexOf('/_nuxt/img/') === 0) {
    res.setHeader('Cache-Control', 'public, max-age=2592000')
    res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString())
  }

  next()
})

app.use(express.static(path.resolve(__dirname, './dist/')))

exports.app = functions.https.onRequest(app)
