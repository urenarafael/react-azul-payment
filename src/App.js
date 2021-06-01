import React from 'react'

import './App.css'
import { useEffect, useState } from 'react'
import { info, hashing, parseAmount } from './core/Azul'
import SuspenseLoader from './core/Loader'
import NotFound from './core/NotFound'
import InvalidPayment from './core/InvalidPayment'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

const reqConf = {
  url: 'http://localhost:3002/commons/storage'
}

const Application = () => {
  const { storageId } = useParams()

  const url = `${reqConf.url}/${storageId}`

  const [data, setData] = useState(info)
  const [auth, setAuth] = useState('')

  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const setUpData = (orderId, amount) => {
    setData({
      ...info,
      OrderNumber: String(orderId).padStart(6, '0'),
      Amount: parseAmount(amount)
    })
    // setAuth(hashing(data))
  }

  /**
   *  Response expecting: 
   * {
        "responseCode": 9000,
        "error": "",
        "message": {
            "key": "azul-payment",
            "value": {
                "amount": "30.30"
            },
            "use": 30,
            "id": 5
        },
        "hasError": false,
        "statusCode": 201
      }
  */

  useEffect(() => {
    setAuth(hashing(data))
  }, [data])

  const fetchStorage = React.useCallback(() => {
    fetch(`${url}`, {
      mode: 'cors'
    })
      .then(res => res.json())
      .then(
        result => {
          if (result.hasError) {
            setLoaded(true)
            setError(true)
          } else {
            setLoaded(true)
            if (!result.message.value?.amount) {
              setError(true)
            } else {
              setUpData(result.message.id, result.message.value.amount)
            }
          }
        },
        error => {
          setLoaded(true)
        }
      )
  }, [url])

  useEffect(() => {
    fetchStorage()
    // const submitButton = document.getElementById('submit')
    // submitButton.click();
  }, [fetchStorage])

  return (
    <>
      {!loaded && <SuspenseLoader></SuspenseLoader>}
      {error && <InvalidPayment />}
      {loaded && !error && (
        <div className='App'>
          <header className='App-header'>
            <img
              src={`https://i.imgur.com/oJcfEcD.png`}
              className='App-logo'
              alt='logo'
            />
            <p></p>
            <form
              action='https://pruebas.azul.com.do/PaymentPage/'
              method='post'
            >
              <input
                type='hidden'
                id='MerchantId'
                name='MerchantId'
                value={data.MerchantId}
              />

              <input
                type='hidden'
                id='MerchantName'
                name='MerchantName'
                value={data.MerchantName}
              />
              <input
                type='hidden'
                id='MerchantType'
                name='MerchantType'
                value={data.MerchantType}
              />
              <input
                type='hidden'
                id='CurrencyCode'
                name='CurrencyCode'
                value={data.CurrencyCode}
              />
              <input
                type='hidden'
                id='OrderNumber'
                name='OrderNumber'
                value={data.OrderNumber}
              />
              <input
                type='hidden'
                id='Amount'
                name='Amount'
                value={data.Amount}
              />
              <input
                type='hidden'
                id='ApprovedUrl'
                name='ApprovedUrl'
                value={data.ApprovedUrl}
              />
              <input type='hidden' id='DesignV2' name='DesignV2' value={1} />

              <input
                type='hidden'
                id='LogoImageUrl'
                name='LogoImageUrl'
                value={`https://i.imgur.com/oJcfEcD.png`}
              />

              <input
                type='hidden'
                id='ProductImageUrl'
                name='ProductImageUrl'
                value={`https://i.imgur.com/oJcfEcD.png`}
              />

              <input
                type='hidden'
                id='DeclinedUrl'
                name='DeclinedUrl'
                value={data.DeclinedUrl}
              />
              <input
                type='hidden'
                id='CancelUrl'
                name='CancelUrl'
                value={data.CancelUrl}
              />
              <input
                type='hidden'
                id='UseCustomField1'
                name='UseCustomField1'
                value={data.UseCustomField1}
              />
              {/* <input type="hidden" id="CustomField1Label" name="CustomField1Label" value="Custom1"/>
<input type="hidden" id="CustomField1Value" name="CustomField1Value" value="Value1"/> */}
              <input
                type='hidden'
                id='UseCustomField2'
                name='UseCustomField2'
                value={data.UseCustomField2}
              />
              {/* <input type="hidden" id="CustomField2Label" name="CustomField2Label" value="Custom2"/>
<input type="hidden" id="CustomField2Value" name="CustomField2Value" value="Value2"/> */}
              <input type='hidden' id='AuthHash' name='AuthHash' value={auth} />
              <input type='submit' id='submit' value='Enviar' />
            </form>
          </header>
        </div>
      )}
    </>
  )
}
const DefaultCmp = () => {
  return (
    <div>
      <NotFound></NotFound>
    </div>
  )
}

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/:storageId' component={Application} />
        <Route exact path='*' component={DefaultCmp} />
      </Switch>
    </Router>
  )
}

export default App
