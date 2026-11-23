import { createBrowserRouter, Navigate } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { ProtectedShell } from "./components/helper/ProtectedShell";
import { Dashboard } from "./pages/Dashboard";
import { Resumes } from "./pages/Resumes";
import { ResumeDetail } from "./pages/ResumeDetail";
import { ExportPage } from "./pages/Export";
import { Insights } from "./pages/Insights";
import { Versions } from "./pages/Versions";
import { History } from "./pages/History";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
    { path: '/', element: <Landing />},
    { path: '/login', element: <Login />},
    { path: '/register', element: <Register />},
    {
        path: '/', element: <ProtectedShell />,
        children: [
            { path: 'dashboard', element: <Dashboard />},
            { path: 'resumes', element: <Resumes />},
            { path: 'resumes/:id', element: <ResumeDetail />},
            { path: 'resumes/:id/export', element: <ExportPage />},
            { path: 'insights', element: <Insights />},
            { path: 'versions', element: <Versions />},
            { path: 'history', element: <History />},
            { path: 'settings', element: <Settings />},
        ]
    },
    { path: '*', element: <Navigate to='/' replace />},
])