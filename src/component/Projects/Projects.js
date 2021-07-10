import React from "react";
import "../Projects/Projects.css";
import donation from "../../pictures/donation.png";
import todoList from "../../pictures/todoList.png";
import todoHooks from "../../pictures/todoHooks.png";

const Projects = () => {
  return (
    <>
      <div className="wrapper">
        <article className="col-third">
          <h3 className="title">Donation</h3>
          <img src={donation} alt="Landing screen for Donation Website" />
          <div>
            <br />
            <a href="https://github.com/ahdoy888/donation_website">
              GitHub Link
            </a>
            <p>Website using JS, JQuery, HTML/CSS and SASS</p>
          </div>
        </article>
        <article className="col-third">
          <h3 className="title">TodoList App </h3>
          <img src={todoList} alt="Login page for TodoList" />
          <div>
            <br />
            <a href="https://github.com/ahdoy888/React-todoList">Github Link</a>
            <p>React App using class Component</p>
          </div>
        </article>
        <article className="col-third">
          <h3 className="title">Todo App</h3>
          <img src={todoHooks} alt="Todo Apps with Hooks" />
          <div>
            <br />
            <a href="https://github.com/ahdoy888/react-todoList-hooks">
              Github Link
            </a>
            <p>React App using Hooks method wtih functional Component</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Projects;
