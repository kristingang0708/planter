const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'mqtt_user',
  host: '192.168.1.14',
  database: 'planters',
  password: 'P0$tGres',
  port: 5432,
});

const getPlanters = () => {
  return new Promise(function (resolve, reject) {
    pool.query('select * from planter_list;', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const getPlanterLog = () => {
  return new Promise(function (resolve, reject) {
    pool.query('select * from planter_log;', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

module.exports = {
  getPlanters,
  getPlanterLog,
};
