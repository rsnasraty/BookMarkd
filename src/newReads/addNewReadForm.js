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
          <Label for="date">Date Added</Label>
          <Input
            required
        onChange={handleFieldChange} 
            type="text"
            name="date"
            id="date"
            placeholder="June 16th 2020"
          />
        </FormGroup>
        <FormGroup>
          <Label for="readTypeId">Type of Reading Material</Label>
          <Input required
        onChange={handleFieldChange} type="select" name="readTypeId" id="readTypeId">
            <option>Fanfiction</option>
            <option>Article</option>
            <option>Blog</option>
            <option>Novel</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="link">Link</Label>
          <Input
            required
        onChange={handleFieldChange} 
            type="text"
            name="link"
            id="link"
            placeholder="https://www.amazon.com/Sailor-Moon-1-Naoko-Takeuchi/dp/1935429744"
          />
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes</Label>
          <Input required
        onChange={handleFieldChange}  type="text" name="notes" id="notes" />
        </FormGroup>
       
        <Button disabled={isLoading} onClick={constructNewRead}>Submit</Button>
      </Form>
    </>
  );
  };


export default AddNewReadForm;
