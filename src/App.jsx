import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LandingPage1 from "./components/LandingPage1";
import CustomerPortal from "./components/customerPortal/CustomerPortal";
import Draft from "./components/fundiPortfolio/fundiLanding/Draft";
import NotFound from "./components/errorPage/NotFound";
// import TrackProgress from "./components/fundiPortfolio/active/TrackProgress";
// import ProBillSummary from "./components/customerPortal/professionalPortal/requisitions/ProBillSummary";
// import ProTeam from "./components/customerPortal/professionalPortal/requisitions/ProTeam";
// import CustomerAccountSideNav from "./components/customerPortal/manageAccount/CustomerAccountSideNav";
// import ShopAppNavBar from "./components/Navigation/ShopAppNavBar";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage1 />}>
      <Route index element={<LandingPage1 />} />
      <Route path="customer" element={<CustomerPortal />} />
      <Route path="draft" element={<Draft />} />
      <Route path="*" element={<NotFound />} />

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
