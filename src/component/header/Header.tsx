import { useState } from "react";
import { Container } from "../container/Container";
import styles from "./header.module.scss";

export const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <>
      {burger && (
        <div className={styles.overviu}>
          <div className={styles.menu}>
            <ul className={styles.list}>
              <a href="#">Page №1</a>
              <a href="#">Page №2</a>
              <a href="#">Page №3</a>
              <a href="#">Page №4</a>
            </ul>
          </div>
        </div>
      )}

      <div className={styles.header}>
        <Container>
          <div className={styles.header__container}>
            <div className={styles.logo}>LOGO</div>

            <input
              type="text"
              className={styles.header__input}
              placeholder="Поиск"
            />

            <div
              className={`${styles.burger} ${burger && styles.burger_active}`}
              onClick={() => setBurger(!burger)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
