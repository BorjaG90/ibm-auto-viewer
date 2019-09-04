const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PlayerStats = require('../models/player_stat.model');


/** Medias de carrera */
router.get('/player/:id/average', async (req, res) => {
  console.log(req.params.id)
  const avg = await PlayerStats.aggregate([
    {
      $match: {
        "player_id": new mongoose.Types.ObjectId(req.params.id)
      }
    },
    {
      $group: {
        _id: {
          game_type: "$game_type"
        },
        avgPoints: { $avg: "$points" },
        avgT2i: { $avg: "$t2i"},
        avgT2c: { $avg: "$t2c"},
        avgT3i: { $avg: "$t3i"},
        avgT3c: { $avg: "$t3c"},
        avgTli: { $avg: "$tli"},
        avgTlc: { $avg: "$tlc"},
        avgRebd: { $avg: "$rebd"},
        avgRebo: { $avg: "$rebo"},
        avgAss: { $avg: "$ass"},
        avgSte: { $avg: "$ste"},
        avgTurn: { $avg: "$turn"},
        avgBlkf: { $avg: "$blkf"},
        avgBlkc: { $avg: "$blkc"},
        avgFoulr: { $avg: "$foulr"},
        avgFoulc: { $avg: "$foulc"},
        avgMin: { $avg: "$min"},
        avgVal: { $avg: "$val"}
      },
    }
  ]);
  res.json(avg);
});

// Medias por temporada
router.get('/player/:id/season_average', async (req, res) => {
  const avg = await PlayerStats.aggregate([
    {
      $match: {
        "player_id": new mongoose.Types.ObjectId(req.params.id)
      }
    },
    {
      $group: {
        _id: {
          season: "$season",
          game_type: "$game_type"
        },
        avgPoints: { $avg: "$points" },
        avgT2i: { $avg: "$t2i"},
        avgT2c: { $avg: "$t2c"},
        avgT3i: { $avg: "$t3i"},
        avgT3c: { $avg: "$t3c"},
        avgTli: { $avg: "$tli"},
        avgTlc: { $avg: "$tlc"},
        avgRebd: { $avg: "$rebd"},
        avgRebo: { $avg: "$rebo"},
        avgAss: { $avg: "$ass"},
        avgSte: { $avg: "$ste"},
        avgTurn: { $avg: "$turn"},
        avgBlkf: { $avg: "$blkf"},
        avgBlkc: { $avg: "$blkc"},
        avgFoulr: { $avg: "$foulr"},
        avgFoulc: { $avg: "$foulc"},
        avgMin: { $avg: "$min"},
        avgVal: { $avg: "$val"}
      },
    }
  ]);
  res.json(avg);
});

// Medias de una temporada
router.get('/player/:id/average/:season', async (req, res) => {
  const avg = await PlayerStats.aggregate([
    {
      $match: {
        "player_id": new mongoose.Types.ObjectId(req.params.id),
        "season": Number(req.params.season)
      }
    },
    {
      $group: {
        _id: {
          season: "$season",
          game_type: "$game_type"
        },
        avgPoints: { $avg: "$points" },
        avgT2i: { $avg: "$t2i"},
        avgT2c: { $avg: "$t2c"},
        avgT3i: { $avg: "$t3i"},
        avgT3c: { $avg: "$t3c"},
        avgTli: { $avg: "$tli"},
        avgTlc: { $avg: "$tlc"},
        avgRebd: { $avg: "$rebd"},
        avgRebo: { $avg: "$rebo"},
        avgAss: { $avg: "$ass"},
        avgSte: { $avg: "$ste"},
        avgTurn: { $avg: "$turn"},
        avgBlkf: { $avg: "$blkf"},
        avgBlkc: { $avg: "$blkc"},
        avgFoulr: { $avg: "$foulr"},
        avgFoulc: { $avg: "$foulc"},
        avgMin: { $avg: "$min"},
        avgVal: { $avg: "$val"}
      },
    }
  ]);
  res.json(avg);
});

