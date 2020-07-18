var character

function startGame() {
  myGameArea.start()
  character = new component(30, 30, "red", 10, 120)


}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 700
    this.canvas.height = 400
    this.canvas.setAttribute('style', "position: absolute;  left: 50%;margin-left:-350px; top: 50%;margin-top:-300px;");
    this.context = this.canvas.getContext("2d")
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
  }
}

function component(width, height, color, x, y) {
  this.width = width
  this.height = height
  this.x = x
  this.y = y
  ctx = myGameArea.context
  ctx.fillStyle = color
  ctx.fillRect(this.x, this.y, this.width, this.height)
}