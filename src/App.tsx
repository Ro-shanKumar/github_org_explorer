import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './page/Home/home.tsx';
import './custom.scss';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