/** Totales de carrera */
router.get('/player/:id/total', async (req, res) => {
  console.log(req.params.id)
  const sum = await PlayerStats.aggregate([
    {
      $match: {
        "player_id": new mongoose.Types.ObjectId(req.params.id)
      }
    },
    {
      $group: {
        _id: {
          game_type: "$game_type"
        },
        sumPoints: { $sum: "$points" },
        sumT2i: { $sum: "$t2i"},
        sumT2c: { $sum: "$t2c"},
        sumT3i: { $sum: "$t3i"},
        sumT3c: { $sum: "$t3c"},
        sumTli: { $sum: "$tli"},
        sumTlc: { $sum: "$tlc"},
        sumRebd: { $sum: "$rebd"},
        sumRebo: { $sum: "$rebo"},
        sumAss: { $sum: "$ass"},
        sumSte: { $sum: "$ste"},
        sumTurn: { $sum: "$turn"},
        sumBlkf: { $sum: "$blkf"},
        sumBlkc: { $sum: "$blkc"},
        sumFoulr: { $sum: "$foulr"},
        sumFoulc: { $sum: "$foulc"},
        sumMin: { $sum: "$min"},
        sumVal: { $sum: "$val"}
      },
    }
  ]);
  res.json(sum);
});

/** Totales de carrera por temporada */
router.get('/player/:id/season_total', async (req, res) => {
  console.log(req.params.id)
  const sum = await PlayerStats.aggregate([
    {
      $match: {
        "player_id": new mongoose.Types.ObjectId(req.params.id)
      }
    },
    {
      $group: {
        _id: {
          season: "$season",
          game_type: "$game_type"
        },
        sumPoints: { $sum: "$points" },
        sumT2i: { $sum: "$t2i"},
        sumT2c: { $sum: "$t2c"},
        sumT3i: { $sum: "$t3i"},
        sumT3c: { $sum: "$t3c"},
        sumTli: { $sum: "$tli"},
        sumTlc: { $sum: "$tlc"},
        sumRebd: { $sum: "$rebd"},
        sumRebo: { $sum: "$rebo"},
        sumAss: { $sum: "$ass"},
        sumSte: { $sum: "$ste"},
        sumTurn: { $sum: "$turn"},
        sumBlkf: { $sum: "$blkf"},
        sumBlkc: { $sum: "$blkc"},
        sumFoulr: { $sum: "$foulr"},
        sumFoulc: { $sum: "$foulc"},
        sumMin: { $sum: "$min"},
        sumVal: { $sum: "$val"}
      },
    }
  ]);
  res.json(sum);
});

/** Totales de una temporada */
router.get('/player/:id/total/:season', async (req, res) => {
  const sum = await PlayerStats.aggregate([
    {
      $match: {
        "player_id": new mongoose.Types.ObjectId(req.params.id),
        "season": Number(req.params.season)
      }
    },
    {
      $group: {
        _id: {
          season: "$season",
          game_type: "$game_type"
        },
        sumPoints: { $sum: "$points" },
        sumT2i: { $sum: "$t2i"},
        sumT2c: { $sum: "$t2c"},
        sumT3i: { $sum: "$t3i"},
        sumT3c: { $sum: "$t3c"},
        sumTli: { $sum: "$tli"},
        sumTlc: { $sum: "$tlc"},
        sumRebd: { $sum: "$rebd"},
        sumRebo: { $sum: "$rebo"},
        sumAss: { $sum: "$ass"},
        sumSte: { $sum: "$ste"},
        sumTurn: { $sum: "$turn"},
        sumBlkf: { $sum: "$blkf"},
        sumBlkc: { $sum: "$blkc"},
        sumFoulr: { $sum: "$foulr"},
        sumFoulc: { $sum: "$foulc"},
        sumMin: { $sum: "$min"},
        sumVal: { $sum: "$val"}
      },
    }
  ]);
  res.json(sum);
});


module.exports = router;