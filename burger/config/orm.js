const connection = require('./connection.js');

//Function to add question marks (?,?) in query
const addQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

//Function to convery key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];

    //loop through and push the key/value as a string
    for (const key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >=0 ) {
                value = `'${value}'`;
            }

            arr.push(`${key}=${value}`);
        }
    }

    return arr.toString();
};

const orm = {
    all(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += addQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    //an example of objColVals is burger name: veggie, devoured: true
    update(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);

        });
    },
    delete(table, condition, cb) {
        let queryString = `DELETE FROM ${table}`;
        queryString += ' WHERE ';
        queryString += 'condition';

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }

}

module.exports = orm;


