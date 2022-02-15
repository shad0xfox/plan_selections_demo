const cors = require("cors");
const corsOptions = require("./config/cors.json");
const express = require("express");
const helmet = require("helmet");
const http = require("http");

const isProduction = process.env.NODE_ENV === "production";
const app = express();
const server = http.createServer(app);

app.use(require("morgan")("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));

app.use(require("./routes"));

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function (err, req, res, next) {
    if (err.stack) {
      console.log(err.stack);
    }

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

module.exports = { server };
