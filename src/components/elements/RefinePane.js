import React from 'react';
import {
	Panel,
	Form,
	FormGroup,
	FormControl,
	ControlLabel
} from 'react-bootstrap';

const RefinePane = ({ filters, selected, handleFilterChange, resultCount }) =>
	<Panel header={`Refine Results: ${resultCount}`}>
		<Form inline>
			<FormGroup className="col-sm-4" controlId="filterSelect">
				<ControlLabel>Search&nbsp;&nbsp;</ControlLabel>
				<FormControl
					type="text"
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
			<FormGroup className="col-sm-4" controlId="filterSelect">
				<ControlLabel>Sort&nbsp;&nbsp;</ControlLabel>
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
			<FormGroup className="col-sm-4" controlId="filterSelect">
				<ControlLabel>Filters&nbsp;&nbsp;</ControlLabel>
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
		</Form>
	</Panel>;

export default RefinePane;
