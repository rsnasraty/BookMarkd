//I want to filter so users can see their in progress results
import React, { useState, useEffect } from 'react'
import ReadManager from "../modules/ReadManager"

const EmployeeWithAnimals = props => {
  const [read, setReads] = useState({});
  const [status, setStatus] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    ReadManager.getWithRMandStatus(props.match.params.userId)
      .then(APIResult => {
        setReads(APIResult);
        setStatus(APIResult.status);
      });
  }, []);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;