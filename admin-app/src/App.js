import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colotlist";
import Catgorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productslist from "./pages/Productlist";
import Addblog from "./pages/Addblog";
import Addblogcat from "./pages/Addblogcat";
import Addcolor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/reset-password" element={<Resetpassword />}></Route>
          <Route path="/forgot-password" element={<Forgotpassword />}></Route>
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="blog-list" element={<Bloglist />}></Route>
            <Route path="blog" element={<Addblog />}></Route>
            <Route path="blog-category-list" element={<Blogcatlist />}></Route>
            <Route path="blog-category" element={<Addblogcat />}></Route>
            <Route path="category" element={<Addcat />}></Route>
            <Route path="brand" element={<Addbrand />}></Route>
            <Route path="enquiries" element={<Enquiries />}></Route>
            <Route path="orders" element={<Orders />}></Route>
            <Route path="customers" element={<Customers />}></Route>
            <Route path="list-color" element={<Colorlist />}></Route>
            <Route path="list-color" element={<Colorlist />}></Route>
            <Route path="color" element={<Addcolor />}></Route>
            <Route path="list-category" element={<Catgorylist />}></Route>
            <Route path="list-brand" element={<Brandlist />}></Route>
            <Route path="list-product" element={<Productslist />}></Route>
            <Route path="product" element={<Addproduct />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
