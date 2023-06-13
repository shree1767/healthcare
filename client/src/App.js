import './App.css';
// import LoginPage from './components/Login/login';
import Navbar from './Components/Navbar/Navbar';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
