class Hero{

    constructor(titles, variables){

      this[titles[0]] = variables[0];
      this[titles[1]] = variables[1];
      this.characteristics = [{[titles[2]]: variables[2]}, {[titles[3]]: variables[3]}, {[titles[4]]: variables[4]}, {[titles[5]]: variables[5]}];
      this.attributes = [{[titles[6]]: variables[6]}, {[titles[7]]: variables[7]}, {[titles[8]]: variables[8]}, {[titles[9]]: variables[9]}];
      this[titles[10]] = variables[10];
      this[titles[11]] = variables[11];
      this[titles[12]] = variables[12];
      this[titles[13]] = variables[13];


    }
  }

  module.exports = Hero;
