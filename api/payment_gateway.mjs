curl --location 'https://api.nowpayments.io/v1/status'

curl --location 'https://api.nowpayments.io/v1/min-amount?currency_from=eth&currency_to=trx&fiat_equivalent=usd&is_fee_paid_by_user=False' \
--header 'x-api-key: '

curl --location 'https://api.nowpayments.io/v1/estimate?amount=3999.5000&currency_from=usd&currency_to=btc' \
--header 'x-api-key: '