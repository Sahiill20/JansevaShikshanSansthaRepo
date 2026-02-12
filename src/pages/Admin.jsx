import { useState, useEffect } from 'react';
import { useNotifications } from '../context/NotificationContext';
import { Plus, Trash, LogOut } from 'lucide-react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const Admin = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { notifications, addNotification, deleteNotification } = useNotifications();
    const [newNotif, setNewNotif] = useState({ title: '', date: '', content: '', link: '' });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError('Invalid Email or Password');
            console.error(err);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error("Error signing out:", err);
        }
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (newNotif.title && newNotif.date && newNotif.content) {
            addNotification(newNotif);
            setNewNotif({ title: '', date: '', content: '', link: '' });
        }
    };

    if (loading) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>Loading...</div>;

    if (!user) {
        return (
            <div style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" style={{ padding: '0.8rem', backgroundColor: 'var(--primary-color)', color: '#fff', borderRadius: '4px' }}>Login</button>
                </form>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h1>Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#ff4d4f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <LogOut size={16} /> Logout
                </button>
            </div>

            {/* Add New Notification */}
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                <h3>Add New Notification</h3>
                <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={newNotif.title}
                        onChange={e => setNewNotif({ ...newNotif, title: e.target.value })}
                        required
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="date"
                        value={newNotif.date}
                        onChange={e => setNewNotif({ ...newNotif, date: e.target.value })}
                        required
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <textarea
                        placeholder="Content"
                        value={newNotif.content}
                        onChange={e => setNewNotif({ ...newNotif, content: e.target.value })}
                        required
                        rows={3}
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%', resize: 'vertical' }}
                    />
                    <input
                        type="url"
                        placeholder="Google Form Link"
                        value={newNotif.link}
                        onChange={e => setNewNotif({ ...newNotif, link: e.target.value })}
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <button type="submit" style={{
                        padding: '0.8rem',
                        backgroundColor: 'var(--primary-color)',
                        color: '#fff',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        <Plus size={18} /> Add Notification
                    </button>
                </form>
            </div>

            {/* Existing Notifications */}
            <div style={{ marginTop: '3rem' }}>
                <h3>Manage Notifications</h3>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {notifications.map(n => (
                        <div key={n.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem',
                            border: '1px solid #eee',
                            borderRadius: '6px',
                            backgroundColor: '#fff'
                        }}>
                            <div>
                                <strong>{n.title}</strong>
                                <span style={{ marginLeft: '10px', fontSize: '0.8rem', color: '#666' }}>({n.date})</span>
                            </div>
                            <button
                                onClick={() => deleteNotification(n.id)}
                                style={{ color: 'red', background: 'none' }}
                            >
                                <Trash size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;
