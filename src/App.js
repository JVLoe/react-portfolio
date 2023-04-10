import './App.css';
import NavBar from "./NavBar/NavBar";
import WelcomeMessage from "./Main/WelcomeMessage/WelcomeMessage";
import AboutMessage from "./Main/About/AboutMessage";
import ProjectsContainer from "./Main/ProjectsContainer/ProjectsContainer";
import ContactContainer from "./ContactContainer/ContactContainer";
import FooterContainer from "./Footer/FooterContainer";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <WelcomeMessage/>
            <AboutMessage/>
            <ProjectsContainer/>
            <ContactContainer />
            <FooterContainer />
        </div>
    );
}

export default App;
