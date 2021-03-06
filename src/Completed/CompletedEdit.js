import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import React, { useState, useEffect } from "react";
import ReadManager from "../modules/ReadManager";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [startDate, setStartDate] = useState(new Date());

  //As changes are made in the form, state is updated
  //records user input in the form, then setCRs updates the cR object with the users input
  const handleFieldChange = evt => {
    const stateToChange = { ...completedRead };
    stateToChange[evt.target.id] = evt.target.value;
    setCompletedReads(stateToChange);
  };

  /* 
  The updateExistingCR method will call setIsLoading(true) - this ensures the user cannot repeatedly click button while API is being updated.
Invoke ReadManger.updateCR() to change the API data.
Once the API has updated, change the view to display all the CROBjects. */

  const updateExistingCR = evt => {
    evt.preventDefault();
    setIsLoading(true);

    ReadManager.update(completedRead).then(() =>
      props.history.push("/completedList")
    );
  };

  // ReadManager API call function gets the readingMaterial based on the Id in the URL
  //then data loads and setCRs is invoked with new data, then the component is rendered to the DOM

  useEffect(() => {
    ReadManager.get(props.match.params.readingMaterialsId).then(
      completedRead => {
        setCompletedReads(completedRead);
        setIsLoading(false);
      }
    );
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
          <DatePicker
            id="addDate"
            selected={startDate}
            value={completedRead.addDate}
            onChange={date => setStartDate(date)}
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

export default CompletedEdit;
