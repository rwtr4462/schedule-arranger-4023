'use strict';

function ensure(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  // リクエスト URL をクエリに入力
  res.redirect('/login?from=' + req.originalUrl);
}

module.exports = ensure;