import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card, Table } from "semantic-ui-react";

export default function Patients() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = async () => {
    try {
      let res = await axios.get("/api/patients");
      console.log(res.data);
      setPatients(res.data);

    } catch (error) {}
  };

//TO DO Sort the Patients by name.

//   const sortPatients = () => {
//   return sorted
// }

  const renderPatients = () => {
    return patients.map ((p) => {
      return (
        <Table.Body>
          <Table.Row>
              <Table.Cell>{p.name}</Table.Cell>
              {/* < /> */}
          </Table.Row>
        </Table.Body>
      );
    });
  };

  return (
    <div>
      <h1>Patients</h1>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Patients</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {/* {sortApps()} */}
        {renderPatients() }
      </Table>
    </div>
  );
}
