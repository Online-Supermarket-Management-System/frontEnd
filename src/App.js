import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Login />
    </div>
  );
}

export default App;
