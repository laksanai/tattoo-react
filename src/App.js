import './App.css';
import TattooItem from './components/TattooItem';
// import TattooPost from './components/TattooPost';
import AppHeader from './components/AppHeader';

function App() {

  return (
    <div className="app">
        <AppHeader />
        <div className='app-grid'>
            <TattooItem/>
            <TattooItem/>
            <TattooItem/>
            <TattooItem/>
        </div>

    </div>
  );
}

export default App;
