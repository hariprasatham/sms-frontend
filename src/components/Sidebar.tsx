import { sidelinks, SideLink } from "@/data/sidelinks";
import { Link } from "react-router-dom";

import useCheckActiveNav from "@/hooks/useCheckActiveNav";

const Sidebar = () => {
  return (
    <aside className=" fixed top-0 left-0 w-72 h-full overflow-y-auto bg-background border">
      <div>
        <h2 className="text-center mt-5">ClassFusion</h2>
        <nav className="grid gap-1 mt-5 ">
          {sidelinks?.map((link) => (
            <NavLink key={link?.href + link?.title} {...link} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

const NavLink = ({ title, icon, href }: SideLink) => {
  const { checkActiveNav } = useCheckActiveNav();

  const isActive = checkActiveNav(href);

  return (
    <Link
      to={href}
      className={`h-12 flex justify-start items-center text-wrap rounded-none px-6 ${
        isActive ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80" : "hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      <div className="mr-2">{icon}</div>
      {title}
    </Link>
  );
};
