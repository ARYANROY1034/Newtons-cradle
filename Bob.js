class Bob{
constructur(x,y,r){
var options={
isStatic:false,
restitution:1,
friction:0,
density:0.8
}
this.body=Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.body)
this.x=x
this.y=y
this.r=r
}
display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
rectMode(CENTER)
fill("gray")
ellipse(0,0,this.r,this.r)
pop()
}
















}