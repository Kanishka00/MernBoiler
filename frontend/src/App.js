import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Student from './components/Student';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path = "/" element = {<Home/>}/>
      <Route exact path = "/Student/View" element = {<ViewStudent/>}/>
      <Route exact path = "/Student" element = {<Student/>}/>
    </Routes>
    </>
  );
}

export default App;
