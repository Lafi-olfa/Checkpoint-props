import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const StudentDescription = ({ std }) => {
  return (
    <div>
      <Card style={{ width: "20rem"}}>
        <img
          alt="logo"
          style={{ width: "285px", paddingLeft: "50px" }}
          src={std.url}
        />
        <Card.Body>
          <Card.Title> {std.course} </Card.Title>
          <Button variant="primary">Resume Course</Button>

          <Card.Text style={{ textTransform:'capitalize'}}>
            <p>
              Current learning progress :
              <input type="range"  id="vol" name="vol" min="0" max="50" />
              <br />
              Expected learning: <br></br>
              <input type="range" id="vol" name="vol" min="0" max="50" />
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentDescription;
