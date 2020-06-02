class Box{
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          'restitution':0.4, 
          'friction':0.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.a = 255
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("enemy.png");
    }
    display(){
      push();
      imageMode(CENTER);
      if (this.body.speed>2.5){
        this.a=this.a-2
        tint(255,this.a)
        World.remove(world,this.body)
        pop();
      }
      else{
        fill("green");
        image(this.image,this.body.position.x,this.body.position.y, this.width, this.height); 
      }
     
    }
  };