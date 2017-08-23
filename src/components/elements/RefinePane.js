import React from "react";
import {
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

const RefinePane = ({ filters, selected, handlers, resultCount }) =>
  <Panel header={`Refine Results: ${resultCount}`}>
    <Form inline>
      <FormGroup className="col-sm-4" controlId="filterSelect">
        <ControlLabel>Search&nbsp;&nbsp;</ControlLabel>
        <FormControl type="text" onChange={handlers.search} />
      </FormGroup>
      <FormGroup className="col-sm-4" controlId="filterSelect">
        <ControlLabel>Sort&nbsp;&nbsp;</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="Ascending"
          onChange={handlers.sort}
        >
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </FormControl>
      </FormGroup>
      <FormGroup className="col-sm-4" controlId="filterSelect">
        <ControlLabel>Filters&nbsp;&nbsp;</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder={selected}
          onChange={handlers.filter}
        >
          {filters.map(filter =>
            <option key={filter} value={filter}>
              {filter}
            </option>
          )}
        </FormControl>
      </FormGroup>
    </Form>
  </Panel>;

export default RefinePane;
