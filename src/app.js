const express = require("express");
const swaggerUi = require("swagger-ui-express");
YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();
const port = process.env.port || 5000;
//Constants
const { API_ROUTE } = require("./constants");
//Data
const {
  MOCK_FB_DATA,
  MOCK_LN_DATA,
  MOCK_IN_DATA,
  MOCK_COURSE_DATA,
} = require("./data");

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res, next) => {
  res.send("API v1");
});

app.get(`${API_ROUTE}/facebook`, (req, res, next) => {
  res.status(200).json(MOCK_FB_DATA);
});

app.get(`${API_ROUTE}/instagram`, (req, res, next) => {
  res.status(200).json(MOCK_IN_DATA);
});

app.get(`${API_ROUTE}/linkedin`, (req, res, next) => {
  res.status(200).json(MOCK_LN_DATA);
});

app.post(`${API_ROUTE}/course`, (req, res, next) => {
  const course = req.body;

  MOCK_COURSE_DATA.push(course);

  res.status(200).json(MOCK_COURSE_DATA);
});

app.get(`${API_ROUTE}/:id`, (req, res, next) => {
  const param = req.params.id;
  res.status(200).json(param);
});

app.get(`/*`, (req, res, next) => {
  res.status(400).send("Route not supported");
});

app.listen(port, () => console.log("Listening to port:", port));
