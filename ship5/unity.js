class Unity {

  // posição = centro do objeto
  constructor(x,  y, m){
    this.posX = x;
    this.posY = y;
    this.mass = m;
    this.size = 20;
  }

  display(){
    fill(150);
    stroke(5);
    // escala = distância do centro até a lateral
    var scl = this.size/2;
    rect(this.posX - scl, this.posY - scl, this.size, this.size);
  }
}
