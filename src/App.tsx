import { Card } from "./component/card/Card";
import { Container } from "./component/container/Container";
import { Footer } from "./component/footer/Footer";
import { Header } from "./component/header/Header";

import "./global.scss";

export const App = () => {
  return (
    <div>
      <Header />

      <Container>
        <div className="products">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>

      <Footer />
    </div>
  );
};
