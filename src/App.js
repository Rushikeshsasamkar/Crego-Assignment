import "./App.css";
import Form from "./components/Form.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center align-items-center px-4 text-light" style={{
        height: "100px",
        backgroundColor: "#8080A5",
        fontSize: "25px",
        fontFamily: 'serif', // Add this line for serif font style
      }}>
        Web-based Expression Engine UI using Bootstrap and React
      </div>
      <Form />
    </div>
  );
}

export default App;
