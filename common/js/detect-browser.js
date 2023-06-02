var browser = {
  detect: function() {
    var ua = navigator.userAgent.toLowerCase()
    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
      /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
      /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
      /(msie) ([\w.]+)/.exec( ua ) ||
      ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
      []
    var sp = /(iphone|ipod|ipad|android|blackberry|webos|windows phone)/.exec( ua )
    var pc = /(mac|win|linux)/.exec( ua )
    match[ 1 ] && $('html').addClass(match[ 1 ] || '');
    sp && sp[ 0 ] && $('html').addClass(sp[ 0 ] || '') || pc && pc[ 0 ] && $('html').addClass(pc[ 0 ] || '')
    return {
      os: sp && sp[ 0 ] || pc && pc[ 0 ],
      browser: match[ 1 ] || "",
      version: match[ 2 ] || "0"
    }
  }
};

browser.detect();
