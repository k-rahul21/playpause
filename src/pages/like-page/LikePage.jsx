import { useNavigate } from "react-router-dom";

const LikePage = () => {
  const navigate = useNavigate();
  return (
    <section className="default-section">
      <p>Looks like you haven't liked anything yet!!</p>
      <button onClick={() => navigate("/")}>Starting Adding Now</button>
    </section>
  );
};

export { LikePage };
