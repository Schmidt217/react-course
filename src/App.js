import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MoviesList from "./movies/MoviesList";
import MovieDetail from "./movies/MovieDetail";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<MoviesList />}></Route>
					<Route path="/movie/:id" element={<MovieDetail />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
