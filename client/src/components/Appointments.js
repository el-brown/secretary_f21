import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card, Table } from "semantic-ui-react";

export default function Appointments() {
  const [appts, setAppts] = useState([])

  useEffect(() => {
    getAppts();
  }, []);

  const getAppts = async () => {
    try {
      let res = await axios.get("/api/appointments");
      setAppts(res.data);
    } catch (error) {}
  };

//TO DO Sort the appointments by time.

  const renderAppts = () => {
    return appts.map ((a) => {
      return (
        <Table.Body>
          <Table.Row>
              <Table.Cell>{a.time}</Table.Cell>
              <Table.Cell>{a.patient.name}</Table.Cell>
              <Table.Cell>Dr. {a.doctor.last_name}</Table.Cell>
          </Table.Row>
        </Table.Body>
      );
    });
  };

  return (
    <div>
      <h1>Appointments</h1>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Patient</Table.HeaderCell>
            <Table.HeaderCell>Doctor</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {renderAppts() }
      </Table>
    </div>
  );
}
