import { useEffect } from "react";
import { useState } from "react";
const App = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("");
	console.log(input);
	const getdata = async () => {
		try {
			const response = await fetch(`https://rickandmortyapi.com/api/character`);
			const responseData = await response.json();
			const filteredData = responseData.results.filter(
				(item) => item.id <= input
			);
      console.log(filteredData);
			// console.log(responseData.results);
			setData(filteredData);
		} catch (e) {
			console.error(e);
		}
	};
	useEffect(() => {
		getdata();
	}, []);
	return (
		<div>
			<input
				type="number"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
      <button onClick={getdata}>upDate</button>
			{data.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<img src={item.image} alt="" style={{ width: 200 }} />
					<p>{item.status}</p>
				</div>
			))}
		</div>
	);
};
export default App;
