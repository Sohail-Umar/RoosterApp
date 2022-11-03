import './App.css';
import About from './components/about/About';
import Advertising from './components/advertising/Advertising';
import Auction from './components/auction/Auction';
import ChainGame from './components/chaingame/ChainGame';
import newCarousel from './components/newcarousel/newCarousel';
import Contact from './components/contact/Contact';
import CreateCollection from './components/createCollection/CreateCollection';
import Hero from './components/hero/Hero';
import Logo from './components/logo/Logo';
import NftTool from './components/nfttool/NftTool';
import Raffle from './components/raffle/Raffle';
import Team from './components/team/Team';
function App() {
	return (
		<>
			<Hero />
			{/* <Logo /> */}
			<About />
			<Auction />
			<Raffle />
			<ChainGame />
			<NftTool />
			<Advertising />
			<Team />
			<Contact />
			{/* <CreateCollection /> */}
			{/* <newCarousel /> */}
		</>
	);
}

export default App;
