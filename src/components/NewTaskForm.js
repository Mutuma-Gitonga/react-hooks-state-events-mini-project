import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function displayOptions() {
    const optionsWithoutAllCat = categories.filter(category => category!== "All");

    return optionsWithoutAllCat.map((option,index) => (<option key={index}>{option}</option>));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {text, category};

    console.log("In New task form",newTask);
    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {
            displayOptions()
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
