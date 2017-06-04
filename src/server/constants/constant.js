/**
 * Created by sourabh on 4/5/17.
 */

exports.CLIENT_ID = '1083765941334-4ab177qpbevtu4ds2ggk8p87a0l11toe.apps.googleusercontent.com';
exports.CLIENT_SECRET = 'Yy7kviJI_L6pcWd_WBvmPYCv';

exports.CALLBACK_URL = process.env.NODE_ENV === 'development'
    ?  'http://localhost:3000/oauth2callback'
    :  'https://limitless-garden-41467.herokuapp.com/oauth2callback';
