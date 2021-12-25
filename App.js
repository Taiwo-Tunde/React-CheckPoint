import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Fill the details below to continue</p>

        <p>
          {" "}
          <label for="exampleInputEmail1">Email address</label> &nbsp;
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>{" "}
        </p>
        <small id="emailHelp" class="form-text text-muted"></small>

        <p>
          {" "}
          <label for="exampleInputPassword1">Password</label>&nbsp;
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </p>
        <p>
          {" "}
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
