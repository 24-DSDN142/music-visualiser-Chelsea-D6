
let img
let firstRun = true 
var lineCount =16
var fallstart1 = 0
var fallend1 = 2735
var lineCountb = 14
var lineCountc = 20
var y = 365
var textSize = 100
var fallstart2 = 2737
var fallend2 = 5310
var x = -630
var fallstart3 = 5312
var fallend3 = 8214
var lineCountj = 16
var fallstart4 = 9616
var fallend4 = 1205
var xgone = 0
var fallstart5 = 8215
var fallend5 = 12051
// nice

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  // print(counter)
  createCanvas(800, 800);
  background(0, 0, 0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  angleMode(degrees)

  

// first firework
let linelength = map(drum, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart1 && counter < fallend1)

  if(counter > 125){
    stroke(126, 223, 236)
    strokeWeight(3)
  }else{
    noStroke(0)
  }

// translate to the center 
translate(200, 350);
let lineCountA = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

// second firework
let linelength2 = map(bass, 0, 100, 100, 250)
push();
console.log(counter);
if(counter > fallstart1 && counter < fallend1)

  if(counter > 125){
    stroke(251, 154, 175)
    strokeWeight(3)
  }else{
    noStroke(0)
  }

// translate to the center 
translate(450, 575);
let lineCountb = 14;
for (let i=0; i<lineCountb; i++) {
  line(0, -40, 40, linelength2)
  rotate(360 / lineCountb)
}
pop();

// third firework
let linelength3 = map(other, 0, 100, 150, 300)
push();
console.log(counter);
if(counter > fallstart1 && counter < fallend1)

  if(counter > 125){
    stroke(240, 243, 179)
    strokeWeight(3)
  }else{
    noStroke(0)
  }

// translate to the center 
translate(550, 175);
let lineCountc = 20;
for (let i=0; i<lineCountc; i++) {
  line(0, -40, 40, linelength3)
  rotate(360 / lineCountc)
}
pop();

// fourth firework
let linelength4 = map(drum, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart2 && counter < fallend2)

  if(counter > 125){
    stroke(126, 223, 236)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(100, 100);
let lineCountD = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop()

// fifth firework
let linelength5 = map(bass, 0, 100, 100, 250)
push(); 
console.log(counter);
if(counter > fallstart2 && counter < fallend2)

  if(counter > 125){
    stroke(240, 243, 179)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(700, 700);
let lineCountE = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop()

// sixth firework
let linelength6 = map(drum, 0, 100, 100, 250)
push(); 
console.log(counter);
if(counter > fallstart3 && counter < fallend3)

  if(counter > 125){
    stroke(126, 223, 236)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(700, 350);
let lineCountF = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

// seventh firework
let linelength7 = map(drum, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart3 && counter < fallend3)

  if(counter > 125){
    stroke(206, 185, 240)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(150, 700);
let lineCountG = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

// eighth firework
let linelength8 = map(bass, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart3 && counter < fallend3)

  if(counter > 125){
    stroke(240, 243, 179)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(100, 150);
let lineCountH = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

// ninth firework
let linelength9 = map(other, 0, 100, 150, 300)
push();
console.log(counter);
if(counter > fallstart4 && counter < fallend4)

  if(counter > 125){
    stroke(251, 154, 175)
    strokeWeight(3)
  }else{
    noStroke()
  }

// push to the center 
translate(725, 125);
let lineCountI = 16;
for (let i=0; i<lineCountc; i++) {
  line(0, -40, 40, linelength2)
  rotate(360 / lineCountc)
}
pop();

// tenth firework
let linelengthk = map(drum, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart4 && counter < fallend4)

  if(counter > 125){
    stroke(126, 223, 236)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(175, 750);
let lineCountJ = 14;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

// eleventh firework
let linelengthl = map(vocal, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart4 && counter < fallend4)

  if(counter > 125){
    stroke(206, 185, 240)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(200, 175);
let lineCountK = 14;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

// twelth firework
let linelength12 = map(drum, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart5 && counter < fallend5)

  if(counter > 125){
    stroke(126, 223, 236)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(700, 350);
let lineCountL = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

// thirtenth firework
let linelength13 = map(drum, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart5 && counter < fallend5)

  if(counter > 125){
    stroke(206, 185, 240)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(150, 700);
let lineCountM = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

// fourtenth firework
let linelength14 = map(bass, 0, 100, 100, 250)

push(); 
console.log(counter);
if(counter > fallstart5 && counter < fallend5)

  if(counter > 125){
    stroke(240, 243, 179)
    strokeWeight(3)
  }else{
    noStroke()
  }

// translate to the center 
translate(100, 150);
let lineCountN = 16;
for (let i=0; i<lineCount; i++) {
  line(0, -40, 40, linelength)
  rotate(360 / lineCount)
}
pop();

push();
console.log(counter);
if(counter > 1125 && counter < 1255){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('OOOOOOOH', 35, 50);
pop()

push()
console.log(counter);
if(counter > 1305 && counter < 1405){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('You can DANCE', 35, 100 );
pop()

push()
console.log(counter);
if(counter > 1448 && counter < 1594){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('You can JIVE', 100, 125);
pop()

push()
console.log(counter);
if(counter > 1600 && counter < 1735){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('Having the time of your life', 150, 175);
pop()

push()
console.log(counter);
if(counter > 1816 && counter < 1886){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('OOOOOOOH', 50, 575);
pop()

push()
console.log(counter);
if(counter > 1917 && counter < 2015){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('See that girl', 75, 600);
pop()

push()
console.log(counter);
if(counter > 2020 && counter < 2085){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('watch that scene', 75, 630);
pop()

push()
console.log(counter);
if(counter > 2100 && counter < 2441){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('digging the DANCING QUEEN', 50, 675);
pop()


push()
console.log(counter);
if(counter > 2737 && counter < 2872){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('Friday night', 250, 234);
pop()

push()
console.log(counter);
if(counter > 2737 && counter < 2872){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('and the lights are', 250, 300);
pop()

push()
console.log(counter);
if(counter > 2737 && counter < 2872){
  fill(247, 247, 243)
}else{
  noFill()
}
if(counter > 2795){
  y+= 7.5
}else{
  y = 366
}
textSize(50)
textFont('Catalish Huntera');
text('low', 295, y);
pop()

push()
console.log(counter);
if(counter > 2970 && counter < 3245){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('Looking out for', 250, 234);
pop()

push()
console.log(counter);
if(counter > 2970 && counter < 3245){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('a place to go', 250, 300);
pop()

push()
console.log(counter);
if(counter > 3301 && counter < 3420){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('where they play', 250, 366);
pop()

push()
console.log(counter);
if(counter > 3301 && counter < 3420){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('the right music', 250, 432);
pop()

push()
console.log(counter);
if(counter > 3465 && counter < 3528){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('getting in the swing', 250, 366);
pop()

push()
console.log(counter);
if(counter > 3583 && counter < 3750){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('youve come to look for a king ', 250, 432);
pop()

push()
console.log(counter);
if(counter > 3889 && counter < 4125){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('Anybody could be that guy', 250, 498);
pop()

push()
console.log(counter);
if(counter > 4182 && counter < 4252){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('Night is young, and the music is', 250, 564);
pop()

push()
console.log(counter);
if(counter > 4306 && counter < 4423){
  fill(247, 247, 243)
}else{
  noFill()
}
if(counter > 4306){
  x+= -7.5
}else{
  x = 630
}
textSize(50)
textFont('Catalish Huntera');
text('high', 295, x);
pop()

push()
console.log(counter);
if(counter > 4474 && counter < 4583){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('with a bit of rock music', 250, 234);
pop()

push()
console.log(counter);
if(counter > 4620 && counter < 4711){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('everthing is fine', 250, 300);
pop()

push()
console.log(counter);
if(counter > 4742 && counter < 4878){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('youre in the mood for a dance', 250, 366);
pop()

push()
console.log(counter);
if(counter > 4979 && counter < 5224){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('and when you get the chance', 250, 432);
pop()

push()
console.log(counter);
if(counter > 5273 && counter < 5429){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('you are the DANCING QUEEN', 200, 432);
pop()

push()
console.log(counter);
if(counter > 5469 && counter < 5865){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('young and sweet only 17', 200, 498);
pop()

push()
console.log(counter);
if(counter > 5900 && counter < 6018){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(45)
textFont('Catalish Huntera');
text('DANCING QUEEN', 100, 400);
pop()

push()
console.log(counter);
if(counter > 6042 && counter < 6284){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('feel the beat from the tanbourine', 150, 466);
pop()

push()
console.log(counter);
if(counter > 6309 && counter < 6459){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(50)
textFont('Catalish Huntera');
text('OH YEAH', 150, 532);
pop()

push()
console.log(counter);
if(counter > 6475 && counter < 6571){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('You can DANCE', 400, 100 );
pop()

push()
console.log(counter);
if(counter > 6614 && counter < 6722){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('You can JIVE', 400, 125);
pop()

push()
console.log(counter);
if(counter > 6759 && counter < 6938){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('Having the time of your life', 275, 175);
pop()

push()
console.log(counter);
if(counter > 6975 && counter < 7028){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(30)
textFont('Catalish Huntera');
text('OOOOOOOH', 375, 250);
pop()

push()
console.log(counter);
if(counter > 7062 && counter < 7146){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('See that girl', 355, 325);
pop()

push()
console.log(counter);
if(counter > 7187 && counter < 7280){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('watch that scene', 355, 375);
pop()

push()
console.log(counter);
if(counter > 7302 && counter < 7760){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('digging the DANCING QUEEN', 200, 425);
pop()

push()
console.log(counter);
if(counter > 8190 && counter < 8404){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('Your a teaser', 425, 425);
pop()

push()
console.log(counter);
if(counter > 8190 && counter < 8404){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('You turn em on', 425, 445);
pop()

push()
console.log(counter);
if(counter > 8457 && counter < 8544){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('leave em burning', 425, 475);
pop()

push()
console.log(counter);
if(counter > 8457 && counter < 8544){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('and then your', 425, 495);
pop()

push()
console.log(counter);
if(counter > 8590 && counter < 8685){
  fill(247, 247, 243)
}else{
  noFill()
}
if(counter > 4306){
  xgone+= 7.5
}else{
  xgone = 0
}
textFont('Catalish Huntera');
text('gone', xgone, 495);
pop()

xgone = xgone +1

push()
console.log(counter);
if(counter > 8743 && counter < 8852){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('looking out for another', 375, 545);
pop()

push()
console.log(counter);
if(counter > 8890 && counter < 8994){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('anyone will do', 450, 565);
pop()

push()
console.log(counter);
if(counter > 9015 && counter < 9171){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('your in the mood for a dance', 375, 605);
pop()

push()
console.log(counter);
if(counter > 9246 && counter < 9501){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('and when you get the chance', 300, 665);
pop()

push()
console.log(counter);
if(counter > 9583 && counter < 9761){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('you are the DANCING QUEEN', 200, 432);
pop()

push()
console.log(counter);
if(counter > 9793 && counter < 10123){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('young and sweet only 17', 200, 498);
pop()

push()
console.log(counter);
if(counter > 10219 && counter < 10331){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(45)
textFont('Catalish Huntera');
text('DANCING QUEEN', 100, 400);
pop()

push()
console.log(counter);
if(counter > 10366 && counter < 10586){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(24)
textFont('Catalish Huntera');
text('feel the beat from the tanbourine', 150, 466);
pop()

push()
console.log(counter);
if(counter > 10625 && counter < 10763){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(50)
textFont('Catalish Huntera');
text('OH YEAH', 150, 532);
pop()

push()
console.log(counter);
if(counter > 10798 && counter < 10896){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('You can DANCE', 400, 100 );
pop()

push()
console.log(counter);
if(counter > 10936 && counter < 11042){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('You can JIVE', 400, 125);
pop()

push()
console.log(counter);
if(counter > 11076 && counter < 11250){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('Having the time of your life', 300, 175);
pop()

push()
console.log(counter);
if(counter > 11286 && counter < 11351){
  fill(247, 247, 243)
}else{
  noFill()
}
textSize(30)
textFont('Catalish Huntera');
text('OOOOOOOH', 375, 250);
pop()

push()
console.log(counter);
if(counter > 11379 && counter < 11453){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('See that girl', 355, 325);
pop()

push()
console.log(counter);
if(counter > 11491 && counter < 11578){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('watch that scene', 355, 375);
pop()

push()
console.log(counter);
if(counter > 11612 && counter < 11896){
  fill(247, 247, 243)
}else{
  noFill()
}
textFont('Catalish Huntera');
text('digging the DANCING QUEEN', 200, 425);
pop()

























}




























//   if (y < 400) {
//     stroke(48, 90, 132);
//     // print(counter)
//   }
//   console.log(counter)
//   if (counter > 10 && counter < 50){
//     fill(0)
//   }else{
//     fill(48, 90, 132)
//   }


//   ellipse(400, y, 20)

// if(counter > 170){
//   y+= -10
// }
// else{
//   y= 815
// }
//   if (y < 500) {
//     stroke(48, 90, 132);
//     // print(counter)
//   }
//   console.log(counter)
//   if (counter > 20 && counter < 70){
//     fill(0)
//     }else{
//       fill(48, 90, 132)
//     }
//   ellipse(200, y, 20)

 

 


// vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   //fill(0, 200, 0);
   //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
   //rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   //fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   //fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   //fill(255, 255, 0);
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);