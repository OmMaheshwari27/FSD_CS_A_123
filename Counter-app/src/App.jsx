import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Stopwatch from './components/Stopwatch';

const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/> }></Route>
        <Route path="/counter" element={<h1> counter app</h1> }></Route>
        <Route path="/stopwatch" element={<Stopwatch/> }></Route>
        <Route path="*" element={<h1> no page available</h1> }></Route>
      </Routes>
    </div>
  )
}
export default App;