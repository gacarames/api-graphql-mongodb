import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    description: String,
    complete: Boolean
})

const Task = mongoose.model('task', TaskSchema);
export default Task;