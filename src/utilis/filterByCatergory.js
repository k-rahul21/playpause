const filterByCategory = (products, type) => {
  switch (type) {
    case "Comedy":
      return products.filter((item) => item.category === "Comedy");
    case "Podcast":
      return products.filter((item) => item.category === "Podcast");
    case "Music":
      return products.filter((item) => item.category === "Music");
    case "Self help":
      return products.filter((item) => item.category === "Self help");
    case "All":
      return products;

    default:
      return products;
  }
};

export { filterByCategory };
