import { ExternalLink, Calendar } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

const Notifications = () => {
    const { notifications } = useNotifications();

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{
                borderBottom: '2px solid var(--secondary-color)',
                paddingBottom: '1rem',
                marginBottom: '2rem'
            }}>
                Updates & Announcements
            </h1>

            {notifications.length === 0 ? (
                <p>No new updates at the moment.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {notifications.map(notification => (
                        <div key={notification.id} style={{
                            backgroundColor: '#fff',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            borderLeft: '4px solid var(--accent-color)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                <h3 style={{ margin: 0 }}>{notification.title}</h3>
                                <span style={{
                                    backgroundColor: '#f0f0f0',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Calendar size={14} style={{ marginRight: '5px' }} />
                                    {notification.date}
                                </span>
                            </div>

                            <p style={{ color: '#555', marginBottom: '1rem' }}>{notification.content}</p>

                            {notification.link && (
                                <a
                                    href={notification.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        color: 'var(--primary-color)',
                                        fontWeight: '500',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Register Here <ExternalLink size={16} style={{ marginLeft: '5px' }} />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Notifications;
