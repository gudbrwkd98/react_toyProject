import React, { useEffect, useRef, useState } from "react";
import Todo from "../components/Todo";
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import { nanoid } from "nanoid";

import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/ReactContexify.css";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const MENU_ID = "blahblah";

function MainPage(props) {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function handleContextMenu(event) {
    show({
      event,
      props: {
        key: "value",
      },
    });
  }

  const handleItemClick = ({ id, event, props }) => {
    switch (id) {
      case "copy":
        console.log(event, props);
      case "cut":
        console.log(event, props);
      case "reload":
        window.location.reload(false);
        break;
    }
  };

  const [tasks, setTasks] = useState(props.tasks.task);

  const [filter, setFilter] = useState("All");

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTask = tasks.filter((task) => id !== task.id);
    setTasks(remainingTask);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingTest = `${taskList.length} ${tasksNoun} remaining`;

  const listHeadingRef = useRef(null);

  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large" onContextMenu={handleContextMenu}>
      <Menu id={MENU_ID}>
        <Item id="copy" onClick={handleItemClick}>
          {" "}
          copy
        </Item>
        <Item id="cut" onClick={handleItemClick}>
          cut
        </Item>
        <Separator />
        <Item disabled>Disabled</Item>
        <Separator />
        <Submenu label="Foobar">
          <Item id="reload" onClick={handleItemClick}>
            Reload
          </Item>
          <Item id="something" onClick={handleContextMenu}>
            Something
          </Item>
        </Submenu>
      </Menu>
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingTest}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default MainPage;
