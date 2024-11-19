import { useNavigate, useLocation } from "react-router-dom";

interface MenuLinkProps {
  path: string;
  label: string;
  category?: string;
}

const MenuLink = ({ path, label, category }: MenuLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string, category?: string) => {
    if (category) {
      return location.pathname === path && location.search === `?category=${category}`;
    }
    return location.pathname === path;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(category ? `${path}?category=${category}` : path);
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
        isActive(path, category) ? "text-blue-600 bg-gray-50" : "text-gray-600"
      }`}
    >
      {label}
    </a>
  );
};

export default MenuLink;