import { NavLink } from "react-router";

const mainNavigation = [
    { label: 'Dashboard', to: '/' },
    { label: 'Restaurants', to: '/restaurants' },
    { label: 'Tables', to: '/tables' },
    { label: 'Menu', to: '/menu' },
    { label: 'Orders', to: '/orders' },
    { label: 'Reservations', to: '/reservations' },
    { label: 'Inventory', to: '/inventory' },
];

function getLinkClasses({ isActive }: { isActive: boolean}) {
    const base = 'rounded-md px-3 py-4 text-sm font-medium transition-colors';
    const state = isActive
        ? 'bg-gray-800 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    return `${base} ${state}`;
}

function Header() {
    return (
        <header className="bg-gray-900 text-gray-100">
            <div className="flex items-center gap-8 px-6 py-3">
                <span className="text-lg font-bold">Restaurant MS</span>

                <nav className="flex flex-1 items-center gap-1">
                    {mainNavigation.map((item) => (
                        <NavLink key={item.to} to={item.to} className={getLinkClasses}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <NavLink to="/settings" className={getLinkClasses}>
                Settings
                </NavLink>
            </div>
        </header>
    )
}

export default Header;