var idleTime = 0;
var alerted = true;
$(document).ready(function () {
  if(alerted === true) {
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
  }
});

function timerIncrement() {
  idleTime++;
  if (idleTime > 50 && alerted === true) { // 50 minutes
    alerted = false
    alert("Your page has timed out.  Please save/copy your information elsewhere before you are redirected to our login server.")
  }
}
