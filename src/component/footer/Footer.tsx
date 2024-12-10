import { Container } from "../container/Container";
import style from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <Container>
        <div className={style.footer__wrapper}></div>
      </Container>
    </div>
  );
};
