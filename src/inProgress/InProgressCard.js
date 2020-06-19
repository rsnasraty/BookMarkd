import React, { useState, useEffect } from 'react'
import UserManager from "../modules/UserManager"
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [user, setUser] = useState({});
  const [reads, setReads] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithReadingMaterials(props.match.params.userId)
      .then(APIResult => {
        setUser(APIResult);
        setReads(APIResult.reads);
      });
  }, []);

  return (
    <div className="card">
      <p>User: {user.username}</p>
      {reads.map(read =>
        <ReadCard
          key={animal.id}
          animal={animal}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;