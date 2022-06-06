module.exports = ({ res, statusCode, body }) => {
  res.writeHead(statusCode);
  res.end(JSON.stringify(body));
};
