import { Link, useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

const Header = () => {
    const { notifications } = useNotifications();
    const navigate = useNavigate();

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div className="branding" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" >
                        <img src="/src/assets/Logo.jpg.jpeg" alt="Logo" style={{ width: '80px', height: '80px' }} />
                    </Link>
                    <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                        JANSEVA SHIKSHAN AND SAMAJIK BAHUUDDESHIY SANSTHA
                    </Link>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#666' }}>Registration No: Yavatmal/0000057/2026</span>
            </div>

            <div className="notifications-tag"
                onClick={() => navigate('/notifications')}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    backgroundColor: 'var(--secondary-color)',
                    color: 'var(--primary-color)',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1e9fc'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-color)'}
            >
                <Bell size={20} style={{ marginRight: '8px' }} />
                <span style={{ fontWeight: '500' }}>Updates ({notifications.length})</span>
            </div>
        </header>
    );
};

export default Header;
