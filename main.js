/*
Name : ChelseaJS
License : MIT
Author/ Creator : Prakrisht Dahiya
Support the Creator : www.github.com/beetrandahiya   ,  https://www.buymeacoffee.com/beetran
*/

///////////////////////////////////////////////////////////////////////
/////////////// Basic functions //////////////////////////////////////
function setCanvas(element){
    elem=element;
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", "100%");
    svg.setAttributeNS(null, "height", "100%");
    //for definitions like filters
    defs=document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svg.appendChild(defs);
    elem.appendChild(svg);
    WIDTH =svg.clientWidth;
    HEIGHT =svg.clientHeight;


}


///////////////////////////////////////////////////////////////////////
///////////////  CONSTANTS /////////////////////////////////////////////

const PI = Math.PI;
const TAU = 2 * Math.PI;
const HALF_PI = Math.PI / 2;
const QUARTER_PI = Math.PI / 4;
const THIRD_PI = Math.PI / 3;
const PHI = (1 + Math.sqrt(5)) / 2;
const E = Math.E;



///////////////////////////////////////////////////////////////////////
///////////////////Random and Scaling functions //////////////////////////////////

function random(a,b){
    return Math.random()*(b-a)+a;
}

function randomInt(a,b){
    return Math.floor(Math.random()*(b-a)+a);
}

function randomBool(){
    return Math.random()>0.5;
}

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomColorRGB(){
    return "rgb("+randomInt(0,255)+","+randomInt(0,255)+","+randomInt(0,255)+")";
}
function randomColorRGBA() {
    return "rgba("+randomInt(0,255)+","+randomInt(0,255)+","+randomInt(0,255)+","+random(0,1)+")";
}


function randomColorHex(){
    return "#"+randomInt(0,255).toString(16)+randomInt(0,255).toString(16)+randomInt(0,255).toString(16);
}

function randomColorHSL(){
    return "hsl("+randomInt(0,360)+","+randomInt(0,100)+"%,"+randomInt(0,100)+"%)";
}

function randomColorHSLA() {
    return "hsla("+randomInt(0,360)+","+randomInt(0,100)+"%,"+randomInt(0,100)+"%,"+random(0,1)+")";
}

function clamp(e,a,b){                        //constrain value of e between a and b
    return Math.min(Math.max(e,a),b);
}

function randomGaussian(mean, stdev) {
    var y1, x1, x2, w;
    do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
    } while (w >= 1.0);
    return mean + stdev * x1 * Math.sqrt(-2.0 * Math.log(w) / w);
}


///////////////////////////////////////////////////////////////////////////////
////////////////////// CIRCLE  ///////////////////////////////////////////////

class circle {
    constructor(cx, cy, r, fill,fill_opacity, stroke,stroke_width,filter_id) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill_opacity = fill_opacity;
        this.filter_id = filter_id || "";
        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttributeNS(null, "cx", this.cx);
        this.circle.setAttributeNS(null, "cy", this.cy);
        this.circle.setAttributeNS(null, "r", this.r);
        this.circle.setAttributeNS(null, "fill", this.fill);
        this.circle.setAttributeNS(null, "stroke", this.stroke);
        this.circle.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.circle.setAttributeNS(null, "fill-opacity", this.fill_opacity); 
        if(filter_id){
        this.circle.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.circle);
        return this;
    }
}


///////////////////////////////////////////////////////////////////////////////
////////////////////// ELLIPSE  ///////////////////////////////////////////////

class ellipse{
    constructor(cx, cy, rx, ry, fill,fill_opacity, stroke,stroke_width,filter_id) {
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
        this.fill = fill;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill_opacity = fill_opacity;
        this.filter_id = filter_id || "";
        this.ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        this.ellipse.setAttributeNS(null, "cx", this.cx);
        this.ellipse.setAttributeNS(null, "cy", this.cy);
        this.ellipse.setAttributeNS(null, "rx", this.rx);
        this.ellipse.setAttributeNS(null, "ry", this.ry);
        this.ellipse.setAttributeNS(null, "fill", this.fill);
        this.ellipse.setAttributeNS(null, "stroke", this.stroke);
        this.ellipse.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.ellipse.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        if(filter_id){
        this.ellipse.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.ellipse);
        return this;
    }
}



///////////////////////////////////////////////////////////////////////////////
////////////////////// RECTANGLE  ///////////////////////////////////////////////


class rect{
    constructor(x, y, width, height, fill,fill_opacity, stroke,stroke_width, anchor="top-left", border_radius=0, filter_id) {
    
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.fill=fill;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill_opacity=fill_opacity;
        this.anchor=anchor;
        this.border_radius=border_radius;
        this.filter_id = filter_id || "";
        this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect.setAttributeNS(null, "fill", this.fill);
        this.rect.setAttributeNS(null, "stroke", this.stroke);
        this.rect.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.rect.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        this.rect.setAttributeNS(null, "rx", this.border_radius);
        this.rect.setAttributeNS(null, "ry", this.border_radius);
        if(filter_id){
        this.rect.setAttributeNS(null,"filter","url(#"+this.filter_id+")");}
        switch(anchor){
            case "center":
                this.rect.setAttributeNS(null, "x", this.x-this.width/2);
                this.rect.setAttributeNS(null, "y", this.y-this.height/2);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
            case "top-left":
                this.rect.setAttributeNS(null, "x", this.x);
                this.rect.setAttributeNS(null, "y", this.y);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
            case "top-right":
                this.rect.setAttributeNS(null, "x", this.x-this.width);
                this.rect.setAttributeNS(null, "y", this.y);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
            case "bottom-left":
                this.rect.setAttributeNS(null, "x", this.x);
                this.rect.setAttributeNS(null, "y", this.y-this.height);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
            case "bottom-right":
                this.rect.setAttributeNS(null, "x", this.x-this.width);
                this.rect.setAttributeNS(null, "y", this.y-this.height);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
        }
        svg.appendChild(this.rect);
        return this;

    
    }
}

