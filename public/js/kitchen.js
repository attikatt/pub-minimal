/*global sharedVueStuff, Vue, socket */
'use strict';

new Vue({
  el: '#orders',
  mixins: [sharedVueStuff],
  methods: {
    markDone: function(orderid) {
      socket.emit("orderDone", orderid);
    }
  }
});