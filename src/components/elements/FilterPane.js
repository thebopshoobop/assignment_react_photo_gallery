import React from "react";
import { Panel, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const FilterPane = ({ filters, selected, handleFilterChange, resultCount }) =>
  <Panel header={`Refine Results: ${resultCount}`}>
    <form>
      <FormGroup controlId="filterSelect">
        <ControlLabel>Filters</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder={selected}
          onChange={handleFilterChange}
        >
          {filters.map(filter =>
            <option key={filter} value={filter}>
              {filter}
            </option>
          )}
        </FormControl>
      </FormGroup>
    </form>
  </Panel>;

export default FilterPane;
