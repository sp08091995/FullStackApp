import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux';
import * as actions from '../actions'

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                amount={50000}
                currency= 'inr'
                name="Emailify"
                description="500 for 250 email credits"
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments)