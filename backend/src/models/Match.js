import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  playerTeam: {
    name: String,
    score: { type: Number, default: 0 },
    players: Array
  },
  opponentTeam: {
    name: String,
    score: { type: Number, default: 0 },
    players: Array
  },
  result: {
    type: String,
    enum: ['win', 'loss', 'draw'],
    required: true
  },
  duration: {
    type: Number,
    default: 45
  },
  rewardsEuros: {
    type: Number,
    default: 0
  },
  rewardsGems: {
    type: Number,
    default: 0
  },
  statsGenerated: {
    type: Object,
    default: {}
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('Match', matchSchema);
