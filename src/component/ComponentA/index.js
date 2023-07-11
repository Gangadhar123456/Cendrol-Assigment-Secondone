import React, { useEffect, useState } from "react";
import ComponentB from "../ComponentB";
import ComponentC from "../ComponentC";
import "./index.css";

function ComponentA() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jokePopupVisible, setJokePopupVisible] = useState(false);
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchChuckNorris();
  }, []);

  const fetchChuckNorris = async () => {
    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      const data = await response.json();
      setCategoryList(data);
    } catch (error) {
      console.error("Error fetching Chuck Norris categories:", error);
    }
  };

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    await fetchRandomJoke(category);
    setLoading(false);
    setJokePopupVisible(true);
  };

  const fetchRandomJoke = async (category) => {
    try {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error("Error fetching random joke:", error);
    }
  };

  const handleNextJoke = async () => {
    setLoading(true);
    await fetchRandomJoke(selectedCategory);
    setLoading(false);
  };

  const handleClosePopup = () => {
    setJokePopupVisible(false);
  };

  return (
    <div>
      <ul className="ul-container">
        {categoryList.map((name, index) => (
          <ComponentB
            key={index}
            name={name}
            onClick={() => handleCategoryClick(name)}
          />
        ))}
      </ul>
      {jokePopupVisible && (
        <ComponentC
        selectedCategory={selectedCategory}
          joke={joke}
          onClose={handleClosePopup}
          onGetNextJoke={handleNextJoke}
          loading={loading}
        />
      )}
    </div>
  );
}

export default ComponentA;
