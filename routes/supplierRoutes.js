const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/supplierController');
const auth = require('../middleware/auth');



router.use(auth);
router.get('/', ctrl.index);
router.get('/new', ctrl.new);
router.post('/', ctrl.create);
router.get('/:id/edit', ctrl.edit);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);


module.exports = router;