require("../config");

const db = require("../libs/db");
db.connect().then(async () => {
  const { server } = require("../app");

  server.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port " + server.address().port);
  });
});
