const Supplier = require('../models/Supplier');
const Product = require('../models/Product');


exports.index = async (req, res) => {
const suppliers = await Supplier.find().sort({ createdAt: -1 });

res.render('suppliers/index', { suppliers });

};


exports.new = (req, res) => {
res.render('suppliers/new');
};


exports.create = async (req, res) => {
try {
await Supplier.create(req.body);
res.redirect('/suppliers');
} catch (err) {
console.error(err);
res.render('suppliers/new', { error: err.message });
}
};


exports.edit = async (req, res) => {
const supplier = await Supplier.findById(req.params.id);
if (!supplier) return res.redirect('/suppliers');
res.render('suppliers/edit', { supplier });
};


exports.update = async (req, res) => {
try {
await Supplier.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
res.redirect('/suppliers');
} catch (err) {
console.error(err);
res.redirect('/suppliers');
}
};


exports.delete = async (req, res) => {
try {
// optional: remove products of this supplier
await Product.deleteMany({ supplier: req.params.id });
await Supplier.findByIdAndDelete(req.params.id);
res.redirect('/suppliers');
} catch (err) {
console.error(err);
res.redirect('/suppliers');
}
};