# node-express-4-passport-github

This project is a simple solution to use [Express](http://expressjs.com/) 4.x and
[Passport](http://passportjs.org/) to authenticate users using github. 

Make sure to configure the mongodb uri on gh-auth.js

## First things

- go to [https://github.com/settings/applications/new](https://github.com/settings/applications/new).
- choose a name
- use [http://127.0.0.1:5045](http://127.0.0.1:5045) as Homepage URL
- Give a description(optional), though this will be displayed to all users
  of your application.
- authorization callback URL will be [http://127.0.0.1:5045/auth/github/callback](http://127.0.0.1:5045/auth/github/callback)
- click on register application and the app is sha-pra-pra!

## Running The APP

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd AUTH-GITHUB
$ npm install
$ npm start
```

Your app should now be running on [localhost:5054](http://localhost:5054/).

I will try to update this readme... hope you have an idea how it works when you
see the code. Especially my use of the handlebars templating engine.

Also note that the node engine I used for this project is Node 6, you will see the
Version on the package.json file.

For now you can only get the user email and name. I'm working on getting the repos as well.