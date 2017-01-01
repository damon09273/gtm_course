<script>
function createCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      var value = Math.floor(date / 1000);
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(coupon_start){
    var date = new Date();
    now = Math.floor(date / 1000);
    if (Math.abs( now - coupon_start) < 86400 ){
      return true
    }
    else{
      return false
    }
}


if (readCookie('coupon')) {
  var coupon_start = getCookie('coupon');
  if ( coupon_start ){
    switch(checkCookie(coupon_start)){
      case true:
        console.log('coupon ok')
        break;
      case false:
        console.log('coupon bad')
        break;
    }
  }
} else {
    createCookie('coupon', '', 1);
    console.log('create cookie');
}
</script>
