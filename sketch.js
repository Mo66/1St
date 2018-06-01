function setup() {
  createCanvas(400,400);
}
var Pflag = 1, Mx =0 , My=0;
var Q = [];
var yes ='Yes', no='No';
var yesBoxX =250,yesBoxY =150, yesSize=34;
var noBoxX =150,noBoxY =150, noSize=34;
function draw() {
  background(200);
  fill(150);
  strokeWeight(4);
  stroke(51);
  rect(95,110,270,-40);
  rect(yesBoxX-5,yesBoxY-28,yesSize+32,yesSize);
  rect(noBoxX-5,noBoxY-28,noSize+18,noSize);
  Q[0]= 'are you crazy?';
  fill(0);
  strokeWeight(2);
  stroke(51);
  textSize(32);
  text(Q[0],100,100)
  strokeWeight(2);
  stroke(51);
  textSize(32);
  text(yes,yesBoxX,yesBoxY);
  text(no,noBoxX,noBoxY);


  //print('Y'+pmouseY + ' -> ' + mouseY);
  //print('X'+pmouseX + ' -> ' + mouseX);
  if (Pflag == 1) {
    if ((My>=(noBoxY-28) && My <= (noBoxY+noSize)) && (Mx>=(noBoxX-5) && Mx <= (noBoxX+noSize)) ){
      fill(10);
      rect(100,300,100,100);
      //print('IN '+ Pflag);

      //Pflag = 0;
      // print('Y'+pmouseY + ' ---> ' + mouseY);
      // print('X'+pmouseX + ' ---> ' + mouseX);
    } else if ((My>=(yesBoxY-28) && My <= (yesBoxY+noSize)) && (Mx>=(yesBoxX-5) && Mx <= (yesBoxX+yesSize))){
    fill(250,0,0);
    rect(250,300,100,100);}
  }




}
function mousePressed() {
  Mx = pmouseX;
  My = pmouseY;
  Pflag = 1;
  print(Pflag + ' ' + Mx+ ' ' + My);
  // prevent default
  return false;
}
