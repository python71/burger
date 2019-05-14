var connection = require('./connection');

// create the methods that will execute the necessary MySQL commands in the controllers. 
//  These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
var orm= {
    selectAll: function(tableInput, cb) {
        let dbQuery = `SELECT * FROM ${tableInput};`
        connection.query(dbQuery, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        })
    },

// insertOne()
    insertOne: function(tableInput, val, cb) {
        let dbQuery = `INSERT INTO ${tableInput} (burger_name) VALUES ('${val}');`
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },

// updateOne()
    updateOne: function(tableInput, id, cb){
        let dbQuery = `UPDATE ${tableInput} SET devoured=true WHERE ID=${id};`
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res)
        })
    },

    deleteOne: function(tableInput, id, cb) {
        let dbQuery = `DELETE FROM ${tableInput} WHERE ID=${id};`
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    }
}









module.exports = orm;