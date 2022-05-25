import './App.css';

// Components
import { NavBar, Hero, WhoWeAre, OurTool, Services, HowItWorks, Features, Footer, OurToolCustom } from './components';

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <WhoWeAre />
      <OurTool />
      <Services />
      <OurToolCustom />
      <HowItWorks />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
