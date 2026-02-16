import React from 'react';

const DashboardOverview = () => {
    return (
        <div className="animate fade-in">
            <h2 style={{ marginBottom: '2rem', color: 'var(--secondary-color)' }}>Dashboard Overview</h2>
            <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <div className="stat-card" style={{ padding: '2rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontSize: '2.5rem', background: '#e3f2fd', padding: '10px', borderRadius: '50%' }}>👥</div>
                    <div>
                        <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0' }}>1,234</h3>
                        <p style={{ color: 'var(--text-light)' }}>Total Users</p>
                    </div>
                </div>
                <div className="stat-card" style={{ padding: '2rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontSize: '2.5rem', background: '#e8f5e9', padding: '10px', borderRadius: '50%' }}>💰</div>
                    <div>
                        <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0' }}>$45K</h3>
                        <p style={{ color: 'var(--text-light)' }}>Total Revenue</p>
                    </div>
                </div>
                <div className="stat-card" style={{ padding: '2rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontSize: '2.5rem', background: '#fff3e0', padding: '10px', borderRadius: '50%' }}>📦</div>
                    <div>
                        <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0' }}>56</h3>
                        <p style={{ color: 'var(--text-light)' }}>Products</p>
                    </div>
                </div>
                <div className="stat-card" style={{ padding: '2rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontSize: '2.5rem', background: '#fce4ec', padding: '10px', borderRadius: '50%' }}>⏳</div>
                    <div>
                        <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '0' }}>89</h3>
                        <p style={{ color: 'var(--text-light)' }}>Pending Orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
