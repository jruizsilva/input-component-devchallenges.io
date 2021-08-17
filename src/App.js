import React from 'react';
import styled from 'styled-components';
import {
  SideNavegation,
  Logo,
  Span,
  Nav,
  Link,
} from './Elements/SideNavegation';
import {
  Main,
  H1,
  Code,
  Row,
  Col,
  Footer,
  Author,
  Site,
} from './Elements/Main';
import Input from './Components/Input';

const App = () => {
  return (
    <Container>
      <SideNavegation>
        <Logo>
          <Span>Dev</Span>challenges.io
        </Logo>
        <Nav>
          <Link href='#'>Typography</Link>
          <Link href='#'>Grid</Link>
          <Link href='#'>Buttons</Link>
          <Link href='#' active>
            Inputs
          </Link>
        </Nav>
      </SideNavegation>
      <Main>
        <H1>Inputs</H1>
        <Row columns={3} width='200px'>
          <Col>
            <Code>{'<Input />'}</Code>
            <Input type='text' label='Label' placeholder='Placeholder' />
          </Col>
          <Col>
            <Code light>{'&:hover'}</Code>
            <Input type='text' label='Label' placeholder='Placeholder' />
          </Col>
          <Col>
            <Code light>{'&:focus'}</Code>
            <Input type='text' label='Label' placeholder='Placeholder' />
          </Col>
        </Row>
        <Row columns={3} width='200px'>
          <Col>
            <Code>{'<Input error />'}</Code>
            <Input type='text' label='Label' placeholder='Placeholder' error />
          </Col>
          <Col>
            <Code light>{'&:hover'}</Code>
            <Input type='text' label='Label' placeholder='Placeholder' />
          </Col>
          <Col>
            <Code light>{'&:focus'}</Code>
            <Input type='text' label='Label' placeholder='Placeholder' error />
          </Col>
        </Row>
        <Row columns={1}>
          <Col>
            <Code>{'<Input disabled />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              disabled
            />
          </Col>
        </Row>
        <Row columns={2} width={'300px'}>
          <Col>
            <Code>{'<Input helperText=”Some interesting text” />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              helperText='Some interesting text'
            />
          </Col>
          <Col>
            <Code>{'<Input helperText=”Some interesting text” error />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              helperText='Some interesting text'
              error
            />
          </Col>
        </Row>
        <Row columns={2} width={'300px'}>
          <Col>
            <Code>{'<Input startIcon />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              startIcon
              icon='phone'
            />
          </Col>
          <Col>
            <Code>{'<Input endIcon />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              endIcon
              icon='lock'
            />
          </Col>
        </Row>
        <Row columns={1}>
          <Col>
            <Code>{'<Input value=”text” />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              value='text'
            />
          </Col>
        </Row>
        <Row columns={2} width={'300px'}>
          <Col>
            <Code>{'<Input size=”sm” />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              size='sm'
            />
          </Col>
          <Col>
            <Code>{'<Input size=”md” />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              size='md'
            />
          </Col>
        </Row>
        <Row columns={1}>
          <Col>
            <Code>{'<Input fullWidth />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              fullWidth
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Code>{'<Input multiline row=”4” />'}</Code>
            <Input
              type='text'
              label='Label'
              placeholder='Placeholder'
              multiline
              row='4'
            />
          </Col>
        </Row>
        <Footer>
          created by <Author>JonathanRuizSilva</Author> -{' '}
          <Site>devChallenges.io</Site>
        </Footer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
`;

export default App;
