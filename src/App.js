import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
import ModifyForm from './pages/user/ModifyForm';
import List from './pages/board/List';
import Form from './pages/board/attach/Form';
import Result from './pages/board/attach/Result';

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
          <Route path='/modifyform' element={<ModifyForm/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;