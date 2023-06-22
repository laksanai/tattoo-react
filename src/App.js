import './App.css';
import { useState } from 'react';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import AppHeader from './components/AppHeader';
import tattoos from './data/tattoos';



function App() {

	const [ selectedTattoo, setselectedTattoo ] = useState(null); 


	function onTattooOpenClick(theTattoo){
		setselectedTattoo(theTattoo)
	}


	const tattooElements = tattoos.map((tattoo, index) =>{
		return <TattooItem key={index} tattoo={tattoo} />
	});

	let tattooPost = null;
	if (!!selectedTattoo) {
		tattooPost = <TattooPost tattoo = {selectedTattoo} />
	}

	return (
		<div className="app">
			<AppHeader />
			<button onClick={() => {onTattooOpenClick(tattoos[3])}}>สักหน่อยไหมครับ</button>
			<div className='app-grid'>
				{tattooElements}
			</div>

			{tattooPost}

		</div>
	);
}

export default App;
