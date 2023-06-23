import './App.css';
import { useState } from 'react';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import AppHeader from './components/AppHeader';
import tattoos from './data/tattoos';
import AppSearch from './components/AppSearch'


function App() {

	const [ selectedTattoo, setselectedTattoo ] = useState(null); 
	const [searchText, setSearchText] = useState('');

	function onTattooOpenClick(theTattoo){
		setselectedTattoo(theTattoo);
	}

	function onTattooCloseClick(){
		setselectedTattoo(null);
	}

	const tattooElements = tattoos.filter((tattoo) => {return tattoo.title.includes(searchText);
	}).map((tattoo, index) =>{
		return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
	});

	let tattooPost = null;
	if (!!selectedTattoo) {
		tattooPost = <TattooPost tattoo = {selectedTattoo} onBgClick={onTattooCloseClick}/>;
	}

	return (
		<div className="app">
			<AppHeader />
			<section className='app-section'>
				<div className='app-container'>
					<AppSearch value={searchText} onValueChange={setSearchText} />
					<div className='app-grid'>
						{tattooElements}
					</div>
				</div>
			</section>

		{tattooPost}

		</div>
	);
}

export default App;
