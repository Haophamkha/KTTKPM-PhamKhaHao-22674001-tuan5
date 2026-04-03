const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "db", 
  user: "user",
  password: "password",
  database: "mydb",
});

db.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối MySQL:", err);
    return;
  }
  console.log(" Kết nối MySQL thành công!");
});

app.get("/", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) {
      return res.send("Lỗi query");
    }
    res.send(`Kết quả từ MySQL: ${results[0].result}`);
  });
});

app.listen(3000, () => {
  console.log("Server chạy tại http://localhost:3000");
});
