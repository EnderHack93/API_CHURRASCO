const { Client } = require("pg");

async function client() {
  const cliente = new Client({
    user: "postgres",
    host: "containers-us-west-131.railway.app",
    database: "railway",
    password: "8Ti8ShEyb74nEBbEej6c",
    port: 6464,
  });
}

export { client };
