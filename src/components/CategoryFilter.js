import React, {useState} from "react";

function CategoryFilter({ setSelectedCategory, categories}) {
  
  const [buttonClass, setButtonClass] = useState();

  function handleClick(category) {
    
    setSelectedCategory(category);
    
    setButtonClass(category);
    
  }

  function displayCategoryButtons() {
    return categories.map((category) => (
      <button key={category} className={buttonClass === category ? "selected" : ""} onClick={() => handleClick(category)} >
          {category}
      </button>))
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        displayCategoryButtons()
      }
    </div>
  );
}

export default CategoryFilter;
