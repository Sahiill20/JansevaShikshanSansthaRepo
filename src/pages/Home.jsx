import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>

            {/* Hero Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Bringing Hope to Every Life</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                    We are dedicated to creating a sustainable future where every individual has access to education, healthcare, and a dignified life.
                </p>
            </section>

            {/* Vision & Mission */}
            <section style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
            }}>
                {/* Vision (Left) */}
                <div style={{
                    backgroundColor: '#fff',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    borderLeft: '5px solid var(--primary-color)'
                }}>
                    <h2 style={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center' }}>
                        Our Vision
                    </h2>
                    <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                        To build an empowered, educated, and self-reliant society where every individual has equal access to quality education, skill development, healthcare awareness, and livelihood opportunities.
                        We envision an inclusive community where children learn without barriers, youth gain meaningful employment, women become confident and independent, and underprivileged families live with dignity, security, and hope.
                        Our vision is to create lasting social transformation by promoting equality, strengthening values, and enabling individuals to realize their full potential.
                    </p>
                </div>

                {/* Mission (Right) */}
                <div style={{
                    backgroundColor: '#fff',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    borderRight: '5px solid var(--accent-color)'
                }}>
                    <h2 style={{ color: 'var(--accent-color)', textAlign: 'right' }}>
                        Our Mission
                    </h2>
                    <p style={{ marginTop: '1rem', lineHeight: '1.8', textAlign: 'right' }}>
                        JanSeva Shikshan and Samajik Bahuuddeshiy Sanstha is committed to driving positive social change through education, awareness, and community support initiatives.
                        Our mission is to promote quality education and skill development for children, youth, and women; provide humanitarian support to underprivileged families; create awareness about health, hygiene, de-addiction, and mental well-being; and reduce unemployment through training and employment-oriented programs.
                        We aim not only to support people in need but to empower them to build sustainable and dignified futures.
                    </p>
                </div>
            </section>

            {/* Founder Details */}
            {/* Board Members / Team Details */}
            <section style={{
                backgroundColor: '#e3f2fd',
                padding: '3rem',
                borderRadius: '16px',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '2rem', color: 'var(--primary-color)' }}>Our Board Member</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                    textAlign: 'left',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {[
                        { name: "Harsha Anant Sawale", role: "President" },
                        { name: "Priyanka Keshav Dudhane", role: "Vice President" },
                        { name: "Ritesh Anant Sawale", role: "Secretary" },
                        { name: "Manoj Gajana Ujwane", role: "Member" },
                        { name: "Tejaswini Mayur Mawale", role: "Member" },
                        { name: "Rani Chandrakant Katyarmal", role: "Member" },
                        { name: "Gunvant Kisan Sawale", role: "Member" },
                    ].map((member, index) => (
                        <div key={index} style={{
                            backgroundColor: '#fff',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#333' }}>{member.name}</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;
