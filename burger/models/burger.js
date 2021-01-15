const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res));
    },

    create(name, cb) {
        orm.create('burgers', ['burger_name', 'devoured'], [name, false], cb);
    },

    update(id, cb) {
        const condition = 'id=' + id;
        orm.update('burgers', {devoured: true}, condition, cb);
    },

    delete(id, cb) {
        orm.delete('burgers', condition, (res) => cb(res))
    }
};

module.exports = burger;
