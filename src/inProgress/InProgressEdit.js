import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import React, { useState, useEffect } from "react";
import ReadManager from "../modules/ReadManager";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InProgressEdit = props => {
  const [inProgressRead, setInProgressReads] = useState({
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

  const handleFieldChange = evt => {
    //Take the inProgressRead object and make a copy of it ...inProgressRead
    //(... is the spread operator, that tells the code to take whatever is after the ..., looks inside it, and grabs each key value pair and adds it to the new object) makes a clean copy (READ inprogressRead, pull out the contents, and COPY into NEW OBJECT)
    //it is not pointing to the existing object, ex: {inProgressRead} which would reference the existing object
    const stateToChange = { ...inProgressRead };
    //event comes from the input typed into the form, gets the id in the input form
    //can use square brackets to enter a variable to reference a key
    //target tells you where the event comes from
    //evt.target.id holds the value of a string
    stateToChange[evt.target.id] = evt.target.value;
    setInProgressReads(stateToChange);
    //passing stateToChange as an argument and telling set to make this the value of the state
  };

  const updateExistingIP = evt => {
    evt.preventDefault();
    setIsLoading(true);

    //want the entire object not just the id, update call grabs the ID
    ReadManager.update(inProgressRead).then(() =>
      props.history.push("/inProgressList")
    );
  };

  useEffect(() => {
    ReadManager.get(props.match.params.readingMaterialsId).then(
      inProgressRead => {
        setInProgressReads(inProgressRead);
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
            value={inProgressRead.title}
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
            value={inProgressRead.authorName}
            placeholder="Naoko Takeuchi"
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date Added</Label>
          <DatePicker
            id="addDate"
            selected={startDate}
            value={inProgressRead.addDate}
            onChange={date => setStartDate(date)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="readTypeId">Type of Reading Material</Label>
          <Input
            required
            onChange={handleFieldChange}
            type="select"
            value={inProgressRead.readTypeId}
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
            value={inProgressRead.statusId}
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
            value={inProgressRead.link}
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
            value={inProgressRead.notes}
            name="notes"
            id="notes"
          />
        </FormGroup>
        <Button
          disabled={isLoading}
          onClick={updateExistingIP}
          outline
          color="primary"
        >
          Submit
        </Button>{" "}
      </Form>
    </>
  );
};

export default InProgressEdit;
