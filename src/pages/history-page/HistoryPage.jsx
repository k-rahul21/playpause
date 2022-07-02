import { useNavigate } from "react-router-dom";

const HistoryPage = () => {
  const navigate = useNavigate();
  return (
    <section className="default-section">
      <p>Looks like you haven't watch anything yet!!</p>
      <button onClick={() => navigate("/")}>Starting Watching Now</button>
    </section>
  );
};

export { HistoryPage };
