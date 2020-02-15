import mongoose from 'mongoose';

const TechSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  
  // published_year: { type: Number, min: 1945, max: 2019 },
  // publisher: String,
  updated_date: { type: Date, default: Date.now },
});

export default mongoose.model('Technology', TechSchema);