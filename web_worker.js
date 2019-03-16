onmessage = function(e) {
  console.log(e);
  var message = e.data;
  var timer = null;
  if (message.type === "start") {
    timer = setInterval(function() {
      postMessage("call");
    }, e.data.interval);
  }
};
