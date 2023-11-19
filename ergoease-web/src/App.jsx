<<<<<<< HEAD
import './pages/styles/main.scss'
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  return (
    <>
      <LoginPage></LoginPage>
    </>
  )
}

export default App;
=======
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
>>>>>>> 030b76a9ad0add187e19a1919a02265d420955fb
