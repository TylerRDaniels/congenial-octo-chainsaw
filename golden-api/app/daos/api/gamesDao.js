const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const gamesDao = {
    ...daoCommon,
    create: (req, res) => {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else if (!req.body.title || !req.body.itemDesc) {
            console.log(req.body)
            res.json({
                "error": true,
                "message": "insufecient data"
                
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.query(`INSERT INTO games SET ${fields.join(' = ?, ')} = ?`,
            values,
            (error, dbres) => {
                if(!error) {
                    res.json({Last_id: dbres.insetId})
                } else {
                    console.log(`dao error ${error}`)
                    res.send("Error")
                }
            })
        }
    },

    findInnerJoin: (res, table)=> {
        con.query(
            `select * from games inner join dev on games.dev_id = dev.dev_id inner join pub on games.pub_id = pub.pub_id inner join console on games.console_id = console.console_id;`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR', error)
                }
            }
        )
    },

    findGameId: (res, table, id)=> {
        con.query(
            `SELECT * FROM ${table} WHERE id=${id}`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`Dao Error ${error}`)
                }
            }
        )
    },

    findGamePrice: (res, table, price, id)=> {
        con.query(
            `SELECT * FROM ${table} inner join dev on games.dev_id = dev.dev_id inner join pub on games.pub_id = pub.pub_id inner join console on games.console_id = console.console_id WHERE games.price < ${price}`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`Dao Error ${error}`)
                }
            }
        )
    },

    findGameMake: (res, table, platform, id)=> {
        con.query(
            `SELECT * FROM ${table} inner join dev on games.dev_id = dev.dev_id inner join pub on games.pub_id = pub.pub_id inner join console on games.console_id = console.console_id WHERE games.platform = '${platform}'`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`Dao Error ${error}`)
                }
            }
        )
    },

    findGameSystem: (res, table, id)=> {
        con.query(
            `SELECT * FROM ${table} inner join dev on games.dev_id = dev.dev_id inner join pub on games.pub_id = pub.pub_id inner join console on games.console_id = console.console_id WHERE id=${id}`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`Dao Error ${error}`)
                }
            }
        )
    },

    update: (req, res) => {
        const fields = Object.keys(req.body)
        const values = Object.values(req.body)
        
        con.query(`UPDATE games SET ${fields.join(' = ?, ')} = ? WHERE id = ${req.body.id}`,
        values,
        // [req.body.year, req.body.console_id],
        (error, dbres)=> {
            if(!error) {
                res.send(`Changed row(s)`)
            } else {
                console.log(`Dao error ${error}`)
                res.send(`Error updationg record`)
            }
        })
    }
}

module.exports = gamesDao;