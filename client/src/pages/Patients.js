import React from "react";
import { Card, Table } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";

export default function Doctors() {
  return (
    <div>
      <h1>Patients</h1>
        <ListLoader
          url="/api/patients"
          renderData={(p) => {
            return (
                <Card fluid>
                  <Card.Content>
                    <Card.Header>{p.name}</Card.Header>
                    <Card.Meta>Appointments: </Card.Meta>
                  </Card.Content>
                </Card>
            )
          }}
          />
    </div>
  );
};