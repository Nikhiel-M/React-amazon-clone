// import { onRequest } from "firebase-functions/v2/https";
// import logger from "firebase-functions/logger";

import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import Stripe from "stripe";


// Initialize Stripe
const stripe = Stripe(
  "sk_test_51QYP2IL8UBTHhdB9As3M4YktmA9mFafmK1BorpkHuIVCizxzQtpjtdyF5kYIv0rttV6pXcgVT7dCkikiKfX2w4Jd00FSOe3PcY"
);

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello world"));

// Example endpoint (optional)
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Subunits of the currency (e.g., cents)
    currency: "usd",
  });

  // Send back the client secret for client-side confirmation
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Exports
exports.api = functions.https.onRequest(app);
