import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';
import {motion} from 'framer-motion';
import {products} from '../data/products';
import ContactForm from '../components/ContactForm';

export default function ProductDetail() {
    const {id} = useParams<{id: string}>();
    const [selectedImage, setSelectedImage] = useState(0);
    const product = products.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div
                className="container"
                style={{padding: '4rem 0', textAlign: 'center'}}
            >
                <h2>产品未找到</h2>
                <Link
                    to="/"
                    style={{
                        color: 'var(--primary)',
                        marginTop: '1rem',
                        display: 'inline-block',
                    }}
                >
                    返回首页
                </Link>
            </div>
        );
    }

    const categoryLabels: Record<string, string> = {
        industrial: '工业设备',
        electronics: '电子产品',
        chemicals: '化工材料',
        other: '其他',
    };

    return (
        <div>
            {/* Breadcrumb */}
            <div
                style={{
                    backgroundColor: 'var(--gray-50)',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--gray-200)',
                }}
            >
                <div className="container">
                    <Link
                        to="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--gray-600)',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                        }}
                    >
                        <ArrowLeft size={16} />
                        返回产品列表
                    </Link>
                </div>
            </div>

            {/* Product Detail */}
            <section style={{padding: '3rem 0'}}>
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '3rem',
                        }}
                        className="detail-grid"
                    >
                        {/* Image Gallery */}
                        <div>
                            {/* Main Image */}
                            <motion.div
                                key={selectedImage}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.3}}
                                style={{
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    backgroundColor: 'var(--gray-100)',
                                    marginBottom: '1rem',
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: '66.67%',
                                        position: 'relative',
                                    }}
                                >
                                    <img
                                        src={product.images[selectedImage]}
                                        alt={product.name}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Thumbnail */}
                            {product.images.length > 1 && (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '0.75rem',
                                    }}
                                >
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setSelectedImage(index)
                                            }
                                            style={{
                                                width: '80px',
                                                height: '60px',
                                                borderRadius: '0.5rem',
                                                overflow: 'hidden',
                                                border:
                                                    selectedImage === index
                                                        ? '2px solid var(--primary)'
                                                        : '2px solid transparent',
                                                cursor: 'pointer',
                                                padding: 0,
                                                background: 'none',
                                            }}
                                        >
                                            <img
                                                src={image}
                                                alt={`${product.name} ${
                                                    index + 1
                                                }`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div>
                            <div
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: 'var(--primary)',
                                    color: 'var(--white)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    marginBottom: '1rem',
                                }}
                            >
                                {categoryLabels[product.category]}
                            </div>

                            <h1
                                style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                }}
                            >
                                {product.name}
                            </h1>

                            <div
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: 'var(--primary)',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                {product.priceRange}
                            </div>

                            <p
                                style={{
                                    color: 'var(--gray-600)',
                                    lineHeight: 1.8,
                                    marginBottom: '2rem',
                                }}
                            >
                                {product.description}
                            </p>

                            {/* Specs */}
                            <div
                                style={{
                                    backgroundColor: 'var(--gray-50)',
                                    borderRadius: '0.75rem',
                                    padding: '1.5rem',
                                    marginBottom: '2rem',
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        marginBottom: '1rem',
                                    }}
                                >
                                    规格参数
                                </h3>
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr',
                                        gap: '0.75rem',
                                    }}
                                >
                                    {Object.entries(product.specs).map(
                                        ([key, value]) => (
                                            <div
                                                key={key}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent:
                                                        'space-between',
                                                    paddingBottom: '0.75rem',
                                                    borderBottom:
                                                        '1px solid var(--gray-200)',
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: 'var(--gray-600)',
                                                        fontSize: '0.875rem',
                                                    }}
                                                >
                                                    {key}
                                                </span>
                                                <span
                                                    style={{
                                                        color: 'var(--gray-800)',
                                                        fontWeight: 500,
                                                        fontSize: '0.875rem',
                                                    }}
                                                >
                                                    {value}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => {
                                    document
                                        .getElementById('contact')
                                        ?.scrollIntoView({behavior: 'smooth'});
                                }}
                                className="btn btn-primary"
                                style={{width: '100%'}}
                            >
                                立即咨询
                            </button>
                        </div>
                    </div>
                </div>

                <style>{`
                    @media (min-width: 1024px) {
                        .detail-grid {
                            grid-template-columns: 1fr 1fr !important;
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
                    <div style={{maxWidth: '600px', margin: '0 auto'}}>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
