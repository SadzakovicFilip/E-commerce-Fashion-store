const App = () => {
  const categories = [
    {
      title: "Hats",
    },
    {
      title: "Jackets",
    },
    {
      title: "Sneekers",
    },
    {
      title: "Women",
    },
    {
      title: "Men",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((item, key) => (
        <div className="category-container" key={key}>
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{item.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
