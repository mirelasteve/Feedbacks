module.exports = {
    googleClientId:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookieKey:process.env.COOKIE_KEY,
    googleRedirectURI:"https://infinite-hamlet-55883.herokuapp.com/auth/google/callback",
    linkedinClientId:"777lb8fxfrselh",
    linkedinClientSecret:"XJeYLGd2Yx713EBL",
    githubClientId:"Iv1.813b5b2f78975a9c",
    githubClientSecret:"22a4874d893fa3ac2e454ccf1d3338ff3866b6ac",
    stripePublishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey:process.env.STRIPE_SECRET_KEY,
    sendGridKey:process.env.SEND_GRID_KEY,
    redirectDomain:process.env.REDIRECT_DOMAIN,
    fromEmailSendGrid:'soon@be.added'
}