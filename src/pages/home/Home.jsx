import { Card } from "../../components/card/Card";
import { Category } from "../../components/category/Category";
import { useAuth } from "../../contexts/auth-context";
import { useVideo } from "../../contexts/video-listing-context";

const Home = () => {
  const { availableVideos } = useVideo();
  const { token } = useAuth();

  console.log(token);

  return (
    <div className="container">
      <Category />
      <div className="card-container">
        {availableVideos?.length > 0 ? (
          availableVideos.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <section className="default-section">
            <p>Looks like you there's no videos!!</p>
          </section>
        )}
      </div>
    </div>
  );
};

export { Home };
