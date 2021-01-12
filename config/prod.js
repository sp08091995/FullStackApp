const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const mongodbURL = process.env.MONGO_URL;
const cookieKey = process.env.COOKIE_KEY; 
const googleRedirectURL = 'https://desolate-sands-73666.herokuapp.com';
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY
const stripeSecretKey = process.env.STRIPE_SECRET_KEY


module.exports = {
    googleClientID: googleClientID,
    googleClientSecret: googleClientSecret,
    mongodbURL: mongodbURL,
    cookieKey,
    googleRedirectURL,
    stripePublishableKey,
    stripeSecretKey
}