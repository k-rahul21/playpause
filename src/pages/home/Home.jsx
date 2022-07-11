import { Card } from "../../components/card/Card";
import { Category } from "../../components/category/Category";
import { useAuth } from "../../contexts/auth-context";
import { useVideo } from "../../contexts/video-listing-context";

const Home = () => {
  const { videoState } = useVideo();
  const { token } = useAuth();

  return (
    <div className="container">
      <Category />
      <div className="card-container">
        {videoState.videoItems?.length > 0 ? (
          videoState.videoItems.map((item) => <Card key={item.id} {...item} />)
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
