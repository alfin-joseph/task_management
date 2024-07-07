import './App.css';
import { createBrowserRouter, createRoutesFromElements ,Route,RouterProvider } from 'react-router-dom';
import MiniDrawer from './components/NavbarPanel';
import DashBoard from './components/DashBoard';
import TaskView from './components/TaskView';






function App() {
 const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MiniDrawer/>}>
    <Route index element={<DashBoard/>}></Route>
    <Route path='/tasks' element={<TaskView/>}></Route>
  </Route>
 ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