///////////////////////////////////////////////////////////////////////////////
////////////////////// POINT  ///////////////////////////////////////////////

class point{
    constructor(x, y, stroke,stroke_width,filter_id) {
        this.x = x;
        this.y = y;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.filter_id = filter_id || "";
        this.point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.point.setAttributeNS(null, "cx", this.x);
        this.point.setAttributeNS(null, "cy", this.y);
        this.point.setAttributeNS(null, "r", this.stroke_width/2);
        this.point.setAttributeNS(null, "stroke", this.stroke);
        this.point.setAttributeNS(null, "stroke-width", this.stroke_width);
        if(this.filter_id){
        this.point.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.point);
        return this;
    }
}


///////////////////////////////////////////////////////////////////////////////
////////////////////// LINE  ///////////////////////////////////////////////

class line{
    constructor(x1, y1, x2, y2, stroke,stroke_width, linecap="butt", dasharray="", filter_id) {

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.dasharray = dasharray;
        this.linecap = linecap;
        this.filter_id = filter_id || "";
        this.line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null, "x1", Math.round(this.x1));
        this.line.setAttributeNS(null, "y1", Math.round(this.y1));
        this.line.setAttributeNS(null, "x2", Math.round(this.x2));
        this.line.setAttributeNS(null, "y2", Math.round(this.y2));
        this.line.setAttributeNS(null, "stroke", this.stroke);
        this.line.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.line.setAttributeNS(null, "stroke-dasharray", this.dasharray);
        this.line.setAttributeNS(null, "stroke-linecap", this.linecap);
        if(this.filter_id){
       this.line.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.line);
        return this;

}
}



///////////////////////////////////////////////////////////////////////////////
///////////////////// REGULAR POLYGON ///////////////////////////////////////////////////

class regpolygon{
    constructor(x,y,radius,sides,rotation,fill,fill_opacity,stroke,stroke_width,filter_id) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotation = rotation;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill = fill;
        this.fill_opacity = fill_opacity;
        this.filter_id = filter_id || "";
        this.regpolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        this.regpolygon.setAttributeNS(null, "points", this.points());
        this.regpolygon.setAttributeNS(null, "stroke", this.stroke);
        this.regpolygon.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.regpolygon.setAttributeNS(null, "fill", this.fill);
        this.regpolygon.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        if(this.filter_id){
        this.regpolygon.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.regpolygon);
        return this;
        
    }
    points(){
        var points = "";
        var angle = (Math.PI*2)/this.sides;
        for(var i=0; i<this.sides; i++){
            var x = this.x+this.radius*Math.cos(angle*i+this.rotation);
            var y = this.y+this.radius*Math.sin(angle*i+this.rotation);
            points += x+","+y+" ";
        }
        return points;
    }
   
}


///////////////////////////////////////////////////////////////////////////////
///////////////////// STAR ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

class star{
    constructor(x,y,outer_radius,inner_radius,sides,rotation,fill,fill_opacity,stroke,stroke_width,filter_id) {
        this.x=x;
        this.y=y;
        this.outer_radius=outer_radius;
        this.inner_radius=inner_radius;
        this.rotation=rotation;
        this.sides=sides;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;
        this.filter_id = filter_id || "";
        this.star=document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        this.star.setAttributeNS(null, "points", this.points());
        this.star.setAttributeNS(null, "stroke", this.stroke);
        this.star.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.star.setAttributeNS(null, "fill", this.fill);
        this.star.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        if(this.filter_id){
        this.star.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.star);
        return this;

    }
    points(){
        var points = "";
        var outer_angle = (Math.PI*2)/this.sides;
        var inner_angle = (Math.PI)/this.sides;
        for(var i=0; i<this.sides; i++){ 
            var xv = this.x+this.outer_radius*Math.cos(outer_angle*i+this.rotation);
            var yv = this.y+this.outer_radius*Math.sin(outer_angle*i+this.rotation);
            points += xv+","+yv+" ";
            var xv = this.x+this.inner_radius*Math.cos(inner_angle+(i*outer_angle)+this.rotation);
            var yv = this.y+this.inner_radius*Math.sin(inner_angle+(i*outer_angle )+this.rotation);
            points += xv+","+yv+" ";
        }
        return points;
    }

}


////////////////////////////////////////////////////////////////////
//////////////////// POLYGON //////////////////////////////////////
//////////////////////////////////////////////////////////////////


class polygon{
    constructor(inppoints,fill , fill_opacity,stroke,stroke_width,close=false,filter_id) {
        this.inppoints=inppoints;
        this.stroke= stroke;
        this.stroke_width = stroke_width;
        this.fill = fill;
        this.fill_opacity = fill_opacity;
        this.close = close;
        this.filter_id = filter_id || "";
        this.polygon = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.polygon.setAttributeNS(null, "d",this.pathd());    
        this.polygon.setAttributeNS(null, "stroke", this.stroke);
        this.polygon.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.polygon.setAttributeNS(null, "fill",this.fill);
        this.polygon.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        if(filter_id){
        this.polygon.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.polygon);
        return this;
    }

