const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const devDao = {
    ...daoCommon,
    create: (req, res) => {
        //check for blank data
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else if (!req.body.devName) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.query(`INSERT INTO dev SET ${fields.join('=?, ')} = ?`,
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
    }
}

module.exports = devDao;