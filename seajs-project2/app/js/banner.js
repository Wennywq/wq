define(function(require, exports, module){
	var util = require('./util');
// 定时器
    var showIndex = 0;
    setInterval(function(){
    	util.slide(showIndex);
    	showIndex++;
    	if(showIndex > 1){
            showIndex=0;
    	}
    },2000);

	var banner = require('../view/bannerView.html');
	var bannerHtml = _.template( banner );

	// 通过ajax获取数据
	$.ajax({
		type:"GET",
		url:"test.json",
		success:function(res){
			// 获取banner数据
			var bannerArr = res.banner;
            $('#banner').html( bannerHtml({imgArr:bannerArr}) );
		}
	})

});