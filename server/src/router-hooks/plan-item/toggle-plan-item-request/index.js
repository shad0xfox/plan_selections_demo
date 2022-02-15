const validateRequestPayload = require("./validate-request-payload");

exports.before = [validateRequestPayload];
