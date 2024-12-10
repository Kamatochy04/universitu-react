import style from "./card.module.scss";

export const Card = () => {
  return (
    <div className={style.card}>
      <img src="" alt="" className={style.img} />

      <div className={style.descr}>
        <h4 className={style.title}>Название товара</h4>

        <p className={style.price}>12.93$</p>
        <button className={style.button}>заказать</button>
      </div>
    </div>
  );
};
