const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, default: 0 },
    supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true }
    }, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);