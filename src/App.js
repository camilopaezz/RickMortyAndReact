import "./styles.css";
import { Route } from "wouter";
import Home from "./pages/Home";
import CharacterPage from "./pages/CharacterPage";

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/character/:id" component={CharacterPage} />
    </div>
  );
}
