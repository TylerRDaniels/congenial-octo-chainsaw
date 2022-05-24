const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const reviewsDao = {
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

            con.query(`INSERT INTO review SET ${fields.join(' = ?, ')} = ?`,
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
    }
}

module.exports = reviewsDao;