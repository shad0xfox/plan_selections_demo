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

if (isProduction) {
  app.use(cors(corsOptions));
} else {
  app.use(
    cors({
      origin: "*",
    })
  );
}
app.use(express.static(__dirname + "/public"));

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
        extra: err.extra,
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
      extra: err.extra,
    },
  });
});

module.exports = { server };
