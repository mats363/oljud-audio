import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: '2022-11-15'});

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const {quantity} = req.body
    if (req.method === "POST"){
      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{price: 'price_1MRu7QFvMnspOIIU6CsSZso8', quantity: 1}],
          mode: 'payment',
          success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`, // Replace with download link from sendOwl
          cancel_url: `${req.headers.origin}/cart`, // Fix this to go to cart
      })
      res.status(200).json({sessionId: session.id})
      } catch (error: any) {
        res.status(500).json({statusCode: 500, message: error.message})
      }
    } else {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
    }
   
}