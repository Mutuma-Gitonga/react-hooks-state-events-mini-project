import React, {useState} from "react";

// passSelectedCategory,
function CategoryFilter({ setSelectedCategory, categories}) {
  // const [keyClicked, setKeyClicked] = useState(0);
  const [buttonClass, setButtonClass] = useState("");


  function handleClick(e, index) {
    // e.preventDefault();
    console.log(e.target.innerText)
    // console.log("Key index", key);
    
    setSelectedCategory(e.target.innerText);
    
    // setKeyClicked(key);

    // if(key === keyClicked) {
    //   e.target.className = "selected";
    // } else {
    //   e.target.className = "";
    // }

    // buttonClass ? setButtonClass(() => "") : setButtonClass(() => "selected");
    // console.log(selectedCategory)

    // setSelectedCategory(() => (e.target.textContent));
    
  }

  function displayCategoryButtons() {
    return categories.map((category,index) => (
      <button key={category} className={buttonClass} onClick={(e) => handleClick(e, index)} >
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
