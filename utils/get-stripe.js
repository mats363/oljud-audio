import {loadStripe} from '@stripe/stripe-js'

const getStripe = () => {
  if (!stripePromise) {
    window.stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }
  return window.stripePromise
}

export default getStripe
