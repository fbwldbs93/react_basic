import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [btcValue, setBtcValue] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setBtcValue(json[0].quotes.USD.price);
      });
  }, []);

  /*
    딱 한번만 useEffect 를 실행시킬것이기 때문에
    [] 에 아무것도 넣지 않음!

    - 아무것도 바로보고 있지 않으면 useEffect 는 한번만 작동!
  */
  const onSubmit = (e) => {
    e.preventDefault();

    setResult((money * btcValue).toFixed(2));
  };

  const onChange = (e) => {
    //money = input value
    setMoney(e.target.value);
  };

  const onSelect = (e) => {
    setBtcValue(e.target.value);
  };

  return (
    <div>
      <h1>The Coins!({loading ? "loading" : coins.length} coins)</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin, index) => {
            return (
              <option key={index} value={coin.quotes["USD"].price}>
                {coin.name}({coin.symbol}):{coin.quotes["USD"].price} USD
                {/* quotes["USD"] 와 quotes.USD 와 같은 의미 */}
              </option>
            );
            /**
           map 을 통해 이미 [] 안에 들어와있기 때문에
           각 {} 들을 하나씩 가져오는 중
           그렇기 때문에 {}안의 id, name ..등등을 
           key 값으로 바로 부를 수 있음
          */
          })}
        </select>
      )}
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <input type="text" value={money} onChange={onChange} />
        <button>calculate</button>
        <p>{result} USD</p>
      </form>
    </div>
  );
}

export default CoinTracker;
