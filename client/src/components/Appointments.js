import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Appointments() {
  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = async () => {
    try {
      let res = await axios.get("/api/things");
      console.log(res);
    } catch (error) {}
  };
  return (
    <div>
      <h1>Appointments</h1>
      <Text>working</Text>
    </div>
  );
}

const Text = styled.p`
  color: red;
  font-size: 40px;
`;