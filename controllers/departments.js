// const mysql2 = require('mysql2');
// const pool = require('../connections');
// needs handleSQLError require

const getDepartments = (req, res) => {
    pool.query('SELECT * FROM employees JOIN departments', (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 
// module.exports = {
    // getDepartments

// };