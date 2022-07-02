import "./category.css";

const Category = () => {
  return (
    <ul className="category-container">
      <li className="category-name-active">All</li>
      <li className="category-name">Comedy</li>
      <li className="category-name">Podcast</li>
      <li className="category-name">Song</li>
    </ul>
  );
};

export { Category };
