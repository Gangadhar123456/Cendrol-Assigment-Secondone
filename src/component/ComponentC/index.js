import React from "react";
import { RingLoader } from "react-spinners";
import "./index.css";

const ComponentC = ({selectedCategory, joke, onClose, onGetNextJoke, loading }) => {
    const capitalizedWord = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <h1 className="selectedcategory">{capitalizedWord}</h1>
      <button className="close-button" onClick={onClose}>
          X
        </button>
        {loading ? (
          <div className="spinner">
            <RingLoader color="#123abc" loading={loading} size={50} />
          </div>
        ) : (
          <div className="box">
            <h1>{joke}</h1>
            <button onClick={onGetNextJoke}>Next Joke</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentC;
