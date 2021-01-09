// const googleClientID = "34289846488-nbplq9v0rt9q9qsmd0sv1ipvp0jgm1u1.apps.googleusercontent.com";
// const googleClientSecret = "GmXjkYU1OQWnAfEPZSUaicjj";
// const mongodbURL = "mongodb+srv://admin:tu4tj7qR0wLdMfzT@emailify.o9pj0.mongodb.net/emailify-db?retryWrites=true&w=majority";
// const cookieKey = "asdfasdfas" 

const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const mongodbURL = process.env.MONGO_URL;
const cookieKey = process.env.COOKIE_KEY; 

module.exports = {
    googleClientID: googleClientID,
    googleClientSecret: googleClientSecret,
    mongodbURL: mongodbURL,
    cookieKey
}