import { ModalData } from "../context/StoreContext";

const StoreItem = ({ ...item }: ModalData) => {
  return (
    <div className="flex flex--column align--center item__card">
      <img src={item.image} alt={item.name} className="img" />
      <div className="item__description">
        <h4 className="item__heading">{item.name}</h4>
        <div className="flex justify--between align--center">
          <span className="item__prices">&#8369;{item.price}</span>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default StoreItem;
