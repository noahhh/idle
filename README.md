In application.js, add
//= require idleout/idleout

Then place this where you would like the timeout warning to occur

<script>
  timeout = new idleOut.pageTimeOut(50);
  timeout.start();
</script>

The timeout in the example is set to 50 minutes, but can be changed by replacing the 50 with a number of your choosing.
If no number is input, it will default to 50 minutes.

if <%= javascript_include_tag "application" %> is not in your <title>, you may need to
surround the script with a <%= content_for :script do %> tag.
