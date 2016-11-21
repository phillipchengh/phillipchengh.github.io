var K = require('./Constants');

module.exports = {

  randomChar: function() {
    // 93: # of valid ascii chars (126-33), but use 94 because Math.random is [0, 1)
    // 33: offset to first valid ascii char: !
    return String.fromCharCode(Math.floor((Math.random() * 94) + 33)); 
    // return String.fromCharCode(Math.floor((Math.random() * 35) + 91)); 
  },

  randomString: function(n) {
    var chars = [];
    for (var i = 0; i < n; i++) {
      chars.push(this.randomChar());
    }
    var result = chars.join("");
    return result;
  },

  scrambleRandomChar: function(source, target) {
    if (source.length === 0) {
      return source;
    }
    var source_array = source.split("");
    var target_array = target.split("");
    var random_index = Math.floor(Math.random()*source.length);
    // if the char to be scrambled is correct, then leave it correct
    if (random_index > (target_array.length-1) || source_array[random_index] !== target_array[random_index]) {
      source_array[random_index] = this.randomChar();
    }
    return source_array.join("");
  },

  setCharAt: function(source, target, index) {
    var source_array = source.split("");
    var target_array = target.split("");
    source_array[index] = target_array[index];
    source = source_array.join("");
    return source;
  }

};