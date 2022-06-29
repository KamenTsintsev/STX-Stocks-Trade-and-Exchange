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

			<div id="main-content">
				<Routes>
					<Route path="/" element={<Catalog />} />
					<Route path="/create" element={<CreateForm />} />
					<Route path="/details" element={<Details />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
