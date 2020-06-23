import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import React, { useState, useEffect } from "react";
import ReadManager from "../modules/ReadManager";

const CompletedEdit = props => {
  //sets cRs objects initial state as an empty object to be filled when setCRs function is called
  const [completedRead, setCompletedReads] = useState({
    userId: parseInt(sessionStorage.getItem("credentials")),
    title: "",
    authorName: "",
    readTypeId: "",
    statusId: "",
    addDate: "",
    link: "",
    notes: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  //records user input in the form, then setCRs updates the cR object with the users input 
  const handleFieldChange = evt => {
    const stateToChange = { ...completedRead };
    stateToChange[evt.target.id] = evt.target.value;
    setCompletedReads(stateToChange);
  };

const updateExistingCR = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedCR = {
     id: props.match.params.completedReadId,
     authorName: completedRead.authorName,
     readTypeId: completedRead.readTypeId,
     statusId: completedRead.statusId,
     addDate: completedRead.addDate,
     link: completedRead.link,
     notes: completedRead.notes
        }

ReadManager.update(completedRead)
.then(() => props.history.push("/CompletedList"));

}

useEffect(() => {
    ReadManager.get(props.match.params.completedReadId)
      .then(completedRead => {
        setCompletedReads(completedRead);
        setIsLoading(false);
      });
  }, []);
 

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
          value={completedRead.title}
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
          id="authorName"
          value={completedRead.authorName}
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
          id="addDate"
          value={completedRead.addDate}
          placeholder="06/17/2020"
        />
      </FormGroup>
      <FormGroup>
        <Label for="readTypeId">Type of Reading Material</Label>
        <Input
          required
          onChange={handleFieldChange}
          type="select"
          value={completedRead.readTypeId}
          name="readTypeId"
          id="readTypeId"
        >
          <option>Fanfiction</option>
          <option>Article</option>
          <option>Blog</option>
          <option>Novel</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="statusId">Status</Label>
        <Input
          required
          onChange={handleFieldChange}
          type="select"
          value={completedRead.statusId}
          name="statusId"
          id="statusId"
        >
          <option>In-Progress</option>
          <option>Complete</option>
          <option>Marked For Later</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="link">Link</Label>
        <Input
          required
          onChange={handleFieldChange}
          type="text"
          name="link"
          value={completedRead.link}
          id="link"
          placeholder="www.sailormoon.com"
        />
      </FormGroup>
      <FormGroup>
        <Label for="notes">Notes</Label>
        <Input
          required
          onChange={handleFieldChange}
          type="text"
          value={completedRead.notes}
          name="notes"
          id="notes"
        />
      </FormGroup>
      <Button
        disabled={isLoading}
        onClick={updateExistingCR}
        outline
        color="primary"
      >
        Submit
      </Button>{" "}
    </Form>
  </>
);
};

export default CompletedEdit 