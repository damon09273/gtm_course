function() {
  prefix = 'vr - '
  if ( /step/.test({{Click Classes}}) ) {
    return prefix + {{Click Classes}}.match(/step\d+/)[0]
  }
  else if ( {{Form ID}} == 'new_order' ) {
    return prefix + 'success'
  }
}