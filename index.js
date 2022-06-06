const http = require("http");
const routes = require("./src/routes");
const log = require("./src/utils/log");
const PORT = 3000;

const httpServer = http.createServer((req, res) => {
  const { url } = req;
  const { host } = req.headers;

  const urlData = new URL(url, `http://${host}/`);
  let { pathname, searchParams } = urlData;

  const pathData = pathname.split("/");

  let id = null;

  if (pathData.length > 2) {
    pathname = `/${pathData[1]}`;
    id = pathData[2];
  }

  req.queryParams = searchParams;
  req.id = id;

  try {
    if (!routes[pathname]) {
      throw {
        statusCode: 404,
        message: `A rota ${pathname} não existe!`,
      };
    }

    routes[pathname](req, res);
  } catch (error) {
    res.writeHead(error.statusCode || 500);
    res.end(JSON.stringify({ message: error.message || "Server Error" }));
  }
});

httpServer.listen(PORT, log.serverRun(PORT));
