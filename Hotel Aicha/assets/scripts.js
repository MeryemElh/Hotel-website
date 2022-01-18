/** @format */

(function (a, b) {
  function cy(a) {
    return f.isWindow(a)
      ? a
      : a.nodeType === 9
      ? a.defaultView || a.parentWindow
      : !1;
  }
  function cv(a) {
    if (!ck[a]) {
      var b = c.body,
        d = f('<' + a + '>').appendTo(b),
        e = d.css('display');
      d.remove();
      if (e === 'none' || e === '') {
        cl ||
          ((cl = c.createElement('iframe')),
          (cl.frameBorder = cl.width = cl.height = 0)),
          b.appendChild(cl);
        if (!cm || !cl.createElement)
          (cm = (cl.contentWindow || cl.contentDocument).document),
            cm.write(
              (c.compatMode === 'CSS1Compat' ? '<!doctype html>' : '') +
                '<html><body>'
            ),
            cm.close();
        (d = cm.createElement(a)),
          cm.body.appendChild(d),
          (e = f.css(d, 'display')),
          b.removeChild(cl);
      }
      ck[a] = e;
    }
    return ck[a];
  }
  function cu(a, b) {
    var c = {};
    f.each(cq.concat.apply([], cq.slice(0, b)), function () {
      c[this] = a;
    });
    return c;
  }
  function ct() {
    cr = b;
  }
  function cs() {
    setTimeout(ct, 0);
    return (cr = f.now());
  }
  function cj() {
    try {
      return new a.ActiveXObject('Microsoft.XMLHTTP');
    } catch (b) {}
  }
  function ci() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function cc(a, c) {
    a.dataFilter && (c = a.dataFilter(c, a.dataType));
    var d = a.dataTypes,
      e = {},
      g,
      h,
      i = d.length,
      j,
      k = d[0],
      l,
      m,
      n,
      o,
      p;
    for (g = 1; g < i; g++) {
      if (g === 1)
        for (h in a.converters)
          typeof h == 'string' && (e[h.toLowerCase()] = a.converters[h]);
      (l = k), (k = d[g]);
      if (k === '*') k = l;
      else if (l !== '*' && l !== k) {
        (m = l + ' ' + k), (n = e[m] || e['* ' + k]);
        if (!n) {
          p = b;
          for (o in e) {
            j = o.split(' ');
            if (j[0] === l || j[0] === '*') {
              p = e[j[1] + ' ' + k];
              if (p) {
                (o = e[o]), o === !0 ? (n = p) : p === !0 && (n = o);
                break;
              }
            }
          }
        }
        !n && !p && f.error('No conversion from ' + m.replace(' ', ' to ')),
          n !== !0 && (c = n ? n(c) : p(o(c)));
      }
    }
    return c;
  }
  function cb(a, c, d) {
    var e = a.contents,
      f = a.dataTypes,
      g = a.responseFields,
      h,
      i,
      j,
      k;
    for (i in g) i in d && (c[g[i]] = d[i]);
    while (f[0] === '*')
      f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader('content-type'));
    if (h)
      for (i in e)
        if (e[i] && e[i].test(h)) {
          f.unshift(i);
          break;
        }
    if (f[0] in d) j = f[0];
    else {
      for (i in d) {
        if (!f[0] || a.converters[i + ' ' + f[0]]) {
          j = i;
          break;
        }
        k || (k = i);
      }
      j = j || k;
    }
    if (j) {
      j !== f[0] && f.unshift(j);
      return d[j];
    }
  }
  function ca(a, b, c, d) {
    if (f.isArray(b))
      f.each(b, function (b, e) {
        c || bE.test(a)
          ? d(a, e)
          : ca(
              a + '[' + (typeof e == 'object' || f.isArray(e) ? b : '') + ']',
              e,
              c,
              d
            );
      });
    else if (!c && b != null && typeof b == 'object')
      for (var e in b) ca(a + '[' + e + ']', b[e], c, d);
    else d(a, b);
  }
  function b_(a, c) {
    var d,
      e,
      g = f.ajaxSettings.flatOptions || {};
    for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
    e && f.extend(!0, a, e);
  }
  function b$(a, c, d, e, f, g) {
    (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
    var h = a[f],
      i = 0,
      j = h ? h.length : 0,
      k = a === bT,
      l;
    for (; i < j && (k || !l); i++)
      (l = h[i](c, d, e)),
        typeof l == 'string' &&
          (!k || g[l]
            ? (l = b)
            : (c.dataTypes.unshift(l), (l = b$(a, c, d, e, l, g))));
    (k || !l) && !g['*'] && (l = b$(a, c, d, e, '*', g));
    return l;
  }
  function bZ(a) {
    return function (b, c) {
      typeof b != 'string' && ((c = b), (b = '*'));
      if (f.isFunction(c)) {
        var d = b.toLowerCase().split(bP),
          e = 0,
          g = d.length,
          h,
          i,
          j;
        for (; e < g; e++)
          (h = d[e]),
            (j = /^\+/.test(h)),
            j && (h = h.substr(1) || '*'),
            (i = a[h] = a[h] || []),
            i[j ? 'unshift' : 'push'](c);
      }
    };
  }
  function bC(a, b, c) {
    var d = b === 'width' ? a.offsetWidth : a.offsetHeight,
      e = b === 'width' ? bx : by,
      g = 0,
      h = e.length;
    if (d > 0) {
      if (c !== 'border')
        for (; g < h; g++)
          c || (d -= parseFloat(f.css(a, 'padding' + e[g])) || 0),
            c === 'margin'
              ? (d += parseFloat(f.css(a, c + e[g])) || 0)
              : (d -= parseFloat(f.css(a, 'border' + e[g] + 'Width')) || 0);
      return d + 'px';
    }
    d = bz(a, b, b);
    if (d < 0 || d == null) d = a.style[b] || 0;
    d = parseFloat(d) || 0;
    if (c)
      for (; g < h; g++)
        (d += parseFloat(f.css(a, 'padding' + e[g])) || 0),
          c !== 'padding' &&
            (d += parseFloat(f.css(a, 'border' + e[g] + 'Width')) || 0),
          c === 'margin' && (d += parseFloat(f.css(a, c + e[g])) || 0);
    return d + 'px';
  }
  function bp(a, b) {
    b.src
      ? f.ajax({ url: b.src, async: !1, dataType: 'script' })
      : f.globalEval(
          (b.text || b.textContent || b.innerHTML || '').replace(bf, '/*$0*/')
        ),
      b.parentNode && b.parentNode.removeChild(b);
  }
  function bo(a) {
    var b = c.createElement('div');
    bh.appendChild(b), (b.innerHTML = a.outerHTML);
    return b.firstChild;
  }
  function bn(a) {
    var b = (a.nodeName || '').toLowerCase();
    b === 'input'
      ? bm(a)
      : b !== 'script' &&
        typeof a.getElementsByTagName != 'undefined' &&
        f.grep(a.getElementsByTagName('input'), bm);
  }
  function bm(a) {
    if (a.type === 'checkbox' || a.type === 'radio')
      a.defaultChecked = a.checked;
  }
  function bl(a) {
    return typeof a.getElementsByTagName != 'undefined'
      ? a.getElementsByTagName('*')
      : typeof a.querySelectorAll != 'undefined'
      ? a.querySelectorAll('*')
      : [];
  }
  function bk(a, b) {
    var c;
    if (b.nodeType === 1) {
      b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(a),
        (c = b.nodeName.toLowerCase());
      if (c === 'object') b.outerHTML = a.outerHTML;
      else if (c !== 'input' || (a.type !== 'checkbox' && a.type !== 'radio')) {
        if (c === 'option') b.selected = a.defaultSelected;
        else if (c === 'input' || c === 'textarea')
          b.defaultValue = a.defaultValue;
      } else
        a.checked && (b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value);
      b.removeAttribute(f.expando);
    }
  }
  function bj(a, b) {
    if (b.nodeType === 1 && !!f.hasData(a)) {
      var c,
        d,
        e,
        g = f._data(a),
        h = f._data(b, g),
        i = g.events;
      if (i) {
        delete h.handle, (h.events = {});
        for (c in i)
          for (d = 0, e = i[c].length; d < e; d++)
            f.event.add(
              b,
              c + (i[c][d].namespace ? '.' : '') + i[c][d].namespace,
              i[c][d],
              i[c][d].data
            );
      }
      h.data && (h.data = f.extend({}, h.data));
    }
  }
  function bi(a, b) {
    return f.nodeName(a, 'table')
      ? a.getElementsByTagName('tbody')[0] ||
          a.appendChild(a.ownerDocument.createElement('tbody'))
      : a;
  }
  function U(a) {
    var b = V.split('|'),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  function T(a, b, c) {
    b = b || 0;
    if (f.isFunction(b))
      return f.grep(a, function (a, d) {
        var e = !!b.call(a, d, a);
        return e === c;
      });
    if (b.nodeType)
      return f.grep(a, function (a, d) {
        return (a === b) === c;
      });
    if (typeof b == 'string') {
      var d = f.grep(a, function (a) {
        return a.nodeType === 1;
      });
      if (O.test(b)) return f.filter(b, d, !c);
      b = f.filter(b, d);
    }
    return f.grep(a, function (a, d) {
      return f.inArray(a, b) >= 0 === c;
    });
  }
  function S(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }
  function K() {
    return !0;
  }
  function J() {
    return !1;
  }
  function n(a, b, c) {
    var d = b + 'defer',
      e = b + 'queue',
      g = b + 'mark',
      h = f._data(a, d);
    h &&
      (c === 'queue' || !f._data(a, e)) &&
      (c === 'mark' || !f._data(a, g)) &&
      setTimeout(function () {
        !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire());
      }, 0);
  }
  function m(a) {
    for (var b in a) {
      if (b === 'data' && f.isEmptyObject(a[b])) continue;
      if (b !== 'toJSON') return !1;
    }
    return !0;
  }
  function l(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = 'data-' + c.replace(k, '-$1').toLowerCase();
      d = a.getAttribute(e);
      if (typeof d == 'string') {
        try {
          d =
            d === 'true'
              ? !0
              : d === 'false'
              ? !1
              : d === 'null'
              ? null
              : f.isNumeric(d)
              ? parseFloat(d)
              : j.test(d)
              ? f.parseJSON(d)
              : d;
        } catch (g) {}
        f.data(a, c, d);
      } else d = b;
    }
    return d;
  }
  function h(a) {
    var b = (g[a] = {}),
      c,
      d;
    a = a.split(/\s+/);
    for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
    return b;
  }
  var c = a.document,
    d = a.navigator,
    e = a.location,
    f = (function () {
      function J() {
        if (!e.isReady) {
          try {
            c.documentElement.doScroll('left');
          } catch (a) {
            setTimeout(J, 1);
            return;
          }
          e.ready();
        }
      }
      var e = function (a, b) {
          return new e.fn.init(a, b, h);
        },
        f = a.jQuery,
        g = a.$,
        h,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        j = /\S/,
        k = /^\s+/,
        l = /\s+$/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/gi,
        w = /^-ms-/,
        x = function (a, b) {
          return (b + '').toUpperCase();
        },
        y = d.userAgent,
        z,
        A,
        B,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        G = String.prototype.trim,
        H = Array.prototype.indexOf,
        I = {};
      (e.fn = e.prototype = {
        constructor: e,
        init: function (a, d, f) {
          var g, h, j, k;
          if (!a) return this;
          if (a.nodeType) {
            (this.context = this[0] = a), (this.length = 1);
            return this;
          }
          if (a === 'body' && !d && c.body) {
            (this.context = c),
              (this[0] = c.body),
              (this.selector = a),
              (this.length = 1);
            return this;
          }
          if (typeof a == 'string') {
            a.charAt(0) !== '<' ||
            a.charAt(a.length - 1) !== '>' ||
            a.length < 3
              ? (g = i.exec(a))
              : (g = [null, a, null]);
            if (g && (g[1] || !d)) {
              if (g[1]) {
                (d = d instanceof e ? d[0] : d),
                  (k = d ? d.ownerDocument || d : c),
                  (j = m.exec(a)),
                  j
                    ? e.isPlainObject(d)
                      ? ((a = [c.createElement(j[1])]),
                        e.fn.attr.call(a, d, !0))
                      : (a = [k.createElement(j[1])])
                    : ((j = e.buildFragment([g[1]], [k])),
                      (a = (j.cacheable ? e.clone(j.fragment) : j.fragment)
                        .childNodes));
                return e.merge(this, a);
              }
              h = c.getElementById(g[2]);
              if (h && h.parentNode) {
                if (h.id !== g[2]) return f.find(a);
                (this.length = 1), (this[0] = h);
              }
              (this.context = c), (this.selector = a);
              return this;
            }
            return !d || d.jquery
              ? (d || f).find(a)
              : this.constructor(d).find(a);
          }
          if (e.isFunction(a)) return f.ready(a);
          a.selector !== b &&
            ((this.selector = a.selector), (this.context = a.context));
          return e.makeArray(a, this);
        },
        selector: '',
        jquery: '1.7.1',
        length: 0,
        size: function () {
          return this.length;
        },
        toArray: function () {
          return F.call(this, 0);
        },
        get: function (a) {
          return a == null
            ? this.toArray()
            : a < 0
            ? this[this.length + a]
            : this[a];
        },
        pushStack: function (a, b, c) {
          var d = this.constructor();
          e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
            (d.prevObject = this),
            (d.context = this.context),
            b === 'find'
              ? (d.selector = this.selector + (this.selector ? ' ' : '') + c)
              : b && (d.selector = this.selector + '.' + b + '(' + c + ')');
          return d;
        },
        each: function (a, b) {
          return e.each(this, a, b);
        },
        ready: function (a) {
          e.bindReady(), A.add(a);
          return this;
        },
        eq: function (a) {
          a = +a;
          return a === -1 ? this.slice(a) : this.slice(a, a + 1);
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        slice: function () {
          return this.pushStack(
            F.apply(this, arguments),
            'slice',
            F.call(arguments).join(',')
          );
        },
        map: function (a) {
          return this.pushStack(
            e.map(this, function (b, c) {
              return a.call(b, c, b);
            })
          );
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: E,
        sort: [].sort,
        splice: [].splice,
      }),
        (e.fn.init.prototype = e.fn),
        (e.extend = e.fn.extend = function () {
          var a,
            c,
            d,
            f,
            g,
            h,
            i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
          typeof i == 'boolean' && ((l = i), (i = arguments[1] || {}), (j = 2)),
            typeof i != 'object' && !e.isFunction(i) && (i = {}),
            k === j && ((i = this), --j);
          for (; j < k; j++)
            if ((a = arguments[j]) != null)
              for (c in a) {
                (d = i[c]), (f = a[c]);
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f)))
                  ? (g
                      ? ((g = !1), (h = d && e.isArray(d) ? d : []))
                      : (h = d && e.isPlainObject(d) ? d : {}),
                    (i[c] = e.extend(l, h, f)))
                  : f !== b && (i[c] = f);
              }
          return i;
        }),
        e.extend({
          noConflict: function (b) {
            a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
            return e;
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0);
          },
          ready: function (a) {
            if ((a === !0 && !--e.readyWait) || (a !== !0 && !e.isReady)) {
              if (!c.body) return setTimeout(e.ready, 1);
              e.isReady = !0;
              if (a !== !0 && --e.readyWait > 0) return;
              A.fireWith(c, [e]),
                e.fn.trigger && e(c).trigger('ready').off('ready');
            }
          },
          bindReady: function () {
            if (!A) {
              A = e.Callbacks('once memory');
              if (c.readyState === 'complete') return setTimeout(e.ready, 1);
              if (c.addEventListener)
                c.addEventListener('DOMContentLoaded', B, !1),
                  a.addEventListener('load', e.ready, !1);
              else if (c.attachEvent) {
                c.attachEvent('onreadystatechange', B),
                  a.attachEvent('onload', e.ready);
                var b = !1;
                try {
                  b = a.frameElement == null;
                } catch (d) {}
                c.documentElement.doScroll && b && J();
              }
            }
          },
          isFunction: function (a) {
            return e.type(a) === 'function';
          },
          isArray:
            Array.isArray ||
            function (a) {
              return e.type(a) === 'array';
            },
          isWindow: function (a) {
            return a && typeof a == 'object' && 'setInterval' in a;
          },
          isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
          },
          type: function (a) {
            return a == null ? String(a) : I[C.call(a)] || 'object';
          },
          isPlainObject: function (a) {
            if (!a || e.type(a) !== 'object' || a.nodeType || e.isWindow(a))
              return !1;
            try {
              if (
                a.constructor &&
                !D.call(a, 'constructor') &&
                !D.call(a.constructor.prototype, 'isPrototypeOf')
              )
                return !1;
            } catch (c) {
              return !1;
            }
            var d;
            for (d in a);
            return d === b || D.call(a, d);
          },
          isEmptyObject: function (a) {
            for (var b in a) return !1;
            return !0;
          },
          error: function (a) {
            throw new Error(a);
          },
          parseJSON: function (b) {
            if (typeof b != 'string' || !b) return null;
            b = e.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (n.test(b.replace(o, '@').replace(p, ']').replace(q, '')))
              return new Function('return ' + b)();
            e.error('Invalid JSON: ' + b);
          },
          parseXML: function (c) {
            var d, f;
            try {
              a.DOMParser
                ? ((f = new DOMParser()),
                  (d = f.parseFromString(c, 'text/xml')))
                : ((d = new ActiveXObject('Microsoft.XMLDOM')),
                  (d.async = 'false'),
                  d.loadXML(c));
            } catch (g) {
              d = b;
            }
            (!d ||
              !d.documentElement ||
              d.getElementsByTagName('parsererror').length) &&
              e.error('Invalid XML: ' + c);
            return d;
          },
          noop: function () {},
          globalEval: function (b) {
            b &&
              j.test(b) &&
              (
                a.execScript ||
                function (b) {
                  a.eval.call(a, b);
                }
              )(b);
          },
          camelCase: function (a) {
            return a.replace(w, 'ms-').replace(v, x);
          },
          nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
          },
          each: function (a, c, d) {
            var f,
              g = 0,
              h = a.length,
              i = h === b || e.isFunction(a);
            if (d) {
              if (i) {
                for (f in a) if (c.apply(a[f], d) === !1) break;
              } else for (; g < h; ) if (c.apply(a[g++], d) === !1) break;
            } else if (i) {
              for (f in a) if (c.call(a[f], f, a[f]) === !1) break;
            } else for (; g < h; ) if (c.call(a[g], g, a[g++]) === !1) break;
            return a;
          },
          trim: G
            ? function (a) {
                return a == null ? '' : G.call(a);
              }
            : function (a) {
                return a == null ? '' : (a + '').replace(k, '').replace(l, '');
              },
          makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
              var d = e.type(a);
              a.length == null ||
              d === 'string' ||
              d === 'function' ||
              d === 'regexp' ||
              e.isWindow(a)
                ? E.call(c, a)
                : e.merge(c, a);
            }
            return c;
          },
          inArray: function (a, b, c) {
            var d;
            if (b) {
              if (H) return H.call(b, a, c);
              (d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0);
              for (; c < d; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
          },
          merge: function (a, c) {
            var d = a.length,
              e = 0;
            if (typeof c.length == 'number')
              for (var f = c.length; e < f; e++) a[d++] = c[e];
            else while (c[e] !== b) a[d++] = c[e++];
            a.length = d;
            return a;
          },
          grep: function (a, b, c) {
            var d = [],
              e;
            c = !!c;
            for (var f = 0, g = a.length; f < g; f++)
              (e = !!b(a[f], f)), c !== e && d.push(a[f]);
            return d;
          },
          map: function (a, c, d) {
            var f,
              g,
              h = [],
              i = 0,
              j = a.length,
              k =
                a instanceof e ||
                (j !== b &&
                  typeof j == 'number' &&
                  ((j > 0 && a[0] && a[j - 1]) || j === 0 || e.isArray(a)));
            if (k)
              for (; i < j; i++)
                (f = c(a[i], i, d)), f != null && (h[h.length] = f);
            else
              for (g in a) (f = c(a[g], g, d)), f != null && (h[h.length] = f);
            return h.concat.apply([], h);
          },
          guid: 1,
          proxy: function (a, c) {
            if (typeof c == 'string') {
              var d = a[c];
              (c = a), (a = d);
            }
            if (!e.isFunction(a)) return b;
            var f = F.call(arguments, 2),
              g = function () {
                return a.apply(c, f.concat(F.call(arguments)));
              };
            g.guid = a.guid = a.guid || g.guid || e.guid++;
            return g;
          },
          access: function (a, c, d, f, g, h) {
            var i = a.length;
            if (typeof c == 'object') {
              for (var j in c) e.access(a, j, c[j], f, g, d);
              return a;
            }
            if (d !== b) {
              f = !h && f && e.isFunction(d);
              for (var k = 0; k < i; k++)
                g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
              return a;
            }
            return i ? g(a[0], c) : b;
          },
          now: function () {
            return new Date().getTime();
          },
          uaMatch: function (a) {
            a = a.toLowerCase();
            var b =
              r.exec(a) ||
              s.exec(a) ||
              t.exec(a) ||
              (a.indexOf('compatible') < 0 && u.exec(a)) ||
              [];
            return { browser: b[1] || '', version: b[2] || '0' };
          },
          sub: function () {
            function a(b, c) {
              return new a.fn.init(b, c);
            }
            e.extend(!0, a, this),
              (a.superclass = this),
              (a.fn = a.prototype = this()),
              (a.fn.constructor = a),
              (a.sub = this.sub),
              (a.fn.init = function (d, f) {
                f && f instanceof e && !(f instanceof a) && (f = a(f));
                return e.fn.init.call(this, d, f, b);
              }),
              (a.fn.init.prototype = a.fn);
            var b = a(c);
            return a;
          },
          browser: {},
        }),
        e.each(
          'Boolean Number String Function Array Date RegExp Object'.split(' '),
          function (a, b) {
            I['[object ' + b + ']'] = b.toLowerCase();
          }
        ),
        (z = e.uaMatch(y)),
        z.browser &&
          ((e.browser[z.browser] = !0), (e.browser.version = z.version)),
        e.browser.webkit && (e.browser.safari = !0),
        j.test(' ') && ((k = /^[\s\xA0]+/), (l = /[\s\xA0]+$/)),
        (h = e(c)),
        c.addEventListener
          ? (B = function () {
              c.removeEventListener('DOMContentLoaded', B, !1), e.ready();
            })
          : c.attachEvent &&
            (B = function () {
              c.readyState === 'complete' &&
                (c.detachEvent('onreadystatechange', B), e.ready());
            });
      return e;
    })(),
    g = {};
  f.Callbacks = function (a) {
    a = a ? g[a] || h(a) : {};
    var c = [],
      d = [],
      e,
      i,
      j,
      k,
      l,
      m = function (b) {
        var d, e, g, h, i;
        for (d = 0, e = b.length; d < e; d++)
          (g = b[d]),
            (h = f.type(g)),
            h === 'array'
              ? m(g)
              : h === 'function' && (!a.unique || !o.has(g)) && c.push(g);
      },
      n = function (b, f) {
        (f = f || []),
          (e = !a.memory || [b, f]),
          (i = !0),
          (l = j || 0),
          (j = 0),
          (k = c.length);
        for (; c && l < k; l++)
          if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
            e = !0;
            break;
          }
        (i = !1),
          c &&
            (a.once
              ? e === !0
                ? o.disable()
                : (c = [])
              : d && d.length && ((e = d.shift()), o.fireWith(e[0], e[1])));
      },
      o = {
        add: function () {
          if (c) {
            var a = c.length;
            m(arguments),
              i ? (k = c.length) : e && e !== !0 && ((j = a), n(e[0], e[1]));
          }
          return this;
        },
        remove: function () {
          if (c) {
            var b = arguments,
              d = 0,
              e = b.length;
            for (; d < e; d++)
              for (var f = 0; f < c.length; f++)
                if (b[d] === c[f]) {
                  i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                  if (a.unique) break;
                }
          }
          return this;
        },
        has: function (a) {
          if (c) {
            var b = 0,
              d = c.length;
            for (; b < d; b++) if (a === c[b]) return !0;
          }
          return !1;
        },
        empty: function () {
          c = [];
          return this;
        },
        disable: function () {
          c = d = e = b;
          return this;
        },
        disabled: function () {
          return !c;
        },
        lock: function () {
          (d = b), (!e || e === !0) && o.disable();
          return this;
        },
        locked: function () {
          return !d;
        },
        fireWith: function (b, c) {
          d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
          return this;
        },
        fire: function () {
          o.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!e;
        },
      };
    return o;
  };
  var i = [].slice;
  f.extend({
    Deferred: function (a) {
      var b = f.Callbacks('once memory'),
        c = f.Callbacks('once memory'),
        d = f.Callbacks('memory'),
        e = 'pending',
        g = { resolve: b, reject: c, notify: d },
        h = {
          done: b.add,
          fail: c.add,
          progress: d.add,
          state: function () {
            return e;
          },
          isResolved: b.fired,
          isRejected: c.fired,
          then: function (a, b, c) {
            i.done(a).fail(b).progress(c);
            return this;
          },
          always: function () {
            i.done.apply(i, arguments).fail.apply(i, arguments);
            return this;
          },
          pipe: function (a, b, c) {
            return f
              .Deferred(function (d) {
                f.each(
                  {
                    done: [a, 'resolve'],
                    fail: [b, 'reject'],
                    progress: [c, 'notify'],
                  },
                  function (a, b) {
                    var c = b[0],
                      e = b[1],
                      g;
                    f.isFunction(c)
                      ? i[a](function () {
                          (g = c.apply(this, arguments)),
                            g && f.isFunction(g.promise)
                              ? g.promise().then(d.resolve, d.reject, d.notify)
                              : d[e + 'With'](this === i ? d : this, [g]);
                        })
                      : i[a](d[e]);
                  }
                );
              })
              .promise();
          },
          promise: function (a) {
            if (a == null) a = h;
            else for (var b in h) a[b] = h[b];
            return a;
          },
        },
        i = h.promise({}),
        j;
      for (j in g) (i[j] = g[j].fire), (i[j + 'With'] = g[j].fireWith);
      i
        .done(
          function () {
            e = 'resolved';
          },
          c.disable,
          d.lock
        )
        .fail(
          function () {
            e = 'rejected';
          },
          b.disable,
          d.lock
        ),
        a && a.call(i, i);
      return i;
    },
    when: function (a) {
      function m(a) {
        return function (b) {
          (e[a] = arguments.length > 1 ? i.call(arguments, 0) : b),
            j.notifyWith(k, e);
        };
      }
      function l(a) {
        return function (c) {
          (b[a] = arguments.length > 1 ? i.call(arguments, 0) : c),
            --g || j.resolveWith(j, b);
        };
      }
      var b = i.call(arguments, 0),
        c = 0,
        d = b.length,
        e = Array(d),
        g = d,
        h = d,
        j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
        k = j.promise();
      if (d > 1) {
        for (; c < d; c++)
          b[c] && b[c].promise && f.isFunction(b[c].promise)
            ? b[c].promise().then(l(c), j.reject, m(c))
            : --g;
        g || j.resolveWith(j, b);
      } else j !== a && j.resolveWith(j, d ? [a] : []);
      return k;
    },
  }),
    (f.support = (function () {
      var b,
        d,
        e,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = c.createElement('div'),
        r = c.documentElement;
      q.setAttribute('className', 't'),
        (q.innerHTML =
          "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
        (d = q.getElementsByTagName('*')),
        (e = q.getElementsByTagName('a')[0]);
      if (!d || !d.length || !e) return {};
      (g = c.createElement('select')),
        (h = g.appendChild(c.createElement('option'))),
        (i = q.getElementsByTagName('input')[0]),
        (b = {
          leadingWhitespace: q.firstChild.nodeType === 3,
          tbody: !q.getElementsByTagName('tbody').length,
          htmlSerialize: !!q.getElementsByTagName('link').length,
          style: /top/.test(e.getAttribute('style')),
          hrefNormalized: e.getAttribute('href') === '/a',
          opacity: /^0.55/.test(e.style.opacity),
          cssFloat: !!e.style.cssFloat,
          checkOn: i.value === 'on',
          optSelected: h.selected,
          getSetAttribute: q.className !== 't',
          enctype: !!c.createElement('form').enctype,
          html5Clone:
            c.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>',
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
        }),
        (i.checked = !0),
        (b.noCloneChecked = i.cloneNode(!0).checked),
        (g.disabled = !0),
        (b.optDisabled = !h.disabled);
      try {
        delete q.test;
      } catch (s) {
        b.deleteExpando = !1;
      }
      !q.addEventListener &&
        q.attachEvent &&
        q.fireEvent &&
        (q.attachEvent('onclick', function () {
          b.noCloneEvent = !1;
        }),
        q.cloneNode(!0).fireEvent('onclick')),
        (i = c.createElement('input')),
        (i.value = 't'),
        i.setAttribute('type', 'radio'),
        (b.radioValue = i.value === 't'),
        i.setAttribute('checked', 'checked'),
        q.appendChild(i),
        (k = c.createDocumentFragment()),
        k.appendChild(q.lastChild),
        (b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = i.checked),
        k.removeChild(i),
        k.appendChild(q),
        (q.innerHTML = ''),
        a.getComputedStyle &&
          ((j = c.createElement('div')),
          (j.style.width = '0'),
          (j.style.marginRight = '0'),
          (q.style.width = '2px'),
          q.appendChild(j),
          (b.reliableMarginRight =
            (parseInt(
              (a.getComputedStyle(j, null) || { marginRight: 0 }).marginRight,
              10
            ) || 0) === 0));
      if (q.attachEvent)
        for (o in { submit: 1, change: 1, focusin: 1 })
          (n = 'on' + o),
            (p = n in q),
            p ||
              (q.setAttribute(n, 'return;'), (p = typeof q[n] == 'function')),
            (b[o + 'Bubbles'] = p);
      k.removeChild(q),
        (k = g = h = j = q = i = null),
        f(function () {
          var a,
            d,
            e,
            g,
            h,
            i,
            j,
            k,
            m,
            n,
            o,
            r = c.getElementsByTagName('body')[0];
          !r ||
            ((j = 1),
            (k =
              'position:absolute;top:0;left:0;width:1px;height:1px;margin:0;'),
            (m = 'visibility:hidden;border:0;'),
            (n = "style='" + k + "border:5px solid #000;padding:0;'"),
            (o =
              '<div ' +
              n +
              '><div></div></div>' +
              '<table ' +
              n +
              " cellpadding='0' cellspacing='0'>" +
              '<tr><td></td></tr></table>'),
            (a = c.createElement('div')),
            (a.style.cssText =
              m +
              'width:0;height:0;position:static;top:0;margin-top:' +
              j +
              'px'),
            r.insertBefore(a, r.firstChild),
            (q = c.createElement('div')),
            a.appendChild(q),
            (q.innerHTML =
              "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"),
            (l = q.getElementsByTagName('td')),
            (p = l[0].offsetHeight === 0),
            (l[0].style.display = ''),
            (l[1].style.display = 'none'),
            (b.reliableHiddenOffsets = p && l[0].offsetHeight === 0),
            (q.innerHTML = ''),
            (q.style.width = q.style.paddingLeft = '1px'),
            (f.boxModel = b.boxModel = q.offsetWidth === 2),
            typeof q.style.zoom != 'undefined' &&
              ((q.style.display = 'inline'),
              (q.style.zoom = 1),
              (b.inlineBlockNeedsLayout = q.offsetWidth === 2),
              (q.style.display = ''),
              (q.innerHTML = "<div style='width:4px;'></div>"),
              (b.shrinkWrapBlocks = q.offsetWidth !== 2)),
            (q.style.cssText = k + m),
            (q.innerHTML = o),
            (d = q.firstChild),
            (e = d.firstChild),
            (h = d.nextSibling.firstChild.firstChild),
            (i = {
              doesNotAddBorder: e.offsetTop !== 5,
              doesAddBorderForTableAndCells: h.offsetTop === 5,
            }),
            (e.style.position = 'fixed'),
            (e.style.top = '20px'),
            (i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15),
            (e.style.position = e.style.top = ''),
            (d.style.overflow = 'hidden'),
            (d.style.position = 'relative'),
            (i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5),
            (i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j),
            r.removeChild(a),
            (q = a = null),
            f.extend(b, i));
        });
      return b;
    })());
  var j = /^(?:\{.*\}|\[.*\])$/,
    k = /([A-Z])/g;
  f.extend({
    cache: {},
    uuid: 0,
    expando: 'jQuery' + (f.fn.jquery + Math.random()).replace(/\D/g, ''),
    noData: {
      embed: !0,
      object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
      applet: !0,
    },
    hasData: function (a) {
      a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
      return !!a && !m(a);
    },
    data: function (a, c, d, e) {
      if (!!f.acceptData(a)) {
        var g,
          h,
          i,
          j = f.expando,
          k = typeof c == 'string',
          l = a.nodeType,
          m = l ? f.cache : a,
          n = l ? a[j] : a[j] && j,
          o = c === 'events';
        if ((!n || !m[n] || (!o && !e && !m[n].data)) && k && d === b) return;
        n || (l ? (a[j] = n = ++f.uuid) : (n = j)),
          m[n] || ((m[n] = {}), l || (m[n].toJSON = f.noop));
        if (typeof c == 'object' || typeof c == 'function')
          e ? (m[n] = f.extend(m[n], c)) : (m[n].data = f.extend(m[n].data, c));
        (g = h = m[n]),
          e || (h.data || (h.data = {}), (h = h.data)),
          d !== b && (h[f.camelCase(c)] = d);
        if (o && !h[c]) return g.events;
        k ? ((i = h[c]), i == null && (i = h[f.camelCase(c)])) : (i = h);
        return i;
      }
    },
    removeData: function (a, b, c) {
      if (!!f.acceptData(a)) {
        var d,
          e,
          g,
          h = f.expando,
          i = a.nodeType,
          j = i ? f.cache : a,
          k = i ? a[h] : h;
        if (!j[k]) return;
        if (b) {
          d = c ? j[k] : j[k].data;
          if (d) {
            f.isArray(b) ||
              (b in d
                ? (b = [b])
                : ((b = f.camelCase(b)),
                  b in d ? (b = [b]) : (b = b.split(' '))));
            for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
            if (!(c ? m : f.isEmptyObject)(d)) return;
          }
        }
        if (!c) {
          delete j[k].data;
          if (!m(j[k])) return;
        }
        f.support.deleteExpando || !j.setInterval ? delete j[k] : (j[k] = null),
          i &&
            (f.support.deleteExpando
              ? delete a[h]
              : a.removeAttribute
              ? a.removeAttribute(h)
              : (a[h] = null));
      }
    },
    _data: function (a, b, c) {
      return f.data(a, b, c, !0);
    },
    acceptData: function (a) {
      if (a.nodeName) {
        var b = f.noData[a.nodeName.toLowerCase()];
        if (b) return b !== !0 && a.getAttribute('classid') === b;
      }
      return !0;
    },
  }),
    f.fn.extend({
      data: function (a, c) {
        var d,
          e,
          g,
          h = null;
        if (typeof a == 'undefined') {
          if (this.length) {
            h = f.data(this[0]);
            if (this[0].nodeType === 1 && !f._data(this[0], 'parsedAttrs')) {
              e = this[0].attributes;
              for (var i = 0, j = e.length; i < j; i++)
                (g = e[i].name),
                  g.indexOf('data-') === 0 &&
                    ((g = f.camelCase(g.substring(5))), l(this[0], g, h[g]));
              f._data(this[0], 'parsedAttrs', !0);
            }
          }
          return h;
        }
        if (typeof a == 'object')
          return this.each(function () {
            f.data(this, a);
          });
        (d = a.split('.')), (d[1] = d[1] ? '.' + d[1] : '');
        if (c === b) {
          (h = this.triggerHandler('getData' + d[1] + '!', [d[0]])),
            h === b &&
              this.length &&
              ((h = f.data(this[0], a)), (h = l(this[0], a, h)));
          return h === b && d[1] ? this.data(d[0]) : h;
        }
        return this.each(function () {
          var b = f(this),
            e = [d[0], c];
          b.triggerHandler('setData' + d[1] + '!', e),
            f.data(this, a, c),
            b.triggerHandler('changeData' + d[1] + '!', e);
        });
      },
      removeData: function (a) {
        return this.each(function () {
          f.removeData(this, a);
        });
      },
    }),
    f.extend({
      _mark: function (a, b) {
        a &&
          ((b = (b || 'fx') + 'mark'), f._data(a, b, (f._data(a, b) || 0) + 1));
      },
      _unmark: function (a, b, c) {
        a !== !0 && ((c = b), (b = a), (a = !1));
        if (b) {
          c = c || 'fx';
          var d = c + 'mark',
            e = a ? 0 : (f._data(b, d) || 1) - 1;
          e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, 'mark'));
        }
      },
      queue: function (a, b, c) {
        var d;
        if (a) {
          (b = (b || 'fx') + 'queue'),
            (d = f._data(a, b)),
            c &&
              (!d || f.isArray(c)
                ? (d = f._data(a, b, f.makeArray(c)))
                : d.push(c));
          return d || [];
        }
      },
      dequeue: function (a, b) {
        b = b || 'fx';
        var c = f.queue(a, b),
          d = c.shift(),
          e = {};
        d === 'inprogress' && (d = c.shift()),
          d &&
            (b === 'fx' && c.unshift('inprogress'),
            f._data(a, b + '.run', e),
            d.call(
              a,
              function () {
                f.dequeue(a, b);
              },
              e
            )),
          c.length ||
            (f.removeData(a, b + 'queue ' + b + '.run', !0), n(a, b, 'queue'));
      },
    }),
    f.fn.extend({
      queue: function (a, c) {
        typeof a != 'string' && ((c = a), (a = 'fx'));
        if (c === b) return f.queue(this[0], a);
        return this.each(function () {
          var b = f.queue(this, a, c);
          a === 'fx' && b[0] !== 'inprogress' && f.dequeue(this, a);
        });
      },
      dequeue: function (a) {
        return this.each(function () {
          f.dequeue(this, a);
        });
      },
      delay: function (a, b) {
        (a = f.fx ? f.fx.speeds[a] || a : a), (b = b || 'fx');
        return this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        });
      },
      clearQueue: function (a) {
        return this.queue(a || 'fx', []);
      },
      promise: function (a, c) {
        function m() {
          --h || d.resolveWith(e, [e]);
        }
        typeof a != 'string' && ((c = a), (a = b)), (a = a || 'fx');
        var d = f.Deferred(),
          e = this,
          g = e.length,
          h = 1,
          i = a + 'defer',
          j = a + 'queue',
          k = a + 'mark',
          l;
        while (g--)
          if (
            (l =
              f.data(e[g], i, b, !0) ||
              ((f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) &&
                f.data(e[g], i, f.Callbacks('once memory'), !0)))
          )
            h++, l.add(m);
        m();
        return d.promise();
      },
    });
  var o = /[\n\t\r]/g,
    p = /\s+/,
    q = /\r/g,
    r = /^(?:button|input)$/i,
    s = /^(?:button|input|object|select|textarea)$/i,
    t = /^a(?:rea)?$/i,
    u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    v = f.support.getSetAttribute,
    w,
    x,
    y;
  f.fn.extend({
    attr: function (a, b) {
      return f.access(this, a, b, !0, f.attr);
    },
    removeAttr: function (a) {
      return this.each(function () {
        f.removeAttr(this, a);
      });
    },
    prop: function (a, b) {
      return f.access(this, a, b, !0, f.prop);
    },
    removeProp: function (a) {
      a = f.propFix[a] || a;
      return this.each(function () {
        try {
          (this[a] = b), delete this[a];
        } catch (c) {}
      });
    },
    addClass: function (a) {
      var b, c, d, e, g, h, i;
      if (f.isFunction(a))
        return this.each(function (b) {
          f(this).addClass(a.call(this, b, this.className));
        });
      if (a && typeof a == 'string') {
        b = a.split(p);
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1)
            if (!e.className && b.length === 1) e.className = a;
            else {
              g = ' ' + e.className + ' ';
              for (h = 0, i = b.length; h < i; h++)
                ~g.indexOf(' ' + b[h] + ' ') || (g += b[h] + ' ');
              e.className = f.trim(g);
            }
        }
      }
      return this;
    },
    removeClass: function (a) {
      var c, d, e, g, h, i, j;
      if (f.isFunction(a))
        return this.each(function (b) {
          f(this).removeClass(a.call(this, b, this.className));
        });
      if ((a && typeof a == 'string') || a === b) {
        c = (a || '').split(p);
        for (d = 0, e = this.length; d < e; d++) {
          g = this[d];
          if (g.nodeType === 1 && g.className)
            if (a) {
              h = (' ' + g.className + ' ').replace(o, ' ');
              for (i = 0, j = c.length; i < j; i++)
                h = h.replace(' ' + c[i] + ' ', ' ');
              g.className = f.trim(h);
            } else g.className = '';
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = typeof b == 'boolean';
      if (f.isFunction(a))
        return this.each(function (c) {
          f(this).toggleClass(a.call(this, c, this.className, b), b);
        });
      return this.each(function () {
        if (c === 'string') {
          var e,
            g = 0,
            h = f(this),
            i = b,
            j = a.split(p);
          while ((e = j[g++]))
            (i = d ? i : !h.hasClass(e)), h[i ? 'addClass' : 'removeClass'](e);
        } else if (c === 'undefined' || c === 'boolean') this.className && f._data(this, '__className__', this.className), (this.className = this.className || a === !1 ? '' : f._data(this, '__className__') || '');
      });
    },
    hasClass: function (a) {
      var b = ' ' + a + ' ',
        c = 0,
        d = this.length;
      for (; c < d; c++)
        if (
          this[c].nodeType === 1 &&
          (' ' + this[c].className + ' ').replace(o, ' ').indexOf(b) > -1
        )
          return !0;
      return !1;
    },
    val: function (a) {
      var c,
        d,
        e,
        g = this[0];
      {
        if (!!arguments.length) {
          e = f.isFunction(a);
          return this.each(function (d) {
            var g = f(this),
              h;
            if (this.nodeType === 1) {
              e ? (h = a.call(this, d, g.val())) : (h = a),
                h == null
                  ? (h = '')
                  : typeof h == 'number'
                  ? (h += '')
                  : f.isArray(h) &&
                    (h = f.map(h, function (a) {
                      return a == null ? '' : a + '';
                    })),
                (c =
                  f.valHooks[this.nodeName.toLowerCase()] ||
                  f.valHooks[this.type]);
              if (!c || !('set' in c) || c.set(this, h, 'value') === b)
                this.value = h;
            }
          });
        }
        if (g) {
          c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
          if (c && 'get' in c && (d = c.get(g, 'value')) !== b) return d;
          d = g.value;
          return typeof d == 'string' ? d.replace(q, '') : d == null ? '' : d;
        }
      }
    },
  }),
    f.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e,
              g = a.selectedIndex,
              h = [],
              i = a.options,
              j = a.type === 'select-one';
            if (g < 0) return null;
            (c = j ? g : 0), (d = j ? g + 1 : i.length);
            for (; c < d; c++) {
              e = i[c];
              if (
                e.selected &&
                (f.support.optDisabled
                  ? !e.disabled
                  : e.getAttribute('disabled') === null) &&
                (!e.parentNode.disabled ||
                  !f.nodeName(e.parentNode, 'optgroup'))
              ) {
                b = f(e).val();
                if (j) return b;
                h.push(b);
              }
            }
            if (j && !h.length && i.length) return f(i[g]).val();
            return h;
          },
          set: function (a, b) {
            var c = f.makeArray(b);
            f(a)
              .find('option')
              .each(function () {
                this.selected = f.inArray(f(this).val(), c) >= 0;
              }),
              c.length || (a.selectedIndex = -1);
            return c;
          },
        },
      },
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function (a, c, d, e) {
        var g,
          h,
          i,
          j = a.nodeType;
        if (!!a && j !== 3 && j !== 8 && j !== 2) {
          if (e && c in f.attrFn) return f(a)[c](d);
          if (typeof a.getAttribute == 'undefined') return f.prop(a, c, d);
          (i = j !== 1 || !f.isXMLDoc(a)),
            i &&
              ((c = c.toLowerCase()),
              (h = f.attrHooks[c] || (u.test(c) ? x : w)));
          if (d !== b) {
            if (d === null) {
              f.removeAttr(a, c);
              return;
            }
            if (h && 'set' in h && i && (g = h.set(a, d, c)) !== b) return g;
            a.setAttribute(c, '' + d);
            return d;
          }
          if (h && 'get' in h && i && (g = h.get(a, c)) !== null) return g;
          g = a.getAttribute(c);
          return g === null ? b : g;
        }
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e,
          g,
          h = 0;
        if (b && a.nodeType === 1) {
          (d = b.toLowerCase().split(p)), (g = d.length);
          for (; h < g; h++)
            (e = d[h]),
              e &&
                ((c = f.propFix[e] || e),
                f.attr(a, e, ''),
                a.removeAttribute(v ? e : c),
                u.test(e) && c in a && (a[c] = !1));
        }
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (r.test(a.nodeName) && a.parentNode)
              f.error("type property can't be changed");
            else if (
              !f.support.radioValue &&
              b === 'radio' &&
              f.nodeName(a, 'input')
            ) {
              var c = a.value;
              a.setAttribute('type', b), c && (a.value = c);
              return b;
            }
          },
        },
        value: {
          get: function (a, b) {
            if (w && f.nodeName(a, 'button')) return w.get(a, b);
            return b in a ? a.value : null;
          },
          set: function (a, b, c) {
            if (w && f.nodeName(a, 'button')) return w.set(a, b, c);
            a.value = b;
          },
        },
      },
      propFix: {
        tabindex: 'tabIndex',
        readonly: 'readOnly',
        for: 'htmlFor',
        class: 'className',
        maxlength: 'maxLength',
        cellspacing: 'cellSpacing',
        cellpadding: 'cellPadding',
        rowspan: 'rowSpan',
        colspan: 'colSpan',
        usemap: 'useMap',
        frameborder: 'frameBorder',
        contenteditable: 'contentEditable',
      },
      prop: function (a, c, d) {
        var e,
          g,
          h,
          i = a.nodeType;
        if (!!a && i !== 3 && i !== 8 && i !== 2) {
          (h = i !== 1 || !f.isXMLDoc(a)),
            h && ((c = f.propFix[c] || c), (g = f.propHooks[c]));
          return d !== b
            ? g && 'set' in g && (e = g.set(a, d, c)) !== b
              ? e
              : (a[c] = d)
            : g && 'get' in g && (e = g.get(a, c)) !== null
            ? e
            : a[c];
        }
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode('tabindex');
            return c && c.specified
              ? parseInt(c.value, 10)
              : s.test(a.nodeName) || (t.test(a.nodeName) && a.href)
              ? 0
              : b;
          },
        },
      },
    }),
    (f.attrHooks.tabindex = f.propHooks.tabIndex),
    (x = {
      get: function (a, c) {
        var d,
          e = f.prop(a, c);
        return e === !0 ||
          (typeof e != 'boolean' &&
            (d = a.getAttributeNode(c)) &&
            d.nodeValue !== !1)
          ? c.toLowerCase()
          : b;
      },
      set: function (a, b, c) {
        var d;
        b === !1
          ? f.removeAttr(a, c)
          : ((d = f.propFix[c] || c),
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase()));
        return c;
      },
    }),
    v ||
      ((y = { name: !0, id: !0 }),
      (w = f.valHooks.button = {
        get: function (a, c) {
          var d;
          d = a.getAttributeNode(c);
          return d && (y[c] ? d.nodeValue !== '' : d.specified)
            ? d.nodeValue
            : b;
        },
        set: function (a, b, d) {
          var e = a.getAttributeNode(d);
          e || ((e = c.createAttribute(d)), a.setAttributeNode(e));
          return (e.nodeValue = b + '');
        },
      }),
      (f.attrHooks.tabindex.set = w.set),
      f.each(['width', 'height'], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
          set: function (a, c) {
            if (c === '') {
              a.setAttribute(b, 'auto');
              return c;
            }
          },
        });
      }),
      (f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
          b === '' && (b = 'false'), w.set(a, b, c);
        },
      })),
    f.support.hrefNormalized ||
      f.each(['href', 'src', 'width', 'height'], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
          get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d;
          },
        });
      }),
    f.support.style ||
      (f.attrHooks.style = {
        get: function (a) {
          return a.style.cssText.toLowerCase() || b;
        },
        set: function (a, b) {
          return (a.style.cssText = '' + b);
        },
      }),
    f.support.optSelected ||
      (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
          return null;
        },
      })),
    f.support.enctype || (f.propFix.enctype = 'encoding'),
    f.support.checkOn ||
      f.each(['radio', 'checkbox'], function () {
        f.valHooks[this] = {
          get: function (a) {
            return a.getAttribute('value') === null ? 'on' : a.value;
          },
        };
      }),
    f.each(['radio', 'checkbox'], function () {
      f.valHooks[this] = f.extend(f.valHooks[this], {
        set: function (a, b) {
          if (f.isArray(b)) return (a.checked = f.inArray(f(a).val(), b) >= 0);
        },
      });
    });
  var z = /^(?:textarea|input|select)$/i,
    A = /^([^\.]*)?(?:\.(.+))?$/,
    B = /\bhover(\.\S+)?\b/,
    C = /^key/,
    D = /^(?:mouse|contextmenu)|click/,
    E = /^(?:focusinfocus|focusoutblur)$/,
    F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    G = function (a) {
      var b = F.exec(a);
      b &&
        ((b[1] = (b[1] || '').toLowerCase()),
        (b[3] = b[3] && new RegExp('(?:^|\\s)' + b[3] + '(?:\\s|$)')));
      return b;
    },
    H = function (a, b) {
      var c = a.attributes || {};
      return (
        (!b[1] || a.nodeName.toLowerCase() === b[1]) &&
        (!b[2] || (c.id || {}).value === b[2]) &&
        (!b[3] || b[3].test((c['class'] || {}).value))
      );
    },
    I = function (a) {
      return f.event.special.hover
        ? a
        : a.replace(B, 'mouseenter$1 mouseleave$1');
    };
  (f.event = {
    add: function (a, c, d, e, g) {
      var h, i, j, k, l, m, n, o, p, q, r, s;
      if (
        !(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))
      ) {
        d.handler && ((p = d), (d = p.handler)),
          d.guid || (d.guid = f.guid++),
          (j = h.events),
          j || (h.events = j = {}),
          (i = h.handle),
          i ||
            ((h.handle = i = function (a) {
              return typeof f != 'undefined' &&
                (!a || f.event.triggered !== a.type)
                ? f.event.dispatch.apply(i.elem, arguments)
                : b;
            }),
            (i.elem = a)),
          (c = f.trim(I(c)).split(' '));
        for (k = 0; k < c.length; k++) {
          (l = A.exec(c[k]) || []),
            (m = l[1]),
            (n = (l[2] || '').split('.').sort()),
            (s = f.event.special[m] || {}),
            (m = (g ? s.delegateType : s.bindType) || m),
            (s = f.event.special[m] || {}),
            (o = f.extend(
              {
                type: m,
                origType: l[1],
                data: e,
                handler: d,
                guid: d.guid,
                selector: g,
                quick: G(g),
                namespace: n.join('.'),
              },
              p
            )),
            (r = j[m]);
          if (!r) {
            (r = j[m] = []), (r.delegateCount = 0);
            if (!s.setup || s.setup.call(a, e, n, i) === !1)
              a.addEventListener
                ? a.addEventListener(m, i, !1)
                : a.attachEvent && a.attachEvent('on' + m, i);
          }
          s.add &&
            (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
            g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
            (f.event.global[m] = !0);
        }
        a = null;
      }
    },
    global: {},
    remove: function (a, b, c, d, e) {
      var g = f.hasData(a) && f._data(a),
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s;
      if (!!g && !!(o = g.events)) {
        b = f.trim(I(b || '')).split(' ');
        for (h = 0; h < b.length; h++) {
          (i = A.exec(b[h]) || []), (j = k = i[1]), (l = i[2]);
          if (!j) {
            for (j in o) f.event.remove(a, j + b[h], c, d, !0);
            continue;
          }
          (p = f.event.special[j] || {}),
            (j = (d ? p.delegateType : p.bindType) || j),
            (r = o[j] || []),
            (m = r.length),
            (l = l
              ? new RegExp(
                  '(^|\\.)' +
                    l.split('.').sort().join('\\.(?:.*\\.)?') +
                    '(\\.|$)'
                )
              : null);
          for (n = 0; n < r.length; n++)
            (s = r[n]),
              (e || k === s.origType) &&
                (!c || c.guid === s.guid) &&
                (!l || l.test(s.namespace)) &&
                (!d || d === s.selector || (d === '**' && s.selector)) &&
                (r.splice(n--, 1),
                s.selector && r.delegateCount--,
                p.remove && p.remove.call(a, s));
          r.length === 0 &&
            m !== r.length &&
            ((!p.teardown || p.teardown.call(a, l) === !1) &&
              f.removeEvent(a, j, g.handle),
            delete o[j]);
        }
        f.isEmptyObject(o) &&
          ((q = g.handle),
          q && (q.elem = null),
          f.removeData(a, ['events', 'handle'], !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (c, d, e, g) {
      if (!e || (e.nodeType !== 3 && e.nodeType !== 8)) {
        var h = c.type || c,
          i = [],
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s;
        if (E.test(h + f.event.triggered)) return;
        h.indexOf('!') >= 0 && ((h = h.slice(0, -1)), (k = !0)),
          h.indexOf('.') >= 0 &&
            ((i = h.split('.')), (h = i.shift()), i.sort());
        if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
        (c =
          typeof c == 'object'
            ? c[f.expando]
              ? c
              : new f.Event(h, c)
            : new f.Event(h)),
          (c.type = h),
          (c.isTrigger = !0),
          (c.exclusive = k),
          (c.namespace = i.join('.')),
          (c.namespace_re = c.namespace
            ? new RegExp('(^|\\.)' + i.join('\\.(?:.*\\.)?') + '(\\.|$)')
            : null),
          (o = h.indexOf(':') < 0 ? 'on' + h : '');
        if (!e) {
          j = f.cache;
          for (l in j)
            j[l].events &&
              j[l].events[h] &&
              f.event.trigger(c, d, j[l].handle.elem, !0);
          return;
        }
        (c.result = b),
          c.target || (c.target = e),
          (d = d != null ? f.makeArray(d) : []),
          d.unshift(c),
          (p = f.event.special[h] || {});
        if (p.trigger && p.trigger.apply(e, d) === !1) return;
        r = [[e, p.bindType || h]];
        if (!g && !p.noBubble && !f.isWindow(e)) {
          (s = p.delegateType || h),
            (m = E.test(s + h) ? e : e.parentNode),
            (n = null);
          for (; m; m = m.parentNode) r.push([m, s]), (n = m);
          n &&
            n === e.ownerDocument &&
            r.push([n.defaultView || n.parentWindow || a, s]);
        }
        for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
          (m = r[l][0]),
            (c.type = r[l][1]),
            (q = (f._data(m, 'events') || {})[c.type] && f._data(m, 'handle')),
            q && q.apply(m, d),
            (q = o && m[o]),
            q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
        (c.type = h),
          !g &&
            !c.isDefaultPrevented() &&
            (!p._default || p._default.apply(e.ownerDocument, d) === !1) &&
            (h !== 'click' || !f.nodeName(e, 'a')) &&
            f.acceptData(e) &&
            o &&
            e[h] &&
            ((h !== 'focus' && h !== 'blur') || c.target.offsetWidth !== 0) &&
            !f.isWindow(e) &&
            ((n = e[o]),
            n && (e[o] = null),
            (f.event.triggered = h),
            e[h](),
            (f.event.triggered = b),
            n && (e[o] = n));
        return c.result;
      }
    },
    dispatch: function (c) {
      c = f.event.fix(c || a.event);
      var d = (f._data(this, 'events') || {})[c.type] || [],
        e = d.delegateCount,
        g = [].slice.call(arguments, 0),
        h = !c.exclusive && !c.namespace,
        i = [],
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t;
      (g[0] = c), (c.delegateTarget = this);
      if (e && !c.target.disabled && (!c.button || c.type !== 'click')) {
        (m = f(this)), (m.context = this.ownerDocument || this);
        for (l = c.target; l != this; l = l.parentNode || this) {
          (o = {}), (q = []), (m[0] = l);
          for (j = 0; j < e; j++)
            (r = d[j]),
              (s = r.selector),
              o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)),
              o[s] && q.push(r);
          q.length && i.push({ elem: l, matches: q });
        }
      }
      d.length > e && i.push({ elem: this, matches: d.slice(e) });
      for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
        (p = i[j]), (c.currentTarget = p.elem);
        for (
          k = 0;
          k < p.matches.length && !c.isImmediatePropagationStopped();
          k++
        ) {
          r = p.matches[k];
          if (
            h ||
            (!c.namespace && !r.namespace) ||
            (c.namespace_re && c.namespace_re.test(r.namespace))
          )
            (c.data = r.data),
              (c.handleObj = r),
              (n = (
                (f.event.special[r.origType] || {}).handle || r.handler
              ).apply(p.elem, g)),
              n !== b &&
                ((c.result = n),
                n === !1 && (c.preventDefault(), c.stopPropagation()));
        }
      }
      return c.result;
    },
    props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
      ' '
    ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (a, b) {
        a.which == null &&
          (a.which = b.charCode != null ? b.charCode : b.keyCode);
        return a;
      },
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
        ' '
      ),
      filter: function (a, d) {
        var e,
          f,
          g,
          h = d.button,
          i = d.fromElement;
        a.pageX == null &&
          d.clientX != null &&
          ((e = a.target.ownerDocument || c),
          (f = e.documentElement),
          (g = e.body),
          (a.pageX =
            d.clientX +
            ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
            ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
          (a.pageY =
            d.clientY +
            ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
            ((f && f.clientTop) || (g && g.clientTop) || 0))),
          !a.relatedTarget &&
            i &&
            (a.relatedTarget = i === a.target ? d.toElement : i),
          !a.which &&
            h !== b &&
            (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
        return a;
      },
    },
    fix: function (a) {
      if (a[f.expando]) return a;
      var d,
        e,
        g = a,
        h = f.event.fixHooks[a.type] || {},
        i = h.props ? this.props.concat(h.props) : this.props;
      a = f.Event(g);
      for (d = i.length; d; ) (e = i[--d]), (a[e] = g[e]);
      a.target || (a.target = g.srcElement || c),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        a.metaKey === b && (a.metaKey = a.ctrlKey);
      return h.filter ? h.filter(a, g) : a;
    },
    special: {
      ready: { setup: f.bindReady },
      load: { noBubble: !0 },
      focus: { delegateType: 'focusin' },
      blur: { delegateType: 'focusout' },
      beforeunload: {
        setup: function (a, b, c) {
          f.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function (a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = f.extend(new f.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (f.event.handle = f.event.dispatch),
    (f.removeEvent = c.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          a.detachEvent && a.detachEvent('on' + b, c);
        }),
    (f.Event = function (a, b) {
      if (!(this instanceof f.Event)) return new f.Event(a, b);
      a && a.type
        ? ((this.originalEvent = a),
          (this.type = a.type),
          (this.isDefaultPrevented =
            a.defaultPrevented ||
            a.returnValue === !1 ||
            (a.getPreventDefault && a.getPreventDefault())
              ? K
              : J))
        : (this.type = a),
        b && f.extend(this, b),
        (this.timeStamp = (a && a.timeStamp) || f.now()),
        (this[f.expando] = !0);
    }),
    (f.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = K;
        var a = this.originalEvent;
        !a || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = K;
        var a = this.originalEvent;
        !a || (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = K), this.stopPropagation();
      },
      isDefaultPrevented: J,
      isPropagationStopped: J,
      isImmediatePropagationStopped: J,
    }),
    f.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (
      a,
      b
    ) {
      f.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function (a) {
          var c = this,
            d = a.relatedTarget,
            e = a.handleObj,
            g = e.selector,
            h;
          if (!d || (d !== c && !f.contains(c, d)))
            (a.type = e.origType),
              (h = e.handler.apply(this, arguments)),
              (a.type = b);
          return h;
        },
      };
    }),
    f.support.submitBubbles ||
      (f.event.special.submit = {
        setup: function () {
          if (f.nodeName(this, 'form')) return !1;
          f.event.add(this, 'click._submit keypress._submit', function (a) {
            var c = a.target,
              d =
                f.nodeName(c, 'input') || f.nodeName(c, 'button') ? c.form : b;
            d &&
              !d._submit_attached &&
              (f.event.add(d, 'submit._submit', function (a) {
                this.parentNode &&
                  !a.isTrigger &&
                  f.event.simulate('submit', this.parentNode, a, !0);
              }),
              (d._submit_attached = !0));
          });
        },
        teardown: function () {
          if (f.nodeName(this, 'form')) return !1;
          f.event.remove(this, '._submit');
        },
      }),
    f.support.changeBubbles ||
      (f.event.special.change = {
        setup: function () {
          if (z.test(this.nodeName)) {
            if (this.type === 'checkbox' || this.type === 'radio')
              f.event.add(this, 'propertychange._change', function (a) {
                a.originalEvent.propertyName === 'checked' &&
                  (this._just_changed = !0);
              }),
                f.event.add(this, 'click._change', function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    ((this._just_changed = !1),
                    f.event.simulate('change', this, a, !0));
                });
            return !1;
          }
          f.event.add(this, 'beforeactivate._change', function (a) {
            var b = a.target;
            z.test(b.nodeName) &&
              !b._change_attached &&
              (f.event.add(b, 'change._change', function (a) {
                this.parentNode &&
                  !a.isSimulated &&
                  !a.isTrigger &&
                  f.event.simulate('change', this.parentNode, a, !0);
              }),
              (b._change_attached = !0));
          });
        },
        handle: function (a) {
          var b = a.target;
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            (b.type !== 'radio' && b.type !== 'checkbox')
          )
            return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          f.event.remove(this, '._change');
          return z.test(this.nodeName);
        },
      }),
    f.support.focusinBubbles ||
      f.each({ focus: 'focusin', blur: 'focusout' }, function (a, b) {
        var d = 0,
          e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0);
          };
        f.event.special[b] = {
          setup: function () {
            d++ === 0 && c.addEventListener(a, e, !0);
          },
          teardown: function () {
            --d === 0 && c.removeEventListener(a, e, !0);
          },
        };
      }),
    f.fn.extend({
      on: function (a, c, d, e, g) {
        var h, i;
        if (typeof a == 'object') {
          typeof c != 'string' && ((d = c), (c = b));
          for (i in a) this.on(i, c, d, a[i], g);
          return this;
        }
        d == null && e == null
          ? ((e = c), (d = c = b))
          : e == null &&
            (typeof c == 'string'
              ? ((e = d), (d = b))
              : ((e = d), (d = c), (c = b)));
        if (e === !1) e = J;
        else if (!e) return this;
        g === 1 &&
          ((h = e),
          (e = function (a) {
            f().off(a);
            return h.apply(this, arguments);
          }),
          (e.guid = h.guid || (h.guid = f.guid++)));
        return this.each(function () {
          f.event.add(this, a, e, d, c);
        });
      },
      one: function (a, b, c, d) {
        return this.on.call(this, a, b, c, d, 1);
      },
      off: function (a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
          var e = a.handleObj;
          f(a.delegateTarget).off(
            e.namespace ? e.type + '.' + e.namespace : e.type,
            e.selector,
            e.handler
          );
          return this;
        }
        if (typeof a == 'object') {
          for (var g in a) this.off(g, c, a[g]);
          return this;
        }
        if (c === !1 || typeof c == 'function') (d = c), (c = b);
        d === !1 && (d = J);
        return this.each(function () {
          f.event.remove(this, a, d, c);
        });
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      live: function (a, b, c) {
        f(this.context).on(a, this.selector, b, c);
        return this;
      },
      die: function (a, b) {
        f(this.context).off(a, this.selector || '**', b);
        return this;
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return arguments.length == 1 ? this.off(a, '**') : this.off(b, a, c);
      },
      trigger: function (a, b) {
        return this.each(function () {
          f.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        if (this[0]) return f.event.trigger(a, b, this[0], !0);
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || f.guid++,
          d = 0,
          e = function (c) {
            var e = (f._data(this, 'lastToggle' + a.guid) || 0) % d;
            f._data(this, 'lastToggle' + a.guid, e + 1), c.preventDefault();
            return b[e].apply(this, arguments) || !1;
          };
        e.guid = c;
        while (d < b.length) b[d++].guid = c;
        return this.click(e);
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    f.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (a, b) {
        (f.fn[b] = function (a, c) {
          c == null && ((c = a), (a = null));
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        }),
          f.attrFn && (f.attrFn[b] = !0),
          C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
          D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks);
      }
    ),
    (function () {
      function x(a, b, c, e, f, g) {
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h];
          if (j) {
            var k = !1;
            j = j[a];
            while (j) {
              if (j[d] === c) {
                k = e[j.sizset];
                break;
              }
              if (j.nodeType === 1) {
                g || ((j[d] = c), (j.sizset = h));
                if (typeof b != 'string') {
                  if (j === b) {
                    k = !0;
                    break;
                  }
                } else if (m.filter(b, [j]).length > 0) {
                  k = j;
                  break;
                }
              }
              j = j[a];
            }
            e[h] = k;
          }
        }
      }
      function w(a, b, c, e, f, g) {
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h];
          if (j) {
            var k = !1;
            j = j[a];
            while (j) {
              if (j[d] === c) {
                k = e[j.sizset];
                break;
              }
              j.nodeType === 1 && !g && ((j[d] = c), (j.sizset = h));
              if (j.nodeName.toLowerCase() === b) {
                k = j;
                break;
              }
              j = j[a];
            }
            e[h] = k;
          }
        }
      }
      var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = 'sizcache' + (Math.random() + '').replace('.', ''),
        e = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/;
      [0, 0].sort(function () {
        i = !1;
        return 0;
      });
      var m = function (b, d, e, f) {
        (e = e || []), (d = d || c);
        var h = d;
        if (d.nodeType !== 1 && d.nodeType !== 9) return [];
        if (!b || typeof b != 'string') return e;
        var i,
          j,
          k,
          l,
          n,
          q,
          r,
          t,
          u = !0,
          v = m.isXML(d),
          w = [],
          x = b;
        do {
          a.exec(''), (i = a.exec(x));
          if (i) {
            (x = i[3]), w.push(i[1]);
            if (i[2]) {
              l = i[3];
              break;
            }
          }
        } while (i);
        if (w.length > 1 && p.exec(b))
          if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
          else {
            j = o.relative[w[0]] ? [d] : m(w.shift(), d);
            while (w.length)
              (b = w.shift()),
                o.relative[b] && (b += w.shift()),
                (j = y(b, j, f));
          }
        else {
          !f &&
            w.length > 1 &&
            d.nodeType === 9 &&
            !v &&
            o.match.ID.test(w[0]) &&
            !o.match.ID.test(w[w.length - 1]) &&
            ((n = m.find(w.shift(), d, v)),
            (d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]));
          if (d) {
            (n = f
              ? { expr: w.pop(), set: s(f) }
              : m.find(
                  w.pop(),
                  w.length === 1 &&
                    (w[0] === '~' || w[0] === '+') &&
                    d.parentNode
                    ? d.parentNode
                    : d,
                  v
                )),
              (j = n.expr ? m.filter(n.expr, n.set) : n.set),
              w.length > 0 ? (k = s(j)) : (u = !1);
            while (w.length)
              (q = w.pop()),
                (r = q),
                o.relative[q] ? (r = w.pop()) : (q = ''),
                r == null && (r = d),
                o.relative[q](k, r, v);
          } else k = w = [];
        }
        k || (k = j), k || m.error(q || b);
        if (g.call(k) === '[object Array]')
          if (!u) e.push.apply(e, k);
          else if (d && d.nodeType === 1)
            for (t = 0; k[t] != null; t++)
              k[t] &&
                (k[t] === !0 || (k[t].nodeType === 1 && m.contains(d, k[t]))) &&
                e.push(j[t]);
          else
            for (t = 0; k[t] != null; t++)
              k[t] && k[t].nodeType === 1 && e.push(j[t]);
        else s(k, e);
        l && (m(l, h, e, f), m.uniqueSort(e));
        return e;
      };
      (m.uniqueSort = function (a) {
        if (u) {
          (h = i), a.sort(u);
          if (h)
            for (var b = 1; b < a.length; b++)
              a[b] === a[b - 1] && a.splice(b--, 1);
        }
        return a;
      }),
        (m.matches = function (a, b) {
          return m(a, null, null, b);
        }),
        (m.matchesSelector = function (a, b) {
          return m(b, null, null, [a]).length > 0;
        }),
        (m.find = function (a, b, c) {
          var d, e, f, g, h, i;
          if (!a) return [];
          for (e = 0, f = o.order.length; e < f; e++) {
            h = o.order[e];
            if ((g = o.leftMatch[h].exec(a))) {
              (i = g[1]), g.splice(1, 1);
              if (i.substr(i.length - 1) !== '\\') {
                (g[1] = (g[1] || '').replace(j, '')), (d = o.find[h](g, b, c));
                if (d != null) {
                  a = a.replace(o.match[h], '');
                  break;
                }
              }
            }
          }
          d ||
            (d =
              typeof b.getElementsByTagName != 'undefined'
                ? b.getElementsByTagName('*')
                : []);
          return { set: d, expr: a };
        }),
        (m.filter = function (a, c, d, e) {
          var f,
            g,
            h,
            i,
            j,
            k,
            l,
            n,
            p,
            q = a,
            r = [],
            s = c,
            t = c && c[0] && m.isXML(c[0]);
          while (a && c.length) {
            for (h in o.filter)
              if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                (k = o.filter[h]), (l = f[1]), (g = !1), f.splice(1, 1);
                if (l.substr(l.length - 1) === '\\') continue;
                s === r && (r = []);
                if (o.preFilter[h]) {
                  f = o.preFilter[h](f, s, d, r, e, t);
                  if (!f) g = i = !0;
                  else if (f === !0) continue;
                }
                if (f)
                  for (n = 0; (j = s[n]) != null; n++)
                    j &&
                      ((i = k(j, f, n, s)),
                      (p = e ^ i),
                      d && i != null
                        ? p
                          ? (g = !0)
                          : (s[n] = !1)
                        : p && (r.push(j), (g = !0)));
                if (i !== b) {
                  d || (s = r), (a = a.replace(o.match[h], ''));
                  if (!g) return [];
                  break;
                }
              }
            if (a === q)
              if (g == null) m.error(a);
              else break;
            q = a;
          }
          return s;
        }),
        (m.error = function (a) {
          throw new Error('Syntax error, unrecognized expression: ' + a);
        });
      var n = (m.getText = function (a) {
          var b,
            c,
            d = a.nodeType,
            e = '';
          if (d) {
            if (d === 1 || d === 9) {
              if (typeof a.textContent == 'string') return a.textContent;
              if (typeof a.innerText == 'string')
                return a.innerText.replace(k, '');
              for (a = a.firstChild; a; a = a.nextSibling) e += n(a);
            } else if (d === 3 || d === 4) return a.nodeValue;
          } else for (b = 0; (c = a[b]); b++) c.nodeType !== 8 && (e += n(c));
          return e;
        }),
        o = (m.selectors = {
          order: ['ID', 'NAME', 'TAG'],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: { class: 'className', for: 'htmlFor' },
          attrHandle: {
            href: function (a) {
              return a.getAttribute('href');
            },
            type: function (a) {
              return a.getAttribute('type');
            },
          },
          relative: {
            '+': function (a, b) {
              var c = typeof b == 'string',
                d = c && !l.test(b),
                e = c && !d;
              d && (b = b.toLowerCase());
              for (var f = 0, g = a.length, h; f < g; f++)
                if ((h = a[f])) {
                  while ((h = h.previousSibling) && h.nodeType !== 1);
                  a[f] =
                    e || (h && h.nodeName.toLowerCase() === b)
                      ? h || !1
                      : h === b;
                }
              e && m.filter(b, a, !0);
            },
            '>': function (a, b) {
              var c,
                d = typeof b == 'string',
                e = 0,
                f = a.length;
              if (d && !l.test(b)) {
                b = b.toLowerCase();
                for (; e < f; e++) {
                  c = a[e];
                  if (c) {
                    var g = c.parentNode;
                    a[e] = g.nodeName.toLowerCase() === b ? g : !1;
                  }
                }
              } else {
                for (; e < f; e++)
                  (c = a[e]),
                    c && (a[e] = d ? c.parentNode : c.parentNode === b);
                d && m.filter(b, a, !0);
              }
            },
            '': function (a, b, c) {
              var d,
                f = e++,
                g = x;
              typeof b == 'string' &&
                !l.test(b) &&
                ((b = b.toLowerCase()), (d = b), (g = w)),
                g('parentNode', b, f, a, d, c);
            },
            '~': function (a, b, c) {
              var d,
                f = e++,
                g = x;
              typeof b == 'string' &&
                !l.test(b) &&
                ((b = b.toLowerCase()), (d = b), (g = w)),
                g('previousSibling', b, f, a, d, c);
            },
          },
          find: {
            ID: function (a, b, c) {
              if (typeof b.getElementById != 'undefined' && !c) {
                var d = b.getElementById(a[1]);
                return d && d.parentNode ? [d] : [];
              }
            },
            NAME: function (a, b) {
              if (typeof b.getElementsByName != 'undefined') {
                var c = [],
                  d = b.getElementsByName(a[1]);
                for (var e = 0, f = d.length; e < f; e++)
                  d[e].getAttribute('name') === a[1] && c.push(d[e]);
                return c.length === 0 ? null : c;
              }
            },
            TAG: function (a, b) {
              if (typeof b.getElementsByTagName != 'undefined')
                return b.getElementsByTagName(a[1]);
            },
          },
          preFilter: {
            CLASS: function (a, b, c, d, e, f) {
              a = ' ' + a[1].replace(j, '') + ' ';
              if (f) return a;
              for (var g = 0, h; (h = b[g]) != null; g++)
                h &&
                  (e ^
                  (h.className &&
                    (' ' + h.className + ' ')
                      .replace(/[\t\n\r]/g, ' ')
                      .indexOf(a) >= 0)
                    ? c || d.push(h)
                    : c && (b[g] = !1));
              return !1;
            },
            ID: function (a) {
              return a[1].replace(j, '');
            },
            TAG: function (a, b) {
              return a[1].replace(j, '').toLowerCase();
            },
            CHILD: function (a) {
              if (a[1] === 'nth') {
                a[2] || m.error(a[0]), (a[2] = a[2].replace(/^\+|\s*/g, ''));
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  (a[2] === 'even' && '2n') ||
                    (a[2] === 'odd' && '2n+1') ||
                    (!/\D/.test(a[2]) && '0n+' + a[2]) ||
                    a[2]
                );
                (a[2] = b[1] + (b[2] || 1) - 0), (a[3] = b[3] - 0);
              } else a[2] && m.error(a[0]);
              a[0] = e++;
              return a;
            },
            ATTR: function (a, b, c, d, e, f) {
              var g = (a[1] = a[1].replace(j, ''));
              !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                (a[4] = (a[4] || a[5] || '').replace(j, '')),
                a[2] === '~=' && (a[4] = ' ' + a[4] + ' ');
              return a;
            },
            PSEUDO: function (b, c, d, e, f) {
              if (b[1] === 'not')
                if ((a.exec(b[3]) || '').length > 1 || /^\w/.test(b[3]))
                  b[3] = m(b[3], null, null, c);
                else {
                  var g = m.filter(b[3], c, d, !0 ^ f);
                  d || e.push.apply(e, g);
                  return !1;
                }
              else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                return !0;
              return b;
            },
            POS: function (a) {
              a.unshift(!0);
              return a;
            },
          },
          filters: {
            enabled: function (a) {
              return a.disabled === !1 && a.type !== 'hidden';
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              return a.checked === !0;
            },
            selected: function (a) {
              a.parentNode && a.parentNode.selectedIndex;
              return a.selected === !0;
            },
            parent: function (a) {
              return !!a.firstChild;
            },
            empty: function (a) {
              return !a.firstChild;
            },
            has: function (a, b, c) {
              return !!m(c[3], a).length;
            },
            header: function (a) {
              return /h\d/i.test(a.nodeName);
            },
            text: function (a) {
              var b = a.getAttribute('type'),
                c = a.type;
              return (
                a.nodeName.toLowerCase() === 'input' &&
                'text' === c &&
                (b === c || b === null)
              );
            },
            radio: function (a) {
              return a.nodeName.toLowerCase() === 'input' && 'radio' === a.type;
            },
            checkbox: function (a) {
              return (
                a.nodeName.toLowerCase() === 'input' && 'checkbox' === a.type
              );
            },
            file: function (a) {
              return a.nodeName.toLowerCase() === 'input' && 'file' === a.type;
            },
            password: function (a) {
              return (
                a.nodeName.toLowerCase() === 'input' && 'password' === a.type
              );
            },
            submit: function (a) {
              var b = a.nodeName.toLowerCase();
              return (b === 'input' || b === 'button') && 'submit' === a.type;
            },
            image: function (a) {
              return a.nodeName.toLowerCase() === 'input' && 'image' === a.type;
            },
            reset: function (a) {
              var b = a.nodeName.toLowerCase();
              return (b === 'input' || b === 'button') && 'reset' === a.type;
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return (b === 'input' && 'button' === a.type) || b === 'button';
            },
            input: function (a) {
              return /input|select|textarea|button/i.test(a.nodeName);
            },
            focus: function (a) {
              return a === a.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function (a, b) {
              return b === 0;
            },
            last: function (a, b, c, d) {
              return b === d.length - 1;
            },
            even: function (a, b) {
              return b % 2 === 0;
            },
            odd: function (a, b) {
              return b % 2 === 1;
            },
            lt: function (a, b, c) {
              return b < c[3] - 0;
            },
            gt: function (a, b, c) {
              return b > c[3] - 0;
            },
            nth: function (a, b, c) {
              return c[3] - 0 === b;
            },
            eq: function (a, b, c) {
              return c[3] - 0 === b;
            },
          },
          filter: {
            PSEUDO: function (a, b, c, d) {
              var e = b[1],
                f = o.filters[e];
              if (f) return f(a, c, b, d);
              if (e === 'contains')
                return (
                  (a.textContent || a.innerText || n([a]) || '').indexOf(
                    b[3]
                  ) >= 0
                );
              if (e === 'not') {
                var g = b[3];
                for (var h = 0, i = g.length; h < i; h++)
                  if (g[h] === a) return !1;
                return !0;
              }
              m.error(e);
            },
            CHILD: function (a, b) {
              var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = b[1],
                l = a;
              switch (k) {
                case 'only':
                case 'first':
                  while ((l = l.previousSibling))
                    if (l.nodeType === 1) return !1;
                  if (k === 'first') return !0;
                  l = a;
                case 'last':
                  while ((l = l.nextSibling)) if (l.nodeType === 1) return !1;
                  return !0;
                case 'nth':
                  (c = b[2]), (e = b[3]);
                  if (c === 1 && e === 0) return !0;
                  (f = b[0]), (g = a.parentNode);
                  if (g && (g[d] !== f || !a.nodeIndex)) {
                    i = 0;
                    for (l = g.firstChild; l; l = l.nextSibling)
                      l.nodeType === 1 && (l.nodeIndex = ++i);
                    g[d] = f;
                  }
                  j = a.nodeIndex - e;
                  return c === 0 ? j === 0 : j % c === 0 && j / c >= 0;
              }
            },
            ID: function (a, b) {
              return a.nodeType === 1 && a.getAttribute('id') === b;
            },
            TAG: function (a, b) {
              return (
                (b === '*' && a.nodeType === 1) ||
                (!!a.nodeName && a.nodeName.toLowerCase() === b)
              );
            },
            CLASS: function (a, b) {
              return (
                (' ' + (a.className || a.getAttribute('class')) + ' ').indexOf(
                  b
                ) > -1
              );
            },
            ATTR: function (a, b) {
              var c = b[1],
                d = m.attr
                  ? m.attr(a, c)
                  : o.attrHandle[c]
                  ? o.attrHandle[c](a)
                  : a[c] != null
                  ? a[c]
                  : a.getAttribute(c),
                e = d + '',
                f = b[2],
                g = b[4];
              return d == null
                ? f === '!='
                : !f && m.attr
                ? d != null
                : f === '='
                ? e === g
                : f === '*='
                ? e.indexOf(g) >= 0
                : f === '~='
                ? (' ' + e + ' ').indexOf(g) >= 0
                : g
                ? f === '!='
                  ? e !== g
                  : f === '^='
                  ? e.indexOf(g) === 0
                  : f === '$='
                  ? e.substr(e.length - g.length) === g
                  : f === '|='
                  ? e === g || e.substr(0, g.length + 1) === g + '-'
                  : !1
                : e && d !== !1;
            },
            POS: function (a, b, c, d) {
              var e = b[2],
                f = o.setFilters[e];
              if (f) return f(a, c, b, d);
            },
          },
        }),
        p = o.match.POS,
        q = function (a, b) {
          return '\\' + (b - 0 + 1);
        };
      for (var r in o.match)
        (o.match[r] = new RegExp(
          o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source
        )),
          (o.leftMatch[r] = new RegExp(
            /(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q)
          ));
      var s = function (a, b) {
        a = Array.prototype.slice.call(a, 0);
        if (b) {
          b.push.apply(b, a);
          return b;
        }
        return a;
      };
      try {
        Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType;
      } catch (t) {
        s = function (a, b) {
          var c = 0,
            d = b || [];
          if (g.call(a) === '[object Array]') Array.prototype.push.apply(d, a);
          else if (typeof a.length == 'number')
            for (var e = a.length; c < e; c++) d.push(a[c]);
          else for (; a[c]; c++) d.push(a[c]);
          return d;
        };
      }
      var u, v;
      c.documentElement.compareDocumentPosition
        ? (u = function (a, b) {
            if (a === b) {
              h = !0;
              return 0;
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)
              return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1;
          })
        : ((u = function (a, b) {
            if (a === b) {
              h = !0;
              return 0;
            }
            if (a.sourceIndex && b.sourceIndex)
              return a.sourceIndex - b.sourceIndex;
            var c,
              d,
              e = [],
              f = [],
              g = a.parentNode,
              i = b.parentNode,
              j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), (j = j.parentNode);
            j = i;
            while (j) f.unshift(j), (j = j.parentNode);
            (c = e.length), (d = f.length);
            for (var k = 0; k < c && k < d; k++)
              if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
          }),
          (v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
              if (d === b) return -1;
              d = d.nextSibling;
            }
            return 1;
          })),
        (function () {
          var a = c.createElement('div'),
            d = 'script' + new Date().getTime(),
            e = c.documentElement;
          (a.innerHTML = "<a name='" + d + "'/>"),
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) &&
              ((o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != 'undefined' && !d) {
                  var e = c.getElementById(a[1]);
                  return e
                    ? e.id === a[1] ||
                      (typeof e.getAttributeNode != 'undefined' &&
                        e.getAttributeNode('id').nodeValue === a[1])
                      ? [e]
                      : b
                    : [];
                }
              }),
              (o.filter.ID = function (a, b) {
                var c =
                  typeof a.getAttributeNode != 'undefined' &&
                  a.getAttributeNode('id');
                return a.nodeType === 1 && c && c.nodeValue === b;
              })),
            e.removeChild(a),
            (e = a = null);
        })(),
        (function () {
          var a = c.createElement('div');
          a.appendChild(c.createComment('')),
            a.getElementsByTagName('*').length > 0 &&
              (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === '*') {
                  var d = [];
                  for (var e = 0; c[e]; e++)
                    c[e].nodeType === 1 && d.push(c[e]);
                  c = d;
                }
                return c;
              }),
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute != 'undefined' &&
              a.firstChild.getAttribute('href') !== '#' &&
              (o.attrHandle.href = function (a) {
                return a.getAttribute('href', 2);
              }),
            (a = null);
        })(),
        c.querySelectorAll &&
          (function () {
            var a = m,
              b = c.createElement('div'),
              d = '__sizzle__';
            b.innerHTML = "<p class='TEST'></p>";
            if (
              !b.querySelectorAll ||
              b.querySelectorAll('.TEST').length !== 0
            ) {
              m = function (b, e, f, g) {
                e = e || c;
                if (!g && !m.isXML(e)) {
                  var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                  if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                    if (h[1]) return s(e.getElementsByTagName(b), f);
                    if (h[2] && o.find.CLASS && e.getElementsByClassName)
                      return s(e.getElementsByClassName(h[2]), f);
                  }
                  if (e.nodeType === 9) {
                    if (b === 'body' && e.body) return s([e.body], f);
                    if (h && h[3]) {
                      var i = e.getElementById(h[3]);
                      if (!i || !i.parentNode) return s([], f);
                      if (i.id === h[3]) return s([i], f);
                    }
                    try {
                      return s(e.querySelectorAll(b), f);
                    } catch (j) {}
                  } else if (
                    e.nodeType === 1 &&
                    e.nodeName.toLowerCase() !== 'object'
                  ) {
                    var k = e,
                      l = e.getAttribute('id'),
                      n = l || d,
                      p = e.parentNode,
                      q = /^\s*[+~]/.test(b);
                    l ? (n = n.replace(/'/g, '\\$&')) : e.setAttribute('id', n),
                      q && p && (e = e.parentNode);
                    try {
                      if (!q || p)
                        return s(
                          e.querySelectorAll("[id='" + n + "'] " + b),
                          f
                        );
                    } catch (r) {
                    } finally {
                      l || k.removeAttribute('id');
                    }
                  }
                }
                return a(b, e, f, g);
              };
              for (var e in a) m[e] = a[e];
              b = null;
            }
          })(),
        (function () {
          var a = c.documentElement,
            b =
              a.matchesSelector ||
              a.mozMatchesSelector ||
              a.webkitMatchesSelector ||
              a.msMatchesSelector;
          if (b) {
            var d = !b.call(c.createElement('div'), 'div'),
              e = !1;
            try {
              b.call(c.documentElement, "[test!='']:sizzle");
            } catch (f) {
              e = !0;
            }
            m.matchesSelector = function (a, c) {
              c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
              if (!m.isXML(a))
                try {
                  if (e || (!o.match.PSEUDO.test(c) && !/!=/.test(c))) {
                    var f = b.call(a, c);
                    if (f || !d || (a.document && a.document.nodeType !== 11))
                      return f;
                  }
                } catch (g) {}
              return m(c, null, null, [a]).length > 0;
            };
          }
        })(),
        (function () {
          var a = c.createElement('div');
          a.innerHTML = "<div class='test e'></div><div class='test'></div>";
          if (
            !!a.getElementsByClassName &&
            a.getElementsByClassName('e').length !== 0
          ) {
            a.lastChild.className = 'e';
            if (a.getElementsByClassName('e').length === 1) return;
            o.order.splice(1, 0, 'CLASS'),
              (o.find.CLASS = function (a, b, c) {
                if (typeof b.getElementsByClassName != 'undefined' && !c)
                  return b.getElementsByClassName(a[1]);
              }),
              (a = null);
          }
        })(),
        c.documentElement.contains
          ? (m.contains = function (a, b) {
              return a !== b && (a.contains ? a.contains(b) : !0);
            })
          : c.documentElement.compareDocumentPosition
          ? (m.contains = function (a, b) {
              return !!(a.compareDocumentPosition(b) & 16);
            })
          : (m.contains = function () {
              return !1;
            }),
        (m.isXML = function (a) {
          var b = (a ? a.ownerDocument || a : 0).documentElement;
          return b ? b.nodeName !== 'HTML' : !1;
        });
      var y = function (a, b, c) {
        var d,
          e = [],
          f = '',
          g = b.nodeType ? [b] : b;
        while ((d = o.match.PSEUDO.exec(a)))
          (f += d[0]), (a = a.replace(o.match.PSEUDO, ''));
        a = o.relative[a] ? a + '*' : a;
        for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
        return m.filter(f, e);
      };
      (m.attr = f.attr),
        (m.selectors.attrMap = {}),
        (f.find = m),
        (f.expr = m.selectors),
        (f.expr[':'] = f.expr.filters),
        (f.unique = m.uniqueSort),
        (f.text = m.getText),
        (f.isXMLDoc = m.isXML),
        (f.contains = m.contains);
    })();
  var L = /Until$/,
    M = /^(?:parents|prevUntil|prevAll)/,
    N = /,/,
    O = /^.[^:#\[\.,]*$/,
    P = Array.prototype.slice,
    Q = f.expr.match.POS,
    R = { children: !0, contents: !0, next: !0, prev: !0 };
  f.fn.extend({
    find: function (a) {
      var b = this,
        c,
        d;
      if (typeof a != 'string')
        return f(a).filter(function () {
          for (c = 0, d = b.length; c < d; c++)
            if (f.contains(b[c], this)) return !0;
        });
      var e = this.pushStack('', 'find', a),
        g,
        h,
        i;
      for (c = 0, d = this.length; c < d; c++) {
        (g = e.length), f.find(a, this[c], e);
        if (c > 0)
          for (h = g; h < e.length; h++)
            for (i = 0; i < g; i++)
              if (e[i] === e[h]) {
                e.splice(h--, 1);
                break;
              }
      }
      return e;
    },
    has: function (a) {
      var b = f(a);
      return this.filter(function () {
        for (var a = 0, c = b.length; a < c; a++)
          if (f.contains(this, b[a])) return !0;
      });
    },
    not: function (a) {
      return this.pushStack(T(this, a, !1), 'not', a);
    },
    filter: function (a) {
      return this.pushStack(T(this, a, !0), 'filter', a);
    },
    is: function (a) {
      return (
        !!a &&
        (typeof a == 'string'
          ? Q.test(a)
            ? f(a, this.context).index(this[0]) >= 0
            : f.filter(a, this).length > 0
          : this.filter(a).length > 0)
      );
    },
    closest: function (a, b) {
      var c = [],
        d,
        e,
        g = this[0];
      if (f.isArray(a)) {
        var h = 1;
        while (g && g.ownerDocument && g !== b) {
          for (d = 0; d < a.length; d++)
            f(g).is(a[d]) && c.push({ selector: a[d], elem: g, level: h });
          (g = g.parentNode), h++;
        }
        return c;
      }
      var i = Q.test(a) || typeof a != 'string' ? f(a, b || this.context) : 0;
      for (d = 0, e = this.length; d < e; d++) {
        g = this[d];
        while (g) {
          if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
            c.push(g);
            break;
          }
          g = g.parentNode;
          if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break;
        }
      }
      c = c.length > 1 ? f.unique(c) : c;
      return this.pushStack(c, 'closest', a);
    },
    index: function (a) {
      if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
      if (typeof a == 'string') return f.inArray(this[0], f(a));
      return f.inArray(a.jquery ? a[0] : a, this);
    },
    add: function (a, b) {
      var c =
          typeof a == 'string'
            ? f(a, b)
            : f.makeArray(a && a.nodeType ? [a] : a),
        d = f.merge(this.get(), c);
      return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  }),
    f.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && b.nodeType !== 11 ? b : null;
        },
        parents: function (a) {
          return f.dir(a, 'parentNode');
        },
        parentsUntil: function (a, b, c) {
          return f.dir(a, 'parentNode', c);
        },
        next: function (a) {
          return f.nth(a, 2, 'nextSibling');
        },
        prev: function (a) {
          return f.nth(a, 2, 'previousSibling');
        },
        nextAll: function (a) {
          return f.dir(a, 'nextSibling');
        },
        prevAll: function (a) {
          return f.dir(a, 'previousSibling');
        },
        nextUntil: function (a, b, c) {
          return f.dir(a, 'nextSibling', c);
        },
        prevUntil: function (a, b, c) {
          return f.dir(a, 'previousSibling', c);
        },
        siblings: function (a) {
          return f.sibling(a.parentNode.firstChild, a);
        },
        children: function (a) {
          return f.sibling(a.firstChild);
        },
        contents: function (a) {
          return f.nodeName(a, 'iframe')
            ? a.contentDocument || a.contentWindow.document
            : f.makeArray(a.childNodes);
        },
      },
      function (a, b) {
        f.fn[a] = function (c, d) {
          var e = f.map(this, b, c);
          L.test(a) || (d = c),
            d && typeof d == 'string' && (e = f.filter(d, e)),
            (e = this.length > 1 && !R[a] ? f.unique(e) : e),
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
          return this.pushStack(e, a, P.call(arguments).join(','));
        };
      }
    ),
    f.extend({
      filter: function (a, b, c) {
        c && (a = ':not(' + a + ')');
        return b.length === 1
          ? f.find.matchesSelector(b[0], a)
            ? [b[0]]
            : []
          : f.find.matches(a, b);
      },
      dir: function (a, c, d) {
        var e = [],
          g = a[c];
        while (
          g &&
          g.nodeType !== 9 &&
          (d === b || g.nodeType !== 1 || !f(g).is(d))
        )
          g.nodeType === 1 && e.push(g), (g = g[c]);
        return e;
      },
      nth: function (a, b, c, d) {
        b = b || 1;
        var e = 0;
        for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
        return a;
      },
      sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
        return c;
      },
    });
  var V =
      'abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    W = / jQuery\d+="(?:\d+|null)"/g,
    X = /^\s+/,
    Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Z = /<([\w:]+)/,
    $ = /<tbody/i,
    _ = /<|&#?\w+;/,
    ba = /<(?:script|style)/i,
    bb = /<(?:script|object|embed|option|style)/i,
    bc = new RegExp('<(?:' + V + ')', 'i'),
    bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    be = /\/(java|ecma)script/i,
    bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
    bg = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      area: [1, '<map>', '</map>'],
      _default: [0, '', ''],
    },
    bh = U(c);
  (bg.optgroup = bg.option),
    (bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead),
    (bg.th = bg.td),
    f.support.htmlSerialize || (bg._default = [1, 'div<div>', '</div>']),
    f.fn.extend({
      text: function (a) {
        if (f.isFunction(a))
          return this.each(function (b) {
            var c = f(this);
            c.text(a.call(this, b, c.text()));
          });
        if (typeof a != 'object' && a !== b)
          return this.empty().append(
            ((this[0] && this[0].ownerDocument) || c).createTextNode(a)
          );
        return f.text(this);
      },
      wrapAll: function (a) {
        if (f.isFunction(a))
          return this.each(function (b) {
            f(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        if (f.isFunction(a))
          return this.each(function (b) {
            f(this).wrapInner(a.call(this, b));
          });
        return this.each(function () {
          var b = f(this),
            c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a);
        });
      },
      wrap: function (a) {
        var b = f.isFunction(a);
        return this.each(function (c) {
          f(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            f.nodeName(this, 'body') || f(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          this.nodeType === 1 && this.appendChild(a);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          this.nodeType === 1 && this.insertBefore(a, this.firstChild);
        });
      },
      before: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = f.clean(arguments);
          a.push.apply(a, this.toArray());
          return this.pushStack(a, 'before', arguments);
        }
      },
      after: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = this.pushStack(this, 'after', arguments);
          a.push.apply(a, f.clean(arguments));
          return a;
        }
      },
      remove: function (a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++)
          if (!a || f.filter(a, [d]).length)
            !b &&
              d.nodeType === 1 &&
              (f.cleanData(d.getElementsByTagName('*')), f.cleanData([d])),
              d.parentNode && d.parentNode.removeChild(d);
        return this;
      },
      empty: function () {
        for (var a = 0, b; (b = this[a]) != null; a++) {
          b.nodeType === 1 && f.cleanData(b.getElementsByTagName('*'));
          while (b.firstChild) b.removeChild(b.firstChild);
        }
        return this;
      },
      clone: function (a, b) {
        (a = a == null ? !1 : a), (b = b == null ? a : b);
        return this.map(function () {
          return f.clone(this, a, b);
        });
      },
      html: function (a) {
        if (a === b)
          return this[0] && this[0].nodeType === 1
            ? this[0].innerHTML.replace(W, '')
            : null;
        if (
          typeof a == 'string' &&
          !ba.test(a) &&
          (f.support.leadingWhitespace || !X.test(a)) &&
          !bg[(Z.exec(a) || ['', ''])[1].toLowerCase()]
        ) {
          a = a.replace(Y, '<$1></$2>');
          try {
            for (var c = 0, d = this.length; c < d; c++)
              this[c].nodeType === 1 &&
                (f.cleanData(this[c].getElementsByTagName('*')),
                (this[c].innerHTML = a));
          } catch (e) {
            this.empty().append(a);
          }
        } else
          f.isFunction(a)
            ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()));
              })
            : this.empty().append(a);
        return this;
      },
      replaceWith: function (a) {
        if (this[0] && this[0].parentNode) {
          if (f.isFunction(a))
            return this.each(function (b) {
              var c = f(this),
                d = c.html();
              c.replaceWith(a.call(this, b, d));
            });
          typeof a != 'string' && (a = f(a).detach());
          return this.each(function () {
            var b = this.nextSibling,
              c = this.parentNode;
            f(this).remove(), b ? f(b).before(a) : f(c).append(a);
          });
        }
        return this.length
          ? this.pushStack(f(f.isFunction(a) ? a() : a), 'replaceWith', a)
          : this;
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, c, d) {
        var e,
          g,
          h,
          i,
          j = a[0],
          k = [];
        if (
          !f.support.checkClone &&
          arguments.length === 3 &&
          typeof j == 'string' &&
          bd.test(j)
        )
          return this.each(function () {
            f(this).domManip(a, c, d, !0);
          });
        if (f.isFunction(j))
          return this.each(function (e) {
            var g = f(this);
            (a[0] = j.call(this, e, c ? g.html() : b)), g.domManip(a, c, d);
          });
        if (this[0]) {
          (i = j && j.parentNode),
            f.support.parentNode &&
            i &&
            i.nodeType === 11 &&
            i.childNodes.length === this.length
              ? (e = { fragment: i })
              : (e = f.buildFragment(a, this, k)),
            (h = e.fragment),
            h.childNodes.length === 1
              ? (g = h = h.firstChild)
              : (g = h.firstChild);
          if (g) {
            c = c && f.nodeName(g, 'tr');
            for (var l = 0, m = this.length, n = m - 1; l < m; l++)
              d.call(
                c ? bi(this[l], g) : this[l],
                e.cacheable || (m > 1 && l < n) ? f.clone(h, !0, !0) : h
              );
          }
          k.length && f.each(k, bp);
        }
        return this;
      },
    }),
    (f.buildFragment = function (a, b, d) {
      var e,
        g,
        h,
        i,
        j = a[0];
      b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 &&
          typeof j == 'string' &&
          j.length < 512 &&
          i === c &&
          j.charAt(0) === '<' &&
          !bb.test(j) &&
          (f.support.checkClone || !bd.test(j)) &&
          (f.support.html5Clone || !bc.test(j)) &&
          ((g = !0), (h = f.fragments[j]), h && h !== 1 && (e = h)),
        e || ((e = i.createDocumentFragment()), f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e : 1);
      return { fragment: e, cacheable: g };
    }),
    (f.fragments = {}),
    f.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (a, b) {
        f.fn[a] = function (c) {
          var d = [],
            e = f(c),
            g = this.length === 1 && this[0].parentNode;
          if (
            g &&
            g.nodeType === 11 &&
            g.childNodes.length === 1 &&
            e.length === 1
          ) {
            e[b](this[0]);
            return this;
          }
          for (var h = 0, i = e.length; h < i; h++) {
            var j = (h > 0 ? this.clone(!0) : this).get();
            f(e[h])[b](j), (d = d.concat(j));
          }
          return this.pushStack(d, a, e.selector);
        };
      }
    ),
    f.extend({
      clone: function (a, b, c) {
        var d,
          e,
          g,
          h =
            f.support.html5Clone || !bc.test('<' + a.nodeName)
              ? a.cloneNode(!0)
              : bo(a);
        if (
          (!f.support.noCloneEvent || !f.support.noCloneChecked) &&
          (a.nodeType === 1 || a.nodeType === 11) &&
          !f.isXMLDoc(a)
        ) {
          bk(a, h), (d = bl(a)), (e = bl(h));
          for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g]);
        }
        if (b) {
          bj(a, h);
          if (c) {
            (d = bl(a)), (e = bl(h));
            for (g = 0; d[g]; ++g) bj(d[g], e[g]);
          }
        }
        d = e = null;
        return h;
      },
      clean: function (a, b, d, e) {
        var g;
        (b = b || c),
          typeof b.createElement == 'undefined' &&
            (b = b.ownerDocument || (b[0] && b[0].ownerDocument) || c);
        var h = [],
          i;
        for (var j = 0, k; (k = a[j]) != null; j++) {
          typeof k == 'number' && (k += '');
          if (!k) continue;
          if (typeof k == 'string')
            if (!_.test(k)) k = b.createTextNode(k);
            else {
              k = k.replace(Y, '<$1></$2>');
              var l = (Z.exec(k) || ['', ''])[1].toLowerCase(),
                m = bg[l] || bg._default,
                n = m[0],
                o = b.createElement('div');
              b === c ? bh.appendChild(o) : U(b).appendChild(o),
                (o.innerHTML = m[1] + k + m[2]);
              while (n--) o = o.lastChild;
              if (!f.support.tbody) {
                var p = $.test(k),
                  q =
                    l === 'table' && !p
                      ? o.firstChild && o.firstChild.childNodes
                      : m[1] === '<table>' && !p
                      ? o.childNodes
                      : [];
                for (i = q.length - 1; i >= 0; --i)
                  f.nodeName(q[i], 'tbody') &&
                    !q[i].childNodes.length &&
                    q[i].parentNode.removeChild(q[i]);
              }
              !f.support.leadingWhitespace &&
                X.test(k) &&
                o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),
                (k = o.childNodes);
            }
          var r;
          if (!f.support.appendChecked)
            if (k[0] && typeof (r = k.length) == 'number')
              for (i = 0; i < r; i++) bn(k[i]);
            else bn(k);
          k.nodeType ? h.push(k) : (h = f.merge(h, k));
        }
        if (d) {
          g = function (a) {
            return !a.type || be.test(a.type);
          };
          for (j = 0; h[j]; j++)
            if (
              e &&
              f.nodeName(h[j], 'script') &&
              (!h[j].type || h[j].type.toLowerCase() === 'text/javascript')
            )
              e.push(
                h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]
              );
            else {
              if (h[j].nodeType === 1) {
                var s = f.grep(h[j].getElementsByTagName('script'), g);
                h.splice.apply(h, [j + 1, 0].concat(s));
              }
              d.appendChild(h[j]);
            }
        }
        return h;
      },
      cleanData: function (a) {
        var b,
          c,
          d = f.cache,
          e = f.event.special,
          g = f.support.deleteExpando;
        for (var h = 0, i; (i = a[h]) != null; h++) {
          if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
          c = i[f.expando];
          if (c) {
            b = d[c];
            if (b && b.events) {
              for (var j in b.events)
                e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
              b.handle && (b.handle.elem = null);
            }
            g
              ? delete i[f.expando]
              : i.removeAttribute && i.removeAttribute(f.expando),
              delete d[c];
          }
        }
      },
    });
  var bq = /alpha\([^)]*\)/i,
    br = /opacity=([^)]*)/,
    bs = /([A-Z]|^ms)/g,
    bt = /^-?\d+(?:px)?$/i,
    bu = /^-?\d/,
    bv = /^([\-+])=([\-+.\de]+)/,
    bw = { position: 'absolute', visibility: 'hidden', display: 'block' },
    bx = ['Left', 'Right'],
    by = ['Top', 'Bottom'],
    bz,
    bA,
    bB;
  (f.fn.css = function (a, c) {
    if (arguments.length === 2 && c === b) return this;
    return f.access(this, a, c, !0, function (a, c, d) {
      return d !== b ? f.style(a, c, d) : f.css(a, c);
    });
  }),
    f.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = bz(a, 'opacity', 'opacity');
              return c === '' ? '1' : c;
            }
            return a.style.opacity;
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: f.support.cssFloat ? 'cssFloat' : 'styleFloat' },
      style: function (a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
          var g,
            h,
            i = f.camelCase(c),
            j = a.style,
            k = f.cssHooks[i];
          c = f.cssProps[i] || i;
          if (d === b) {
            if (k && 'get' in k && (g = k.get(a, !1, e)) !== b) return g;
            return j[c];
          }
          (h = typeof d),
            h === 'string' &&
              (g = bv.exec(d)) &&
              ((d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c))),
              (h = 'number'));
          if (d == null || (h === 'number' && isNaN(d))) return;
          h === 'number' && !f.cssNumber[i] && (d += 'px');
          if (!k || !('set' in k) || (d = k.set(a, d)) !== b)
            try {
              j[c] = d;
            } catch (l) {}
        }
      },
      css: function (a, c, d) {
        var e, g;
        (c = f.camelCase(c)),
          (g = f.cssHooks[c]),
          (c = f.cssProps[c] || c),
          c === 'cssFloat' && (c = 'float');
        if (g && 'get' in g && (e = g.get(a, !0, d)) !== b) return e;
        if (bz) return bz(a, c);
      },
      swap: function (a, b, c) {
        var d = {};
        for (var e in b) (d[e] = a.style[e]), (a.style[e] = b[e]);
        c.call(a);
        for (e in b) a.style[e] = d[e];
      },
    }),
    (f.curCSS = f.css),
    f.each(['height', 'width'], function (a, b) {
      f.cssHooks[b] = {
        get: function (a, c, d) {
          var e;
          if (c) {
            if (a.offsetWidth !== 0) return bC(a, b, d);
            f.swap(a, bw, function () {
              e = bC(a, b, d);
            });
            return e;
          }
        },
        set: function (a, b) {
          if (!bt.test(b)) return b;
          b = parseFloat(b);
          if (b >= 0) return b + 'px';
        },
      };
    }),
    f.support.opacity ||
      (f.cssHooks.opacity = {
        get: function (a, b) {
          return br.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ''
          )
            ? parseFloat(RegExp.$1) / 100 + ''
            : b
            ? '1'
            : '';
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = f.isNumeric(b) ? 'alpha(opacity=' + b * 100 + ')' : '',
            g = (d && d.filter) || c.filter || '';
          c.zoom = 1;
          if (b >= 1 && f.trim(g.replace(bq, '')) === '') {
            c.removeAttribute('filter');
            if (d && !d.filter) return;
          }
          c.filter = bq.test(g) ? g.replace(bq, e) : g + ' ' + e;
        },
      }),
    f(function () {
      f.support.reliableMarginRight ||
        (f.cssHooks.marginRight = {
          get: function (a, b) {
            var c;
            f.swap(a, { display: 'inline-block' }, function () {
              b
                ? (c = bz(a, 'margin-right', 'marginRight'))
                : (c = a.style.marginRight);
            });
            return c;
          },
        });
    }),
    c.defaultView &&
      c.defaultView.getComputedStyle &&
      (bA = function (a, b) {
        var c, d, e;
        (b = b.replace(bs, '-$1').toLowerCase()),
          (d = a.ownerDocument.defaultView) &&
            (e = d.getComputedStyle(a, null)) &&
            ((c = e.getPropertyValue(b)),
            c === '' &&
              !f.contains(a.ownerDocument.documentElement, a) &&
              (c = f.style(a, b)));
        return c;
      }),
    c.documentElement.currentStyle &&
      (bB = function (a, b) {
        var c,
          d,
          e,
          f = a.currentStyle && a.currentStyle[b],
          g = a.style;
        f === null && g && (e = g[b]) && (f = e),
          !bt.test(f) &&
            bu.test(f) &&
            ((c = g.left),
            (d = a.runtimeStyle && a.runtimeStyle.left),
            d && (a.runtimeStyle.left = a.currentStyle.left),
            (g.left = b === 'fontSize' ? '1em' : f || 0),
            (f = g.pixelLeft + 'px'),
            (g.left = c),
            d && (a.runtimeStyle.left = d));
        return f === '' ? 'auto' : f;
      }),
    (bz = bA || bB),
    f.expr &&
      f.expr.filters &&
      ((f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
          c = a.offsetHeight;
        return (
          (b === 0 && c === 0) ||
          (!f.support.reliableHiddenOffsets &&
            ((a.style && a.style.display) || f.css(a, 'display')) === 'none')
        );
      }),
      (f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a);
      }));
  var bD = /%20/g,
    bE = /\[\]$/,
    bF = /\r?\n/g,
    bG = /#.*$/,
    bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    bK = /^(?:GET|HEAD)$/,
    bL = /^\/\//,
    bM = /\?/,
    bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bO = /^(?:select|textarea)/i,
    bP = /\s+/,
    bQ = /([?&])_=[^&]*/,
    bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bS = f.fn.load,
    bT = {},
    bU = {},
    bV,
    bW,
    bX = ['*/'] + ['*'];
  try {
    bV = e.href;
  } catch (bY) {
    (bV = c.createElement('a')), (bV.href = ''), (bV = bV.href);
  }
  (bW = bR.exec(bV.toLowerCase()) || []),
    f.fn.extend({
      load: function (a, c, d) {
        if (typeof a != 'string' && bS) return bS.apply(this, arguments);
        if (!this.length) return this;
        var e = a.indexOf(' ');
        if (e >= 0) {
          var g = a.slice(e, a.length);
          a = a.slice(0, e);
        }
        var h = 'GET';
        c &&
          (f.isFunction(c)
            ? ((d = c), (c = b))
            : typeof c == 'object' &&
              ((c = f.param(c, f.ajaxSettings.traditional)), (h = 'POST')));
        var i = this;
        f.ajax({
          url: a,
          type: h,
          dataType: 'html',
          data: c,
          complete: function (a, b, c) {
            (c = a.responseText),
              a.isResolved() &&
                (a.done(function (a) {
                  c = a;
                }),
                i.html(g ? f('<div>').append(c.replace(bN, '')).find(g) : c)),
              d && i.each(d, [c, b, a]);
          },
        });
        return this;
      },
      serialize: function () {
        return f.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? f.makeArray(this.elements) : this;
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            );
          })
          .map(function (a, b) {
            var c = f(this).val();
            return c == null
              ? null
              : f.isArray(c)
              ? f.map(c, function (a, c) {
                  return { name: b.name, value: a.replace(bF, '\r\n') };
                })
              : { name: b.name, value: c.replace(bF, '\r\n') };
          })
          .get();
      },
    }),
    f.each(
      'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(
        ' '
      ),
      function (a, b) {
        f.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    f.each(['get', 'post'], function (a, c) {
      f[c] = function (a, d, e, g) {
        f.isFunction(d) && ((g = g || e), (e = d), (d = b));
        return f.ajax({ type: c, url: a, data: d, success: e, dataType: g });
      };
    }),
    f.extend({
      getScript: function (a, c) {
        return f.get(a, b, c, 'script');
      },
      getJSON: function (a, b, c) {
        return f.get(a, b, c, 'json');
      },
      ajaxSetup: function (a, b) {
        b ? b_(a, f.ajaxSettings) : ((b = a), (a = f.ajaxSettings)), b_(a, b);
        return a;
      },
      ajaxSettings: {
        url: bV,
        isLocal: bJ.test(bW[1]),
        global: !0,
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        processData: !0,
        async: !0,
        accepts: {
          xml: 'application/xml, text/xml',
          html: 'text/html',
          text: 'text/plain',
          json: 'application/json, text/javascript',
          '*': bX,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: 'responseXML', text: 'responseText' },
        converters: {
          '* text': a.String,
          'text html': !0,
          'text json': f.parseJSON,
          'text xml': f.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: bZ(bT),
      ajaxTransport: bZ(bU),
      ajax: function (a, c) {
        function w(a, c, l, m) {
          if (s !== 2) {
            (s = 2),
              q && clearTimeout(q),
              (p = b),
              (n = m || ''),
              (v.readyState = a > 0 ? 4 : 0);
            var o,
              r,
              u,
              w = c,
              x = l ? cb(d, v, l) : b,
              y,
              z;
            if ((a >= 200 && a < 300) || a === 304) {
              if (d.ifModified) {
                if ((y = v.getResponseHeader('Last-Modified')))
                  f.lastModified[k] = y;
                if ((z = v.getResponseHeader('Etag'))) f.etag[k] = z;
              }
              if (a === 304) (w = 'notmodified'), (o = !0);
              else
                try {
                  (r = cc(d, x)), (w = 'success'), (o = !0);
                } catch (A) {
                  (w = 'parsererror'), (u = A);
                }
            } else {
              u = w;
              if (!w || a) (w = 'error'), a < 0 && (a = 0);
            }
            (v.status = a),
              (v.statusText = '' + (c || w)),
              o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
              v.statusCode(j),
              (j = b),
              t &&
                g.trigger('ajax' + (o ? 'Success' : 'Error'), [
                  v,
                  d,
                  o ? r : u,
                ]),
              i.fireWith(e, [v, w]),
              t &&
                (g.trigger('ajaxComplete', [v, d]),
                --f.active || f.event.trigger('ajaxStop'));
          }
        }
        typeof a == 'object' && ((c = a), (a = b)), (c = c || {});
        var d = f.ajaxSetup({}, c),
          e = d.context || d,
          g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
          h = f.Deferred(),
          i = f.Callbacks('once memory'),
          j = d.statusCode || {},
          k,
          l = {},
          m = {},
          n,
          o,
          p,
          q,
          r,
          s = 0,
          t,
          u,
          v = {
            readyState: 0,
            setRequestHeader: function (a, b) {
              if (!s) {
                var c = a.toLowerCase();
                (a = m[c] = m[c] || a), (l[a] = b);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return s === 2 ? n : null;
            },
            getResponseHeader: function (a) {
              var c;
              if (s === 2) {
                if (!o) {
                  o = {};
                  while ((c = bH.exec(n))) o[c[1].toLowerCase()] = c[2];
                }
                c = o[a.toLowerCase()];
              }
              return c === b ? null : c;
            },
            overrideMimeType: function (a) {
              s || (d.mimeType = a);
              return this;
            },
            abort: function (a) {
              (a = a || 'abort'), p && p.abort(a), w(0, a);
              return this;
            },
          };
        h.promise(v),
          (v.success = v.done),
          (v.error = v.fail),
          (v.complete = i.add),
          (v.statusCode = function (a) {
            if (a) {
              var b;
              if (s < 2) for (b in a) j[b] = [j[b], a[b]];
              else (b = a[v.status]), v.then(b, b);
            }
            return this;
          }),
          (d.url = ((a || d.url) + '')
            .replace(bG, '')
            .replace(bL, bW[1] + '//')),
          (d.dataTypes = f
            .trim(d.dataType || '*')
            .toLowerCase()
            .split(bP)),
          d.crossDomain == null &&
            ((r = bR.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !r ||
              (r[1] == bW[1] &&
                r[2] == bW[2] &&
                (r[3] || (r[1] === 'http:' ? 80 : 443)) ==
                  (bW[3] || (bW[1] === 'http:' ? 80 : 443)))
            ))),
          d.data &&
            d.processData &&
            typeof d.data != 'string' &&
            (d.data = f.param(d.data, d.traditional)),
          b$(bT, d, c, v);
        if (s === 2) return !1;
        (t = d.global),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !bK.test(d.type)),
          t && f.active++ === 0 && f.event.trigger('ajaxStart');
        if (!d.hasContent) {
          d.data &&
            ((d.url += (bM.test(d.url) ? '&' : '?') + d.data), delete d.data),
            (k = d.url);
          if (d.cache === !1) {
            var x = f.now(),
              y = d.url.replace(bQ, '$1_=' + x);
            d.url =
              y + (y === d.url ? (bM.test(d.url) ? '&' : '?') + '_=' + x : '');
          }
        }
        ((d.data && d.hasContent && d.contentType !== !1) || c.contentType) &&
          v.setRequestHeader('Content-Type', d.contentType),
          d.ifModified &&
            ((k = k || d.url),
            f.lastModified[k] &&
              v.setRequestHeader('If-Modified-Since', f.lastModified[k]),
            f.etag[k] && v.setRequestHeader('If-None-Match', f.etag[k])),
          v.setRequestHeader(
            'Accept',
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  (d.dataTypes[0] !== '*' ? ', ' + bX + '; q=0.01' : '')
              : d.accepts['*']
          );
        for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
          v.abort();
          return !1;
        }
        for (u in { success: 1, error: 1, complete: 1 }) v[u](d[u]);
        p = b$(bU, d, c, v);
        if (!p) w(-1, 'No Transport');
        else {
          (v.readyState = 1),
            t && g.trigger('ajaxSend', [v, d]),
            d.async &&
              d.timeout > 0 &&
              (q = setTimeout(function () {
                v.abort('timeout');
              }, d.timeout));
          try {
            (s = 1), p.send(l, w);
          } catch (z) {
            if (s < 2) w(-1, z);
            else throw z;
          }
        }
        return v;
      },
      param: function (a, c) {
        var d = [],
          e = function (a, b) {
            (b = f.isFunction(b) ? b() : b),
              (d[d.length] =
                encodeURIComponent(a) + '=' + encodeURIComponent(b));
          };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || (a.jquery && !f.isPlainObject(a)))
          f.each(a, function () {
            e(this.name, this.value);
          });
        else for (var g in a) ca(g, a[g], c, e);
        return d.join('&').replace(bD, '+');
      },
    }),
    f.extend({ active: 0, lastModified: {}, etag: {} });
  var cd = f.now(),
    ce = /(\=)\?(&|$)|\?\?/i;
  f.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      return f.expando + '_' + cd++;
    },
  }),
    f.ajaxPrefilter('json jsonp', function (b, c, d) {
      var e =
        b.contentType === 'application/x-www-form-urlencoded' &&
        typeof b.data == 'string';
      if (
        b.dataTypes[0] === 'jsonp' ||
        (b.jsonp !== !1 && (ce.test(b.url) || (e && ce.test(b.data))))
      ) {
        var g,
          h = (b.jsonpCallback = f.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          i = a[h],
          j = b.url,
          k = b.data,
          l = '$1' + h + '$2';
        b.jsonp !== !1 &&
          ((j = j.replace(ce, l)),
          b.url === j &&
            (e && (k = k.replace(ce, l)),
            b.data === k &&
              (j += (/\?/.test(j) ? '&' : '?') + b.jsonp + '=' + h))),
          (b.url = j),
          (b.data = k),
          (a[h] = function (a) {
            g = [a];
          }),
          d.always(function () {
            (a[h] = i), g && f.isFunction(i) && a[h](g[0]);
          }),
          (b.converters['script json'] = function () {
            g || f.error(h + ' was not called');
            return g[0];
          }),
          (b.dataTypes[0] = 'json');
        return 'script';
      }
    }),
    f.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        'text script': function (a) {
          f.globalEval(a);
          return a;
        },
      },
    }),
    f.ajaxPrefilter('script', function (a) {
      a.cache === b && (a.cache = !1),
        a.crossDomain && ((a.type = 'GET'), (a.global = !1));
    }),
    f.ajaxTransport('script', function (a) {
      if (a.crossDomain) {
        var d,
          e = c.head || c.getElementsByTagName('head')[0] || c.documentElement;
        return {
          send: function (f, g) {
            (d = c.createElement('script')),
              (d.async = 'async'),
              a.scriptCharset && (d.charset = a.scriptCharset),
              (d.src = a.url),
              (d.onload = d.onreadystatechange = function (a, c) {
                if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                  (d.onload = d.onreadystatechange = null),
                    e && d.parentNode && e.removeChild(d),
                    (d = b),
                    c || g(200, 'success');
              }),
              e.insertBefore(d, e.firstChild);
          },
          abort: function () {
            d && d.onload(0, 1);
          },
        };
      }
    });
  var cf = a.ActiveXObject
      ? function () {
          for (var a in ch) ch[a](0, 1);
        }
      : !1,
    cg = 0,
    ch;
  (f.ajaxSettings.xhr = a.ActiveXObject
    ? function () {
        return (!this.isLocal && ci()) || cj();
      }
    : ci),
    (function (a) {
      f.extend(f.support, { ajax: !!a, cors: !!a && 'withCredentials' in a });
    })(f.ajaxSettings.xhr()),
    f.support.ajax &&
      f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
          var d;
          return {
            send: function (e, g) {
              var h = c.xhr(),
                i,
                j;
              c.username
                ? h.open(c.type, c.url, c.async, c.username, c.password)
                : h.open(c.type, c.url, c.async);
              if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
              c.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e['X-Requested-With'] &&
                  (e['X-Requested-With'] = 'XMLHttpRequest');
              try {
                for (j in e) h.setRequestHeader(j, e[j]);
              } catch (k) {}
              h.send((c.hasContent && c.data) || null),
                (d = function (a, e) {
                  var j, k, l, m, n;
                  try {
                    if (d && (e || h.readyState === 4)) {
                      (d = b),
                        i &&
                          ((h.onreadystatechange = f.noop), cf && delete ch[i]);
                      if (e) h.readyState !== 4 && h.abort();
                      else {
                        (j = h.status),
                          (l = h.getAllResponseHeaders()),
                          (m = {}),
                          (n = h.responseXML),
                          n && n.documentElement && (m.xml = n),
                          (m.text = h.responseText);
                        try {
                          k = h.statusText;
                        } catch (o) {
                          k = '';
                        }
                        !j && c.isLocal && !c.crossDomain
                          ? (j = m.text ? 200 : 404)
                          : j === 1223 && (j = 204);
                      }
                    }
                  } catch (p) {
                    e || g(-1, p);
                  }
                  m && g(j, k, m, l);
                }),
                !c.async || h.readyState === 4
                  ? d()
                  : ((i = ++cg),
                    cf && (ch || ((ch = {}), f(a).unload(cf)), (ch[i] = d)),
                    (h.onreadystatechange = d));
            },
            abort: function () {
              d && d(0, 1);
            },
          };
        }
      });
  var ck = {},
    cl,
    cm,
    cn = /^(?:toggle|show|hide)$/,
    co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    cp,
    cq = [
      ['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'],
      ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'],
      ['opacity'],
    ],
    cr;
  f.fn.extend({
    show: function (a, b, c) {
      var d, e;
      if (a || a === 0) return this.animate(cu('show', 3), a, b, c);
      for (var g = 0, h = this.length; g < h; g++)
        (d = this[g]),
          d.style &&
            ((e = d.style.display),
            !f._data(d, 'olddisplay') &&
              e === 'none' &&
              (e = d.style.display = ''),
            e === '' &&
              f.css(d, 'display') === 'none' &&
              f._data(d, 'olddisplay', cv(d.nodeName)));
      for (g = 0; g < h; g++) {
        d = this[g];
        if (d.style) {
          e = d.style.display;
          if (e === '' || e === 'none')
            d.style.display = f._data(d, 'olddisplay') || '';
        }
      }
      return this;
    },
    hide: function (a, b, c) {
      if (a || a === 0) return this.animate(cu('hide', 3), a, b, c);
      var d,
        e,
        g = 0,
        h = this.length;
      for (; g < h; g++)
        (d = this[g]),
          d.style &&
            ((e = f.css(d, 'display')),
            e !== 'none' &&
              !f._data(d, 'olddisplay') &&
              f._data(d, 'olddisplay', e));
      for (g = 0; g < h; g++) this[g].style && (this[g].style.display = 'none');
      return this;
    },
    _toggle: f.fn.toggle,
    toggle: function (a, b, c) {
      var d = typeof a == 'boolean';
      f.isFunction(a) && f.isFunction(b)
        ? this._toggle.apply(this, arguments)
        : a == null || d
        ? this.each(function () {
            var b = d ? a : f(this).is(':hidden');
            f(this)[b ? 'show' : 'hide']();
          })
        : this.animate(cu('toggle', 3), a, b, c);
      return this;
    },
    fadeTo: function (a, b, c, d) {
      return this.filter(':hidden')
        .css('opacity', 0)
        .show()
        .end()
        .animate({ opacity: b }, a, c, d);
    },
    animate: function (a, b, c, d) {
      function g() {
        e.queue === !1 && f._mark(this);
        var b = f.extend({}, e),
          c = this.nodeType === 1,
          d = c && f(this).is(':hidden'),
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o;
        b.animatedProperties = {};
        for (i in a) {
          (g = f.camelCase(i)),
            i !== g && ((a[g] = a[i]), delete a[i]),
            (h = a[g]),
            f.isArray(h)
              ? ((b.animatedProperties[g] = h[1]), (h = a[g] = h[0]))
              : (b.animatedProperties[g] =
                  (b.specialEasing && b.specialEasing[g]) ||
                  b.easing ||
                  'swing');
          if ((h === 'hide' && d) || (h === 'show' && !d))
            return b.complete.call(this);
          c &&
            (g === 'height' || g === 'width') &&
            ((b.overflow = [
              this.style.overflow,
              this.style.overflowX,
              this.style.overflowY,
            ]),
            f.css(this, 'display') === 'inline' &&
              f.css(this, 'float') === 'none' &&
              (!f.support.inlineBlockNeedsLayout ||
              cv(this.nodeName) === 'inline'
                ? (this.style.display = 'inline-block')
                : (this.style.zoom = 1)));
        }
        b.overflow != null && (this.style.overflow = 'hidden');
        for (i in a)
          (j = new f.fx(this, b, i)),
            (h = a[i]),
            cn.test(h)
              ? ((o =
                  f._data(this, 'toggle' + i) ||
                  (h === 'toggle' ? (d ? 'show' : 'hide') : 0)),
                o
                  ? (f._data(
                      this,
                      'toggle' + i,
                      o === 'show' ? 'hide' : 'show'
                    ),
                    j[o]())
                  : j[h]())
              : ((k = co.exec(h)),
                (l = j.cur()),
                k
                  ? ((m = parseFloat(k[2])),
                    (n = k[3] || (f.cssNumber[i] ? '' : 'px')),
                    n !== 'px' &&
                      (f.style(this, i, (m || 1) + n),
                      (l = ((m || 1) / j.cur()) * l),
                      f.style(this, i, l + n)),
                    k[1] && (m = (k[1] === '-=' ? -1 : 1) * m + l),
                    j.custom(l, m, n))
                  : j.custom(l, h, ''));
        return !0;
      }
      var e = f.speed(b, c, d);
      if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
      a = f.extend({}, a);
      return e.queue === !1 ? this.each(g) : this.queue(e.queue, g);
    },
    stop: function (a, c, d) {
      typeof a != 'string' && ((d = c), (c = a), (a = b)),
        c && a !== !1 && this.queue(a || 'fx', []);
      return this.each(function () {
        function h(a, b, c) {
          var e = b[c];
          f.removeData(a, c, !0), e.stop(d);
        }
        var b,
          c = !1,
          e = f.timers,
          g = f._data(this);
        d || f._unmark(!0, this);
        if (a == null)
          for (b in g)
            g[b] &&
              g[b].stop &&
              b.indexOf('.run') === b.length - 4 &&
              h(this, g, b);
        else g[(b = a + '.run')] && g[b].stop && h(this, g, b);
        for (b = e.length; b--; )
          e[b].elem === this &&
            (a == null || e[b].queue === a) &&
            (d ? e[b](!0) : e[b].saveState(), (c = !0), e.splice(b, 1));
        (!d || !c) && f.dequeue(this, a);
      });
    },
  }),
    f.each(
      {
        slideDown: cu('show', 1),
        slideUp: cu('hide', 1),
        slideToggle: cu('toggle', 1),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (a, b) {
        f.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    f.extend({
      speed: function (a, b, c) {
        var d =
          a && typeof a == 'object'
            ? f.extend({}, a)
            : {
                complete: c || (!c && b) || (f.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !f.isFunction(b) && b),
              };
        d.duration = f.fx.off
          ? 0
          : typeof d.duration == 'number'
          ? d.duration
          : d.duration in f.fx.speeds
          ? f.fx.speeds[d.duration]
          : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = 'fx';
        (d.old = d.complete),
          (d.complete = function (a) {
            f.isFunction(d.old) && d.old.call(this),
              d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this);
          });
        return d;
      },
      easing: {
        linear: function (a, b, c, d) {
          return c + d * a;
        },
        swing: function (a, b, c, d) {
          return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c;
        },
      },
      timers: [],
      fx: function (a, b, c) {
        (this.options = b),
          (this.elem = a),
          (this.prop = c),
          (b.orig = b.orig || {});
      },
    }),
    (f.fx.prototype = {
      update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (f.fx.step[this.prop] || f.fx.step._default)(this);
      },
      cur: function () {
        if (
          this.elem[this.prop] != null &&
          (!this.elem.style || this.elem.style[this.prop] == null)
        )
          return this.elem[this.prop];
        var a,
          b = f.css(this.elem, this.prop);
        return isNaN((a = parseFloat(b))) ? (!b || b === 'auto' ? 0 : b) : a;
      },
      custom: function (a, c, d) {
        function h(a) {
          return e.step(a);
        }
        var e = this,
          g = f.fx;
        (this.startTime = cr || cs()),
          (this.end = c),
          (this.now = this.start = a),
          (this.pos = this.state = 0),
          (this.unit = d || this.unit || (f.cssNumber[this.prop] ? '' : 'px')),
          (h.queue = this.options.queue),
          (h.elem = this.elem),
          (h.saveState = function () {
            e.options.hide &&
              f._data(e.elem, 'fxshow' + e.prop) === b &&
              f._data(e.elem, 'fxshow' + e.prop, e.start);
          }),
          h() &&
            f.timers.push(h) &&
            !cp &&
            (cp = setInterval(g.tick, g.interval));
      },
      show: function () {
        var a = f._data(this.elem, 'fxshow' + this.prop);
        (this.options.orig[this.prop] = a || f.style(this.elem, this.prop)),
          (this.options.show = !0),
          a !== b
            ? this.custom(this.cur(), a)
            : this.custom(
                this.prop === 'width' || this.prop === 'height' ? 1 : 0,
                this.cur()
              ),
          f(this.elem).show();
      },
      hide: function () {
        (this.options.orig[this.prop] =
          f._data(this.elem, 'fxshow' + this.prop) ||
          f.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0);
      },
      step: function (a) {
        var b,
          c,
          d,
          e = cr || cs(),
          g = !0,
          h = this.elem,
          i = this.options;
        if (a || e >= i.duration + this.startTime) {
          (this.now = this.end),
            (this.pos = this.state = 1),
            this.update(),
            (i.animatedProperties[this.prop] = !0);
          for (b in i.animatedProperties)
            i.animatedProperties[b] !== !0 && (g = !1);
          if (g) {
            i.overflow != null &&
              !f.support.shrinkWrapBlocks &&
              f.each(['', 'X', 'Y'], function (a, b) {
                h.style['overflow' + b] = i.overflow[a];
              }),
              i.hide && f(h).hide();
            if (i.hide || i.show)
              for (b in i.animatedProperties)
                f.style(h, b, i.orig[b]),
                  f.removeData(h, 'fxshow' + b, !0),
                  f.removeData(h, 'toggle' + b, !0);
            (d = i.complete), d && ((i.complete = !1), d.call(h));
          }
          return !1;
        }
        i.duration == Infinity
          ? (this.now = e)
          : ((c = e - this.startTime),
            (this.state = c / i.duration),
            (this.pos = f.easing[i.animatedProperties[this.prop]](
              this.state,
              c,
              0,
              1,
              i.duration
            )),
            (this.now = this.start + (this.end - this.start) * this.pos)),
          this.update();
        return !0;
      },
    }),
    f.extend(f.fx, {
      tick: function () {
        var a,
          b = f.timers,
          c = 0;
        for (; c < b.length; c++)
          (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
        b.length || f.fx.stop();
      },
      interval: 13,
      stop: function () {
        clearInterval(cp), (cp = null);
      },
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function (a) {
          f.style(a.elem, 'opacity', a.now);
        },
        _default: function (a) {
          a.elem.style && a.elem.style[a.prop] != null
            ? (a.elem.style[a.prop] = a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    f.each(['width', 'height'], function (a, b) {
      f.fx.step[b] = function (a) {
        f.style(a.elem, b, Math.max(0, a.now) + a.unit);
      };
    }),
    f.expr &&
      f.expr.filters &&
      (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
          return a === b.elem;
        }).length;
      });
  var cw = /^t(?:able|d|h)$/i,
    cx = /^(?:body|html)$/i;
  'getBoundingClientRect' in c.documentElement
    ? (f.fn.offset = function (a) {
        var b = this[0],
          c;
        if (a)
          return this.each(function (b) {
            f.offset.setOffset(this, a, b);
          });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
          c = b.getBoundingClientRect();
        } catch (d) {}
        var e = b.ownerDocument,
          g = e.documentElement;
        if (!c || !f.contains(g, b))
          return c ? { top: c.top, left: c.left } : { top: 0, left: 0 };
        var h = e.body,
          i = cy(e),
          j = g.clientTop || h.clientTop || 0,
          k = g.clientLeft || h.clientLeft || 0,
          l =
            i.pageYOffset || (f.support.boxModel && g.scrollTop) || h.scrollTop,
          m =
            i.pageXOffset ||
            (f.support.boxModel && g.scrollLeft) ||
            h.scrollLeft,
          n = c.top + l - j,
          o = c.left + m - k;
        return { top: n, left: o };
      })
    : (f.fn.offset = function (a) {
        var b = this[0];
        if (a)
          return this.each(function (b) {
            f.offset.setOffset(this, a, b);
          });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        var c,
          d = b.offsetParent,
          e = b,
          g = b.ownerDocument,
          h = g.documentElement,
          i = g.body,
          j = g.defaultView,
          k = j ? j.getComputedStyle(b, null) : b.currentStyle,
          l = b.offsetTop,
          m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
          if (f.support.fixedPosition && k.position === 'fixed') break;
          (c = j ? j.getComputedStyle(b, null) : b.currentStyle),
            (l -= b.scrollTop),
            (m -= b.scrollLeft),
            b === d &&
              ((l += b.offsetTop),
              (m += b.offsetLeft),
              f.support.doesNotAddBorder &&
                (!f.support.doesAddBorderForTableAndCells ||
                  !cw.test(b.nodeName)) &&
                ((l += parseFloat(c.borderTopWidth) || 0),
                (m += parseFloat(c.borderLeftWidth) || 0)),
              (e = d),
              (d = b.offsetParent)),
            f.support.subtractsBorderForOverflowNotVisible &&
              c.overflow !== 'visible' &&
              ((l += parseFloat(c.borderTopWidth) || 0),
              (m += parseFloat(c.borderLeftWidth) || 0)),
            (k = c);
        }
        if (k.position === 'relative' || k.position === 'static')
          (l += i.offsetTop), (m += i.offsetLeft);
        f.support.fixedPosition &&
          k.position === 'fixed' &&
          ((l += Math.max(h.scrollTop, i.scrollTop)),
          (m += Math.max(h.scrollLeft, i.scrollLeft)));
        return { top: l, left: m };
      }),
    (f.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop,
          c = a.offsetLeft;
        f.support.doesNotIncludeMarginInBodyOffset &&
          ((b += parseFloat(f.css(a, 'marginTop')) || 0),
          (c += parseFloat(f.css(a, 'marginLeft')) || 0));
        return { top: b, left: c };
      },
      setOffset: function (a, b, c) {
        var d = f.css(a, 'position');
        d === 'static' && (a.style.position = 'relative');
        var e = f(a),
          g = e.offset(),
          h = f.css(a, 'top'),
          i = f.css(a, 'left'),
          j =
            (d === 'absolute' || d === 'fixed') &&
            f.inArray('auto', [h, i]) > -1,
          k = {},
          l = {},
          m,
          n;
        j
          ? ((l = e.position()), (m = l.top), (n = l.left))
          : ((m = parseFloat(h) || 0), (n = parseFloat(i) || 0)),
          f.isFunction(b) && (b = b.call(a, c, g)),
          b.top != null && (k.top = b.top - g.top + m),
          b.left != null && (k.left = b.left - g.left + n),
          'using' in b ? b.using.call(a, k) : e.css(k);
      },
    }),
    f.fn.extend({
      position: function () {
        if (!this[0]) return null;
        var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = cx.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
        (c.top -= parseFloat(f.css(a, 'marginTop')) || 0),
          (c.left -= parseFloat(f.css(a, 'marginLeft')) || 0),
          (d.top += parseFloat(f.css(b[0], 'borderTopWidth')) || 0),
          (d.left += parseFloat(f.css(b[0], 'borderLeftWidth')) || 0);
        return { top: c.top - d.top, left: c.left - d.left };
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || c.body;
          while (a && !cx.test(a.nodeName) && f.css(a, 'position') === 'static')
            a = a.offsetParent;
          return a;
        });
      },
    }),
    f.each(['Left', 'Top'], function (a, c) {
      var d = 'scroll' + c;
      f.fn[d] = function (c) {
        var e, g;
        if (c === b) {
          e = this[0];
          if (!e) return null;
          g = cy(e);
          return g
            ? 'pageXOffset' in g
              ? g[a ? 'pageYOffset' : 'pageXOffset']
              : (f.support.boxModel && g.document.documentElement[d]) ||
                g.document.body[d]
            : e[d];
        }
        return this.each(function () {
          (g = cy(this)),
            g
              ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop())
              : (this[d] = c);
        });
      };
    }),
    f.each(['Height', 'Width'], function (a, c) {
      var d = c.toLowerCase();
      (f.fn['inner' + c] = function () {
        var a = this[0];
        return a
          ? a.style
            ? parseFloat(f.css(a, d, 'padding'))
            : this[d]()
          : null;
      }),
        (f.fn['outer' + c] = function (a) {
          var b = this[0];
          return b
            ? b.style
              ? parseFloat(f.css(b, d, a ? 'margin' : 'border'))
              : this[d]()
            : null;
        }),
        (f.fn[d] = function (a) {
          var e = this[0];
          if (!e) return a == null ? null : this;
          if (f.isFunction(a))
            return this.each(function (b) {
              var c = f(this);
              c[d](a.call(this, b, c[d]()));
            });
          if (f.isWindow(e)) {
            var g = e.document.documentElement['client' + c],
              h = e.document.body;
            return (
              (e.document.compatMode === 'CSS1Compat' && g) ||
              (h && h['client' + c]) ||
              g
            );
          }
          if (e.nodeType === 9)
            return Math.max(
              e.documentElement['client' + c],
              e.body['scroll' + c],
              e.documentElement['scroll' + c],
              e.body['offset' + c],
              e.documentElement['offset' + c]
            );
          if (a === b) {
            var i = f.css(e, d),
              j = parseFloat(i);
            return f.isNumeric(j) ? j : i;
          }
          return this.css(d, typeof a == 'string' ? a : a + 'px');
        });
    }),
    (a.jQuery = a.$ = f),
    typeof define == 'function' &&
      define.amd &&
      define.amd.jQuery &&
      define('jquery', [], function () {
        return f;
      });
})(window);
(function (a, b) {
  function d(b) {
    return !a(b)
      .parents()
      .andSelf()
      .filter(function () {
        return (
          a.curCSS(this, 'visibility') === 'hidden' ||
          a.expr.filters.hidden(this)
        );
      }).length;
  }
  function c(b, c) {
    var e = b.nodeName.toLowerCase();
    if ('area' === e) {
      var f = b.parentNode,
        g = f.name,
        h;
      if (!b.href || !g || f.nodeName.toLowerCase() !== 'map') return !1;
      h = a('img[usemap=#' + g + ']')[0];
      return !!h && d(h);
    }
    return (
      (/input|select|textarea|button|object/.test(e)
        ? !b.disabled
        : 'a' == e
        ? b.href || c
        : c) && d(b)
    );
  }
  a.ui = a.ui || {};
  a.ui.version ||
    (a.extend(a.ui, {
      version: '1.8.17',
      keyCode: {
        ALT: 18,
        BACKSPACE: 8,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
      },
    }),
    a.fn.extend({
      propAttr: a.fn.prop || a.fn.attr,
      _focus: a.fn.focus,
      focus: function (b, c) {
        return typeof b == 'number'
          ? this.each(function () {
              var d = this;
              setTimeout(function () {
                a(d).focus(), c && c.call(d);
              }, b);
            })
          : this._focus.apply(this, arguments);
      },
      scrollParent: function () {
        var b;
        (a.browser.msie && /(static|relative)/.test(this.css('position'))) ||
        /absolute/.test(this.css('position'))
          ? (b = this.parents()
              .filter(function () {
                return (
                  /(relative|absolute|fixed)/.test(
                    a.curCSS(this, 'position', 1)
                  ) &&
                  /(auto|scroll)/.test(
                    a.curCSS(this, 'overflow', 1) +
                      a.curCSS(this, 'overflow-y', 1) +
                      a.curCSS(this, 'overflow-x', 1)
                  )
                );
              })
              .eq(0))
          : (b = this.parents()
              .filter(function () {
                return /(auto|scroll)/.test(
                  a.curCSS(this, 'overflow', 1) +
                    a.curCSS(this, 'overflow-y', 1) +
                    a.curCSS(this, 'overflow-x', 1)
                );
              })
              .eq(0));
        return /fixed/.test(this.css('position')) || !b.length
          ? a(document)
          : b;
      },
      zIndex: function (c) {
        if (c !== b) return this.css('zIndex', c);
        if (this.length) {
          var d = a(this[0]),
            e,
            f;
          while (d.length && d[0] !== document) {
            e = d.css('position');
            if (e === 'absolute' || e === 'relative' || e === 'fixed') {
              f = parseInt(d.css('zIndex'), 10);
              if (!isNaN(f) && f !== 0) return f;
            }
            d = d.parent();
          }
        }
        return 0;
      },
      disableSelection: function () {
        return this.bind(
          (a.support.selectstart ? 'selectstart' : 'mousedown') +
            '.ui-disableSelection',
          function (a) {
            a.preventDefault();
          }
        );
      },
      enableSelection: function () {
        return this.unbind('.ui-disableSelection');
      },
    }),
    a.each(['Width', 'Height'], function (c, d) {
      function h(b, c, d, f) {
        a.each(e, function () {
          (c -= parseFloat(a.curCSS(b, 'padding' + this, !0)) || 0),
            d &&
              (c -=
                parseFloat(a.curCSS(b, 'border' + this + 'Width', !0)) || 0),
            f && (c -= parseFloat(a.curCSS(b, 'margin' + this, !0)) || 0);
        });
        return c;
      }
      var e = d === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
        f = d.toLowerCase(),
        g = {
          innerWidth: a.fn.innerWidth,
          innerHeight: a.fn.innerHeight,
          outerWidth: a.fn.outerWidth,
          outerHeight: a.fn.outerHeight,
        };
      (a.fn['inner' + d] = function (c) {
        if (c === b) return g['inner' + d].call(this);
        return this.each(function () {
          a(this).css(f, h(this, c) + 'px');
        });
      }),
        (a.fn['outer' + d] = function (b, c) {
          if (typeof b != 'number') return g['outer' + d].call(this, b);
          return this.each(function () {
            a(this).css(f, h(this, b, !0, c) + 'px');
          });
        });
    }),
    a.extend(a.expr[':'], {
      data: function (b, c, d) {
        return !!a.data(b, d[3]);
      },
      focusable: function (b) {
        return c(b, !isNaN(a.attr(b, 'tabindex')));
      },
      tabbable: function (b) {
        var d = a.attr(b, 'tabindex'),
          e = isNaN(d);
        return (e || d >= 0) && c(b, !e);
      },
    }),
    a(function () {
      var b = document.body,
        c = b.appendChild((c = document.createElement('div')));
      a.extend(c.style, {
        minHeight: '100px',
        height: 'auto',
        padding: 0,
        borderWidth: 0,
      }),
        (a.support.minHeight = c.offsetHeight === 100),
        (a.support.selectstart = 'onselectstart' in c),
        (b.removeChild(c).style.display = 'none');
    }),
    a.extend(a.ui, {
      plugin: {
        add: function (b, c, d) {
          var e = a.ui[b].prototype;
          for (var f in d)
            (e.plugins[f] = e.plugins[f] || []), e.plugins[f].push([c, d[f]]);
        },
        call: function (a, b, c) {
          var d = a.plugins[b];
          if (!!d && !!a.element[0].parentNode)
            for (var e = 0; e < d.length; e++)
              a.options[d[e][0]] && d[e][1].apply(a.element, c);
        },
      },
      contains: function (a, b) {
        return document.compareDocumentPosition
          ? a.compareDocumentPosition(b) & 16
          : a !== b && a.contains(b);
      },
      hasScroll: function (b, c) {
        if (a(b).css('overflow') === 'hidden') return !1;
        var d = c && c === 'left' ? 'scrollLeft' : 'scrollTop',
          e = !1;
        if (b[d] > 0) return !0;
        (b[d] = 1), (e = b[d] > 0), (b[d] = 0);
        return e;
      },
      isOverAxis: function (a, b, c) {
        return a > b && a < b + c;
      },
      isOver: function (b, c, d, e, f, g) {
        return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g);
      },
    }));
})(jQuery);
(function (a, b) {
  if (a.cleanData) {
    var c = a.cleanData;
    a.cleanData = function (b) {
      for (var d = 0, e; (e = b[d]) != null; d++)
        try {
          a(e).triggerHandler('remove');
        } catch (f) {}
      c(b);
    };
  } else {
    var d = a.fn.remove;
    a.fn.remove = function (b, c) {
      return this.each(function () {
        c ||
          ((!b || a.filter(b, [this]).length) &&
            a('*', this)
              .add([this])
              .each(function () {
                try {
                  a(this).triggerHandler('remove');
                } catch (b) {}
              }));
        return d.call(a(this), b, c);
      });
    };
  }
  (a.widget = function (b, c, d) {
    var e = b.split('.')[0],
      f;
    (b = b.split('.')[1]),
      (f = e + '-' + b),
      d || ((d = c), (c = a.Widget)),
      (a.expr[':'][f] = function (c) {
        return !!a.data(c, b);
      }),
      (a[e] = a[e] || {}),
      (a[e][b] = function (a, b) {
        arguments.length && this._createWidget(a, b);
      });
    var g = new c();
    (g.options = a.extend(!0, {}, g.options)),
      (a[e][b].prototype = a.extend(
        !0,
        g,
        {
          namespace: e,
          widgetName: b,
          widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
          widgetBaseClass: f,
        },
        d
      )),
      a.widget.bridge(b, a[e][b]);
  }),
    (a.widget.bridge = function (c, d) {
      a.fn[c] = function (e) {
        var f = typeof e == 'string',
          g = Array.prototype.slice.call(arguments, 1),
          h = this;
        e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e;
        if (f && e.charAt(0) === '_') return h;
        f
          ? this.each(function () {
              var d = a.data(this, c),
                f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
              if (f !== d && f !== b) {
                h = f;
                return !1;
              }
            })
          : this.each(function () {
              var b = a.data(this, c);
              b ? b.option(e || {})._init() : a.data(this, c, new d(e, this));
            });
        return h;
      };
    }),
    (a.Widget = function (a, b) {
      arguments.length && this._createWidget(a, b);
    }),
    (a.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      options: { disabled: !1 },
      _createWidget: function (b, c) {
        a.data(c, this.widgetName, this),
          (this.element = a(c)),
          (this.options = a.extend(
            !0,
            {},
            this.options,
            this._getCreateOptions(),
            b
          ));
        var d = this;
        this.element.bind('remove.' + this.widgetName, function () {
          d.destroy();
        }),
          this._create(),
          this._trigger('create'),
          this._init();
      },
      _getCreateOptions: function () {
        return a.metadata && a.metadata.get(this.element[0])[this.widgetName];
      },
      _create: function () {},
      _init: function () {},
      destroy: function () {
        this.element.unbind('.' + this.widgetName).removeData(this.widgetName),
          this.widget()
            .unbind('.' + this.widgetName)
            .removeAttr('aria-disabled')
            .removeClass(
              this.widgetBaseClass + '-disabled ' + 'ui-state-disabled'
            );
      },
      widget: function () {
        return this.element;
      },
      option: function (c, d) {
        var e = c;
        if (arguments.length === 0) return a.extend({}, this.options);
        if (typeof c == 'string') {
          if (d === b) return this.options[c];
          (e = {}), (e[c] = d);
        }
        this._setOptions(e);
        return this;
      },
      _setOptions: function (b) {
        var c = this;
        a.each(b, function (a, b) {
          c._setOption(a, b);
        });
        return this;
      },
      _setOption: function (a, b) {
        (this.options[a] = b),
          a === 'disabled' &&
            this.widget()
              [b ? 'addClass' : 'removeClass'](
                this.widgetBaseClass + '-disabled' + ' ' + 'ui-state-disabled'
              )
              .attr('aria-disabled', b);
        return this;
      },
      enable: function () {
        return this._setOption('disabled', !1);
      },
      disable: function () {
        return this._setOption('disabled', !0);
      },
      _trigger: function (b, c, d) {
        var e,
          f,
          g = this.options[b];
        (d = d || {}),
          (c = a.Event(c)),
          (c.type = (b === this.widgetEventPrefix
            ? b
            : this.widgetEventPrefix + b
          ).toLowerCase()),
          (c.target = this.element[0]),
          (f = c.originalEvent);
        if (f) for (e in f) e in c || (c[e] = f[e]);
        this.element.trigger(c, d);
        return !(
          (a.isFunction(g) && g.call(this.element[0], c, d) === !1) ||
          c.isDefaultPrevented()
        );
      },
    });
})(jQuery);
(function (a, b) {
  var c = !1;
  a(document).mouseup(function (a) {
    c = !1;
  }),
    a.widget('ui.mouse', {
      options: { cancel: ':input,option', distance: 1, delay: 0 },
      _mouseInit: function () {
        var b = this;
        this.element
          .bind('mousedown.' + this.widgetName, function (a) {
            return b._mouseDown(a);
          })
          .bind('click.' + this.widgetName, function (c) {
            if (!0 === a.data(c.target, b.widgetName + '.preventClickEvent')) {
              a.removeData(c.target, b.widgetName + '.preventClickEvent'),
                c.stopImmediatePropagation();
              return !1;
            }
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind('.' + this.widgetName);
      },
      _mouseDown: function (b) {
        if (!c) {
          this._mouseStarted && this._mouseUp(b), (this._mouseDownEvent = b);
          var d = this,
            e = b.which == 1,
            f =
              typeof this.options.cancel == 'string' && b.target.nodeName
                ? a(b.target).closest(this.options.cancel).length
                : !1;
          if (!e || f || !this._mouseCapture(b)) return !0;
          (this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                d.mouseDelayMet = !0;
              }, this.options.delay));
          if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
            this._mouseStarted = this._mouseStart(b) !== !1;
            if (!this._mouseStarted) {
              b.preventDefault();
              return !0;
            }
          }
          !0 === a.data(b.target, this.widgetName + '.preventClickEvent') &&
            a.removeData(b.target, this.widgetName + '.preventClickEvent'),
            (this._mouseMoveDelegate = function (a) {
              return d._mouseMove(a);
            }),
            (this._mouseUpDelegate = function (a) {
              return d._mouseUp(a);
            }),
            a(document)
              .bind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .bind('mouseup.' + this.widgetName, this._mouseUpDelegate),
            b.preventDefault(),
            (c = !0);
          return !0;
        }
      },
      _mouseMove: function (b) {
        if (a.browser.msie && !(document.documentMode >= 9) && !b.button)
          return this._mouseUp(b);
        if (this._mouseStarted) {
          this._mouseDrag(b);
          return b.preventDefault();
        }
        this._mouseDistanceMet(b) &&
          this._mouseDelayMet(b) &&
          ((this._mouseStarted =
            this._mouseStart(this._mouseDownEvent, b) !== !1),
          this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b));
        return !this._mouseStarted;
      },
      _mouseUp: function (b) {
        a(document)
          .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
          .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            b.target == this._mouseDownEvent.target &&
              a.data(b.target, this.widgetName + '.preventClickEvent', !0),
            this._mouseStop(b));
        return !1;
      },
      _mouseDistanceMet: function (a) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - a.pageX),
            Math.abs(this._mouseDownEvent.pageY - a.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function (a) {
        return this.mouseDelayMet;
      },
      _mouseStart: function (a) {},
      _mouseDrag: function (a) {},
      _mouseStop: function (a) {},
      _mouseCapture: function (a) {
        return !0;
      },
    });
})(jQuery);
(function (a, b) {
  a.ui = a.ui || {};
  var c = /left|center|right/,
    d = /top|center|bottom/,
    e = 'center',
    f = {},
    g = a.fn.position,
    h = a.fn.offset;
  (a.fn.position = function (b) {
    if (!b || !b.of) return g.apply(this, arguments);
    b = a.extend({}, b);
    var h = a(b.of),
      i = h[0],
      j = (b.collision || 'flip').split(' '),
      k = b.offset ? b.offset.split(' ') : [0, 0],
      l,
      m,
      n;
    i.nodeType === 9
      ? ((l = h.width()), (m = h.height()), (n = { top: 0, left: 0 }))
      : i.setTimeout
      ? ((l = h.width()),
        (m = h.height()),
        (n = { top: h.scrollTop(), left: h.scrollLeft() }))
      : i.preventDefault
      ? ((b.at = 'left top'),
        (l = m = 0),
        (n = { top: b.of.pageY, left: b.of.pageX }))
      : ((l = h.outerWidth()), (m = h.outerHeight()), (n = h.offset())),
      a.each(['my', 'at'], function () {
        var a = (b[this] || '').split(' ');
        a.length === 1 &&
          (a = c.test(a[0])
            ? a.concat([e])
            : d.test(a[0])
            ? [e].concat(a)
            : [e, e]),
          (a[0] = c.test(a[0]) ? a[0] : e),
          (a[1] = d.test(a[1]) ? a[1] : e),
          (b[this] = a);
      }),
      j.length === 1 && (j[1] = j[0]),
      (k[0] = parseInt(k[0], 10) || 0),
      k.length === 1 && (k[1] = k[0]),
      (k[1] = parseInt(k[1], 10) || 0),
      b.at[0] === 'right' ? (n.left += l) : b.at[0] === e && (n.left += l / 2),
      b.at[1] === 'bottom' ? (n.top += m) : b.at[1] === e && (n.top += m / 2),
      (n.left += k[0]),
      (n.top += k[1]);
    return this.each(function () {
      var c = a(this),
        d = c.outerWidth(),
        g = c.outerHeight(),
        h = parseInt(a.curCSS(this, 'marginLeft', !0)) || 0,
        i = parseInt(a.curCSS(this, 'marginTop', !0)) || 0,
        o = d + h + (parseInt(a.curCSS(this, 'marginRight', !0)) || 0),
        p = g + i + (parseInt(a.curCSS(this, 'marginBottom', !0)) || 0),
        q = a.extend({}, n),
        r;
      b.my[0] === 'right' ? (q.left -= d) : b.my[0] === e && (q.left -= d / 2),
        b.my[1] === 'bottom' ? (q.top -= g) : b.my[1] === e && (q.top -= g / 2),
        f.fractions ||
          ((q.left = Math.round(q.left)), (q.top = Math.round(q.top))),
        (r = { left: q.left - h, top: q.top - i }),
        a.each(['left', 'top'], function (c, e) {
          a.ui.position[j[c]] &&
            a.ui.position[j[c]][e](q, {
              targetWidth: l,
              targetHeight: m,
              elemWidth: d,
              elemHeight: g,
              collisionPosition: r,
              collisionWidth: o,
              collisionHeight: p,
              offset: k,
              my: b.my,
              at: b.at,
            });
        }),
        a.fn.bgiframe && c.bgiframe(),
        c.offset(a.extend(q, { using: b.using }));
    });
  }),
    (a.ui.position = {
      fit: {
        left: function (b, c) {
          var d = a(window),
            e =
              c.collisionPosition.left +
              c.collisionWidth -
              d.width() -
              d.scrollLeft();
          b.left =
            e > 0
              ? b.left - e
              : Math.max(b.left - c.collisionPosition.left, b.left);
        },
        top: function (b, c) {
          var d = a(window),
            e =
              c.collisionPosition.top +
              c.collisionHeight -
              d.height() -
              d.scrollTop();
          b.top =
            e > 0
              ? b.top - e
              : Math.max(b.top - c.collisionPosition.top, b.top);
        },
      },
      flip: {
        left: function (b, c) {
          if (c.at[0] !== e) {
            var d = a(window),
              f =
                c.collisionPosition.left +
                c.collisionWidth -
                d.width() -
                d.scrollLeft(),
              g =
                c.my[0] === 'left'
                  ? -c.elemWidth
                  : c.my[0] === 'right'
                  ? c.elemWidth
                  : 0,
              h = c.at[0] === 'left' ? c.targetWidth : -c.targetWidth,
              i = -2 * c.offset[0];
            b.left +=
              c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0;
          }
        },
        top: function (b, c) {
          if (c.at[1] !== e) {
            var d = a(window),
              f =
                c.collisionPosition.top +
                c.collisionHeight -
                d.height() -
                d.scrollTop(),
              g =
                c.my[1] === 'top'
                  ? -c.elemHeight
                  : c.my[1] === 'bottom'
                  ? c.elemHeight
                  : 0,
              h = c.at[1] === 'top' ? c.targetHeight : -c.targetHeight,
              i = -2 * c.offset[1];
            b.top +=
              c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0;
          }
        },
      },
    }),
    a.offset.setOffset ||
      ((a.offset.setOffset = function (b, c) {
        /static/.test(a.curCSS(b, 'position')) &&
          (b.style.position = 'relative');
        var d = a(b),
          e = d.offset(),
          f = parseInt(a.curCSS(b, 'top', !0), 10) || 0,
          g = parseInt(a.curCSS(b, 'left', !0), 10) || 0,
          h = { top: c.top - e.top + f, left: c.left - e.left + g };
        'using' in c ? c.using.call(b, h) : d.css(h);
      }),
      (a.fn.offset = function (b) {
        var c = this[0];
        if (!c || !c.ownerDocument) return null;
        if (b)
          return this.each(function () {
            a.offset.setOffset(this, b);
          });
        return h.call(this);
      })),
    (function () {
      var b = document.getElementsByTagName('body')[0],
        c = document.createElement('div'),
        d,
        e,
        g,
        h,
        i;
      (d = document.createElement(b ? 'div' : 'body')),
        (g = {
          visibility: 'hidden',
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: 'none',
        }),
        b &&
          jQuery.extend(g, {
            position: 'absolute',
            left: '-1000px',
            top: '-1000px',
          });
      for (var j in g) d.style[j] = g[j];
      d.appendChild(c),
        (e = b || document.documentElement),
        e.insertBefore(d, e.firstChild),
        (c.style.cssText =
          'position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;'),
        (h = a(c)
          .offset(function (a, b) {
            return b;
          })
          .offset()),
        (d.innerHTML = ''),
        e.removeChild(d),
        (i = h.top + h.left + (b ? 2e3 : 0)),
        (f.fractions = i > 21 && i < 22);
    })();
})(jQuery);
(function (a, b) {
  var c = 'ui-dialog ui-widget ui-widget-content ui-corner-all ',
    d = {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0,
    },
    e = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
    f = a.attrFn || {
      val: !0,
      css: !0,
      html: !0,
      text: !0,
      data: !0,
      width: !0,
      height: !0,
      offset: !0,
      click: !0,
    };
  a.widget('ui.dialog', {
    options: {
      autoOpen: !0,
      buttons: {},
      closeOnEscape: !0,
      closeText: 'close',
      dialogClass: '',
      draggable: !0,
      hide: null,
      height: 'auto',
      maxHeight: !1,
      maxWidth: !1,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: 'center',
        at: 'center',
        collision: 'fit',
        using: function (b) {
          var c = a(this).css(b).offset().top;
          c < 0 && a(this).css('top', b.top - c);
        },
      },
      resizable: !0,
      show: null,
      stack: !0,
      title: '',
      width: 300,
      zIndex: 1e3,
    },
    _create: function () {
      (this.originalTitle = this.element.attr('title')),
        typeof this.originalTitle != 'string' && (this.originalTitle = ''),
        (this.options.title = this.options.title || this.originalTitle);
      var b = this,
        d = b.options,
        e = d.title || '&#160;',
        f = a.ui.dialog.getTitleId(b.element),
        g = (b.uiDialog = a('<div></div>'))
          .appendTo(document.body)
          .hide()
          .addClass(c + d.dialogClass)
          .css({ zIndex: d.zIndex })
          .attr('tabIndex', -1)
          .css('outline', 0)
          .keydown(function (c) {
            d.closeOnEscape &&
              !c.isDefaultPrevented() &&
              c.keyCode &&
              c.keyCode === a.ui.keyCode.ESCAPE &&
              (b.close(c), c.preventDefault());
          })
          .attr({ role: 'dialog', 'aria-labelledby': f })
          .mousedown(function (a) {
            b.moveToTop(!1, a);
          }),
        h = b.element
          .show()
          .removeAttr('title')
          .addClass('ui-dialog-content ui-widget-content')
          .appendTo(g),
        i = (b.uiDialogTitlebar = a('<div></div>'))
          .addClass(
            'ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix'
          )
          .prependTo(g),
        j = a('<a href="#"></a>')
          .addClass('ui-dialog-titlebar-close ui-corner-all')
          .attr('role', 'button')
          .hover(
            function () {
              j.addClass('ui-state-hover');
            },
            function () {
              j.removeClass('ui-state-hover');
            }
          )
          .focus(function () {
            j.addClass('ui-state-focus');
          })
          .blur(function () {
            j.removeClass('ui-state-focus');
          })
          .click(function (a) {
            b.close(a);
            return !1;
          })
          .appendTo(i),
        k = (b.uiDialogTitlebarCloseText = a('<span></span>'))
          .addClass('ui-icon ui-icon-closethick')
          .text(d.closeText)
          .appendTo(j),
        l = a('<span></span>')
          .addClass('ui-dialog-title')
          .attr('id', f)
          .html(e)
          .prependTo(i);
      a.isFunction(d.beforeclose) &&
        !a.isFunction(d.beforeClose) &&
        (d.beforeClose = d.beforeclose),
        i.find('*').add(i).disableSelection(),
        d.draggable && a.fn.draggable && b._makeDraggable(),
        d.resizable && a.fn.resizable && b._makeResizable(),
        b._createButtons(d.buttons),
        (b._isOpen = !1),
        a.fn.bgiframe && g.bgiframe();
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    destroy: function () {
      var a = this;
      a.overlay && a.overlay.destroy(),
        a.uiDialog.hide(),
        a.element
          .unbind('.dialog')
          .removeData('dialog')
          .removeClass('ui-dialog-content ui-widget-content')
          .hide()
          .appendTo('body'),
        a.uiDialog.remove(),
        a.originalTitle && a.element.attr('title', a.originalTitle);
      return a;
    },
    widget: function () {
      return this.uiDialog;
    },
    close: function (b) {
      var c = this,
        d,
        e;
      if (!1 !== c._trigger('beforeClose', b)) {
        c.overlay && c.overlay.destroy(),
          c.uiDialog.unbind('keypress.ui-dialog'),
          (c._isOpen = !1),
          c.options.hide
            ? c.uiDialog.hide(c.options.hide, function () {
                c._trigger('close', b);
              })
            : (c.uiDialog.hide(), c._trigger('close', b)),
          a.ui.dialog.overlay.resize(),
          c.options.modal &&
            ((d = 0),
            a('.ui-dialog').each(function () {
              this !== c.uiDialog[0] &&
                ((e = a(this).css('z-index')),
                isNaN(e) || (d = Math.max(d, e)));
            }),
            (a.ui.dialog.maxZ = d));
        return c;
      }
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function (b, c) {
      var d = this,
        e = d.options,
        f;
      if ((e.modal && !b) || (!e.stack && !e.modal))
        return d._trigger('focus', c);
      e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex),
        d.overlay &&
          ((a.ui.dialog.maxZ += 1),
          d.overlay.$el.css(
            'z-index',
            (a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)
          )),
        (f = {
          scrollTop: d.element.scrollTop(),
          scrollLeft: d.element.scrollLeft(),
        }),
        (a.ui.dialog.maxZ += 1),
        d.uiDialog.css('z-index', a.ui.dialog.maxZ),
        d.element.attr(f),
        d._trigger('focus', c);
      return d;
    },
    open: function () {
      if (!this._isOpen) {
        var b = this,
          c = b.options,
          d = b.uiDialog;
        (b.overlay = c.modal ? new a.ui.dialog.overlay(b) : null),
          b._size(),
          b._position(c.position),
          d.show(c.show),
          b.moveToTop(!0),
          c.modal &&
            d.bind('keydown.ui-dialog', function (b) {
              if (b.keyCode === a.ui.keyCode.TAB) {
                var c = a(':tabbable', this),
                  d = c.filter(':first'),
                  e = c.filter(':last');
                if (b.target === e[0] && !b.shiftKey) {
                  d.focus(1);
                  return !1;
                }
                if (b.target === d[0] && b.shiftKey) {
                  e.focus(1);
                  return !1;
                }
              }
            }),
          a(
            b.element
              .find(':tabbable')
              .get()
              .concat(
                d.find('.ui-dialog-buttonpane :tabbable').get().concat(d.get())
              )
          )
            .eq(0)
            .focus(),
          (b._isOpen = !0),
          b._trigger('open');
        return b;
      }
    },
    _createButtons: function (b) {
      var c = this,
        d = !1,
        e = a('<div></div>').addClass(
          'ui-dialog-buttonpane ui-widget-content ui-helper-clearfix'
        ),
        g = a('<div></div>').addClass('ui-dialog-buttonset').appendTo(e);
      c.uiDialog.find('.ui-dialog-buttonpane').remove(),
        typeof b == 'object' &&
          b !== null &&
          a.each(b, function () {
            return !(d = !0);
          }),
        d &&
          (a.each(b, function (b, d) {
            d = a.isFunction(d) ? { click: d, text: b } : d;
            var e = a('<button type="button"></button>')
              .click(function () {
                d.click.apply(c.element[0], arguments);
              })
              .appendTo(g);
            a.each(d, function (a, b) {
              a !== 'click' && (a in f ? e[a](b) : e.attr(a, b));
            }),
              a.fn.button && e.button();
          }),
          e.appendTo(c.uiDialog));
    },
    _makeDraggable: function () {
      function f(a) {
        return { position: a.position, offset: a.offset };
      }
      var b = this,
        c = b.options,
        d = a(document),
        e;
      b.uiDialog.draggable({
        cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
        handle: '.ui-dialog-titlebar',
        containment: 'document',
        start: function (d, g) {
          (e = c.height === 'auto' ? 'auto' : a(this).height()),
            a(this).height(a(this).height()).addClass('ui-dialog-dragging'),
            b._trigger('dragStart', d, f(g));
        },
        drag: function (a, c) {
          b._trigger('drag', a, f(c));
        },
        stop: function (g, h) {
          (c.position = [
            h.position.left - d.scrollLeft(),
            h.position.top - d.scrollTop(),
          ]),
            a(this).removeClass('ui-dialog-dragging').height(e),
            b._trigger('dragStop', g, f(h)),
            a.ui.dialog.overlay.resize();
        },
      });
    },
    _makeResizable: function (c) {
      function h(a) {
        return {
          originalPosition: a.originalPosition,
          originalSize: a.originalSize,
          position: a.position,
          size: a.size,
        };
      }
      c = c === b ? this.options.resizable : c;
      var d = this,
        e = d.options,
        f = d.uiDialog.css('position'),
        g = typeof c == 'string' ? c : 'n,e,s,w,se,sw,ne,nw';
      d.uiDialog
        .resizable({
          cancel: '.ui-dialog-content',
          containment: 'document',
          alsoResize: d.element,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          minWidth: e.minWidth,
          minHeight: d._minHeight(),
          handles: g,
          start: function (b, c) {
            a(this).addClass('ui-dialog-resizing'),
              d._trigger('resizeStart', b, h(c));
          },
          resize: function (a, b) {
            d._trigger('resize', a, h(b));
          },
          stop: function (b, c) {
            a(this).removeClass('ui-dialog-resizing'),
              (e.height = a(this).height()),
              (e.width = a(this).width()),
              d._trigger('resizeStop', b, h(c)),
              a.ui.dialog.overlay.resize();
          },
        })
        .css('position', f)
        .find('.ui-resizable-se')
        .addClass('ui-icon ui-icon-grip-diagonal-se');
    },
    _minHeight: function () {
      var a = this.options;
      return a.height === 'auto'
        ? a.minHeight
        : Math.min(a.minHeight, a.height);
    },
    _position: function (b) {
      var c = [],
        d = [0, 0],
        e;
      if (b) {
        if (typeof b == 'string' || (typeof b == 'object' && '0' in b))
          (c = b.split ? b.split(' ') : [b[0], b[1]]),
            c.length === 1 && (c[1] = c[0]),
            a.each(['left', 'top'], function (a, b) {
              +c[a] === c[a] && ((d[a] = c[a]), (c[a] = b));
            }),
            (b = { my: c.join(' '), at: c.join(' '), offset: d.join(' ') });
        b = a.extend({}, a.ui.dialog.prototype.options.position, b);
      } else b = a.ui.dialog.prototype.options.position;
      (e = this.uiDialog.is(':visible')),
        e || this.uiDialog.show(),
        this.uiDialog
          .css({ top: 0, left: 0 })
          .position(a.extend({ of: window }, b)),
        e || this.uiDialog.hide();
    },
    _setOptions: function (b) {
      var c = this,
        f = {},
        g = !1;
      a.each(b, function (a, b) {
        c._setOption(a, b), a in d && (g = !0), a in e && (f[a] = b);
      }),
        g && this._size(),
        this.uiDialog.is(':data(resizable)') &&
          this.uiDialog.resizable('option', f);
    },
    _setOption: function (b, d) {
      var e = this,
        f = e.uiDialog;
      switch (b) {
        case 'beforeclose':
          b = 'beforeClose';
          break;
        case 'buttons':
          e._createButtons(d);
          break;
        case 'closeText':
          e.uiDialogTitlebarCloseText.text('' + d);
          break;
        case 'dialogClass':
          f.removeClass(e.options.dialogClass).addClass(c + d);
          break;
        case 'disabled':
          d
            ? f.addClass('ui-dialog-disabled')
            : f.removeClass('ui-dialog-disabled');
          break;
        case 'draggable':
          var g = f.is(':data(draggable)');
          g && !d && f.draggable('destroy'), !g && d && e._makeDraggable();
          break;
        case 'position':
          e._position(d);
          break;
        case 'resizable':
          var h = f.is(':data(resizable)');
          h && !d && f.resizable('destroy'),
            h && typeof d == 'string' && f.resizable('option', 'handles', d),
            !h && d !== !1 && e._makeResizable(d);
          break;
        case 'title':
          a('.ui-dialog-title', e.uiDialogTitlebar).html('' + (d || '&#160;'));
      }
      a.Widget.prototype._setOption.apply(e, arguments);
    },
    _size: function () {
      var b = this.options,
        c,
        d,
        e = this.uiDialog.is(':visible');
      this.element.show().css({ width: 'auto', minHeight: 0, height: 0 }),
        b.minWidth > b.width && (b.width = b.minWidth),
        (c = this.uiDialog.css({ height: 'auto', width: b.width }).height()),
        (d = Math.max(0, b.minHeight - c));
      if (b.height === 'auto')
        if (a.support.minHeight)
          this.element.css({ minHeight: d, height: 'auto' });
        else {
          this.uiDialog.show();
          var f = this.element.css('height', 'auto').height();
          e || this.uiDialog.hide(), this.element.height(Math.max(f, d));
        }
      else this.element.height(Math.max(b.height - c, 0));
      this.uiDialog.is(':data(resizable)') &&
        this.uiDialog.resizable('option', 'minHeight', this._minHeight());
    },
  }),
    a.extend(a.ui.dialog, {
      version: '1.8.17',
      uuid: 0,
      maxZ: 0,
      getTitleId: function (a) {
        var b = a.attr('id');
        b || ((this.uuid += 1), (b = this.uuid));
        return 'ui-dialog-title-' + b;
      },
      overlay: function (b) {
        this.$el = a.ui.dialog.overlay.create(b);
      },
    }),
    a.extend(a.ui.dialog.overlay, {
      instances: [],
      oldInstances: [],
      maxZ: 0,
      events: a
        .map(
          'focus,mousedown,mouseup,keydown,keypress,click'.split(','),
          function (a) {
            return a + '.dialog-overlay';
          }
        )
        .join(' '),
      create: function (b) {
        this.instances.length === 0 &&
          (setTimeout(function () {
            a.ui.dialog.overlay.instances.length &&
              a(document).bind(a.ui.dialog.overlay.events, function (b) {
                if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ) return !1;
              });
          }, 1),
          a(document).bind('keydown.dialog-overlay', function (c) {
            b.options.closeOnEscape &&
              !c.isDefaultPrevented() &&
              c.keyCode &&
              c.keyCode === a.ui.keyCode.ESCAPE &&
              (b.close(c), c.preventDefault());
          }),
          a(window).bind('resize.dialog-overlay', a.ui.dialog.overlay.resize));
        var c = (
          this.oldInstances.pop() ||
          a('<div></div>').addClass('ui-widget-overlay')
        )
          .appendTo(document.body)
          .css({ width: this.width(), height: this.height() });
        a.fn.bgiframe && c.bgiframe(), this.instances.push(c);
        return c;
      },
      destroy: function (b) {
        var c = a.inArray(b, this.instances);
        c != -1 && this.oldInstances.push(this.instances.splice(c, 1)[0]),
          this.instances.length === 0 &&
            a([document, window]).unbind('.dialog-overlay'),
          b.remove();
        var d = 0;
        a.each(this.instances, function () {
          d = Math.max(d, this.css('z-index'));
        }),
          (this.maxZ = d);
      },
      height: function () {
        var b, c;
        if (a.browser.msie && a.browser.version < 7) {
          (b = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
          )),
            (c = Math.max(
              document.documentElement.offsetHeight,
              document.body.offsetHeight
            ));
          return b < c ? a(window).height() + 'px' : b + 'px';
        }
        return a(document).height() + 'px';
      },
      width: function () {
        var b, c;
        if (a.browser.msie) {
          (b = Math.max(
            document.documentElement.scrollWidth,
            document.body.scrollWidth
          )),
            (c = Math.max(
              document.documentElement.offsetWidth,
              document.body.offsetWidth
            ));
          return b < c ? a(window).width() + 'px' : b + 'px';
        }
        return a(document).width() + 'px';
      },
      resize: function () {
        var b = a([]);
        a.each(a.ui.dialog.overlay.instances, function () {
          b = b.add(this);
        }),
          b
            .css({ width: 0, height: 0 })
            .css({
              width: a.ui.dialog.overlay.width(),
              height: a.ui.dialog.overlay.height(),
            });
      },
    }),
    a.extend(a.ui.dialog.overlay.prototype, {
      destroy: function () {
        a.ui.dialog.overlay.destroy(this.$el);
      },
    });
})(jQuery);
(function ($, undefined) {
  function isArray(a) {
    return (
      a &&
      (($.browser.safari && typeof a == 'object' && a.length) ||
        (a.constructor && a.constructor.toString().match(/\Array\(\)/)))
    );
  }
  function extendRemove(a, b) {
    $.extend(a, b);
    for (var c in b) if (b[c] == null || b[c] == undefined) a[c] = b[c];
    return a;
  }
  function bindHover(a) {
    var b =
      'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
    return a
      .bind('mouseout', function (a) {
        var c = $(a.target).closest(b);
        !c.length ||
          c.removeClass(
            'ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover'
          );
      })
      .bind('mouseover', function (c) {
        var d = $(c.target).closest(b);
        !$.datepicker._isDisabledDatepicker(
          instActive.inline ? a.parent()[0] : instActive.input[0]
        ) &&
          !!d.length &&
          (d
            .parents('.ui-datepicker-calendar')
            .find('a')
            .removeClass('ui-state-hover'),
          d.addClass('ui-state-hover'),
          d.hasClass('ui-datepicker-prev') &&
            d.addClass('ui-datepicker-prev-hover'),
          d.hasClass('ui-datepicker-next') &&
            d.addClass('ui-datepicker-next-hover'));
      });
  }
  function Datepicker() {
    (this.debug = !1),
      (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = 'ui-datepicker-div'),
      (this._inlineClass = 'ui-datepicker-inline'),
      (this._appendClass = 'ui-datepicker-append'),
      (this._triggerClass = 'ui-datepicker-trigger'),
      (this._dialogClass = 'ui-datepicker-dialog'),
      (this._disableClass = 'ui-datepicker-disabled'),
      (this._unselectableClass = 'ui-datepicker-unselectable'),
      (this._currentClass = 'ui-datepicker-current-day'),
      (this._dayOverClass = 'ui-datepicker-days-cell-over'),
      (this.regional = []),
      (this.regional[''] = {
        closeText: 'Done',
        prevText: 'Prev',
        nextText: 'Next',
        currentText: 'Today',
        monthNames: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        monthNamesShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        dayNames: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        weekHeader: 'Wk',
        dateFormat: 'mm/dd/yy',
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: '',
      }),
      (this._defaults = {
        showOn: 'focus',
        showAnim: 'fadeIn',
        showOptions: {},
        defaultDate: null,
        appendText: '',
        buttonText: '...',
        buttonImage: '',
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: 'c-10:c+10',
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: null,
        maxDate: null,
        duration: 'fast',
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: '',
        altFormat: '',
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      $.extend(this._defaults, this.regional['']),
      (this.dpDiv = bindHover(
        $(
          '<div id="' +
            this._mainDivId +
            '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'
        )
      ));
  }
  $.extend($.ui, { datepicker: { version: '1.8.17' } });
  var PROP_NAME = 'datepicker',
    dpuuid = new Date().getTime(),
    instActive;
  $.extend(Datepicker.prototype, {
    markerClassName: 'hasDatepicker',
    maxRows: 4,
    log: function () {
      this.debug && console.log.apply('', arguments);
    },
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (a) {
      extendRemove(this._defaults, a || {});
      return this;
    },
    _attachDatepicker: function (target, settings) {
      var inlineSettings = null;
      for (var attrName in this._defaults) {
        var attrValue = target.getAttribute('date:' + attrName);
        if (attrValue) {
          inlineSettings = inlineSettings || {};
          try {
            inlineSettings[attrName] = eval(attrValue);
          } catch (err) {
            inlineSettings[attrName] = attrValue;
          }
        }
      }
      var nodeName = target.nodeName.toLowerCase(),
        inline = nodeName == 'div' || nodeName == 'span';
      target.id || ((this.uuid += 1), (target.id = 'dp' + this.uuid));
      var inst = this._newInst($(target), inline);
      (inst.settings = $.extend({}, settings || {}, inlineSettings || {})),
        nodeName == 'input'
          ? this._connectDatepicker(target, inst)
          : inline && this._inlineDatepicker(target, inst);
    },
    _newInst: function (a, b) {
      var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1');
      return {
        id: c,
        input: a,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: b,
        dpDiv: b
          ? bindHover(
              $(
                '<div class="' +
                  this._inlineClass +
                  ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'
              )
            )
          : this.dpDiv,
      };
    },
    _connectDatepicker: function (a, b) {
      var c = $(a);
      (b.append = $([])), (b.trigger = $([]));
      c.hasClass(this.markerClassName) ||
        (this._attachments(c, b),
        c
          .addClass(this.markerClassName)
          .keydown(this._doKeyDown)
          .keypress(this._doKeyPress)
          .keyup(this._doKeyUp)
          .bind('setData.datepicker', function (a, c, d) {
            b.settings[c] = d;
          })
          .bind('getData.datepicker', function (a, c) {
            return this._get(b, c);
          }),
        this._autoSize(b),
        $.data(a, PROP_NAME, b),
        b.settings.disabled && this._disableDatepicker(a));
    },
    _attachments: function (a, b) {
      var c = this._get(b, 'appendText'),
        d = this._get(b, 'isRTL');
      b.append && b.append.remove(),
        c &&
          ((b.append = $(
            '<span class="' + this._appendClass + '">' + c + '</span>'
          )),
          a[d ? 'before' : 'after'](b.append)),
        a.unbind('focus', this._showDatepicker),
        b.trigger && b.trigger.remove();
      var e = this._get(b, 'showOn');
      (e == 'focus' || e == 'both') && a.focus(this._showDatepicker);
      if (e == 'button' || e == 'both') {
        var f = this._get(b, 'buttonText'),
          g = this._get(b, 'buttonImage');
        (b.trigger = $(
          this._get(b, 'buttonImageOnly')
            ? $('<img/>')
                .addClass(this._triggerClass)
                .attr({ src: g, alt: f, title: f })
            : $('<button type="button"></button>')
                .addClass(this._triggerClass)
                .html(
                  g == '' ? f : $('<img/>').attr({ src: g, alt: f, title: f })
                )
        )),
          a[d ? 'before' : 'after'](b.trigger),
          b.trigger.click(function () {
            $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0]
              ? $.datepicker._hideDatepicker()
              : $.datepicker._showDatepicker(a[0]);
            return !1;
          });
      }
    },
    _autoSize: function (a) {
      if (this._get(a, 'autoSize') && !a.inline) {
        var b = new Date(2009, 11, 20),
          c = this._get(a, 'dateFormat');
        if (c.match(/[DM]/)) {
          var d = function (a) {
            var b = 0,
              c = 0;
            for (var d = 0; d < a.length; d++)
              a[d].length > b && ((b = a[d].length), (c = d));
            return c;
          };
          b.setMonth(
            d(this._get(a, c.match(/MM/) ? 'monthNames' : 'monthNamesShort'))
          ),
            b.setDate(
              d(this._get(a, c.match(/DD/) ? 'dayNames' : 'dayNamesShort')) +
                20 -
                b.getDay()
            );
        }
        a.input.attr('size', this._formatDate(a, b).length);
      }
    },
    _inlineDatepicker: function (a, b) {
      var c = $(a);
      c.hasClass(this.markerClassName) ||
        (c
          .addClass(this.markerClassName)
          .append(b.dpDiv)
          .bind('setData.datepicker', function (a, c, d) {
            b.settings[c] = d;
          })
          .bind('getData.datepicker', function (a, c) {
            return this._get(b, c);
          }),
        $.data(a, PROP_NAME, b),
        this._setDate(b, this._getDefaultDate(b), !0),
        this._updateDatepicker(b),
        this._updateAlternate(b),
        b.settings.disabled && this._disableDatepicker(a),
        b.dpDiv.css('display', 'block'));
    },
    _dialogDatepicker: function (a, b, c, d, e) {
      var f = this._dialogInst;
      if (!f) {
        this.uuid += 1;
        var g = 'dp' + this.uuid;
        (this._dialogInput = $(
          '<input type="text" id="' +
            g +
            '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'
        )),
          this._dialogInput.keydown(this._doKeyDown),
          $('body').append(this._dialogInput),
          (f = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (f.settings = {}),
          $.data(this._dialogInput[0], PROP_NAME, f);
      }
      extendRemove(f.settings, d || {}),
        (b = b && b.constructor == Date ? this._formatDate(f, b) : b),
        this._dialogInput.val(b),
        (this._pos = e ? (e.length ? e : [e.pageX, e.pageY]) : null);
      if (!this._pos) {
        var h = document.documentElement.clientWidth,
          i = document.documentElement.clientHeight,
          j = document.documentElement.scrollLeft || document.body.scrollLeft,
          k = document.documentElement.scrollTop || document.body.scrollTop;
        this._pos = [h / 2 - 100 + j, i / 2 - 150 + k];
      }
      this._dialogInput
        .css('left', this._pos[0] + 20 + 'px')
        .css('top', this._pos[1] + 'px'),
        (f.settings.onSelect = c),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        $.blockUI && $.blockUI(this.dpDiv),
        $.data(this._dialogInput[0], PROP_NAME, f);
      return this;
    },
    _destroyDatepicker: function (a) {
      var b = $(a),
        c = $.data(a, PROP_NAME);
      if (!!b.hasClass(this.markerClassName)) {
        var d = a.nodeName.toLowerCase();
        $.removeData(a, PROP_NAME),
          d == 'input'
            ? (c.append.remove(),
              c.trigger.remove(),
              b
                .removeClass(this.markerClassName)
                .unbind('focus', this._showDatepicker)
                .unbind('keydown', this._doKeyDown)
                .unbind('keypress', this._doKeyPress)
                .unbind('keyup', this._doKeyUp))
            : (d == 'div' || d == 'span') &&
              b.removeClass(this.markerClassName).empty();
      }
    },
    _enableDatepicker: function (a) {
      var b = $(a),
        c = $.data(a, PROP_NAME);
      if (!!b.hasClass(this.markerClassName)) {
        var d = a.nodeName.toLowerCase();
        if (d == 'input')
          (a.disabled = !1),
            c.trigger
              .filter('button')
              .each(function () {
                this.disabled = !1;
              })
              .end()
              .filter('img')
              .css({ opacity: '1.0', cursor: '' });
        else if (d == 'div' || d == 'span') {
          var e = b.children('.' + this._inlineClass);
          e.children().removeClass('ui-state-disabled'),
            e
              .find('select.ui-datepicker-month, select.ui-datepicker-year')
              .removeAttr('disabled');
        }
        this._disabledInputs = $.map(this._disabledInputs, function (b) {
          return b == a ? null : b;
        });
      }
    },
    _disableDatepicker: function (a) {
      var b = $(a),
        c = $.data(a, PROP_NAME);
      if (!!b.hasClass(this.markerClassName)) {
        var d = a.nodeName.toLowerCase();
        if (d == 'input')
          (a.disabled = !0),
            c.trigger
              .filter('button')
              .each(function () {
                this.disabled = !0;
              })
              .end()
              .filter('img')
              .css({ opacity: '0.5', cursor: 'default' });
        else if (d == 'div' || d == 'span') {
          var e = b.children('.' + this._inlineClass);
          e.children().addClass('ui-state-disabled'),
            e
              .find('select.ui-datepicker-month, select.ui-datepicker-year')
              .attr('disabled', 'disabled');
        }
        (this._disabledInputs = $.map(this._disabledInputs, function (b) {
          return b == a ? null : b;
        })),
          (this._disabledInputs[this._disabledInputs.length] = a);
      }
    },
    _isDisabledDatepicker: function (a) {
      if (!a) return !1;
      for (var b = 0; b < this._disabledInputs.length; b++)
        if (this._disabledInputs[b] == a) return !0;
      return !1;
    },
    _getInst: function (a) {
      try {
        return $.data(a, PROP_NAME);
      } catch (b) {
        throw 'Missing instance data for this datepicker';
      }
    },
    _optionDatepicker: function (a, b, c) {
      var d = this._getInst(a);
      if (arguments.length == 2 && typeof b == 'string')
        return b == 'defaults'
          ? $.extend({}, $.datepicker._defaults)
          : d
          ? b == 'all'
            ? $.extend({}, d.settings)
            : this._get(d, b)
          : null;
      var e = b || {};
      typeof b == 'string' && ((e = {}), (e[b] = c));
      if (d) {
        this._curInst == d && this._hideDatepicker();
        var f = this._getDateDatepicker(a, !0),
          g = this._getMinMaxDate(d, 'min'),
          h = this._getMinMaxDate(d, 'max');
        extendRemove(d.settings, e),
          g !== null &&
            e.dateFormat !== undefined &&
            e.minDate === undefined &&
            (d.settings.minDate = this._formatDate(d, g)),
          h !== null &&
            e.dateFormat !== undefined &&
            e.maxDate === undefined &&
            (d.settings.maxDate = this._formatDate(d, h)),
          this._attachments($(a), d),
          this._autoSize(d),
          this._setDate(d, f),
          this._updateAlternate(d),
          this._updateDatepicker(d);
      }
    },
    _changeDatepicker: function (a, b, c) {
      this._optionDatepicker(a, b, c);
    },
    _refreshDatepicker: function (a) {
      var b = this._getInst(a);
      b && this._updateDatepicker(b);
    },
    _setDateDatepicker: function (a, b) {
      var c = this._getInst(a);
      c &&
        (this._setDate(c, b),
        this._updateDatepicker(c),
        this._updateAlternate(c));
    },
    _getDateDatepicker: function (a, b) {
      var c = this._getInst(a);
      c && !c.inline && this._setDateFromField(c, b);
      return c ? this._getDate(c) : null;
    },
    _doKeyDown: function (a) {
      var b = $.datepicker._getInst(a.target),
        c = !0,
        d = b.dpDiv.is('.ui-datepicker-rtl');
      b._keyEvent = !0;
      if ($.datepicker._datepickerShowing)
        switch (a.keyCode) {
          case 9:
            $.datepicker._hideDatepicker(), (c = !1);
            break;
          case 13:
            var e = $(
              'td.' +
                $.datepicker._dayOverClass +
                ':not(.' +
                $.datepicker._currentClass +
                ')',
              b.dpDiv
            );
            e[0] &&
              $.datepicker._selectDay(
                a.target,
                b.selectedMonth,
                b.selectedYear,
                e[0]
              );
            var f = $.datepicker._get(b, 'onSelect');
            if (f) {
              var g = $.datepicker._formatDate(b);
              f.apply(b.input ? b.input[0] : null, [g, b]);
            } else $.datepicker._hideDatepicker();
            return !1;
          case 27:
            $.datepicker._hideDatepicker();
            break;
          case 33:
            $.datepicker._adjustDate(
              a.target,
              a.ctrlKey
                ? -$.datepicker._get(b, 'stepBigMonths')
                : -$.datepicker._get(b, 'stepMonths'),
              'M'
            );
            break;
          case 34:
            $.datepicker._adjustDate(
              a.target,
              a.ctrlKey
                ? +$.datepicker._get(b, 'stepBigMonths')
                : +$.datepicker._get(b, 'stepMonths'),
              'M'
            );
            break;
          case 35:
            (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target),
              (c = a.ctrlKey || a.metaKey);
            break;
          case 36:
            (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target),
              (c = a.ctrlKey || a.metaKey);
            break;
          case 37:
            (a.ctrlKey || a.metaKey) &&
              $.datepicker._adjustDate(a.target, d ? 1 : -1, 'D'),
              (c = a.ctrlKey || a.metaKey),
              a.originalEvent.altKey &&
                $.datepicker._adjustDate(
                  a.target,
                  a.ctrlKey
                    ? -$.datepicker._get(b, 'stepBigMonths')
                    : -$.datepicker._get(b, 'stepMonths'),
                  'M'
                );
            break;
          case 38:
            (a.ctrlKey || a.metaKey) &&
              $.datepicker._adjustDate(a.target, -7, 'D'),
              (c = a.ctrlKey || a.metaKey);
            break;
          case 39:
            (a.ctrlKey || a.metaKey) &&
              $.datepicker._adjustDate(a.target, d ? -1 : 1, 'D'),
              (c = a.ctrlKey || a.metaKey),
              a.originalEvent.altKey &&
                $.datepicker._adjustDate(
                  a.target,
                  a.ctrlKey
                    ? +$.datepicker._get(b, 'stepBigMonths')
                    : +$.datepicker._get(b, 'stepMonths'),
                  'M'
                );
            break;
          case 40:
            (a.ctrlKey || a.metaKey) &&
              $.datepicker._adjustDate(a.target, 7, 'D'),
              (c = a.ctrlKey || a.metaKey);
            break;
          default:
            c = !1;
        }
      else
        a.keyCode == 36 && a.ctrlKey
          ? $.datepicker._showDatepicker(this)
          : (c = !1);
      c && (a.preventDefault(), a.stopPropagation());
    },
    _doKeyPress: function (a) {
      var b = $.datepicker._getInst(a.target);
      if ($.datepicker._get(b, 'constrainInput')) {
        var c = $.datepicker._possibleChars($.datepicker._get(b, 'dateFormat')),
          d = String.fromCharCode(
            a.charCode == undefined ? a.keyCode : a.charCode
          );
        return a.ctrlKey || a.metaKey || d < ' ' || !c || c.indexOf(d) > -1;
      }
    },
    _doKeyUp: function (a) {
      var b = $.datepicker._getInst(a.target);
      if (b.input.val() != b.lastVal)
        try {
          var c = $.datepicker.parseDate(
            $.datepicker._get(b, 'dateFormat'),
            b.input ? b.input.val() : null,
            $.datepicker._getFormatConfig(b)
          );
          c &&
            ($.datepicker._setDateFromField(b),
            $.datepicker._updateAlternate(b),
            $.datepicker._updateDatepicker(b));
        } catch (a) {
          $.datepicker.log(a);
        }
      return !0;
    },
    _showDatepicker: function (a) {
      (a = a.target || a),
        a.nodeName.toLowerCase() != 'input' &&
          (a = $('input', a.parentNode)[0]);
      if (
        !$.datepicker._isDisabledDatepicker(a) &&
        $.datepicker._lastInput != a
      ) {
        var b = $.datepicker._getInst(a);
        $.datepicker._curInst &&
          $.datepicker._curInst != b &&
          ($.datepicker._curInst.dpDiv.stop(!0, !0),
          b &&
            $.datepicker._datepickerShowing &&
            $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
        var c = $.datepicker._get(b, 'beforeShow'),
          d = c ? c.apply(a, [a, b]) : {};
        if (d === !1) return;
        extendRemove(b.settings, d),
          (b.lastVal = null),
          ($.datepicker._lastInput = a),
          $.datepicker._setDateFromField(b),
          $.datepicker._inDialog && (a.value = ''),
          $.datepicker._pos ||
            (($.datepicker._pos = $.datepicker._findPos(a)),
            ($.datepicker._pos[1] += a.offsetHeight));
        var e = !1;
        $(a)
          .parents()
          .each(function () {
            e |= $(this).css('position') == 'fixed';
            return !e;
          }),
          e &&
            $.browser.opera &&
            (($.datepicker._pos[0] -= document.documentElement.scrollLeft),
            ($.datepicker._pos[1] -= document.documentElement.scrollTop));
        var f = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
        ($.datepicker._pos = null),
          b.dpDiv.empty(),
          b.dpDiv.css({
            position: 'absolute',
            display: 'block',
            top: '-1000px',
          }),
          $.datepicker._updateDatepicker(b),
          (f = $.datepicker._checkOffset(b, f, e)),
          b.dpDiv.css({
            position:
              $.datepicker._inDialog && $.blockUI
                ? 'static'
                : e
                ? 'fixed'
                : 'absolute',
            display: 'none',
            left: f.left + 'px',
            top: f.top + 'px',
          });
        if (!b.inline) {
          var g = $.datepicker._get(b, 'showAnim'),
            h = $.datepicker._get(b, 'duration'),
            i = function () {
              var a = b.dpDiv.find('iframe.ui-datepicker-cover');
              if (!!a.length) {
                var c = $.datepicker._getBorders(b.dpDiv);
                a.css({
                  left: -c[0],
                  top: -c[1],
                  width: b.dpDiv.outerWidth(),
                  height: b.dpDiv.outerHeight(),
                });
              }
            };
          b.dpDiv.zIndex($(a).zIndex() + 1),
            ($.datepicker._datepickerShowing = !0),
            $.effects && $.effects[g]
              ? b.dpDiv.show(g, $.datepicker._get(b, 'showOptions'), h, i)
              : b.dpDiv[g || 'show'](g ? h : null, i),
            (!g || !h) && i(),
            b.input.is(':visible') &&
              !b.input.is(':disabled') &&
              b.input.focus(),
            ($.datepicker._curInst = b);
        }
      }
    },
    _updateDatepicker: function (a) {
      var b = this;
      b.maxRows = 4;
      var c = $.datepicker._getBorders(a.dpDiv);
      (instActive = a), a.dpDiv.empty().append(this._generateHTML(a));
      var d = a.dpDiv.find('iframe.ui-datepicker-cover');
      !d.length ||
        d.css({
          left: -c[0],
          top: -c[1],
          width: a.dpDiv.outerWidth(),
          height: a.dpDiv.outerHeight(),
        }),
        a.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
      var e = this._getNumberOfMonths(a),
        f = e[1],
        g = 17;
      a.dpDiv
        .removeClass(
          'ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4'
        )
        .width(''),
        f > 1 &&
          a.dpDiv
            .addClass('ui-datepicker-multi-' + f)
            .css('width', g * f + 'em'),
        a.dpDiv[(e[0] != 1 || e[1] != 1 ? 'add' : 'remove') + 'Class'](
          'ui-datepicker-multi'
        ),
        a.dpDiv[(this._get(a, 'isRTL') ? 'add' : 'remove') + 'Class'](
          'ui-datepicker-rtl'
        ),
        a == $.datepicker._curInst &&
          $.datepicker._datepickerShowing &&
          a.input &&
          a.input.is(':visible') &&
          !a.input.is(':disabled') &&
          a.input[0] != document.activeElement &&
          a.input.focus();
      if (a.yearshtml) {
        var h = a.yearshtml;
        setTimeout(function () {
          h === a.yearshtml &&
            a.yearshtml &&
            a.dpDiv
              .find('select.ui-datepicker-year:first')
              .replaceWith(a.yearshtml),
            (h = a.yearshtml = null);
        }, 0);
      }
    },
    _getBorders: function (a) {
      var b = function (a) {
        return { thin: 1, medium: 2, thick: 3 }[a] || a;
      };
      return [
        parseFloat(b(a.css('border-left-width'))),
        parseFloat(b(a.css('border-top-width'))),
      ];
    },
    _checkOffset: function (a, b, c) {
      var d = a.dpDiv.outerWidth(),
        e = a.dpDiv.outerHeight(),
        f = a.input ? a.input.outerWidth() : 0,
        g = a.input ? a.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + $(document).scrollLeft(),
        i = document.documentElement.clientHeight + $(document).scrollTop();
      (b.left -= this._get(a, 'isRTL') ? d - f : 0),
        (b.left -=
          c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0),
        (b.top -=
          c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0),
        (b.left -= Math.min(
          b.left,
          b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0
        )),
        (b.top -= Math.min(
          b.top,
          b.top + e > i && i > e ? Math.abs(e + g) : 0
        ));
      return b;
    },
    _findPos: function (a) {
      var b = this._getInst(a),
        c = this._get(b, 'isRTL');
      while (
        a &&
        (a.type == 'hidden' || a.nodeType != 1 || $.expr.filters.hidden(a))
      )
        a = a[c ? 'previousSibling' : 'nextSibling'];
      var d = $(a).offset();
      return [d.left, d.top];
    },
    _hideDatepicker: function (a) {
      var b = this._curInst;
      if (
        !(!b || (a && b != $.data(a, PROP_NAME))) &&
        this._datepickerShowing
      ) {
        var c = this._get(b, 'showAnim'),
          d = this._get(b, 'duration'),
          e = this,
          f = function () {
            $.datepicker._tidyDialog(b), (e._curInst = null);
          };
        $.effects && $.effects[c]
          ? b.dpDiv.hide(c, $.datepicker._get(b, 'showOptions'), d, f)
          : b.dpDiv[
              c == 'slideDown' ? 'slideUp' : c == 'fadeIn' ? 'fadeOut' : 'hide'
            ](c ? d : null, f),
          c || f(),
          (this._datepickerShowing = !1);
        var g = this._get(b, 'onClose');
        g &&
          g.apply(b.input ? b.input[0] : null, [
            b.input ? b.input.val() : '',
            b,
          ]),
          (this._lastInput = null),
          this._inDialog &&
            (this._dialogInput.css({
              position: 'absolute',
              left: '0',
              top: '-100px',
            }),
            $.blockUI && ($.unblockUI(), $('body').append(this.dpDiv))),
          (this._inDialog = !1);
      }
    },
    _tidyDialog: function (a) {
      a.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
    },
    _checkExternalClick: function (a) {
      if (!!$.datepicker._curInst) {
        var b = $(a.target),
          c = $.datepicker._getInst(b[0]);
        ((b[0].id != $.datepicker._mainDivId &&
          b.parents('#' + $.datepicker._mainDivId).length == 0 &&
          !b.hasClass($.datepicker.markerClassName) &&
          !b.hasClass($.datepicker._triggerClass) &&
          $.datepicker._datepickerShowing &&
          (!$.datepicker._inDialog || !$.blockUI)) ||
          (b.hasClass($.datepicker.markerClassName) &&
            $.datepicker._curInst != c)) &&
          $.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function (a, b, c) {
      var d = $(a),
        e = this._getInst(d[0]);
      this._isDisabledDatepicker(d[0]) ||
        (this._adjustInstDate(
          e,
          b + (c == 'M' ? this._get(e, 'showCurrentAtPos') : 0),
          c
        ),
        this._updateDatepicker(e));
    },
    _gotoToday: function (a) {
      var b = $(a),
        c = this._getInst(b[0]);
      if (this._get(c, 'gotoCurrent') && c.currentDay)
        (c.selectedDay = c.currentDay),
          (c.drawMonth = c.selectedMonth = c.currentMonth),
          (c.drawYear = c.selectedYear = c.currentYear);
      else {
        var d = new Date();
        (c.selectedDay = d.getDate()),
          (c.drawMonth = c.selectedMonth = d.getMonth()),
          (c.drawYear = c.selectedYear = d.getFullYear());
      }
      this._notifyChange(c), this._adjustDate(b);
    },
    _selectMonthYear: function (a, b, c) {
      var d = $(a),
        e = this._getInst(d[0]);
      (e['selected' + (c == 'M' ? 'Month' : 'Year')] = e[
        'draw' + (c == 'M' ? 'Month' : 'Year')
      ] = parseInt(b.options[b.selectedIndex].value, 10)),
        this._notifyChange(e),
        this._adjustDate(d);
    },
    _selectDay: function (a, b, c, d) {
      var e = $(a);
      if (
        !$(d).hasClass(this._unselectableClass) &&
        !this._isDisabledDatepicker(e[0])
      ) {
        var f = this._getInst(e[0]);
        (f.selectedDay = f.currentDay = $('a', d).html()),
          (f.selectedMonth = f.currentMonth = b),
          (f.selectedYear = f.currentYear = c),
          this._selectDate(
            a,
            this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)
          );
      }
    },
    _clearDate: function (a) {
      var b = $(a),
        c = this._getInst(b[0]);
      this._selectDate(b, '');
    },
    _selectDate: function (a, b) {
      var c = $(a),
        d = this._getInst(c[0]);
      (b = b != null ? b : this._formatDate(d)),
        d.input && d.input.val(b),
        this._updateAlternate(d);
      var e = this._get(d, 'onSelect');
      e
        ? e.apply(d.input ? d.input[0] : null, [b, d])
        : d.input && d.input.trigger('change'),
        d.inline
          ? this._updateDatepicker(d)
          : (this._hideDatepicker(),
            (this._lastInput = d.input[0]),
            typeof d.input[0] != 'object' && d.input.focus(),
            (this._lastInput = null));
    },
    _updateAlternate: function (a) {
      var b = this._get(a, 'altField');
      if (b) {
        var c = this._get(a, 'altFormat') || this._get(a, 'dateFormat'),
          d = this._getDate(a),
          e = this.formatDate(c, d, this._getFormatConfig(a));
        $(b).each(function () {
          $(this).val(e);
        });
      }
    },
    noWeekends: function (a) {
      var b = a.getDay();
      return [b > 0 && b < 6, ''];
    },
    iso8601Week: function (a) {
      var b = new Date(a.getTime());
      b.setDate(b.getDate() + 4 - (b.getDay() || 7));
      var c = b.getTime();
      b.setMonth(0), b.setDate(1);
      return Math.floor(Math.round((c - b) / 864e5) / 7) + 1;
    },
    parseDate: function (a, b, c) {
      if (a == null || b == null) throw 'Invalid arguments';
      b = typeof b == 'object' ? b.toString() : b + '';
      if (b == '') return null;
      var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
      d =
        typeof d != 'string'
          ? d
          : (new Date().getFullYear() % 100) + parseInt(d, 10);
      var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
        f = (c ? c.dayNames : null) || this._defaults.dayNames,
        g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
        h = (c ? c.monthNames : null) || this._defaults.monthNames,
        i = -1,
        j = -1,
        k = -1,
        l = -1,
        m = !1,
        n = function (b) {
          var c = s + 1 < a.length && a.charAt(s + 1) == b;
          c && s++;
          return c;
        },
        o = function (a) {
          var c = n(a),
            d =
              a == '@'
                ? 14
                : a == '!'
                ? 20
                : a == 'y' && c
                ? 4
                : a == 'o'
                ? 3
                : 2,
            e = new RegExp('^\\d{1,' + d + '}'),
            f = b.substring(r).match(e);
          if (!f) throw 'Missing number at position ' + r;
          r += f[0].length;
          return parseInt(f[0], 10);
        },
        p = function (a, c, d) {
          var e = $.map(n(a) ? d : c, function (a, b) {
              return [[b, a]];
            }).sort(function (a, b) {
              return -(a[1].length - b[1].length);
            }),
            f = -1;
          $.each(e, function (a, c) {
            var d = c[1];
            if (b.substr(r, d.length).toLowerCase() == d.toLowerCase()) {
              (f = c[0]), (r += d.length);
              return !1;
            }
          });
          if (f != -1) return f + 1;
          throw 'Unknown name at position ' + r;
        },
        q = function () {
          if (b.charAt(r) != a.charAt(s))
            throw 'Unexpected literal at position ' + r;
          r++;
        },
        r = 0;
      for (var s = 0; s < a.length; s++)
        if (m) a.charAt(s) == "'" && !n("'") ? (m = !1) : q();
        else
          switch (a.charAt(s)) {
            case 'd':
              k = o('d');
              break;
            case 'D':
              p('D', e, f);
              break;
            case 'o':
              l = o('o');
              break;
            case 'm':
              j = o('m');
              break;
            case 'M':
              j = p('M', g, h);
              break;
            case 'y':
              i = o('y');
              break;
            case '@':
              var t = new Date(o('@'));
              (i = t.getFullYear()), (j = t.getMonth() + 1), (k = t.getDate());
              break;
            case '!':
              var t = new Date((o('!') - this._ticksTo1970) / 1e4);
              (i = t.getFullYear()), (j = t.getMonth() + 1), (k = t.getDate());
              break;
            case "'":
              n("'") ? q() : (m = !0);
              break;
            default:
              q();
          }
      if (r < b.length)
        throw 'Extra/unparsed characters found in date: ' + b.substring(r);
      i == -1
        ? (i = new Date().getFullYear())
        : i < 100 &&
          (i +=
            new Date().getFullYear() -
            (new Date().getFullYear() % 100) +
            (i <= d ? 0 : -100));
      if (l > -1) {
        (j = 1), (k = l);
        for (;;) {
          var u = this._getDaysInMonth(i, j - 1);
          if (k <= u) break;
          j++, (k -= u);
        }
      }
      var t = this._daylightSavingAdjust(new Date(i, j - 1, k));
      if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k)
        throw 'Invalid date';
      return t;
    },
    ATOM: 'yy-mm-dd',
    COOKIE: 'D, dd M yy',
    ISO_8601: 'yy-mm-dd',
    RFC_822: 'D, d M y',
    RFC_850: 'DD, dd-M-y',
    RFC_1036: 'D, d M y',
    RFC_1123: 'D, d M yy',
    RFC_2822: 'D, d M yy',
    RSS: 'D, d M y',
    TICKS: '!',
    TIMESTAMP: '@',
    W3C: 'yy-mm-dd',
    _ticksTo1970:
      (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
      24 *
      60 *
      60 *
      1e7,
    formatDate: function (a, b, c) {
      if (!b) return '';
      var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
        e = (c ? c.dayNames : null) || this._defaults.dayNames,
        f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
        g = (c ? c.monthNames : null) || this._defaults.monthNames,
        h = function (b) {
          var c = m + 1 < a.length && a.charAt(m + 1) == b;
          c && m++;
          return c;
        },
        i = function (a, b, c) {
          var d = '' + b;
          if (h(a)) while (d.length < c) d = '0' + d;
          return d;
        },
        j = function (a, b, c, d) {
          return h(a) ? d[b] : c[b];
        },
        k = '',
        l = !1;
      if (b)
        for (var m = 0; m < a.length; m++)
          if (l) a.charAt(m) == "'" && !h("'") ? (l = !1) : (k += a.charAt(m));
          else
            switch (a.charAt(m)) {
              case 'd':
                k += i('d', b.getDate(), 2);
                break;
              case 'D':
                k += j('D', b.getDay(), d, e);
                break;
              case 'o':
                k += i(
                  'o',
                  Math.round(
                    (new Date(
                      b.getFullYear(),
                      b.getMonth(),
                      b.getDate()
                    ).getTime() -
                      new Date(b.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                );
                break;
              case 'm':
                k += i('m', b.getMonth() + 1, 2);
                break;
              case 'M':
                k += j('M', b.getMonth(), f, g);
                break;
              case 'y':
                k += h('y')
                  ? b.getFullYear()
                  : (b.getYear() % 100 < 10 ? '0' : '') + (b.getYear() % 100);
                break;
              case '@':
                k += b.getTime();
                break;
              case '!':
                k += b.getTime() * 1e4 + this._ticksTo1970;
                break;
              case "'":
                h("'") ? (k += "'") : (l = !0);
                break;
              default:
                k += a.charAt(m);
            }
      return k;
    },
    _possibleChars: function (a) {
      var b = '',
        c = !1,
        d = function (b) {
          var c = e + 1 < a.length && a.charAt(e + 1) == b;
          c && e++;
          return c;
        };
      for (var e = 0; e < a.length; e++)
        if (c) a.charAt(e) == "'" && !d("'") ? (c = !1) : (b += a.charAt(e));
        else
          switch (a.charAt(e)) {
            case 'd':
            case 'm':
            case 'y':
            case '@':
              b += '0123456789';
              break;
            case 'D':
            case 'M':
              return null;
            case "'":
              d("'") ? (b += "'") : (c = !0);
              break;
            default:
              b += a.charAt(e);
          }
      return b;
    },
    _get: function (a, b) {
      return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b];
    },
    _setDateFromField: function (a, b) {
      if (a.input.val() != a.lastVal) {
        var c = this._get(a, 'dateFormat'),
          d = (a.lastVal = a.input ? a.input.val() : null),
          e,
          f;
        e = f = this._getDefaultDate(a);
        var g = this._getFormatConfig(a);
        try {
          e = this.parseDate(c, d, g) || f;
        } catch (h) {
          this.log(h), (d = b ? '' : d);
        }
        (a.selectedDay = e.getDate()),
          (a.drawMonth = a.selectedMonth = e.getMonth()),
          (a.drawYear = a.selectedYear = e.getFullYear()),
          (a.currentDay = d ? e.getDate() : 0),
          (a.currentMonth = d ? e.getMonth() : 0),
          (a.currentYear = d ? e.getFullYear() : 0),
          this._adjustInstDate(a);
      }
    },
    _getDefaultDate: function (a) {
      return this._restrictMinMax(
        a,
        this._determineDate(a, this._get(a, 'defaultDate'), new Date())
      );
    },
    _determineDate: function (a, b, c) {
      var d = function (a) {
          var b = new Date();
          b.setDate(b.getDate() + a);
          return b;
        },
        e = function (b) {
          try {
            return $.datepicker.parseDate(
              $.datepicker._get(a, 'dateFormat'),
              b,
              $.datepicker._getFormatConfig(a)
            );
          } catch (c) {}
          var d =
              (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) ||
              new Date(),
            e = d.getFullYear(),
            f = d.getMonth(),
            g = d.getDate(),
            h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            i = h.exec(b);
          while (i) {
            switch (i[2] || 'd') {
              case 'd':
              case 'D':
                g += parseInt(i[1], 10);
                break;
              case 'w':
              case 'W':
                g += parseInt(i[1], 10) * 7;
                break;
              case 'm':
              case 'M':
                (f += parseInt(i[1], 10)),
                  (g = Math.min(g, $.datepicker._getDaysInMonth(e, f)));
                break;
              case 'y':
              case 'Y':
                (e += parseInt(i[1], 10)),
                  (g = Math.min(g, $.datepicker._getDaysInMonth(e, f)));
            }
            i = h.exec(b);
          }
          return new Date(e, f, g);
        },
        f =
          b == null || b === ''
            ? c
            : typeof b == 'string'
            ? e(b)
            : typeof b == 'number'
            ? isNaN(b)
              ? c
              : d(b)
            : new Date(b.getTime());
      (f = f && f.toString() == 'Invalid Date' ? c : f),
        f &&
          (f.setHours(0),
          f.setMinutes(0),
          f.setSeconds(0),
          f.setMilliseconds(0));
      return this._daylightSavingAdjust(f);
    },
    _daylightSavingAdjust: function (a) {
      if (!a) return null;
      a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0);
      return a;
    },
    _setDate: function (a, b, c) {
      var d = !b,
        e = a.selectedMonth,
        f = a.selectedYear,
        g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
      (a.selectedDay = a.currentDay = g.getDate()),
        (a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth()),
        (a.drawYear = a.selectedYear = a.currentYear = g.getFullYear()),
        (e != a.selectedMonth || f != a.selectedYear) &&
          !c &&
          this._notifyChange(a),
        this._adjustInstDate(a),
        a.input && a.input.val(d ? '' : this._formatDate(a));
    },
    _getDate: function (a) {
      var b =
        !a.currentYear || (a.input && a.input.val() == '')
          ? null
          : this._daylightSavingAdjust(
              new Date(a.currentYear, a.currentMonth, a.currentDay)
            );
      return b;
    },
    _generateHTML: function (a) {
      var b = new Date();
      b = this._daylightSavingAdjust(
        new Date(b.getFullYear(), b.getMonth(), b.getDate())
      );
      var c = this._get(a, 'isRTL'),
        d = this._get(a, 'showButtonPanel'),
        e = this._get(a, 'hideIfNoPrevNext'),
        f = this._get(a, 'navigationAsDateFormat'),
        g = this._getNumberOfMonths(a),
        h = this._get(a, 'showCurrentAtPos'),
        i = this._get(a, 'stepMonths'),
        j = g[0] != 1 || g[1] != 1,
        k = this._daylightSavingAdjust(
          a.currentDay
            ? new Date(a.currentYear, a.currentMonth, a.currentDay)
            : new Date(9999, 9, 9)
        ),
        l = this._getMinMaxDate(a, 'min'),
        m = this._getMinMaxDate(a, 'max'),
        n = a.drawMonth - h,
        o = a.drawYear;
      n < 0 && ((n += 12), o--);
      if (m) {
        var p = this._daylightSavingAdjust(
          new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate())
        );
        p = l && p < l ? l : p;
        while (this._daylightSavingAdjust(new Date(o, n, 1)) > p)
          n--, n < 0 && ((n = 11), o--);
      }
      (a.drawMonth = n), (a.drawYear = o);
      var q = this._get(a, 'prevText');
      q = f
        ? this.formatDate(
            q,
            this._daylightSavingAdjust(new Date(o, n - i, 1)),
            this._getFormatConfig(a)
          )
        : q;
      var r = this._canAdjustMonth(a, -1, o, n)
          ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' +
            dpuuid +
            ".datepicker._adjustDate('#" +
            a.id +
            "', -" +
            i +
            ", 'M');\"" +
            ' title="' +
            q +
            '"><span class="ui-icon ui-icon-circle-triangle-' +
            (c ? 'e' : 'w') +
            '">' +
            q +
            '</span></a>'
          : e
          ? ''
          : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' +
            q +
            '"><span class="ui-icon ui-icon-circle-triangle-' +
            (c ? 'e' : 'w') +
            '">' +
            q +
            '</span></a>',
        s = this._get(a, 'nextText');
      s = f
        ? this.formatDate(
            s,
            this._daylightSavingAdjust(new Date(o, n + i, 1)),
            this._getFormatConfig(a)
          )
        : s;
      var t = this._canAdjustMonth(a, 1, o, n)
          ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' +
            dpuuid +
            ".datepicker._adjustDate('#" +
            a.id +
            "', +" +
            i +
            ", 'M');\"" +
            ' title="' +
            s +
            '"><span class="ui-icon ui-icon-circle-triangle-' +
            (c ? 'w' : 'e') +
            '">' +
            s +
            '</span></a>'
          : e
          ? ''
          : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' +
            s +
            '"><span class="ui-icon ui-icon-circle-triangle-' +
            (c ? 'w' : 'e') +
            '">' +
            s +
            '</span></a>',
        u = this._get(a, 'currentText'),
        v = this._get(a, 'gotoCurrent') && a.currentDay ? k : b;
      u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
      var w = a.inline
          ? ''
          : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' +
            dpuuid +
            '.datepicker._hideDatepicker();">' +
            this._get(a, 'closeText') +
            '</button>',
        x = d
          ? '<div class="ui-datepicker-buttonpane ui-widget-content">' +
            (c ? w : '') +
            (this._isInRange(a, v)
              ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' +
                dpuuid +
                ".datepicker._gotoToday('#" +
                a.id +
                '\');"' +
                '>' +
                u +
                '</button>'
              : '') +
            (c ? '' : w) +
            '</div>'
          : '',
        y = parseInt(this._get(a, 'firstDay'), 10);
      y = isNaN(y) ? 0 : y;
      var z = this._get(a, 'showWeek'),
        A = this._get(a, 'dayNames'),
        B = this._get(a, 'dayNamesShort'),
        C = this._get(a, 'dayNamesMin'),
        D = this._get(a, 'monthNames'),
        E = this._get(a, 'monthNamesShort'),
        F = this._get(a, 'beforeShowDay'),
        G = this._get(a, 'showOtherMonths'),
        H = this._get(a, 'selectOtherMonths'),
        I = this._get(a, 'calculateWeek') || this.iso8601Week,
        J = this._getDefaultDate(a),
        K = '';
      for (var L = 0; L < g[0]; L++) {
        var M = '';
        this.maxRows = 4;
        for (var N = 0; N < g[1]; N++) {
          var O = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)),
            P = ' ui-corner-all',
            Q = '';
          if (j) {
            Q += '<div class="ui-datepicker-group';
            if (g[1] > 1)
              switch (N) {
                case 0:
                  (Q += ' ui-datepicker-group-first'),
                    (P = ' ui-corner-' + (c ? 'right' : 'left'));
                  break;
                case g[1] - 1:
                  (Q += ' ui-datepicker-group-last'),
                    (P = ' ui-corner-' + (c ? 'left' : 'right'));
                  break;
                default:
                  (Q += ' ui-datepicker-group-middle'), (P = '');
              }
            Q += '">';
          }
          Q +=
            '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' +
            P +
            '">' +
            (/all|left/.test(P) && L == 0 ? (c ? t : r) : '') +
            (/all|right/.test(P) && L == 0 ? (c ? r : t) : '') +
            this._generateMonthYearHeader(a, n, o, l, m, L > 0 || N > 0, D, E) +
            '</div><table class="ui-datepicker-calendar"><thead>' +
            '<tr>';
          var R = z
            ? '<th class="ui-datepicker-week-col">' +
              this._get(a, 'weekHeader') +
              '</th>'
            : '';
          for (var S = 0; S < 7; S++) {
            var T = (S + y) % 7;
            R +=
              '<th' +
              ((S + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') +
              '>' +
              '<span title="' +
              A[T] +
              '">' +
              C[T] +
              '</span></th>';
          }
          Q += R + '</tr></thead><tbody>';
          var U = this._getDaysInMonth(o, n);
          o == a.selectedYear &&
            n == a.selectedMonth &&
            (a.selectedDay = Math.min(a.selectedDay, U));
          var V = (this._getFirstDayOfMonth(o, n) - y + 7) % 7,
            W = Math.ceil((V + U) / 7),
            X = j ? (this.maxRows > W ? this.maxRows : W) : W;
          this.maxRows = X;
          var Y = this._daylightSavingAdjust(new Date(o, n, 1 - V));
          for (var Z = 0; Z < X; Z++) {
            Q += '<tr>';
            var _ = z
              ? '<td class="ui-datepicker-week-col">' +
                this._get(a, 'calculateWeek')(Y) +
                '</td>'
              : '';
            for (var S = 0; S < 7; S++) {
              var ba = F ? F.apply(a.input ? a.input[0] : null, [Y]) : [!0, ''],
                bb = Y.getMonth() != n,
                bc = (bb && !H) || !ba[0] || (l && Y < l) || (m && Y > m);
              (_ +=
                '<td class="' +
                ((S + y + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                (bb ? ' ui-datepicker-other-month' : '') +
                ((Y.getTime() == O.getTime() &&
                  n == a.selectedMonth &&
                  a._keyEvent) ||
                (J.getTime() == Y.getTime() && J.getTime() == O.getTime())
                  ? ' ' + this._dayOverClass
                  : '') +
                (bc
                  ? ' ' + this._unselectableClass + ' ui-state-disabled'
                  : '') +
                (bb && !G
                  ? ''
                  : ' ' +
                    ba[1] +
                    (Y.getTime() == k.getTime()
                      ? ' ' + this._currentClass
                      : '') +
                    (Y.getTime() == b.getTime()
                      ? ' ui-datepicker-today'
                      : '')) +
                '"' +
                ((!bb || G) && ba[2] ? ' title="' + ba[2] + '"' : '') +
                (bc
                  ? ''
                  : ' onclick="DP_jQuery_' +
                    dpuuid +
                    ".datepicker._selectDay('#" +
                    a.id +
                    "'," +
                    Y.getMonth() +
                    ',' +
                    Y.getFullYear() +
                    ', this);return false;"') +
                '>' +
                (bb && !G
                  ? '&#xa0;'
                  : bc
                  ? '<span class="ui-state-default">' + Y.getDate() + '</span>'
                  : '<a class="ui-state-default' +
                    (Y.getTime() == b.getTime() ? ' ui-state-highlight' : '') +
                    (Y.getTime() == k.getTime() ? ' ui-state-active' : '') +
                    (bb ? ' ui-priority-secondary' : '') +
                    '" href="#">' +
                    Y.getDate() +
                    '</a>') +
                '</td>'),
                Y.setDate(Y.getDate() + 1),
                (Y = this._daylightSavingAdjust(Y));
            }
            Q += _ + '</tr>';
          }
          n++,
            n > 11 && ((n = 0), o++),
            (Q +=
              '</tbody></table>' +
              (j
                ? '</div>' +
                  (g[0] > 0 && N == g[1] - 1
                    ? '<div class="ui-datepicker-row-break"></div>'
                    : '')
                : '')),
            (M += Q);
        }
        K += M;
      }
      (K +=
        x +
        ($.browser.msie && parseInt($.browser.version, 10) < 7 && !a.inline
          ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>'
          : '')),
        (a._keyEvent = !1);
      return K;
    },
    _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
      var i = this._get(a, 'changeMonth'),
        j = this._get(a, 'changeYear'),
        k = this._get(a, 'showMonthAfterYear'),
        l = '<div class="ui-datepicker-title">',
        m = '';
      if (f || !i) m += '<span class="ui-datepicker-month">' + g[b] + '</span>';
      else {
        var n = d && d.getFullYear() == c,
          o = e && e.getFullYear() == c;
        m +=
          '<select class="ui-datepicker-month" onchange="DP_jQuery_' +
          dpuuid +
          ".datepicker._selectMonthYear('#" +
          a.id +
          "', this, 'M');\" " +
          '>';
        for (var p = 0; p < 12; p++)
          (!n || p >= d.getMonth()) &&
            (!o || p <= e.getMonth()) &&
            (m +=
              '<option value="' +
              p +
              '"' +
              (p == b ? ' selected="selected"' : '') +
              '>' +
              h[p] +
              '</option>');
        m += '</select>';
      }
      k || (l += m + (f || !i || !j ? '&#xa0;' : ''));
      if (!a.yearshtml) {
        a.yearshtml = '';
        if (f || !j) l += '<span class="ui-datepicker-year">' + c + '</span>';
        else {
          var q = this._get(a, 'yearRange').split(':'),
            r = new Date().getFullYear(),
            s = function (a) {
              var b = a.match(/c[+-].*/)
                ? c + parseInt(a.substring(1), 10)
                : a.match(/[+-].*/)
                ? r + parseInt(a, 10)
                : parseInt(a, 10);
              return isNaN(b) ? r : b;
            },
            t = s(q[0]),
            u = Math.max(t, s(q[1] || ''));
          (t = d ? Math.max(t, d.getFullYear()) : t),
            (u = e ? Math.min(u, e.getFullYear()) : u),
            (a.yearshtml +=
              '<select class="ui-datepicker-year" onchange="DP_jQuery_' +
              dpuuid +
              ".datepicker._selectMonthYear('#" +
              a.id +
              "', this, 'Y');\" " +
              '>');
          for (; t <= u; t++)
            a.yearshtml +=
              '<option value="' +
              t +
              '"' +
              (t == c ? ' selected="selected"' : '') +
              '>' +
              t +
              '</option>';
          (a.yearshtml += '</select>'),
            (l += a.yearshtml),
            (a.yearshtml = null);
        }
      }
      (l += this._get(a, 'yearSuffix')),
        k && (l += (f || !i || !j ? '&#xa0;' : '') + m),
        (l += '</div>');
      return l;
    },
    _adjustInstDate: function (a, b, c) {
      var d = a.drawYear + (c == 'Y' ? b : 0),
        e = a.drawMonth + (c == 'M' ? b : 0),
        f =
          Math.min(a.selectedDay, this._getDaysInMonth(d, e)) +
          (c == 'D' ? b : 0),
        g = this._restrictMinMax(
          a,
          this._daylightSavingAdjust(new Date(d, e, f))
        );
      (a.selectedDay = g.getDate()),
        (a.drawMonth = a.selectedMonth = g.getMonth()),
        (a.drawYear = a.selectedYear = g.getFullYear()),
        (c == 'M' || c == 'Y') && this._notifyChange(a);
    },
    _restrictMinMax: function (a, b) {
      var c = this._getMinMaxDate(a, 'min'),
        d = this._getMinMaxDate(a, 'max'),
        e = c && b < c ? c : b;
      e = d && e > d ? d : e;
      return e;
    },
    _notifyChange: function (a) {
      var b = this._get(a, 'onChangeMonthYear');
      b &&
        b.apply(a.input ? a.input[0] : null, [
          a.selectedYear,
          a.selectedMonth + 1,
          a,
        ]);
    },
    _getNumberOfMonths: function (a) {
      var b = this._get(a, 'numberOfMonths');
      return b == null ? [1, 1] : typeof b == 'number' ? [1, b] : b;
    },
    _getMinMaxDate: function (a, b) {
      return this._determineDate(a, this._get(a, b + 'Date'), null);
    },
    _getDaysInMonth: function (a, b) {
      return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
    },
    _getFirstDayOfMonth: function (a, b) {
      return new Date(a, b, 1).getDay();
    },
    _canAdjustMonth: function (a, b, c, d) {
      var e = this._getNumberOfMonths(a),
        f = this._daylightSavingAdjust(
          new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1)
        );
      b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth()));
      return this._isInRange(a, f);
    },
    _isInRange: function (a, b) {
      var c = this._getMinMaxDate(a, 'min'),
        d = this._getMinMaxDate(a, 'max');
      return (
        (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime())
      );
    },
    _getFormatConfig: function (a) {
      var b = this._get(a, 'shortYearCutoff');
      b =
        typeof b != 'string'
          ? b
          : (new Date().getFullYear() % 100) + parseInt(b, 10);
      return {
        shortYearCutoff: b,
        dayNamesShort: this._get(a, 'dayNamesShort'),
        dayNames: this._get(a, 'dayNames'),
        monthNamesShort: this._get(a, 'monthNamesShort'),
        monthNames: this._get(a, 'monthNames'),
      };
    },
    _formatDate: function (a, b, c, d) {
      b ||
        ((a.currentDay = a.selectedDay),
        (a.currentMonth = a.selectedMonth),
        (a.currentYear = a.selectedYear));
      var e = b
        ? typeof b == 'object'
          ? b
          : this._daylightSavingAdjust(new Date(d, c, b))
        : this._daylightSavingAdjust(
            new Date(a.currentYear, a.currentMonth, a.currentDay)
          );
      return this.formatDate(
        this._get(a, 'dateFormat'),
        e,
        this._getFormatConfig(a)
      );
    },
  }),
    ($.fn.datepicker = function (a) {
      if (!this.length) return this;
      $.datepicker.initialized ||
        ($(document)
          .mousedown($.datepicker._checkExternalClick)
          .find('body')
          .append($.datepicker.dpDiv),
        ($.datepicker.initialized = !0));
      var b = Array.prototype.slice.call(arguments, 1);
      if (
        typeof a == 'string' &&
        (a == 'isDisabled' || a == 'getDate' || a == 'widget')
      )
        return $.datepicker['_' + a + 'Datepicker'].apply(
          $.datepicker,
          [this[0]].concat(b)
        );
      if (
        a == 'option' &&
        arguments.length == 2 &&
        typeof arguments[1] == 'string'
      )
        return $.datepicker['_' + a + 'Datepicker'].apply(
          $.datepicker,
          [this[0]].concat(b)
        );
      return this.each(function () {
        typeof a == 'string'
          ? $.datepicker['_' + a + 'Datepicker'].apply(
              $.datepicker,
              [this].concat(b)
            )
          : $.datepicker._attachDatepicker(this, a);
      });
    }),
    ($.datepicker = new Datepicker()),
    ($.datepicker.initialized = !1),
    ($.datepicker.uuid = new Date().getTime()),
    ($.datepicker.version = '1.8.17'),
    (window['DP_jQuery_' + dpuuid] = $);
})(jQuery);
function dialogv2() {
  this.hashDialog = [];
  this.open = function (title, w, h) {
    if (title in this.hashDialog) {
      this.hashDialog[title].dialog('open');
      return this.hashDialog[title];
    }
    var wrapper = $('<div style="position:fixed"></div>');
    var div = $(
      '<div style="display:none" name="dialogv2" title="' + title + '"></div>'
    );
    wrapper.append(div);
    $(document.body).prepend(wrapper);
    div.dialog({
      dialogClass: 'flora',
      bgiframe: true,
      modal: true,
      autoOpen: false,
      width: w,
      height: h,
    });
    $('.flora.ui-dialog').css({ position: 'fixed' });
    div.dialog('open');
    this.hashDialog[title] = div;
    return div;
  };
}
var dialogmaster = new dialogv2();
jQuery(function ($) {
  $.datepicker.regional['ar'] = {
    closeText: 'إغلاق',
    prevText: '&#x3c;السابق',
    nextText: 'التالي&#x3e;',
    currentText: 'اليوم',
    monthNames: [
      'كانون الثاني',
      'شباط',
      'آذار',
      'نيسان',
      'مايو',
      'حزيران',
      'تموز',
      'آب',
      'أيلول',
      'تشرين الأول',
      'تشرين الثاني',
      'كانون الأول',
    ],
    monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ],
    dayNames: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    dayNamesShort: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    dayNamesMin: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    weekHeader: 'أسبوع',
    dateFormat: 'dd/mm/yy',
    firstDay: 6,
    isRTL: true,
    showMonthAfterYear: false,
    yearSuffix: '',
  };
});
jQuery(function ($) {
  $.datepicker.regional['th'] = {
    closeText: 'ปิด',
    prevText: '&laquo;&nbsp;ย้อน',
    nextText: 'ถัดไป&nbsp;&raquo;',
    currentText: 'วันนี้',
    monthNames: [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฏาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
    ],
    monthNamesShort: [
      'ม.ค.',
      'ก.พ.',
      'มี.ค.',
      'เม.ย.',
      'พ.ค.',
      'มิ.ย.',
      'ก.ค.',
      'ส.ค.',
      'ก.ย.',
      'ต.ค.',
      'พ.ย.',
      'ธ.ค.',
    ],
    dayNames: [
      'อาทิตย์',
      'จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์',
    ],
    dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
    dayNamesMin: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
    weekHeader: 'Wk',
    dateFormat: 'dd/mm/yy',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
  };
});
jQuery(function ($) {
  $.datepicker.regional['de'] = {
    closeText: 'schließen',
    prevText: '&#x3c;zurück',
    nextText: 'Vor&#x3e;',
    currentText: 'heute',
    monthNames: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mär',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dez',
    ],
    dayNames: [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
    ],
    dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
  };
});
jQuery(function ($) {
  $.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '&#x3c;Ant',
    nextText: 'Sig&#x3e;',
    currentText: 'Hoy',
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Mi&eacute;rcoles',
      'Jueves',
      'Viernes',
      'S&aacute;bado',
    ],
    dayNamesShort: [
      'Dom',
      'Lun',
      'Mar',
      'Mi&eacute;',
      'Juv',
      'Vie',
      'S&aacute;b',
    ],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;'],
    dateFormat: 'dd/mm/yy',
    firstDay: 0,
    isRTL: false,
  };
});
jQuery(function ($) {
  $.datepicker.regional['fr'] = {
    closeText: 'Fermer',
    prevText: '&#x3c;Préc',
    nextText: 'Suiv&#x3e;',
    currentText: 'Courant',
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    monthNamesShort: [
      'Jan',
      'Fév',
      'Mar',
      'Avr',
      'Mai',
      'Jun',
      'Jul',
      'Aoû',
      'Sep',
      'Oct',
      'Nov',
      'Déc',
    ],
    dayNames: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
    dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
  };
});
jQuery(function ($) {
  $.datepicker.regional['it'] = {
    closeText: 'Chiudi',
    prevText: '&#x3c;Prec',
    nextText: 'Succ&#x3e;',
    currentText: 'Oggi',
    monthNames: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
    ],
    monthNamesShort: [
      'Gen',
      'Feb',
      'Mar',
      'Apr',
      'Mag',
      'Giu',
      'Lug',
      'Ago',
      'Set',
      'Ott',
      'Nov',
      'Dic',
    ],
    dayNames: [
      'Domenica',
      'Luned&#236',
      'Marted&#236',
      'Mercoled&#236',
      'Gioved&#236',
      'Venerd&#236',
      'Sabato',
    ],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gio', 'Ve', 'Sa'],
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
  };
});
jQuery(function ($) {
  $.datepicker.regional['ja'] = {
    closeText: '閉じる',
    prevText: '&#x3c;前',
    nextText: '次&#x3e;',
    currentText: '今日',
    monthNames: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ],
    monthNamesShort: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ],
    dayNames: [
      '日曜日',
      '月曜日',
      '火曜日',
      '水曜日',
      '木曜日',
      '金曜日',
      '土曜日',
    ],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
    dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
    dateFormat: 'yy/mm/dd',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
  };
});
jQuery(function ($) {
  $.datepicker.regional['pt'] = {
    closeText: 'Fechar',
    prevText: '&#x3c;Anterior',
    nextText: 'Pr&oacute;ximo&#x3e;',
    currentText: 'Hoje',
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Mar&ccedil;o',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    dayNames: [
      'Domingo',
      'Segunda-feira',
      'Ter&ccedil;a-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sabado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dateFormat: 'dd/mm/yy',
    firstDay: 0,
    isRTL: false,
  };
});
jQuery(function ($) {
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '&#x3c;Пред',
    nextText: 'След&#x3e;',
    currentText: 'Сегодня',
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    monthNamesShort: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    dayNames: [
      'воскресенье',
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота',
    ],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
  };
});
jQuery(function ($) {
  $.datepicker.regional['zh-cn'] = {
    closeText: '关闭',
    prevText: '&#x3c;上月',
    nextText: '下月&#x3e;',
    currentText: '今天',
    monthNames: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    monthNamesShort: [
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '八',
      '九',
      '十',
      '十一',
      '十二',
    ],
    dayNames: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ],
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    dateFormat: 'yy-mm-dd',
    firstDay: 1,
    isRTL: false,
  };
});
jQuery(function ($) {
  $.datepicker.regional['zh-tw'] = {
    closeText: '關閉',
    prevText: '&#x3c;上月',
    nextText: '下月&#x3e;',
    currentText: '今天',
    monthNames: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    monthNamesShort: [
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '八',
      '九',
      '十',
      '十一',
      '十二',
    ],
    dayNames: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ],
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    dateFormat: 'yy/mm/dd',
    firstDay: 1,
    isRTL: false,
  };
});
jQuery(function ($) {
  $.datepicker.regional['en'] = {
    closeText: 'Close',
    prevText: 'Prev',
    nextText: 'Next',
    currentText: 'Today',
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    weekHeader: 'Wk',
    dateFormat: 'mm/dd/yy',
    firstDay: 7,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
  };
});
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      -(
        a *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p)
      ) + b
    );
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
      c +
      b
    );
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (0.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    if (t < 1)
      return (
        -0.5 *
          (a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
        b
      );
    return (
      a *
        Math.pow(2, -10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
        0.5 +
      c +
      b
    );
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1)
      return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2)
      return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
    return (
      jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    );
  },
});
function nova_utility() {
  var me = this;
  me.imgblank =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
  me.__construct = function () {
    me.isIE = me.isIE_func();
    me.isWebkit = me.isWebfit_func();
  };
  me.isWebfit_func = function () {
    var ua = navigator ? navigator.userAgent : '';
    if (/AppleWebKit/.test(ua)) {
      return true;
    }
    return false;
  };
  me.hash_get = function () {
    var curLoc = top.document.location.href;
    var tmp = curLoc.split('#');
    if (tmp.length <= 1) return {};
    alert('got : ' + curLoc);
    tmp = tmp[1];
    tmp = tmp.split('&');
    var obj = {};
    for (var i = 0; i < tmp.length; i++) {
      var line = tmp[i].split('=');
      obj[line[0]] = decodeURIComponent(line[1]);
    }
    return obj;
  };
  me.hash_set = function (obj) {
    var arr = [];
    for (var i in obj) {
      arr.push(i + '=' + encodeURIComponent(obj[i]));
    }
    if (me.isWebkit) {
      top.window.history.pushState(
        arr.join('&'),
        'Title' + arr.join('&'),
        '#' + arr.join('&')
      );
    } else {
      top.document.location.hash = '#' + arr.join('&');
    }
  };
  me.getCookie = function (c_name) {
    var i,
      x,
      y,
      arr = document.cookie.split(';');
    for (i = 0; i < arr.length; i++) {
      x = arr[i].substr(0, arr[i].indexOf('='));
      y = arr[i].substr(arr[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, '');
      if (x == c_name) {
        return decodeURIComponent(y);
      }
    }
    return false;
  };
  me.setCookie = function (c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value =
      encodeURIComponent(value) +
      (exdays == null ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = c_name + '=' + c_value;
  };
  me.setCookie_ie = function (c_name, value, exdays) {};
  me.callback_mintime = function (func, startedAt, minTime) {
    var callback_mintime = function (func, startedAt, minTime) {
      this.startedAt = startedAt;
      this.minTime = minTime;
      this.func = func;
      this.run = function () {
        var elapsed = new Date() - this.startedAt;
        var remaining = this.minTime - elapsed;
        if (remaining < 0) {
          this.func();
        } else {
          setTimeout(this.func, remaining);
        }
      };
    };
    var obj = new callback_mintime(func, startedAt, minTime);
    return obj;
  };
  me.getveryhumandate = function (d) {
    if (!me.validyyyymmdd(d)) return '';
    var format = '#shortdow# #dom#, #monthname# #year#';
    var ln = $('#general_ln').val();
    if (!(ln in $.datepicker.regional)) {
      ln = 'en';
    }
    var dayNamesShort = $.datepicker.regional[ln].dayNamesShort;
    var monthNames = $.datepicker.regional[ln].monthNames;
    var dd = me.validyyyymmdd(d, true);
    var df = format;
    df = df.replace('#shortdow#', dayNamesShort[dd.getDay()]);
    df = df.replace('#dom#', dd.getDate());
    df = df.replace('#monthname#', monthNames[dd.getMonth()]);
    df = df.replace('#year#', dd.getFullYear());
    return df;
  };
  me.validyyyymmdd = function (d, returndate) {
    var r = /^(\d{4})-(\d{2})-(\d{2})$/;
    if (!r.test(d)) return false;
    var e = new Date(
      parseFloat(RegExp.$1),
      parseFloat(RegExp.$2) - 1,
      parseFloat(RegExp.$3)
    );
    if (e.getFullYear() < new Date().getFullYear()) return false;
    if (Boolean(returndate)) return e;
    return true;
  };
  me.toYYYYMMDD = function (d) {
    var yyyy = d.getFullYear();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    mm = mm < 10 ? '0' + mm : mm;
    dd = dd < 10 ? '0' + dd : dd;
    return yyyy + '-' + mm + '-' + dd;
  };
  me.getObjQuery = function () {
    var obj = {};
    if (location.search == '') return obj;
    var ls = location.search;
    ls = ls.replace(/^\?/, '');
    var arr_ls = ls.split('&');
    var obj_ls = {};
    for (var i = 0; i < arr_ls.length; i++) {
      var tmp = arr_ls[i].split('=');
      obj_ls[tmp[0]] = decodeURIComponent(tmp[1]);
    }
    return obj_ls;
  };
  me.applyObj2Query = function (obj_ls) {
    arr_ls = [];
    for (var item in obj_ls) {
      arr_ls.push(item + '=' + escape(obj_ls[item]));
    }
    var query = arr_ls.join('&');
    location.search = '?' + query;
  };
  me.swapDepths = function (l1, l2) {
    var pivot = l1.css('z-index');
    l1.css('z-index', l2.css('z-index'));
    l2.css('z-index', pivot);
  };
  me.shakeitem = function (what) {
    var box = $(what);
    box
      .stop()
      .css({ position: 'relative', left: '0px' })
      .animate({ left: '7px' }, { duration: 100 })
      .animate({ left: '-14px' }, { duration: 100 })
      .animate({ left: '14px' }, { duration: 100 })
      .animate({ left: '-7px' }, { duration: 100 })
      .animate({ left: '0px' }, { duration: 100 });
  };
  me.isIE_func = function () {
    var isIE = false;
    var div = document.createElement('div');
    div.innerHTML = '<!--[if IE]><i></i><![endif]-->';
    if (div.getElementsByTagName('i').length == 1) isIE = true;
    return isIE;
  };
  me.checkmail = function (m) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      m
    );
  };
  me.isImageLoaded = function (elem) {
    var imgwidth = 1;
    try {
      imgwidth = parseFloat($(elem).width());
    } catch (e) {}
    if (elem.complete && imgwidth > 1) {
      return true;
    } else {
      return false;
    }
  };
  me.windowStop = function () {
    if (window.stop !== undefined) {
      window.stop();
    } else if (document.execCommand !== undefined) {
      document.execCommand('Stop', false);
    }
  };
  me.loadjs = function (url) {
    (function () {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.src = url;
      ga.async = true;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })();
  };
  me.getScrollTop = function () {
    if (typeof pageYOffset != 'undefined') {
      return pageYOffset;
    } else {
      var B = document.body;
      var D = document.documentElement;
      D = D.clientHeight ? D : B;
      return D.scrollTop;
    }
  };
  me.getScrollLeft = function () {
    if (typeof pageXOffset != 'undefined') {
      return pageXOffset;
    } else {
      var B = document.body;
      var D = document.documentElement;
      D = D.clientWidth ? D : B;
      return D.scrollLeft;
    }
  };
  me.getStretchedDim = function (
    imageDimension,
    canvasDimension,
    tolerance,
    forceSimilarRatio
  ) {
    var imgRatio = imageDimension.newWidth / imageDimension.newHeight;
    var boundaryRatio = canvasDimension.width / canvasDimension.height;
    var imgRatio_floored = Math.floor(imgRatio);
    var boundaryRatio_floored = Math.floor(boundaryRatio);
    var goForHeight = canvasDimension.height;
    var goForWidth = canvasDimension.width;
    if (imgRatio >= 1 && boundaryRatio < 1 && forceSimilarRatio == true) {
      return imageDimension;
    }
    if (imgRatio <= 1 && boundaryRatio > 1 && forceSimilarRatio == true) {
      return imageDimension;
    }
    var ratioDiff = Math.abs(1 - imgRatio / boundaryRatio);
    ratioDiff = Math.round(ratioDiff * 100);
    if (ratioDiff < tolerance) {
      if (imageDimension.newHeight < goForHeight) {
        var ratio = goForHeight / imageDimension.newHeight;
        imageDimension.newHeight *= ratio;
        imageDimension.newWidth *= ratio;
      }
      if (imageDimension.newWidth < goForWidth) {
        var ratio = goForWidth / imageDimension.newWidth;
        imageDimension.newHeight *= ratio;
        imageDimension.newWidth *= ratio;
      }
    }
    imageDimension.newWidth = Math.ceil(imageDimension.newWidth);
    imageDimension.newHeight = Math.ceil(imageDimension.newHeight);
    return imageDimension;
  };
  me.calcImageSize = function ($width, $height, maxW, maxH, maxzoom) {
    maxzoom = maxzoom || 10;
    maxzoom_width = $width * maxzoom;
    maxzoom_height = $height * maxzoom;
    maxW = maxW > maxzoom_width ? maxzoom_width : maxW;
    maxH = maxH > maxzoom_height ? maxzoom_height : maxH;
    me.maxHeight = maxH;
    me.maxWidth = maxW;
    var $newSize = me.calcWidth($width, $height);
    if (me.maxHeight > 0 && $newSize['newHeight'] > me.maxHeight) {
      $newSize = me.calcHeight($newSize['newWidth'], $newSize['newHeight']);
    }
    $newSize = me.calcHeight($width, $height);
    if (me.maxWidth > 0 && $newSize['newWidth'] > me.maxWidth) {
      $newSize = me.calcWidth($newSize['newWidth'], $newSize['newHeight']);
    }
    return $newSize;
  };
  me.calcWidth = function ($width, $height) {
    var $newWp = (100 * me.maxWidth) / $width;
    $newHeight = ($height * $newWp) / 100;
    return {
      newWidth: Math.round(me.maxWidth),
      newHeight: Math.round($newHeight),
    };
  };
  me.calcHeight = function ($width, $height) {
    var $newHp = (100 * me.maxHeight) / $height;
    var $newWidth = ($width * $newHp) / 100;
    return {
      newWidth: Math.round($newWidth),
      newHeight: Math.round(me.maxHeight),
    };
  };
  me.getGalleriaThumbHref = function (idimg, width, height) {
    return '/_php/sfg-' + idimg + '-' + width + '-' + height + '.jpg';
  };
  me.getGalleriaThumbMinHref = function (idimg, width, height) {
    return '/_php/sfgmin-' + idimg + '-' + width + '-' + height + '.jpg';
  };
  me.setClock = function (data) {
    var func = function () {
      $.ajax({
        url:
          '/index.php/_php/nova_utils.php?what=gethour&format=' +
          escape(data.format) +
          '&rand=' +
          Math.random(),
        dataType: 'json',
        success: function (dat) {
          data.elem.text(dat);
        },
      });
    };
    func();
  };
  me.getWeather = function (callback) {
    var url =
      '/index.php/_php/nova_utils.php?what=weather' + '&rand=' + Math.random();
    $.ajax({
      url: url,
      dataType: 'json',
      success: function (dat) {
        if (Object.prototype.toString.call(dat) == '[object Object]') {
          callback(dat);
        } else {
          callback({ temp_f: 0, temp_c: 0, weather: 'sunny' });
        }
      },
    });
  };
  me.getTemperature = function (data, callback) {
    var defaultdata = { mode: 'C', decimals: 1 };
    var newdata = defaultdata;
    for (var a in data) {
      newdata[a] = data[a];
    }
    data = newdata;
    var url = '/index.php/_php/nova_utils.php?what=temperature';
    $.ajax({
      url: url,
      dataType: 'json',
      success: function (dat) {
        if (Object.prototype.toString.call(dat) == '[object Object]') {
          var tmp = '';
          if (data.mode == 'C') {
            tmp = dat.tempC;
          } else {
            tmp = dat.tempF;
          }
          if (data.decimals > 0) {
            tmp += '.';
            for (var i = 0; i < data.decimals; i++) {
              tmp += '0';
            }
          }
          callback(tmp);
        } else {
          callback('na');
        }
      },
    });
  };
  me.pulsarPreload = function () {
    var usecdn = $('#usecdn').length > 0 ? $('#usecdn').val() : '';
    var arrimg = arguments;
    for (var i = 0; i < arrimg.length; i++) {
      arrimg[i] = usecdn + arrimg[i];
    }
    new novautils_pulsarPreload(arrimg);
  };
  me.__construct();
}
var nova_utils = new nova_utility();
$(function () {
  pnl.f();
});
if ('_pulsarDocLoad' in window) {
  pnla.f();
} else {
  $(window).load(function () {
    pnla.f();
  });
}
$$(function () {
  var cl = 'input.autoempty,textarea.autoempty';
  $(cl).each(function () {
    $(this).data('defaultval', $(this).val());
  });
  $(cl).live('focus', function () {
    var o = $(this);
    if (o.val() == o.data('defaultval')) o.val('');
  });
  $(cl).live('blur', function () {
    var o = $(this);
    if (o.val() == '') o.val(o.data('defaultval'));
  });
});
function novautils_pulsarPreload(list) {
  this.list = list;
  this.current = -1;
  this.cache = [];
  var meAsObj = this;
  var l = list.length;
  meAsObj.loadNext = function () {
    meAsObj.current++;
    var gg = new Image();
    gg.src = meAsObj.list[meAsObj.current];
    meAsObj.cache.push(gg);
  };
  meAsObj.checker = function () {
    if (meAsObj.cache.length == 0) {
      meAsObj.loadNext();
      return;
    }
    if (meAsObj.cache.length == meAsObj.list.length) {
      window.clearInterval(meAsObj.interval);
      return;
    }
    if (meAsObj.cache[meAsObj.current].complete) {
      meAsObj.loadNext();
      return;
    }
  };
  meAsObj.interval = window.setInterval(meAsObj.checker, 160);
}
(function ($) {
  $.toJSON = function (o) {
    if (typeof JSON == 'object' && JSON.stringify) return JSON.stringify(o);
    var type = typeof o;
    if (o === null) return 'null';
    if (type == 'undefined') return undefined;
    if (type == 'number' || type == 'boolean') return o + '';
    if (type == 'string') return $.quoteString(o);
    if (type == 'object') {
      if (typeof o.toJSON == 'function') return $.toJSON(o.toJSON());
      if (o.constructor === Date) {
        var month = o.getUTCMonth() + 1;
        if (month < 10) month = '0' + month;
        var day = o.getUTCDate();
        if (day < 10) day = '0' + day;
        var year = o.getUTCFullYear();
        var hours = o.getUTCHours();
        if (hours < 10) hours = '0' + hours;
        var minutes = o.getUTCMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        var seconds = o.getUTCSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        var milli = o.getUTCMilliseconds();
        if (milli < 100) milli = '0' + milli;
        if (milli < 10) milli = '0' + milli;
        return (
          '"' +
          year +
          '-' +
          month +
          '-' +
          day +
          'T' +
          hours +
          ':' +
          minutes +
          ':' +
          seconds +
          '.' +
          milli +
          'Z"'
        );
      }
      if (o.constructor === Array) {
        var ret = [];
        for (var i = 0; i < o.length; i++) ret.push($.toJSON(o[i]) || 'null');
        return '[' + ret.join(',') + ']';
      }
      var pairs = [];
      for (var k in o) {
        var name;
        var type = typeof k;
        if (type == 'number') name = '"' + k + '"';
        else if (type == 'string') name = $.quoteString(k);
        else continue;
        if (typeof o[k] == 'function') continue;
        var val = $.toJSON(o[k]);
        pairs.push(name + ':' + val);
      }
      return '{' + pairs.join(', ') + '}';
    }
  };
  $.evalJSON = function (src) {
    if (typeof JSON == 'object' && JSON.parse) return JSON.parse(src);
    return eval('(' + src + ')');
  };
  $.secureEvalJSON = function (src) {
    if (typeof JSON == 'object' && JSON.parse) return JSON.parse(src);
    var filtered = src;
    filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
    filtered = filtered.replace(
      /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      ']'
    );
    filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    if (/^[\],:{}\s]*$/.test(filtered)) return eval('(' + src + ')');
    else throw new SyntaxError('Error parsing JSON, source is not valid.');
  };
  $.quoteString = function (string) {
    if (string.match(_escapeable)) {
      return (
        '"' +
        string.replace(_escapeable, function (a) {
          var c = _meta[a];
          if (typeof c === 'string') return c;
          c = a.charCodeAt();
          return (
            '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
          );
        }) +
        '"'
      );
    }
    return '"' + string + '"';
  };
  var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
  var _meta = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\',
  };
})(jQuery);
$$(function () {
  var func = function () {
    if (!('_gat' in window)) {
      return;
    }
    clearInterval(window['ecommerce_customlinks']);
    if ($('#analytics_ecommerce').length == 0) return;
    if ($('#analytics_ecommerce').val() == '') return;
    var ggacc = $('#analytics_ecommerce').val();
    var alist = $('a');
    for (var i = 0; i < alist.length; i++) {
      var href = alist.eq(i).attr('href');
      if (!href) continue;
      if (!/gc\.synxis\.com/.test(href)) continue;
      href += '&ggacc=' + ggacc;
      href = _gat._getTrackerByName()._getLinkerUrl(href);
      alist.eq(i).attr('href', href);
    }
  };
  window['ecommerce_customlinks'] = setInterval(func, 100);
});
var novarefhidden = [];
$(function () {
  var list = $('[novatype]');
  for (var i = 0; i < list.length; i++) {
    var elem = list.eq(i);
    var novatype = elem.attr('novatype');
    if (novatype != 'txt' && novatype != 'multi') continue;
    if ($.trim(elem.text()) == '') {
      if (novatype == 'multi') {
        if ($.trim(elem.parent().text()) == '') {
          novarefhidden.push(elem.parent());
        }
      } else {
        novarefhidden.push(elem);
      }
    }
  }
  for (var i = 0; i < novarefhidden.length; i++) {
    novarefhidden[i].hide();
  }
});
function fadeInAfterLoad(opt) {
  this.element = opt.element;
  this.imagecheck = opt.imagecheck;
  this.animate = opt.animate;
  this.callback = 'callback' in opt ? opt.callback : function () {};
  this.delay = 'delay' in opt.animate ? opt.animate.delay : 0;
  var meO = this;
  meO.timer = 0;
  this.element.css({ opacity: 0, visibility: 'visible' });
  this.fadeMeIn = function () {
    meO.element
      .delay(meO.delay)
      .animate(
        { opacity: 1 },
        meO.animate.duration,
        meO.animate.easing,
        meO.callback
      );
  };
  this.imagecheck = function () {
    var allLoaded = true;
    var l = meO.imagecheck.length;
    for (var i = 0; i < l; i++) {
      if (!meO.imagecheck[i].complete) {
        allLoaded = false;
        break;
      }
    }
    if (allLoaded) {
      window.clearInterval(meO.timer);
      meO.fadeMeIn();
    }
  };
  meO.timer = window.setInterval(meO.imagecheck, 100);
}
function asrc_sequenceload(imglist, callback_firstloaded, callback_allloaded) {
  var me = this;
  me.callback_firstloaded = callback_firstloaded || function () {};
  me.callback_allloaded = callback_allloaded || function () {};
  me.imglist = imglist;
  me.imgcount = imglist.length;
  if (me.imgcount == 1) {
    me.imglist.load(function () {
      me.callback_firstloaded();
      me.callback_allloaded();
    });
    me.imglist.attr('src', me.imglist.attr('asrc'));
    return;
  }
  me.cursor = -1;
  me.loadNext = function () {
    me.cursor++;
    if (me.cursor > me.imgcount - 1) {
      me.callback_allloaded();
      return;
    }
    var img = me.imglist.eq(me.cursor);
    img.load(function () {
      if (me.cursor == 0) me.callback_firstloaded();
      me.loadNext();
    });
    img.attr('src', img.attr('asrc'));
  };
  me.loadNext();
}
function novahtmlslider(container, options, optionsIE) {
  var me = this;
  me.container = container;
  if (me.container.length == 0) return;
  me.sliderZindex = 10;
  var defaultOptions = {
    timer: 8000,
    novaslider_customhtml_mouseover_stopslide: true,
    first_animation: function () {
      oldlayer.css('display', 'none');
      newlayer.css('display', 'block');
    },
    next_animation: function () {
      oldlayer.css('display', 'none');
      newlayer.css('display', 'block');
    },
    prev_animation: function () {
      oldlayer.css('display', 'none');
      newlayer.css('display', 'block');
    },
    strechratiotolerance: 100,
    useviewportheight: true,
    useviewportwidth: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  me.currentSlideIndex = 0;
  if (nova_utils.isIE) {
    options = optionsIE;
  }
  var options = options || {};
  me.options = defaultOptions;
  for (var opt in options) {
    me.options[opt] = options[opt];
  }
  me.timeoutautonext = 0;
  me.autoNextEnabled = true;
  me.__construct = function () {
    me.loadSliders();
    me.addResizeListener();
    me.slideWrapper = me.container.find('.novahtmlslider_slidewrapper');
    me.slideWrapper.css({
      overflow: 'hidden',
      position: 'absolute',
      left: 0,
      top: 0,
    });
    me.loadControls();
    me.transition(me.sliders.length - 1, 0, 'next');
  };
  me.callbackfirstanimcomplete = function () {
    $$$(function () {
      new asrc_sequenceload(me.container.find('img[asrc]'));
    });
  };
  me.invokeAutoNext = function () {
    if (!me.autoNextEnabled) return;
    me.timeoutautonext = setTimeout(me.nextSlide, me.options.timer);
  };
  me.loadControls = function () {
    me.containercontrol = me.container.find('.novahtmlslider_controls');
    me.containercontrol.css('display', 'block');
    me.containercontrol.find('.controlleft').click(function () {
      clearTimeout(me.timeoutautonext);
      me.autoNextEnabled = false;
      me.previousSlide();
    });
    me.containercontrol.find('.controlright').click(function () {
      clearTimeout(me.timeoutautonext);
      me.autoNextEnabled = false;
      me.nextSlide();
    });
  };
  me.previousSlide = function () {
    var oldSlideIndex = me.currentSlideIndex;
    var newSlideIndex = me.getNextIndex(me.currentSlideIndex, -1);
    me.transition(oldSlideIndex, newSlideIndex, 'prev');
  };
  me.nextSlide = function () {
    var oldSlideIndex = me.currentSlideIndex;
    var newSlideIndex = me.getNextIndex(me.currentSlideIndex, 1);
    me.transition(oldSlideIndex, newSlideIndex, 'next');
  };
  me.addResizeListener = function () {
    $(window).resize(function () {
      me.slideGeometry(me.currentSlideIndex);
      me.imageGeometry(me.currentSlideIndex);
    });
  };
  me.firstTransition = true;
  me.transitiontimer = 0;
  me.transition = function (oldLayerIndex, newLayerIndex, sens) {
    clearTimeout(me.transitiontimer);
    if (!nova_utils.isImageLoaded(me.sliders[newLayerIndex].oImg[0])) {
      me.transitiontimer = setTimeout(function () {
        me.transition(oldLayerIndex, newLayerIndex, sens);
      }, 100);
      return;
    }
    me.transition_internal(oldLayerIndex, newLayerIndex, sens);
    $('#novahtmlslider_preloader')
      .css('opacity', 1)
      .animate({ opacity: 0 }, 300, 'swing', function () {
        $(this).remove();
      });
  };
  me.transition_internal = function (oldLayerIndex, newLayerIndex, sens) {
    if (me.firstTransition)
      me.timeoutautonext = setTimeout(
        me.invokeAutoNext,
        me.options.firstdisplay_duration
      );
    else
      me.timeoutautonext = setTimeout(me.invokeAutoNext, me.options.duration);
    me.currentSlideIndex = newLayerIndex;
    for (var i = 0; i < me.sliders.length; i++) {
      me.sliders[i].oMain.stop(true, true);
    }
    var newlayer = me.sliders[newLayerIndex].oMain;
    var oldlayer = me.sliders[oldLayerIndex].oMain;
    var oldimagediv = me.sliders[oldLayerIndex].oImgDiv;
    var newimagediv = me.sliders[newLayerIndex].oImgDiv;
    var oldimage = me.sliders[oldLayerIndex].oImg;
    var newimage = me.sliders[newLayerIndex].oImg;
    var boundary = me.getBoundaries(true);
    var boundaryNumbers = me.getBoundaries();
    me.sliders[newLayerIndex].oMain.css('z-index', me.sliderZindex++);
    me.sliders[newLayerIndex].oCustom.css('z-index', me.sliderZindex++);
    me.slideGeometry(newLayerIndex);
    me.imageGeometry(newLayerIndex);
    me.slideGeometry(oldLayerIndex);
    me.imageGeometry(oldLayerIndex);
    me.containercontrol.css('z-index', me.sliderZindex++);
    if (me.firstTransition)
      eval('(' + me.options['first_animation'].toString() + ')()');
    else eval('(' + me.options[sens + '_animation'].toString() + ')()');
    me.firstTransition = false;
  };
  me.imageGeometry = function (index) {
    var slide = me.sliders[index];
    var bound = me.getBoundaries();
    var computed = nova_utils.calcImageSize(
      slide.imgW,
      slide.imgH,
      bound.width,
      bound.height
    );
    computed = nova_utils.getStretchedDim(computed, bound, 20000, false);
    var left = Math.round(bound.width / 2 - computed.newWidth / 2);
    var top = Math.round(bound.height / 2 - computed.newHeight / 2);
    slide.oImg.css({
      width: computed.newWidth + 'px',
      height: computed.newHeight + 'px',
      left: left + 'px',
      top: top + 'px',
      right: 'auto',
      bottom: 'auto',
    });
  };
  me.slideGeometry = function (index) {
    var slide = me.sliders[index];
    slideObj = slide.oMain;
    var bound = me.getBoundaries();
    slideObj.css({
      width: bound.width + 'px',
      height: bound.height + 'px',
      right: 'auto',
      bottom: 'auto',
    });
    me.slideWrapper.css({
      width: bound.width + 'px',
      height: bound.height + 'px',
    });
    if (me.options.useviewportheight) {
      me.container.css({ height: bound.height + 'px' });
    }
  };
  me.getSlideTargetPos = function (index) {
    var slide = me.sliders[index];
    slideObj = slide.oMain;
    var bound = me.getBoundaries();
    return { top: bound.top, left: bound.left };
  };
  me.getBoundaries = function () {
    var px_suffix = '';
    if (arguments.length > 0) {
      px_suffix = 'px';
    }
    var targetoffset = me.container.offset();
    var scrollLeft = nova_utils.getScrollLeft();
    var scrollTop = nova_utils.getScrollTop();
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var useTop = targetoffset.top;
    var useHeight = me.container.height();
    if (me.options.useviewportheight) useHeight = viewportHeight;
    if (me.options.useviewportheight) useTop = 0;
    useLeft = targetoffset.left;
    useWidth = me.container.width();
    if (me.options.useviewportwidth) useLeft = 0;
    if (me.options.useviewportwidth) useWidth = viewportWidth;
    useHeight = useHeight - me.options.margin.top - me.options.margin.bottom;
    useWidth = useWidth - me.options.margin.left - me.options.margin.right;
    return {
      top: useTop + px_suffix,
      left: useLeft + px_suffix,
      width: useWidth + px_suffix,
      height: useHeight + px_suffix,
    };
  };
  me.getNextIndex = function (index, way) {
    if (way == 1) {
      index++;
      if (index > me.sliders.length - 1) index = 0;
    } else {
      index--;
      if (index < 0) index = me.sliders.length - 1;
    }
    return index;
  };
  me.loadSliders = function () {
    me.sliders = [];
    var index = 0;
    me.container.find('.novaslider').each(function () {
      var obj = {};
      obj.index = index;
      obj.oMain = $(this);
      obj.oMain.css('z-index', me.sliderZindex++);
      obj.oImg = obj.oMain.find('.novaslider_bgimage');
      obj.oImg.wrap('<div class=novaslider_bgimagediv />');
      obj.oImgDiv = obj.oMain.find('.novaslider_bgimagediv');
      obj.imgW = obj.oImg.attr('width');
      obj.imgH = obj.oImg.attr('height');
      obj.oCustom = obj.oMain.find('.novaslider_customhtml');
      obj.oMain.css({
        display: 'none',
        position: 'absolute',
        overflow: 'hidden',
      });
      index++;
      me.sliders.push(obj);
    });
  };
  me.__construct();
}
function novahtmlslider_easyconfig(options) {
  var me = this;
  me.output = {};
  var defaultOptions = {
    option: 'push',
    orientation: 'fromTop',
    duration: [1000, 1000],
    easing: ['swing', 'swing'],
    firstdisplay_option: 'fade',
    firstdisplay_orientation: 'fromTop',
    firstdisplay_duration: 1000,
    firstdisplay_easing: 'swing',
    timer: 8000,
    useviewportheight: true,
    useviewportwidth: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  me.options = defaultOptions;
  for (var opt in options) {
    me.options[opt] = options[opt];
  }
  me.__construct = function () {
    me.output.timer = me.options.timer;
    me.output.useviewportheight = me.options.useviewportheight;
    me.output.useviewportwidth = me.options.useviewportwidth;
    me.output.margin = me.options.margin;
    me.output.duration = Math.max(
      me.options.duration[0],
      me.options.duration[1]
    );
    me.output.firstdisplay_duration = me.options.firstdisplay_duration;
    me.setOutputFilters();
    if (!('dontcomputefirstdisplay' in me.options)) {
      var optfirstdisplay = me.options;
      optfirstdisplay['option'] = optfirstdisplay['firstdisplay_option'];
      optfirstdisplay['orientation'] =
        optfirstdisplay['firstdisplay_orientation'];
      optfirstdisplay['duration'] = [
        optfirstdisplay['firstdisplay_duration'],
        optfirstdisplay['firstdisplay_duration'],
      ];
      optfirstdisplay['easing'] = [
        optfirstdisplay['firstdisplay_easing'],
        optfirstdisplay['firstdisplay_easing'],
      ];
      optfirstdisplay['dontcomputefirstdisplay'] = true;
      var first = new novahtmlslider_easyconfig(optfirstdisplay);
      me.output.first_animation = first.output.next_animation;
      me.output.first_animation = me.output.first_animation.replace(
        /'\s*\)\s*\}$/,
        "',me.callbackfirstanimcomplete ) }"
      );
    }
  };
  me.setOutputFilters = function () {
    if (me.options.option == 'realreveal') {
      var geo = me.getTopLeft(me.options.orientation);
      if (me.options.orientation == 'fromRight') {
        var next_animation =
          'function (){\n' +
          ' nova_utils.swapDepths(newlayer,oldlayer); \n' +
          " newlayer.css('display','block');   \n" +
          " oldlayer.css('display','block');   \n" +
          " oldlayer.animate({width:(0)+'px'}, " +
          me.options.duration[0] +
          ", '" +
          me.options.easing[0] +
          "' )   \n" +
          '   \n' +
          '}\n';
        me.output.next_animation = next_animation;
        if (!('dontrevealagain' in me.options)) {
          var counterOpt = me.options;
          counterOpt['orientation'] = 'fromLeft';
          counterOpt['dontrevealagain'] = true;
          var countermode = new novahtmlslider_easyconfig(counterOpt);
          me.output.prev_animation = countermode.output.next_animation;
        }
        return;
      }
      if (me.options.orientation == 'fromBottom') {
        var next_animation =
          'function (){\n' +
          ' nova_utils.swapDepths(newlayer,oldlayer); \n' +
          " newlayer.css('display','block');   \n" +
          " oldlayer.css('display','block');   \n" +
          " oldlayer.animate({height:(0)+'px'}, " +
          me.options.duration[0] +
          ", '" +
          me.options.easing[0] +
          "' )   \n" +
          '   \n' +
          '}\n';
        me.output.next_animation = next_animation;
        if (!('dontrevealagain' in me.options)) {
          var counterOpt = me.options;
          counterOpt['orientation'] = 'fromTop';
          counterOpt['dontrevealagain'] = true;
          var countermode = new novahtmlslider_easyconfig(counterOpt);
          me.output.prev_animation = countermode.output.next_animation;
        }
        return;
      }
      if (me.options.orientation == 'fromLeft') {
        var next_animation =
          'function (){\n' +
          ' nova_utils.swapDepths(newlayer,oldlayer); \n' +
          " newlayer.css('display','block');   \n" +
          " oldlayer.css('display','block');   \n" +
          '   \n' +
          " var imgleft=parseFloat(oldimage.css('left')); \n" +
          " var imgwidth=parseFloat(oldimage.css('width')) \n" +
          " var layerwidth=parseFloat(oldlayer.css('width')) \n" +
          ' var gg=layerwidth-imgleft-imgwidth;   \n' +
          " oldimage.css('left','auto').css('right',(gg)+'px'); \n" +
          "  oldlayer.css('right',0).css('left','auto')  \n" +
          " oldlayer.animate({width:(0)+'px'}, " +
          me.options.duration[0] +
          ", '" +
          me.options.easing[0] +
          "' )   \n" +
          '   \n' +
          '}\n';
        me.output.next_animation = next_animation;
        if (!('dontrevealagain' in me.options)) {
          var counterOpt = me.options;
          counterOpt['orientation'] = 'fromRight';
          counterOpt['dontrevealagain'] = true;
          var countermode = new novahtmlslider_easyconfig(counterOpt);
          me.output.prev_animation = countermode.output.next_animation;
        }
        return;
      }
      if (me.options.orientation == 'fromTop') {
        var next_animation =
          'function (){\n' +
          ' nova_utils.swapDepths(newlayer,oldlayer); \n' +
          " newlayer.css('display','block');   \n" +
          " oldlayer.css('display','block');   \n" +
          '   \n' +
          " var imgtop=parseFloat(oldimage.css('top')); \n" +
          " var imgheight=parseFloat(oldimage.css('height')) \n" +
          " var layerheight=parseFloat(oldlayer.css('height')) \n" +
          ' var gg=layerheight-imgtop-imgheight;   \n' +
          " oldimage.css('top','auto').css('bottom',(gg)+'px'); \n" +
          "  oldlayer.css('bottom',0).css('top','auto')  \n" +
          " oldlayer.animate({height:(0)+'px'}, " +
          me.options.duration[0] +
          ", '" +
          me.options.easing[0] +
          "' )   \n" +
          '   \n' +
          '}\n';
        me.output.next_animation = next_animation;
        if (!('dontrevealagain' in me.options)) {
          var counterOpt = me.options;
          counterOpt['orientation'] = 'fromBottom';
          counterOpt['dontrevealagain'] = true;
          var countermode = new novahtmlslider_easyconfig(counterOpt);
          me.output.prev_animation = countermode.output.next_animation;
        }
        return;
      }
    }
    if (me.options.option == 'over_internal') {
      var geo = me.getTopLeft(me.options.orientation);
      var next_animation =
        'function(){ \n' +
        ' newlayer.css( { \n' +
        "    display:'block', \n" +
        '    top:(' +
        geo.top +
        ")+'px', \n" +
        '    left:(' +
        geo.left +
        ")+'px' \n" +
        '} ) \n' +
        '  .animate({ \n' +
        '    top:0, \n' +
        '    left:0 \n' +
        '}, ' +
        me.options.duration[0] +
        ", '" +
        me.options.easing[0] +
        "' ) \n" +
        '}';
      var prev_animation =
        'function(){ \n' +
        ' newlayer.css( { \n' +
        "    display:'block', \n" +
        '    top:(' +
        geo.top +
        "*-1)+'px', \n" +
        '    left:(' +
        geo.left +
        "*-1)+'px' \n" +
        '} ) \n' +
        '  .animate({ \n' +
        '    top:0, \n' +
        '    left:0 \n' +
        '}, ' +
        me.options.duration[0] +
        ", '" +
        me.options.easing[0] +
        "' ) \n" +
        '}';
      me.output.next_animation = next_animation;
      me.output.prev_animation = prev_animation;
      return;
    }
    if (me.options.option == 'push') {
      var overOpt = me.options;
      overOpt['option'] = 'over_internal';
      var overmode = new novahtmlslider_easyconfig(overOpt);
      var geo = me.getTopLeft(me.options.orientation);
      var next_anim_addoldlayer =
        '(function(){ \n' +
        ' oldlayer.animate({   \n' +
        ' top:(' +
        geo.top +
        "*-1)+'px',  \n" +
        ' left:(' +
        geo.left +
        "*-1)+'px'  \n" +
        '},' +
        me.options.duration[1] +
        ",'" +
        me.options.easing[1] +
        "')   \n" +
        ' \n' +
        '})()';
      var overmode_next = '(' + overmode.output.next_animation + ')()';
      me.output.next_animation =
        'function(){ ' +
        next_anim_addoldlayer +
        ' \n\n;\n\n ' +
        overmode_next +
        '   \n\n}';
      var prev_anim_addoldlayer =
        '(function(){ \n' +
        ' oldlayer.animate({   \n' +
        ' top:(' +
        geo.top +
        ")+'px',  \n" +
        ' left:(' +
        geo.left +
        ")+'px'  \n" +
        '},' +
        me.options.duration[1] +
        ",'" +
        me.options.easing[1] +
        "')   \n" +
        ' \n' +
        '})()';
      var overmode_prev = '(' + overmode.output.prev_animation + ')()';
      me.output.prev_animation =
        'function(){ ' +
        prev_anim_addoldlayer +
        ' \n\n;\n\n ' +
        overmode_prev +
        '   \n\n}';
      return;
    }
    if (me.options.option == 'reveal') {
      var geo = me.getTopLeft(me.options.orientation);
      var next_animation =
        'function(){ \n' +
        ' newlayer.css( { \n' +
        "    display:'block', \n" +
        "    top:(0)+'px', \n" +
        "    left:(0)+'px' \n" +
        '} ) \n' +
        " var newlayerzindex=newlayer.css('z-index');\n" +
        " newlayer.css('z-index',oldlayer.css('z-index'));   \n" +
        " oldlayer.css('z-index',newlayerzindex) ;  \n" +
        '    \n' +
        '  oldlayer.animate({ \n' +
        '    top:(' +
        geo.top +
        "*-1)+'px', \n" +
        '    left:(' +
        geo.left +
        "*-1)+'px' \n" +
        '}, ' +
        me.options.duration[0] +
        ", '" +
        me.options.easing[0] +
        "' ) \n" +
        '}';
      me.output.next_animation = next_animation;
      var overOpt = me.options;
      overOpt['option'] = 'over_internal';
      var overmode = new novahtmlslider_easyconfig(overOpt);
      var overmode_prev = '(' + overmode.output.prev_animation + ')()';
      me.output.prev_animation = 'function(){ \n ' + overmode_prev + '   \n\n}';
      return;
    }
    if (me.options.option == 'over') {
      var overOpt = me.options;
      overOpt['option'] = 'over_internal';
      var overmode = new novahtmlslider_easyconfig(overOpt);
      me.output.next_animation = overmode.output.next_animation;
      var revealOpt = me.options;
      revealOpt['option'] = 'reveal';
      revealOpt['orientation'] = me.invertorientation(
        me.options['orientation']
      );
      var revealmode = new novahtmlslider_easyconfig(revealOpt);
      me.output.prev_animation = revealmode.output.next_animation;
      return;
    }
    if (me.options.option == 'fade') {
      var next_animation =
        'function(){ \n' +
        " if(nova_utils.isIE)oldlayer.css('display','none');  \n" +
        ' newlayer.css( { \n' +
        "    display:'block', \n" +
        '    top:(0), \n' +
        '    left:(0), \n' +
        '    opacity:0 \n' +
        '} ) \n' +
        '  .animate({ \n' +
        '    opacity:1 \n' +
        '}, ' +
        me.options.duration[0] +
        ", '" +
        me.options.easing[0] +
        "' ) \n" +
        '}';
      me.output.next_animation = next_animation;
      me.output.prev_animation = next_animation;
      return;
    }
  };
  me.invertorientation = function (orientation) {
    switch (orientation) {
      case 'fromTop':
        orientation = 'fromBottom';
        break;
      case 'fromBottom':
        orientation = 'fromTop';
        break;
      case 'fromLeft':
        orientation = 'fromRight';
        break;
      case 'fromRight':
        orientation = 'fromLeft';
        break;
    }
    return orientation;
  };
  me.getTopLeft = function (orientation) {
    if (orientation == 'fromTop') {
      return { left: '(0)', top: ' (-boundaryNumbers.height) ' };
    }
    if (orientation == 'fromBottom') {
      return { left: '(0)', top: ' (boundaryNumbers.height) ' };
    }
    if (orientation == 'fromLeft') {
      return { left: '(-boundaryNumbers.width)', top: ' (0) ' };
    }
    if (orientation == 'fromRight') {
      return { left: '(boundaryNumbers.width)', top: ' (0) ' };
    }
  };
  me.__construct();
}
function novaMontage(container, options) {
  var me = this;
  me.container = container;
  me.container.css('position', 'relative');
  me.ghosts = [];
  var defaultOptions = {
    alternateHeight: [200, 150],
    imagegap: 30,
    maxW: 400,
    ghosting: true,
    forcewidth: 0,
    samewidthtarget: 0,
  };
  me.isIE = nova_utils.isIE;
  me.options = defaultOptions;
  for (opt in options) {
    me.options[opt] = options[opt];
  }
  me.options.minwidth_hope = Math.round(me.options.maxW / 2);
  me.arrObject = [];
  me.setContainerFixedWidth = function () {
    var w = me.container.parent().width();
    me.container.css('width', w + 'px');
    return w;
  };
  me.draw = function () {
    var targetW = me.setContainerFixedWidth();
    var item;
    while ((item = me.ghosts.shift())) {
      item.a.remove();
    }
    var arrResult = [];
    var arr = me.arrObject.slice(0);
    var currentLine = 0;
    var currentTop = 0;
    while (arr.length > 0) {
      var currentHeight = me.options.alternateHeight[currentLine];
      var tmp = me.getLine(arr, currentHeight, targetW, currentTop);
      currentTop += currentHeight + me.options.imagegap;
      arr = tmp[0];
      var item;
      while ((item = tmp[1].shift())) arrResult.push(item);
      currentLine++;
      if (currentLine > me.options.alternateHeight.length - 1) currentLine = 0;
    }
    me.draw_step2(arrResult);
  };
  me.draw_step2 = function (arrResult) {
    var maximumheight = 0;
    for (var i = 0; i < arrResult.length; i++) {
      var obj = arrResult[i];
      if (me.options.forcewidth != 0) {
        obj.forceWidth = me.options.forcewidth;
      }
      var css4a = {
        width: obj.forceWidth + 'px',
        height: obj.forceHeight + 'px',
        overflow: 'hidden',
        display: 'block',
        position: 'absolute',
        left: obj.leftPos + 'px',
        top: obj.topPos + 'px',
      };
      obj.a.css(css4a);
      var imageWidth = obj.thumbWidth;
      var imageHeight = obj.thumbHeight;
      if (imageWidth < obj.forceWidth) {
        var ratio = obj.forceWidth / imageWidth;
        imageWidth = imageWidth * ratio;
        imageHeight = imageHeight * ratio;
      }
      if (imageHeight < obj.forceHeight) {
        var ratio = obj.forceHeight / imageHeight;
        imageWidth = imageWidth * ratio;
        imageHeight = imageHeight * ratio;
      }
      maximumheight = Math.max(
        maximumheight,
        obj.topPos + obj.forceHeight + me.options.imagegap
      );
      var imageLeft = -Math.round((imageWidth - obj.forceWidth) / 2);
      var imageTop = -Math.round((imageHeight - obj.forceHeight) / 2);
      imageWidth = Math.ceil(imageWidth);
      imageHeight = Math.ceil(imageHeight);
      var css4img = {
        width: imageWidth + 'px',
        height: imageHeight + 'px',
        top: imageTop,
        left: imageLeft,
      };
      obj.img.css(css4img);
    }
    me.container.css({ height: maximumheight - me.options.imagegap + 'px' });
  };
  me.getTotalWidth = function (itemcount, itemwidth, margin) {
    var v1 = itemcount * itemwidth;
    var v2 = (itemcount - 1) * margin;
    return v1 + v2;
  };
  me.getLine = function (arrObject, currentHeight, targetW, currentTop) {
    var returnArr = [];
    var widthReached = 0;
    var ghost_index = 0;
    var shifted = [];
    var obj;
    var decal = 0;
    var first = true;
    if (me.options.samewidthtarget != 0) {
      var ssw = me.options.samewidthtarget;
      ssw = Math.min(ssw, me.setContainerFixedWidth());
      if (ssw < 1) ssw = 1;
      var countPerLine =
        targetW / (me.options.samewidthtarget + me.options.imagegap / 2);
      countPerLine = countPerLine <= 0 ? 1 : countPerLine;
      countPerLine = Math.round(countPerLine);
      var perfectWidth = 1;
      var tries = 0;
      while (true) {
        var achievedWidth = me.getTotalWidth(
          countPerLine,
          perfectWidth,
          me.options.imagegap
        );
        if (achievedWidth == targetW) {
          break;
        }
        if (achievedWidth > targetW) {
          perfectWidth--;
          break;
        }
        perfectWidth++;
        if (tries++ > 500) {
          perfectWidth = me.setContainerFixedWidth();
          break;
        }
      }
      me.options.forcewidth = perfectWidth;
    }
    if (me.options.forcewidth != 0)
      me.options.minwidth_hope = me.options.forcewidth;
    var maxOnThisLine = Math.floor(
      targetW / (me.options.minwidth_hope + me.options.imagegap / 2)
    );
    maxOnThisLine = maxOnThisLine <= 0 ? 1 : maxOnThisLine;
    var countOnLine = 0;
    while ((obj = arrObject.shift())) {
      var thumb1 = me.thumbSize(
        obj.imgW,
        obj.imgH,
        me.options.maxW,
        currentHeight
      );
      obj.thumbWidth = thumb1.newWidth;
      obj.thumbHeight = thumb1.newHeight;
      obj.forceWidth = thumb1.newWidth;
      obj.forceHeight = currentHeight;
      obj.topPos = currentTop;
      obj.leftPos = decal;
      shifted.push(obj);
      if (first) gap = 0;
      else gap = me.options.imagegap;
      first = false;
      widthReached += thumb1.newWidth + gap;
      decal += thumb1.newWidth + me.options.imagegap;
      if (++countOnLine >= maxOnThisLine) {
        break;
      }
      if (widthReached < targetW && arrObject.length == 0) {
        if (me.options.ghosting != true) {
          return [arrObject, shifted];
        }
        var ghost = me.makeGhost(me.arrObject[ghost_index]);
        me.ghosts.push(ghost);
        arrObject.push(ghost);
        ghost_index++;
        if (ghost_index > me.arrObject.length - 1) ghost_index = 0;
      }
      if (widthReached >= targetW) {
        break;
      }
    }
    var reflowdone = false;
    if (widthReached <= targetW) {
      var underFlow = targetW - widthReached;
      var reflow_per_item = Math.ceil(underFlow / shifted.length);
      for (var i = 0; i < shifted.length; i++) {
        shifted[i].forceWidth += reflow_per_item;
        if (shifted[i + 1]) {
          shifted[i + 1].leftPos += reflow_per_item;
        }
        underFlow -= reflow_per_item;
        if (underFlow <= 0) {
          shifted[i].forceWidth -= Math.abs(underFlow);
          if (shifted[i + 1]) {
            shifted[i + 1].leftPos -= Math.abs(underFlow);
          }
          break;
        }
      }
      reflowdone = true;
    } else {
      var overflow = widthReached - targetW;
      var overflow_per_item = Math.ceil(overflow / shifted.length);
      for (var i = 0; i < shifted.length; i++) {
        shifted[i].forceWidth -= overflow_per_item;
        if (shifted[i + 1]) {
          shifted[i + 1].leftPos -= overflow_per_item;
        }
        overflow -= overflow_per_item;
        if (overflow <= 0) {
          shifted[i].forceWidth += Math.abs(overflow);
          if (shifted[i + 1]) {
            shifted[i + 1].leftPos += Math.abs(overflow);
          }
          break;
        }
      }
    }
    var decal = 0;
    for (var i = 0; i < shifted.length; i++) {
      shifted[i].leftPos = decal;
      decal += shifted[i].forceWidth + me.options.imagegap;
    }
    return [arrObject, shifted];
  };
  me.makeGhost = function (obj) {
    var newobj = {};
    newobj.a = obj.a.clone(true, true);
    newobj.a.addClass('montageghost');
    newobj.a.removeAttr('novagalfirst');
    newobj.a.removeAttr('novagal');
    newobj.a.removeAttr('novagalchild');
    newobj.img = newobj.a.find('img');
    newobj.img.addClass('montageghost');
    newobj.imgW = obj.imgW;
    newobj.imgH = obj.imgH;
    newobj.a.appendTo(me.container);
    return newobj;
  };
  me.__construct = function () {
    var ii = 0;
    me.container.find('a').each(function () {
      var entry = {};
      entry.a = $(this);
      entry.img = entry.a.find('img');
      entry.imgW = entry.img.attr('width');
      entry.imgH = entry.img.attr('height');
      entry.a.css({
        overflow: 'hidden',
        display: 'block',
        position: 'absolute',
      });
      entry.img.css({ position: 'absolute' });
      me.arrObject.push(entry);
    });
    me.draw();
    me.timeoutresize = 0;
    $(window).resize(function () {
      clearTimeout(me.timeoutresize);
      me.timeoutresize = setTimeout(me.draw, 100);
    });
  };
  me.thumbSize = function ($width, $height, maxW, maxH) {
    if (me.options.forcewidth != 0) {
      return nova_utils.calcImageSize(
        $width,
        $height,
        me.options.forcewidth,
        600000
      );
    }
    return nova_utils.calcImageSize($width, $height, maxW, maxH);
  };
  me.__construct();
}
function novahover(containerlist, options) {
  var me = this;
  if (containerlist.length == 0) return;
  var defaultOptions = {
    animOver: function (overlay, divwraptext, divtext, c_width, c_height) {},
    animOut: function (overlay, divwraptext, divtext, c_width, c_height) {},
  };
  me.options = defaultOptions;
  for (var opt in options) {
    me.options[opt] = options[opt];
  }
  me.listofA = containerlist;
  me.__construct = function () {
    me.listofA.each(function () {
      var div_back = $('<div class=novahover_overlay  />');
      div_back.appendTo($(this));
      var div_text = $(
        '<div class=novahover_text_wrap ><div class=novahover_text>' +
          $(this).attr('title') +
          '</div></div>'
      );
      div_text.appendTo($(this));
      div_text_inner = div_text.find('.novahover_text');
      div_text.css('position', 'absolute');
      div_back.css('position', 'absolute');
      var title = $(this).attr('title');
      title = '' + title;
      title = title.replace(/^undefined$/, '');
      title = title.replace(/^null$/, '');
      if (!$(this).attr('titlebackup')) {
        $(this).attr('titlebackup', title);
      }
      $(this).attr('title', '');
      $(this).data('div_back', div_back);
      $(this).data('div_text', div_text);
      $(this).data('div_text_inner', div_text_inner);
    });
    me.listofA.bind('mouseenter mouseleave', function (event) {
      if (event.type == 'mouseenter' || event.type == 'mouseover') {
        me.animOver($(this));
      } else {
        me.animOut($(this));
      }
    });
  };
  me.animOver = function (aObj) {
    var div_back = aObj.data('div_back');
    var div_text = aObj.data('div_text');
    var div_text_inner = aObj.data('div_text_inner');
    var H = aObj.height();
    var W = aObj.width();
    var divtextheight = div_text.height();
    div_text.width(W);
    div_back.width(div_text.width()).height(div_text.height());
    var H1 = aObj.height() - divtextheight;
    div_back.css({ top: 0, left: 0, height: H + 'px' });
    div_text.css({ top: 0, left: 0 });
    me.options.animOver(div_back, div_text, div_text_inner, W, H);
  };
  me.animOut = function (aObj) {
    var H = aObj.height();
    var W = aObj.width();
    var divtextheight = aObj.data('div_text').height();
    var div_back = aObj.data('div_back');
    var div_text = aObj.data('div_text');
    var div_text_inner = aObj.data('div_text_inner');
    me.options.animOut(div_back, div_text, div_text_inner, W, H);
  };
  me.__construct();
}
function nova_imagelistfader(imglist, options) {
  if (imglist.length == 0) return;
  var me = this;
  var defaultOptions = { duration: 800, easing: 'swing', noanimation: false };
  options = options || {};
  var actualoptions = defaultOptions;
  for (var opt in options) {
    actualoptions[opt] = options[opt];
  }
  me.fadein_duration = actualoptions['duration'];
  me.fadein_easing = actualoptions['easing'];
  me.noanimation = actualoptions['noanimation'];
  me.noanimation_if_ie = true;
  me.checkfornewloadedpics = 20;
  me.queueinterval = 20;
  me.scanqueueinterval = 10;
  me.queuetodisp = [];
  me.queueingcomplete = false;
  me.imagelist = [];
  for (var i = 0, l = imglist.length; i < l; i++) {
    me.imagelist.push([imglist.eq(i), imglist[i]]);
  }
  me.isIE = function () {
    return nova_utils.isIE;
  };
  me.seek = function () {
    var newimagelist = [];
    for (var i = 0, l = me.imagelist.length; i < l; i++) {
      if (me.imagelist[i][1].complete) {
        me.addtoqueue(me.imagelist[i][0]);
      } else {
        newimagelist.push(me.imagelist[i]);
      }
    }
    me.imagelist = newimagelist;
    if (me.imagelist.length == 0) {
      clearInterval(me.timer1);
      me.queueingcomplete = true;
    }
  };
  me.addtoqueue = function (img) {
    if (me.noanimation) {
      img.css({ visibility: 'visible' });
      return;
    }
    me.queuetodisp.push(img);
  };
  me.handlequeue = function () {
    if (me.queueingcomplete && me.queuetodisp.length == 0) {
      clearInterval(me.timer2);
      return;
    }
    if (me.queuetodisp.length == 0) return;
    if (new Date() - me.lastunqueue < me.queueinterval) return;
    var img = me.queuetodisp.shift();
    me.lastunqueue = new Date().getTime();
    img.animate({ opacity: 1 }, me.fadein_duration, me.fadein_easing);
  };
  if (me.noanimation_if_ie && me.isIE()) {
    me.noanimation = true;
  }
  if (me.noanimation == false) {
    imglist.css({ opacity: 0, visibility: 'visible', display: 'block' });
  }
  me.timer1 = setInterval(me.seek, me.checkfornewloadedpics);
  if (!me.noanimation) {
    me.lastunqueue = new Date().getTime();
    me.timer2 = setInterval(me.handlequeue, me.scanqueueinterval);
  }
}
function novabox(obj) {
  var me = this;
  var defaultOptions = {
    targetcanvas: $([]),
    modeieperf: true,
    anchorselector: '',
    closeable: true,
    openfirst: false,
    positioning: 'fixed',
    downsizedimage: false,
    downsizedimage_fullfill: true,
    fillcontainer: true,
    maxzoom: 1.5,
    stretchRatioTolerance: 50,
    overlayopacity: '1',
    respectHorizontalBoundaries: true,
    respectVerticalBoundaries: false,
    required_min_width_or_height_for_zoom: 0,
    imagemargin: [0, 0, 0, 0],
    canvasmargin: [0, 0, 0, 0],
    innoverlayinheritmargins: false,
    leftrightclickable: 'contain',
    mousecursorleft:
      'http://d24aiv4ryvyi1a.cloudfront.net/commons/nova_box/img/left-cursor.png',
    mousecursorright:
      'http://d24aiv4ryvyi1a.cloudfront.net/commons/nova_box/img/right-cursor.png',
    captionrelativeto: 'fullviewport',
    captionreveal: function (c) {
      c.delay(0)
        .css({ left: '30px', opacity: '0' })
        .animate({ opacity: 1, left: '15px' }, 500);
    },
    socialmedia_code: '',
    useStopCommand: true,
  };
  var options = defaultOptions;
  for (var opt in obj) {
    options[opt] = obj[opt];
  }
  if (options.targetcanvas.length == 0) options.targetcanvas = $('body');
  if (options.socialmedia_code != '') {
    options.useStopCommand = false;
  }
  me.anchorlist = $(options.anchorselector);
  if (me.anchorlist.length == 0) return;
  me.options = options;
  me.options.anchorlist = me.anchorlist;
  me.overlay = null;
  me.loadPictureTimer = 0;
  me.imgblank =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
  me.photocount = 0;
  me.img2social = {};
  me.canvasmarginobj = {
    top: me.options['canvasmargin'][0],
    right: me.options['canvasmargin'][1],
    bottom: me.options['canvasmargin'][2],
    left: me.options['canvasmargin'][3],
  };
  me.__construct = function () {
    me.initSocialMedia();
    me.options.imgtohidelist = me.anchorlist.find('img');
    var newImgStack = [];
    var newAStack = [];
    me.options.imgtohidelist.each(function () {
      if ($(this).hasClass('montageghost')) return;
      newImgStack.push(this);
    });
    me.options.anchorlist.each(function () {
      if ($(this).hasClass('montageghost')) return;
      newAStack.push(this);
    });
    me.options.imgtohidelist = jQuery([]).pushStack(newImgStack);
    me.options.anchorlist = jQuery([]).pushStack(newAStack);
    me.isitie = me.isIE();
    var index = 0;
    me.options.anchorlist.each(function () {
      $(this).data('index', index++);
    });
    me.photocount = me.options.anchorlist.length;
    if (me.photocount == 0) return;
    me.addOverlay();
    me.addListener();
    me.addHtml();
    me.setupcontrols();
    me.nextClickDontStop = false;
    me.setupDownSize();
    if (me.options.openfirst) {
      setTimeout(function () {
        me.nextClickDontStop = true;
        me.anchorlist.eq(0).click();
      }, 10);
    }
  };
  me.initSocialMedia = function () {
    if (me.options.socialmedia_code != '') {
      var secretElem = 'novabox_social_' + Math.round(Math.random() * 10000);
      secretElem = $(
        '<div style="display:none" id="' + secretElem + '"></div>'
      );
      $('body').append(secretElem);
      me.options.anchorlist.each(function () {
        var href = $(this).attr('href');
        if (/\/(\d+)\.jpg$/.test(href)) {
          var idimg = RegExp.$1;
          var code = me.options.socialmedia_code;
          var elem = $(code);
          me.img2social[idimg] = elem;
          elem.name = 'idimg:' + idimg;
          elem.attr(
            'addthis:url',
            $('#current_page_url').val() + '?nvgfb=' + idimg
          );
          elem.appendTo(secretElem);
        }
      });
      $('body').append(
        '<scr' +
          'ipt type="text/javascript" src="' +
          ('https:' == document.location.protocol ? 'https://' : 'http://') +
          's7.addthis.com/js/250/addthis_widget.js#pubid=xa-5012a4af5408c5c8"></sc' +
          'ript>'
      );
    }
  };
  me.setupDownSize = function () {
    if (!me.options.downsizedimage) return;
    var maxW = Math.round(me.options.targetcanvas.width());
    var maxH = Math.round(me.options.targetcanvas.height());
    me.anchorlist.each(function () {
      var href = $(this).attr('href');
      if (/galleria\/(\d+)\.jpg/.test(href)) {
        var newhref;
        if (me.options.downsizedimage_fullfill) {
          newhref = nova_utils.getGalleriaThumbMinHref(RegExp.$1, maxW, maxH);
        } else {
          newhref = nova_utils.getGalleriaThumbHref(RegExp.$1, maxW, maxH);
        }
        var suffix = '';
        if (/(http:\/\/.+?\.cloudfront\.net)\//.test(href)) suffix = RegExp.$1;
        $(this).attr('href', suffix + newhref);
      }
    });
  };
  me.syncLoadImage = function (arrimg) {
    for (var i = 0; i < arrimg.length; i++) {
      var url = arrimg[i];
      var img = new Image();
      img.src = url;
    }
  };
  me.setupcontrols = function () {
    if (me.options.leftrightclickable == 'item') {
      me.wrapper
        .find('.novabox_item_next')
        .click(function () {
          me.navig(1);
        })
        .css('cursor', 'pointer');
      me.wrapper
        .find('.novabox_item_prev')
        .click(function () {
          me.navig(-1);
        })
        .css('cursor', 'pointer');
    }
    if (me.options.leftrightclickable == 'contain') {
      var suffixauto = '';
      if (me.isitie) {
        me.options.mousecursorleft = me.options.mousecursorleft.replace(
          '.png',
          '.cur'
        );
        me.options.mousecursorright = me.options.mousecursorright.replace(
          '.png',
          '.cur'
        );
      } else {
        suffixauto = ',auto';
      }
      me.wrapper.find('.novabox_contain_next').click(function () {
        me.navig(1);
      });
      me.wrapper.find('.novabox_contain_prev').click(function () {
        me.navig(-1);
      });
      me.wrapper.find('.novabox_item_next').hide();
      me.wrapper.find('.novabox_item_prev').hide();
    }
  };
  me.navig = function (sens) {
    if (me.loadingPicture) return;
    me.loadingPicture = true;
    var next = me.navig_internal(me.showingindex, sens);
    me.loadPicture(next);
  };
  me.navig_internal = function (current, sens) {
    if (sens == 1) {
      var next = current - 1 + 2;
      if (next > me.photocount - 1) next = 0;
    } else {
      var next = current - 1;
      if (next <= -1) next = me.photocount - 1;
    }
    return next;
  };
  me.setupclosehandler = function () {
    if (!me.options['closeable']) return;
    me.closebutton.click(me.closeBox);
    $(document).bind('keydown', me.closeonechap);
  };
  me.setupkeyboardnavig = function () {
    $(document).bind('keydown', me.keynavigation);
  };
  me.keynavigation = function (event) {
    if (event.which == 37) {
      event.preventDefault();
      me.navig(-1);
    }
    if (event.which == 39) {
      event.preventDefault();
      me.navig(1);
    }
  };
  me.closeonechap = function (event) {
    if (event.which == 27) {
      me.closeBox();
    }
  };
  me.closeBox = function () {
    me.showmontage();
    clearInterval(me.loadPictureTimer);
    $(document).unbind('keydown', me.closeonechap);
    $(document).unbind('keydown', me.keynavigation);
    $(window).unbind('resize', me.resizefunc);
    me.overlay2.css('display', 'none');
    me.setselectable();
    me.wrapper.css('display', 'none');
    me.overlay.css('display', 'none');
    me.imgwrap.find('img').remove();
  };
  me.addOverlay = function () {
    me.overlay = $('<div class=novaboxoverlay />');
    if (me.options['positioning'] == 'fixed') {
      me.overlay.css('position', 'fixed');
      me.overlay.appendTo($('body'));
    } else {
      me.overlay.css('position', 'absolute');
      me.overlay.appendTo(me.options['targetcanvas']);
    }
    if ((me.options['targetcanvas'][0].tagName + '').toUpperCase() != 'BODY') {
      me.options['targetcanvas'].css('position', 'relative');
    }
    me.overlay2 = $(
      '<div class=novaboxoverlay style="width:100%;height:100%" />'
    );
    if (me.options.inneroverlayinheritmargins) {
      me.overlay2.css({
        display: 'none',
        'margin-top': me.canvasmarginobj.top,
        'margin-right': me.canvasmarginobj.right,
        'margin-bottom': me.canvasmarginobj.bottom,
        'margin-left': me.canvasmarginobj.left,
      });
    } else {
      me.overlay2.css({ display: 'none' });
    }
    me.overlay2.prependTo(me.options['targetcanvas']);
  };
  me.addHtml = function () {
    var template =
      ' <div class="novabox_wrapper"> ' +
      ' <div class="novabox_imagepreloader"></div> ' +
      ' <div class="novabox_image"> ' +
      '  <div class="novabox_caption"><div class="novabox_captiontext"></div></div> ' +
      '  <div class="novabox_social"><div class="novabox_socialcontent"></div></div> ' +
      '  <!--image goes here-->  ' +
      '  ' +
      ' </div> ' +
      ' <div class="novabox_image_captionposition"> ' +
      ' <div class="novabox_image_imageonly"></div> ' +
      ' <div class="novabox_image_viewportwidth"></div> ' +
      ' <div class="novabox_image_viewportheight"></div> ' +
      ' <div class="novabox_image_fullviewport"></div> ' +
      '  </div> ' +
      ' <div class=novabox_contain_next><div class=novabox_wrapper_next><div class=novabox_wrapper2_next><div class="novabox_item_next"></div></div></div></div>' +
      ' <div class=novabox_contain_prev><div class=novabox_wrapper_prev><div class=novabox_wrapper2_prev><div class="novabox_item_prev"></div></div></div></div> ' +
      ' <div class="novabox_close"></div> ' +
      '</div>';
    me.wrapper = $(template);
    if (me.options['positioning'] == 'fixed') {
      me.wrapper.css('position', 'fixed');
      me.wrapper.appendTo('body');
    } else {
      me.wrapper.css('position', 'absolute');
      me.wrapper.appendTo(me.options.targetcanvas);
    }
    me.imgwrap = me.wrapper.find('.novabox_image');
    me.preloader = me.wrapper.find('.novabox_imagepreloader');
    me.closebutton = me.wrapper.find('.novabox_close');
    if (!me.options['closeable']) {
      me.closebutton.hide();
    }
    me.caption = me.wrapper.find('.novabox_caption');
    me.captiontxt = me.wrapper.find('.novabox_captiontext');
    me.caption.appendTo(
      me.wrapper.find('.novabox_image_' + me.options.captionrelativeto)
    );
    me.social = me.wrapper.find('.novabox_social');
    me.socialcontent = me.wrapper.find('.novabox_socialcontent');
    me.social.appendTo(
      me.wrapper.find('.novabox_image_' + me.options.captionrelativeto)
    );
    me.captionpos_imageonly = me.wrapper.find('.novabox_image_imageonly');
    me.captionpos_viewportwidth = me.wrapper.find(
      '.novabox_image_viewportwidth'
    );
    me.captionpos_viewportheight = me.wrapper.find(
      '.novabox_image_viewportheight'
    );
  };
  me.addListener = function () {
    $(options.anchorselector).live('click', function (event) {
      event.preventDefault();
      me.open($(this).data('index'));
    });
  };
  me.tmp = 0;
  me.resizefunc = function () {
    var f = function () {
      me.sizeWrapper();
      me.sizeOverlay();
      if (!me.loadingPicture) {
        me.loadPicture_final();
      }
    };
    clearTimeout(me.tmp);
    me.tmp = setTimeout(f, 200);
  };
  me.backhidden = false;
  me.hidemontage = function () {
    if (!me.isitie || me.options.modeieperf == false) return;
    me.options.imgtohidelist.each(function () {
      $(this).data('src', $(this).attr('src'));
      $(this).attr('src', me.imgblank);
    });
    me.backhidden = true;
  };
  me.showmontage = function () {
    if (!me.isitie || me.options.modeieperf == false) return;
    me.options.imgtohidelist.each(function () {
      $(this).attr('src', $(this).data('src'));
      $(this).attr('alt', 'special');
    });
    me.backhidden = false;
  };
  me.setunselectable = function () {
    $('body').css({
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      '-o-user-select': 'none',
      'user-select': 'none',
    });
  };
  me.setselectable = function () {
    $('body').css({
      '-webkit-user-select': 'text',
      '-khtml-user-select': 'text',
      '-moz-user-select': 'text',
      '-ms-user-select': 'text',
      '-o-user-select': 'text',
      'user-select': 'text',
    });
  };
  me.open = function (index) {
    if (me.backhidden == false) {
      me.hidemontage();
    }
    me.setunselectable();
    me.setupclosehandler();
    me.setupkeyboardnavig();
    me.openOverlay();
    me.sizeWrapper();
    me.loadPicture(index);
    $(window).bind('resize', me.resizefunc);
    me.overlay2.css('display', 'block');
  };
  me.prefetcher = function () {
    var next1 = me.navig_internal(me.showingindex, 1);
    var next2 = me.navig_internal(next1, 1);
    var next3 = me.navig_internal(next2, 1);
    var next4 = me.navig_internal(next3, 1);
    me.arrPrefetch = [
      me.options.anchorlist.eq(next1).attr('href'),
      me.options.anchorlist.eq(next2).attr('href'),
      me.options.anchorlist.eq(next3).attr('href'),
      me.options.anchorlist.eq(next4).attr('href'),
    ];
    var f = function () {
      if (me.arrPrefetch.length == 0) return;
      var src = me.arrPrefetch.shift();
      var img = new Image();
      $(img).load(function () {
        f();
      });
      img.src = src;
    };
    f();
  };
  me.loadPicture_final = function () {
    me.img.stop();
    me.img.css({ opacity: 0 });
    var imgW = me.img.outerWidth();
    var imgH = me.img.outerHeight();
    if (String(me.img.data('realW')) == 'undefined') {
      me.img.data('realW', imgW);
      me.img.data('realH', imgH);
    }
    var imgW = me.img.data('realW');
    var imgH = me.img.data('realH');
    var obj = me.getBoundaries();
    var margin = {};
    margin.top = me.options.imagemargin[0];
    margin.right = me.options.imagemargin[1];
    margin.bottom = me.options.imagemargin[2];
    margin.left = me.options.imagemargin[3];
    if (
      imgW >= me.options.required_min_width_or_height_for_zoom ||
      imgH >= me.options.required_min_width_or_height_for_zoom
    ) {
      var computed = me.calcImageSize(
        imgW,
        imgH,
        obj.width - margin.right - margin.left,
        obj.height - margin.top - margin.bottom,
        me.options.maxzoom
      );
      if (me.options.fillcontainer) {
        computed = me.getStretchedDim(
          computed,
          margin,
          imgW,
          imgH,
          obj,
          me.options.maxzoom,
          imgW,
          imgH
        );
      }
    } else {
      var computed = { newWidth: imgW, newHeight: imgH };
    }
    var top =
      Math.floor(
        (obj.height - margin.bottom - margin.top) / 2 - computed.newHeight / 2
      ) + margin.top;
    var left =
      Math.floor(
        (obj.width - margin.right - margin.left) / 2 - computed.newWidth / 2
      ) + margin.left;
    me.img.attr({ width: computed.newWidth, height: computed.newHeight });
    me.img.css({
      width: computed.newWidth,
      height: computed.newHeight,
      top: top,
      left: left,
    });
    setTimeout(function () {
      me.img
        .stop()
        .css({ opacity: 0, visibility: 'visible' })
        .animate({ opacity: 1 }, 300, 'swing', me.hideLoader);
    }, 1);
    me.setupcaptiongeometry(top, left, computed.newWidth, computed.newHeight);
    me.setupcaptioncontent();
    me.setupsocialcontent();
    me.prefetcher();
  };
  me.loadPicture_check = function () {
    if (nova_utils.isImageLoaded(me.img[0])) {
      clearInterval(me.loadPictureTimer);
      me.loadPicture_final();
    } else {
      me.showLoader();
    }
  };
  me.loadPicture = function (index) {
    me.showingindex = index;
    clearInterval(me.loadPictureTimer);
    me.caption.stop().css('opacity', 0);
    var href = me.options.anchorlist.eq(index).attr('href');
    me.imgwrap.find('img').remove();
    var newimg = $('<img>');
    me.img = newimg;
    me.img.css({ opacity: 0, visibility: 'hidden' });
    me.img.appendTo(me.imgwrap);
    if (me.nextClickDontStop) {
      me.nextClickDontStop = false;
    } else {
      if (me.options.useStopCommand) nova_utils.windowStop();
    }
    me.img.attr('src', href);
    me.img.attr('alt', 'special2');
    me.loadPicture_check_iteration = 0;
    me.loadPictureTimer = setInterval(me.loadPicture_check, 20);
  };
  me.getStretchedDim = function (computed, margin, imgW, imgH, obj, maxzoom) {
    var imgRatio = imgW / imgH;
    var boundaryRatio = obj.width / obj.height;
    var imgRatio_floored = Math.floor(imgRatio);
    var boundaryRatio_floored = Math.floor(boundaryRatio);
    var goForHeight = obj.height - margin.bottom - margin.top;
    var goForWidth = obj.width - margin.right - margin.left;
    if (imgRatio >= 1 && boundaryRatio < 1) {
      return computed;
    }
    if (imgRatio <= 1 && boundaryRatio > 1) {
      return computed;
    }
    if (goForWidth / imgW > maxzoom) {
      return computed;
    }
    if (goForHeight / imgH > maxzoom) {
      return computed;
    }
    var ratioDiff = Math.abs(1 - imgRatio / boundaryRatio);
    ratioDiff = Math.round(ratioDiff * 100);
    if (ratioDiff < me.options.stretchRatioTolerance) {
      if (computed.newHeight < goForHeight) {
        var ratio = goForHeight / computed.newHeight;
        computed.newHeight *= ratio;
        computed.newWidth *= ratio;
      }
      if (computed.newWidth < goForWidth) {
        var ratio = goForWidth / computed.newWidth;
        computed.newHeight *= ratio;
        computed.newWidth *= ratio;
      }
    }
    return computed;
  };
  me.setupsocialcontent = function () {
    if (me.options.socialmedia_code == '') return;
    me.socialcontent.html('');
    var href = me.options.anchorlist.eq(me.showingindex).attr('href');
    if (/\/(\d+)\.jpg$/.test(href)) {
      var idimg = RegExp.$1;
      if (idimg in me.img2social) {
        me.img2social[idimg].appendTo(me.socialcontent);
      }
    }
  };
  me.setupcaptioncontent = function () {
    me.caption.stop();
    var txt = me.options.anchorlist.eq(me.showingindex).attr('title');
    if (!txt) {
      txt = me.options.anchorlist.eq(me.showingindex).attr('titlebackup');
    }
    txt = '' + txt;
    txt = txt.replace(/^undefined$/, '');
    txt = txt.replace(/^null$/, '');
    if (txt == '') return;
    me.captiontxt.html(txt);
    me.options.captionreveal(me.caption);
  };
  me.setupcaptiongeometry = function (imgtop, imgleft, imgwidth, imgheight) {
    me.captionpos_imageonly.css({
      top: imgtop,
      left: imgleft,
      width: imgwidth,
      height: imgheight,
    });
    me.captionpos_viewportwidth.css({ top: imgtop, height: imgheight });
    me.captionpos_viewportheight.css({ left: imgleft, width: imgwidth });
  };
  me.sizeWrapper = function () {
    var obj = me.getBoundaries();
    me.wrapper.css({
      display: 'block',
      left: obj.left + 'px',
      top: obj.top + 'px',
      width: obj.width + 'px',
      height: obj.height + 'px',
    });
  };
  me.sizeOverlay = function () {
    var obj = me.getBoundaries();
    me.overlay.css({
      top: obj.top + 'px',
      left: obj.left + 'px',
      width: obj.width + 'px',
      height: obj.height + 'px',
    });
  };
  me.openOverlay = function () {
    me.overlay.css({ display: 'block' });
    me.sizeOverlay();
  };
  me.getBoundaries = function () {
    var targetoffset = me.options.targetcanvas.offset();
    var targettop = targetoffset.top;
    var scrollTop = me.getScrollTop();
    if (me.options.respectVerticalBoundaries)
      var top = Math.max(targettop, scrollTop);
    else var top = scrollTop;
    var targetleft = targetoffset.left;
    var scrollLeft = $('body').scrollLeft();
    if (me.options.respectHorizontalBoundaries)
      var left = Math.max(targetleft, scrollLeft);
    else var left = scrollLeft;
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    if (!me.options.respectVerticalBoundaries) {
      var height = viewportHeight;
    } else {
      var height = me.options.targetcanvas.height();
    }
    if (!me.options.respectHorizontalBoundaries) {
      var width = viewportWidth;
    } else {
      var width = me.options.targetcanvas.width();
    }
    if (me.options.positioning != 'fixed') {
      left = 0;
      top = 0;
    }
    return {
      top: me.canvasmarginobj.top,
      left: left + me.canvasmarginobj.left,
      width: width - me.canvasmarginobj.left - me.canvasmarginobj.right,
      height: height - me.canvasmarginobj.top - me.canvasmarginobj.bottom,
    };
  };
  me.hideLoader = function () {
    me.loadingPicture = false;
    me.preloader.css('display', 'none');
  };
  me.showLoader = function () {
    me.preloader.css('display', 'block');
  };
  me.calcImageSize = function ($width, $height, maxW, maxH, maxzoom) {
    return nova_utils.calcImageSize(
      $width,
      $height,
      maxW,
      maxH,
      parseFloat(maxzoom)
    );
  };
  me.getScrollTop = function () {
    if (typeof pageYOffset != 'undefined') {
      return pageYOffset;
    } else {
      var B = document.body;
      var D = document.documentElement;
      D = D.clientHeight ? D : B;
      return D.scrollTop;
    }
  };
  me.isIE = function () {
    var isIE = false;
    var isIE11 = navigator.userAgent.indexOf('.NET CLR') > -1;
    var isIE = isIE11 || navigator.appVersion.indexOf('MSIE') != -1;
    return isIE;
  };
  me.__construct();
}
function novaform(obj) {
  var me = this;
  me.form = obj.form;
  me.valid = obj.valid;
  me.arrMandatory = [];
  me.arrSame = [];
  me.arrVerif = [];
  me.highlight_errors = false;
  me.__construct = function () {
    me.valid.click(me.submit);
  };
  me.fx_showprogress = function () {};
  me.fx_hideprogress = function () {};
  me.fx_done = function () {
    alert('mail sent !');
  };
  me.fx_fail = function () {
    alert('error submitting form, sorry for the inconvenience');
  };
  me.submit = function () {
    if (!me.runcheck()) return;
    var formpost = {};
    var formman = me.form.find('[name="formname"]').length > 0 ? true : false;
    if (formman) {
      formpost.allfields = [];
      formpost.formname = me.form.find('[name="formname"]').val();
      formpost.formpage = me.form.find('[name="formpage"]').val();
    }
    formpost.reference_number = me.form.find('[name="reference_number"]').val();
    var ignore = {};
    for (var i = 0; i < me.arrSame.length; i++) {
      ignore[me.arrSame[i][1]] = true;
    }
    me.form.find('[displayname]').each(function () {
      var dispname = $(this).attr('displayname');
      if (dispname in ignore) return;
      if (me.getType(this) == 'text') {
        formpost[dispname] = $(this).val();
        if (formman) {
          formpost.allfields.push(dispname);
        }
      }
      if (me.getType(this) == 'checkbox') {
        var list = [];
        me.form
          .find('[displayname="' + dispname + '"]:checked')
          .each(function () {
            list.push($(this).parent().text());
          });
        if (list.length > 0) formpost[dispname] = list.join(', ');
        if (formman) {
          formpost.allfields.push(dispname);
        }
      }
      if (me.getType(this) == 'radio') {
        var elemchecked = me.form.find(
          '[displayname="' + dispname + '"]:checked'
        );
        formpost[dispname] =
          elemchecked.length > 0 ? elemchecked.parent().text() : '';
        if (formman) {
          formpost.allfields.push(dispname);
        }
      }
      if (me.getType(this) == 'select') {
        var list = [];
        $(this)
          .find('option:selected')
          .each(function () {
            list.push($(this).text());
          });
        formpost[dispname] = list.join(', ');
        if (formman) {
          formpost.allfields.push(dispname);
        }
      }
    });
    if (formman) {
      formpost.allfields = formpost.allfields.join('--_boundary_--');
    }
    formpost.mailsubject = me.form.find('[name=mailsubject]').val();
    formpost.novamailto = me.form.attr('novamailto');
    me.fx_showprogress();
    $.ajax({
      type: 'POST',
      context: this,
      url: 'https://services.wihphotels.com/contact/push/form/novaform',
      dataType: 'json',
      data: formpost,
      async: true,
      success: function (rep) {
        if (rep && rep['rep'] != 'ok') {
          me.fx_hideprogress();
          me.fx_fail();
          if (typeof wihp_ga_event_tracking !== 'undefined') {
            wihp_ga_event_tracking.track_failure();
          }
        } else {
          me.fx_hideprogress();
          me.fx_done();
          if (typeof wihp_ga_event_tracking !== 'undefined') {
            wihp_ga_event_tracking.track_success();
          }
        }
      },
      error: function () {
        me.fx_hideprogress();
        me.fx_fail();
        if (typeof wihp_ga_event_tracking !== 'undefined') {
          wihp_ga_event_tracking.track_failure();
        }
      },
    });
  };
  me.mandatory = function (name) {
    me.arrMandatory.push(name);
    var elems = me.form.find('input[displayname="' + name + '"][type=text]');
    elems.each(function () {
      if ($(this).attr('initialvalue') == undefined)
        $(this).attr('initialvalue', $(this).val());
    });
  };
  me.same = function (name1, name2) {
    me.arrSame.push([name1, name2]);
  };
  me.verif = function (name, func) {
    me.arrVerif.push([name, func]);
  };
  me.verifmail = function (name) {
    me.verif(name, function (str) {
      if (str.indexOf('@') == -1) {
        return false;
      } else {
        return true;
      }
    });
  };
  me.runcheck = function () {
    var hashExist = {};
    for (var i = 0; i < me.arrMandatory.length; i++) {
      var elems = me.form.find('[displayname="' + me.arrMandatory[i] + '"]');
      if (elems.length == 0) {
        if (dispname1 != 'undefined') {
          alert('form error, no field named ' + dispname1);
        }
        throw 8;
      }
      elems.each(function () {
        $(this).removeClass('error-form-highlight-field');
        var dispname = $(this).attr('displayname');
        if (!(dispname in hashExist)) {
          hashExist[dispname] = false;
        }
        if (me.getType(this) == 'text') {
          if (
            $.trim($(this).val()) != '' &&
            $.trim($(this).val()) != $(this).attr('initialvalue')
          ) {
            hashExist[dispname] = true;
          }
        }
        if (me.getType(this) == 'checkbox') {
          if ($(this).is(':checked')) {
            hashExist[dispname] = true;
          }
        }
        if (me.getType(this) == 'radio') {
          if ($(this).is(':checked')) {
            hashExist[dispname] = true;
          }
        }
        if (me.getType(this) == 'select') {
          if ($(this).attr('multiple')) {
            if ($(this).find('option:selected').length > 0) {
              hashExist[dispname] = true;
            }
          } else {
            if (this.selectedIndex > 0) {
              hashExist[dispname] = true;
            }
          }
        }
      });
    }
    flag_stop_validation = false;
    for (var item in hashExist) {
      if (hashExist[item] == false) {
        if (!me.highlight_errors) {
          flag_stop_validation = false;
          me.problem(me.form.find('[displayname="' + item + '"]'));
          return false;
        } else {
          flag_stop_validation = true;
          me.form
            .find('[displayname="' + item + '"]')
            .addClass('error-form-highlight-field');
        }
      }
    }
    if (me.highlight_errors && flag_stop_validation) {
      return false;
    }
    for (var i = 0; i < me.arrSame.length; i++) {
      var dispname1 = me.arrSame[i][0];
      var dispname2 = me.arrSame[i][1];
      var elem1 = me.form.find('[displayname="' + dispname1 + '"]');
      var elem2 = me.form.find('[displayname="' + dispname2 + '"]');
      if (elem1.length == 0) {
        alert('form error, no field named ' + dispname1);
        throw 8;
      }
      if (elem2.length == 0) {
        alert('form error, no field named ' + dispname2);
        throw 8;
      }
      var v1 = $.trim(elem1.val());
      var v2 = $.trim(elem2.val());
      if (v1.length == 0 || v1 != v2) {
        me.problem(elem1);
        me.problem(elem2);
        return false;
      }
    }
    for (var i = 0; i < me.arrVerif.length; i++) {
      var dispname1 = me.arrVerif[i][0];
      var checkfunc = me.arrVerif[i][1];
      var elem1 = me.form.find('[displayname="' + dispname1 + '"]');
      if (elem1.length == 0) {
        alert('form error, no field named ' + dispname1);
        throw 8;
      }
      var test = checkfunc(elem1.val());
      if (!test) {
        me.problem(elem1);
        return false;
      }
    }
    var email = $('input[displayname=Email]').val();
    if (!me.validateEmail(email)) {
      me.problem($('input[displayname=Email]'));
      return false;
    }
    if ($('#email_2').length) {
      var email_2 = $('#email_2').val();
      if (!me.validateEmail(email_2) || email != email_2) {
        me.problem($('#email_2'));
        return false;
      }
    }
    return true;
  };
  me.getType = function (elem) {
    var tagName = elem.tagName.toLowerCase();
    if (tagName == 'input') {
      return elem.getAttribute('type').toLowerCase();
    }
    if (tagName == 'textarea') {
      return 'text';
    }
    if (tagName == 'select') {
      return 'select';
    }
  };
  me.problem = function (elem) {
    $('html, body').animate(
      { scrollTop: elem.offset().top - 20 },
      400,
      'swing',
      function () {
        if (me.highlight_errors) {
          $(elem).addClass('error-form-highlight-field');
        } else {
          elem.focus();
          nova_utils.shakeitem(elem);
        }
      }
    );
  };
  me.__construct();
  me.fx_done = function () {
    $('html, body').animate(
      { scrollTop: $('.novaform').offset().top - 300 },
      400,
      'swing'
    );
    $('.novaform').slideUp(200, function () {
      $('.novaformconfirm').slideDown(200);
    });
  };
  me.fx_showprogress = function () {
    $('.novaformprogress').appendTo($('body'));
    $('.novaformprogress').css({
      display: 'block',
      top: this.form.offset().top + 'px',
      left: this.form.offset().left + 'px',
      width: this.form.outerWidth() + 'px',
      height: this.form.outerHeight() + 'px',
    });
  };
  me.fx_hideprogress = function () {
    $('.novaformprogress').fadeOut(200);
  };
  me.validateEmail = function (email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
  };
}
function convertggmap() {
  var me = this;
  if ($('#ggmap').length == 0) return;
  me.ggmapmain = $('#ggmap');
  me.ggmapmap = $('#ggmap_map');
  me.ggmapsidebar = $('#ggmap_sidebar');
  me.arr_infowindow = [];
  me.ln = $('#general_ln').val();
  me.completecallback = function () {};
  me.ggmapdata = $('#googlemap_data');
  me.points = [];
  me.openedPoint = null;
  var google_map_key = 'AIzaSyBhD4IDXOBC5VKn0TWa91BIyJpD3HQXWkc';
  var wihp_global_google_map_key = document.getElementById(
    'wihp-global-google-map-key'
  );
  if (!is_empty(wihp_global_google_map_key)) {
    google_map_key = wihp_global_google_map_key.value;
  }
  me.jsbase =
    'https://maps-api-ssl.google.com/maps/api/js?key=AIzaSyBhD4IDXOBC5VKn0TWa91BIyJpD3HQXWkc&libraries=places&callback=convertggmap_init&language=' +
    me.ln;
  me.__construct = function () {
    window['convertggmap_init'] = function () {
      me.__construct_callback();
    };
    nova_utils.loadjs(me.jsbase);
  };
  me.__construct_callback = function () {
    $.ajax({
      url:
        'https://d24aiv4ryvyi1a.cloudfront.net/commons/nova_ggmap/ggmap.infobubble-compiled.js',
      async: true,
      dataType: 'script',
      success: me.__construct_callback2,
    });
  };
  me.__construct_callback2 = function () {
    me.createMap();
    me.loadPoints();
    me.centerMap();
    me.dropPoints();
    me.addInfoBubble();
    me.openFirstBubble();
    me.misc();
    me.placeService = new google.maps.places.PlacesService(me.map);
    me.distanceService = new google.maps.DistanceMatrixService();
    me.initDirectionService();
    me.setupDirectionPane();
    me.completecallback(me);
  };
  me.misc = function () {
    $(window).resize(function () {
      google.maps.event.trigger(me.map, 'resize');
    });
    google.maps.event.addListener(me.map, 'click', function () {
      me.closeAllInfoBubble();
    });
    $('#direction_close').click(me.openCloseGetDirectionPane);
  };
  me.openFirstBubble = function () {
    google.maps.event.addListener(me.map, 'tilesloaded', function () {
      google.maps.event.clearListeners(me.map, 'tilesloaded');
      me.autozoom = false;
      google.maps.event.trigger(me.points[0].ggmarker, 'click');
    });
  };
  me.addInfoBubble = function () {
    for (var i = 0; i < me.points.length; i++) {
      var point = me.points[i];
      var cc = $(point.html);
      cc.find('[name=bubbleclose]').click(function (event) {
        event.stopPropagation();
        me.closeAllInfoBubble();
      });
      cc.find('a[name=more]').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        me.openCloseMore(point, this);
      });
      cc.find('a[name=directions]').click(function (event) {
        me.openCloseGetDirectionPane();
      });
      cc.find('a[name=nearby]').click(function (event) {
        me.openNearbySearch(point);
      });
      cc.find('a[name=nearbyclose]').click(function () {
        me.openNearbySearch(point, true);
      });
      var morecontentdiv = cc.find('.g_morecontent').clone();
      cc.find('.g_morecontent').remove();
      morecontentdiv.find('a[name=categorysearch]').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        var fitbounds = $(this).attr('fitbounds')
          ? $(this).attr('fitbounds')
          : '0';
        var mode = $(this).attr('mode') ? $(this).attr('mode') : 'walking';
        var types = $(this).attr('types');
        var distance = $(this).attr('distance');
        me.api_ggplace_searchNearby(
          point,
          $(this).html(),
          types,
          distance,
          fitbounds,
          mode
        );
      });
      morecontentdiv.appendTo('body');
      morecontentdiv.css('display', 'none');
      var nearbydiv = cc.find('div.g_nearbydiv');
      point.ggmarker.morecontentdiv = morecontentdiv;
      point.ggmarker.nearbydiv = nearbydiv;
      point.ggmarker.parentPoint = point;
      point.ggmarker.infobubble = new InfoBubble({
        map: me.map,
        content: cc[0],
        shadowStyle: point.infobubblestyle.shadowstyle,
        padding: point.infobubblestyle.padding,
        backgroundColor: point.infobubblestyle.bgcolor,
        borderRadius: point.infobubblestyle.borderradius,
        arrowSize: point.infobubblestyle.arrowsize,
        borderWidth: point.infobubblestyle.borderwidth,
        borderColor: point.infobubblestyle.bordercolor,
        disableAutoPan: false,
        hideCloseButton: true,
        arrowPosition: point.infobubblestyle.arrowposition,
        arrowStyle: point.infobubblestyle.arrowstyle,
        disableAnimation: true,
      });
      google.maps.event.addListener(point.ggmarker, 'click', function () {
        me.openInfoBubble(this);
      });
      var f = function () {
        me.openCloseMore(point, null, true);
      };
      cc.click(f);
      google.maps.event.addListener(me.map, 'dragstart', f);
      google.maps.event.addListener(me.map, 'dblclick', f);
      google.maps.event.addListener(me.map, 'zoom_changed', f);
      google.maps.event.addListener(me.map, 'resize', f);
      google.maps.event.addListener(me.map, 'rightclick', f);
      $('body').click(f);
    }
  };
  me.openNearbySearch = function (point) {
    point.ggmarker.infobubble.close();
    if (point.openNearbySearchOpened || arguments.length == 2) {
      point.ggmarker.nearbydiv.css('display', 'none');
      point.openNearbySearchOpened = false;
    } else {
      point.ggmarker.nearbydiv.css('display', 'block');
      setTimeout(function () {
        point.ggmarker.nearbydiv
          .find('input.g_nearbydivsearchbox')
          .eq(0)
          .focus();
      }, 10);
      point.openNearbySearchOpened = true;
    }
    point.ggmarker.infobubble.open();
  };
  me.openCloseMore = function (point, aObj) {
    if (point.morecontentdivOpened || arguments.length == 3) {
      point.ggmarker.morecontentdiv.css('display', 'none');
      point.morecontentdivOpened = false;
    } else {
      var top = $(aObj).parent().offset().top + $(aObj).parent().height() + 2;
      var left = $(aObj).offset().left;
      var mydiv = point.ggmarker.morecontentdiv.css({
        display: 'block',
        top: top + 'px',
        left: left + 'px',
      });
      point.morecontentdivOpened = true;
    }
  };
  me.autozoom = true;
  me.ntimeopen = 0;
  me.openInfoBubble = function (ggmarker) {
    me.closeAllInfoBubble();
    var f = function () {
      me.autozoom = true;
      ggmarker.infobubble.open(me.map, ggmarker);
      me.openedPoint = ggmarker.parentPoint;
      me.arr_infowindow.push(ggmarker);
    };
    if (me.ntimeopen == 1) {
      me.centerOnPoint(ggmarker.parentPoint);
      google.maps.event.addListener(me.map, 'idle', function () {
        google.maps.event.clearListeners(me.map, 'idle');
        setTimeout(f, 1);
      });
      me.firsttimezoom = false;
    } else {
      f();
    }
    me.ntimeopen++;
  };
  me.closeAllInfoBubble = function () {
    var marker;
    while ((marker = me.arr_infowindow.shift())) {
      me.openCloseMore(marker.parentPoint, null, true);
      marker.infobubble.close();
    }
  };
  me.dropPoints = function () {
    for (var i = 0; i < me.points.length; i++) {
      var point = me.points[i];
      var icon = new google.maps.MarkerImage(
        point.icon,
        new google.maps.Size(point.icon_w, point.icon_h),
        new google.maps.Point(0, 0),
        new google.maps.Point(point.icon_x, point.icon_y)
      );
      point.ggmarker = new google.maps.Marker({
        position: point.gglatlng,
        map: me.map,
        title: point.name,
        icon: icon,
      });
    }
  };
  me.loadPoints = function () {
    me.ggmapdata.find('div[name=point]').each(function () {
      var lat = parseFloat($(this).find('input[name=lat]').val());
      var lng = parseFloat($(this).find('input[name=lng]').val());
      var gglatlng = new google.maps.LatLng(lat, lng);
      var divinf = $(this).find('[name=infobubblestyle]');
      var infobubblestyle = {
        shadowstyle: parseFloat(divinf.find('[name=shadowstyle]').val()),
        padding: parseFloat(divinf.find('[name=padding]').val()),
        bgcolor: divinf.find('[name=bgcolor]').val(),
        borderwidth: parseFloat(divinf.find('[name=borderwidth]').val()),
        bordercolor: divinf.find('[name=bordercolor]').val(),
        borderradius: parseFloat(divinf.find('[name=borderradius]').val()),
        minwidth: parseFloat(divinf.find('[name=minwidth]').val()),
        maxwidth: parseFloat(divinf.find('[name=maxwidth]').val()),
        minheight: parseFloat(divinf.find('[name=minheight]').val()),
        maxheight: parseFloat(divinf.find('[name=maxheight]').val()),
        arrowsize: parseFloat(divinf.find('[name=arrowsize]').val()),
        arrowposition: parseFloat(divinf.find('[name=arrowposition]').val()),
        arrowstyle: parseFloat(divinf.find('[name=arrowstyle]').val()),
      };
      me.points.push({
        name: $(this).find('div[name=name]').html(),
        html: $(this).find('div[name=html]').html(),
        nearbyinfowindow: $(this).find('[name=nearbyinfowindow]').html(),
        icon: $(this).find('input[name=icon]').val(),
        icon_x: parseFloat($(this).find('input[name=icon_x]').val()),
        icon_y: parseFloat($(this).find('input[name=icon_y]').val()),
        icon_w: parseFloat($(this).find('input[name=icon_w]').val()),
        icon_h: parseFloat($(this).find('input[name=icon_h]').val()),
        lat: lat,
        lng: lng,
        zoom: parseFloat($(this).find('input[name=zoom]').val()),
        gglatlng: gglatlng,
        infobubblestyle: infobubblestyle,
      });
    });
  };
  me.centerMap = function () {
    if (me.ggmapdata.find('[name=center_lat]').length > 0) {
      var lat = parseFloat(me.ggmapdata.find('[name=center_lat]').val());
      var lng = parseFloat(me.ggmapdata.find('[name=center_lng]').val());
      var zoom = parseFloat(me.ggmapdata.find('[name=center_zoom]').val());
      me.centerMapInternal(lat, lng, zoom);
    } else {
      if (me.points.length < 2) return;
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < me.points.length; i++) {
        bounds.extend(me.points[i].gglatlng);
      }
      me.map.fitBounds(bounds);
    }
  };
  me.centerOnPoint = function (point) {
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(point.gglatlng);
    me.map.fitBounds(bounds);
    me.map.setZoom(point.zoom);
  };
  me.centerMapInternal = function (lat, lng, zoom) {
    var defcenter = new google.maps.LatLng(lat, lng);
    me.map.setCenter(defcenter);
    me.map.setZoom(zoom);
  };
  me.createMap = function () {
    var myOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: true,
      streetViewControl: true,
      zoom: 14,
      scaleControl: true,
    };
    me.map = new google.maps.Map(me.ggmapmap[0], myOptions);
  };
  me.api_ggplace_searchNearby = function (
    pointSource,
    label,
    types,
    distance,
    fitbounds,
    mode
  ) {
    var request = {
      location: pointSource.gglatlng,
      radius: distance,
      types: types.split('|'),
    };
    me.placeService.search(request, function (results, status) {
      me.api_ggplace_removeplaces();
      me.api_ggplace_addplaces(pointSource, label, results, fitbounds);
    });
  };
  me.arr_nearbypoints = [];
  me.api_ggplace_addplaces = function (
    pointSource,
    category,
    ggplace_json,
    fitbounds
  ) {
    var results = ggplace_json;
    var html = pointSource.nearbyinfowindow;
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(pointSource.gglatlng);
    for (var i = 0; i < results.length && i < 20; i++) {
      var result = results[i];
      var gglatlng = result.geometry.location;
      var name = result.name;
      var reference = result.reference;
      var icon = result.icon.replace('http://', 'https://');
      var myhtml = $(html);
      myhtml.find('.g_nearbyinfowindow_icon img').attr('src', icon);
      myhtml.find('.g_nearbyinfowindow_name').html(name);
      myhtml.find('.g_nearbyinfowindow_category').html(category);
      bounds.extend(gglatlng);
      var newpoint = me.add_nearbymarker(
        pointSource,
        gglatlng,
        name,
        icon,
        reference,
        myhtml[0]
      );
      newpoint.ggmarker.setZIndex(i + 1);
      me.arr_nearbypoints.push(newpoint);
    }
    me.closeAllInfoBubble();
    me.map.fitBounds(bounds);
    pointSource.ggmarker.setZIndex(100);
    if (results.length == 0) {
      alert('no results');
    }
  };
  me.add_nearbymarker = function (
    pointSource,
    latlng,
    name,
    icon,
    reference,
    html
  ) {
    var point = {};
    point.pointSource = pointSource;
    point.reference = reference;
    point.distancecomputed = false;
    point.latlng = latlng;
    point.html = html;
    if (nova_utils.isIE) {
      icon =
        'http://d24aiv4ryvyi1a.cloudfront.net/commons/img/ggmap/ggmap_ie_33.png';
    }
    var icon = new google.maps.MarkerImage(
      icon,
      new google.maps.Size(33, 33),
      new google.maps.Point(0, 0),
      new google.maps.Point(16, 33),
      new google.maps.Size(33, 33)
    );
    point.ggmarker = new google.maps.Marker({
      position: latlng,
      map: me.map,
      title: name,
      icon: icon,
    });
    point.ggmarker.pointParent = point;
    point.ggmarker.infobubble = new google.maps.InfoWindow({ content: html });
    google.maps.event.addListener(point.ggmarker, 'click', function () {
      me.closeOtherNearbyInfoBubble();
      this.infobubble.open(me.map, this);
      var mypoint = this.pointParent;
      if (mypoint.distancecomputed == false) {
        mypoint.distancecomputed = true;
        me.distanceService.getDistanceMatrix(
          {
            origins: [pointSource.gglatlng],
            destinations: [mypoint.latlng],
            travelMode: google.maps.TravelMode.WALKING,
          },
          function (response, status) {
            me.nearbymarker_setdata(mypoint, response);
          }
        );
        var ref = mypoint.reference;
        var service = new google.maps.places.PlacesService(me.map);
        service.getDetails({ reference: mypoint.reference }, function (
          place,
          status
        ) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            me.nearbymarker_setdetails(mypoint, place);
          }
        });
      }
    });
    return point;
  };
  me.nearbymarker_setdetails = function (mypoint, place) {
    var addrcontain = $(mypoint.html).find('.g_nearbyinfowindow_address span');
    if (addrcontain.length > 0) {
      addrcontain.html(place.vicinity);
    } else {
      addrcontain.empty();
    }
    var websitecontain = $(mypoint.html).find(
      '.g_nearbyinfowindow_website span'
    );
    if (websitecontain.length > 0) {
      if ('website' in place && place.website != '') {
        websitecontain.find('a').attr('href', place.website);
      } else {
        websitecontain.empty();
      }
    }
    var phonecontain = $(mypoint.html).find('.g_nearbyinfowindow_phone span');
    if (phonecontain.length > 0) {
      phonecontain.html(place.international_phone_number);
    } else {
      phonecontain.empty();
    }
  };
  me.nearbymarker_setdata = function (mypoint, data) {
    var minutes = Math.round(
      data['rows'][0]['elements'][0]['duration']['value'] / 60
    );
    var meters = data['rows'][0]['elements'][0]['distance']['value'];
    var feet = Math.round(meters * 3.2808399);
    $(mypoint.html).find('.g_nearbyinfowindow_time span').text(minutes);
    $(mypoint.html).find('.g_nearbyinfowindow_dist span').eq(0).text(meters);
    $(mypoint.html).find('.g_nearbyinfowindow_dist span').eq(1).text(feet);
  };
  me.closeOtherNearbyInfoBubble = function () {
    for (var i = 0; i < me.arr_nearbypoints.length; i++) {
      me.arr_nearbypoints[i].ggmarker.infobubble.close();
    }
  };
  me.api_ggplace_removeplaces = function () {
    var i;
    while ((i = me.arr_nearbypoints.shift())) {
      i.ggmarker.infobubble.close();
      i.ggmarker.setMap(null);
    }
  };
  me.setupDirectionPane = function () {
    var input = $('#searchbox_suggest')[0];
    var options = {};
    autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.bindTo('bounds', me.map);
    $('#searchbox_switchpos').click(function () {
      var div1 = $('#direction_divhotel');
      var div2 = $('#direction_divsearch');
      var parent1 = div1.parent();
      var parent2 = div2.parent();
      div1.appendTo(parent2);
      div2.appendTo(parent1);
      var d1pos = div1.attr('position');
      var d2pos = div2.attr('position');
      d1pos = d1pos == 1 ? 2 : 1;
      d2pos = d2pos == 1 ? 2 : 1;
      div1.attr('position', d1pos);
      div2.attr('position', d2pos);
      me.computeDirections();
    });
    $('#searchbox_computedirections').click(function () {
      me.computeDirections();
    });
    $('#searchbox_suggest').keydown(function (event) {
      if (event.which == 13) me.computeDirections();
    });
    $('#direction_mileskm').bind('change keydown', function () {
      me.computeDirections();
    });
  };
  me.initDirectionService = function () {
    me.directionsService = new google.maps.DirectionsService();
    me.directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true,
    });
    me.directionsDisplay.setMap(me.map);
    me.directionsDisplay.setPanel($('#directionsPanel')[0]);
  };
  me.computeDirections = function () {
    me.closeAllInfoBubble();
    me.closeOtherNearbyInfoBubble();
    var mikm = $('#direction_mileskm').val();
    var dposhotel = $('#direction_divhotel').attr('position');
    var start = me.points[0].gglatlng.toUrlValue();
    var end = $('#searchbox_suggest').val();
    if (dposhotel == 2) {
      var pivot = start;
      start = end;
      end = pivot;
    }
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
      unitSystem:
        mikm == 'km'
          ? google.maps.DirectionsUnitSystem.METRIC
          : google.maps.DirectionsUnitSystem.IMPERIAL,
    };
    me.directionsService.route(request, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        me.directionsDisplay.setDirections(response);
      }
    });
  };
  me.directionpanedisplayed = false;
  me.openCloseGetDirectionPane = function () {
    if (me.directionpanedisplayed == false) {
      me.ggmapsidebar.css('display', 'block');
      me.ggmapmap.stop().animate({ width: '70%' }, 300);
      me.ggmapsidebar
        .stop()
        .animate({ width: '30%' }, 300, 'swing', function () {
          google.maps.event.trigger(me.map, 'resize');
        });
      me.directionpanedisplayed = true;
    } else {
      me.ggmapmap.stop().animate({ width: '100%' }, 300);
      me.ggmapsidebar
        .stop()
        .animate({ width: '0%' }, 300, 'swing', function () {
          me.ggmapsidebar.css('display', 'none');
          google.maps.event.trigger(me.map, 'resize');
        });
      me.directionpanedisplayed = false;
    }
  };
  me.__construct();
}
(function ($) {
  $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
    var cfg = { interval: 100, sensitivity: 6, timeout: 0 };
    if (typeof handlerIn === 'object') {
      cfg = $.extend(cfg, handlerIn);
    } else {
      if ($.isFunction(handlerOut)) {
        cfg = $.extend(cfg, {
          over: handlerIn,
          out: handlerOut,
          selector: selector,
        });
      } else {
        cfg = $.extend(cfg, {
          over: handlerIn,
          out: handlerIn,
          selector: handlerOut,
        });
      }
    }
    var cX, cY, pX, pY;
    var track = function (ev) {
      cX = ev.pageX;
      cY = ev.pageY;
    };
    var compare = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      if (
        Math.sqrt((pX - cX) * (pX - cX) + (pY - cY) * (pY - cY)) <
        cfg.sensitivity
      ) {
        $(ob).off('mousemove.hoverIntent', track);
        ob.hoverIntent_s = true;
        return cfg.over.apply(ob, [ev]);
      } else {
        pX = cX;
        pY = cY;
        ob.hoverIntent_t = setTimeout(function () {
          compare(ev, ob);
        }, cfg.interval);
      }
    };
    var delay = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      ob.hoverIntent_s = false;
      return cfg.out.apply(ob, [ev]);
    };
    var handleHover = function (e) {
      var ev = $.extend({}, e);
      var ob = this;
      if (ob.hoverIntent_t) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      }
      if (e.type === 'mouseenter') {
        pX = ev.pageX;
        pY = ev.pageY;
        $(ob).on('mousemove.hoverIntent', track);
        if (!ob.hoverIntent_s) {
          ob.hoverIntent_t = setTimeout(function () {
            compare(ev, ob);
          }, cfg.interval);
        }
      } else {
        $(ob).off('mousemove.hoverIntent', track);
        if (ob.hoverIntent_s) {
          ob.hoverIntent_t = setTimeout(function () {
            delay(ev, ob);
          }, cfg.timeout);
        }
      }
    };
    return this.on(
      {
        'mouseenter.hoverIntent': handleHover,
        'mouseleave.hoverIntent': handleHover,
      },
      cfg.selector
    );
  };
})(jQuery);
!(function (a) {
  'use strict';
  function b(a) {
    return (a || '').toLowerCase();
  }
  var c = '2.1.6';
  (a.fn.cycle = function (c) {
    var d;
    return 0 !== this.length || a.isReady
      ? this.each(function () {
          var d,
            e,
            f,
            g,
            h = a(this),
            i = a.fn.cycle.log;
          if (!h.data('cycle.opts')) {
            (h.data('cycle-log') === !1 ||
              (c && c.log === !1) ||
              (e && e.log === !1)) &&
              (i = a.noop),
              i('--c2 init--'),
              (d = h.data());
            for (var j in d)
              d.hasOwnProperty(j) &&
                /^cycle[A-Z]+/.test(j) &&
                ((g = d[j]),
                (f = j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b)),
                i(f + ':', g, '(' + typeof g + ')'),
                (d[f] = g));
            (e = a.extend({}, a.fn.cycle.defaults, d, c || {})),
              (e.timeoutId = 0),
              (e.paused = e.paused || !1),
              (e.container = h),
              (e._maxZ = e.maxZ),
              (e.API = a.extend({ _container: h }, a.fn.cycle.API)),
              (e.API.log = i),
              (e.API.trigger = function (a, b) {
                return e.container.trigger(a, b), e.API;
              }),
              h.data('cycle.opts', e),
              h.data('cycle.API', e.API),
              e.API.trigger('cycle-bootstrap', [e, e.API]),
              e.API.addInitialSlides(),
              e.API.preInitSlideshow(),
              e.slides.length && e.API.initSlideshow();
          }
        })
      : ((d = { s: this.selector, c: this.context }),
        a.fn.cycle.log('requeuing slideshow (dom not ready)'),
        a(function () {
          a(d.s, d.c).cycle(c);
        }),
        this);
  }),
    (a.fn.cycle.API = {
      opts: function () {
        return this._container.data('cycle.opts');
      },
      addInitialSlides: function () {
        var b = this.opts(),
          c = b.slides;
        (b.slideCount = 0),
          (b.slides = a()),
          (c = c.jquery ? c : b.container.find(c)),
          b.random &&
            c.sort(function () {
              return Math.random() - 0.5;
            }),
          b.API.add(c);
      },
      preInitSlideshow: function () {
        var b = this.opts();
        b.API.trigger('cycle-pre-initialize', [b]);
        var c = a.fn.cycle.transitions[b.fx];
        c && a.isFunction(c.preInit) && c.preInit(b), (b._preInitialized = !0);
      },
      postInitSlideshow: function () {
        var b = this.opts();
        b.API.trigger('cycle-post-initialize', [b]);
        var c = a.fn.cycle.transitions[b.fx];
        c && a.isFunction(c.postInit) && c.postInit(b);
      },
      initSlideshow: function () {
        var b,
          c = this.opts(),
          d = c.container;
        c.API.calcFirstSlide(),
          'static' == c.container.css('position') &&
            c.container.css('position', 'relative'),
          a(c.slides[c.currSlide]).css({
            opacity: 1,
            display: 'block',
            visibility: 'visible',
          }),
          c.API.stackSlides(
            c.slides[c.currSlide],
            c.slides[c.nextSlide],
            !c.reverse
          ),
          c.pauseOnHover &&
            (c.pauseOnHover !== !0 && (d = a(c.pauseOnHover)),
            d.hover(
              function () {
                c.API.pause(!0);
              },
              function () {
                c.API.resume(!0);
              }
            )),
          c.timeout &&
            ((b = c.API.getSlideOpts(c.currSlide)),
            c.API.queueTransition(b, b.timeout + c.delay)),
          (c._initialized = !0),
          c.API.updateView(!0),
          c.API.trigger('cycle-initialized', [c]),
          c.API.postInitSlideshow();
      },
      pause: function (b) {
        var c = this.opts(),
          d = c.API.getSlideOpts(),
          e = c.hoverPaused || c.paused;
        b ? (c.hoverPaused = !0) : (c.paused = !0),
          e ||
            (c.container.addClass('cycle-paused'),
            c.API.trigger('cycle-paused', [c]).log('cycle-paused'),
            d.timeout &&
              (clearTimeout(c.timeoutId),
              (c.timeoutId = 0),
              (c._remainingTimeout -= a.now() - c._lastQueue),
              (c._remainingTimeout < 0 || isNaN(c._remainingTimeout)) &&
                (c._remainingTimeout = void 0)));
      },
      resume: function (a) {
        var b = this.opts(),
          c = !b.hoverPaused && !b.paused;
        a ? (b.hoverPaused = !1) : (b.paused = !1),
          c ||
            (b.container.removeClass('cycle-paused'),
            0 === b.slides.filter(':animated').length &&
              b.API.queueTransition(b.API.getSlideOpts(), b._remainingTimeout),
            b.API.trigger('cycle-resumed', [b, b._remainingTimeout]).log(
              'cycle-resumed'
            ));
      },
      add: function (b, c) {
        var d,
          e = this.opts(),
          f = e.slideCount,
          g = !1;
        'string' == a.type(b) && (b = a.trim(b)),
          a(b).each(function () {
            var b,
              d = a(this);
            c ? e.container.prepend(d) : e.container.append(d),
              e.slideCount++,
              (b = e.API.buildSlideOpts(d)),
              (e.slides = c ? a(d).add(e.slides) : e.slides.add(d)),
              e.API.initSlide(b, d, --e._maxZ),
              d.data('cycle.opts', b),
              e.API.trigger('cycle-slide-added', [e, b, d]);
          }),
          e.API.updateView(!0),
          (g = e._preInitialized && 2 > f && e.slideCount >= 1),
          g &&
            (e._initialized
              ? e.timeout &&
                ((d = e.slides.length),
                (e.nextSlide = e.reverse ? d - 1 : 1),
                e.timeoutId || e.API.queueTransition(e))
              : e.API.initSlideshow());
      },
      calcFirstSlide: function () {
        var a,
          b = this.opts();
        (a = parseInt(b.startingSlide || 0, 10)),
          (a >= b.slides.length || 0 > a) && (a = 0),
          (b.currSlide = a),
          b.reverse
            ? ((b.nextSlide = a - 1),
              b.nextSlide < 0 && (b.nextSlide = b.slides.length - 1))
            : ((b.nextSlide = a + 1),
              b.nextSlide == b.slides.length && (b.nextSlide = 0));
      },
      calcNextSlide: function () {
        var a,
          b = this.opts();
        b.reverse
          ? ((a = b.nextSlide - 1 < 0),
            (b.nextSlide = a ? b.slideCount - 1 : b.nextSlide - 1),
            (b.currSlide = a ? 0 : b.nextSlide + 1))
          : ((a = b.nextSlide + 1 == b.slides.length),
            (b.nextSlide = a ? 0 : b.nextSlide + 1),
            (b.currSlide = a ? b.slides.length - 1 : b.nextSlide - 1));
      },
      calcTx: function (b, c) {
        var d,
          e = b;
        return (
          e._tempFx
            ? (d = a.fn.cycle.transitions[e._tempFx])
            : c && e.manualFx && (d = a.fn.cycle.transitions[e.manualFx]),
          d || (d = a.fn.cycle.transitions[e.fx]),
          (e._tempFx = null),
          (this.opts()._tempFx = null),
          d ||
            ((d = a.fn.cycle.transitions.fade),
            e.API.log('Transition "' + e.fx + '" not found.  Using fade.')),
          d
        );
      },
      prepareTx: function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = this.opts();
        return h.slideCount < 2
          ? void (h.timeoutId = 0)
          : (!a ||
              (h.busy && !h.manualTrump) ||
              (h.API.stopTransition(),
              (h.busy = !1),
              clearTimeout(h.timeoutId),
              (h.timeoutId = 0)),
            void (
              h.busy ||
              ((0 !== h.timeoutId || a) &&
                ((d = h.slides[h.currSlide]),
                (e = h.slides[h.nextSlide]),
                (f = h.API.getSlideOpts(h.nextSlide)),
                (g = h.API.calcTx(f, a)),
                (h._tx = g),
                a && void 0 !== f.manualSpeed && (f.speed = f.manualSpeed),
                h.nextSlide != h.currSlide &&
                (a || (!h.paused && !h.hoverPaused && h.timeout))
                  ? (h.API.trigger('cycle-before', [f, d, e, b]),
                    g.before && g.before(f, d, e, b),
                    (c = function () {
                      (h.busy = !1),
                        h.container.data('cycle.opts') &&
                          (g.after && g.after(f, d, e, b),
                          h.API.trigger('cycle-after', [f, d, e, b]),
                          h.API.queueTransition(f),
                          h.API.updateView(!0));
                    }),
                    (h.busy = !0),
                    g.transition
                      ? g.transition(f, d, e, b, c)
                      : h.API.doTransition(f, d, e, b, c),
                    h.API.calcNextSlide(),
                    h.API.updateView())
                  : h.API.queueTransition(f)))
            ));
      },
      doTransition: function (b, c, d, e, f) {
        var g = b,
          h = a(c),
          i = a(d),
          j = function () {
            i.animate(
              g.animIn || { opacity: 1 },
              g.speed,
              g.easeIn || g.easing,
              f
            );
          };
        i.css(g.cssBefore || {}),
          h.animate(
            g.animOut || {},
            g.speed,
            g.easeOut || g.easing,
            function () {
              h.css(g.cssAfter || {}), g.sync || j();
            }
          ),
          g.sync && j();
      },
      queueTransition: function (b, c) {
        var d = this.opts(),
          e = void 0 !== c ? c : b.timeout;
        return 0 === d.nextSlide && 0 === --d.loop
          ? (d.API.log('terminating; loop=0'),
            (d.timeout = 0),
            e
              ? setTimeout(function () {
                  d.API.trigger('cycle-finished', [d]);
                }, e)
              : d.API.trigger('cycle-finished', [d]),
            void (d.nextSlide = d.currSlide))
          : void 0 !== d.continueAuto &&
            (d.continueAuto === !1 ||
              (a.isFunction(d.continueAuto) && d.continueAuto() === !1))
          ? (d.API.log('terminating automatic transitions'),
            (d.timeout = 0),
            void (d.timeoutId && clearTimeout(d.timeoutId)))
          : void (
              e &&
              ((d._lastQueue = a.now()),
              void 0 === c && (d._remainingTimeout = b.timeout),
              d.paused ||
                d.hoverPaused ||
                (d.timeoutId = setTimeout(function () {
                  d.API.prepareTx(!1, !d.reverse);
                }, e)))
            );
      },
      stopTransition: function () {
        var a = this.opts();
        a.slides.filter(':animated').length &&
          (a.slides.stop(!1, !0),
          a.API.trigger('cycle-transition-stopped', [a])),
          a._tx && a._tx.stopTransition && a._tx.stopTransition(a);
      },
      advanceSlide: function (a) {
        var b = this.opts();
        return (
          clearTimeout(b.timeoutId),
          (b.timeoutId = 0),
          (b.nextSlide = b.currSlide + a),
          b.nextSlide < 0
            ? (b.nextSlide = b.slides.length - 1)
            : b.nextSlide >= b.slides.length && (b.nextSlide = 0),
          b.API.prepareTx(!0, a >= 0),
          !1
        );
      },
      buildSlideOpts: function (c) {
        var d,
          e,
          f = this.opts(),
          g = c.data() || {};
        for (var h in g)
          g.hasOwnProperty(h) &&
            /^cycle[A-Z]+/.test(h) &&
            ((d = g[h]),
            (e = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b)),
            f.API.log(
              '[' + (f.slideCount - 1) + ']',
              e + ':',
              d,
              '(' + typeof d + ')'
            ),
            (g[e] = d));
        (g = a.extend({}, a.fn.cycle.defaults, f, g)),
          (g.slideNum = f.slideCount);
        try {
          delete g.API,
            delete g.slideCount,
            delete g.currSlide,
            delete g.nextSlide,
            delete g.slides;
        } catch (i) {}
        return g;
      },
      getSlideOpts: function (b) {
        var c = this.opts();
        void 0 === b && (b = c.currSlide);
        var d = c.slides[b],
          e = a(d).data('cycle.opts');
        return a.extend({}, c, e);
      },
      initSlide: function (b, c, d) {
        var e = this.opts();
        c.css(b.slideCss || {}),
          d > 0 && c.css('zIndex', d),
          isNaN(b.speed) &&
            (b.speed = a.fx.speeds[b.speed] || a.fx.speeds._default),
          b.sync || (b.speed = b.speed / 2),
          c.addClass(e.slideClass);
      },
      updateView: function (a, b) {
        var c = this.opts();
        if (c._initialized) {
          var d = c.API.getSlideOpts(),
            e = c.slides[c.currSlide];
          (!a &&
            b !== !0 &&
            (c.API.trigger('cycle-update-view-before', [c, d, e]),
            c.updateView < 0)) ||
            (c.slideActiveClass &&
              c.slides
                .removeClass(c.slideActiveClass)
                .eq(c.currSlide)
                .addClass(c.slideActiveClass),
            a &&
              c.hideNonActive &&
              c.slides
                .filter(':not(.' + c.slideActiveClass + ')')
                .css('visibility', 'hidden'),
            0 === c.updateView &&
              setTimeout(function () {
                c.API.trigger('cycle-update-view', [c, d, e, a]);
              }, d.speed / (c.sync ? 2 : 1)),
            0 !== c.updateView &&
              c.API.trigger('cycle-update-view', [c, d, e, a]),
            a && c.API.trigger('cycle-update-view-after', [c, d, e]));
        }
      },
      getComponent: function (b) {
        var c = this.opts(),
          d = c[b];
        return 'string' == typeof d
          ? /^\s*[\>|\+|~]/.test(d)
            ? c.container.find(d)
            : a(d)
          : d.jquery
          ? d
          : a(d);
      },
      stackSlides: function (b, c, d) {
        var e = this.opts();
        b ||
          ((b = e.slides[e.currSlide]),
          (c = e.slides[e.nextSlide]),
          (d = !e.reverse)),
          a(b).css('zIndex', e.maxZ);
        var f,
          g = e.maxZ - 2,
          h = e.slideCount;
        if (d) {
          for (f = e.currSlide + 1; h > f; f++)
            a(e.slides[f]).css('zIndex', g--);
          for (f = 0; f < e.currSlide; f++) a(e.slides[f]).css('zIndex', g--);
        } else {
          for (f = e.currSlide - 1; f >= 0; f--)
            a(e.slides[f]).css('zIndex', g--);
          for (f = h - 1; f > e.currSlide; f--)
            a(e.slides[f]).css('zIndex', g--);
        }
        a(c).css('zIndex', e.maxZ - 1);
      },
      getSlideIndex: function (a) {
        return this.opts().slides.index(a);
      },
    }),
    (a.fn.cycle.log = function () {
      window.console &&
        console.log &&
        console.log('[cycle2] ' + Array.prototype.join.call(arguments, ' '));
    }),
    (a.fn.cycle.version = function () {
      return 'Cycle2: ' + c;
    }),
    (a.fn.cycle.transitions = {
      custom: {},
      none: {
        before: function (a, b, c, d) {
          a.API.stackSlides(c, b, d),
            (a.cssBefore = {
              opacity: 1,
              visibility: 'visible',
              display: 'block',
            });
        },
      },
      fade: {
        before: function (b, c, d, e) {
          var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
          b.API.stackSlides(c, d, e),
            (b.cssBefore = a.extend(f, {
              opacity: 0,
              visibility: 'visible',
              display: 'block',
            })),
            (b.animIn = { opacity: 1 }),
            (b.animOut = { opacity: 0 });
        },
      },
      fadeout: {
        before: function (b, c, d, e) {
          var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
          b.API.stackSlides(c, d, e),
            (b.cssBefore = a.extend(f, {
              opacity: 1,
              visibility: 'visible',
              display: 'block',
            })),
            (b.animOut = { opacity: 0 });
        },
      },
      scrollHorz: {
        before: function (a, b, c, d) {
          a.API.stackSlides(b, c, d);
          var e = a.container.css('overflow', 'hidden').width();
          (a.cssBefore = {
            left: d ? e : -e,
            top: 0,
            opacity: 1,
            visibility: 'visible',
            display: 'block',
          }),
            (a.cssAfter = { zIndex: a._maxZ - 2, left: 0 }),
            (a.animIn = { left: 0 }),
            (a.animOut = { left: d ? -e : e });
        },
      },
    }),
    (a.fn.cycle.defaults = {
      allowWrap: !0,
      autoSelector: '.cycle-slideshow[data-cycle-auto-init!=false]',
      delay: 0,
      easing: null,
      fx: 'fade',
      hideNonActive: !0,
      loop: 0,
      manualFx: void 0,
      manualSpeed: void 0,
      manualTrump: !0,
      maxZ: 100,
      pauseOnHover: !1,
      reverse: !1,
      slideActiveClass: 'cycle-slide-active',
      slideClass: 'cycle-slide',
      slideCss: { position: 'absolute', top: 0, left: 0 },
      slides: '> img',
      speed: 500,
      startingSlide: 0,
      sync: !0,
      timeout: 4e3,
      updateView: 0,
    }),
    a(document).ready(function () {
      a(a.fn.cycle.defaults.autoSelector).cycle();
    });
})(jQuery),
  (function (a) {
    'use strict';
    function b(b, d) {
      var e,
        f,
        g,
        h = d.autoHeight;
      if ('container' == h)
        (f = a(d.slides[d.currSlide]).outerHeight()), d.container.height(f);
      else if (d._autoHeightRatio)
        d.container.height(d.container.width() / d._autoHeightRatio);
      else if ('calc' === h || ('number' == a.type(h) && h >= 0)) {
        if (
          ((g = 'calc' === h ? c(b, d) : h >= d.slides.length ? 0 : h),
          g == d._sentinelIndex)
        )
          return;
        (d._sentinelIndex = g),
          d._sentinel && d._sentinel.remove(),
          (e = a(d.slides[g].cloneNode(!0))),
          e
            .removeAttr('id name rel')
            .find('[id],[name],[rel]')
            .removeAttr('id name rel'),
          e
            .css({ position: 'static', visibility: 'hidden', display: 'block' })
            .prependTo(d.container)
            .addClass('cycle-sentinel cycle-slide')
            .removeClass('cycle-slide-active'),
          e.find('*').css('visibility', 'hidden'),
          (d._sentinel = e);
      }
    }
    function c(b, c) {
      var d = 0,
        e = -1;
      return (
        c.slides.each(function (b) {
          var c = a(this).height();
          c > e && ((e = c), (d = b));
        }),
        d
      );
    }
    function d(b, c, d, e) {
      var f = a(e).outerHeight();
      c.container.animate({ height: f }, c.autoHeightSpeed, c.autoHeightEasing);
    }
    function e(c, f) {
      f._autoHeightOnResize &&
        (a(window).off('resize orientationchange', f._autoHeightOnResize),
        (f._autoHeightOnResize = null)),
        f.container.off('cycle-slide-added cycle-slide-removed', b),
        f.container.off('cycle-destroyed', e),
        f.container.off('cycle-before', d),
        f._sentinel && (f._sentinel.remove(), (f._sentinel = null));
    }
    a.extend(a.fn.cycle.defaults, {
      autoHeight: 0,
      autoHeightSpeed: 250,
      autoHeightEasing: null,
    }),
      a(document).on('cycle-initialized', function (c, f) {
        function g() {
          b(c, f);
        }
        var h,
          i = f.autoHeight,
          j = a.type(i),
          k = null;
        ('string' === j || 'number' === j) &&
          (f.container.on('cycle-slide-added cycle-slide-removed', b),
          f.container.on('cycle-destroyed', e),
          'container' == i
            ? f.container.on('cycle-before', d)
            : 'string' === j &&
              /\d+\:\d+/.test(i) &&
              ((h = i.match(/(\d+)\:(\d+)/)),
              (h = h[1] / h[2]),
              (f._autoHeightRatio = h)),
          'number' !== j &&
            ((f._autoHeightOnResize = function () {
              clearTimeout(k), (k = setTimeout(g, 50));
            }),
            a(window).on('resize orientationchange', f._autoHeightOnResize)),
          setTimeout(g, 30));
      });
  })(jQuery),
  (function (a) {
    'use strict';
    a.extend(a.fn.cycle.defaults, {
      caption: '> .cycle-caption',
      captionTemplate: '{{slideNum}} / {{slideCount}}',
      overlay: '> .cycle-overlay',
      overlayTemplate: '<div>{{title}}</div><div>{{desc}}</div>',
      captionModule: 'caption',
    }),
      a(document).on('cycle-update-view', function (b, c, d, e) {
        if ('caption' === c.captionModule) {
          a.each(['caption', 'overlay'], function () {
            var a = this,
              b = d[a + 'Template'],
              f = c.API.getComponent(a);
            f.length && b
              ? (f.html(c.API.tmpl(b, d, c, e)), f.show())
              : f.hide();
          });
        }
      }),
      a(document).on('cycle-destroyed', function (b, c) {
        var d;
        a.each(['caption', 'overlay'], function () {
          var a = this,
            b = c[a + 'Template'];
          c[a] && b && ((d = c.API.getComponent('caption')), d.empty());
        });
      });
  })(jQuery),
  (function (a) {
    'use strict';
    var b = a.fn.cycle;
    (a.fn.cycle = function (c) {
      var d,
        e,
        f,
        g = a.makeArray(arguments);
      return 'number' == a.type(c)
        ? this.cycle('goto', c)
        : 'string' == a.type(c)
        ? this.each(function () {
            var h;
            return (
              (d = c),
              (f = a(this).data('cycle.opts')),
              void 0 === f
                ? void b.log(
                    'slideshow must be initialized before sending commands; "' +
                      d +
                      '" ignored'
                  )
                : ((d = 'goto' == d ? 'jump' : d),
                  (e = f.API[d]),
                  a.isFunction(e)
                    ? ((h = a.makeArray(g)), h.shift(), e.apply(f.API, h))
                    : void b.log('unknown command: ', d))
            );
          })
        : b.apply(this, arguments);
    }),
      a.extend(a.fn.cycle, b),
      a.extend(b.API, {
        next: function () {
          var a = this.opts();
          if (!a.busy || a.manualTrump) {
            var b = a.reverse ? -1 : 1;
            (a.allowWrap === !1 && a.currSlide + b >= a.slideCount) ||
              (a.API.advanceSlide(b),
              a.API.trigger('cycle-next', [a]).log('cycle-next'));
          }
        },
        prev: function () {
          var a = this.opts();
          if (!a.busy || a.manualTrump) {
            var b = a.reverse ? 1 : -1;
            (a.allowWrap === !1 && a.currSlide + b < 0) ||
              (a.API.advanceSlide(b),
              a.API.trigger('cycle-prev', [a]).log('cycle-prev'));
          }
        },
        destroy: function () {
          this.stop();
          var b = this.opts(),
            c = a.isFunction(a._data) ? a._data : a.noop;
          clearTimeout(b.timeoutId),
            (b.timeoutId = 0),
            b.API.stop(),
            b.API.trigger('cycle-destroyed', [b]).log('cycle-destroyed'),
            b.container.removeData(),
            c(b.container[0], 'parsedAttrs', !1),
            b.retainStylesOnDestroy ||
              (b.container.removeAttr('style'),
              b.slides.removeAttr('style'),
              b.slides.removeClass(b.slideActiveClass)),
            b.slides.each(function () {
              var d = a(this);
              d.removeData(),
                d.removeClass(b.slideClass),
                c(this, 'parsedAttrs', !1);
            });
        },
        jump: function (a, b) {
          var c,
            d = this.opts();
          if (!d.busy || d.manualTrump) {
            var e = parseInt(a, 10);
            if (isNaN(e) || 0 > e || e >= d.slides.length)
              return void d.API.log('goto: invalid slide index: ' + e);
            if (e == d.currSlide)
              return void d.API.log('goto: skipping, already on slide', e);
            (d.nextSlide = e),
              clearTimeout(d.timeoutId),
              (d.timeoutId = 0),
              d.API.log('goto: ', e, ' (zero-index)'),
              (c = d.currSlide < d.nextSlide),
              (d._tempFx = b),
              d.API.prepareTx(!0, c);
          }
        },
        stop: function () {
          var b = this.opts(),
            c = b.container;
          clearTimeout(b.timeoutId),
            (b.timeoutId = 0),
            b.API.stopTransition(),
            b.pauseOnHover &&
              (b.pauseOnHover !== !0 && (c = a(b.pauseOnHover)),
              c.off('mouseenter mouseleave')),
            b.API.trigger('cycle-stopped', [b]).log('cycle-stopped');
        },
        reinit: function () {
          var a = this.opts();
          a.API.destroy(), a.container.cycle();
        },
        remove: function (b) {
          for (
            var c, d, e = this.opts(), f = [], g = 1, h = 0;
            h < e.slides.length;
            h++
          )
            (c = e.slides[h]),
              h == b
                ? (d = c)
                : (f.push(c), (a(c).data('cycle.opts').slideNum = g), g++);
          d &&
            ((e.slides = a(f)),
            e.slideCount--,
            a(d).remove(),
            b == e.currSlide
              ? e.API.advanceSlide(1)
              : b < e.currSlide
              ? e.currSlide--
              : e.currSlide++,
            e.API.trigger('cycle-slide-removed', [e, b, d]).log(
              'cycle-slide-removed'
            ),
            e.API.updateView());
        },
      }),
      a(document).on('click.cycle', '[data-cycle-cmd]', function (b) {
        b.preventDefault();
        var c = a(this),
          d = c.data('cycle-cmd'),
          e = c.data('cycle-context') || '.cycle-slideshow';
        a(e).cycle(d, c.data('cycle-arg'));
      });
  })(jQuery),
  (function (a) {
    'use strict';
    function b(b, c) {
      var d;
      return b._hashFence
        ? void (b._hashFence = !1)
        : ((d = window.location.hash.substring(1)),
          void b.slides.each(function (e) {
            if (a(this).data('cycle-hash') == d) {
              if (c === !0) b.startingSlide = e;
              else {
                var f = b.currSlide < e;
                (b.nextSlide = e), b.API.prepareTx(!0, f);
              }
              return !1;
            }
          }));
    }
    a(document).on('cycle-pre-initialize', function (c, d) {
      b(d, !0),
        (d._onHashChange = function () {
          b(d, !1);
        }),
        a(window).on('hashchange', d._onHashChange);
    }),
      a(document).on('cycle-update-view', function (a, b, c) {
        c.hash &&
          '#' + c.hash != window.location.hash &&
          ((b._hashFence = !0), (window.location.hash = c.hash));
      }),
      a(document).on('cycle-destroyed', function (b, c) {
        c._onHashChange && a(window).off('hashchange', c._onHashChange);
      });
  })(jQuery),
  (function (a) {
    'use strict';
    a.extend(a.fn.cycle.defaults, { loader: !1 }),
      a(document).on('cycle-bootstrap', function (b, c) {
        function d(b, d) {
          function f(b) {
            var f;
            'wait' == c.loader
              ? (h.push(b),
                0 === j &&
                  (h.sort(g),
                  e.apply(c.API, [h, d]),
                  c.container.removeClass('cycle-loading')))
              : ((f = a(c.slides[c.currSlide])),
                e.apply(c.API, [b, d]),
                f.show(),
                c.container.removeClass('cycle-loading'));
          }
          function g(a, b) {
            return a.data('index') - b.data('index');
          }
          var h = [];
          if ('string' == a.type(b)) b = a.trim(b);
          else if ('array' === a.type(b))
            for (var i = 0; i < b.length; i++) b[i] = a(b[i])[0];
          b = a(b);
          var j = b.length;
          j &&
            (b
              .css('visibility', 'hidden')
              .appendTo('body')
              .each(function (b) {
                function g() {
                  0 === --i && (--j, f(k));
                }
                var i = 0,
                  k = a(this),
                  l = k.is('img') ? k : k.find('img');
                return (
                  k.data('index', b),
                  (l = l
                    .filter(':not(.cycle-loader-ignore)')
                    .filter(':not([src=""])')),
                  l.length
                    ? ((i = l.length),
                      void l.each(function () {
                        this.complete
                          ? g()
                          : a(this)
                              .load(function () {
                                g();
                              })
                              .on('error', function () {
                                0 === --i &&
                                  (c.API.log(
                                    'slide skipped; img not loaded:',
                                    this.src
                                  ),
                                  0 === --j &&
                                    'wait' == c.loader &&
                                    e.apply(c.API, [h, d]));
                              });
                      }))
                    : (--j, void h.push(k))
                );
              }),
            j && c.container.addClass('cycle-loading'));
        }
        var e;
        c.loader && ((e = c.API.add), (c.API.add = d));
      });
  })(jQuery),
  (function (a) {
    'use strict';
    function b(b, c, d) {
      var e,
        f = b.API.getComponent('pager');
      f.each(function () {
        var f = a(this);
        if (c.pagerTemplate) {
          var g = b.API.tmpl(c.pagerTemplate, c, b, d[0]);
          e = a(g).appendTo(f);
        } else e = f.children().eq(b.slideCount - 1);
        e.on(b.pagerEvent, function (a) {
          b.pagerEventBubble || a.preventDefault(),
            b.API.page(f, a.currentTarget);
        });
      });
    }
    function c(a, b) {
      var c = this.opts();
      if (!c.busy || c.manualTrump) {
        var d = a.children().index(b),
          e = d,
          f = c.currSlide < e;
        c.currSlide != e &&
          ((c.nextSlide = e),
          (c._tempFx = c.pagerFx),
          c.API.prepareTx(!0, f),
          c.API.trigger('cycle-pager-activated', [c, a, b]));
      }
    }
    a.extend(a.fn.cycle.defaults, {
      pager: '> .cycle-pager',
      pagerActiveClass: 'cycle-pager-active',
      pagerEvent: 'click.cycle',
      pagerEventBubble: void 0,
      pagerTemplate: '<span>&bull;</span>',
    }),
      a(document).on('cycle-bootstrap', function (a, c, d) {
        d.buildPagerLink = b;
      }),
      a(document).on('cycle-slide-added', function (a, b, d, e) {
        b.pager && (b.API.buildPagerLink(b, d, e), (b.API.page = c));
      }),
      a(document).on('cycle-slide-removed', function (b, c, d) {
        if (c.pager) {
          var e = c.API.getComponent('pager');
          e.each(function () {
            var b = a(this);
            a(b.children()[d]).remove();
          });
        }
      }),
      a(document).on('cycle-update-view', function (b, c) {
        var d;
        c.pager &&
          ((d = c.API.getComponent('pager')),
          d.each(function () {
            a(this)
              .children()
              .removeClass(c.pagerActiveClass)
              .eq(c.currSlide)
              .addClass(c.pagerActiveClass);
          }));
      }),
      a(document).on('cycle-destroyed', function (a, b) {
        var c = b.API.getComponent('pager');
        c && (c.children().off(b.pagerEvent), b.pagerTemplate && c.empty());
      });
  })(jQuery),
  (function (a) {
    'use strict';
    a.extend(a.fn.cycle.defaults, {
      next: '> .cycle-next',
      nextEvent: 'click.cycle',
      disabledClass: 'disabled',
      prev: '> .cycle-prev',
      prevEvent: 'click.cycle',
      swipe: !1,
    }),
      a(document).on('cycle-initialized', function (a, b) {
        if (
          (b.API.getComponent('next').on(b.nextEvent, function (a) {
            a.preventDefault(), b.API.next();
          }),
          b.API.getComponent('prev').on(b.prevEvent, function (a) {
            a.preventDefault(), b.API.prev();
          }),
          b.swipe)
        ) {
          var c = b.swipeVert
              ? 'swipeUp.cycle'
              : 'swipeLeft.cycle swipeleft.cycle',
            d = b.swipeVert
              ? 'swipeDown.cycle'
              : 'swipeRight.cycle swiperight.cycle';
          b.container.on(c, function () {
            (b._tempFx = b.swipeFx), b.API.next();
          }),
            b.container.on(d, function () {
              (b._tempFx = b.swipeFx), b.API.prev();
            });
        }
      }),
      a(document).on('cycle-update-view', function (a, b) {
        if (!b.allowWrap) {
          var c = b.disabledClass,
            d = b.API.getComponent('next'),
            e = b.API.getComponent('prev'),
            f = b._prevBoundry || 0,
            g = void 0 !== b._nextBoundry ? b._nextBoundry : b.slideCount - 1;
          b.currSlide == g
            ? d.addClass(c).prop('disabled', !0)
            : d.removeClass(c).prop('disabled', !1),
            b.currSlide === f
              ? e.addClass(c).prop('disabled', !0)
              : e.removeClass(c).prop('disabled', !1);
        }
      }),
      a(document).on('cycle-destroyed', function (a, b) {
        b.API.getComponent('prev').off(b.nextEvent),
          b.API.getComponent('next').off(b.prevEvent),
          b.container.off(
            'swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle'
          );
      });
  })(jQuery),
  (function (a) {
    'use strict';
    a.extend(a.fn.cycle.defaults, { progressive: !1 }),
      a(document).on('cycle-pre-initialize', function (b, c) {
        if (c.progressive) {
          var d,
            e,
            f = c.API,
            g = f.next,
            h = f.prev,
            i = f.prepareTx,
            j = a.type(c.progressive);
          if ('array' == j) d = c.progressive;
          else if (a.isFunction(c.progressive)) d = c.progressive(c);
          else if ('string' == j) {
            if (((e = a(c.progressive)), (d = a.trim(e.html())), !d)) return;
            if (/^(\[)/.test(d))
              try {
                d = a.parseJSON(d);
              } catch (k) {
                return void f.log('error parsing progressive slides', k);
              }
            else
              (d = d.split(new RegExp(e.data('cycle-split') || '\n'))),
                d[d.length - 1] || d.pop();
          }
          i &&
            (f.prepareTx = function (a, b) {
              var e, f;
              return a || 0 === d.length
                ? void i.apply(c.API, [a, b])
                : void (b && c.currSlide == c.slideCount - 1
                    ? ((f = d[0]),
                      (d = d.slice(1)),
                      c.container.one('cycle-slide-added', function (a, b) {
                        setTimeout(function () {
                          b.API.advanceSlide(1);
                        }, 50);
                      }),
                      c.API.add(f))
                    : b || 0 !== c.currSlide
                    ? i.apply(c.API, [a, b])
                    : ((e = d.length - 1),
                      (f = d[e]),
                      (d = d.slice(0, e)),
                      c.container.one('cycle-slide-added', function (a, b) {
                        setTimeout(function () {
                          (b.currSlide = 1), b.API.advanceSlide(-1);
                        }, 50);
                      }),
                      c.API.add(f, !0)));
            }),
            g &&
              (f.next = function () {
                var a = this.opts();
                if (d.length && a.currSlide == a.slideCount - 1) {
                  var b = d[0];
                  (d = d.slice(1)),
                    a.container.one('cycle-slide-added', function (a, b) {
                      g.apply(b.API), b.container.removeClass('cycle-loading');
                    }),
                    a.container.addClass('cycle-loading'),
                    a.API.add(b);
                } else g.apply(a.API);
              }),
            h &&
              (f.prev = function () {
                var a = this.opts();
                if (d.length && 0 === a.currSlide) {
                  var b = d.length - 1,
                    c = d[b];
                  (d = d.slice(0, b)),
                    a.container.one('cycle-slide-added', function (a, b) {
                      (b.currSlide = 1),
                        b.API.advanceSlide(-1),
                        b.container.removeClass('cycle-loading');
                    }),
                    a.container.addClass('cycle-loading'),
                    a.API.add(c, !0);
                } else h.apply(a.API);
              });
        }
      });
  })(jQuery),
  (function (a) {
    'use strict';
    a.extend(a.fn.cycle.defaults, { tmplRegex: '{{((.)?.*?)}}' }),
      a.extend(a.fn.cycle.API, {
        tmpl: function (b, c) {
          var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, 'g'),
            e = a.makeArray(arguments);
          return (
            e.shift(),
            b.replace(d, function (b, c) {
              var d,
                f,
                g,
                h,
                i = c.split('.');
              for (d = 0; d < e.length; d++)
                if ((g = e[d])) {
                  if (i.length > 1)
                    for (h = g, f = 0; f < i.length; f++)
                      (g = h), (h = h[i[f]] || c);
                  else h = g[c];
                  if (a.isFunction(h)) return h.apply(g, e);
                  if (void 0 !== h && null !== h && h != c) return h;
                }
              return c;
            })
          );
        },
      });
  })(jQuery);
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = 'dist/'), t(0);
  })([
    function (e, t, n) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = document.all && !window.atob,
        j = {
          offset: 120,
          delay: 0,
          easing: 'ease',
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: 'DOMContentLoaded',
        },
        O = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, j)), (0, b.default)(w, j.once), w;
        },
        S = function () {
          (w = (0, h.default)()), O();
        },
        _ = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute('data-aos'),
              e.node.removeAttribute('data-aos-easing'),
              e.node.removeAttribute('data-aos-duration'),
              e.node.removeAttribute('data-aos-delay');
          });
        },
        E = function (e) {
          return (
            e === !0 ||
            ('mobile' === e && p.default.mobile()) ||
            ('phone' === e && p.default.phone()) ||
            ('tablet' === e && p.default.tablet()) ||
            ('function' == typeof e && e() === !0)
          );
        },
        z = function (e) {
          return (
            (j = i(j, e)),
            (w = (0, h.default)()),
            E(j.disable) || x
              ? _()
              : (document
                  .querySelector('body')
                  .setAttribute('data-aos-easing', j.easing),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-duration', j.duration),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-delay', j.delay),
                'DOMContentLoaded' === j.startEvent &&
                ['complete', 'interactive'].indexOf(document.readyState) > -1
                  ? O(!0)
                  : 'load' === j.startEvent
                  ? window.addEventListener(j.startEvent, function () {
                      O(!0);
                    })
                  : document.addEventListener(j.startEvent, function () {
                      O(!0);
                    }),
                window.addEventListener('resize', (0, f.default)(O, 50, !0)),
                window.addEventListener(
                  'orientationchange',
                  (0, f.default)(O, 50, !0)
                ),
                window.addEventListener(
                  'scroll',
                  (0, u.default)(function () {
                    (0, b.default)(w, j.once);
                  }, 99)
                ),
                document.addEventListener('DOMNodeRemoved', function (e) {
                  var t = e.target;
                  t &&
                    1 === t.nodeType &&
                    t.hasAttribute &&
                    t.hasAttribute('data-aos') &&
                    (0, f.default)(S, 50, !0);
                }),
                (0, d.default)('[data-aos]', S),
                w)
          );
        };
      e.exports = { init: z, refresh: O, refreshHard: S };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        'use strict';
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(s, t)), S ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return _ ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (_ && o >= y);
          }
          function s() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
          }
          function d(e) {
            return (h = void 0), E && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (_) return (h = setTimeout(s, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            S = !1,
            _ = !1,
            E = !0;
          if ('function' != typeof e) throw new TypeError(f);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((S = !!n.leading),
              (_ = 'maxWait' in n),
              (y = _ ? x(u(n.maxWait) || 0, t) : y),
              (E = 'trailing' in n ? !!n.trailing : E)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ('function' != typeof e) throw new TypeError(f);
          return (
            i(o) &&
              ((r = 'leading' in o ? !!o.leading : r),
              (a = 'trailing' in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          );
        }
        function i(e) {
          var t = 'undefined' == typeof e ? 'undefined' : c(e);
          return !!e && ('object' == t || 'function' == t);
        }
        function r(e) {
          return (
            !!e && 'object' == ('undefined' == typeof e ? 'undefined' : c(e))
          );
        }
        function a(e) {
          return (
            'symbol' == ('undefined' == typeof e ? 'undefined' : c(e)) ||
            (r(e) && k.call(e) == d)
          );
        }
        function u(e) {
          if ('number' == typeof e) return e;
          if (a(e)) return s;
          if (i(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, '');
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
        }
        var c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          f = 'Expected a function',
          s = NaN,
          d = '[object Symbol]',
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            'object' == ('undefined' == typeof t ? 'undefined' : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            'object' == ('undefined' == typeof self ? 'undefined' : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function('return this')(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      (function (t) {
        'use strict';
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(s, t)), S ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return _ ? x(i, y - o) : i;
          }
          function f(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (_ && o >= y);
          }
          function s() {
            var e = j();
            return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
          }
          function d(e) {
            return (h = void 0), E && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = f(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (_) return (h = setTimeout(s, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            S = !1,
            _ = !1,
            E = !0;
          if ('function' != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((S = !!n.leading),
              (_ = 'maxWait' in n),
              (y = _ ? k(a(n.maxWait) || 0, t) : y),
              (E = 'trailing' in n ? !!n.trailing : E)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = 'undefined' == typeof e ? 'undefined' : u(e);
          return !!e && ('object' == t || 'function' == t);
        }
        function i(e) {
          return (
            !!e && 'object' == ('undefined' == typeof e ? 'undefined' : u(e))
          );
        }
        function r(e) {
          return (
            'symbol' == ('undefined' == typeof e ? 'undefined' : u(e)) ||
            (i(e) && w.call(e) == s)
          );
        }
        function a(e) {
          if ('number' == typeof e) return e;
          if (r(e)) return f;
          if (o(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, '');
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
        }
        var u =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          c = 'Expected a function',
          f = NaN,
          s = '[object Symbol]',
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            'object' == ('undefined' == typeof t ? 'undefined' : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            'object' == ('undefined' == typeof self ? 'undefined' : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function('return this')(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      'use strict';
      function n(e, t) {
        a.push({ selector: e, fn: t }),
          !u &&
            r &&
            ((u = new r(o)),
            u.observe(i.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            })),
          o();
      }
      function o() {
        for (var e, t, n = 0, o = a.length; n < o; n++) {
          (e = a[n]), (t = i.querySelectorAll(e.selector));
          for (var r, u = 0, c = t.length; u < c; u++)
            (r = t[u]), r.ready || ((r.ready = !0), e.fn.call(r, r));
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = window.document,
        r = window.MutationObserver || window.WebKitMutationObserver,
        a = [],
        u = void 0;
      t.default = n;
    },
    function (e, t) {
      'use strict';
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || '';
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: 'phone',
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: 'mobile',
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: 'tablet',
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new f();
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = function (e, t, n) {
          var o = e.node.getAttribute('data-aos-once');
          t > e.position
            ? e.node.classList.add('aos-animate')
            : 'undefined' != typeof o &&
              ('false' === o || (!n && 'true' !== o)) &&
              e.node.classList.remove('aos-animate');
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add('aos-init'),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute('data-aos-offset'),
              anchor: e.getAttribute('data-aos-anchor'),
              anchorPlacement: e.getAttribute('data-aos-anchor-placement'),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case 'top-bottom':
              break;
            case 'center-bottom':
              n += e.offsetHeight / 2;
              break;
            case 'bottom-bottom':
              n += e.offsetHeight;
              break;
            case 'top-center':
              n += i / 2;
              break;
            case 'bottom-center':
              n += i / 2 + e.offsetHeight;
              break;
            case 'center-center':
              n += i / 2 + e.offsetHeight / 2;
              break;
            case 'top-top':
              n += i;
              break;
            case 'bottom-top':
              n += e.offsetHeight + i;
              break;
            case 'center-top':
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      };
      t.default = n;
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = function (e) {
        e = e || document.querySelectorAll('[data-aos]');
        var t = [];
        return (
          [].forEach.call(e, function (e, n) {
            t.push({ node: e });
          }),
          t
        );
      };
      t.default = n;
    },
  ]);
});
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global.PerfectScrollbar = factory());
})(this, function () {
  'use strict';
  function get(element) {
    return getComputedStyle(element);
  }
  function set(element, obj) {
    for (var key in obj) {
      var val = obj[key];
      if (typeof val === 'number') {
        val = val + 'px';
      }
      element.style[key] = val;
    }
    return element;
  }
  function div(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
  }
  var elMatches =
    Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector;
  function matches(element, query) {
    if (!elMatches) {
      throw new Error('No element matching method supported');
    }
    return elMatches.call(element, query);
  }
  function remove(element) {
    if (element.remove) {
      element.remove();
    } else {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }
  function queryChildren(element, selector) {
    return Array.prototype.filter.call(element.children, function (child) {
      return matches(child, selector);
    });
  }
  var EventElement = function EventElement(element) {
    this.element = element;
    this.handlers = {};
  };
  var prototypeAccessors$1 = { isEmpty: { configurable: true } };
  EventElement.prototype.bind = function bind(eventName, handler) {
    if (typeof this.handlers[eventName] === 'undefined') {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(handler);
    this.element.addEventListener(eventName, handler, false);
  };
  EventElement.prototype.unbind = function unbind(eventName, target) {
    var this$1 = this;
    this.handlers[eventName] = this.handlers[eventName].filter(function (
      handler
    ) {
      if (target && handler !== target) {
        return true;
      }
      this$1.element.removeEventListener(eventName, handler, false);
      return false;
    });
  };
  EventElement.prototype.unbindAll = function unbindAll() {
    var this$1 = this;
    for (var name in this$1.handlers) {
      this$1.unbind(name);
    }
  };
  prototypeAccessors$1.isEmpty.get = function () {
    var this$1 = this;
    return Object.keys(this.handlers).every(function (key) {
      return this$1.handlers[key].length === 0;
    });
  };
  Object.defineProperties(EventElement.prototype, prototypeAccessors$1);
  var EventManager = function EventManager() {
    this.eventElements = [];
  };
  EventManager.prototype.eventElement = function eventElement(element) {
    var ee = this.eventElements.filter(function (ee) {
      return ee.element === element;
    })[0];
    if (!ee) {
      ee = new EventElement(element);
      this.eventElements.push(ee);
    }
    return ee;
  };
  EventManager.prototype.bind = function bind(element, eventName, handler) {
    this.eventElement(element).bind(eventName, handler);
  };
  EventManager.prototype.unbind = function unbind(element, eventName, handler) {
    var ee = this.eventElement(element);
    ee.unbind(eventName, handler);
    if (ee.isEmpty) {
      this.eventElements.splice(this.eventElements.indexOf(ee), 1);
    }
  };
  EventManager.prototype.unbindAll = function unbindAll() {
    this.eventElements.forEach(function (e) {
      return e.unbindAll();
    });
    this.eventElements = [];
  };
  EventManager.prototype.once = function once(element, eventName, handler) {
    var ee = this.eventElement(element);
    var onceHandler = function (evt) {
      ee.unbind(eventName, onceHandler);
      handler(evt);
    };
    ee.bind(eventName, onceHandler);
  };
  var scrollingClassTimeout = { x: null, y: null };
  function setScrollingClass(element, y) {
    var cls = 'ps--scrolling-' + y;
    if (element.classList.contains(cls)) {
      clearTimeout(scrollingClassTimeout[y]);
    } else {
      element.classList.add(cls);
    }
    scrollingClassTimeout[y] = setTimeout(function () {
      return element.classList.remove(cls);
    }, 1000);
  }
  function createEvent(name) {
    if (typeof window.CustomEvent === 'function') {
      return new CustomEvent(name);
    } else {
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(name, false, false, undefined);
      return evt;
    }
  }
  var updateScroll = function (i, axis, value) {
    var fields;
    if (axis === 'top') {
      fields = [
        'contentHeight',
        'containerHeight',
        'scrollTop',
        'y',
        'up',
        'down',
      ];
    } else if (axis === 'left') {
      fields = [
        'contentWidth',
        'containerWidth',
        'scrollLeft',
        'x',
        'left',
        'right',
      ];
    } else {
      throw new Error('A proper axis should be provided');
    }
    updateScroll$1(i, value, fields);
  };
  function updateScroll$1(i, value, ref) {
    var contentHeight = ref[0];
    var containerHeight = ref[1];
    var scrollTop = ref[2];
    var y = ref[3];
    var up = ref[4];
    var down = ref[5];
    var element = i.element;
    var reach = 0;
    var mitigated = false;
    if (value <= 0) {
      value = 0;
      reach = -1;
    }
    if (value >= i[contentHeight] - i[containerHeight]) {
      value = i[contentHeight] - i[containerHeight];
      if (value - element[scrollTop] <= 2) {
        mitigated = true;
      }
      reach = 1;
    }
    var diff = element[scrollTop] - value;
    if (diff) {
      element.dispatchEvent(createEvent('ps-scroll-' + y));
      if (diff > 0) {
        element.dispatchEvent(createEvent('ps-scroll-' + up));
      } else {
        element.dispatchEvent(createEvent('ps-scroll-' + down));
      }
      if (!mitigated) {
        element[scrollTop] = value;
      }
      if (reach) {
        element.dispatchEvent(
          createEvent('ps-' + y + '-reach-' + (reach > 0 ? 'end' : 'start'))
        );
      }
      setScrollingClass(element, y);
    }
  }
  function toInt(x) {
    return parseInt(x, 10) || 0;
  }
  function isEditable(el) {
    return (
      matches(el, 'input,[contenteditable]') ||
      matches(el, 'select,[contenteditable]') ||
      matches(el, 'textarea,[contenteditable]') ||
      matches(el, 'button,[contenteditable]')
    );
  }
  function outerWidth(element) {
    var styles = get(element);
    return (
      toInt(styles.width) +
      toInt(styles.paddingLeft) +
      toInt(styles.paddingRight) +
      toInt(styles.borderLeftWidth) +
      toInt(styles.borderRightWidth)
    );
  }
  var env = {
    isWebKit: document && 'WebkitAppearance' in document.documentElement.style,
    supportsTouch:
      window &&
      ('ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    supportsIePointer: navigator && navigator.msMaxTouchPoints,
  };
  var updateGeometry = function (i) {
    var element = i.element;
    i.containerWidth = element.clientWidth;
    i.containerHeight = element.clientHeight;
    i.contentWidth = element.scrollWidth;
    i.contentHeight = element.scrollHeight;
    if (!element.contains(i.scrollbarXRail)) {
      queryChildren(element, '.ps__rail-x').forEach(function (el) {
        return remove(el);
      });
      element.appendChild(i.scrollbarXRail);
    }
    if (!element.contains(i.scrollbarYRail)) {
      queryChildren(element, '.ps__rail-y').forEach(function (el) {
        return remove(el);
      });
      element.appendChild(i.scrollbarYRail);
    }
    if (
      !i.settings.suppressScrollX &&
      i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
    ) {
      i.scrollbarXActive = true;
      i.railXWidth = i.containerWidth - i.railXMarginWidth;
      i.railXRatio = i.containerWidth / i.railXWidth;
      i.scrollbarXWidth = getThumbSize(
        i,
        toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
      );
      i.scrollbarXLeft = toInt(
        ((i.negativeScrollAdjustment + element.scrollLeft) *
          (i.railXWidth - i.scrollbarXWidth)) /
          (i.contentWidth - i.containerWidth)
      );
    } else {
      i.scrollbarXActive = false;
    }
    if (
      !i.settings.suppressScrollY &&
      i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
    ) {
      i.scrollbarYActive = true;
      i.railYHeight = i.containerHeight - i.railYMarginHeight;
      i.railYRatio = i.containerHeight / i.railYHeight;
      i.scrollbarYHeight = getThumbSize(
        i,
        toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
      );
      i.scrollbarYTop = toInt(
        (element.scrollTop * (i.railYHeight - i.scrollbarYHeight)) /
          (i.contentHeight - i.containerHeight)
      );
    } else {
      i.scrollbarYActive = false;
    }
    if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
      i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
    }
    if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
      i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
    }
    updateCss(element, i);
    if (i.scrollbarXActive) {
      element.classList.add('ps--active-x');
    } else {
      element.classList.remove('ps--active-x');
      i.scrollbarXWidth = 0;
      i.scrollbarXLeft = 0;
      updateScroll(i, 'left', 0);
    }
    if (i.scrollbarYActive) {
      element.classList.add('ps--active-y');
    } else {
      element.classList.remove('ps--active-y');
      i.scrollbarYHeight = 0;
      i.scrollbarYTop = 0;
      updateScroll(i, 'top', 0);
    }
  };
  function getThumbSize(i, thumbSize) {
    if (i.settings.minScrollbarLength) {
      thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
    }
    if (i.settings.maxScrollbarLength) {
      thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
    }
    return thumbSize;
  }
  function updateCss(element, i) {
    var xRailOffset = { width: i.railXWidth };
    if (i.isRtl) {
      xRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth -
        i.contentWidth;
    } else {
      xRailOffset.left = element.scrollLeft;
    }
    if (i.isScrollbarXUsingBottom) {
      xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
    } else {
      xRailOffset.top = i.scrollbarXTop + element.scrollTop;
    }
    set(i.scrollbarXRail, xRailOffset);
    var yRailOffset = { top: element.scrollTop, height: i.railYHeight };
    if (i.isScrollbarYUsingRight) {
      if (i.isRtl) {
        yRailOffset.right =
          i.contentWidth -
          (i.negativeScrollAdjustment + element.scrollLeft) -
          i.scrollbarYRight -
          i.scrollbarYOuterWidth;
      } else {
        yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
      }
    } else {
      if (i.isRtl) {
        yRailOffset.left =
          i.negativeScrollAdjustment +
          element.scrollLeft +
          i.containerWidth * 2 -
          i.contentWidth -
          i.scrollbarYLeft -
          i.scrollbarYOuterWidth;
      } else {
        yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
      }
    }
    set(i.scrollbarYRail, yRailOffset);
    set(i.scrollbarX, {
      left: i.scrollbarXLeft,
      width: i.scrollbarXWidth - i.railBorderXWidth,
    });
    set(i.scrollbarY, {
      top: i.scrollbarYTop,
      height: i.scrollbarYHeight - i.railBorderYWidth,
    });
  }
  var clickRail = function (i) {
    var element = i.element;
    i.event.bind(i.scrollbarY, 'mousedown', function (e) {
      return e.stopPropagation();
    });
    i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
      var positionTop =
        e.pageY -
        window.pageYOffset -
        i.scrollbarYRail.getBoundingClientRect().top;
      var direction = positionTop > i.scrollbarYTop ? 1 : -1;
      updateScroll(i, 'top', element.scrollTop + direction * i.containerHeight);
      updateGeometry(i);
      e.stopPropagation();
    });
    i.event.bind(i.scrollbarX, 'mousedown', function (e) {
      return e.stopPropagation();
    });
    i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
      var positionLeft =
        e.pageX -
        window.pageXOffset -
        i.scrollbarXRail.getBoundingClientRect().left;
      var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
      updateScroll(
        i,
        'left',
        element.scrollLeft + direction * i.containerWidth
      );
      updateGeometry(i);
      e.stopPropagation();
    });
  };
  var dragThumb = function (i) {
    bindMouseScrollHandler(i, [
      'containerWidth',
      'contentWidth',
      'pageX',
      'railXWidth',
      'scrollbarX',
      'scrollbarXWidth',
      'scrollLeft',
      'left',
    ]);
    bindMouseScrollHandler(i, [
      'containerHeight',
      'contentHeight',
      'pageY',
      'railYHeight',
      'scrollbarY',
      'scrollbarYHeight',
      'scrollTop',
      'top',
    ]);
  };
  function bindMouseScrollHandler(i, ref) {
    var containerHeight = ref[0];
    var contentHeight = ref[1];
    var pageY = ref[2];
    var railYHeight = ref[3];
    var scrollbarY = ref[4];
    var scrollbarYHeight = ref[5];
    var scrollTop = ref[6];
    var top = ref[7];
    var element = i.element;
    var startingScrollTop = null;
    var startingMousePageY = null;
    var scrollBy = null;
    function mouseMoveHandler(e) {
      updateScroll(
        i,
        top,
        startingScrollTop + scrollBy * (e[pageY] - startingMousePageY)
      );
      updateGeometry(i);
      e.stopPropagation();
      e.preventDefault();
    }
    function mouseUpHandler() {
      i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    }
    i.event.bind(i[scrollbarY], 'mousedown', function (e) {
      startingScrollTop = element[scrollTop];
      startingMousePageY = e[pageY];
      scrollBy =
        (i[contentHeight] - i[containerHeight]) /
        (i[railYHeight] - i[scrollbarYHeight]);
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.stopPropagation();
      e.preventDefault();
    });
  }
  var keyboard = function (i) {
    var element = i.element;
    var elementHovered = function () {
      return matches(element, ':hover');
    };
    var scrollbarFocused = function () {
      return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus');
    };
    function shouldPreventDefault(deltaX, deltaY) {
      var scrollTop = element.scrollTop;
      if (deltaX === 0) {
        if (!i.scrollbarYActive) {
          return false;
        }
        if (
          (scrollTop === 0 && deltaY > 0) ||
          (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
        ) {
          return !i.settings.wheelPropagation;
        }
      }
      var scrollLeft = element.scrollLeft;
      if (deltaY === 0) {
        if (!i.scrollbarXActive) {
          return false;
        }
        if (
          (scrollLeft === 0 && deltaX < 0) ||
          (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
        ) {
          return !i.settings.wheelPropagation;
        }
      }
      return true;
    }
    i.event.bind(i.ownerDocument, 'keydown', function (e) {
      if (
        (e.isDefaultPrevented && e.isDefaultPrevented()) ||
        e.defaultPrevented
      ) {
        return;
      }
      if (!elementHovered() && !scrollbarFocused()) {
        return;
      }
      var activeElement = document.activeElement
        ? document.activeElement
        : i.ownerDocument.activeElement;
      if (activeElement) {
        if (activeElement.tagName === 'IFRAME') {
          activeElement = activeElement.contentDocument.activeElement;
        } else {
          while (activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
          }
        }
        if (isEditable(activeElement)) {
          return;
        }
      }
      var deltaX = 0;
      var deltaY = 0;
      switch (e.which) {
        case 37:
          if (e.metaKey) {
            deltaX = -i.contentWidth;
          } else if (e.altKey) {
            deltaX = -i.containerWidth;
          } else {
            deltaX = -30;
          }
          break;
        case 38:
          if (e.metaKey) {
            deltaY = i.contentHeight;
          } else if (e.altKey) {
            deltaY = i.containerHeight;
          } else {
            deltaY = 30;
          }
          break;
        case 39:
          if (e.metaKey) {
            deltaX = i.contentWidth;
          } else if (e.altKey) {
            deltaX = i.containerWidth;
          } else {
            deltaX = 30;
          }
          break;
        case 40:
          if (e.metaKey) {
            deltaY = -i.contentHeight;
          } else if (e.altKey) {
            deltaY = -i.containerHeight;
          } else {
            deltaY = -30;
          }
          break;
        case 32:
          if (e.shiftKey) {
            deltaY = i.containerHeight;
          } else {
            deltaY = -i.containerHeight;
          }
          break;
        case 33:
          deltaY = i.containerHeight;
          break;
        case 34:
          deltaY = -i.containerHeight;
          break;
        case 36:
          deltaY = i.contentHeight;
          break;
        case 35:
          deltaY = -i.contentHeight;
          break;
        default:
          return;
      }
      if (i.settings.suppressScrollX && deltaX !== 0) {
        return;
      }
      if (i.settings.suppressScrollY && deltaY !== 0) {
        return;
      }
      updateScroll(i, 'top', element.scrollTop - deltaY);
      updateScroll(i, 'left', element.scrollLeft + deltaX);
      updateGeometry(i);
      if (shouldPreventDefault(deltaX, deltaY)) {
        e.preventDefault();
      }
    });
  };
  var childConsumeClass = 'ps__child--consume';
  var wheel = function (i) {
    var element = i.element;
    function shouldPreventDefault(deltaX, deltaY) {
      var scrollTop = element.scrollTop;
      if (deltaX === 0) {
        if (!i.scrollbarYActive) {
          return false;
        }
        if (
          (scrollTop === 0 && deltaY > 0) ||
          (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
        ) {
          return !i.settings.wheelPropagation;
        }
      }
      var scrollLeft = element.scrollLeft;
      if (deltaY === 0) {
        if (!i.scrollbarXActive) {
          return false;
        }
        if (
          (scrollLeft === 0 && deltaX < 0) ||
          (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
        ) {
          return !i.settings.wheelPropagation;
        }
      }
      return true;
    }
    function getDeltaFromEvent(e) {
      var deltaX = e.deltaX;
      var deltaY = -1 * e.deltaY;
      if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
        deltaX = (-1 * e.wheelDeltaX) / 6;
        deltaY = e.wheelDeltaY / 6;
      }
      if (e.deltaMode && e.deltaMode === 1) {
        deltaX *= 10;
        deltaY *= 10;
      }
      if (deltaX !== deltaX && deltaY !== deltaY) {
        deltaX = 0;
        deltaY = e.wheelDelta;
      }
      if (e.shiftKey) {
        return [-deltaY, -deltaX];
      }
      return [deltaX, deltaY];
    }
    function shouldBeConsumedByChild(target, deltaX, deltaY) {
      if (!env.isWebKit && element.querySelector('select:focus')) {
        return true;
      }
      if (!element.contains(target)) {
        return false;
      }
      var cursor = target;
      while (cursor && cursor !== element) {
        if (cursor.classList.contains(childConsumeClass)) {
          return true;
        }
        var style = get(cursor);
        var overflow = [style.overflow, style.overflowX, style.overflowY].join(
          ''
        );
        if (overflow.match(/(scroll|auto)/)) {
          var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
          if (maxScrollTop > 0) {
            if (
              !(cursor.scrollTop === 0 && deltaY > 0) &&
              !(cursor.scrollTop === maxScrollTop && deltaY < 0)
            ) {
              return true;
            }
          }
          var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
          if (maxScrollLeft > 0) {
            if (
              !(cursor.scrollLeft === 0 && deltaX < 0) &&
              !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
            ) {
              return true;
            }
          }
        }
        cursor = cursor.parentNode;
      }
      return false;
    }
    function mousewheelHandler(e) {
      var ref = getDeltaFromEvent(e);
      var deltaX = ref[0];
      var deltaY = ref[1];
      if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
        return;
      }
      var shouldPrevent = false;
      if (!i.settings.useBothWheelAxes) {
        updateScroll(
          i,
          'top',
          element.scrollTop - deltaY * i.settings.wheelSpeed
        );
        updateScroll(
          i,
          'left',
          element.scrollLeft + deltaX * i.settings.wheelSpeed
        );
      } else if (i.scrollbarYActive && !i.scrollbarXActive) {
        if (deltaY) {
          updateScroll(
            i,
            'top',
            element.scrollTop - deltaY * i.settings.wheelSpeed
          );
        } else {
          updateScroll(
            i,
            'top',
            element.scrollTop + deltaX * i.settings.wheelSpeed
          );
        }
        shouldPrevent = true;
      } else if (i.scrollbarXActive && !i.scrollbarYActive) {
        if (deltaX) {
          updateScroll(
            i,
            'left',
            element.scrollLeft + deltaX * i.settings.wheelSpeed
          );
        } else {
          updateScroll(
            i,
            'left',
            element.scrollLeft - deltaY * i.settings.wheelSpeed
          );
        }
        shouldPrevent = true;
      }
      updateGeometry(i);
      shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
      if (shouldPrevent) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
    if (typeof window.onwheel !== 'undefined') {
      i.event.bind(element, 'wheel', mousewheelHandler);
    } else if (typeof window.onmousewheel !== 'undefined') {
      i.event.bind(element, 'mousewheel', mousewheelHandler);
    }
  };
  var touch = function (i) {
    if (!env.supportsTouch && !env.supportsIePointer) {
      return;
    }
    var element = i.element;
    function shouldStopOrPrevent(deltaX, deltaY) {
      var scrollTop = element.scrollTop;
      var scrollLeft = element.scrollLeft;
      var magnitudeX = Math.abs(deltaX);
      var magnitudeY = Math.abs(deltaY);
      if (magnitudeY > magnitudeX) {
        if (
          (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
          (deltaY > 0 && scrollTop === 0)
        ) {
          return {
            stop: !i.settings.swipePropagation,
            prevent: window.scrollY === 0,
          };
        }
      } else if (magnitudeX > magnitudeY) {
        if (
          (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
          (deltaX > 0 && scrollLeft === 0)
        ) {
          return { stop: !i.settings.swipePropagation, prevent: true };
        }
      }
      return { stop: true, prevent: true };
    }
    function applyTouchMove(differenceX, differenceY) {
      updateScroll(i, 'top', element.scrollTop - differenceY);
      updateScroll(i, 'left', element.scrollLeft - differenceX);
      updateGeometry(i);
    }
    var startOffset = {};
    var startTime = 0;
    var speed = {};
    var easingLoop = null;
    var inGlobalTouch = false;
    var inLocalTouch = false;
    function globalTouchStart() {
      inGlobalTouch = true;
    }
    function globalTouchEnd() {
      inGlobalTouch = false;
    }
    function getTouch(e) {
      if (e.targetTouches) {
        return e.targetTouches[0];
      } else {
        return e;
      }
    }
    function shouldHandle(e) {
      if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
        return false;
      }
      if (e.targetTouches && e.targetTouches.length === 1) {
        return true;
      }
      if (
        e.pointerType &&
        e.pointerType !== 'mouse' &&
        e.pointerType !== e.MSPOINTER_TYPE_MOUSE
      ) {
        return true;
      }
      return false;
    }
    function touchStart(e) {
      if (!shouldHandle(e)) {
        return;
      }
      inLocalTouch = true;
      var touch = getTouch(e);
      startOffset.pageX = touch.pageX;
      startOffset.pageY = touch.pageY;
      startTime = new Date().getTime();
      if (easingLoop !== null) {
        clearInterval(easingLoop);
      }
      e.stopPropagation();
    }
    function touchMove(e) {
      if (!inLocalTouch && i.settings.swipePropagation) {
        touchStart(e);
      }
      if (!inGlobalTouch && inLocalTouch && shouldHandle(e)) {
        var touch = getTouch(e);
        var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };
        var differenceX = currentOffset.pageX - startOffset.pageX;
        var differenceY = currentOffset.pageY - startOffset.pageY;
        applyTouchMove(differenceX, differenceY);
        startOffset = currentOffset;
        var currentTime = new Date().getTime();
        var timeGap = currentTime - startTime;
        if (timeGap > 0) {
          speed.x = differenceX / timeGap;
          speed.y = differenceY / timeGap;
          startTime = currentTime;
        }
        var ref = shouldStopOrPrevent(differenceX, differenceY);
        var stop = ref.stop;
        var prevent = ref.prevent;
        if (stop) {
          e.stopPropagation();
        }
        if (prevent) {
          e.preventDefault();
        }
      }
    }
    function touchEnd() {
      if (!inGlobalTouch && inLocalTouch) {
        inLocalTouch = false;
        if (i.settings.swipeEasing) {
          clearInterval(easingLoop);
          easingLoop = setInterval(function () {
            if (i.isInitialized) {
              clearInterval(easingLoop);
              return;
            }
            if (!speed.x && !speed.y) {
              clearInterval(easingLoop);
              return;
            }
            if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
              clearInterval(easingLoop);
              return;
            }
            applyTouchMove(speed.x * 30, speed.y * 30);
            speed.x *= 0.8;
            speed.y *= 0.8;
          }, 10);
        }
      }
    }
    if (env.supportsTouch) {
      i.event.bind(window, 'touchstart', globalTouchStart);
      i.event.bind(window, 'touchend', globalTouchEnd);
      i.event.bind(element, 'touchstart', touchStart);
      i.event.bind(element, 'touchmove', touchMove);
      i.event.bind(element, 'touchend', touchEnd);
    } else if (env.supportsIePointer) {
      if (window.PointerEvent) {
        i.event.bind(window, 'pointerdown', globalTouchStart);
        i.event.bind(window, 'pointerup', globalTouchEnd);
        i.event.bind(element, 'pointerdown', touchStart);
        i.event.bind(element, 'pointermove', touchMove);
        i.event.bind(element, 'pointerup', touchEnd);
      } else if (window.MSPointerEvent) {
        i.event.bind(window, 'MSPointerDown', globalTouchStart);
        i.event.bind(window, 'MSPointerUp', globalTouchEnd);
        i.event.bind(element, 'MSPointerDown', touchStart);
        i.event.bind(element, 'MSPointerMove', touchMove);
        i.event.bind(element, 'MSPointerUp', touchEnd);
      }
    }
  };
  var defaultSettings = function () {
    return {
      handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: false,
      suppressScrollY: false,
      swipePropagation: true,
      swipeEasing: true,
      useBothWheelAxes: false,
      wheelPropagation: false,
      wheelSpeed: 1,
    };
  };
  var handlers = {
    'click-rail': clickRail,
    'drag-thumb': dragThumb,
    keyboard: keyboard,
    wheel: wheel,
    touch: touch,
  };
  var psClassName = 'ps';
  var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
    var this$1 = this;
    if (userSettings === void 0) userSettings = {};
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (!element || !element.nodeName) {
      throw new Error('no element is specified to initialize PerfectScrollbar');
    }
    this.element = element;
    element.classList.add(psClassName);
    this.settings = defaultSettings();
    for (var key in userSettings) {
      this$1.settings[key] = userSettings[key];
    }
    this.containerWidth = null;
    this.containerHeight = null;
    this.contentWidth = null;
    this.contentHeight = null;
    var focus = function () {
      return element.classList.add('ps--focus');
    };
    var blur = function () {
      return element.classList.remove('ps--focus');
    };
    this.isRtl = get(element).direction === 'rtl';
    this.isNegativeScroll = (function () {
      var originalScrollLeft = element.scrollLeft;
      var result = null;
      element.scrollLeft = -1;
      result = element.scrollLeft < 0;
      element.scrollLeft = originalScrollLeft;
      return result;
    })();
    this.negativeScrollAdjustment = this.isNegativeScroll
      ? element.scrollWidth - element.clientWidth
      : 0;
    this.event = new EventManager();
    this.ownerDocument = element.ownerDocument || document;
    this.scrollbarXRail = div('ps__rail-x');
    element.appendChild(this.scrollbarXRail);
    this.scrollbarX = div('ps__thumb-x');
    this.scrollbarXRail.appendChild(this.scrollbarX);
    this.scrollbarX.setAttribute('tabindex', 0);
    this.event.bind(this.scrollbarX, 'focus', focus);
    this.event.bind(this.scrollbarX, 'blur', blur);
    this.scrollbarXActive = null;
    this.scrollbarXWidth = null;
    this.scrollbarXLeft = null;
    var railXStyle = get(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
    if (isNaN(this.scrollbarXBottom)) {
      this.isScrollbarXUsingBottom = false;
      this.scrollbarXTop = toInt(railXStyle.top);
    } else {
      this.isScrollbarXUsingBottom = true;
    }
    this.railBorderXWidth =
      toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
    set(this.scrollbarXRail, { display: 'block' });
    this.railXMarginWidth =
      toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
    set(this.scrollbarXRail, { display: '' });
    this.railXWidth = null;
    this.railXRatio = null;
    this.scrollbarYRail = div('ps__rail-y');
    element.appendChild(this.scrollbarYRail);
    this.scrollbarY = div('ps__thumb-y');
    this.scrollbarYRail.appendChild(this.scrollbarY);
    this.scrollbarY.setAttribute('tabindex', 0);
    this.event.bind(this.scrollbarY, 'focus', focus);
    this.event.bind(this.scrollbarY, 'blur', blur);
    this.scrollbarYActive = null;
    this.scrollbarYHeight = null;
    this.scrollbarYTop = null;
    var railYStyle = get(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(railYStyle.right, 10);
    if (isNaN(this.scrollbarYRight)) {
      this.isScrollbarYUsingRight = false;
      this.scrollbarYLeft = toInt(railYStyle.left);
    } else {
      this.isScrollbarYUsingRight = true;
    }
    this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
    this.railBorderYWidth =
      toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
    set(this.scrollbarYRail, { display: 'block' });
    this.railYMarginHeight =
      toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
    set(this.scrollbarYRail, { display: '' });
    this.railYHeight = null;
    this.railYRatio = null;
    this.settings.handlers.forEach(function (handlerName) {
      return handlers[handlerName](this$1);
    });
    this.event.bind(this.element, 'scroll', function () {
      return updateGeometry(this$1);
    });
    updateGeometry(this);
  };
  var prototypeAccessors = { isInitialized: { configurable: true } };
  prototypeAccessors.isInitialized.get = function () {
    return this.element.classList.contains(psClassName);
  };
  PerfectScrollbar.prototype.update = function update() {
    if (!this.isInitialized) {
      return;
    }
    this.negativeScrollAdjustment = this.isNegativeScroll
      ? this.element.scrollWidth - this.element.clientWidth
      : 0;
    set(this.scrollbarXRail, { display: 'block' });
    set(this.scrollbarYRail, { display: 'block' });
    this.railXMarginWidth =
      toInt(get(this.scrollbarXRail).marginLeft) +
      toInt(get(this.scrollbarXRail).marginRight);
    this.railYMarginHeight =
      toInt(get(this.scrollbarYRail).marginTop) +
      toInt(get(this.scrollbarYRail).marginBottom);
    set(this.scrollbarXRail, { display: 'none' });
    set(this.scrollbarYRail, { display: 'none' });
    updateGeometry(this);
    updateScroll(this, 'top', this.element.scrollTop);
    updateScroll(this, 'left', this.element.scrollLeft);
    set(this.scrollbarXRail, { display: '' });
    set(this.scrollbarYRail, { display: '' });
  };
  PerfectScrollbar.prototype.destroy = function destroy() {
    if (!this.isInitialized) {
      return;
    }
    this.event.unbindAll();
    remove(this.scrollbarX);
    remove(this.scrollbarY);
    remove(this.scrollbarXRail);
    remove(this.scrollbarYRail);
    this.removePsClasses();
    this.element = null;
    this.scrollbarX = null;
    this.scrollbarY = null;
    this.scrollbarXRail = null;
    this.scrollbarYRail = null;
  };
  PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
    var this$1 = this;
    for (var i = 0; i < this.element.classList.length; i++) {
      var className = this$1.element.classList[i];
      if (className === 'ps' || className.indexOf('ps-') === 0) {
        this$1.element.classList.remove(className);
      }
    }
  };
  Object.defineProperties(PerfectScrollbar.prototype, prototypeAccessors);
  return PerfectScrollbar;
});
function searchBoxDatepickers(inpStart, inpEnd, realStart, realEnd) {
  this.inpStart = inpStart;
  this.inpEnd = inpEnd;
  this.realStart = realStart;
  this.realEnd = realEnd;
  var meAsObj = this;
  this.selStart = function () {
    var dSelected = meAsObj.inpStart.datepicker('getDate');
    var dSelected_plus1 = dSelected;
    dSelected_plus1.setDate(dSelected_plus1.getDate() + 1);
    meAsObj.inpEnd.datepicker('option', 'minDate', dSelected_plus1);
    var endDate = meAsObj.inpEnd.datepicker('getDate');
    if (endDate < dSelected_plus1) endDate = dSelected_plus1;
    var str = meAsObj.date_apply_format(endDate);
    meAsObj.inpEnd.val(str);
    meAsObj.realStart.val(
      meAsObj.dateYYYYMMDD(meAsObj.inpStart.datepicker('getDate'))
    );
    meAsObj.realEnd.val(
      meAsObj.dateYYYYMMDD(meAsObj.inpEnd.datepicker('getDate'))
    );
    meAsObj.updateAvailFields();
    meAsObj.updateSynxsisFields();
  };
  this.selEnd = function () {
    meAsObj.realEnd.val(
      meAsObj.dateYYYYMMDD(meAsObj.inpEnd.datepicker('getDate'))
    );
    meAsObj.updateAvailFields();
    meAsObj.updateSynxsisFields();
  };
  this.updateAvailFields = function () {
    var availDate = meAsObj.dateYYYYMMDD(
      meAsObj.inpStart.datepicker('getDate')
    );
    availDate = availDate.replace(/(\d{4})(\d{2})(\d{2})/, '$3-$2-$1');
    $('#availpro_arrivalDate').val(availDate);
    var nNights =
      meAsObj.inpEnd.datepicker('getDate') -
      meAsObj.inpStart.datepicker('getDate');
    nNights /= 86400 * 1000;
    $('#availpro_nights').val(nNights);
  };
  this.updateSynxsisFields = function () {
    var synx_format = $('#synx_dateformat').val();
    var synx_arrive = meAsObj.date_custom_format(
      meAsObj.inpStart.datepicker('getDate'),
      synx_format
    );
    var synx_depart = meAsObj.date_custom_format(
      meAsObj.inpEnd.datepicker('getDate'),
      synx_format
    );
    $('#synxsis_arrive').val(synx_arrive);
    $('#synxsis_depart').val(synx_depart);
    $('.calendar_form').find('[name=start]').val('availresults');
  };
  this.date_apply_format = function (d) {
    var template = meAsObj.dateFormat;
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    var month =
      d.getMonth() + 1 < 10
        ? '0' + (d.getMonth() + 1)
        : '' + (d.getMonth() + 1);
    var year = d.getFullYear();
    template = template.replace('dd', day);
    template = template.replace('mm', month);
    template = template.replace('yy', year);
    return template;
  };
  this.date_custom_format = function (d, format) {
    var template = format;
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    var month =
      d.getMonth() + 1 < 10
        ? '0' + (d.getMonth() + 1)
        : '' + (d.getMonth() + 1);
    var year = d.getFullYear();
    template = template.replace('dd', day);
    template = template.replace('mm', month);
    template = template.replace('yyyy', year);
    return template;
  };
  this.date_synxsis_en = function (d) {
    var yyyy = d.getFullYear();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    mm = mm < 10 ? '0' + mm : mm;
    dd = dd < 10 ? '0' + dd : dd;
    return mm + '/' + dd + '/' + yyyy;
  };
  this.dateFromYYYYMMDD = function (str) {
    var d = new Date();
    if (new RegExp(/^(\d{4})-(\d{2})-(\d{2})$/).test(str)) {
      var year = RegExp.$1;
      var month = RegExp.$2;
      var day = RegExp.$3;
      d.setFullYear(parseFloat(year));
      d.setMonth(parseFloat(month) - 1);
      d.setDate(parseFloat(day));
    }
    return d;
  };
  this.dateYYYYMMDD = function (d) {
    var yyyy = d.getFullYear();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    mm = mm < 10 ? '0' + mm : mm;
    dd = dd < 10 ? '0' + dd : dd;
    return yyyy + '-' + mm + '-' + dd;
  };
  var lng = $('#data_ln_a').val();
  if (lng == 'en') lng = '';
  try {
    jQuery.datepicker.setDefaults(
      $.extend(
        { showMonthAfterYear: false, numberOfMonths: 1 },
        jQuery.datepicker.regional[lng]
      )
    );
    this.dateFormat = $.datepicker.regional[lng]['dateFormat'];
  } catch (e) {
    jQuery.datepicker.setDefaults(
      $.extend(
        { showMonthAfterYear: false, numberOfMonths: 1 },
        jQuery.datepicker.regional['en']
      )
    );
    this.dateFormat = $.datepicker.regional['en']['dateFormat'];
  }
  this.inpStart.datepicker({
    onSelect: this.selStart,
    showAnim: 'fadeIn',
    duration: 200,
  });
  this.inpEnd.datepicker({
    onSelect: this.selEnd,
    showAnim: 'fadeIn',
    duration: 200,
  });
  if (meAsObj.realStart.val() != '') {
    meAsObj.inpStart.val(
      this.date_apply_format(this.dateFromYYYYMMDD(this.realStart.val()))
    );
    meAsObj.inpEnd.val(
      this.date_apply_format(this.dateFromYYYYMMDD(this.realEnd.val()))
    );
  }
  var oldVal = meAsObj.inpStart.val();
  meAsObj.inpStart.datepicker('option', 'minDate', new Date());
  meAsObj.inpStart.val(oldVal);
  var oldVal = meAsObj.inpEnd.val();
  tomorow = new Date();
  tomorow.setDate(tomorow.getDate() + 1);
  meAsObj.inpEnd.datepicker('option', 'minDate', tomorow);
  meAsObj.inpEnd.val(oldVal);
}
$(function () {
  new searchBoxDatepickers(
    $('#searchStartDate'),
    $('#searchEndDate'),
    $('#searchStartDate_std'),
    $('#searchEndDate_std')
  );
  $('.calendar_form').find('[name=start]').val('');
  if ($('.calendar_form').attr('ggacc')) {
    $('.calendar_form').append(
      '<input type=hidden name=ggacc value="' +
        $('.calendar_form').attr('ggacc') +
        '">'
    );
    var bla = _gat._getTrackerByName()._getLinkerUrl('/');
    bla = bla.replace('/?', '');
    var arrItems = bla.split('&');
    for (var i = 0; i < arrItems.length; i++) {
      var tmp = arrItems[i].split('=');
      var n = tmp[0];
      var v = tmp[1];
      $('.calendar_form').append(
        '<input type="hidden" name="' + n + '" value="' + v + '">'
      );
    }
  }
});
$(function () {
  var clickMe = $('.sidebar-menu .drop-btn, .sidebar-nav .drop-btn'),
    hoverMe = $('.header-main .drop-me'),
    menuOut = $('ul.drop-menu'),
    post = $('.post'),
    readMore = $('a.read-more'),
    hamburgerBtn = $('.menu-btn'),
    sidebarNav = $('#sidebar-navigation'),
    sidebarOverlay = $('.sidebar-overlay'),
    el = $(window),
    didScroll = false,
    prevscroll = 0,
    init = true,
    header = $('.header-main'),
    headerAlt = $('.second-header'),
    headerOffset = header.offset(),
    headerHeight = header.height(),
    desktopMenubtn = $('.btn-nav'),
    desktopSidebar = $('.sidebar-nav'),
    desktopSidebarclose = $('.sidebar-nav-close');
  AOS.init({ disable: 'mobile' });
  if (sidebarNav.length > 0) {
    new PerfectScrollbar('#sidebar-navigation');
  }
  if (desktopSidebar.length > 0) {
    new PerfectScrollbar('.sidebar-nav');
  }
  if (desktopSidebar.length > 0) {
    desktopMenubtn.click(function (event) {
      event.preventDefault();
      desktopSidebar.addClass('open');
    });
    desktopSidebarclose.click(function (event) {
      event.preventDefault();
      desktopSidebar.removeClass('open');
    });
  }
  if (headerAlt.length > 0) {
    el.scroll(function () {
      didScroll = true;
    });
    setInterval(function () {
      if (didScroll) {
        didScroll = false;
        var newscroll = el.scrollTop();
        if (newscroll >= headerHeight + 50) {
          if (!headerAlt.hasClass('show')) {
            headerAlt.addClass('show');
          }
        } else {
          if (headerAlt.hasClass('show')) {
            headerAlt.removeClass('show');
          }
        }
      }
      prevscroll = newscroll;
      init = false;
    }, 250);
  }
  var hoverIn = function () {
    var obj = $(this);
    $('.drop-menu:visible').slideUp(100);
    obj.find('.drop-menu:hidden').slideDown(100);
    obj.find('a.drop-btn').addClass('selected');
  };
  var hoverOut = function () {
    var obj = $(this);
    obj.find('.drop-menu:visible').slideUp(100);
    obj.find('a.drop-btn').removeClass('selected');
  };
  hoverMe.hoverIntent({
    over: hoverIn,
    out: hoverOut,
    timeout: 0,
    sensitivity: 100,
  });
  $('.close-popout').click(function (event) {
    var obj = $(this).closest('.direct-popout');
    event.preventDefault();
    obj.find('.popout-content').slideToggle(200);
    $('.direct-popout').toggleClass('open');
  });
  $('.close-popout')
    .delay(3500)
    .queue(function () {
      $(this).trigger('click');
      $(this).dequeue();
    });
  if ($('.scroll').length > 0) {
    $('.scroll').click(function (event) {
      event.preventDefault();
      var full_url = this.href;
      var parts = full_url.split('#');
      var trgt = parts[1];
      var target_offset = $('#' + trgt).offset();
      var target_top = target_offset.top;
      $('html, body')
        .stop()
        .animate(
          { scrollTop: target_top - 105 },
          { duration: 1000, easing: 'jswing', queue: false }
        );
    });
  }
  if (clickMe.length > 0) {
    clickMe.click(function (event) {
      event.preventDefault();
      event.stopPropagation();
      var obj = $(this).closest('li');
      $('.drop-menu:visible').slideUp(100);
      obj.find('.drop-menu:hidden').slideDown(100);
      clickMe.removeClass('selected');
      $(this).addClass('selected');
    });
    menuOut.mouseleave(function () {
      $(this).slideToggle(100);
      clickMe.removeClass('selected');
    });
  }
  hamburgerBtn.click(function (event) {
    event.preventDefault();
    $(this).toggleClass('open');
    sidebarNav.toggleClass('open');
    sidebarOverlay.toggleClass('open');
  });
  sidebarOverlay.click(function (event) {
    event.preventDefault();
    sidebarNav.removeClass('open');
    hamburgerBtn.removeClass('open');
    $(this).removeClass('open');
  });
  post.each(function () {
    if ($.trim($(this).find('.more-content').text()) == '') {
      $(this).find('.read-more').hide();
    }
  });
  readMore.click(function (event) {
    var obj = $(this).closest(post);
    event.preventDefault();
    obj.find('.more-content').slideToggle(100);
    obj.find('.show-more').toggleClass('noDisplay');
    obj.find('.show-less').toggleClass('yesAppear');
  });
  $('.close-be').click(function (event) {
    event.preventDefault();
    $('.mini-be').toggleClass('open');
  });
});
var META_SHARED_URL =
  ('https:' == document.location.protocol ? 'https://' : 'http://') +
  'd24aiv4ryvyi1a.cloudfront.net/commons';
$(function () {
  if ('_pulsarDocLoad' in window) {
    window.setTimeout('loadAdditive()', 100);
  } else {
    $(window).load(function () {
      window.setTimeout('loadAdditive()', 100);
    });
  }
});
function loadAdditive() {
  $('#sharethis').click(function (event) {
    event.preventDefault();
    var div = dialogmaster.open($(this).text(), 400, 380);
    div.html(
      '<iframe frameborder=0 margin=0 padding=0 width=100% height=320 src="' +
        $(this).attr('href') +
        '"></iframe>'
    );
  });
  novacmsadm = new novacmsmode();
  novacmsadm.enableKonami();
  if (novacmsadm.getCookie('novacms_cook').length == 100) {
    novacmsadm.loadjsadm();
  }
}
function loadcss2(url) {
  var datuURIs = document.createElement('link');
  document.head = document.head || document.getElementsByTagName('head')[0];
  datuURIs.href = url;
  datuURIs.rel = 'stylesheet';
  document.head.appendChild(datuURIs);
}
function pulsarPreload() {
  this.list = [];
  this.current = -1;
  this.cache = [];
  var meAsObj = this;
  var l = arguments.length;
  for (var i = 0; i < l; i++) meAsObj.list.push(arguments[i]);
  meAsObj.loadNext = function () {
    meAsObj.current++;
    var gg = new Image();
    gg.src = meAsObj.list[meAsObj.current];
    meAsObj.cache.push(gg);
  };
  meAsObj.checker = function () {
    if (meAsObj.cache.length == 0) {
      meAsObj.loadNext();
      return;
    }
    if (meAsObj.cache.length == meAsObj.list.length) {
      window.clearInterval(meAsObj.interval);
      return;
    }
    if (meAsObj.cache[meAsObj.current].complete) {
      meAsObj.loadNext();
      return;
    }
  };
  meAsObj.interval = window.setInterval(meAsObj.checker, 160);
}
function novacmsmode() {
  var me = this;
  me.loaded = false;
  this.getCookie = function (c_name) {
    var i,
      x,
      y,
      ARRcookies = document.cookie.split(';');
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, '');
      if (x == c_name) {
        return unescape(y);
      }
    }
    return '';
  };
  this.loadjsadm = function () {
    $(window).scrollTop(0);
    if (
      window['novacms_mainEditor'] !== false &&
      typeof window['novacms_mainEditor'] !== 'undefined'
    )
      return;
    if (me.loaded) {
      novacms_admin_step2();
      return;
    }
    var bw = $(window).width();
    var bh = $(window).height();
    var layer = $(
      '<div class="novacms_layer" style="position:absolute;z-index:10000;top:0;left:0;width:' +
        bw +
        'px;height:' +
        bh +
        'px;background:white url(' +
        META_SHARED_URL +
        '/nova_cms/pics/ajax-loader.gif) no-repeat center center"></div>'
    );
    layer.css('opacity', 0.7);
    $(document.body).append(layer);
    var d = document;
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = META_SHARED_URL + '/nova_cms/js/ignite.js';
    (
      d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]
    ).appendChild(s);
    me.loaded = true;
  };
  me.konamibuffer = '';
  me.konamipattern = '78798665677783';
  me.enableKonami = function () {
    $(document).keyup(me.konami);
  };
  me.konami = function (event) {
    me.konamibuffer += event.which;
    if (me.konamibuffer.length >= me.konamipattern.length) {
      me.konamibuffer = me.konamibuffer.substr(
        me.konamibuffer.length - me.konamipattern.length
      );
      if (me.konamibuffer == me.konamipattern) {
        if (window.location.href.indexOf('devalias') > -1) {
          me.konamibuffer = '';
          me.loadjsadm();
        } else {
          var url = window.location.href;
          var arr = url.split('/');
          var result = arr[0] + '//' + arr[2];
          var split_url = arr[2].split('.');
          url_devalias = split_url[0];
          if (split_url[0] == 'www' || split_url[0] == 'www.') {
            url_devalias = split_url[1];
          }
          url_devalias_full = 'https://' + url_devalias + '.devalias.com';
          window.open(url_devalias_full, '_blank');
        }
      }
    }
  };
}
var G_TLD_LIST = [
  'ac',
  'ad',
  'ae',
  'aero',
  'af',
  'ag',
  'ai',
  'al',
  'am',
  'an',
  'ao',
  'aq',
  'ar',
  'arpa',
  'as',
  'asia',
  'at',
  'au',
  'aw',
  'ax',
  'az',
  'ba',
  'bb',
  'bd',
  'be',
  'bf',
  'bg',
  'bh',
  'bi',
  'biz',
  'bj',
  'bm',
  'bn',
  'bo',
  'br',
  'bs',
  'bt',
  'bv',
  'bw',
  'by',
  'bz',
  'ca',
  'cat',
  'cc',
  'cd',
  'cf',
  'cg',
  'ch',
  'ci',
  'ck',
  'cl',
  'cm',
  'cn',
  'co',
  'com',
  'coop',
  'cr',
  'cu',
  'cv',
  'cx',
  'cy',
  'cz',
  'de',
  'dj',
  'dk',
  'dm',
  'do',
  'dz',
  'ec',
  'edu',
  'ee',
  'eg',
  'er',
  'es',
  'et',
  'eu',
  'fi',
  'fj',
  'fk',
  'fm',
  'fo',
  'fr',
  'ga',
  'gb',
  'gd',
  'ge',
  'gf',
  'gg',
  'gh',
  'gi',
  'gl',
  'gm',
  'gn',
  'gov',
  'gp',
  'gq',
  'gr',
  'gs',
  'gt',
  'gu',
  'gw',
  'gy',
  'hk',
  'hm',
  'hn',
  'hr',
  'ht',
  'hu',
  'id',
  'ie',
  'il',
  'im',
  'in',
  'info',
  'int',
  'io',
  'iq',
  'ir',
  'is',
  'it',
  'je',
  'jm',
  'jo',
  'jobs',
  'jp',
  'ke',
  'kg',
  'kh',
  'ki',
  'km',
  'kn',
  'kp',
  'kr',
  'kw',
  'ky',
  'kz',
  'la',
  'lb',
  'lc',
  'li',
  'lk',
  'lr',
  'ls',
  'lt',
  'lu',
  'lv',
  'ly',
  'ma',
  'mc',
  'md',
  'me',
  'mg',
  'mh',
  'mil',
  'mk',
  'ml',
  'mm',
  'mn',
  'mo',
  'mobi',
  'mp',
  'mq',
  'mr',
  'ms',
  'mt',
  'mu',
  'museum',
  'mv',
  'mw',
  'mx',
  'my',
  'mz',
  'na',
  'name',
  'nc',
  'ne',
  'net',
  'nf',
  'ng',
  'ni',
  'nl',
  'no',
  'np',
  'nr',
  'nu',
  'nz',
  'om',
  'org',
  'pa',
  'pe',
  'pf',
  'pg',
  'ph',
  'pk',
  'pl',
  'pm',
  'pn',
  'pr',
  'pro',
  'ps',
  'pt',
  'pw',
  'py',
  'qa',
  're',
  'ro',
  'rs',
  'ru',
  'rw',
  'sa',
  'sb',
  'sc',
  'sd',
  'se',
  'sg',
  'sh',
  'si',
  'sj',
  'sk',
  'sl',
  'sm',
  'sn',
  'so',
  'sr',
  'st',
  'su',
  'sv',
  'sy',
  'sz',
  'tc',
  'td',
  'tel',
  'tf',
  'tg',
  'th',
  'tj',
  'tk',
  'tl',
  'tm',
  'tn',
  'to',
  'tp',
  'tr',
  'travel',
  'tt',
  'tv',
  'tw',
  'tz',
  'ua',
  'ug',
  'uk',
  'us',
  'uy',
  'uz',
  'va',
  'vc',
  've',
  'vg',
  'vi',
  'vn',
  'vu',
  'wf',
  'ws',
  'xn--0zwm56d',
  'xn--11b5bs3a9aj6g',
  'xn--3e0b707e',
  'xn--45brj9c',
  'xn--80akhbyknj4f',
  'xn--90a3ac',
  'xn--9t4b11yi5a',
  'xn--clchc0ea0b2g2a9gcd',
  'xn--deba0ad',
  'xn--fiqs8s',
  'xn--fiqz9s',
  'xn--fpcrj9c3d',
  'xn--fzc2c9e2c',
  'xn--g6w251d',
  'xn--gecrj9c',
  'xn--h2brj9c',
  'xn--hgbk6aj7f53bba',
  'xn--hlcj6aya9esc7a',
  'xn--j6w193g',
  'xn--jxalpdlp',
  'xn--kgbechtv',
  'xn--kprw13d',
  'xn--kpry57d',
  'xn--lgbbat1ad8j',
  'xn--mgbaam7a8h',
  'xn--mgbayh7gpa',
  'xn--mgbbh1a71e',
  'xn--mgbc0a9azcg',
  'xn--mgberp4a5d4ar',
  'xn--o3cw4h',
  'xn--ogbpf8fl',
  'xn--p1ai',
  'xn--pgbs0dh',
  'xn--s9brj9c',
  'xn--wgbh1c',
  'xn--wgbl6a',
  'xn--xkc2al3hye2a',
  'xn--xkc2dl3a5ee0h',
  'xn--yfro4i67o',
  'xn--ygbi2ammx',
  'xn--zckzah',
  'xxx',
  'ye',
  'yt',
  'za',
  'zm',
  'zw',
].join();
function parseUri(str) {
  var o = parseUri.options,
    m = o.parser[o.strictMode ? 'strict' : 'loose'].exec(str),
    uri = {},
    i = 14;
  while (i--) uri[o.key[i]] = m[i] || '';
  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });
  return uri;
}
parseUri.options = {
  strictMode: false,
  key: [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor',
  ],
  q: { name: 'queryKey', parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
  parser: {
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  },
};
function is_empty(value) {
  if (
    !value ||
    typeof value === 'undefined' ||
    value == '' ||
    value === '0' ||
    value === 0 ||
    value == null ||
    value == 'NaN'
  ) {
    return true;
  }
  return false;
}
function get_domain_tld(url) {
  var parts = url.split('.');
  if (parts[0] === 'www' && parts[1] !== 'com') {
    parts.shift();
  }
  var ln = parts.length,
    i = ln,
    minLength = parts[parts.length - 1].length,
    part;
  while ((part = parts[--i])) {
    if (
      i === 0 ||
      i < ln - 2 ||
      part.length < minLength ||
      G_TLD_LIST.indexOf(part) < 0
    ) {
      return part;
    }
  }
}
function wihp_get_domain(url) {
  var parser = document.createElement('a');
  parser.href = url;
  var domain_split = parser.hostname.split('.');
  var max_length = domain_split.length - 1;
  var the_domain = new Array();
  for (i = max_length; i >= 0; i--) {
    var domain_piece = domain_split[i];
    domain_piece.toString();
    var end_this = false;
    if (G_TLD_LIST.indexOf(domain_piece) < 0) {
      end_this = true;
    }
    the_domain.push(domain_piece);
    if (end_this) {
      break;
    }
  }
  the_domain.reverse();
  return the_domain.join('.');
}
function formatMoney(n, c, d, t) {
  var c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? '.' : d,
    t = t == undefined ? ',' : t,
    s = n < 0 ? '-' : '',
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : '')
  );
}
function class_gdpr() {
  var plugin = this;
  this.cookie_name = 'user_accept_cookie_agreement';
  this.cookie_decline_name = 'user_decline_cookie_agreement';
  class_gdpr.prototype.user_accepts_agreement = function () {
    this.set_cookie(this.cookie_name, 1, 365);
    $('.gdpr').removeClass('show');
    this.load_scripts();
  };
  class_gdpr.prototype.user_declines_agreement = function () {
    this.set_cookie(this.cookie_decline_name, 1, 1);
  };
  class_gdpr.prototype.load_scripts = function () {
    if (this.cookie_exists(plugin.cookie_name)) {
      $.getScript('/assets/post-scripts.js', function () {});
    } else {
      if (!this.cookie_exists(plugin.cookie_decline_name)) {
        $(function () {
          $('.gdpr')
            .delay(2000)
            .queue(function () {
              $('.gdpr').addClass('show');
            });
        });
      }
    }
  };
  class_gdpr.prototype.cookie_exists = function (cookie_name) {
    var exists = false;
    var this_cookie = this.get_cookie(cookie_name);
    if (!this.is_empty(this_cookie)) {
      var exists = true;
    }
    return exists;
  };
  class_gdpr.prototype.is_empty = function (value) {
    if (
      !value ||
      typeof value === 'undefined' ||
      value == '' ||
      value === '0' ||
      value === 0 ||
      value == null ||
      value == 'NaN'
    ) {
      return true;
    }
    return false;
  };
  class_gdpr.prototype.set_cookie = function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  };
  class_gdpr.prototype.get_cookie = function (cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };
}
$(function () {
  $('body').on('click', '.gdpr-accept', function () {
    classgdpr = new class_gdpr();
    classgdpr.user_accepts_agreement();
    return false;
  });
  $('body').on('click', '.gdpr-decline', function () {
    $('.gdpr').removeClass('show');
    classgdpr.user_declines_agreement();
    return false;
  });
});
classgdpr = new class_gdpr();
classgdpr.load_scripts();
function class_wihp_ln_already_redir() {
  var plugin = this;
  this.cookie_name = 'ln_already_redir';
  this.uri = window.location.pathname;
  this.query_string = window.location.search;
  this.browser_lang = navigator.language || navigator.userLanguage;
  this.ln = document.getElementById('general_ln').value;
  this.front_ln = document.getElementById('front_ln').value;
  this.site_langs = document.getElementById('site_langs').value;
  this.site_langs_published = document.getElementById(
    'site_langs_published'
  ).value;
  class_wihp_ln_already_redir.prototype.load = function () {
    var flag_set_cookie = false;
    var flag_cookie_exist = this.cookie_exists(plugin.cookie_name);
    if (this.cookie_exists(plugin.cookie_name)) {
      if (this.uri != '/' || !this.is_empty(this.uri)) {
      } else {
        return;
      }
    }
    if (this.uri != '/' || !this.is_empty(this.uri)) {
      if (this.uri != '/') {
        this.set_cookie(this.cookie_name, 1, 365);
        return;
      }
    }
    if (this.is_empty(this.browser_lang)) {
      flag_set_cookie = true;
    } else {
      this.browser_lang = this.browser_lang.substring(0, 2);
    }
    if (this.browser_lang == this.ln) {
      flag_set_cookie = true;
    }
    if (flag_set_cookie) {
      this.set_cookie(this.cookie_name, 1, 365);
      return;
    }
    this.set_cookie(this.cookie_name, 1, 365);
    var localized_url = '/';
    var chosen_lang = '';
    var flag_valid_lang = false;
    if (this.browser_lang != this.front_ln) {
      localized_url += this.browser_lang + '/';
      chosen_lang = this.browser_lang;
    } else if (!this.is_empty(this.ln) && this.browser_lang != this.ln) {
      localized_url += this.ln;
      chosen_lang = this.ln;
    }
    if (!this.is_empty(site_langs_published)) {
      if (this.site_langs_published.indexOf(chosen_lang) != -1) {
        flag_valid_lang = true;
      } else {
      }
    } else if (this.site_langs.indexOf(chosen_lang) != -1) {
      flag_valid_lang = true;
    }
    if (flag_valid_lang) {
      if (this.query_string != '') {
        localized_url += '?' + this.query_string;
      }
      window.location = localized_url;
    }
    return;
  };
  class_wihp_ln_already_redir.prototype.cookie_exists = function (cookie_name) {
    var exists = false;
    var this_cookie = this.get_cookie(cookie_name);
    if (!this.is_empty(this_cookie)) {
      var exists = true;
    }
    return exists;
  };
  class_wihp_ln_already_redir.prototype.is_empty = function (value) {
    if (
      !value ||
      typeof value === 'undefined' ||
      value == '' ||
      value === '0' ||
      value === 0 ||
      value == null ||
      value == 'NaN'
    ) {
      return true;
    }
    return false;
  };
  class_wihp_ln_already_redir.prototype.set_cookie = function (
    cname,
    cvalue,
    exdays
  ) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  };
  class_wihp_ln_already_redir.prototype.get_cookie = function (cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };
}
$(function () {
  classwihplnalreadyredir = new class_wihp_ln_already_redir();
  classwihplnalreadyredir.load();
});
