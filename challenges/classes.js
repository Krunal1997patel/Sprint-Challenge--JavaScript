// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attr){
//     this.length = attr.length,
//     this.width = attr.width,
//     this.heigth = attr.heigth
// }

// CuboidMaker.prototype.volume = function(){
//     return `The cuboid volume is ${this.length * this.width* this.heigth}`
// }

// CuboidMaker.prototype.surfaceArea = function(){
//     return `The suface area is ${ 2 * (this.length * this.width + this.length * this.heigth + this.width * this.heigth)}`
// }

// const cuboid = new CuboidMaker({
//     length: 4,
//     width: 5,
//     heigth: 5
// })
  
//********************************  classs */

class CuboidMaker{
    constructor(attr){
        this.length = attr.length,
        this.width = attr.width,
        this.heigth = attr.heigth
    }  //constructor end here

    //method of CuboidMaker
    volume(){
        return `The cuboid volume is ${this.length * this.width* this.heigth}`
    }

    surfaceArea(){
        return `The suface area is ${ 2 * (this.length * this.width + this.length * this.heigth + this.width * this.heigth)}`
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    heigth: 5
})




// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(cubeAttr){
        super(cubeAttr);
        this.length = cubeAttr.length
    }

    volume(){
        return Math.pow(this.length, 3);
    }

    surfaceArea(){
        return 6 * Math.pow(this.length, 2);
    }


}

const box = new CubeMaker({
    length: 5
})

console.log(box.volume()) //125
console.log(box.surfaceArea()) //125