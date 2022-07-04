import { useSelector, useDispatch } from "react-redux";
import { buy, restock } from "./CakeSlice";

const CakeView = () => {
  const dispatch = useDispatch();
  const totalCakesRedux = useSelector((state) => state.cake.totalCakes);
  const restockCake = useSelector((state) => state.cake.restockCake);

  console.log("total : ", totalCakesRedux);
  return (
    <div>
      <h1>Cek Stok Kue</h1>
      <h3>Total Kue : {totalCakesRedux}</h3>
      <h4>Restock Kue : {restockCake}</h4>
      <button onClick={() => dispatch(buy())}>Beli KUE</button>
      <button onClick={() => dispatch(restock())}>restock KUE</button>
    </div>
  );
};
export default CakeView;
