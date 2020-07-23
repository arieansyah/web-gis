const {
  pool
} = require('../config/connection');
require('dotenv').config();

module.exports = {
  create: async function (req, res) {
    let result = {
      success: false,
      msg: '',
      level: null
    }

    let extension = 'CREATE EXTENSION postgis;'
    await pool.query(extension);

    let polygon = 'CREATE TABLE polygon (id SERIAL,' +
      'name VARCHAR,' +
      'geom GEOMETRY,' +
      'luas_area REAL,' +
      'deskripsi TEXT,' +
      'PRIMARY KEY(id));'

    pool.query(polygon)
      .then(level => {
        result.success = true
        result.msg = 'Create table success'
        result.level = level
        res.json(result)
      })
      .catch(err => {
        console.log(err);
        result.msg = err.message
        res.json(result)
      });

    let line = 'CREATE TABLE line (id SERIAL,' +
      'name VARCHAR,' +
      'geom GEOMETRY,' +
      'panjang_garis REAL,' +
      'deskripsi TEXT,' +
      'PRIMARY KEY(id));'

    pool.query(line)
      .then(level => {
        result.success = true
        result.msg = 'Create table success'
        result.level = level
        res.json(result)
      })
      .catch(err => {
        console.log(err);
        result.msg = err.message
        res.json(result)
      });

    let point = 'CREATE TABLE point (id SERIAL,' +
      'name VARCHAR,' +
      'geom GEOMETRY,' +
      'PRIMARY KEY(id));'

    pool.query(point)
      .then(level => {
        result.success = true
        result.msg = 'Create table success'
        result.level = level
        res.json(result)
      })
      .catch(err => {
        console.log(err);
        result.msg = err.message
        res.json(result)
      });
  },
}