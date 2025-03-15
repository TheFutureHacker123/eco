import './App.css';
import './output.css'
import Home from "./resources/home"
import Login from"./resources/user/login"
import LoginAdmin from"./resources/admin/login"
import Reset from"./resources/user/reset"
import Register from "./resources/user/register"

import PersonalInfo from "./resources/vendor/personalinfo"
import BusinessInfo from "./resources/vendor/businessinfo"
import BankInfo from "./resources/vendor/bankinfo"

import Cart from "./resources/user/cart"
import Dashboard from "./resources/user/dashboard"
import VendorDashboard from "./resources/vendor/dashboard"
import AdminDashboard from "./resources/admin/dashboard"
import SAdminDashboard from "./resources/superadmin/dashboard"
import LoginVendor from "./resources/vendor/login"
import RegisterVendor from "./resources/vendor/register"

import AdminMessages from "./resources/vendor/message/admin-messages"
import Notifications from "./resources/vendor/message/notifications"
import ReviewMessages from "./resources/vendor/message/review-messages"
import UserMessages from "./resources/vendor/message/user-messages"

import ListUsers from "./resources/admin/user/list-users"
import UserMessagesAdmin from "./resources/admin/user/user-messages"

import ListVendor from "./resources/admin/vendor/list-vendors"
import ManageProducts from "./resources/admin/vendor/manage-products"
import ManageOrders from "./resources/admin/vendor/manage-orders"
import VendorMessages from "./resources/admin/vendor/vendor-messages"
import ApprovePayouts from "./resources/admin/vendor/approve-payout"

import AddBanner from "./resources/admin/banner/add-banner"
import ManageProfileAdmin from "./resources/admin/setting/manage-profile"
import UpdatePassword from "./resources/admin/setting/update-password"

import CompletedOrders from "./resources/vendor/order/completed"
import ControlOrder from "./resources/vendor/order/orders"
import Refunds from "./resources/vendor/order/refunds"
import ShippedItems from "./resources/vendor/order/shipped"

import AddProduct from "./resources/vendor/product/add-products"
import AddCoupons from "./resources/vendor/product/coupons"
import ManageProfile from "./resources/vendor/setting/manage-profile"


import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/login" element={<LoginAdmin />} />
                <Route path="/signup" element={<Register />} />
               
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/vendor/dashboard" element={<VendorDashboard />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/superadmin/dashboard" element={<SAdminDashboard />} />
                <Route path="/superadmin/login" element={<LoginAdmin />} />
                <Route path="/superadmin" element={<SAdminDashboard />} />

                <Route path="/reset" element={<Reset />} />
                <Route path="/cart" element={<Cart />} />


                <Route path="/vendor/login" element={<LoginVendor />} />
                <Route path="/vendor/register" element={<RegisterVendor />} />
                <Route path="/vendor/personalinfo" element={<PersonalInfo />} />
                <Route path="/vendor/businessinfo" element={<BusinessInfo />} />
                <Route path="/vendor/bankinfo" element={<BankInfo />} />

                <Route path="/admin/list-users" element={<ListUsers />} />
                <Route path="/admin/user-messages" element={<UserMessagesAdmin />} />
                <Route path="/admin/list-vendors" element={<ListVendor />} />
                <Route path="/admin/manage-products" element={<ManageProducts />} />               
                <Route path="/admin/manage-orders" element={<ManageOrders />} />
                <Route path="/admin/approve-payout" element={<ApprovePayouts />} />
                <Route path="/admin/vendor-messages" element={<VendorMessages />} />

                <Route path="/admin/banners" element={<AddBanner />} />
                <Route path="/admin/manage-profile" element={<ManageProfileAdmin />} />
                <Route path="/admin/manage-password" element={<UpdatePassword />} />

                <Route path="/vendor/dashboard" element={<VendorDashboard />} />
                <Route path="/vendor/add-product" element={<AddProduct />} />
                <Route path="/vendor/coupons" element={<AddCoupons />} />

                <Route path="/vendor/orders" element={<ControlOrder />} />
                <Route path="/vendor/shipped" element={<ShippedItems />} />
                <Route path="/vendor/refunds" element={<Refunds />} />
                <Route path="/vendor/completed" element={<CompletedOrders />} />
                
                <Route path="/vendor/user-messages" element={<UserMessages />} />
                <Route path="/vendor/admin-messages" element={<AdminMessages />} />
                <Route path="/vendor/review-messages" element={<ReviewMessages />} />
                <Route path="/vendor/notifications" element={<Notifications />} />

                <Route path="/vendor/manage-profile" element={<ManageProfile />} />
                <Route path="/vendor" element={<VendorDashboard />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
