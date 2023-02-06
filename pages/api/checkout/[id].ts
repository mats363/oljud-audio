import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: '2022-11-15'});

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const {id} = req.query
    const sessionId = await stripe.checkout.sessions.retrieve(id as string, {expand: ['payment_intent']})
    res.status(200).json({sessionId})
  } catch (error) {
    console.log(error)
  }
    
}

// import { NextApiRequest, NextApiResponse } from 'next'

// import Stripe from 'stripe'
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2022-11-15',
// })

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const id: string = req.query.id as string
//   try {
//     if (!id.startsWith('cs_')) {
//       throw Error('Incorrect CheckoutSession ID.')
//     }
//     const checkout_session: Stripe.Checkout.Session =
//       await stripe.checkout.sessions.retrieve(id, {
//         expand: ['payment_intent'],
//       })
//       console.log(checkout_session)

//     res.status(200).json(checkout_session)
//   } catch (err) {
//     const errorMessage =
//       err instanceof Error ? err.message : 'Internal server error'
//     res.status(500).json({ statusCode: 500, message: errorMessage })
//   }
// }

