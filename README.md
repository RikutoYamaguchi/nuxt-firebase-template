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

### 3. Set project id

`.firebaserc`

```
{
  "projects": {
    "default": "your project id"
  }
}
```

### 4. Get firebase ci token

```
firebase login:ci
```

※ Copy generated token.

### 5. Set github secret

`Setting` > `Secrets` > `New Secret`

- Name: FIREBASE_TOKEN
- Value: Paste your ci token

### 6. First time deployment from local

```
firebase deploy
```
