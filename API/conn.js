const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'mqtt_user',
  host: 'http://192.168.1.14',
  database: 'postgres',
  password: 'P0$tGres',
  port: 5432,
});
