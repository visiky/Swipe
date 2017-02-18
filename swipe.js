$(window)
  .on('load', function () {
    var swipes = $('[data-ride="swipe"]')
    swipes.each(function (index, item) {
      var swipe = new Swipe(item)
      swipe.init()
    });
  })
  /*
   @param el :要进行轮转的元素
  */
var Swipe = function (element) {
  this.$element = $(element)
  this.$item = $(element)
    .children('.item')
  this.$length = $(element)
    .children('.item')
    .length
  this.$itemIndexArr = []
  for (var i = 0, len = this.$length; i < len; i++) {
    if (i < Math.floor(len / 2))
      this.$itemIndexArr[i] = 0
    else if (i > Math.floor(len / 2))
      this.$itemIndexArr[i] = 4
    if (i == Math.floor(len / 2) - 1)
      this.$itemIndexArr[i] = 1
    if (i == Math.floor(len / 2))
      this.$itemIndexArr[i] = 2
    if (i == Math.floor(len / 2) + 1)
      this.$itemIndexArr[i] = 3
  }
}
Swipe.prototype.DEFAULTS = {
  interval: 3000,
  pause: 'hover'
}
Swipe.prototype.init = function () {

  var that = this
  that.$item.each(function (index, item) {
    $(item)
      .addClass('p' + that.$itemIndexArr[index])
  })
  that.cycle()
  var links = this.$element.siblings('.slide_action')
    .find('a')
  links.each(function (index, item) {
    var type = $(item)
      .attr('class')
      .match(/left/) ? 'prev' : 'next'
    switch (type) {
      case 'prev':
        $(this)
          .bind('click', function () {
            that.prev()
          })
        break;
      case 'next':
        $(this)
          .bind('click', function () {
            that.next()
          })
        break;
    }
  });
}
Swipe.prototype.cycle = function () {
  var that = this
  var cycleInterval = setInterval(function () {
    return that.next()
  }, that.DEFAULTS.interval)
}
Swipe.prototype.next = function () {
  var len = this.$length
  var indexArr = this.$itemIndexArr
  this.$itemIndexArr = indexArr.map(function (item, index) {
    if (item === 4 && indexArr[(index + 1) % len] === 0) {
      return 0;
    } else if (item === 4) {
      return 4;
    }
    return item + 1;
  })
  return this.slide();
}
Swipe.prototype.prev = function () {
  var len = this.$length
  var indexArr = this.$itemIndexArr
  this.$itemIndexArr = indexArr.map(function (item, index) {
    if (item === 0 && indexArr[(index + len - 1) % len] === 4) {
      return 4;
    } else if (item === 0) {
      return 0;
    }
    return item - 1;
  })
  return this.slide();
}
Swipe.prototype.slide = function () {
  var indexArr = this.$itemIndexArr
  this.$item.removeClass('p0 p1 p2 p3 p4')
  this.$item.each(function (index, item) {
    $(item)
      .addClass('p' + indexArr[index])
  })
}
