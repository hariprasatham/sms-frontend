import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign-in/SignIn";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "./pages/dashboard/Dashboard";
import Student from "./pages/students/Student";
import Teacher from "@/pages/teachers/Teacher"
import Accounts from "@/pages/accounts/Accounts"
import Attendance from "@/pages/attendance/Attendance"
import Class from "@/pages/class/Class";
import Courses from "./pages/courses/Courses";
import Department from "./pages/departments/Department";
import Events from "./pages/events/Events";
import Exams from "./pages/exams/Exams";
import Hostel from "./pages/hostel/Hostel";
import Inventory from "./pages/inventory/Inventory";
import Library from "./pages/library/Library";
import Reports from "./pages/reports/Reports";
import Settings from "./pages/settings/Settings";
import TimeTable from "./pages/timetable/TimeTable";
import Transport from "./pages/transport/Transport";

// Function to get the access token from cookies
// const getAccessToken = () => {
//     return localStorage.getItem('accessToken');
//   }
  
  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    // return !!getAccessToken();
    return true;
  }

  const router = createBrowserRouter([
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/',
        element: <ProtectedRoute isAuthenticated={isAuthenticated} />, // Pass function directly
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/students',
                element: <Student />,
            },
            {
                path: '/teachers',
                element: <Teacher />,
            },
            {
                path: '/accounts',
                element: <Accounts />,
            },
            {
                path: '/attendance',
                element: <Attendance />,
            },
            {
                path: '/classes',
                element: <Class />,
            },
            {
                path: '/courses',
                element: <Courses />,
            },
            {
                path: '/departments',
                element: <Department />,
            },
            {
                path: '/events',
                element: <Events />,
            },
            {
                path: '/exams',
                element: <Exams />,
            },
            {
                path: '/hostel',
                element: <Hostel />,
            },
            {
                path: '/inventory',
                element: <Inventory />,
            },
            {
                path: '/library',
                element: <Library />,
            },
            {
                path: '/reports',
                element: <Reports />,
            },
            {
                path: '/settings',
                element: <Settings />,
            },
            {
                path: '/timetable',
                element: <TimeTable />,
            },
            {
                path: '/transport',
                element: <Transport />,
            },
        ]
    }
]);

export default router;  // Export the router objects