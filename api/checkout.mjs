document.querySelector('.checkout-form-payment-modal-bitcoin-button').addEventListener('click', function() {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "DATQ5KZ-A9J4T4E-GGVT4Q9-XQZXG0C");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.nowpayments.io/v1/min-amount?currency_from=btc&currency_to=trx&fiat_equivalent=usd&is_fixed_rate=False&is_fee_paid_by_user=False", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
});