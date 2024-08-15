import { LayoutDashboard, User, Users, Grid, Book, Calendar, CheckSquare, Clipboard, CalendarRange, BookOpen, Truck, Home as HomeIcon, Box, DollarSign, FileText, Settings  } from "lucide-react"

export interface NavLink {
    title: string,
    href: string,
    icon: JSX.Element
}

export interface SideLink extends NavLink{
    sub?: NavLink[] 
}


export const sidelinks: SideLink[] = [
    {
        title: "Dashboard",
        href: "/",
        icon: <LayoutDashboard />
    },
    {
        title: "Students",
        href: "/students",
        icon: <User />
    },
    {
        title: "Teachers",
        href: "/teachers",
        icon: <Users />
    },
    {
        title: "Classes",
        href: "/classes",
        icon: <Grid />
    },
    {
        title: "Courses",
        href: "/courses",
        icon: <Book />
    },
    {
        title: "Timetable",
        href: "/timetable",
        icon: <Calendar />
    },
    {
        title: "Attendance",
        href: "/attendance",
        icon: <CheckSquare />
    },
    {
        title: "Exams",
        href: "/exams",
        icon: <Clipboard />
    },
    {
        title: "Events",
        href: "/events",
        icon: <CalendarRange />
    },
    {
        title: "Library",
        href: "/library",
        icon: <BookOpen />
    },
    {
        title: "Transport",
        href: "/transport",
        icon: <Truck />
    },
    {
        title: "Hostel",
        href: "/hostel",
        icon: <HomeIcon />
    },
    {
        title: "Inventory",
        href: "/inventory",
        icon: <Box />
    },
    {
        title: "Accounts",
        href: "/accounts",
        icon: <DollarSign />
    },
    {
        title: "Reports",
        href: "/reports",
        icon: <FileText />
    },
    {
        title: "Settings",
        href: "/settings",
        icon: <Settings />
    },
    // {
    //     title: "Logout",
    //     href: "/",
    //     icon: <LogOut />
    // },

]