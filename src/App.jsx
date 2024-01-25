import Services from "./components/Services";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";

//Publish this
function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
