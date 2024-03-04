'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // クエリに入力したリクエスト URL をクッキーに保存
  const from = req.query.from;
  if (from) {
    res.cookie('loginFrom', from, { expires: new Date(Date.now() + 6000000) });
  }
  res.render('login');
});

module.exports = router;
