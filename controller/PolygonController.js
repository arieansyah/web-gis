const {
    pool
} = require('../config/connection');

require('dotenv').config();

async function create(req, res) {
    let result = {
        success: false
    }

    let featureParse = JSON.parse(req.body.geom)

    var query = `INSERT INTO polygon (name, geom, luas_area, deskripsi) 
                VALUES (
                    '${req.body.name}', 
                    ST_GeomFromGeoJSON('${JSON.stringify(featureParse.features[0].geometry)}'),
                    0,
                    '${req.body.deskripsi}');`

    await pool.query(query)
        .then(validate => {
            result.success = true
            result.msg = "berhasil"
            res.json(result)
        }).catch(err => {
            console.log(err);
            result.msg = err.message
            res.json(result)
        })

    let update_polygon = `UPDATE polygon SET luas_area = ST_Area(geom::geography);`
    pool.query(update_polygon)
        .then(level => {
            result.success = true
            result.msg = 'Update Data success'
            res.json(result)
        })
        .catch(err => {
            console.log(err);
            result.msg = err.message
            res.json(result)
        })
}

module.exports.create = create;