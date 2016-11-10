/*
 *轮播图组件
 * imgs = [{imgsrc:'https://'},{imgsrc:'https://'}]
 */
define(function(require, exports, module) {
    // 加载样式
    require('slideimg/slideimg.css');
    // 引入slideimg.html
    var _html = require('slideimg/slideimg.html');
    // 转义成函数
    var _htmlFn = _.template( _html );

    var SlideImg = function(option) {
        // imgs 用来存放图片数据
        option = option || {};
        $.extend(true, this.default, option);
        this.imgs = this.default.imgs;
        this.gap = this.default.gap;
        this.wraper = this.default.wraper;
        this.wraper.append( _htmlFn({imgs: this.imgs}) );
        this.init();
    }
    SlideImg.prototype.default = {
        imgs: [],
        gap: 2500,
        wraper: $('body')
    }
    SlideImg.prototype.init = function() {
        var me = this;
        var $imgs = $('.showImg img', me.wraper);
        var $pointer = $('.showImg .slidePointer span', me.wraper);
        var curIndex = me.imgs.length-1;
        var inter = setInterval(function() {
            curIndex++;
            if (curIndex == $imgs.length) {
                curIndex = 0;
            }
            $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
            $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
        }, me.gap);

        // $pointer.on('click', function(e) {
        //     clearInterval(inter);
        //     var _index = $pointer.index($(e.target));
        //     curIndex = _index;
        //     $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
        //     $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');

        //     inter = setInterval(function() {
        //         curIndex++;
        //         if (curIndex == $imgs.length) {
        //             curIndex = 0;
        //         }
        //         $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
        //         $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
        //     }, me.gap);
        // });

          $pointer.on('mouseover', function(e) {
            clearInterval(inter);
            var _index = $pointer.index($(e.target));
            curIndex = _index;
            $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
            $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');

            inter = setInterval(function() {
                curIndex++;
                if (curIndex == $imgs.length) {
                    curIndex = 0;
                }
                $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
                $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
            }, me.gap);
        });
          // 点击按钮
           $('.slide-txt .btn').on('click',function(){
              $('.mask').show();
           });

            $('.mask .span1').on('click',function(){
              $('.mask').hide();
           });
            $('.mask .span2').on('click',function(){
              $('.mask').hide();
           });
    }
    module.exports = SlideImg;
})
