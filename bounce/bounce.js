<script>
  
   function start()
  {
    
   count = 0;
   shift = 5;
   snakes = [];
   snakes[0] = new Snake(random(totalWidth), 100, "http://artofstyle.hucklebury.com/wp-content/uploads/2014/03/barney-stinson-how-i-met-your-mother-suited-up-full-length.jpg");
   
   

    
    points = 0;
  }
  
  function Snake(x, y, picurl)
  {
    var xspeed = 6;
    var yspeed = 6;
    this.update = function()
    {
    picture(x, y, picurl);
      x += xspeed;
    y += yspeed;
      //Väggstuds
    if(x < 10)
      xspeed *= -1;
    if(y < 10)
      yspeed *= -1;
    if(x > totalWidth - 10)
      xspeed *= -1;
    if(y > totalHeight - 10)
      yspeed *= -1;
      if(distance(x, y, x, y) < 19)
    
      points++;
    }
    
    
    this.checkhit = function()
    {
      if(distance(mouse.x,  mouse.y, x, y) < 30)
        alert("nu är du nära");
    }
  }
  
  function update()
  {
   clearScreen();
    if(touchscreen.currentlyTouched)
    {
      rx=touchscreen.points[0].x;
      ry=touchscreen.points[0].y;
    }
      
   
    
    for(i = 0; i < snakes.length; i++)
    {
      var s = snakes[i];
      s.update();
      if (mouse.left){
        s.checkhit();
        
      }
	    }
  }
</script>