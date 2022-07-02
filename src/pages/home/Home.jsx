import { Navbar } from "../../components/navbar/navbar";
import { Card } from "../../components/card/Card";
import { Category } from "../../components/category/Category";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Category />
      <Card />
    </div>
  );
};

export { Home };
