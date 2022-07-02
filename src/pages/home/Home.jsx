import { Card } from "../../components/card/Card";
import { Category } from "../../components/category/Category";

const Home = () => {
  return (
    <div className="container">
      <Category />
      <Card />
    </div>
  );
};

export { Home };
