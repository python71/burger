var orm = require("../config/orm.js");

// // create the code that will call the ORM functions using 
// // burger specific input for the ORM.
var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        })
    },

    insertOne: function(name, cb) {
        orm.insertOne('burgers', name, cb, function(res) {
            cb(res);
        })
    },

    updateOne: function(id, cb) {
        orm.updateOne('burgers', id, cb, function(res) {
            cb(res);
        })
    },

    deleteOne: function(id, cb) {
        orm.deleteOne('burgers', id, cb)
    }
}

module.exports = burger;