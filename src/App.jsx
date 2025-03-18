import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage1 from "./components/LandingPage1";
import LandingPage2 from "./components/LandingPage2";
import SignUp from "./components/SignUp";
import FundiSignUp from "./components/FundiSignUp";
import Professional from "./components/Professional";
import ContractorSignup from "./components/ContractorSignUp";
import HardwareSignUp from "./components/HardwareSignUp";
import LoginScreen from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import AdminPanel1 from "./components/AdminPanel1";
import AdminPanel2 from "./components/AdminPanel2";
import AdminPanel3 from "./components/AdminPanel3";
import Builders from "./components/Builders";
// import ShopAppPage from "./components/shopAppPage";
import IndiCustomers from "./components/IndiCustomers";
import OrganCustomer from "./components/OrganCustomer";
import JobForm from "./components/JobForm";
import AdminSingleSource from "./components/AdminSingleSource";
import AssignmentRegister from "./components/AssignmentRegister";
import QuotationEvaluation from "./components/QuotationEvaluation";
import AdminPaymentConfirmation from "./components/AdminPaymentConfirmation";
import ProjectQuoteForm from "./components/ProjectQuoteForm";
import CustomerActiveProgress from "./components/CustomerActiveProgress";
import ProjectFinance from "./components/ProjectFinance";
import AdminProducts from "./components/AdminProducts";
import EditProductForm from "./components/EditProductForm";
import BillDetails from "./components/BillDetails";
import NavigationBar from "./components/Navigation/NavigationBar";
import CustomerPortal from "./components/customerPortal/CustomerPortal";
import Contractor from "./components/customerPortal/contractor/Contractor";
import ProfessionalPortal from "./components/customerPortal/professionalPortal/Professional";
import Hardware from "./components/customerPortal/hardwarePortal/ShopApp";
import AllProductsCate from "./components/customerPortal/hardwarePortal/hardwareProducts/subCategories/cement/allProductsCate";
import Cart from "./components/customerPortal/hardwarePortal/hardwareProducts/subCategories/cement/Cart";
import Checkout from "./components/customerPortal/hardwarePortal/hardwareProducts/subCategories/cement/Checkout";
// import ManageAccount from "./components/customerPortal/manageAccount/ManageAccount";
// import Chatbot from "./components/customerPortal/ChatBot";
import FundiPortfolio from "./components/fundiPortfolio/FundiPortfolio";
import AccountProfile from "./components/fundiPortfolio/manageAccount/AccountProfile";
import UploadAttachments from "./components/fundiPortfolio/manageAccount/UpLoadAttachments";
import Products from "./components/fundiPortfolio/manageAccount/Products";
import Experience from "./components/fundiPortfolio/manageAccount/Experience";
// import ProfileNavBar from "./components/fundiPortfolio/manageAccount/ProfileNavBar";
import AddProducts from "./components/fundiPortfolio/manageAccount/AddProducts";
import ProductsTable from "./components/fundiPortfolio/manageAccount/ProductsTable";
import EditPhone from "./components/fundiPortfolio/manageAccount/EditAccountInfo/EditPhone";
import EditEmail from "./components/fundiPortfolio/manageAccount/EditAccountInfo/EditEmail";
import Address from "./components/fundiPortfolio/manageAccount/Address";
import JobRequestDetails from "./components/fundiPortfolio/JobRequestDetails";
import CustomerProfile from "./components/customerPortal/manageAccount/CustomerProfile";
import CustomerAddress from "./components/customerPortal/manageAccount/CustomerAddress";
import CustomerUploads from "./components/customerPortal/manageAccount/CustomerUploads";
import CustomerPassword from "./components/customerPortal/manageAccount/CustomerPassword";
import RequisitionInvoice from "./components/customerPortal/fundiRequisition/RequisitionInvoice";
import Quotations from "./components/fundiPortfolio/fundiLanding/Quotations";
import Active from "./components/fundiPortfolio/fundiLanding/Active";
import Past from "./components/fundiPortfolio/fundiLanding/Past";
import Account2 from "./components/ProfessionalPortal/ManageAccount/Account2";
import Experience2 from "./components/ProfessionalPortal/ManageAccount/Experience2";
import Products2 from "./components/ProfessionalPortal/ManageAccount/Products2";
import Address2 from "./components/ProfessionalPortal/ManageAccount/Address2";
// import Uploads2 from "./components/ProfessionalPortal/ManageAccount/Uploads2";
// import Project from "./components/ProfessionalPortal/ManageAccount/Uploads2";
import Profession from "./components/ProfessionalPortal/ManageAccount/Profession";
import JobSpecifications from "./components/fundiPortfolio/active/JobSpecifications";
import Quote from "./components/fundiPortfolio/active/Quote";
import PaymentFundi from "./components/fundiPortfolio/active/PaymentFundi";
import CustomerFundi from "./components/fundiPortfolio/active/CustomerFundi";
import Cement from "./components/customerPortal/hardwarePortal/hardwareProducts/subCategories/cement/Cement";
import CementDetail from "./components/customerPortal/hardwarePortal/hardwareProducts/subCategories/cement/CementDetail";
import Designs from "./components/customerPortal/hardwarePortal/hardwareProducts/subCategories/design/Designs";
import CustomProducts from "./components/customerPortal/hardwarePortal/customProducts/CustomProducts";
import HireEquipments from "./components/customerPortal/hardwarePortal/hireEquipments/HireEquipments";
import Draft from "./components/fundiPortfolio/fundiLanding/Draft";
import NotFound from "./components/errorPage/NotFound";
import TrackProgress from "./components/fundiPortfolio/active/TrackProgress";
// import ProBillSummary from "./components/customerPortal/professionalPortal/requisitions/ProBillSummary";
// import ProTeam from "./components/customerPortal/professionalPortal/requisitions/ProTeam";
// import CustomerAccountSideNav from "./components/customerPortal/manageAccount/CustomerAccountSideNav";
// import ShopAppNavBar from "./components/Navigation/ShopAppNavBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      {/* <ProBillSummary />
      <ProTeam />  */}
      {/* <Chatbot />
        {/* <ShoppingCart /> */}
      {/* <ProfileNavBar /> */}
      {/* <CustomerAccountSideNav /> */}
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<LandingPage1 />} />
        <Route path="/landing-page-2" element={<LandingPage2 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/fundisignup" element={<FundiSignUp />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/contractor" element={<ContractorSignup />} />
        <Route path="/hardware" element={<HardwareSignUp />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/jobs" element={<AdminPanel1 />} />
        <Route path="/orders" element={<AdminPanel2 />} />
        <Route path="/builders" element={<Builders />} />
        <Route path="/orders2" element={<AdminPanel3 />} />
        {/* <Route path="/shopapp" element={<ShopAppPage />} /> */}
        <Route path="/individual" element={<IndiCustomers />} />
        <Route path="/organization" element={<OrganCustomer />} />
        <Route path="/jobform" element={<JobForm />} />
        <Route path="/singlesource" element={<AdminSingleSource />} />
        <Route path="/assignment" element={<AssignmentRegister />} />
        <Route path="/quotation" element={<QuotationEvaluation />} />
        <Route path="/payment" element={<AdminPaymentConfirmation />} />
        <Route path="/quoteform" element={<ProjectQuoteForm />} />
        <Route path="/progress" element={<CustomerActiveProgress />} />
        <Route path="/finance" element={<ProjectFinance />} />
        <Route path="/bill-details/:id" element={<BillDetails />} />
        <Route path="/products" element={<AdminProducts />} />
        <Route path="/edit" element={<EditProductForm />} />
        
        {/* Customer Routes */}
        <Route path="/customer" element={<CustomerPortal />} />
        <Route path="/customer/manage-account" element={<CustomerProfile />} />
        <Route path="/customer/address" element={<CustomerAddress />} />
        <Route path="/customer/account-uploads" element={<CustomerUploads />} />
        <Route path="/customer/security" element={<CustomerPassword />} />
        <Route path="/customer/fundi-requisition-invoice" element={<RequisitionInvoice />} />
        {/* Hardware Shop Routes */}
        <Route path="/hardware_shop" element={<Hardware />} />
        <Route path="/hardware_shop/hardware-products" element={<AllProductsCate />} />
        <Route path="/hardware_shop/cart" element={<Cart />} />
        <Route path="/hardware_shop/checkout" element={<Checkout />} />
        <Route path="customer/fundi-requisition-invoice" element={<RequisitionInvoice />} />
        <Route path="/request-contractor" element={<Contractor />} />
        <Route path="/request-professional" element={<ProfessionalPortal />} />
        {/* Parent Route for Hardware Shop */}
        <Route path="/hardware_shop" element={<Hardware />} />
        <Route path="/hardware_shop/hardware-products" element={<AllProductsCate />} />
        <Route path="/hardware_shop/hardware-products/cement" element={<Cement />} />
        <Route path="/hardware_shop/hardware-products/cement/cement-detail" element={<CementDetail />} />
        <Route path="/hardware_shop/hardware-products/cement/cement-detail/cart" element={<Cart />} />
        <Route path="/hardware_shop/hardware-products/cement/cement-detail/cart/checkout" element={<Checkout />} />
        <Route path="/hardware_shop/designs" element={<Designs />} />
        <Route path="/hardware_shop/custom-products" element={<CustomProducts />} />
        <Route path="/hardware_shop/hire-equipments-and-machinery" element={<HireEquipments />} />
        {/* fundi */}
        <Route path="/fundi-portal" element={<FundiPortfolio />} />
        {/* <Route path="/fundi-portal/draft" element={<Draft />} /> */}
        <Route path="/fundi-portal/draft" element={<Draft />} />
        <Route path="/fundi-portal/quotations" element={<Quotations />} />
        <Route path="/fundi-portal/active/progress" element={<TrackProgress />} />
        <Route path="/fundi-portal/active" element={<Active/>} />
        <Route path="/fundi-portal/active/job-specification" element={<JobSpecifications/>} />
        <Route path="/fundi-portal/active/Quote" element={<Quote/>} />
        <Route path="/fundi-portal/active/payment-fundi" element={<PaymentFundi/>} />
        <Route path="/fundi-portal/active/customer" element={<CustomerFundi/>} />
        <Route path="/fundi-portal/past" element={<Past />} />
        <Route path="/fundi-portal/job-request" element={<JobRequestDetails />} />
        <Route path="/fundi-portal/account-info" element={ <AccountProfile />} />
        <Route path="/fundi-portal/account-info/edit-email" element={ <EditEmail />} />
        <Route path="/fundi-portal/account-info/edit-phone" element={ <EditPhone />} />
        <Route path="/fundi-portal/address" element={<Address />} />
        <Route path="/fundi-portal/account-uploads" element={<UploadAttachments />} />
        <Route path="/fundi-portal/products" element={<Products />} />
        <Route path="/fundi-portal/products/add-product" element={<AddProducts /> } />
        <Route path="/fundi-portal/fundi-portal/products/add-product/products-table" element={<ProductsTable />} />
        <Route path="/fundi-portal/experience" element={<Experience />} />
        {/* ProfessionalPortal */}
        <Route path="/professionalPortal" element={<Profession/>} />
        <Route path="/professionalPortal/account-info" element={<Account2 />} />
        <Route path="/professionalPortal/experience" element={<Experience2/>} />
        <Route path="/professionalPortal/products" element={<Products2 />} />
        {/* <Route path="/professionalPortal/project-details" element={<Project/>} /> */}
        {/* <Route path="/professionalPortal/uploads" element={<Uploads2 />} /> */}
        <Route path="/professionalPortal/address" element={<Address2 />} />
        {/* Catch-All Route for 404 */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
