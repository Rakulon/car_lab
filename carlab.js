//Establishing Constructor

var Carz = function(make,model,year,color) {
this.make = make;
this.model = model;
this.year = year;
this.color = color;

this.state = "off";
this.prevOwner = [];
this.curOwner = "Manufacturer";
}

// PROTO TYPEZ

Carz.prototype.sell = function(newOwner) {
this.prevOwner.push(this.curOwner);
this.curOwner = newOwner;
console.log(this.curOwner + " is the new Owner!");
console.log("The Previous Owners were: " + this.prevOwner + "....These guys missed out");
};