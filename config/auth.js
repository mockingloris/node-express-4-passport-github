// config/auth.js
module.exports = {

    'githubAuth' : {
        'clientID'        : 'YOUR-CLIENT-ID', // your App ID
        'clientSecret'    : 'YOUR-APP-SECRET', // your App Secret
        'callbackURL'     : 'http://127.0.0.1:5045/auth/github/callback',
        'profileFields'   : ['id', 'email', 'name'],
        'userAgent'       : 'your-oauth-app-name' // change this to your github oauth app name.
    }
};
