<script>
  function eventHandler (event) {
    window.dataLayer.push({
      event: 'Social Interaction',
      'target': {{Page Path}},
      'network': event.target.className.split('-')[1],
      'action': 'share'
    });
  }; 

  (function() {
      // Use events from https://developer.mozilla.org/en-US/docs/Web/Events
      var eventName = 'click';

      // Attach listener directly to element or document if element not found
      var els = document.querySelectorAll("img[class*='social']") || document;

      // Leave useCapture to true if you want to avoid propagation issues.
      var useCapture = true;
      var i;

      for (i = 0; i < els.length; i++) {
        els[i].addEventListener(eventName, eventHandler, useCapture);
      };

  })();

</script>