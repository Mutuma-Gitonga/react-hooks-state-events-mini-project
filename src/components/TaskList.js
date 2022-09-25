import React from "react";
import Task from "./Task";

function TaskList({onDelete, selectedCategory, tasks}) {

  function filteredList() {

      if(selectedCategory === undefined || selectedCategory === "All") {
        // Render all tasks at startup OR render all when "All" filter is clicked
        return (
          tasks.map((task,index) => (
            <Task key={index} text={task.text} category={task.category} onDelete={onDelete} />
          )) 
        )
      } 
        else {
          // Immediately invoked function expression to render tasks in a particular category
          return (
            (tasks => (tasks.map((task,index) => (
                <Task key={index} text={task.text} category={task.category} onDelete={onDelete}/>
          ))))(tasks.filter(task => task.category === selectedCategory)) 
          )
        }
  }

  return (
    <div className="tasks">
      {filteredList()}
    </div>
  );
}

export default TaskList;
