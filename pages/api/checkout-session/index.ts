import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {apiVersion: '2022-11-15'});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const items = req.body.items; // ?
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/checkout`,
    line_items: [
      {price: 'price_1MRu7QFvMnspOIIU6CsSZso8', quantity: 1}, // Hämta pris från API
    ],
    mode: 'payment',
  });
}
