(function (w) {
  var loadJS = function (src, cb) {
    'use strict';
    var ref = w.document.getElementsByTagName('script')[0];
    var script = w.document.createElement('script');
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
    if (cb && typeof cb === 'function') {
      script.onload = cb;
    }
    return script;
  };
  var weiboInitialize = function () {
    wb.init({
      appkey: '1144692124',
    });
  };
  loadJS('https://open.weibo.com/views/js/wbsdk.js', function () {
    loadJS('https://open.weibo.com/views/js/wbsdk.js', function () {
      weiboInitialize();
    });
  });
})(typeof global !== 'undefined' ? global : this);
