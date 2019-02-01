// Copyright (c) 2018, The TurtleCoin Developers
// Copyright (c) 2019, The BytechCoin Developers
//
// Please see the included LICENSE file for more information.

/* ---- super simple iframe busting ---- */
(function(window) {
  if (window.location !== window.top.location) {
    window.top.location = window.location;
  }
})(this);
