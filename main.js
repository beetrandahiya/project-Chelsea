elem = document.getElementById("container");
svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttributeNS(null, "width", "100%");
svg.setAttributeNS(null, "height", "600");
elem.appendChild(svg);

///////////////////////////////////////////////////////////////////////////////
////////////////////// CIRCLE  ///////////////////////////////////////////////

class circle {
    constructor(cx, cy, r, fill,fill_opacity, stroke,stroke_width) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill_opacity = fill_opacity;
        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttributeNS(null, "cx", this.cx);
        this.circle.setAttributeNS(null, "cy", this.cy);
        this.circle.setAttributeNS(null, "r", this.r);
        this.circle.setAttributeNS(null, "fill", this.fill);
        this.circle.setAttributeNS(null, "stroke", this.stroke);
        this.circle.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.circle.setAttributeNS(null, "fill-opacity", this.fill_opacity); 
        svg.appendChild(this.circle);
        return this;
    }
}

///////////////////////////////////////////////////////////////////////////////
////////////////////// ELLIPSE  ///////////////////////////////////////////////

class ellipse{
    constructor(cx, cy, rx, ry, fill,fill_opacity, stroke,stroke_width) {
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
        this.fill = fill;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill_opacity = fill_opacity;
        this.ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        this.ellipse.setAttributeNS(null, "cx", this.cx);
        this.ellipse.setAttributeNS(null, "cy", this.cy);
        this.ellipse.setAttributeNS(null, "rx", this.rx);
        this.ellipse.setAttributeNS(null, "ry", this.ry);
        this.ellipse.setAttributeNS(null, "fill", this.fill);
        this.ellipse.setAttributeNS(null, "stroke", this.stroke);
        this.ellipse.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.ellipse.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        svg.appendChild(this.ellipse);
        return this;
    }
}



///////////////////////////////////////////////////////////////////////////////
////////////////////// RECTANGLE  ///////////////////////////////////////////////


class rect{
    constructor(x, y, width, height, fill,fill_opacity, stroke,stroke_width, anchor, border_radius) {
    
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.fill=fill;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill_opacity=fill_opacity;
        this.anchor=anchor ?? "top-left";
        this.border_radius=border_radius ?? 0;
        this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect.setAttributeNS(null, "fill", this.fill);
        this.rect.setAttributeNS(null, "stroke", this.stroke);
        this.rect.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.rect.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        this.rect.setAttributeNS(null, "rx", border_radius);
        this.rect.setAttributeNS(null, "ry", border_radius);
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
    constructor(x, y, stroke,stroke_width) {
        this.x = x;
        this.y = y;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.point.setAttributeNS(null, "cx", this.x);
        this.point.setAttributeNS(null, "cy", this.y);
        this.point.setAttributeNS(null, "r", this.stroke_width/2);
        this.point.setAttributeNS(null, "stroke", this.stroke);
        this.point.setAttributeNS(null, "stroke-width", this.stroke_width);
        svg.appendChild(this.point);
        return this;
    }
}


///////////////////////////////////////////////////////////////////////////////
////////////////////// LINE  ///////////////////////////////////////////////

class line{
    constructor(x1, y1, x2, y2, stroke,stroke_width, linecap, dasharray) {

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.dasharray = dasharray;
        this.linecap = linecap;
        this.line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null, "x1", this.x1);
        this.line.setAttributeNS(null, "y1", this.y1);
        this.line.setAttributeNS(null, "x2", this.x2);
        this.line.setAttributeNS(null, "y2", this.y2);
        this.line.setAttributeNS(null, "stroke", this.stroke);
        this.line.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.line.setAttributeNS(null, "stroke-dasharray", this.dasharray);
        this.line.setAttributeNS(null, "stroke-linecap", this.linecap);
        svg.appendChild(this.line);
        return this;

}
}

///////////////////////////////////////////////////////////////////////////////
///////////////////// TEXT ///////////////////////////////////////////////////

class text{
    constructor(x, y, inputtext, font_size, font_family, font_weight,stroke, stroke_width, fill, anchor) {
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
        
        this.text.innerHTML = this.inputtext;
        console.log(this.text);
        svg.appendChild(this.text);
        return this;
    }
}


///////////////////////////////////////////////////////////////////////////////
///////////////////// REGULAR POLYGON ///////////////////////////////////////////////////

class regpolygon{
    constructor(x,y,radius,sides,rotation,stroke,stroke_width,fill,fill_opacity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotation = rotation;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill = fill;
        this.fill_opacity = fill_opacity;
        
        this.regpolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        this.regpolygon.setAttributeNS(null, "points", this.points());
        this.regpolygon.setAttributeNS(null, "stroke", this.stroke);
        this.regpolygon.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.regpolygon.setAttributeNS(null, "fill", this.fill);
        this.regpolygon.setAttributeNS(null, "fill-opacity", this.fill_opacity);
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






///////////// function to Clear canvas on every draw /////////////////////////////////

function clearcanvas() {
    while (svg.firstChild) {
        svg.removeChild(svg.lastChild);
    }
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


