import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
//css
import './css/mysite.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='/loginform' element={<LoginForm/>}/>
          <Route path='/joinform' element={<JoinForm/>}/>
          <Route path='/joinok' element={<JoinOk/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;