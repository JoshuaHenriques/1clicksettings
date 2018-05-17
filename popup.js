// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function(){
    var links = document.getElementsByName("chrome");
    for (var i = 0; i < links.length; i++) {
      (function () {
          var ln = links[i];
          var location = ln.href;
          ln.onclick = function () {
              chrome.tabs.create({active: true, url: location});
          };
      })();
    }
});
