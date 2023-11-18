import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './pages/styles/main.scss'
import LoginPage from './pages/LoginPage/LoginPage';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/PasswordRecovery" element={<PasswordRecovery/>}/>
      </Routes>
    </Router>

  )
}

export default App;
