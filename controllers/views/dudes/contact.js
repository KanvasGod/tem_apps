const path = require('path');

exports.send = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../../../public/views/dudes/contact.html'));
}