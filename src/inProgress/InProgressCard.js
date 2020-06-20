import React, { useState, useEffect } from 'react'
import { Button, Label, Input} from "reactstrap";
import ReadManager from "../modules/ReadManager";

const InProgressCard = props => {
  const [reads, setReads] = useState({ readingMaterials: "", statusId: "" });;

  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setReads(stateToChange);
  };

}
