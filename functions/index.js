
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const stripe = require("stripe")("secreteCode")


// -API-


// -APP Config
const app = express()

// -Middlewares
app.use(cors({origin: true}))
app.use(express.json())

// -Api Routes
app.get('/', (req, res) => res.status(200).send('Hello World'))

// -Listen Command
exports.api = functions.https.onRequest(app)
