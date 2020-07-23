const {
    pool
} = require('../config/connection');
require('dotenv').config();

module.exports = {
    create: async function (req, res) {
        let result = {
            success: false,
            msg: '',
        }

        const polygon = [{
                name: 'Apoteker',
                description: 'Farmasi Side',
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            111.63210153579712,
                            -2.6923059408751238
                        ],
                        [
                            111.6328901052475,
                            -2.6916307700987416
                        ],
                        [
                            111.63182258605957,
                            -2.690939523440177
                        ],
                        [
                            111.63151144981384,
                            -2.6913092600737487
                        ],
                        [
                            111.63181185722351,
                            -2.6917325815889663
                        ],
                        [
                            111.63175284862518,
                            -2.691834393070693
                        ],
                        [
                            111.63210153579712,
                            -2.6923059408751238
                        ]
                    ]
                ]
            },
            {
                name: 'IGD',
                description: 'Unit Gawat Darurat',
                type: "Polygon",
                coordinates: [
                    [
                        [
                            111.63044393062592,
                            -2.692142506713575
                        ],
                        [
                            111.63118422031403,
                            -2.6930400547074447
                        ],
                        [
                            111.63127943873405,
                            -2.6929878093945803
                        ],
                        [
                            111.63210153579712,
                            -2.6923112993718608
                        ],
                        [
                            111.63191109895706,
                            -2.692099638733141
                        ],
                        [
                            111.63178235292435,
                            -2.691946921540601
                        ],
                        [
                            111.63174748420715,
                            -2.691831713821288
                        ],
                        [
                            111.63181453943253,
                            -2.691751336336241
                        ],
                        [
                            111.63176357746124,
                            -2.6916388078482805
                        ],
                        [
                            111.63166433572769,
                            -2.6914753735972434
                        ],
                        [
                            111.63160532712936,
                            -2.691394996088712
                        ],
                        [
                            111.6314846277237,
                            -2.6913253355770124
                        ],
                        [
                            111.63134515285492,
                            -2.6912905053196803
                        ],
                        [
                            111.63126200437546,
                            -2.6913253355770124
                        ],
                        [
                            111.63111180067061,
                            -2.6914753735972434
                        ],
                        [
                            111.63095891475677,
                            -2.6915691473505245
                        ],
                        [
                            111.63070678710938,
                            -2.6917834873308983
                        ],
                        [
                            111.63044393062592,
                            -2.692142506713575
                        ]
                    ]
                ]
            },
            {
                name: 'Parkir',
                description: 'Parkir Mobil, Motor dll',
                type: "Polygon",
                coordinates: [
                    [
                        [
                            111.63094282150269,
                            -2.6903875975321325
                        ],
                        [
                            111.63013279438019,
                            -2.691202090046572
                        ],
                        [
                            111.63038492202759,
                            -2.69163612859843
                        ],
                        [
                            111.63021326065063,
                            -2.691818317574147
                        ],
                        [
                            111.63043856620789,
                            -2.692118393474767
                        ],
                        [
                            111.63068532943726,
                            -2.6917861665804184
                        ],
                        [
                            111.63082480430603,
                            -2.6916897135941182
                        ],
                        [
                            111.63099378347397,
                            -2.691531637850072
                        ],
                        [
                            111.63107961416245,
                            -2.6914860905979943
                        ],
                        [
                            111.63126736879349,
                            -2.691317297825412
                        ],
                        [
                            111.63134783506393,
                            -2.6912851468184527
                        ],
                        [
                            111.6314497590065,
                            -2.69130390157261
                        ],
                        [
                            111.63150876760483,
                            -2.6913146185748618
                        ],
                        [
                            111.63181453943253,
                            -2.6909475611942706
                        ],
                        [
                            111.63094282150269,
                            -2.6903875975321325
                        ]
                    ]
                ]
            }
        ]

        let query_polygon = '';
        for (let x = 0; x < polygon.length; x++) {
            query_polygon = `INSERT INTO polygon (name, geom, luas_area, deskripsi) 
                                VALUES (
                                    '${polygon[x].name}', 
                                    ST_GeomFromGeoJSON('${JSON.stringify(polygon[x])}'), 
                                    0,
                                    '${polygon[x].description}');`
            await pool.query(query_polygon)
        }

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


        const line = [{
                type: 'LineString',
                coordinates: [
                    [
                        111.63044929504395,
                        -2.692145185962293
                    ],
                    [
                        111.6307121515274,
                        -2.6917861665804184
                    ],
                    [
                        111.63091599941254,
                        -2.6916039775998923
                    ],
                    [
                        111.63111448287964,
                        -2.6914753735972434
                    ],
                    [
                        111.63125932216644,
                        -2.691330694078062
                    ],
                    [
                        111.63135051727295,
                        -2.6912878260690665
                    ],
                    [
                        111.63147926330566,
                        -2.6913253355770124
                    ],
                    [
                        111.63161873817444,
                        -2.6912288825542503
                    ],
                    [
                        111.63170456886292,
                        -2.691062768997156
                    ],
                    [
                        111.63181722164153,
                        -2.6909448819429063
                    ]
                ]
            },
            {
                type: 'LineString',
                coordinates: [
                    [
                        111.63209617137909,
                        -2.6923112993718608
                    ],
                    [
                        111.63188695907593,
                        -2.6920755254934803
                    ],
                    [
                        111.63179039955139,
                        -2.691946921540601
                    ],
                    [
                        111.63174211978912,
                        -2.6918290345718696
                    ],
                    [
                        111.63181185722351,
                        -2.6917486570866576
                    ],
                    [
                        111.63172602653503,
                        -2.6915718266005024
                    ],
                    [
                        111.63160800933838,
                        -2.6914003545894434
                    ],
                    [
                        111.6314846277237,
                        -2.69131997707595
                    ]
                ]
            },
        ]

        let query_line = '';
        for (let i = 0; i < line.length; i++) {
            query_line = `INSERT INTO line (name, geom, panjang_garis, deskripsi) 
                            VALUES (
                                'LineString${i}', 
                                ST_GeomFromGeoJSON('${JSON.stringify(line[i])}'),
                                0,
                                'Nothing');`
            await pool.query(query_line)
        }

        let update_line = `UPDATE line SET panjang_garis = ST_Length(geom::geography);`
        pool.query(update_line)
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

        const point = [
            {
                name: "Apotek",
                type: "Point",
                coordinates: [
                    111.63210153579712,
                    -2.6915771851004577
                ]
            },
            {
                name: "Parkir Motor",
                type: "Point",
                coordinates: [
                    111.63114666938782,
                    -2.690875221405495
                ]
            },
            {
                name: "Gudang",
                type: "Point",
                coordinates: [
                    111.63191914558409,
                    -2.6913735620855306
                ]
            },
            {
                name: "IGD",
                type: "Point",
                coordinates: [
                    111.63136661052704,
                    -2.691518241599649
                ]
            },
            {
                name: "Kamar Mayat",
                type: "Point",
                coordinates: [
                    111.63164556026459,
                    -2.6923005823783743
                ]
            },
            {
                name: "Ruang Perawat",
                type: "Point",
                coordinates: [
                    111.63099646568298,
                    -2.6925685071871266
                ]
            },
            {
                name: "Parkir Mobil",
                type: "Point",
                coordinates: [
                    111.63050293922424,
                    -2.691389637587942
                ]
            },
            {
                name: "Parkir Khusus Pegawai",
                type: "Point",
                coordinates: [
                    111.63105010986327,
                    -2.6913682035846844
                ]
            }
        ]

        let query_point = '';
        for (let i = 0; i < point.length; i++) {
            query_point = `INSERT INTO point (name, geom) 
                            VALUES (
                                '${point[i].name}', 
                                ST_GeomFromGeoJSON('${JSON.stringify(point[i])}'));`
            pool.query(query_point)
                .then(data => {
                    result.success = true
                    result.msg = 'Create Data success'
                    res.json(result)
                })
                .catch(err => {
                    console.log(err);
                    result.msg = err.message
                    res.json(result)
                });
        }
    },
}