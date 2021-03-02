import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommerceSchema = new Schema({
    name: String,
    category: Array,
    phone: String,
    email: String,
    province: String,
    street: String,
    number: String,
    floor: String,
    office: String,    
    postal_code: String,
    description: String,
    terms:Boolean,
    isClient: Boolean    
})

const Commerce = mongoose.model('commerce', CommerceSchema);
export default Commerce;