import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: pink;
  color: white;
  border: 2px solid white;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`

const ListItem = styled.li`
  color: dodgerblue;
  padding-bottom: 1rem;
`

export { Button, List, ListItem };