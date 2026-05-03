import mongoose from 'mongoose';

const promoCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  reward: {
    euros: {
      type: Number,
      default: 0
    },
    gems: {
      type: Number,
      default: 0
    }
  },
  expiresAt: {
    type: Date,
    default: null
  },
  maxUses: {
    type: Number,
    default: null
  },
  currentUses: {
    type: Number,
    default: 0
  },
  usedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('PromoCode', promoCodeSchema);
