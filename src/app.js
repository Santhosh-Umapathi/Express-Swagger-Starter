const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const app = express();
const port = process.env.port || 5000;
//Constants
const { API_ROUTE } = require("./constants");
//Data
const { MOCK_FB_DATA, MOCK_LN_DATA, MOCK_IN_DATA } = require("./data");

app.get("/", (req, res, next) => {
  res.send("API v1");
});

app.get(`${API_ROUTE}/facebook`, (req, res, next) => {
  res.status(200).send(MOCK_FB_DATA);
});

app.get(`${API_ROUTE}/instagram`, (req, res, next) => {
  res.status(200).send(MOCK_IN_DATA);
});

app.get(`${API_ROUTE}/linkedin`, (req, res, next) => {
  res.status(200).send(MOCK_LN_DATA);
});

app.get(`${API_ROUTE}/:id`, (req, res, next) => {
  const param = req.params.id;
  res.status(200).send(param);
});

app.listen(port, () => console.log("Listening to port:", port));
