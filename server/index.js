const express = require("express");
const debug = require("debug")("server");

const cors = require("cors");

const app = express();
const port = process.env.SERVER_PORT || 3001;


app.use(cors({
	origin: "http://localhost:4200", //redirect calls here
	methods: "GET"
	})
);


/*
app.use(function(req,res,next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-type,Accept"
	);
	next();
});

*/

app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Hello, World"
  });
});

app.listen(port, () => debug(`Listening on port ${port}`));
