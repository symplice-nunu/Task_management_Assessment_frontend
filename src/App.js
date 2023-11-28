import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/404";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Tasks from "./Pages/Tasks";
import PageLayout from "./Components/PageLayout";
import CreateNewTasks from "./Pages/CreateNewTasks";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/forgotpassword";
import Otp from "./Pages/otp";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<PageLayout />}>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/newtasks" element={<CreateNewTasks />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
