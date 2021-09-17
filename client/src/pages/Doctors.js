import React from "react";
import { Button, Card, CardMeta, Icon, Image, Table } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";
import styled from "styled-components";

export default function Doctors() {
  return (
    <div>
      <h1>Doctors</h1>
        <ListLoader
          url="/api/doctors"
          renderData={(d) => {
            return (
              <Card>
              <Card.Content>
                <Card.Header>Dr.{d.last_name}</Card.Header>
              </Card.Content>
              <Card.Content description="{description}" />
              <Card.Content extra>
                <Icon name='user' />Patients
              </Card.Content>
            </Card>
            )
          }}
        />
    </div>
  )
}

const FlexBoxes = styled.div`
  display: flex;
  flex-direction: row;
`