    pathd(){
        var dtext=" M "+this.inppoints[0][0]+","+this.inppoints[0][1];
        for(var i=0 ; i<this.inppoints.length;i++){
            dtext+= "L " +this.inppoints[i][0]+","+this.inppoints[i][1]+ " ";

        }
        if(this.close){
            dtext+= "Z";
        }
        
        return dtext;
    }
}

////////////////////////////////////////////////////////////////////
//////////////////// TWO POINT CUBIC BEZIER ////////////////////////
//////////////////////////////////////////////////////////////////


class twoPointCubicBezier{
    constructor(x1,y1,xc1,yc1,x2,y2,xc2,yc2,fill,fill_opacity,stroke,stroke_width, filter_id){
        this.x1=x1;
        this.y1=y1;
        this.xc1=xc1;
        this.yc1=yc1;
        this.x2=x2;
        this.y2=y2;
        this.xc2=xc2;
        this.yc2=yc2;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;
        this.filter_id = filter_id || "";

        this.twoPointCubicBezier = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.twoPointCubicBezier.setAttributeNS(null, "d",`M ${this.x1},${this.y1} C ${this.xc1},${this.yc1} ${this.xc2},${this.yc2} ${this.x2},${this.y2}`);
        this.twoPointCubicBezier.setAttributeNS(null, "stroke", this.stroke);
        this.twoPointCubicBezier.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.twoPointCubicBezier.setAttributeNS(null, "fill",this.fill);
        this.twoPointCubicBezier.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        if(filter_id){
        this.twoPointCubicBezier.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.twoPointCubicBezier);
        return this;

    }


}


////////////////////////////////////////////////////////////////////
//////////////////// TWO POINT QUADRATIC BEZIER ////////////////////////
//////////////////////////////////////////////////////////////////
class twoPointQuadraticBezier{
    constructor(x1,y1,xc,yc,x2,y2,fill,fill_opacity,stroke,stroke_width, filter_id){
        this.x1=x1;
        this.y1=y1;
        this.xc=xc;
        this.yc=yc;
        this.x2=x2;
        this.y2=y2;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;
        this.filter_id = filter_id || "";

        this.twoPointQuadraticBezier = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.twoPointQuadraticBezier.setAttributeNS(null, "d",`M ${this.x1},${this.y1} Q ${this.xc},${this.yc} ${this.x2},${this.y2}`);
        this.twoPointQuadraticBezier.setAttributeNS(null, "stroke", this.stroke);
        this.twoPointQuadraticBezier.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.twoPointQuadraticBezier.setAttributeNS(null, "fill",this.fill);
        this.twoPointQuadraticBezier.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        if(filter_id){
        this.twoPointQuadraticBezier.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.twoPointQuadraticBezier);
        return this;

    }}



////////////////////////////////////////////////////////////////////
//////////////////// CUBIC BEZIER //////////////////////////////////
//////////////////////////////////////////////////////////////////

class cubicbezier{
    constructor(points,fill,fill_opacity,stroke,stroke_width,line_tension=0.2,close=false,filter_id) {
        this.points=points;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;
        this.line_tension=line_tension;
        this.close=close;
        this.filter_id = filter_id || "";
        
        this.cubicbezier = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.cubicbezier.setAttributeNS(null, "d",this.svgPath(this.points, this.bezierCommand));
        this.cubicbezier.setAttributeNS(null, "stroke", this.stroke);
        this.cubicbezier.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.cubicbezier.setAttributeNS(null, "fill",this.fill);
        this.cubicbezier.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        if(filter_id){
        this.cubicbezier.setAttributeNS(null, "filter", "url(#"+this.filter_id+")");}
        svg.appendChild(this.cubicbezier);
        return this;
    }

////////////////////////////////////////////////////////////////////
//////////////////// Code from project-G ///////////////////////////
//////////////////////////////////////////////////////////////////
        
        
    svgPath(points, command) {
        this.dval = points.reduce((acc, point, i, a) => i === 0
            ? `M ${point[0]},${point[1]}`
            : `${acc} ${command(point, i, a)}`
            , '')
            if(this.close){
                this.dval+="Z";
            }


            return this.dval;
    }
    bezierCommand = (point, i, a) => {
        // start control point
        const [cpsX, cpsY] = this.controlPoint(a[i - 1], a[i - 2], point)
        // end control point
        const [cpeX, cpeY] = this.controlPoint(point, a[i - 1], a[i + 1], true)
        return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
    }
    controlPoint = (current, previous, next, reverse) => {

        const p = previous || current
        const n = next || current
       
        const smoothing =this.line_tension;
       
        const o = this.bline(p, n)
        const angle = o.angle + (reverse ? Math.PI : 0)
        const length = o.length * smoothing
        
        const x = current[0] + Math.cos(angle) * length
        const y = current[1] + Math.sin(angle) * length
        return [x, y]
    }

    bline = (pointA, pointB) => {
        const lengthX = pointB[0] - pointA[0]
        const lengthY = pointB[1] - pointA[1]
        return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX)
        }
    }
    
}


//////////////////////////////////////////////////////////////////////////
/////////////////////// ARC /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

