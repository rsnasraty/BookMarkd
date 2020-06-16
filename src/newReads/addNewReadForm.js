import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const addNewReadForm = props => {
 const [readingMaterials, setReadingMaterials] = useState({
     title: "",
    authorName: "",
    readTypeId: "",
    link: "",
    notes: "" 
  }); 

  //sets RM state and then function to update it

  const handleFieldChange = evt => {
    const stateToChange = { ...readingMaterials };
    stateToChange[evt.target.id] = evt.target.value;
    setReadingMaterials(stateToChange);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.setNewRead(readingMaterials);
    props.history.push("/Home");
  };
/* 
  const today = new Date();
  const day = today.getUTCDate(); */

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            onChange={handleFieldChange}
            type="text"
            name="title"
            id="title"
            placeholder="Sailor Moon 1"
          />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input
            onChange={handleFieldChange}
            type="text"
            name="author"
            id="author"
            placeholder="Naoko Takeuchi"
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Title</Label>
          <Input
            onChange={handleFieldChange}
            type="text"
            name="title"
            id="title"
            placeholder="Sailor Moon 1"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default addNewReadForm;
