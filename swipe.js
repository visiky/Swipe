/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-iepp-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;

window.Modernizr = function (a, b, c) {
    function C(a, b) {
      var c = a.charAt(0)
        .toUpperCase() + a.substr(1),
        d = (a + " " + o.join(c + " ") + c)
        .split(" ");
      return B(d, b);
    }

    function B(a, b) {
      for (var d in a)
        if (k[a[d]] !== c) return b == "pfx" ? a[d] : !0;
      return !1;
    }

    function A(a, b) {
      return !!~("" + a)
        .indexOf(b);
    }

    function z(a, b) {
      return typeof a === b;
    }

    function y(a, b) {
      return x(n.join(a + ";") + (b || ""));
    }

    function x(a) {
      k.cssText = a;
    }

    var d = "2.0.6",
      e = {},
      f = !0,
      g = b.documentElement,
      h = b.head || b.getElementsByTagName("head")[0],
      i = "modernizr",
      j = b.createElement(i),
      k = j.style,
      l, m = Object.prototype.toString,
      n = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
      o = "Webkit Moz O ms Khtml".split(" "),
      p = {},
      q = {},
      r = {},
      s = [],
      t = function (a, c, d, e) {
        var f, h, j, k = b.createElement("div");
        if (parseInt(d, 10))
          while (d--) j = b.createElement("div"), j.id = e ? e[d] : i + (d + 1),
            k.appendChild(j);
        f = ["&shy;", "<style>", a, "</style>"].join(""), k.id = i, k.innerHTML +=
          f, g.appendChild(k), h = c(k, a), k.parentNode.removeChild(k);
        return !!h;
      },
      u, v = {}

    .hasOwnProperty,
    w;
    !z(v, c) && !z(v.call, c) ? w = function (a, b) {
      return v.call(a, b);
    }

    :
    w = function (a, b) {
      return b in a && z(a.constructor.prototype[b], c);
    };

    var D = function (a, c) {
      var d = a.join(""),
        f = c.length;
      t(d, function (a, c) {
        var d = b.styleSheets[b.styleSheets.length - 1],
          g = d.cssRules && d.cssRules[0] ? d.cssRules[0].cssText : d.cssText ||
          "",
          h = a.childNodes,
          i = {};

        while (f--) i[h[f].id] = h[f];
        e.csstransforms3d = i.csstransforms3d.offsetLeft === 9;
      }, f, c);
    }([, ["@media (", n.join("transform-3d),("), i, ")",
      "{#csstransforms3d{left:9px;position:absolute}}"
    ].join("")], [, "csstransforms3d"]);
    p.csstransforms = function () {
      return !!B(["transformProperty", "WebkitTransform", "MozTransform",
        "OTransform", "msTransform"
      ]);
    }, p.csstransforms3d = function () {
      var a = !!B(["perspectiveProperty", "WebkitPerspective",
        "MozPerspective", "OPerspective", "msPerspective"
      ]);
      a && "webkitPerspective" in g.style && (a = e.csstransforms3d);
      return a;
    }, p.csstransitions = function () {
      return C("transitionProperty");
    };

    for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[
      u] ? "" : "no-") + u));
    x(""), j = l = null, a.attachEvent && function () {
        var a = b.createElement("div");
        a.innerHTML = "<elem></elem>";
        return a.childNodes.length !== 1;
      }() && function (a, b) {
        function s(a) {
          var b = -1;
          while (++b < g) a.createElement(f[b]);
        }

        a.iepp = a.iepp || {};

        var d = a.iepp,
          e = d.html5elements ||
          "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
          f = e.split("|"),
          g = f.length,
          h = new RegExp("(^|\\s)(" + e + ")", "gi"),
          i = new RegExp("<(/*)(" + e + ")", "gi"),
          j = /^\s*[\ {\;}]\ s * $ /,
          k = new RegExp("(^|[^\\n]*?\\s)(" + e + ")([^\\n]*)({[\\n\\w\\W]*?})",
            "gi"),
          l = b.createDocumentFragment(),
          m = b.documentElement,
          n = m.firstChild,
          o = b.createElement("body"),
          p = b.createElement("style"),
          q = /print|all/,
          r;
        d.getCSS = function (a, b) {
          if (a + "" === c) return "";
          var e = -1,
            f = a.length,
            g, h = [];
          while (++e < f) {
            g = a[e];
            if (g.disabled) continue;
            b = g.media || b, q.test(b) && h.push(d.getCSS(g.imports, b), g.cssText),
              b = "all";
          }

          return h.join("");
        }, d.parseCSS = function (a) {
          var b = [],
            c;
          while ((c = k.exec(a)) != null) b.push(((j.exec(c[1]) ? "\n" : c[1]) +
              c[2] + c[3])
            .replace(h, "$1.iepp_$2") + c[4]);
          return b.join("\n");
        }, d.writeHTML = function () {
          var a = -1;
          r = r || b.body;
          while (++a < g) {
            var c = b.getElementsByTagName(f[a]),
              d = c.length,
              e = -1;
            while (++e < d) c[e].className.indexOf("iepp_") < 0 && (c[e].className +=
              " iepp_" + f[a]);
          }

          l.appendChild(r), m.appendChild(o), o.className = r.className, o.id =
            r.id, o.innerHTML = r.innerHTML.replace(i, "<$1font");
        }, d._beforePrint = function () {
          p.styleSheet.cssText = d.parseCSS(d.getCSS(b.styleSheets, "all")),
            d.writeHTML();
        }, d.restoreHTML = function () {
          o.innerHTML = "", m.removeChild(o), m.appendChild(r);
        }, d._afterPrint = function () {
          d.restoreHTML(), p.styleSheet.cssText = "";
        }, s(b), s(l);
        d.disablePP || (n.insertBefore(p, n.firstChild), p.media = "print", p.className =
          "iepp-printshim", a.attachEvent("onbeforeprint", d._beforePrint), a
          .attachEvent("onafterprint", d._afterPrint));
      }(a, b), e._version = d, e._prefixes = n, e._domPrefixes = o, e.testProp =
      function (a) {
        return B([a]);
      }, e.testAllProps = C, e.testStyles = t, g.className = g.className.replace(
        /\bno-js\b/, "") + (f ? " js " + s.join(" ") : "");
    return e;
  }(this, this.document),
  function (a, b, c) {
    function k(a) {
      return !a || a == "loaded" || a == "complete";
    }

    function j() {
      var a = 1,
        b = -1;
      while (p.length - ++b)
        if (p[b].s && !(a = p[b].r)) break;
      a && g();
    }

    function i(a) {
      var c = b.createElement("script"),
        d;
      c.src = a.s, c.onreadystatechange = c.onload = function () {
        !d && k(c.readyState) && (d = 1, j(), c.onload = c.onreadystatechange =
          null);
      }, m(function () {
        d || (d = 1, j());
      }, H.errorTimeout), a.e ? c.onload() : n.parentNode.insertBefore(c, n);
    }

    function h(a) {
      var c = b.createElement("link"),
        d;
      c.href = a.s, c.rel = "stylesheet", c.type = "text/css";
      if (!a.e && (w || r)) {
        var e = function (a) {
          m(function () {
            if (!d) try {
              a.sheet.cssRules.length ? (d = 1, j()) : e(a);
            } catch (b) {
              b.code == 1e3 || b.message == "security" || b.message ==
                "denied" ? (d = 1, m(function () {
                  j();
                }, 0)) : e(a);
            }
          }, 0);
        };

        e(c);
      } else c.onload = function () {
        d || (d = 1, m(function () {
          j();
        }, 0));
      }, a.e && c.onload();
      m(function () {
        d || (d = 1, j());
      }, H.errorTimeout), !a.e && n.parentNode.insertBefore(c, n);
    }

    function g() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function () {
        a.t == "c" ? h(a) : i(a);
      }, 0) : (a(), j()) : q = 0;
    }

    function f(a, c, d, e, f, h) {
      function i() {
        !o && k(l.readyState) && (r.r = o = 1, !q && j(), l.onload = l.onreadystatechange =
          null, m(function () {
            u.removeChild(l);
          }, 0));
      }

      var l = b.createElement(a),
        o = 0,
        r = {
          t: d,
          s: c,
          e: h
        };

      l.src = l.data = c, !s && (l.style.display = "none"), l.width = l.height =
        "0", a != "object" && (l.type = d), l.onload = l.onreadystatechange = i,
        a == "img" ? l.onerror = i : a == "script" && (l.onerror = function () {
          r.e = r.r = 1, g();
        }), p.splice(e, 0, r), u.insertBefore(l, s ? null : n), m(function () {
          o || (u.removeChild(l), r.r = r.e = o = 1, j());
        }, H.errorTimeout);
    }

    function e(a, b, c) {
      var d = b == "c" ? z : y;
      q = 0, b = b || "j", C(a) ? f(d, a, b, this.i++, l, c) : (p.splice(this.i++,
        0, a), p.length == 1 && g());
      return this;
    }

    function d() {
      var a = H;
      a.loader = {
        load: e,
        i: 0
      };

      return a;
    }

    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}

    .toString,
    p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange()
      .compareNode,
      t = r && !s,
      u = s ? l : n.parentNode,
      v = a.opera && o.call(a.opera) == "[object Opera]",
      w = "webkitAppearance" in l.style,
      x = w && "async" in b.createElement("script"),
      y = r ? "object" : v || x ? "img" : "script",
      z = w ? "img" : y,
      A = Array.isArray || function (a) {
        return o.call(a) == "[object Array]";
      },
      B = function (a) {
        return Object(a) === a;
      },
      C = function (a) {
        return typeof a == "string";
      },
      D = function (a) {
        return o.call(a) == "[object Function]";
      },
      E = [],
      F = {},
      G, H;
    H = function (a) {
      function f(a) {
        var b = a.split("!"),
          c = E.length,
          d = b.pop(),
          e = b.length,
          f = {
            url: d,
            origUrl: d,
            prefixes: b
          },
          g, h;
        for (h = 0; h < e; h++) g = F[b[h]], g && (f = g(f));
        for (h = 0; h < c; h++) f = E[h](f);
        return f;
      }

      function e(a, b, e, g, h) {
        var i = f(a),
          j = i.autoCallback;
        if (!i.bypass) {
          b && (b = D(b) ? b : b[a] || b[g] || b[a.split("/")
            .pop()
            .split("?")[0]]);
          if (i.instead) return i.instead(a, b, e, g, h);
          e.load(i.url, i.forceCSS || !i.forceJS && /css$/.test(i.url) ? "c" :
            c, i.noexec), (D(b) || D(j)) && e.load(function () {
            d(), b && b(i.origUrl, h, g), j && j(i.origUrl, h, g);
          })
        }
      }

      function b(a, b) {
        function c(a) {
          if (C(a)) e(a, h, b, 0, d);
          else if (B(a))
            for (i in a) a.hasOwnProperty(i) && e(a[i], h, b, i, d);
        }

        var d = !!a.test,
          f = d ? a.yep : a.nope,
          g = a.load || a.both,
          h = a.callback,
          i;
        c(f), c(g), a.complete && b.load(a.complete);
      }

      var g, h, i = this.yepnope.loader;
      if (C(a)) e(a, 0, i, 0);
      else if (A(a))
        for (g = 0; g < a.length; g++) h = a[g], C(h) ? e(h, 0, i, 0) : A(h) ?
          H(h) : B(h) && b(h, i);
      else B(a) && b(a, i);
    }, H.addPrefix = function (a, b) {
      F[a] = b;
    }, H.addFilter = function (a) {
      E.push(a);
    }, H.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b
      .readyState = "loading", b.addEventListener("DOMContentLoaded", G =
        function () {
          b.removeEventListener("DOMContentLoaded", G, 0), b.readyState =
            "complete";
        }, 0)), a.yepnope = d();
  }(this, this.document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  };

