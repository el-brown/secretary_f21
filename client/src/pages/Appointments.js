import React from "react";
import styled from "styled-components";
import { Card, Table, TableBody } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";


export default function Appointments() {
  return (
    <>
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
        <Table.Body>
          <ListLoader
            url="/api/appointments"
            renderData={(a) => {
              return (
                <Table.Row>
                 <Table.Cell>{a.time}</Table.Cell>
                  <Table.Cell>{a.patient.name}</Table.Cell>
                  <Table.Cell>Dr. {a.doctor.last_name}</Table.Cell>
                </Table.Row>
              )
            }}
            />
        </Table.Body>
      </Table>
      </div>
    </>
  );
};
     


 

//TO DO Sort the appointments by time.

