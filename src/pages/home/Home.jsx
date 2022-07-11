import { Card } from "../../components/card/Card";
import { Category } from "../../components/category/Category";
import { useAuth, useFilter, useVideo } from "../../contexts/index";
import { filterByCategory } from "../../utilis/filterByCatergory";

const Home = () => {
  const {
    videoState: { videoItems },
  } = useVideo();

  const { filterState } = useFilter();

  const filteredVideos = filterByCategory(videoItems, filterState.filterBy);

  const { token } = useAuth();

  return (
    <div className="container">
      <Category />
      <div className="card-container">
        {filteredVideos?.length > 0 ? (
          filteredVideos.map((item) => <Card key={item.id} {...item} />)
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
