class paper extends BaseClass  {
	constructor(x,y,r)
	{
    super( x,y,50,50,r/2);
    this.image = loadImage("sprites/paper.png");
	}
	display()
	{
	var paperPosition=this.body.position		
		
		superDisplay();
	}

}