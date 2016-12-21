(function( $ ){
  $.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
      args.complete = $.proxy(args.complete, e);
      args.step = function(now) {
        $.style(e, 'transform', 'rotate(' + now + 'deg)');
        if (step) return step.apply(e, arguments);
      };

      $({deg: 0}).animate({deg: angle}, args);
    });
  };
}(jQuery));

var intro = true;

$(document).ready(function(){
  /**Intro**/
  if(intro){
    $('#loadingBar').animate({width:'100%'},1400);
    $('#logo').css({top:'-=100px',left:'-=100px'}).delay(1400).animate({opacity:'1'}, 800, function(){
      $('#loadingMidLine').animateRotate(0, 1400, function(){
        $('#loadingMidLine').animateRotate(-90, 1000, 'easeInOutQuart',function(){
          $('#midLine').css({'opacity':'1'});
          $('#loadingMidLine').css({'opacity':'0'});
          $('#rightM').animate({height:'50px',left:'-=17px',top:'-=8px'},200,'easeInQuad',function(){
            $('#leftM').animate({height:'50px',left:'-=17px',top:'-=43px'},200,'linear',function(){
              $('#verM').animate({height:'80px'},400,'easeOutBack');
            });
          });
          $('#horH').animate({width:'69px'},400,'easeInQuad',function(){
            $('#verH').animate({height:'90px',top:'97px'},400,'easeOutBack',function(){
              $('#logoImg').css({'opacity':'1'});
              $('#logo').css({'opacity':'0'});
            });
          });
        });
      });
      $('#loadingBar').delay(500);
      $('#loadingBar').animate({opacity:'0'},800);
    });
    $('#logoImg').delay(6000);
    $('#logoImg').animate({'top':'90px','height':'120px','width':'120px'}, 1200, 'easeInOutQuint',function(){
      //$('.pageTitle').animate({'top':'30px'},600,'easeInOutQuint');
        $('#loadScreen').animate({'top':'-120%'},700,'easeInOutCubic',function(){
          $('#loadScreen').animateRotate(-5,700,'easeInOutCirc',function(){
            $('.pageTitle').animate({opacity:'1'},600);
            $('#loadScreen').css({'position':'absolute'});
            $('html').css({'overflow':'visible'});
          });
        });
    });
  } else {
    $('#logoImg').css({opacity:'1',top:'90px',height:'120px',width:'120px'});
    $('#loadScreen').css({top:'-120%','transform':'rotate(-5deg)'});
    $('.pageTitle').css({opacity:'1'});
    $('#loadScreen').css({'position':'absolute'});
    $('html').css({'overflow':'visible'});
  }
  /**End Intro**/
});