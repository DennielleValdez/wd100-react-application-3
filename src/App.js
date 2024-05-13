import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavigationBar from "./components/navigationbar";
import Banner from "./img/banner.jpg"
import BodyContent from "./components/bodycontent";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavigationBar img={Banner}></NavigationBar>
      <BodyContent></BodyContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
