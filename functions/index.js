
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51QYP2IL8UBTHhdB9As3M4YktmA9mFafmK1BorpkHuIVCizxzQtpjtdyF5kYIv0rttV6pXcgVT7dCkikiKfX2w4Jd00FSOe3PcY")


// -API-


// -APP Config
const app = express()

// -Middlewares
app.use(cors({origin: true}))
app.use(express.json())
 

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('Payment Request Received for this amount >>> ', total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

// -Api Routes
app.get('/', (req, res) => res.status(200).send('Hello World'))

// -Listen Command
exports.api = functions.https.onRequest(app)
