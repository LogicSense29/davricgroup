const http = require("http");
const next = require("next");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

// cPanel Passenger provides the port internally
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  http.createServer((req, res) => {
    handle(req, res);
  }).listen(port);
});