class arc{
    constructor(cx, cy, rx,ry, start_angle , end_angle, fill_type,fill, fill_opacity,stroke,stroke_width,filter_id) {
        this.cx=cx;
        this.cy=cy;
        this.rx=rx;
        this.ry=ry;
        this.start=start_angle;
        this.end=end_angle;
        this.fill_type= fill_type;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;
        this.filter_id = filter_id || "";
        this.arc=document.createElementNS("http://www.w3.org/2000/svg","path");
        this.arc.setAttributeNS(null,"d",this.dval(this.cx,this.cy,this.rx,this.ry,this.start,this.end,this.fill_type));
        this.arc.setAttributeNS(null,"stroke",this.stroke);
        this.arc.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.arc.setAttributeNS(null,"fill",this.fill);
        this.arc.setAttributeNS(null,"fill-opacity",this.fill_opacity);
        if(filter_id){
        this.arc.setAttributeNS(null,"filter",`url(#${this.filter_id})`);}
        svg.appendChild(this.arc);
        return this;



    }

    dval(cx, cy, rx,ry, start_angle , end_angle, fill_type){
        const Δo = (end_angle-start_angle);
        const fA = ((Δo > Math.PI) ? 1 : 0);
        const fS = ((Δo > 0) ? 1 : 0);
        const start_pointx=cx+rx*Math.sin(start_angle);
        const start_pointy=cy-ry*Math.cos(start_angle);
        const end_pointx=cx+rx*Math.sin(end_angle);
        const end_pointy=cy-ry*Math.cos(end_angle);
        var dpath= ` M ${start_pointx},${start_pointy} A ${rx} ${ry} 0 ${fA} ${fS} ${end_pointx} ${end_pointy} `;
        
        switch(fill_type){
            case "pie":
                dpath+= "L " +cx+","+cy+" Z";
                break;
            case "chord":
                dpath+= " Z";
                break;
            case "open":
                break;

        }


        return dpath;

    }
    

}



///////////////////////////////////////////////////////////////////////////////
///////////////////// TEXT ///////////////////////////////////////////////////

class text{
    constructor(x, y, inputtext, font_size, font_family, font_weight,stroke, stroke_width, fill, anchor="start", filter_id) {
        this.x = x;
        this.y = y;
        this.inputtext = inputtext;
        this.font_size = font_size;
        this.font_family = font_family;
        this.font_weight = font_weight;
        this.fill = fill;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.anchor = anchor;
        this.filter_id = filter_id || "";
        this.text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this.text.setAttributeNS(null, "x", this.x);
        this.text.setAttributeNS(null, "y", this.y);
        this.text.setAttributeNS(null, "font-size", this.font_size);
        this.text.setAttributeNS(null, "font-family", this.font_family);
        this.text.setAttributeNS(null, "font-weight", this.font_weight);
        this.text.setAttributeNS(null, "fill", this.fill);
        this.text.setAttributeNS(null, "text-anchor", this.anchor);
        this.text.setAttributeNS(null, "stroke", this.stroke);
        this.text.setAttributeNS(null, "stroke-width", this.stroke_width);
        if (filter_id) {
        this.text.setAttributeNS(null, "filter", `url(#${this.filter_id})`);}
        
        this.text.innerHTML = this.inputtext;
        svg.appendChild(this.text);
        return this;
    }
}

///////////////////////////////////////////////////////////////////////////////
///////////////////// FONT ///////////////////////////////////////////////////

function loadFont(url,font_family){
    var font = document.createElement("style");
    font.type = "text/css";
    font.innerHTML = "@font-face { font-family: '"+font_family+"'; src: url('"+url+"'); }";
    document.head.appendChild(font);
}


///////////////////////////////////////////////////////////////////////////////
///////////////////// CURSOR ///////////////////////////////////////////////////
function setCursor(cursor) {
    svg.style.cursor = cursor;
}
///////////////////////////////////////////////////////////////////////////////
///////////////////// TIME ///////////////////////////////////////////////////

function getTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    var time = {
        h: h,
        m: m,
        s: s,
        ms: ms
    };
    return time;
}

function getDate(){
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth()+1;
    var day = d.getDate();
    var date = {
        y: y,
        m: m,
        day: day
    };
    return date;
}

function getTimeString(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    var time = h+":"+m+":"+s+":"+ms;
    return time;
}

function getDateString(format='dd-mm-yyyy'){
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth()+1;
    if(m.length<1){
        m="0"+m;
    }
    var day = d.getDate();
    if(day.length<1){
        day="0"+day;
    }
    format=format;
    format=format.toLowerCase();
    switch(format){
        case "yyyy-mm-dd":
            var date = y+"-"+m+"-"+day;
            break;
        case "dd-mm-yyyy":
            var date = day+"-"+m+"-"+y;
            break;
        case "mm-dd-yyyy":
            var date = m+"-"+day+"-"+y;
            break;
        case "yyyy-dd-mm":
            var date = y+"-"+day+"-"+m;
            break;
        case "dd-yyyy-mm":
            var date = day+"-"+y+"-"+m;
            break;
        case "mm-yyyy-dd":
            var date = m+"-"+y+"-"+day;
            break;
        case "yyyy/mm/dd":
            var date = y+"/"+m+"/"+day;
            break;
        case "dd/mm/yyyy":
            var date = day+"/"+m+"/"+y;
            break;
        case "mm/dd/yyyy":
            var date = m+"/"+day+"/"+y;
            break;
        case "yyyy/dd/mm":
            var date = y+"/"+day+"/"+m;
            break;
        case "dd/yyyy/mm":
            var date = day+"/"+y+"/"+m;
            break;
        case "mm/yyyy/dd":
            var date = m+"/"+y+"/"+day;
            break;
    }
    return date;
}

