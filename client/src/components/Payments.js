import React , { Component }from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    // debugger;
    return (
      <StripeCheckout
        name="Emaily📧📧"
        description="$5💰 for 5 Email Credits"
        amount={300}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>

      </StripeCheckout>
    );
  }
}
// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
// console.log('Environment is', process.env.NODE_ENV);
export default Payments;
