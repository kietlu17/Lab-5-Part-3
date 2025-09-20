const Product = require('../models/Product');
const Supplier = require('../models/Supplier');


exports.index = async (req, res) => {
const products = await Product.find().populate('supplier').sort({ createdAt: -1 });
res.render('products/index', { products });
};


exports.new = async (req, res) => {
const suppliers = await Supplier.find();
res.render('products/new', { suppliers });
};


exports.create = async (req, res) => {
try {
await Product.create(req.body);
res.redirect('/products');
} catch (err) {
console.error(err);
res.redirect('/products');
}
};


exports.edit = async (req, res) => {
const product = await Product.findById(req.params.id);
const suppliers = await Supplier.find();
if (!product) return res.redirect('/products');
res.render('products/edit', { product, suppliers });
};


exports.update = async (req, res) => {
try {
await Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
res.redirect('/products');
} catch (err) {
console.error(err);
res.redirect('/products');
}
};


exports.delete = async (req, res) => {
try {
await Product.findByIdAndDelete(req.params.id);
res.redirect('/products');
} catch (err) {
console.error(err);
res.redirect('/products');
}
};

exports.search = async (req, res) => {
    const name = req.query.search;
    console.log(name);
    const products = await Product.find({name: name}).populate('supplier').sort({ createdAt: -1 });
    res.render('products/index', { products });

};


