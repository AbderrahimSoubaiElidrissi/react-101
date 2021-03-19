
import { useState , useEffect } from 'react';
import Coins from './Coins'



function App() {


  const [coins,setCoins] = useState([])

  const getCoins = async () => {

    const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    return await data.json()
  }


  useEffect(() => {

    getCoins().then(data => setCoins(data))
    .catch(error => alert(error))

  },[])



  return (
<div>
    <h1>Coins Market</h1>


    <Coins coins={coins} />

  </div>
  );
}

export default App;
