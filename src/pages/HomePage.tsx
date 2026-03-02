import {Search} from 'lucide-react';
import {motion} from 'framer-motion';
import {useStore} from '../store/useStore';
import {categories} from '../data/products';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
    const {
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        getFilteredProducts,
    } = useStore();

    const filteredProducts = getFilteredProducts();

    return (
        <div>
            {/* Hero Section */}
            <section
                style={{
                    background:
                        'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                    padding: '4rem 0',
                    color: 'var(--white)',
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        style={{
                            textAlign: 'center',
                            maxWidth: '800px',
                            margin: '0 auto',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                            }}
                            className="hero-title"
                        >
                            专业企业产品展示平台
                        </h1>
                        <p
                            style={{
                                fontSize: '1.125rem',
                                opacity: 0.9,
                                marginBottom: '2rem',
                            }}
                        >
                            为您提供高品质工业设备、电子产品和化工材料
                        </p>

                        {/* Search Bar */}
                        <div
                            style={{
                                display: 'flex',
                                maxWidth: '600px',
                                margin: '0 auto',
                                backgroundColor: 'var(--white)',
                                borderRadius: '0.75rem',
                                padding: '0.5rem',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 1rem',
                                    color: 'var(--gray-400)',
                                }}
                            >
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="搜索产品..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                style={{
                                    flex: 1,
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    padding: '0.5rem 0',
                                }}
                            />
                        </div>
                    </motion.div>
                </div>

                <style>{`
                    @media (min-width: 768px) {
                        .hero-title {
                            font-size: 3rem !important;
                        }
                    }
                `}</style>
            </section>

            {/* Category Filter */}
            <section
                style={{
                    padding: '1.5rem 0',
                    backgroundColor: 'var(--white)',
                    borderBottom: '1px solid var(--gray-200)',
                }}
            >
                <div className="container">
                    <div
                        style={{
                            display: 'flex',
                            gap: '0.75rem',
                            overflowX: 'auto',
                            paddingBottom: '0.5rem',
                        }}
                    >
                        {categories.map(category => (
                            <button
                                key={category.value}
                                onClick={() =>
                                    setSelectedCategory(category.value)
                                }
                                style={{
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '9999px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s',
                                    backgroundColor:
                                        selectedCategory === category.value
                                            ? 'var(--primary)'
                                            : 'var(--gray-100)',
                                    color:
                                        selectedCategory === category.value
                                            ? 'var(--white)'
                                            : 'var(--gray-700)',
                                }}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section style={{padding: '3rem 0'}}>
                <div className="container">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                        }}
                    >
                        <h2
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                            }}
                        >
                            产品展示
                        </h2>
                        <span
                            style={{
                                color: 'var(--gray-600)',
                                fontSize: '0.875rem',
                            }}
                        >
                            共 {filteredProducts.length} 个产品
                        </span>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '1.5rem',
                            }}
                            className="products-grid"
                        >
                            {filteredProducts.map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    index={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <div
                            style={{
                                textAlign: 'center',
                                padding: '4rem 2rem',
                                color: 'var(--gray-500)',
                            }}
                        >
                            <p>未找到相关产品</p>
                            <p
                                style={{
                                    fontSize: '0.875rem',
                                    marginTop: '0.5rem',
                                }}
                            >
                                请尝试调整搜索条件或选择其他分类
                            </p>
                        </div>
                    )}
                </div>

                <style>{`
                    @media (min-width: 640px) {
                        .products-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    @media (min-width: 1024px) {
                        .products-grid {
                            grid-template-columns: repeat(3, 1fr) !important;
                        }
                    }
                    @media (min-width: 1280px) {
                        .products-grid {
                            grid-template-columns: repeat(4, 1fr) !important;
                        }
                    }
                `}</style>
            </section>

            {/* Contact Section */}
            <section
                style={{
                    padding: '4rem 0',
                    backgroundColor: 'var(--gray-50)',
                }}
            >
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '3rem',
                        }}
                        className="contact-grid"
                    >
                        {/* Contact Info */}
                        <div>
                            <h2
                                style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                }}
                            >
                                联系我们
                            </h2>
                            <p
                                style={{
                                    color: 'var(--gray-600)',
                                    marginBottom: '2rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                有任何问题或需求？填写表单，我们的专业团队将在24小时内与您联系。
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '3rem',
                                            height: '3rem',
                                            borderRadius: '0.5rem',
                                            backgroundColor:
                                                'var(--primary-light)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--primary)',
                                        }}
                                    >
                                        📞
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                fontWeight: 500,
                                                color: 'var(--gray-800)',
                                            }}
                                        >
                                            400-888-8888
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '0.875rem',
                                                color: 'var(--gray-500)',
                                            }}
                                        >
                                            周一至周五 9:00-18:00
                                        </p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '3rem',
                                            height: '3rem',
                                            borderRadius: '0.5rem',
                                            backgroundColor:
                                                'var(--primary-light)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--primary)',
                                        }}
                                    >
                                        ✉️
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                fontWeight: 500,
                                                color: 'var(--gray-800)',
                                            }}
                                        >
                                            contact@enterprise.com
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '0.875rem',
                                                color: 'var(--gray-500)',
                                            }}
                                        >
                                            邮件回复
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>

                <style>{`
                    @media (min-width: 1024px) {
                        .contact-grid {
                            grid-template-columns: 1fr 1fr !important;
                        }
                    }
                `}</style>
            </section>
        </div>
    );
}
