import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'

const info = {
  merchantId:"39038540035",
  merchantName:"Nateevos",
  merchantType:"Travel",
  currencyCode:"$",
  orderNumber:"111111",
  amount:"1000",//no commas or dots, the last two digits are decilmals, ex: 1000 = 10.00
  approvedUrl:"https://nateevos.com/success/",
  cancelUrl:"https://nateevos.com/cancel/",
  declinedUrl:"https://nateevos.com/declined/",
  useCustomField1:"0",
  useCustomField2:"0",
  authKey:"asdhakjshdkjasdasmndajksdkjaskldga8odya9d8yoasyd98asdyaisdhoaisyd0a8sydoashd8oasydoiahdpiashd09ayusidhaos8dy0a8dya08syd0a8ssdsax"
}
function App() {
  useEffect(()=>{

    const submitButton = document.getElementById('submit');

    submitButton.click();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form  action="https://pruebas.azul.com.do/PaymentPage/" method="post">
<input type="hidden" id="MerchantId" name="MerchantId" value={info.merchantId} />
<input type="hidden" id="MerchantName" name="MerchantName" value={info.merchantName} />
<input type="hidden" id="MerchantType" name="MerchantType" value={info.merchantType}/> 
<input type="hidden" id="CurrencyCode" name="CurrencyCode" value={info.currencyCode} />
<input type="hidden" id="OrderNumber" name="OrderNumber" value={info.orderNumber} />
<input type="hidden" id="Amount" name="Amount" value={info.amount} />
<input type="hidden" id="ApprovedUrl" name="ApprovedUrl" value={info.approvedUrl} />
<input type="hidden" id="DeclinedUrl" name="DeclinedUrl" value={info.declinedUrl} />
<input type="hidden" id="CancelUrl" name="CancelUrl" value={info.cancelUrl}/>
<input type="hidden" id="UseCustomField1" name="UseCustomField1" value={info.useCustomField1}/>
{/* <input type="hidden" id="CustomField1Label" name="CustomField1Label" value="Custom1"/>
<input type="hidden" id="CustomField1Value" name="CustomField1Value" value="Value1"/> */}
<input type="hidden" id="UseCustomField2" name="UseCustomField2" value={info.useCustomField2}/>
{/* <input type="hidden" id="CustomField2Label" name="CustomField2Label" value="Custom2"/>
<input type="hidden" id="CustomField2Value" name="CustomField2Value" value="Value2"/> */}
<input type="hidden" id="AuthHash" name="AuthHash" value="......."/>
<input type="submit" id="submit" value="Enviar"/>
</form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
