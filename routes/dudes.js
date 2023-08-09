const express = require('express');
const router = express.Router();

const controllerPort = '../controllers/views';


/* ----- Views ----- */
// const dudesIndex = require(`${controllerPort}/dudes/dudesLanding.js`);
// router.get('/', dudesIndex.send);

// const dudesServices = require(`${controllerPort}/dudes/dudesServices.js`);
// router.get('/services', dudesServices.send);

// const contact = require(`${controllerPort}/dudes/contact.js`);
// router.get('/contact', contact.send);

// const aboutUs = require(`${controllerPort}/dudes/aboutUs.js`);
// router.get('/about_us', aboutUs.send);

// const shop = require(`${controllerPort}/dudes/shop.js`);
// router.get('/shop', shop.send);

// const notFound = require(`../controllers/shared/notFound.js`);
// router.get('*', notFound.send);
// =====>

/* ----- GET Actions */
const products = require(`../controllers/gets/dudes/products.js`);
router.get('/api/products', products.send);
// =====>

// coming soon 
const comingSoon = require(`${controllerPort}/dudes/comingSoon.js`);
router.get('*', comingSoon.send)


/*
▒▒▒▒▒▒▐███████▌
▒▒▒▒▒▒▐░▀░▀░▀░▌
▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌
▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄
▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐
*/

/* ----- POST Actions */

// =====>

module.exports = router;