// const pool = require('../config/connection');
const {
  pool
} = require('../config/connection');
require('dotenv').config();

async function index(req, res) {
   res.render('map', {
     title: 'WebGis'
   })
}

module.exports.index = index;

async function polygon(req, res) {
  let polygons = `SELECT 
    row_to_json(fc) 
    FROM ( 
      SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features 
      FROM (
        SELECT 'Feature'
        As type, ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((id, name, deskripsi, luas_area)) As properties
        FROM polygon As lg
        UNION ALL
        SELECT 'Feature'
        As type, ST_AsGeoJSON(ln.geom)::json As geometry, row_to_json((id, name, deskripsi, panjang_garis)) As properties
        FROM line As ln
        UNION ALL
        SELECT 'Feature'
        As type, ST_AsGeoJSON(p.geom)::json As geometry, row_to_json((id, name)) As properties
        FROM point As p
      ) As f
    ) As fc`;
  pool.query(polygons, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports.polygon = polygon;