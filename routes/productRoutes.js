const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/productController');
const auth = require('../middleware/auth');



router.use(auth);
router.get('/', (req, res, next) => {
	if (req.query.search) {
		return ctrl.search(req, res, next);
	}
	return ctrl.index(req, res, next);
});
router.get('/new', ctrl.new);
router.post('/', ctrl.create);
router.get('/:id/edit', ctrl.edit);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);


module.exports = router;