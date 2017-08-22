import React from "react";
import { Panel, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const FilterPane = ({ filters, selected, handleChange }) =>
  <Panel header="Refine Results:">
    <form>
      <FormGroup controlId="filterSelect">
        <ControlLabel>Filters</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder={selected}
          onChange={handleChange}
        >
          {filters.map(filter =>
            <option value={filter}>
              {filter}
            </option>
          )}
        </FormControl>
      </FormGroup>
    </form>
  </Panel>;

export default FilterPane;