function getDayName(){
    var d = new Date();
    var day = d.getDay();
    var dayname = "";
    switch(day){
        case 0:
            dayname = "Sunday";
            break;
        case 1:
            dayname = "Monday";
            break;
        case 2:
            dayname = "Tuesday";
            break;
        case 3:
            dayname = "Wednesday";
            break;
        case 4:
            dayname = "Thursday";
            break;
        case 5:
            dayname = "Friday";
            break;
        case 6:
            dayname = "Saturday";
            break;
}
return dayname;


}


///////////////////////////////////////////////////////////////////////////////
/////////////////// Time taken for function execution /////////////////////////

function timeTaken(func){
    var t0 = performance.now();
    func();
    var t1 = performance.now();
    return t1 - t0;
}


///////////////////////////////////////////////////////////////////////////////
/////////////////// Vectors ///////////////////////////////////////////////////

function createVector(x, y) {
    return {
        x: x,
        y: y
    };
}

function dotProduct(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
}

function crossProduct(v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
}

function magnitude(v) {
    return Math.sqrt(dotProduct(v, v));
}

function normalize(v) {
    var l = magnitude(v);
    return createVector(v.x / l, v.y / l);
}

function setMagnitude(v, l) {
    return multiplyVec(normalize(v), l);
}

function projection(v1, v2) {
    return dotProduct(v1, v2) / magnitude(v2);
}

function reflect(v1, v2) {
    var cp = crossProduct(v1, v2);
    theta=angleBetween(v1,v2);
    if(cp<0){
        theta = -theta;
    }
    return rotate(v1,2*theta);

}

function angleBetween(v1, v2) {
    return Math.acos(dotProduct(v1, v2) / (magnitude(v1) * magnitude(v2)));
}

function rotate(v, angle) {
    var s = Math.sin(angle);
    var c = Math.cos(angle);
    return createVector(v.x * c - v.y * s, v.x * s + v.y * c);
}

function addVec(v1, v2) {
    return createVector(v1.x + v2.x, v1.y + v2.y);
}

function subtractVec(v1, v2) {
    return createVector(v1.x - v2.x, v1.y - v2.y);
}

function multiplyVec(v, scalar) {
    return createVector(v.x * scalar, v.y * scalar);
}

function divideVec(v, scalar) {
    return createVector(v.x / scalar, v.y / scalar);
}

function distanceVec(v1, v2) {
    return magnitude(subtractVec(v1, v2));
}
function limitVec(v, max){
    if(magnitude(v)>max){
        return setMagnitude(v,max);
    }
    return v;
}

function angle(v) {
    return Math.atan2(v.y, v.x);
}

function randomVector(){
    return normalize(createVector(Math.random(),Math.random()));
}

function randomVectorComp(min, max) {
    return createVector(Math.random() * (max - min) + min, Math.random() * (max - min) + min);
}

function randomVectorMagnitude(min, max) {
    var v = randomVector();
    return multiplyVec(v,min,max);
}

function randomVectorAngle(angle, min=0, max=1) {
    var v = createVector(Math.cos(angle),Math.sin(angle));
    return multiplyVec(v,random(min,max));
}

///////////// function to Clear canvas on every draw /////////////////////////////////

function clearCanvas() {
    while (svg.firstChild) {
        svg.removeChild(svg.lastChild);
    }
    defs=document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svg.appendChild(defs);
}
///////////////////////////////////////////////////////////////////////////////



////////// function to map a value from one range to another ///////////////////////
// linearly maps value from the range (a..b) to (c..d)
function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}
///////////////////////////////////////////////////////////////////////////////

function constrain(value, min, max) {
    if(value<min){
        return min;
    }
    if(value>max){
        return max;
    }
    return value;
}
/////////// function to convert degree to radian ///////////////////
function degToRad(deg) {
    return deg * Math.PI / 180;
}


function radToDeg(rad) {
    return rad * 180 / Math.PI;
}
///////////////////////////////////////////////////////////////////////////////

////////////// common mathematical functions ///////////////////////////////

// trignometry functions
function sin(angle) {
    return Math.sin(angle);
}

function cos(angle) {
    return Math.cos(angle);
}

function tan(angle) {
    return Math.tan(angle);
}

function asin(angle) {
    return Math.asin(angle);
}

function acos(angle){
    return Math.acos(angle);
}

function atan(angle){
    return Math.atan(angle);
}

function atan2(y,x){
    return Math.atan2(y,x);
}

function atanh(angle){
    return Math.atanh(angle);
}

function sinh(angle){
    return Math.sinh(angle);
}
function cosh(angle){
    return Math.cosh(angle);
}
function tanh(angle){
    return Math.tanh(angle);
}
///////////////////////


function abs(e){
    return Math.abs(e);
}
function sqrt(e){
    return Math.sqrt(e);
}
function cbrt(e){
    return Math.cbrt(e);
}
function pow(e,p){
    return Math.pow(e,p);
}
function exp(e){
    return Math.exp(e);
}
function log(e){
    return Math.log(e);
}
function log10(e){
    return Math.log10(e);
}
function floor(e){
    return Math.floor(e);
}
function ceil(e){
    return Math.ceil(e);
}
function round(e){
    return Math.round(e);
}

