import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import ReadManager from "../modules/ReadManager";

const AddNewReadForm = props => {
  const [read, setReads] = useState({ title: "",
    authorName: "",
    readTypeId: "",
    link: "",
    notes: ""});
  const [isLoading, setIsLoading] = useState(false);


  const handleFieldChange = evt => {
    const stateToChange = { ...read };
    stateToChange[evt.target.id] = evt.target.value;
    setReads(stateToChange);
  };

  const constructNewRead = evt => {
    evt.preventDefault();
    if (read.title === "" || read.authorName === "" || read.readTypeId  === "" || read.link === "" || read.notes  === "") {
      window.alert("Please complete all fields");
    } else {
      setIsLoading(true);
      ReadManager.post(read)
        .then(() => props.history.push("/Home"));
    }
  };



  return (
    <>
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            required
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
            required
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
            required
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
          required
        onChange={handleFieldChange} 
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input required
        onChange={handleFieldChange} type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input required
        onChange={handleFieldChange} 
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
          <Input required
        onChange={handleFieldChange}  type="textarea" name="text" id="exampleText" />
        </FormGroup>
       
        <Button disabled={isLoading} onclick={constructNewRead}>Submit</Button>
      </Form>
    </>
  );
  };


export default AddNewReadForm;
