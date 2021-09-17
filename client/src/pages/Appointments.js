import React from "react";
import styled from "styled-components";
import { Button, Card, Table, TableBody } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";
import { Link } from "react-router-dom";


export default function Appointments() {
  return (
    <>
    <div>
      <h1>Appointments</h1>
      <Button><Link to='/newappoint'> New Appointment</Link> </Button>
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
            title = "table"
            renderData={(a) => {
              return (
                <Table.Row>
                 <Table.Cell className="four wide">{a.time}</Table.Cell>
                  <Table.Cell className="six wide">{a.patient.name}</Table.Cell>
                  <Table.Cell className="six wide">Dr. {a.doctor.last_name}</Table.Cell>
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

