import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import ReadManager from "../modules/ReadManager";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddNewReadForm = props => {
  const [read, setReads] = useState({
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

  //Handlefieldchange records the user input in the form, setReads function then inputs the updated read state object
  const handleFieldChange = evt => {
    const stateToChange = { ...read };
    stateToChange[evt.target.id] = evt.target.value;
    setReads(stateToChange);
  };


  const constructNewRead = evt => {
    evt.preventDefault();
    if (
      read.title === "" ||
      read.authorName === "" ||
      read.readTypeId === "" ||
      read.statusId === "" ||
      read.addDate === "" ||
      read.link === "" ||
      read.notes === ""
    ) {
      setIsLoading(true);
      ReadManager.post(read).then(() => props.history.push("/Home"));
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
            id="authorName"
            placeholder="Naoko Takeuchi"
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date Added</Label>
          <DatePicker
            id="addDate"
            selected={startDate}
            onChange={date => setStartDate(date)}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="readTypeId">Type of Reading Material</Label>
          <Input
            required
            onChange={handleFieldChange}
            type="select"
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
            name="notes"
            id="notes"
          />
        </FormGroup>
        <Button
          disabled={isLoading}
          onClick={constructNewRead}
          outline
          color="primary"
        >
          Submit
        </Button>{" "}
      </Form>
    </>
  );
};

export default AddNewReadForm;