function dist(x1,y1,x2,y2){
    return Math.sqrt(pow(x2-x1,2)+pow(y2-y1,2));
}

function max(a){
    return Math.max(...a);
}
function min(a){
    return Math.min(...a);
}

function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    return n * factorial(n - 1);
}

function combinations(n,r){
    return factorial(n)/(factorial(r)*factorial(n-r));
}
function permutations(n,r){
    return factorial(n)/factorial(n-r);
}
 
function makecombinations(arr){
    var combs=[];
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            combs.push([arr[i],arr[j]]);
        }
    }
    return combs;
}
///////////////////////////////////////////////////////////////////////////////
///////////// function to get mouse position /////////////////////////////////


mousepos={x:0,y:0};
  function fetch_mouse_pos(canvas, evt) {
    
    var rect = canvas.getBoundingClientRect();
    canvas.addEventListener(evt, function(evt) {
        //console.log(evt.clientX - rect.left, evt.clientY - rect.top);
        return mousepos={
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    });
};

//// use mousepos.x and mousepos.y to get mouse position /////////////////

///////////////////////////////////////////////////////////////////////////////
////////////// Linear Interpolation Function /////////////////////////////////////////

function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}

///////////////////////////////////////////////////////////////////////////////
/////////////// Cosine Interpolation Function ////////////////////////////////

function cosrp(a, b, n) {
    return a + (b - a) * (1 - Math.cos(n * Math.PI)) / 2;
}

///////////////////////////////////////////////////////////////////////////////
/////////////// smoothstep function //////////////////////////////////////////

function smoothstep(a, b, x) {
    var t = clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
}
function smootherstep(a, b, x) {
    var t = clamp((x - a) / (b - a), 0, 1);
    return t * t * t * (t * (t * 6 - 15) + 10);
}


// think about catmull-rom interpolation


///////////////////////////////////////////////////////////////////////////////
/////////////// PRNG (Psuedo Random Number Generator) /////////////////////////

function PRNG(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

///////////////////////////////////////////////////////////////////////////////
/////////////// Psuedo Random Array Generator ///////////////////////////////

// x0=seed; a=multiplier; b=increment; m=modulus; n=desired array length;
//  !isnt working well needto be changed

function PRAG(x0,a,b,m,n){
    const results=[];
    for(let i=0;i<n;i++){
        x0=(a*x0+b)%m;
        results.push(x0);
    }
    return results;
}


///////////////////////////////////////////////////////////////////////////////
/////////////// lerp color ///////////////////////////////////////////////////

function lerpHex(a, b, n) {
    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + n * (br - ar),
        rg = ag + n * (bg - ag),
        rb = ab + n * (bb - ab);
    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}


///////////////////////////////////////////////////////////////////////////////
/////////////// conversion functions //////////////////////////////////////////


function RGBtoHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function HextoRGB(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


function RGBtoHSL(r,g,b){
    r /= 255;
    g /= 255;
    b /= 255;

    let cmin = Math.min(r,g,b),
    cmax = Math.max(r,g,b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
        // Calculate hue
    // No difference
    if (delta == 0)
    h = 0;
    // Red is max
    else if (cmax == r)
    h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
    h = (b - r) / delta + 2;
    // Blue is max
    else
    h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
        // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return {
        h : h,
        s : s+"%",
        l : l+"%"
    }
}

function HSLtoRGB(h,s,l){
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;
    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;  
        } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
    
        return {
            r : r,
            g : g,
            b : b 
        }
}

function HextoHSL(H){
    // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    h : h,
    s : s+"%",
    l : l+"%"
}
}

function HSLtoHex(h,s,l) {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0, 
        b = 0; 
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }



/////////////////////////////////////////////////////////////////
/////////////////     Filters     ///////////////////////////////

class GaussianBlur{
    constructor(stdDev,id){
        this.stdDev = stdDev;
        this.id = id;
        this.filterContainer= document.createElementNS("http://www.w3.org/2000/svg", "filter");
        this.filterContainer.id = this.id;
        this.filter= document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        this.filter.setAttributeNS(null,"stdDeviation",this.stdDev);
        this.filterContainer.appendChild(this.filter);
        this.filterContainer.setAttributeNS(null,"filterUnits","userSpaceOnUse");
        defs.appendChild(this.filterContainer);
        return this.filterContainer;
    }
}

class DropShadow{
    constructor(dx,dy,blur,floodColor,floodOpacity,id){
        this.dx=dx;
        this.dy=dy;
        this.blur=blur;
        this.id=id;
        this.floodColor=floodColor;
        this.floodOpacity=floodOpacity;
        this.filterContainer= document.createElementNS("http://www.w3.org/2000/svg", "filter");
        this.filterContainer.id = this.id;
        this.filter= document.createElementNS("http://www.w3.org/2000/svg", "feDropShadow");
        this.filter.setAttributeNS(null,"dx",this.dx);
        this.filter.setAttributeNS(null,"dy",this.dy);
        this.filter.setAttributeNS(null,"stdDeviation",this.blur);
        this.filter.setAttributeNS(null,"flood-color",this.floodColor);
        this.filter.setAttributeNS(null,"flood-opacity",this.floodOpacity);
        this.filterContainer.appendChild(this.filter);
        this.filterContainer.setAttributeNS(null,"filterUnits","userSpaceOnUse");
        defs.appendChild(this.filterContainer);
        return this.filterContainer;
    }
}

