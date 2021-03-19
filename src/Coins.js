
import { useState } from 'react'
import Coin from './Coin'

export default function Coins({ coins }){

    const [filtredCoins , setCoins] = useState([])


    const filter = (e) => {
        setCoins([])

        if(e.target.value){
            const filtred = coins.filter(coin => coin.name.toLowerCase().includes( e.target.value.toLowerCase()))
            setCoins(filtred)
        }
        else {
        }
    

    }
return <div>

    <input onChange={filter} placeholder="Search" className="form-input" />

    <table className="table">

        <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Volume</td>
                <td>Change 24h</td>
            </tr>
        </thead>
        <tbody>
       {
           filtredCoins && filtredCoins.length > 0 ?
           filtredCoins.map(c =>  <Coin key={c.id} coin={c} />)
           : coins && coins.length > 0  ? coins.map(c =>  <Coin coin={c} />) : <p>No data</p>

       }

        </tbody>

    </table>


</div>


}