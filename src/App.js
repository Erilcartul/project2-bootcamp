import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import "./App.css";
import AuthForm from "./Authentication";
import Composer from "./Main";
import { auth } from "./Firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      shouldRenderAuthForm: false,
    };
  }

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      // If user is logged in, save logged-in user to state
      if (user) {
        this.setState({ loggedInUser: user });
        return;
      }
      // Else set logged-in user in state to null
      this.setState({ loggedInUser: null });
    });
  }

  toggleAuthForm = () => {
    this.setState((state) => ({
      shouldRenderAuthForm: !state.shouldRenderAuthForm,
    }));
  };

  render() {
    const authForm = <AuthForm toggleAuthForm={this.toggleAuthForm} />;
    const composer = <Composer loggedInUser={this.state.loggedInUser} />;
    const createAccountOrSignInButton = (
      <div>
        <button onClick={this.toggleAuthForm}>Create Account Or Sign In</button>
        <br />
      </div>
    );
    const composerAndNewsFeed = (
      <div>
        {/* Render composer if user logged in, else render auth button */}
        {this.state.loggedInUser ? composer : createAccountOrSignInButton}
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <br />
          {this.state.shouldRenderAuthForm ? authForm : composerAndNewsFeed}
        </header>
      </div>
    );
  }
}

export default App;
