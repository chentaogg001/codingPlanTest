import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, X, MessageCircle} from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
        setMobileMenuOpen(false);
    };

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: 'var(--white)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '4.5rem',
                    }}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            textDecoration: 'none',
                            color: 'var(--primary)',
                            fontWeight: 700,
                            fontSize: '1.25rem',
                        }}
                    >
                        <div
                            style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                backgroundColor: 'var(--primary)',
                                borderRadius: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--white)',
                                fontWeight: 700,
                            }}
                        >
                            E
                        </div>
                        <span>Enterprise</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        style={{
                            display: 'none',
                            gap: '2rem',
                        }}
                        className="desktop-nav"
                    >
                        <Link
                            to="/"
                            style={{
                                color: 'var(--gray-700)',
                                textDecoration: 'none',
                                fontWeight: 500,
                            }}
                        >
                            产品中心
                        </Link>
                        <button
                            onClick={scrollToContact}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--gray-700)',
                                fontWeight: 500,
                                cursor: 'pointer',
                            }}
                        >
                            联系我们
                        </button>
                    </nav>

                    {/* CTA Button */}
                    <div style={{display: 'none'}} className="desktop-cta">
                        <button
                            className="btn btn-primary"
                            onClick={scrollToContact}
                        >
                            <MessageCircle
                                size={18}
                                style={{marginRight: '0.5rem'}}
                            />
                            在线咨询
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                        }}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    style={{
                        backgroundColor: 'var(--white)',
                        borderTop: '1px solid var(--gray-200)',
                        padding: '1rem',
                    }}
                >
                    <nav
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                padding: '0.75rem',
                                color: 'var(--gray-700)',
                                textDecoration: 'none',
                                fontWeight: 500,
                            }}
                        >
                            产品中心
                        </Link>
                        <button
                            onClick={scrollToContact}
                            style={{
                                padding: '0.75rem',
                                color: 'var(--gray-700)',
                                textAlign: 'left',
                                background: 'none',
                                border: 'none',
                                fontWeight: 500,
                                cursor: 'pointer',
                            }}
                        >
                            联系我们
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={scrollToContact}
                        >
                            <MessageCircle
                                size={18}
                                style={{marginRight: '0.5rem'}}
                            />
                            在线咨询
                        </button>
                    </nav>
                </div>
            )}

            <style>{`
                @media (min-width: 768px) {
                    .desktop-nav {
                        display: flex !important;
                    }
                    .desktop-cta {
                        display: block !important;
                    }
                    .mobile-menu-btn {
                        display: none !important;
                    }
                }
            `}</style>
        </header>
    );
}