class Glow{
    constructor(stdDev,id){

        this.stdDev = stdDev;
        this.id = id;
        this.filterContainer= document.createElementNS("http://www.w3.org/2000/svg", "filter"); 
        this.filterContainer.id = this.id;
        this.filter= document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        this.filter.setAttributeNS(null,"stdDeviation",this.stdDev);
        this.filter.setAttributeNS(null,"result","coloredBlur");
        this.filterContainer.appendChild(this.filter);
        this.femerge= document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        this.coloredBlur= document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        this.coloredBlur.setAttributeNS(null,"in","coloredBlur");
        this.sourceGraphic= document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        this.sourceGraphic.setAttributeNS(null,"in","SourceGraphic");
        this.femerge.appendChild(this.coloredBlur);
        this.femerge.appendChild(this.sourceGraphic);
        this.filterContainer.appendChild(this.femerge);
        this.filterContainer.setAttributeNS(null,"filterUnits","userSpaceOnUse");
        defs.appendChild(this.filterContainer);
        return this.filterContainer;
        
    }
}

class Morph{
    constructor(operator,radius,id){
        this.operator = operator;   // dilate or erode
        this.radius = radius;
        this.id = id;
        this.filterContainer= document.createElementNS("http://www.w3.org/2000/svg", "filter");
        this.filterContainer.id = this.id;
        this.filter= document.createElementNS("http://www.w3.org/2000/svg", "feMorphology");
        this.filter.setAttributeNS(null,"operator",this.operator);
        this.filter.setAttributeNS(null,"radius",this.radius);
        this.filterContainer.appendChild(this.filter);
        this.filterContainer.setAttributeNS(null,"filterUnits","userSpaceOnUse");
        defs.appendChild(this.filterContainer);
        return this.filterContainer;
    }
}

class Distortion{
    constructor(type,radius,id){
        this.type = type;   // dilate or erode
        this.radius = radius;
        this.id = id;
        this.filterContainer= document.createElementNS("http://www.w3.org/2000/svg", "filter");
        this.filterContainer.id = this.id;
        this.filter= document.createElementNS("http://www.w3.org/2000/svg", "feDistortion");
        this.filter.setAttributeNS(null,"type",this.type);
        this.filter.setAttributeNS(null,"radius",this.radius);
        this.filterContainer.appendChild(this.filter);
        this.filterContainer.setAttributeNS(null,"filterUnits","userSpaceOnUse");
        defs.appendChild(this.filterContainer);
        return this.filterContainer;
    }
}

/*

class PointLight{
    constructor(x,y,z,color,id){
        this.x = x;
        this.y = y;
        this.z = z;
        this.id = id;
        this.color = color;
        this.filterContainer= document.createElementNS("http://www.w3.org/2000/svg", "filter");
        this.filterContainer.id = this.id;
        this.filterSpec= document.createElementNS("http://www.w3.org/2000/svg", "feSpecularLighting");
        this.filterSpec.setAttributeNS(null,"surfaceScale","1");
        this.filterSpec.setAttributeNS(null,"specularConstant","1");
        this.filterSpec.setAttributeNS(null,"specularExponent","10");
        this.filterSpec.setAttributeNS(null,"lighting-color",this.color);
        this.filterSpec.setAttributeNS(null,"result","this.id");
        this.filterPoint= document.createElementNS("http://www.w3.org/2000/svg", "fePointLight");
        this.filterPoint.setAttributeNS(null,"x",this.x);
        this.filterPoint.setAttributeNS(null,"y",this.y);
        this.filterPoint.setAttributeNS(null,"z",this.z);
        this.filterSpec.appendChild(this.filterPoint);
        this.filterComposite= document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        this.filterComposite.setAttributeNS(null,"operator","arithmetic");
        this.filterComposite.setAttributeNS(null,"in","SourceGraphic");
        this.filterComposite.setAttributeNS(null,"in2","this.id");
        this.filterComposite.setAttributeNS(null,"k1","1");
        this.filterComposite.setAttributeNS(null,"k2","0");
        this.filterComposite.setAttributeNS(null,"k3","0");
        this.filterComposite.setAttributeNS(null,"k4","0");
        this.filterComposite.setAttributeNS(null,"result","this.id");
        this.filterContainer.appendChild(this.filterSpec);
        this.filterContainer.appendChild(this.filterComposite);
        this.filterContainer.setAttributeNS(null,"filterUnits","userSpaceOnUse");
        defs.appendChild(this.filterContainer);
        return this.filterContainer;
        
    }
}

*/


////////////////////////////////////////////////
////////// make Gradient ///////////////////////

