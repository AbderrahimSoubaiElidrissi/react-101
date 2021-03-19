export default function Coin({coin}) {

    return ( <tr>
        <td>
            <img width="32px" src={coin.image} />
            {' '+coin.name}
        </td>
        <td>{coin.current_price}</td>
        <td>{coin.total_volume}</td>
        <td >
            <span style={{ color : coin.price_change_24h > 0 ? 'green' : 'red' }}>
            {coin.price_change_24h}
            </span>
        </td>
    </tr>)

}