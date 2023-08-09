const express = require('express');
const router = express.Router();

const controllerPort = '../controllers/views/malik';

/* ----- Views ----- */
const portIndex = require(`${controllerPort}/malik.js`);
router.get('/', portIndex.send);

const portProjects = require(`${controllerPort}/malikProjects.js`);
router.get('/resume/projects', portProjects.send);

const dashboard = require(`${controllerPort}/malikDashboard.js`);
router.get('/dashboard', dashboard.send);

// const notFound = require(`../controllers/shared/notFound.js`);
// router.get('*', notFound.send);
// =====>

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