import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, Input, Message, Select } from "semantic-ui-react";
import styled from "styled-components";
import SemanticLoadError from "../components/Error";
import SemanticLoader from "../components/SemanticLoader";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import Appointments from "./Appointments";

const NewPatientAppt = () => {
  const [patientId, setPatientId] = useState(null);
  const [doctorId, setDoctorId] = useState(null);
  const [time, setTime] = useState("");  
  const {
    data: patients,
    loading: patientsLoading,
    error: patErr
  } = useAxiosOnMount("/api/patients/");
  const {
    data: doctors,
    loading: docsLoading,
    error: docErr,
  } = useAxiosOnMount("/api/doctors/")

// const history = useHistory()

  const handlePChange = (e , { value }) => {
    setPatientId(value);
  };
  const handleDChange = (e, { value }) => {
    setDoctorId(value)
  };
  const handleSubmit = async () => {
    let res = await axios.post("/api/appointments", { 
      time, 
      patient_id: patientId, 
      doctor_id: doctorId, 
    });
    setTime("")
  };

  const renderPatients = () => {
    if (patientsLoading) {
      return <SemanticLoader />;
    }
    if (patErr) {
      return <SemanticLoadError error={patErr} />;
    }
    const patientOptions = patients.map((p) => {
      return { key: p.id, value: p.id, text: p.name }
    })
    
    return (
      <Select 
        onChange={handlePChange}
        placeholder="Select Patient"
        options={patientOptions}
        />
    );
  };

  const renderDoctors = () => {
    if (docsLoading) {
      return <SemanticLoader />
    }
    if (docErr) {
      return <SemanticLoadError error={docErr} />
    }
    const docOptions = doctors.map((d) => {
      return { key: d.id, value: d.id, text: d.last_name}
    })
    return (
      <Select 
        onChange={handleDChange}
        placeholder="Select Doctor"
        options={docOptions}
        />
    );
  };

  return (
    <FlexDiv>
      New Appointment
      <Form onSubmit={handleSubmit}>
        {renderPatients()}
        {renderDoctors()}
        <Input
          placeholder = "Enter Time"
          value={time}
          onChange={(e, {value}) => setTime(value)}
        />
        
        <Button type={"submit"}>Submit</Button>
      </Form>
    </FlexDiv>
  )
};

export default NewPatientAppt;

const FlexDiv = styled.div`
 
`