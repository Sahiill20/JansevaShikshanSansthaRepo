import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '3rem 2rem', marginTop: 'auto' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                {/* Contact Info */}
                <div>
                    <h3 style={{ color: '#fff', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Contact Us</h3>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <MapPin size={18} style={{ marginRight: '10px', color: 'var(--accent-color)' }} />
                            <span>Adress:- Anushri park, Yavatmal, Maharashtra - 445001</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <Phone size={18} style={{ marginRight: '10px', color: 'var(--accent-color)' }} />
                            <span>+91 88055 89202</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <Mail size={18} style={{ marginRight: '10px', color: 'var(--accent-color)' }} />
                            <span></span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ color: '#fff', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Follow Us</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <a href="#" style={{ color: '#fff', transition: 'color 0.3s' }}><Facebook /></a>
                        <a href="#" style={{ color: '#fff', transition: 'color 0.3s' }}><Twitter /></a>
                        <a href="#" style={{ color: '#fff', transition: 'color 0.3s' }}><Instagram /></a>
                    </div>
                </div>

                {/* Newsletter / More info */}
                <div>
                    <h3 style={{ color: '#fff', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Get Involved</h3>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>
                        Join our mission to bringing hope and change to those in need. Volunteer or donate today.
                    </p>
                    <button style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'var(--accent-color)',
                        color: '#fff',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                    }}>
                        Donate Now
                    </button>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #333', fontSize: '0.8rem', color: '#666' }}>
                © 2024 Hope Foundation. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
