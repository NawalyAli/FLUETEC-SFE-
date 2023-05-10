import React from "react"
import { team } from "../../dummydata"



const TeamCard = () => {
  return (
    <div>
      <h1>Welcome to the Student Dashboard!</h1>
      <p>Here, you can access various features and information.</p>
      <div>
        <div className="dashboard-section">
          <h2>View Grades</h2>
          <ul>
            <li>
              <a href="#">Grade 1</a>
            </li>
            <li>
              <a href="#">Grade 2</a>
            </li>
            <li>
              <a href="#">Grade 3</a>
            </li>
          </ul>
        </div>
        <div className="dashboard-section">
          <h2>Class Schedule</h2>
          <ul>
            <li>
              <a href="#">Monday</a>
            </li>
            <li>
              <a href="#">Tuesday</a>
            </li>
            <li>
              <a href="#">Wednesday</a>
            </li>
          </ul>
        </div>
        <div className="dashboard-section">
          <h2>Submit Assignments</h2>
          <ul>
            <li>
              <a href="#">Assignment 1</a>
            </li>
            <li>
              <a href="#">Assignment 2</a>
            </li>
            <li>
              <a href="#">Assignment 3</a>
            </li>
          </ul>
        </div>
        <div className="dashboard-section">
          <h2>Library Resources</h2>
          <ul>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Databases</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamCard
