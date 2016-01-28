idleOut = {}

idleOut.pageTimeOut = function(timeout) {
  this.timeout = timeout
}

idleOut.pageTimeOut.prototype.start = function() {
  var idleTime = 0;
  var minutes = this.timeout
  var alerted = true;

  if(alerted === true) {
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
  }

  function timerIncrement() {
    idleTime++;
    if (idleTime > minutes && alerted === true) { // 50 minutes
      alerted = false
      alert("Your page has timed out.  Please save/copy your information elsewhere before you are redirected to our login server.")
    }
  }

}
