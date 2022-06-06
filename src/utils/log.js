const { DateTime } = require("luxon");

exports.request = (path) => {
  const dt = DateTime.now();
  return console.info(
    "\x1b[96m%s\x1b[0m",
    `[REQUEST: ${path}] => ${dt.toISO()}`
  );
};

exports.error = (path, statusCode) => {
  const dt = DateTime.now();
  return console.error(
    "\x1b[91m%s\x1b[0m",
    `[REQUEST-ERROR: ${path}, STATUS-CODE:${statusCode} ] => ${dt.toISO()}`
  );
};

exports.serverRun = (port) => {
  let message = `Server running on port ${port}`;

  const serverLog = () => {
    console.log("\x1b[93m%s\x1b[0m", message);
  };

  return serverLog;
};
