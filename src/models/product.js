import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    by: {
        type: {},
        required: true
    },
    name: String,
    category: Array,
    price: String,
    shipping: Boolean,
    description: String,
    image: Array,
    stock: String,
    createdAt: {
        type: String,
        default: new Date
    }    
})

const Product = mongoose.model('product', ProductSchema);
export default Product;