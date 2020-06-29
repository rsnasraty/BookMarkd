import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import React, { useState, useEffect } from "react";
import ReadManager from "../modules/ReadManager";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MarkedForLaterEdit = props => {
  //sets cRs objects initial state as an empty object to be filled when setCRs function is called
  const [markedFLRead, setMarkedFLReads] = useState({
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
  const [startDate, setStartDate] = useState(new Date());

  //records user input in the form, then setCRs updates the cR object with the users input 
  const handleFieldChange = evt => {
    const stateToChange = { ...markedFLRead };
    stateToChange[evt.target.id] = evt.target.value;
    setMarkedFLReads(stateToChange);
  };

const updateExistingMFL = evt => {
    evt.preventDefault();
    setIsLoading(true);


ReadManager.update(markedFLRead)
.then(() => props.history.push("/markedForLaterList"));

}

useEffect(() => {
    ReadManager.get(props.match.params.readingMaterialsId)
      .then(markedFLRead => {
        setMarkedFLReads(markedFLRead);
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
          value={markedFLRead.title}
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
          value={markedFLRead.authorName}
          placeholder="Naoko Takeuchi"
        />
      </FormGroup>
      <FormGroup>
        <Label for="date">Date Added</Label>
        <DatePicker
            id="addDate"
            selected={startDate}
          value={markedFLRead.addDate}
            onChange={date => setStartDate(date)}
          />
      </FormGroup>
      <FormGroup>
        <Label for="readTypeId">Type of Reading Material</Label>
        <Input
          required
          onChange={handleFieldChange}
          type="select"
          value={markedFLRead.readTypeId}
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
          value={markedFLRead.statusId}
          name="statusId"
          id="statusId"
        >
          <option>In-Progress</option>
          <option>Completed</option>
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
          value={markedFLRead.link}
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
          value={markedFLRead.notes}
          name="notes"
          id="notes"
        />
      </FormGroup>
      <Button
        disabled={isLoading}
        onClick={updateExistingMFL}
        outline
        color="primary"
      >
        Submit
      </Button>{" "}
    </Form>
  </>
);
};

export default MarkedForLaterEdit 