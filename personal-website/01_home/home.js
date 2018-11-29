
var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var img3 = document.querySelector('#img3');
var img5 = document.querySelector('#img5');
var img6 = document.querySelector('#img6.small');
var img7 = document.querySelector('#img7.small');
var img8 = document.querySelector('#img8.small');
var img9 = document.querySelector('#img9.small');
var img10 = document.querySelector('#img10');
var img11 = document.querySelector('#img11');
var img12 = document.querySelector('#img12.small');
var img13 = document.querySelector('#img13.small');
var text = document.querySelector('.text');
var text2 = document.querySelector('.text2');
var canvas = document.getElementById("draw");

//-------------------------------------------------------//
// set canvas id to variable

// get canvas 2D context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.outerWidth;
  ctx.canvas.height = window.outerHeight;
}

// add event listeners to specify when functions should be triggered
window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// last known position
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX + 10 ;
  pos.y = e.clientY + 50;
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is pressed.....

  var color = document.getElementById("hex").value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = 2; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = 'white'; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke() // draw it!

}

//-------------------------------------------------------//

text.addEventListener('click', function() {
	img1.style.filter = 'blur(0px)';
  img2.style.filter = 'blur(0px)';
  img3.style.filter = 'blur(0px)';
  img5.style.filter = 'blur(0px)';
  img10.style.filter = 'blur(0px)';
  img11.style.filter = 'blur(0px)';

  img6.style.filter = 'blur(3px)';
    img6.style.opacity = '0.2';
  img7.style.filter = 'blur(3px)';
    img7.style.opacity = '0.2';
  img8.style.filter = 'blur(3px)';
    img8.style.opacity = '0.2';
  img9.style.filter = 'blur(3px)';
    img9.style.opacity = '0.2';
  img12.style.filter = 'blur(3px)';
    img12.style.opacity = '0.2';
  img13.style.filter = 'blur(3px)';
    img13.style.opacity = '0.2';

  text.style.filter = 'blur(8px)';
  text2.style.filter = 'blur(8px)';
  canvas.style.zIndex = '6';
})


//------------------------------------------------------------------//


text2.addEventListener('click', function() {
  img1.style.filter = 'blur(3px)';
  img2.style.filter = 'blur(3px)';
  img3.style.filter = 'blur(3px)';
  img5.style.filter = 'blur(3px)';
  img10.style.filter = 'blur(3px)';
  img11.style.filter = 'blur(3px)';

  text.style.zIndex = '1';
  text.style.filter = 'blur(0px)';
  text2.style.filter = 'blur(0px)';
  canvas.style.zIndex = '1';

  img6.style.filter = 'blur(0px)';
    img6.style.opacity = '1';
  img7.style.filter = 'blur(0px)';
    img7.style.opacity = '1';
  img8.style.filter = 'blur(0px)';
    img8.style.opacity = '1';
  img9.style.filter = 'blur(0px)';
    img9.style.opacity = '1';
  img12.style.filter = 'blur(0px)';
    img12.style.opacity = '1';
  img13.style.filter = 'blur(0px)';
    img13.style.opacity = '1';

})

//----------------------------------------------------------------//
