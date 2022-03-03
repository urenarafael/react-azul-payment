import React from "react";

import "./App.css";
import { useEffect, useState } from "react";
import { info, hashing, parseAmount } from "./core/Azul";
import SuspenseLoader from "./core/Loader";
import NotFound from "./core/NotFound";
import InvalidPayment from "./core/InvalidPayment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import queryString from "query-string";

const configs = {
  apiUrl: "https://api.nateevos.com/",
  storageUrl: "https://api.nateevos.com/commons/storage",
  baseUrl: "https://payments.nateevos.com/",
  azulBaseUrl: "https://pagos.azul.com.do",
  // azulBaseUrl: "https://pruebas.azul.com.do" // test
};

// const configs = {
//   apiUrl: 'http://localhost:3002/',
//   storageUrl: 'http://localhost:3002/commons/storage',
//   baseUrl: 'http://localhost:3001/'
// }

const Application = () => {
  const { storageId } = useParams();
  let params = queryString.parse(window.location.search);

  const url = `${configs.storageUrl}/${storageId}`;

  const [data, setData] = useState(info);
  const [auth, setAuth] = useState("");

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const setUpData = (orderId, amount) => {
    setData({
      ...info,
      OrderNumber: orderId,
      ApprovedUrl: `${configs.baseUrl}successtmp?ApprovedTemp`, // uri where will be saved payment info , then will redirect to the last one
      CancelUrl: `${configs.baseUrl}${orderId}?Cancelled`,
      DeclinedUrl: `${configs.baseUrl}${orderId}?Declined`,
      // OrderNumber: String(orderId).padStart(6, '0'),
      Amount: parseAmount(amount),
    });
  };

  useEffect(() => {
    console.log("data is", data);
    setAuth(hashing(data));
  }, [data]);

  const fetchStorage = React.useCallback(() => {
    fetch(`${url}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.hasError) {
            setLoaded(true);
            setError(true);
          } else {
            setLoaded(true);
            if (!result.message.value?.amount) {
              setError(true);
            } else {
              setUpData(result.message.id, result.message.value.amount);
              setTimeout(() => {
                const submitButton = document.getElementById("submit");
                submitButton.click();
              }, 1000);
            }
          }
        },
        (error) => {
          setLoaded(true);
        }
      );
  }, [url]);

  useEffect(() => {
    fetchStorage();
    if (!error && loaded) {
      setTimeout(() => {
        const submitButton = document.getElementById("submit");
        submitButton.click();
      }, 1000);
    }
  }, [fetchStorage]);

  React.useEffect(() => {
    console.log("response azul is", params);
    if (params.ResponseMessage == "DECLINADA") {
      console.log("response message when declined", params);
      window.location.href = `https://nateevos.com/azul-pay?response=Declined`;
    }
  }, [params]);

  return (
    <>
      {!loaded && <SuspenseLoader></SuspenseLoader>}
      {error && <InvalidPayment />}
      {loaded && !error && (
        <div className="App">
          <header className="App-header">
            <img
              src={`https://payments.nateevos.com/administrator/nateevos.png`}
              className="App-logo"
              alt="logo"
            />
            <p></p>
            <form
              action={`https://pagos.azul.com.do/PaymentPage/Default.aspx`}
              // action='https://pruebas.azul.com.do/PaymentPage/'
              method="post"
            >
              <input
                type="hidden"
                id="MerchantId"
                name="MerchantId"
                value={data.MerchantId}
              />
              <input type="hidden" id="TrxType" name="TrxType" value="HOLD" />

              <input
                type="hidden"
                id="MerchantName"
                name="MerchantName"
                value={data.MerchantName}
              />
              <input
                type="hidden"
                id="MerchantType"
                name="MerchantType"
                value={data.MerchantType}
              />
              <input
                type="hidden"
                id="CurrencyCode"
                name="CurrencyCode"
                value={data.CurrencyCode}
              />
              <input
                type="hidden"
                id="OrderNumber"
                name="OrderNumber"
                value={data.OrderNumber}
              />
              <input
                type="hidden"
                id="Amount"
                name="Amount"
                value={data.Amount}
              />
              <input
                type="hidden"
                id="ApprovedUrl"
                name="ApprovedUrl"
                value={data.ApprovedUrl}
              />
              <input type="hidden" id="DesignV2" name="DesignV2" value={1} />

              <input
                type="hidden"
                id="LogoImageUrl"
                name="LogoImageUrl"
                value={`https://payments.nateevos.com/administrator/nateevos.png`}
              />

              <input
                type="hidden"
                id="ProductImageUrl"
                name="ProductImageUrl"
                value={`https://payments.nateevos.com/administrator/nateevos.png`}
              />

              <input
                type="hidden"
                id="DeclinedUrl"
                name="DeclinedUrl"
                value={data.DeclinedUrl}
              />
              <input
                type="hidden"
                id="CancelUrl"
                name="CancelUrl"
                value={data.CancelUrl}
              />
              <input
                type="hidden"
                id="UseCustomField1"
                name="UseCustomField1"
                value={data.UseCustomField1}
              />
              {/* <input type="hidden" id="CustomField1Label" name="CustomField1Label" value="Custom1"/>
<input type="hidden" id="CustomField1Value" name="CustomField1Value" value="Value1"/> */}
              <input
                type="hidden"
                id="UseCustomField2"
                name="UseCustomField2"
                value={data.UseCustomField2}
              />
              {/* <input type="hidden" id="CustomField2Label" name="CustomField2Label" value="Custom2"/>
<input type="hidden" id="CustomField2Value" name="CustomField2Value" value="Value2"/> */}
              <input type="hidden" id="AuthHash" name="AuthHash" value={auth} />
              <input
                type="submit"
                id="submit"
                value="Enviar"
                style={{ visibility: "hidden" }}
              />
            </form>
          </header>
        </div>
      )}
    </>
  );
};
const DefaultCmp = () => {
  return (
    <div>
      <NotFound></NotFound>
    </div>
  );
};
const SuccessTmp = () => {
  let params = queryString.parse(window.location.search);

  const savePayment = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);
    // var raw = JSON.stringify({"vendorId":3,"userId":"13","paymentMethod":"azul","typeOfReservation":"stays","amount":20,"reservationId":16,"storageId":41,"paymentMethodResponse":{"ApprovedUrl":"","OrderNumber":"370","Amount":"1000","Itbis":"000","AuthorizationCode":"032449","DateTime":"20210525124414","ResponseCode":"ISO8583","IsoCode":"00","ResponseMessage":"APROBADA","ErrorDescription":"","RRN":"20210525124436127178","AuthHash":"de30f5800e02197379b96802207e19d346492363f5aead581f946838ed50635a2c1239a84407f7726f99adc747be3d0ca23b6316e40f21d54ef1df605b01f3be","CustomOrderId":"","CardNumber":"541599******5152","DataVaultToken":"","DataVaultExpiration":"","DataVaultBrand":"","AzulOrderId":"16697233"}});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${configs.apiUrl}payments`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        window.location.href = `${configs.baseUrl}successcompleted`;
      })
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    console.log("response azul is", params);
    if (params.ResponseMessage == "DECLINADA") {
      console.log("response message when declined", params);
      window.location.href = `https://nateevos.com/azul-pay?response=Declined`;
    }
    if (params.ResponseMessage == "APROBADA") {
      console.log("do req");

      const uri = `${configs.storageUrl}/${params.OrderNumber}`;

      fetch(`${uri}`, {
        mode: "cors",
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log("r");
            const stored = result.message.value;
            const data = {
              vendorId: stored.data.vendorId,
              userId: stored.data.userId,
              paymentMethod: "azul",
              typeOfReservation: stored.type,
              amount: stored.amount,
              reservationId: stored.data.id,
              storageId: params.OrderNumber,
              paymentMethodResponse: params,
            };
            console.log("dd", data);
            savePayment(data);
          },
          (error) => {
            // setLoaded(true)
          }
        );
    }
  }, [params]);
  return (
    <div>
      <SuspenseLoader></SuspenseLoader>
    </div>
  );
};

const Success = () => {
  return <div>Success</div>;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/successtmp" component={SuccessTmp} />
        <Route exact path="/successcompleted" component={Success} />
        <Route exact path="/:storageId" component={Application} />
        <Route exact path="*" component={DefaultCmp} />
      </Switch>
    </Router>
  );
}

export default App;
