const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { writeFile } = require("./utils");
const config = require("./config");

class Logger {
  constructor(options) {
    this.app = express();
    this.options = options;
    this.logs = [];
  }

  setup() {
    this.app.use(cors());

    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );

    this.app.post("/", (req, res, next) => {
      this.logs.push(req.body);
      res.sendStatus(201);
    });
  }

  start() {
    this.listener = this.app.listen(config.loggerPort, () => {
      console.log(`Mock Logger listening on port ${config.loggerPort}`);
    });
  }

  async saveAndClose() {
    const filepath = path.resolve(config.buildDir, config.logFilepath);
    console.log("writing - " + filepath);
    const log = `
      window.${config.logInjectionKey} = ${JSON.stringify(this.logs)};
    `;
    await writeFile(filepath, log);
    this.listener.close();
  }
}

module.exports = Logger;
