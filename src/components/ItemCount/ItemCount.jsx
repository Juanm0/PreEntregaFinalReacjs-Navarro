import "./ItemCount.css"
import useCount from "../../hooks/useCount"

function ItemCount ({stock}) {

    const {count,less, add} = useCount({initia:1,stock})

    return (
        <div className="itemCount">
            <button onClick={less}  className="itemCount-button">-</button>
            <span className="itemCount-value">{count}</span>
            <button onClick={add} className="itemCount-button">+</button>
        </div>
    )
}

export default ItemCount