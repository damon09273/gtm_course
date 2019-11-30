<script>
  function eventHandler (event) {
    window.dataLayer.push({
      'event': 'Image Mouse Hovered',
      'img.element': event.target,
      'img.elementClasses': event.target.className || '',
      'img.elementId': event.target.id || '',
      'img.alt': event.target.alt || '',
      'img.elementUrl': event.target.href || event.target.action || '',
      'img.originalEvent': event
    });
  }; 

  (function() {
      // Used attribute
      var attr = 'id' 
     
      // Value of attribute, all img that attribute contain this value will trigger event.
      var attr_value = 'product'
    
      // Use events from https://developer.mozilla.org/en-US/docs/Web/Events
      var eventName = 'mouseenter';

      // Attach listener directly to element or document if element not found
      var els = document.querySelectorAll("img[" + attr + "*='" + attr_value + "']") || document;

      // Leave useCapture to true if you want to avoid propagation issues.
      var useCapture = true;
      var i;

      for (i = 0; i < els.length; i++) {
        els[i].addEventListener(eventName, eventHandler, useCapture);
      };

  })();

</script>