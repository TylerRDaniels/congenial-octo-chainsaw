const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const appDao = {
    ...daoCommon,
    create: (req, res) => {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else if (!req.body.f_name || !req.body.email) {
            console.log(req.body)
            res.json({
                "error": true,
                "message": "insufecient data"
                
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.query(`INSERT INTO app SET ${fields.join(' = ?, ')} = ?`,
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

    update: (req, res) => {
        const fields = Object.keys(req.body)
        const values = Object.values(req.body)
        
        con.query(`UPDATE app SET ${fields.join(' = ?, ')} = ? WHERE app_id = ${req.body.app_id}`,
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

module.exports = appDao;