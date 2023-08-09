const path = require('path');
const fs = require('fs');

exports.send = (req, res) => {
    const db = fs.readFileSync(path.join(__dirname, '../../../bin/dudes/pricing.json'));
    res.status(200).json(JSON.parse(db))
}