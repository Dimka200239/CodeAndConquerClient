import { Routes, Route, Link } from 'react-router-dom';

import { HomePage } from './Components/HomePage';
import { Layout } from './Components/Layout';
import { AboutAsPage } from './Components/AboutAsPage';
import { FAQ } from "./Components/FAQ";
import { RegisterPage } from "./Components/RegisterPage";
import { ConfirmEmailPage } from "./Components/ConfirmEmailPage";
import { LogInPage } from "./Components/LogInPage";
import { InfoAboutProblems } from "./Components/InfoAboutProblems";
import { SearchWithoutAuthorization } from "./Components/SearchWithoutAuthorization";
import { Admin } from "./Components/Admin";

function App() {
    return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutAsPage />} />
                <Route path="FAQ" element={<FAQ />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="confirmEmail" element={<ConfirmEmailPage />} />
                <Route path="login" element={<LogInPage />} />
                <Route path="problems" element={<InfoAboutProblems />} />
                <Route path="findWithNoAuthorization" element={<SearchWithoutAuthorization />} />
                <Route path="continueAsAdmin" element={<Admin />} />
            </Route>
        </Routes>
    </>
    );
}

export default App;