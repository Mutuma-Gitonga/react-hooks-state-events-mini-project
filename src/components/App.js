import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS as tasksArray } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, tasksArray });

function App() {
// const [currentCategory, setCurrentCategory] = useState("");
const [tasks, setTasks] = useState(tasksArray);
const [selectedCategory, setSelectedCategory] = useState("All");

// function passSelectedCategory(selectedCategory) {
//   setCurrentCategory(selectedCategory);
// }

function onTaskFormSubmit(taskObj) {
  console.log("new task in App taskformsubmit", taskObj)
  setTasks([...tasks, taskObj]);
}

// currentCategory={currentCategory}
// passSelectedCategory={passSelectedCategory} 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setSelectedCategory={setSelectedCategory} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList  selectedCategory={selectedCategory} tasks={tasks} />
    </div>
  );
}

export default App;