class Gradient{
    constructor(style, colors, spread_method, id){
       // this.defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        this.style=style;
        this.spread_method=spread_method||"pad";
        if(style=="horizontal"){
            this.gradient=document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
            this.gradient.setAttributeNS(null,"x1","0%");
            this.gradient.setAttributeNS(null,"y1","0%");
            this.gradient.setAttributeNS(null,"x2","100%");
            this.gradient.setAttributeNS(null,"y2","0%");
            this.gradient.setAttributeNS(null,"spreadMethod",this.spread_method);
            this.gradient.setAttributeNS(null,"id",id);
            for(var i=0;i<colors.length;i++){
                var stop=document.createElementNS("http://www.w3.org/2000/svg", "stop");
                if(typeof colors[i]=="string"){
                    stop.setAttributeNS(null,"offset",i*100/colors.length+"%");
                    stop.setAttributeNS(null,"stop-color",colors[i]);
                }
                else if(typeof colors[i]=="object"){
                    stop.setAttributeNS(null,"offset",colors[i][0]);
                    stop.setAttributeNS(null,"stop-color",colors[i][1]);
                }
                this.gradient.appendChild(stop);
            }
            this.gradient.setAttributeNS(null,"gradientUnits","userSpaceOnUse");
            defs.appendChild(this.gradient);
        }
        else if(style=="vertical"){
            this.gradient=document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
            this.gradient.setAttributeNS(null,"x1","0%");
            this.gradient.setAttributeNS(null,"y1","0%");
            this.gradient.setAttributeNS(null,"x2","0%");
            this.gradient.setAttributeNS(null,"y2","100%");
            this.gradient.setAttributeNS(null,"spreadMethod",this.spread_method);
            this.gradient.setAttributeNS(null,"id",id);
            for(var i=0;i<colors.length;i++){
                var stop=document.createElementNS("http://www.w3.org/2000/svg", "stop");
                if(typeof colors[i]=="string"){
                    stop.setAttributeNS(null,"offset",i*100/colors.length+"%");
                    stop.setAttributeNS(null,"stop-color",colors[i]);
                }
                else if(typeof colors[i]=="object"){
                    stop.setAttributeNS(null,"offset",colors[i][0]);
                    stop.setAttributeNS(null,"stop-color",colors[i][1]);
                }
                this.gradient.appendChild(stop);
            }
            this.gradient.setAttributeNS(null,"gradientUnits","userSpaceOnUse");
            defs.appendChild(this.gradient);
        }
        else if(style=="radial"){
            this.gradient=document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
            this.gradient.setAttributeNS(null,"cx","50%");
            this.gradient.setAttributeNS(null,"cy","50%");
            this.gradient.setAttributeNS(null,"r","50%");
            this.gradient.setAttributeNS(null,"spreadMethod",this.spread_method);
            this.gradient.setAttributeNS(null,"id",id);
            for(var i=0;i<colors.length;i++){
                var stop=document.createElementNS("http://www.w3.org/2000/svg", "stop");
                if(typeof colors[i]=="string"){
                    stop.setAttributeNS(null,"offset",i*100/colors.length+"%");
                    stop.setAttributeNS(null,"stop-color",colors[i]);
                }
                else if(typeof colors[i]=="object"){
                    stop.setAttributeNS(null,"offset",colors[i][0]);
                    stop.setAttributeNS(null,"stop-color",colors[i][1]);
                }
                this.gradient.appendChild(stop);
            }
            this.gradient.setAttributeNS(null,"gradientUnits","userSpaceOnUse");
            defs.appendChild(this.gradient);
        }
        return this.gradient;


    }
}


////////////////////////////////////////////////
////////// perlin noise ////////////////////////

class noise{
    constructor(seed){
        this.seed=seed;
        this.p=[151,160,137,91,90,15,
            131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
            190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
            88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
            77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
            102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
            135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
            5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
            223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
            129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
            251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
            49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
            138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
    }
    perlin2d(x,y){
        var X=Math.floor(x)&255;
        var Y=Math.floor(y)&255;
        x-=Math.floor(x);
        y-=Math.floor(y);
        var u=this.fade(x);
        var v=this.fade(y);
        var A=this.p[X]+Y;
        var AA=this.p[A];
        var AB=this.p[A+1];
        var B=this.p[X+1]+Y;
        var BA=this.p[B];
        var BB=this.p[B+1];
        var a=this.lerp(this.grad(this.p[AA],x,y),this.grad(this.p[BA],x-1,y),u);
        var b=this.lerp(this.grad(this.p[AB],x,y-1),this.grad(this.p[BB],x-1,y-1),u);
        return (this.lerp(a,b,v)+1)/2;
    }
    perlin3d(x,y,z){
        var X=Math.floor(x)&255;
        var Y=Math.floor(y)&255;
        var Z=Math.floor(z)&255;
        x-=Math.floor(x);
        y-=Math.floor(y);
        z-=Math.floor(z);
        var u=this.fade(x);
        var v=this.fade(y);
        var w=this.fade(z);
        var A=this.p[X]+Y;
        var AA=this.p[A]+Z;
        var AB=this.p[A+1]+Z;
        var B=this.p[X+1]+Y;
        var BA=this.p[B]+Z;
        var BB=this.p[B+1]+Z;
        var a=this.lerp(this.grad(this.p[AA],x,y,z),this.grad(this.p[BA],x-1,y,z),u);
        var b=this.lerp(this.grad(this.p[AB],x,y-1,z),this.grad(this.p[BB],x-1,y-1,z),u);
        var c=this.lerp(this.grad(this.p[AA+1],x,y,z-1),this.grad(this.p[BA+1],x-1,y,z-1),u);
        var d=this.lerp(this.grad(this.p[AB+1],x,y-1,z-1),this.grad(this.p[BB+1],x-1,y-1,z-1),u);
        return (this.lerp(this.lerp(a,b,v),this.lerp(c,d,v),w)+1)/2;
    }
    fade(t){
        return t*t*t*(t*(t*6-15)+10);
    }
    lerp(a,b,x){
        return a+x*(b-a);
    }
    grad(hash,x,y){
        switch(hash&3){
            case 0: return x+y;
            case 1: return -x+y;
            case 2: return x-y;
            case 3: return -x-y;
        }
    }
}
