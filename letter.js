// this file decides whether to appear as a word or blank

var letter = function(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    //if not equal to appear then leave blank. else appear letter
    return !(this.appear) ? "_" : this.charac;
  };
};

//export constructor
module.exports = letter;