import { useNavigate } from "react-router-dom";

const WatchlaterPage = () => {
  const navigate = useNavigate();
  return (
    <section className="default-section">
      <p>Looks like you haven't add anything yet in Watch Later</p>
      <button onClick={() => navigate("/")}>Starting Adding Now</button>
    </section>
  );
};

export { WatchlaterPage };
