
import './App.css'; //css가져오기
import Login from './login/Login';
import Cart from './cart/Cart';

function App() {
  return (
     <>
       <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
     </>
  )
}

export default App;
=======
import './App.css'; //css가져오기


function App() {
  return <App />;
}

export default App;

