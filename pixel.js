// base code

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '557199714403315');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=557199714403315&ev=PageView&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->


//
<script>
  fbq('track', 'viewedVideo', {
  url: {{換成影片URL的GTM變數名稱}},
  action: {{換成影片播放的GTM變數名稱}}
  });
</script>

// event -- viewcontent
<script>
  fbq('track', 'ViewContent');
</script>

// event -- addToCart
<script>
  fbq('track', 'AddToCart');
</script>

// event -- Puchase
<script>
  fbq('track', 'Purchase', {value: {{換成訂單金額的GTM變數名稱}}, currency:'TWD'});
</script>
