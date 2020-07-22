import styled from 'styled-components';
import React from "react";

 const BodyWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

const Title = styled.h1`
  color: #3c3c3c;
  font-size: 24px;
`

export default () => (
      <BodyWrapper>
        <Title>davcs86's page - under construction</Title>
        <a href="https://github.com/davcs86" target="_blank" title="Github page">My Github page</a>
      </BodyWrapper>
  );