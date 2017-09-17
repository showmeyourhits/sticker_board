const router = require('express').Router();
const Sticker = require('../models/Sticker');

router.get('/', (req, res) => {
  Sticker.find((err, dbRes) => {
    let result = res;

    if (err) {
      console.log(err);
      result = [];
      res.status = 500;
    }

    res.json(dbRes);
  })
});

router.get('/:stickerID', (req, res) => {
  res.json(req.params);
});

router.delete('/:stickerID', (req, res) => {
  console.log(`DELETE ${stickerID}`);
  res.json(req.params);
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.patch('/:stickerID', (req, res) => {
  res.json({ok: 1});
});

module.exports = router;
