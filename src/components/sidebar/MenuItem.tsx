interface MenuItemProps {
  icon?: React.ReactNode;
  label: string;
  children?: React.ReactNode;
  isExpandable?: boolean;
}

const MenuItem = ({ icon, label, children, isExpandable = true }: MenuItemProps) => (
  <div className="mb-4">
    <div className="flex items-center px-4 py-2 text-gray-700 font-medium">
      {icon && <span className="mr-2">{icon}</span>}
      <span className="flex-1">{label}</span>
    </div>
    {isExpandable && children && (
      <div className="ml-4 border-l border-gray-200">
        {children}
      </div>
    )}
  </div>
);

export default MenuItem;