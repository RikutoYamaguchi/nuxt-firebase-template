# nuxt-firebase-template

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Firebase Setup

### 1. Install firebase cli

https://firebase.google.com/docs/cli?hl=ja

### 2. Create firebase project and upgrade plan to "Blaze"

### 3. Get firebase ci token

```
firebase login:ci
```

※ Copy generated token.

### 4. Set github secrets

`Setting` > `Secrets` > `New Secret`

- Name: FIREBASE_TOKEN
- Value: Paste your ci token

- Name: FIREBASE_PROJECT_ID
- Value: Your project id

### 5. First time deployment from local

```
firebase use {your_project_id}
firebase deploy
```

## Change Basic auth user and password

`./functions/index.js`

```
app.all(
  '/*',
  basicAuth(
    (user, password) =>
      user === 'basic_auth_user' && password === 'basic_auth_password'
  )
)
```

Change `'basic_auth_user'` and `'basic_auth_password'`
