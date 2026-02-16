import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='dashboard-layout'>
            <aside className='sidebar'>
                <h2>Admin Panel</h2>
                <ul className='sidebar-menu'>
                    <li>
                        <Link to='/admin'>Dashboard Overview</Link>
                    </li>
                    <li>
                        <Link to='/admin/products'>Product Management</Link>
                    </li>
                    <li>
                        <Link to='/admin/orders'>Orders (Coming Soon)</Link>
                    </li>
                    <li>
                        <Link to='/'>Back to Website</Link>
                    </li>
                </ul>
            </aside>
            <main className='dashboard-content'>
                <Outlet />
                {/* If no outlet is matched (i.e. just /admin), we can show the stats here or use an index route */}
            </main>
        </div>
    );
};

export default AdminDashboard;
