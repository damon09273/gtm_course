window.dataLayer.push({
  'ecommerce': {
    'purchase': {
      'actionField': {
        'id': 'T12345',                         // 交易編號. 必填
        'affiliation': 'Online Store',
        'revenue': '35.43',                     // 交易金額 (包含稅額及運費)
        'tax':'4.90',
        'shipping': '5.99'
      },
      'products': [{                            // 產品清單.
        'name': 'Triblend Android T-Shirt',     // 產品名稱及編號. 必填
        'id': '12345',
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray',
        'quantity': 1
       }]
    }
  }
});
