const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const consoleDao = {
    ...daoCommon,
    create: (req, res)=> {
        //check for blank data
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else if (!req.body.console || !req.body.itemDesc || !req.body.platform) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.query(`INSERT INTO console SET ${fields.join('=?, ')} = ?`,
            values,
            (error, dbres) => {
                if (!error) {
                    res.json({Last_id: dbres.insetId})
                } else {
                    console.log(`dao error ${error}`)
                    res.send("Error")
                }
            })
        }
    },

    update: (req, res) => {
        const fields = Object.keys(req.body)
        const values = Object.values(req.body)
        
        con.query(`UPDATE console SET ${fields.join(' = ?, ')} = ? WHERE console_id = ${req.body.console_id}`,
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

module.exports = consoleDao;