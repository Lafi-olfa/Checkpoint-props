import React from "react";
import { Button, Card } from "react-bootstrap";

const CardStudent = ({ el, g }) => {
  return (
    <Card style={{ width: "18rem",display:"flex",backgroundColor:"#8BA4B6"
     ,margin:"10px",}}>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <p> Top Student:</p>
      <div style={{}}>
      <Card.Text style={{marginLeft:'2px'}} >{el.id}</Card.Text> 
     <Card.Text >{el.name}</Card.Text>
      </div>
      <Card.Text>{el.course}</Card.Text>
      <Card.Text> Location: {el.location}</Card.Text>
      <Card.Text> Rating: {el.rating}</Card.Text>
      <Card.Text>Learning Progress: {el.progress}</Card.Text>
        <Button variant="primary" onClick={() => g(el.name)}>
          Click{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardStudent;
