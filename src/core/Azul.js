import jsSHA from 'jssha'
import dollarsToCents from 'dollars-to-cents'
const authKey =
  'asdhakjshdkjasdasmndajksdkjaskldga8odya9d8yoasyd98asdyaisdhoaisyd0a8sydoashd8oasydoiahdpiashd09ayusidhaos8dy0a8dya08syd0a8ssdsax'

const info = {
  MerchantId: '39038540035',
  MerchantName: 'Nateevos',
  MerchantType: 'Travel',
  CurrencyCode: '$',
  OrderNumber: '111111',
  Amount: '1000', //no commas or dots, the last two digits are decilmals, ex: 1000 = 10.00
  ITBIS: '000',
  ApprovedUrl: 'https://nateevos.com/success/',
  CancelUrl: 'https://nateevos.com/cancel/',
  DeclinedUrl: 'https://nateevos.com/declined/',
  UseCustomField1: '0',
  CustomField1Label: '',
  CustomField1Value: '',
  UseCustomField2: '0',
  CustomField2Label: '',
  CustomField2Value: ''
}

const parseAmount = amount => {
  return dollarsToCents(amount)
}
const hashing = fields => {
  let fi =
    String(fields.MerchantId) +
    String(fields.MerchantName) +
    String(fields.MerchantType) +
    String(fields.CurrencyCode) +
    String(fields.OrderNumber) +
    String(fields.Amount) +
    String(fields.ITBIS) +
    String(fields.ApprovedUrl) +
    String(fields.DeclinedUrl) +
    String(fields.CancelUrl) +
    String(fields.UseCustomField1) +
    String(fields.CustomField1Label) +
    String(fields.CustomField1Value) +
    String(fields.UseCustomField2) +
    String(fields.CustomField2Label) +
    String(fields.CustomField2Value) +
    String(authKey)

  const shaObj = new jsSHA('SHA-512', 'TEXT', {
    hmacKey: { value: authKey, format: 'TEXT' }
  })
  shaObj.update(fi)
  const hmac = shaObj.getHash('HEX')

  return hmac
}

export { info, hashing, parseAmount }
