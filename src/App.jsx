import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import pagesRoutes from './routes/pagesRoutes.json'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import MainPages from './pages/MainPages'
import JobDetails from './pages/JobDetailsPage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'


function App() {


  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <Routes>
      <Route index path={pagesRoutes.loginPage} element={<LoginPage state={state} nav={navigate} />} />
      <Route path={pagesRoutes.registerPage} element={<RegisterPage state={state} nav={navigate} />} />
      <Route path={pagesRoutes.mainPage} element={<MainPages />}>
        <Route index path={pagesRoutes.homePage} element={<HomePage nav={navigate} />} />
        <Route index path={pagesRoutes.jobDeatils + "/:id"} element={<JobDetails />} />
        <Route index path={pagesRoutes.profilePage} element={<ProfilePage />} />
        <Route index path={pagesRoutes.searchPage} element={<SearchPage />} />
      </Route>
      <Route path={pagesRoutes.elsePages} element={<h1>Error</h1>} />
    </Routes>
  );
}

export default App;
