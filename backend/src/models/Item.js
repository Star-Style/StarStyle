import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  userId: { type: String, ref: 'User' },
  imageUrl: { type: String, required: true },
  type: String,
  brand: String,
  color: String
});

export default mongoose.model('Item', itemSchema);