import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LoginScreen from './components/Login';
import LandingPage1 from './components/LandingPage1';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< LandingPage1/>}>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginScreen />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;