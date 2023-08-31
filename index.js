var el = document.getElementById("blob"),
  elWidth = el.offsetWidth,
  elHeight = el.offsetHeight,
  width = window.innerWidth,
  height = window.innerHeight,
  target = {
    x: width / 2,
    y: height / 2
  },
  position = {
    x: height,
    y: width
  },
  ease = 0.200;

window.addEventListener("mousemove", function(event) {
  target.x = event.clientX;
  target.y = event.clientY;
});

function update() {
  var dx = target.x - position.x,
    dy = target.y - position.y,
    vx = dx * ease,
    vy = dy * ease;

  position.x += vx;
  position.y += vy;

  el.style.left = (position.x - elWidth / 2).toFixed() + "px";
  el.style.top = (position.y - elHeight / 2).toFixed() + "px";

  requestAnimationFrame(update);
}

update();

$(document).on('mousemove', function(e){

    $('blob').css('top', e.pageY);
    
    $('blob').css('left', e.pageX);
    
    $("a").mouseenter(function() {
    
        $("blob").addClass("link");
    
    });
    
    $("a").mouseleave(function() {
    
        $("blob").removeClass("link");
    
    });
    
    $("button").mouseenter(function() {
    
        $("blob").addClass("button");
    
    });
    
    $("button").mouseleave(function() {
    
        $("blob").removeClass("button");
    
    });
    
});

$( document ).ready(function(){
  $.ajax({
      url: 'path/to/your-file.html',
      type: 'HEAD',
      success: function() {
          // page exists
          // replace the href attribute with local host link
          document.getElementById('http://simplyperfectt.com').setAttribute('href', 'simplyperfect2.html');
      },
      error: function() {
          // page does not exist
          // do nothing, so your link sends user to remote site
      }
  });

});