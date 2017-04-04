# PJ

[PlainJS](//plainjs.com) essential functions. Because PlainJS is  a useful set of common functions that are short simple wrappers around [Vanilla JS](//vanilla-js.com/) which are as fast as JavaScript gets.

Function | Example | Docs | Speed | Support | Polyfill
--- | --- | --- | --- | --- | ---
Elements By Tag | `el=pj.tag('tag')` | [Docs](//plainjs.com/javascript/selecting/select-elements-by-tag-name-2/) |  Vanilla JS | `getElementsByTagName` DOM Core Level 2 | Unneeded
Element By Id | `el=pj.id('id')` | [Docs](//plainjs.com/javascript/selecting/select-an-element-by-id-1/) | Vanilla JS | `getElementById` DOM Core Level 2 | Unneeded
Element By Id | `el=pj('id')` | [Docs](//plainjs.com/javascript/selecting/select-an-element-by-id-1/) | Minimal convenience function | | `getElementById` DOM Core Level 2 | Unneeded
CSS selector | `el=pj.$('div.a')` |  [Docs](//plainjs.com/javascript/selecting/select-dom-elements-by-css-selector-4/) | Vanilla JS | `querySelectorAll` [IE>8, FF>3.4, Chrome>2, Safari>3.1, Android>2.0...](http://caniuse.com/#search=querySelectorAll) | [Polyfill](//https://gist.githubusercontent.com/chrisjlee/8960575/raw/773c8f0012522dc98f03d0f738e81bd17a95930b/querySelector.polyfill.js)
Elements By Class | `el=pj.class('class')` | [Docs](https://plainjs.com/javascript/selecting/select-elements-by-class-name-3/) | Vanilla JS | `getElementsByClassName` [IE>8, FF>2, Chrome>2, Safari>3.0, Android>2.0...](http://caniuse.com/#search=getElementsByClassName) | [Polyfill](https://cdn.polyfill.io/v2/polyfill.min.js?features=document.getElementsByClassName&flags=always,gated)
Create Element | `el=pj.create('tag')` | [Docs](https://plainjs.com/javascript/manipulation/create-a-dom-element-51/) | Vanilla JS | `createElement` DOM Core Level 2 | Unneeded
Get Attribute | `val=pj.get(el,'attr')` | [Docs](https://plainjs.com/javascript/attributes/setting-getting-and-removing-data-attributes-8/) | Minimal convenience function | `getAttribute` DOM Core Level 2 | Unneeded
Set Attribute | `val=pj.set(el,'attr',value)` | [Docs](https://plainjs.com/javascript/attributes/setting-getting-and-removing-data-attributes-8/) | Minimal convenience function | `setAttribute` DOM Core Level 2 | Unneeded
Set Attributes | `pj.setAll(el, obj)` | | Minimal convenience function |`setAttribute` DOM Core Level 2 | Unneeded
Delete Attribute | `val=pj.del(el,'attr')` | [Docs](https://plainjs.com/javascript/attributes/setting-getting-and-removing-data-attributes-8/) | Minimal convenience function | `removeAttribute` DOM Core Level 2 | Unneeded
Iterate over object | `pj.each(obj,function(k,v){})` | | | DOM Core Level 2 | Unneeded |
Apply Property Values | `pj.apply(el, obj)` | | Minimal convenience function | DOM Core Level 2 | Unneeded
Apply CSS Values | `pj.css(el, obj)` | [Docs](https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/) | Convenience function | DOM Core Level 2 | Unneeded |
Show Element | `pj.show(el)` | [Docs](https://plainjs.com/javascript/effects/hide-or-show-an-element-42/) | Convenience | DOM Core Level 2 | Unneeded |
Hide Element | `pj.hide(el)` | [Docs](https://plainjs.com/javascript/effects/hide-or-show-an-element-42/) | Convenience | DOM Core Level 2 | Unneeded |
Load JavaScript | `pj.js('url', function loaded(){})` | | Convenience function | Same support as Google Analytics | Unneeded |
Random | `pj.rnd()` | | Vanilla JS | `Math.random` DOM Core Level 2 | Unneeded |
CORS Request | `pj.cors('url, function(data){}')` | [Docs](https://plainjs.com/javascript/ajax/making-cors-ajax-get-requests-54/) | | | |
JSONP | `pj.jsonp('url?callback=fnName')` | [Docs](https://plainjs.com/javascript/ajax/jsonp-ajax-requests-50/) | Vanilla JS | DOM Core Level 2 | Unneeded
JSOND | `pj.jsond('url', function(data) {})` | | CORS like data using JSONP | DOM Core Level 2 | Unneeded |
Load CSS | `pj.getCss('url', function loaded(){})` | | Convenience | DOM Core Level 2 | Unneeded |
POST | `pj.post('url', data, )` | [Docs](https://plainjs.com/javascript/ajax/send-ajax-get-and-post-requests-47/) | Convenience | DOM Core Level 2 | Unneeded |
