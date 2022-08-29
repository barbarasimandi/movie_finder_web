import React, { useRef } from 'react';
import { Form, FormGroup, Row, Col, Input, Button } from "reactstrap";

const SearchForm = ({ onSearch }) => {
  const queryRef = useRef();

  const formSubmissionHandler = event => {
    event.preventDefault();
    const enteredQuery = queryRef.current.value
    onSearch(enteredQuery);
    queryRef.current.value = ''
  }

  return (
    <Form onSubmit={formSubmissionHandler} className="form">
      <Row className="row-cols-lg align-items-center">
        <Col sm={12}>
          <FormGroup>
            <Input
              type="text"
              placeholder="Search movies..."
              name="search"
              innerRef={queryRef}
              className="form-name"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Button type="submit">Search</Button>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;