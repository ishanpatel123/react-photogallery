import './App.css';
import PhotoGallery from './components/PhotoGallery';
import data from './data/data.json';

function App() {
  return (
    <PhotoGallery images={data.images}/>
  );
}

export default App;
