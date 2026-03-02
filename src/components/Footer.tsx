import {Mail, Phone, MapPin} from 'lucide-react';

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: 'var(--gray-900)',
                color: 'var(--gray-300)',
                padding: '3rem 0 1.5rem',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '2rem',
                    }}
                    className="footer-grid"
                >
                    {/* Company Info */}
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '1rem',
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
                                    fontSize: '1.25rem',
                                }}
                            >
                                E
                            </div>
                            <span
                                style={{
                                    color: 'var(--white)',
                                    fontWeight: 700,
                                    fontSize: '1.25rem',
                                }}
                            >
                                Enterprise
                            </span>
                        </div>
                        <p style={{lineHeight: 1.8}}>
                            专业的企业产品展示平台，为您提供优质的产品和服务。
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4
                            style={{
                                color: 'var(--white)',
                                marginBottom: '1rem',
                                fontSize: '1.125rem',
                            }}
                        >
                            联系方式
                        </h4>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                }}
                            >
                                <Phone size={18} />
                                <span>400-888-8888</span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                }}
                            >
                                <Mail size={18} />
                                <span>contact@enterprise.com</span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                }}
                            >
                                <MapPin size={18} />
                                <span>上海市浦东新区科技园</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            style={{
                                color: 'var(--white)',
                                marginBottom: '1rem',
                                fontSize: '1.125rem',
                            }}
                        >
                            快速链接
                        </h4>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                            }}
                        >
                            <a
                                href="#"
                                style={{
                                    color: 'var(--gray-300)',
                                    textDecoration: 'none',
                                }}
                            >
                                关于我们
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: 'var(--gray-300)',
                                    textDecoration: 'none',
                                }}
                            >
                                产品中心
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: 'var(--gray-300)',
                                    textDecoration: 'none',
                                }}
                            >
                                解决方案
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: 'var(--gray-300)',
                                    textDecoration: 'none',
                                }}
                            >
                                联系我们
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    style={{
                        borderTop: '1px solid var(--gray-700)',
                        marginTop: '2rem',
                        paddingTop: '1.5rem',
                        textAlign: 'center',
                        fontSize: '0.875rem',
                    }}
                >
                    © 2024 Enterprise. All rights reserved.
                </div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (min-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 2fr 1fr 1fr !important;
                    }
                }
            `}</style>
        </footer>
    );
}
