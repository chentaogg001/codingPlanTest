import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {Product} from '../data/products';
import {motion} from 'framer-motion';

interface ProductCardProps {
    product: Product;
    index: number;
}

export default function ProductCard({product, index}: ProductCardProps) {
    const categoryLabels: Record<string, string> = {
        industrial: '工业设备',
        electronics: '电子产品',
        chemicals: '化工材料',
        other: '其他',
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: index * 0.05}}
            className="card"
            style={{height: '100%', display: 'flex', flexDirection: 'column'}}
        >
            {/* Image */}
            <div
                style={{
                    position: 'relative',
                    paddingTop: '66.67%',
                    backgroundColor: 'var(--gray-100)',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={product.images[0]}
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
                <div
                    style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        backgroundColor: 'var(--primary)',
                        color: 'var(--white)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                    }}
                >
                    {categoryLabels[product.category]}
                </div>
            </div>

            {/* Content */}
            <div
                style={{
                    padding: '1.25rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h3
                    style={{
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                        color: 'var(--gray-800)',
                    }}
                >
                    {product.name}
                </h3>
                <p
                    style={{
                        color: 'var(--gray-600)',
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        flex: 1,
                        marginBottom: '1rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {product.description}
                </p>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 'auto',
                    }}
                >
                    <span
                        style={{
                            color: 'var(--primary)',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                        }}
                    >
                        {product.priceRange}
                    </span>
                    <Link
                        to={`/product/${product.id}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            color: 'var(--primary)',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                        }}
                    >
                        查看详情
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
