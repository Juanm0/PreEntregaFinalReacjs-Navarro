import "./ItemCount.css";
import useCount from "../../hooks/useCount";

function ItemCount({ stock, initial = 1, onAdd }) {
  const { count, less, add } = useCount({ initial, stock });

  return (
    <div className="itemCount">
      <div className="itemCount-selector">
        <button onClick={less} className="itemCount-button" disabled={count <= 1}>
          -
        </button>
        <span className="itemCount-value">{count}</span>
        <button onClick={add} className="itemCount-button" disabled={count >= stock}>
          +
        </button>
      </div>

      {onAdd && (
        <button
          className="itemCount-add"
          onClick={() => onAdd(count)}
          disabled={stock === 0}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
}

export default ItemCount;
