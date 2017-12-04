/*global sharedVueStuff, Vue, socket */
'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getOrderNumber() {
  // It's probably not a good idea to generate a random order number, client-side.
  // A better idea would be to let the server decide.
  return "#" + getRandomInt(1, 1000000);
}

new Vue({
  el: '#orderSys',
  mixins: [sharedVueStuff],
  methods: {
    placeOrder: function() {
      // adding ordered burgers to order
      var orderItems = [].filter.call(document.getElementsByName('burgerBox'), function(i) {
        return i.checked;}).map(function(i) {
        return i.value;
      });
      // adding ordered drinks to order
      var sodaType = document.getElementsByName("sodaType");
      for (var i = 0; i<sodaType.length; i++) {
        if (sodaType[i].checked){
          orderItems.push(sodaType[i].value);
        }
      }
      // adding ordered water to order (neutral water is included)
      // var waterType = document.getElementById("waterType");
      // orderItems.push(waterType.options[waterType.selectedIndex].value);

      if (orderItems.length > 0){
      socket.emit('order', {orderId: getOrderNumber(), orderItems: orderItems});
    }
    }
  }
});
