// const googleClientID = "703642684570-emgui5vktbijel6ce1k05i5tnkfvdspi.apps.googleusercontent.com";
// const googleClientSecret = "c6Awm4-8dfuTJ9uY433qt5U6";
// const mongodbURL = "mongodb+srv://admin:tu4tj7qR0wLdMfzT@emailify.o9pj0.mongodb.net/emailify-db?retryWrites=true&w=majority";
// const cookieKey = "asdfasdfas" 

const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const mongodbURL = process.env.MONGO_URL;
const cookieKey = process.env.COOKIE_KEY; 
const googleRedirectURL = 'https://desolate-sands-73666.herokuapp.com'

module.exports = {
    googleClientID: googleClientID,
    googleClientSecret: googleClientSecret,
    mongodbURL: mongodbURL,
    cookieKey,
    googleRedirectURL
}