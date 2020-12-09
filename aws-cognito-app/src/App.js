import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <p>You have logged in!!!</p>
        <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
