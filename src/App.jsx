import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Import the external CSS file

// Animation Hook for Scroll Effects
const useScrollReveal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        
        if (domRef.current) observer.observe(domRef.current);
        
        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);
    
    return [domRef, isVisible];
};

const RevealSection = ({ children }) => {
    const [ref, isVisible] = useScrollReveal();
    return (
        <div ref={ref} className={`reveal-box ${isVisible ? 'active' : '' }`}>
            {children}
        </div>
    );
};

export default function App() {
    const [view, setView] = useState('salon');

    // Your specific image list
    const luxImages = [
        "luximg/luxlab.img/Afro-fade.jpeg",
        "luximg/luxlab.img/Afrohair-fade.jpeg",
        "luximg/luxlab.img/hightaper-fade.jpeg",
        "luximg/luxlab.img/lowcut-fade.jpeg",
        "luximg/luxlab.img/lowtaper-fade.jpeg",
        "luximg/luxlab.img/lowcut-fade2.jpeg"
    ];

    return (
        <div className="luxlab-root">
            <header>
                <div className="logo" onClick={() => window.scrollTo(0, 0)}>
                    <video 
                        className="logo-video"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src="luximg/luxlab.img/luxlab home.mp4" type="video/mp4" />
                    </video>
                    <span>LUXLAB</span>
                </div>
                <nav className="navbar">
                    <a href="#about">The Studio</a>
                    <a href="#service">Menu</a>
                    <a href="#booking">Book Now</a>
                </nav>
            </header>

            {/* Hero */}
            <section className="hero">
                <video autoPlay muted loop playsInline className='videoSect'>
                    <source src="luximg/luxlab.img/luxlab home.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay">
                    <h1>LUXLAB</h1>
                    <p style={{letterSpacing: '3px', fontSize: '0.9rem', color: 'var(--gold)'}}>ELITE GROOMING STUDIO</p>
                </div>
            </section>

            {/* About */}
            <RevealSection>
                <section id="about" style={{padding: '80px 10%', textAlign: 'center'}}>
                    <h2 className="section-title">Elevating The Craft</h2>
                    <p style={{lineHeight: '1.8', color: '#888', maxWidth: '800px', margin: 'auto'}}>
                        LuxLab is a sanctuary where heritage barbering meets modern luxury. We provide more than just a cut;
                        we provide the confidence required for the modern world.
                    </p>
                </section>
            </RevealSection>

            <div className="marquee">
                <div className="marquee-track">
                    {[...luxImages, ...luxImages].map((img, i) => (
                        <img key={i} src={img} alt={`Gallery ${i}`} />
                    ))}
                </div>
            </div>

            <section id="service" className="services">
                <RevealSection>
                    <h2 className="section-title">The Signature Menu</h2>
                    <div className="grid">
                        <ServiceItem img={luxImages[0]} title="The Rounded Afro" price="$10" />
                        <ServiceItem img={luxImages[1]} title="Shadow Fade" price="$12" />
                        <ServiceItem img={luxImages[2]} title="High Taper Fade" price="$15" />
                        <ServiceItem img={luxImages[3]} title="Skin Fade" price="$12" />
                        <ServiceItem img={luxImages[4]} title="Classic Low Taper" price="$10" />
                        <ServiceItem img={luxImages[5]} title="Classic Low-cut Fade" price="$17"/>
                    </div>
                </RevealSection>
            </section>

            <section id="booking" className="booking">
                <RevealSection>
                    <div className="form-box">
                        <div className="tab-group">
                            <div className={`tab ${view==='salon' ? 'active' : ''}`} onClick={()=> setView('salon')}>
                                SALON VISIT
                            </div>
                            <div className={`tab ${view==='home' ? 'active' : ''}`} onClick={()=> setView('home')}>
                                HOME SERVICE
                            </div>
                        </div>

                        <form>
                            <input placeholder="GUEST NAME" required />
                            <input placeholder="PHONE NUMBER" required />

                            {view === 'home' && (
                                <textarea placeholder="FULL HOME ADDRESS" style={{borderColor: 'var(--gold)'}} required />
                            )}

                            <select required defaultValue="">
                                <option value="" disabled>SELECT SERVICE</option>
                                <option value="afro">Afro-Fade Specialist</option>
                                <option value="beard">Beard Sculpt & Grooming</option>
                                <option value="vip">VIP Home Session</option>
                            </select>

                            <div style={{display: 'flex', gap: '10px'}}>
                                <input type="date" required />
                                <input type="time" required />
                            </div>

                            <button type="submit" className="btn-gold">Confirm Appointment</button>
                        </form>
                    </div>
                </RevealSection>
            </section>

            <footer style={{padding: '50px', textAlign: 'center', borderTop: '1px solid #222'}}>
                <p style={{letterSpacing: '4px', color: 'var(--gold)'}}>LUXLAB</p>
                <p style={{fontSize: '0.7rem', opacity: '0.4'}}>© 2026 LUXLAB STUDIO</p>
            </footer>
        </div>
    );
}

function ServiceItem({img, title, price}) {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <div className="card-info">
                <h3>{title}</h3>
                <p style={{color: 'var(--gold)', fontWeight: 'bold'}}>{price}</p>
            </div>
        </div>
    );
}