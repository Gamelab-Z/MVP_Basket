import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    enum: ['PG', 'SG', 'SF', 'PF', 'C'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stats: {
    speed: { type: Number, min: 1, max: 99 },
    strength: { type: Number, min: 1, max: 99 },
    shooting: { type: Number, min: 1, max: 99 },
    defense: { type: Number, min: 1, max: 99 },
    rebound: { type: Number, min: 1, max: 99 },
    dribbling: { type: Number, min: 1, max: 99 },
    stamina: { type: Number, min: 1, max: 99 }
  },
  rating: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  experience: {
    type: Number,
    default: 0
  },
  rarity: {
    type: String,
    enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'],
    default: 'common'
  },
  image: {
    type: String,
    default: null
  }
}, { timestamps: true });

playerSchema.pre('save', function(next) {
  if (this.stats) {
    const values = Object.values(this.stats);
    this.rating = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  }
  next();
});

export default mongoose.model('Player', playerSchema);
