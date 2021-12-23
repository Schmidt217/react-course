import React from "react";
import PropTypes from "prop-types";

const Filter = ({ setFilter, filter }) => {
	return (
		<label>
			Filter:
			<input onChange={(e) => setFilter(e.target.value)} value={filter} />
		</label>
	);
};

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	setFilter: PropTypes.func.isRequired,
};

export default Filter;
