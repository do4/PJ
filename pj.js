// do4/PJ@1.0.0 MIT
!function(NAMESPACE, WINDOW, DOCUMENT) {
  function pj(id) {
    return DOCUMENT.getElementById(id);
  }
  pj.tag    = DOCUMENT.getElementsByTagName;
  pj.id     = DOCUMENT.getElementById;
  pj.$      = DOCUMENT.querySelectorAll;
  pj.class  = DOCUMENT.getElementsByClassName;
  pj.create = DOCUMENT.createElement;
  pj.get    = function (el, attr) {
    return el.getAttribute(attr)
  };
  pj.set    = function (el, attr, value) {
    return el.setAttribute(attr, value)
  };
  pj.setAll = function (el, attrs, i, prop) {
    pj.each(attrs, function(key, value) {
      el.setAttribute(key, value);
    })
  }
  pj.del    = function (el, attr) {
    return el.removeAttribute(attr)
  };
  pj.each   = function(obj, fn, i) {
    for (i in obj) {
      if (!obj.hasOwnProperty(i)) {
        fn(i, obj[i])
      }
    }
  }
  pj.apply  = function apply(el, attrs, i) {
    pj.each(attrs, function(key, value) {
      el[key] = value;
    })
  }
  pj.css    = function (el, attrs, i) {
    pj.each(attrs, function(key, value) {
      el.style[key] = value;
    })
  }
  pj.show  = function(el, value) {
    el.style.display=(value||'');
  }
  pj.hide  = function(el) {
    el.style.display='none';
  }
  pj.js    = function (url, callback, el, s) {
    el=pj.create('script');
    el.async=1;
    el.src=url;
    el.onload=callback;
    s=pj.tag('script')[0];
    s.parentNode.insertBefore(el, s);
  }
  pj.rnd  = Math.random;
  pj.jsonp = function(url, el) {
    el=pj.create('script');
    el.src=url;
    DOCUMENT.body.appendChild(el);
  }
  pj.cors = function(url, callback, xhr) {
    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
    xhr.open('GET', url);
    xhr.onload = function() {

    };
    xhr.send();
    return xhr;
  }
  pj.jsond = function(url, callback, stamp) {
    stamp='cb' + (1*new Date) + pj.rnd();
    WINDOW[NAMESPACE][stamp] = function(data) {
      callback(data);
      WINDOW[NAMESPACE][stamp] = undefined;
    }
    pj.jsonp(url + ((url.indexOf('?') < 0) ? '?' : '&') + 'callback=window.' + stamp);
  }

  pj.getCss = function(url, callback, el) {
    el        = pj.create('link');
    el.rel    = 'stylesheet';
    el.type   = 'text/css';
    el.href   = url;
    el.onload = callback;
    pj.tag('head').append(el);
  }
  pj.post=function(url, data, success, params, xhr) {
    params = typeof data == 'string' ? data : Object.keys(data).map(
      function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
    ).join('&');

    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
  }

  WINDOW[NAMESPACE] = pj;
}('pj', window, document)
