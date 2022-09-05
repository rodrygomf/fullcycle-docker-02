const express = require("express");
const mysql = require("mysql");
const Moniker = require("moniker");

const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  const name = Moniker.choose();
  connection.query(`INSERT INTO people(name) VALUES('${name}')`);
  connection.query("SELECT name FROM people", (error, results, fields) => {
    try {
      if (!error) {
        res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
          ${
            !!results.length
              ? results.map((obj) => `<li>${obj.name}</li>`).join("")
              : ""
          }
        </ol>`);
      } else {
        res.send(`Deu erro: ${error}`);
      }
    } catch (err) {
      console.log("ERROR: ", err);
    }
  });
});

app.listen(port, () => {
  console.info(`Rodando na porta ${port}`);
});