(function ($, undefined) {
  /*
   * Swipe object.
   */
  $.Swipe = function (options, element) {

    this.$el = $(element);
    this._init(options);
  };

  $.Swipe.defaults = {
    current: 0, // index of current item
    autoplay: false, // slideshow on / off
    interval: 3000 // time between transitions;
  };

  $.Swipe.prototype = {
    _init: function (options) {

      this.options = $.extend(true, {}, $.Swipe.defaults, options);


      this.$list = this.$el.find('.swipe-list');

      this.$items = this.$list.children();
      this.itemsCount = this.$items.length;

      this.$indicators = this.$el.find('.swipe-indicator>li');

      this.$nav = this.$el.find('.swipe-action');
      this.$navPrev = this.$nav.find('.prev');
      this.$navNext = this.$nav.find('.next');

      // minimum of 3 items
      if (this.itemsCount < 3) {
        this.$nav.remove();
        return false;
      }

      this.current = this.options.current;

      this.isAnim = false;

      this._layout();

      // load the events
      this._loadEvents();

      //slideshow
      if (this.options.autoplay) {
        this._cycle();
      }

    },
    _layout: function () {
      // current, left and right items
      this._setItems();


      // current item is not changed
      // left and right one are rotated and translated
      this.$leftItem.css(this._getCoordinates('left'));
      this.$rightItem.css(this._getCoordinates('right'));
      this.$currentItem.css(this._getCoordinates('center'));

      this.$nextItem.css(this._getCoordinates('outright'));
      this.$prevItem
        .css(this._getCoordinates('outleft'));

      this.$indicators.eq(this.current)
        .css('background', 'rgb(244, 67, 54)')
        .siblings()
        .css("background", "rgba(0, 0, 0, 0.2)");
    },
    _getCoordinates: function (position) {
      switch (position) {
        case 'outleft':
          return {
            '-webkit-transform': 'translate(-450px) scale(0.5)',
            '-moz-transform': 'translate(-450px) scale(0.5)',
            '-o-transform': 'translate(-450px) scale(0.5)',
            '-ms-transform': 'translate(-450px) scale(0.5)',
            'transform': 'translate(-450px) scale(0.5)',
            'opacity': 0,
            'visibility': 'hidden'
          };

          break;
        case 'outright':
          return {
            '-webkit-transform': 'translate(450px) scale(0.5)',
            '-moz-transform': 'translate(450px) scale(0.5)',
            '-o-transform': 'translate(450px) scale(0.5)',
            '-ms-transform': 'translate(450px) scale(0.5)',
            'transform': 'translate(450px) scale(0.5)',
            'opacity': 0,
            'visibility': 'hidden'
          };

          break;
        case 'left':
          return {
            '-webkit-transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            '-moz-transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            '-o-transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            '-ms-transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            'transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            'opacity': 0.7,
            'visibility': 'visible',
            'z-index': '1'
          };

          break;
        case 'right':
          return {
            '-webkit-transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            '-moz-transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            '-o-transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            '-ms-transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            'transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            'opacity': 0.7,
            'visibility': 'visible',
            'z-index': '1'
          };

          break;
        case 'center':
          return {
            '-webkit-transform': 'translate(0px) scale(1)',
            '-moz-transform': 'translate(0px) scale(1)',
            '-o-transform': 'translate(0px) scale(1)',
            '-ms-transform': 'translate(0px) scale(1)',
            'transform': 'translate(0px) scale(1)',
            'opacity': 1,
            'visibility': 'visible',
            'z-index': '9999'
          };

          break;
      };
    },

    // 更新图片位置
    _setItems: function () {
      this.$items.removeClass('current');

      this.$currentItem = this.$items.eq(this.current)
        .addClass('current');
      this.$leftItem = (this.current === 0) ? this.$items.eq(this.itemsCount -
        1) : this.$items.eq(this.current - 1);

      this.$rightItem = (this.current === this.itemsCount - 1) ? this
        .$items
        .eq(0) : this.$items.eq(this.current + 1);


      //next & previous items
      if (this.itemsCount > 3) {
        // next item
        this.$nextItem = (this.$rightItem.index() === this.itemsCount -
            1) ?
          this.$items.eq(0) : this.$rightItem.next();
        this.$nextItem.css(this._getCoordinates('outright'));

        // previous item
        this.$prevItem = (this.$leftItem.index() === 0) ? this.$items
          .eq(
            this.itemsCount - 1) : this.$leftItem.prev();
        this.$prevItem.css(this._getCoordinates('outleft'));
      }


    },
    _loadEvents: function () {
      var _self = this;

      this.$navPrev.on('click.Swipe', function (event) {

        if (_self.options.autoplay) {

          clearTimeout(_self.slideshow);
          _self.options.autoplay = false;
        }

        _self._slide('prev');
        return false;
      });

      this.$navNext.on('click.Swipe', function (event) {
        if (_self.options.autoplay) {

          clearTimeout(_self.slideshow);
          _self.options.autoplay = false;
        }

        _self._slide('next');
        return false;
      });

      this.$list.on(
        'webkitTransitionEnd.Swipe transitionend.Swipe OTransitionEnd.Swipe',
        function (event) {
          _self.$currentItem.css(_self._getCoordinates('center'))
            .addClass('current');
          _self.$items.removeClass('swipe-transition');
          _self.isAnim = false;
        });

      if (this.$indicators) {
        this._switchItems();
      }

    },
    _slide: function (dir) {
      if (this.isAnim)
        return false;

      this.isAnim = true;
      this.$items.addClass("swipe-transition");

      switch (dir) {

        case 'next':
          this.current = this.$rightItem.index();

          this._layout();

          break;

        case 'prev':

          this.current = this.$leftItem.index();

          this._layout();

          break;
      };

    },
    _switchItems() {
      var _self = this;
      for (var i = 0, len = _self.$indicators.length; i < len; i++) { // 点击小圆点
        $(_self.$indicators[i])
          .bind('click', function () {
            var toIndex = parseInt($(this)
              .data('index'));
            var toMove = toIndex - _self.current;
            switch (toMove) {
              case 0:
                break;
              case 1:
                _self._slide('next');
                break;
              case -1:
                _self._slide('prev');
                break;
              default:
                _self._stopCycle();
                var interval = setInterval(function () {
                  if (!_self.isAnim) {
                    if (!toMove) {
                      clearInterval(interval);
                      if (_self.options.autoplay) {
                        _self._cycle();
                      }
                    } else if (toMove > 0) {
                      _self._slide('next');
                      toMove--;
                    } else if (toMove < 0) {
                      _self._slide('prev');
                      toMove++;
                    }
                  }
                }, 0);
                break;
            }
          });
      }
    },
    _cycle: function () {
      var _self = this;

      this.$cycle = setTimeout(function () {
        _self._slide('next');
        if (_self.options.autoplay) {
          _self._cycle();
        }

      }, this.options.interval);
    },
    _stopCycle: function () {
      clearTimeout(this.$cycle);
    },
    destroy: function () {
      this.$navPrev.off('.Swipe');
      this.$navNext.off('.Swipe');
      this.$list.off('.Swipe');
    }
  };

  var logError = function (message) {
    if (this.console) {
      console.error(message);
    }
  };

  // $.fn=$.prototype
  // 此处给JQuery添加Swipe方法
  $.fn.Swipe = function (options) {
     if(options===undefined) options={};
    if (typeof options === 'object') {
      this.each(function () {
        // jQuery.data( element, key, value )
        var instance = $.data(this, 'Swipe');
        if (!instance) {
          $.data(this, 'Swipe', new $.Swipe(options, this));
        }
      });
    } else {
      this.each(function () {
        var instance = $.data(this, 'Swipe');
        if (instance) {
          switch (options) {
            case 'cycle':
              instance._cycle();
              instance.options.autoplay = true;
              break;
            case 'stop':
              instance._stopCycle();
              instance.options.autoplay = false;
              break;
            case 'next':
              instance._slide('next');
              break;
            case 'prev':
              instance._slide('prev');
              break;
            default:
              logError("no such method '" + options +
                "' for Swipe instance");
              break;
          }
        } else {
          logError(
            "cannot call methods on Swipe prior to initialization; " +
            "attempted to call method '" + options + "'");
          return;
        }
      });
    }
    return this;
  };
})(jQuery);

