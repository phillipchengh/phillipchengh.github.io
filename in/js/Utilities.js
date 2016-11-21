module.exports = {

  randomOrder: function(n) {
    var order = [];
    for (var i = 0; i < n; i++) {
      order.push(i);
    }

    var counter = n;

    while (counter > 0) {
      var random_index = Math.floor(Math.random() * counter);
      counter--;
      var temp = order[counter];
      order[counter] = order[random_index];
      order[random_index] = temp;
    }

    return order;
  }

};