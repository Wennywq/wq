define(function(require,exports,module){
	// 图片的显示和隐藏
	var Util = {
		slide: function(index){
			$('#banner li').eq(index).animate({opacity:1},1500).css({"z-index":"1"}).siblings().animate({opacity:0},1500).css({"z-index":"0"});
		}
	}
	module.exports = Util;
});