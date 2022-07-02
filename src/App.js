import "./App.scss"
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Catalog from './components/views/Catalog/Catalog'
import CreateForm from './components/views/Create/Create'
import Details from './components/views/Details/Details'

function App() {
	return (
		<>
			<Header></Header>
		</>
	);
}

export default App;
