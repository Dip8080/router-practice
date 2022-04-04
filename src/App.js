
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Friends from './Components/Friends/Friends';
import FriendsDetails from './Components/FriendsDetails/FriendsDetails';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import Postdetails from './Components/Postdetails/Postdetails';

function App() {
  return (
    <div className="App">
      
        <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Friends' element={<Friends></Friends>}></Route>
        <Route path='/Friends/:holdvalue' element={<FriendsDetails></FriendsDetails>}></Route>
        <Route path='/post' element={<Post></Post>}>
          <Route path=':value' element={<Postdetails></Postdetails>}></Route>
        </Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      
    </div>
  );
  }

export default App;
