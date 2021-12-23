import React, { useState } from "react";

const Accordion = () => {
	const [isToggled, setIsToggled] = useState(false);

	return (
		<div>
			{isToggled && <h3>Show Me</h3>}
			<button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
		</div>
	);
};

export default Accordion;
