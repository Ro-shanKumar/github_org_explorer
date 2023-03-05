import Footer from '../../components/footer.tsx';
import Header from '../../components/header';
import Hero from './components/hero.tsx';
import SearchBox from './components/search.tsx';
import './home.css';
const Home = () => {
	return (
		<>
			<Hero />
			<SearchBox />
			<Footer />
		</>
	);
};

export default Home;
