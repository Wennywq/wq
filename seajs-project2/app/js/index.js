define(function(require, exports, module){
	var SlideImg2 = require('slideimg/slideimg');
	var Task = {
		initPage: function(){
			new SlideImg2({
				wraper: $('#slideImgBox'),
				imgs: [
					{
						imgsrc: 'images/banner1.png'
					},
					{
						imgsrc: 'images/banner2.png'
					},
					{
						imgsrc: 'images/banner3.png'
					},
					{
						imgsrc: 'images/banner4.png'
					}
				]
			});
			// SlideImg.init();
		}
	}
	module.exports = Task;
});