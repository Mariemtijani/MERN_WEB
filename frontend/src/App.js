import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './app/auth/Register';
import Home from './app/home/Home';
import Login from './app/auth/Login';
import Nav from './app/navbar/Nav';
import ServiceForm from './app/services/ServiceForm';
import AddService from './app/services/AddService';
import CartTable from './app/cart/CartTable';
import Cart from './app/cart/Cart';
import Profile from './app/profile/Profile';
import Dashboard from './app/admin/Dashboard';
import ArtisanClientLayout from './app/ArtisanClientLayout';
import AdminLayout from './app/admin/AdminLayout';
import Categories from './app/admin/categories/Categories';
import RequireAuth from './app/RequireAuth';
import PersistLogin from './app/auth/PersistLogin';
import ShowServices from './app/services/ShowServices';
import ToApprove from './app/admin/services/ToApprove';
import ChooseRole from './app/auth/ChooseRole';

function App() {
  return (
    <main className="App">
      {/* <PersistLogin /> */}
      <Routes>
        <Route element={<PersistLogin />}>
        {/* Routes for Artisans and Clients */}
        <Route element={<ArtisanClientLayout />}>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/role-selection" element={<ChooseRole />} />

          <Route path="/show-services/:id" element={<ShowServices />} />


          {/* Protected routes */}
          <Route element={<RequireAuth allowedRoles={[1984]} />}>
            <Route path="/add-service" element={<AddService />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[1984, 2001, 5150]} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        {/* Routes for Admins */}
        <Route element={<AdminLayout />}>
          {/* Protected routes */}
          <Route element={<RequireAuth allowedRoles={[5150]} />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/artisans" element={<Register />} />
              <Route path="/users" element={<Register />} />
 
              <Route path="/all-categories" element={<Categories />} />
              <Route path="/all-services" element={<ToApprove />} />
              
          </Route>
        </Route>

        {/* Catch all route */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
