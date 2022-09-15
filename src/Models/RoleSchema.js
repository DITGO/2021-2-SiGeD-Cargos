const mongoose = require('mongoose');
const moment = require('moment-timezone');

const currentDate = moment.utc(moment.tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss')).toDate();

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    active: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
  {
    timestamps: { currentTime: () => currentDate }
  }
);

module.exports = mongoose.model('Role', roleSchema);
