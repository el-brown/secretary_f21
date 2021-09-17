import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components"

export default function Home() {
  return (
    <div>
      <h1>Family Health Center</h1>
      <Tag>We're concerned for you.</Tag>
      <Image style={{margin: "11px"}} src="https://cdn.pixabay.com/photo/2016/02/08/23/36/isolated-1188036_960_720.png"/>
    </div>
  );
}

const Tag = styled.p`
  color: lightslategray;
 ` 