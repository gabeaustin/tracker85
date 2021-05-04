import React from "react";

const Tracker = () => {
  return (
    <div>
      Main Tracker
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Week</th>
            <th scope="col">Planned / Goal</th>
            <th scope="col">Date Goal Reached</th>
            <th scope="col">Actual Amount Saved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Week 1</th>
            <td>$85</td>
            <td>
              <input type="date" />
            </td>
            <td>
                $  <input type="number"/>
            </td>
          </tr>
          <tr>
            <th scope="row">Week 2</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 3</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 4</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 5</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 6</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 7</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 8</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 9</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 10</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 11</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
          <tr>
            <th scope="row">Week 12</th>
            <td>$85</td>
            <td><input type="date" /></td>
            <td>$  <input type="number"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tracker;
