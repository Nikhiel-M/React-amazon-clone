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

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("hello world"));

// listen command\
exports.api = functions.https.onRequest(app);
