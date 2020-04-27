import React, {Component} from 'react';
import "./MainPage.scss"


class MainPage extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = "c = document.getElementById(\"c\"),\n" +
        " w = c.width = window.innerWidth,\n" +
        "    h = c.height = window.innerHeight,\n" +
        "    ctx = c.getContext( '2d' ),\n" +
        "\n" +
        "    minDist = 150,\n" +
        "    maxDist = 300,\n" +
        "    initialWidth = 3,\n" +
        "    maxLines = 50,\n" +
        "    initialLines = 4,\n" +
        "    speed = 1 ,\n" +
        "\n" +
        "    lines = [],\n" +
        "    frame = 0,\n" +
        "    timeSinceLast = 0,\n" +
        "\n" +
        "    dirs = [\n" +
        "        // straight x, y velocity\n" +
        "        [ 0, 1 ],\n" +
        "        [ 1, 0 ],\n" +
        "        [ 0, -1 ],\n" +
        "        [ -1, 0 ],\n" +
        "        // diagonals, 0.7 = sin(PI/4) = cos(PI/4)\n" +
        "        [ .7, .7 ],\n" +
        "        [ .7, -.7 ],\n" +
        "        [ -.7, .7 ],\n" +
        "        [ -.7, -.7]\n" +
        "    ],\n" +
        "    starter = { // starting parent line, just a pseudo line\n" +
        "\n" +
        "        x: w / 2,\n" +
        "        y: h / 2,\n" +
        "        vx: 0,\n" +
        "        vy: 0,\n" +
        "        width: initialWidth\n" +
        "    };\n" +
        "console.log(speed)\n" +
        "\n" +
        "function init() {\n" +
        "\n" +
        "    lines.length = 0;\n" +
        "\n" +
        "    for( var i = 0; i < initialLines; ++i )\n" +
        "        lines.push( new Line( starter ) );\n" +
        "\n" +
        "    ctx.fillStyle = '#191919';\n" +
        "    ctx.fillRect( 0, 0, w, h );\n" +
        "\n" +
        "    // if you want a cookie ;)\n" +
        "    ctx.lineCap = 'round';\n" +
        "}\n" +
        "function getColor( x ) {\n" +
        "\n" +
        "    return 'hsl( hue, 0%, 100% )'.replace(\n" +
        "        'hue', 0\n" +
        "    );\n" +
        "}\n" +
        "function anim() {\n" +
        "\n" +
        "    window.requestAnimationFrame( anim );\n" +
        "\n" +
        "    ++frame;\n" +
        "\n" +
        "    ctx.shadowBlur = 0;\n" +
        "    ctx.fillStyle = 'rgba(0,0,0,.02)';\n" +
        "    ctx.fillRect( 0, 0, w, h );\n" +
        "    ctx.shadowBlur = 1;\n" +
        "\n" +
        "    for( var i = 0; i < lines.length; ++i )\n" +
        "\n" +
        "        if( lines[ i ].step() ) { // if true it's dead\n" +
        "\n" +
        "            lines.splice( i, 1 );\n" +
        "            --i;\n" +
        "\n" +
        "        }\n" +
        "\n" +
        "    // spawn new\n" +
        "\n" +
        "    ++timeSinceLast\n" +
        "\n" +
        "    if( lines.length < maxLines && timeSinceLast > 10 && Math.random() < .5 ) {\n" +
        "\n" +
        "        timeSinceLast = 0;\n" +
        "\n" +
        "        lines.push( new Line( starter ) );\n" +
        "\n" +
        "        // cover the middle;\n" +
        "        ctx.fillStyle = ctx.shadowColor = getColor( starter.x );\n" +
        "        ctx.beginPath();\n" +
        "        ctx.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2 );\n" +
        "        ctx.fill();\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "function Line( parent ) {\n" +
        "\n" +
        "    this.x = parent.x | 0;\n" +
        "    this.y = parent.y | 0;\n" +
        "    this.width = parent.width / 1.25;\n" +
        "\n" +
        "    do {\n" +
        "\n" +
        "        var dir = dirs[ ( Math.random() * dirs.length ) |0 ];\n" +
        "        this.vx = dir[ 0 ];\n" +
        "        this.vy = dir[ 1 ];\n" +
        "\n" +
        "    } while (\n" +
        "        ( this.vx === -parent.vx && this.vy === -parent.vy ) || ( this.vx === parent.vx && this.vy === parent.vy) );\n" +
        "\n" +
        "    this.vx *= speed + 2;\n" +
        "    this.vy *= speed + 3;\n" +
        "\n" +
        "    this.dist = ( Math.random() * ( maxDist - minDist ) + minDist );\n" +
        "\n" +
        "}\n" +
        "Line.prototype.step = function() {\n" +
        "\n" +
        "    var dead = false;\n" +
        "\n" +
        "    var prevX = this.x,\n" +
        "        prevY = this.y;\n" +
        "\n" +
        "    this.x += this.vx;\n" +
        "    this.y += this.vy;\n" +
        "\n" +
        "    --this.dist;\n" +
        "\n" +
        "    // kill if out of screen\n" +
        "    if( this.x < 0 || this.x > w || this.y < 0 || this.y > h )\n" +
        "        dead = true;\n" +
        "\n" +
        "    // make children :D\n" +
        "    if( this.dist <= 0 && this.width > 1 ) {\n" +
        "\n" +
        "        // keep yo self, sometimes\n" +
        "        this.dist = Math.random() * ( maxDist - minDist ) + minDist;\n" +
        "\n" +
        "        // add 2 children\n" +
        "        if( lines.length < maxLines ) lines.push( new Line( this ) );\n" +
        "        if( lines.length < maxLines && Math.random() < .5 ) lines.push( new Line( this ) );\n" +
        "\n" +
        "        // kill the poor thing\n" +
        "        if( Math.random() < .2 ) dead = true;\n" +
        "    }\n" +
        "\n" +
        "    ctx.strokeStyle = ctx.shadowColor = getColor( this.x );\n" +
        "    ctx.beginPath();\n" +
        "    ctx.lineWidth = this.width;\n" +
        "    ctx.moveTo( this.x, this.y );\n" +
        "    ctx.lineTo( prevX, prevY );\n" +
        "    ctx.stroke();\n" +
        "\n" +
        "    if( dead ) return true\n" +
        "}\n" +
        "\n" +
        "init();\n" +
        "anim();\n" +
        "\n" +
        "window.addEventListener( 'resize', function() {\n" +
        "\n" +
        "    w = c.width = window.innerWidth;\n" +
        "    h = c.height = window.innerHeight;\n" +
        "    starter.x = w / 2;\n" +
        "    starter.y = h / 2;\n" +
        "\n" +
        "    init();\n" +
        "} )";
    this.div.appendChild(script);
  }

  render() {
    return (
        <div className="main-page" ref={el => (this.div = el)}>
          <div className='main-information'>
            <p>Меня зовут </p>
            <h2>Денис Кривошапко</h2>
            <p>и я занимаюсь</p>
            <p>front-end разработкой</p>
          </div>
          <canvas id="c"/>
        </div>
    )
  }

}

export default MainPage

