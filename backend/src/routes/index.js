const express = require("express");
const router = express.Router();
const dbQuery = require("../dbQuery");

const connectDB = (req, res, next) => {
  req.connect = require("../db");
  next();
};

router.use("/*", connectDB);

router.post("/get-table-content", async (req, res) => {
  const connect = req.connect;
  const { tableName } = req.body;
  connect.query(dbQuery.selectTable(tableName), function (err, result, fields) {
    if (err) return res.status(400).send(err.message);
    const data = result;
    const schema = connect.config.database;

    connect.query(
      dbQuery.getColumnNameAndType(`'${tableName}'`, `'${schema}'`),
      function (err, result, fields) {
        if (err) return res.status(400).send(err.message);
        return res.send({
          metaData: result,
          rows: data,
        });
      }
    );
  });
});

router.post("/insert-record", async (req, res) => {
  const connect = req.connect;
  const { tableName, data } = req.body;

  connect.query(
    dbQuery.insertRecord(tableName, Object.keys(data), Object.values(data)),

    function (err, result, fields) {
      if (err) return res.status(400).send(err.message);
      return res.send({
        metaData: fields,
        rows: result,
      });
    }
  );
});

module.exports = router;
