// app.js
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const bodyParser = require("body-parser");
const routes = require("./routes/toilets");
const cors = require("cors");

const app = express();
app.use(express.json({ limit: "50mb" })); // Use express.json() instead of express()
app.use(cors());
app.use(routes);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Toilet API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const port = 3004; // Correct the port number
app.listen(port, () => console.log(`Server is running on port ${port}`));
