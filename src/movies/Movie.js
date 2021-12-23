import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ movie, config }) => {
	return (
		<li>
			<Link to={`/movie/${movie.id}`}>
				{config.images?.base_url && (
					<img
						src={config.images.base_url + "w342" + movie.poster_path}
						alt={movie.title + " Poster"}
					/>
				)}
			</Link>
		</li>
	);
};

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string,
		poster_path: PropTypes.string,
		id: PropTypes.number.isRequired,
		config: PropTypes.shape({
			images: PropTypes.shape({
				base_url: PropTypes.string,
			}),
		}),
	}).isRequired,
};

export default Movie;
