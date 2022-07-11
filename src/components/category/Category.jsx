import "./category.css";
import { useFilter } from "../../contexts/index";

const Category = () => {
  const { filterDispatch } = useFilter();

  return (
    <ul className="category-container">
      <li
        className="category-name-active"
        onClick={() => filterDispatch({ type: "FILTER_BY", payload: "All" })}
      >
        All
      </li>
      <li
        className="category-name"
        onClick={() => filterDispatch({ type: "FILTER_BY", payload: "Comedy" })}
      >
        Comedy
      </li>
      <li
        className="category-name"
        onClick={() =>
          filterDispatch({ type: "FILTER_BY", payload: "Podcast" })
        }
      >
        Podcast
      </li>
      <li
        className="category-name"
        onClick={() => filterDispatch({ type: "FILTER_BY", payload: "Music" })}
      >
        Song
      </li>
      <li
        className="category-name"
        onClick={() =>
          filterDispatch({ type: "FILTER_BY", payload: "Self help" })
        }
      >
        Self help
      </li>
    </ul>
  );
};

export { Category };
