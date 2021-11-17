elem = document.getElementById("container");
svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttributeNS(null, "width", "100%");
svg.setAttributeNS(null, "height", "400");
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

///////////// function to Clear canvas on every draw /////////////////////////////////

function clearcanvas() {
    while (svg.firstChild) {
        svg.removeChild(svg.lastChild);
    }
}
///////////////////////////////////////////////////////////////////////////////






