import React from "react";
import Task from "./Task";

function TaskList({selectedCategory, tasks}) {

  function filteredList() {
    
    if(selectedCategory === "All") {
      return (
        tasks.map((task,index) => (
          <Task key={index} task={task} />
        ))
      )
    } 
    else {
      return (tasks => (tasks.map((task,index) => (
            <Task key={index} task={task} />
      ))))(tasks.filter(task => task.category === selectedCategory))
    }

    // return tasks.map((task,index) => (
    //   <Task key={index} task={task} />
    // ))
  }

  return (
    <div className="tasks">
      {filteredList()}
    </div>
  );
}

export default TaskList;
