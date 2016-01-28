idleOut = {}

idleOut.pageTimeOut = function(timeout) {
  this.timeout = timeout
}

idleOut.pageTimeOut.prototype.start = function() {
  var idleTime = 0;
  var increment = this.timeout
  var alerted = true;

  if(alerted === true) {
    var idleInterval = setInterval(timerIncrement, increment); // 1 minute
  }

  function timerIncrement() {
    idleTime++;
    if (idleTime > 1 && alerted === true) { // 50 minutes
      alerted = false
      alert("Your page has timed out.  Please save/copy your information elsewhere before you are redirected to our login server.")
    }
  }

}
