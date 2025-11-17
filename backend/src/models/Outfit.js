import mongoose from 'mongoose';

const outfitSchema = new mongoose.Schema({
  celebrityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Celebrity', required: true },
  items: [{
    brand: String,
    price: Number,
    category: String,
    imageUrl: String,
    retailerLink: String,
    alternatives: [{
      brand: String,
      price: Number,
      tier: { type: String, enum: ['budget', 'mid-range'] },
      retailerLink: String
    }]
  }],
  occasion: { type: String },
  weather: { type: String, enum: ['hot', 'cold', 'mild', 'rainy'] },
  imageUrl: String,
  votes: [{ userId: String, score: Number }]
});

export default mongoose.model('Outfit', outfitSchema);