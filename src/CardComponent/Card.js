import Styles from "./card.module.css";

const CardItem = (props) => {
  const { image, title, price } = props;
  return (
    <div className="col-lg-3 col-md-4 col-5">
      <div className={Styles.card}>
        <img src={image} className="w-100" alt="" />
        <div className={Styles.container}>
          <h4>
            <b>{title}</b>
          </h4>
          <p> {price} $ </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
