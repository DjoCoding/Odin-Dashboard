import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import PrivateRoute from "./protection/PrivateRoute"
import PublicRoute from "./protection/PublicRoute";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import CreateNewProjectPage from "./pages/CreateNewProjectPage/CreateNewProjectPage";
import EditProjectPage from "./pages/EditProjectPage/EditProjectPage"

function App() {
  return(
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route 
            path="/"
            element={
              <HomePage />
            }
            />

            <Route 
              path="/projects/new"
              element={
                <CreateNewProjectPage />
              }
            />

            <Route 
              path="/projects/edit/:projectID"
              element={
                  <EditProjectPage />
              }
            />

          <Route 
            path="/login"
            element={
                <LoginPage />
            }
          />

          <Route 
            path="/signup"
            element={
                <SignUpPage />
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;