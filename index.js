const http = require("http");
const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
	// This error should crash whole process

	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
const { router } = require("./router");
const { routes } = require("./router");
const { mongoose } = require("./router");
const { PORT } = require("./config");
const port = PORT || parseInt(process.env.PORT, 10);

process.on("uncaughtException", function (err) {
  console.log("uncaughtException");
  console.error(err.stack);
  console.log(err);
});

const server = http.createServer(async (req, res) => {
  await router(req, res, routes);
});

server.listen(port, async () => {
  await mongoose();
  console.log("Connected to database successfully");
  console.log("Server is listening on port " + port);
});
