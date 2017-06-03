//creating Objects with physics
function setup()
{
    createCanvas(outerWidth,outerHeight);
    background(255);
}
function mousePressed()
{
    background(255);
}
function draw()
{
    
   if(mouseIsPressed)
        {
            
    fill(255);
    strokeWeight(5);
    stroke(random(255,0,0));
}
   else{ 
   fill(255, 150, 0);
    strokeWeight(5);
    stroke(255,random(0, 204),0);
    }
    
   for(var i = 0; i <10; i++)
   {
    line(mouseX,mouseY,random(mouseX-100,mouseX+100),random(mouseY-100,mouseY+100));
    }
    ellipse(mouseX,mouseY,40,40);

}