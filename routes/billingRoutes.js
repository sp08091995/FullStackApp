const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

/**
 * bodyParser helps get the data from the request payload
 */
var customer = {
    name: 'Jenny Rosen',
    address: {
        line1: '510 Townsend St',
        postal_code: '786001',
        city: 'Dibrugarh',
        state: 'Assam',
        country: 'India',
    }
}

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        try {
            const charge = await stripe.charges.create({
                amount: 50000,
                currency: 'inr',
                description: '500 for 250 credits',
                source: req.body.id,
                shipping: customer
            })

            req.user.credits += 250
            const user = await req.user.save();
            res.send(user);
        } catch (e) {
            console.log(e)
        }
    })
}