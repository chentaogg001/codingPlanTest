import {useState} from 'react';
import {Send, CheckCircle} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = '请输入姓名';
        }
        if (!formData.company.trim()) {
            newErrors.company = '请输入公司名称';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = '请输入联系电话';
        }
        if (!formData.email.trim()) {
            newErrors.email = '请输入邮箱';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = '请输入有效的邮箱地址';
        }
        if (!formData.message.trim()) {
            newErrors.message = '请输入咨询内容';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                message: '',
            });
        }, 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: ''}));
        }
    };

    return (
        <div
            id="contact"
            style={{
                backgroundColor: 'var(--white)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            }}
        >
            <h2
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--gray-800)',
                }}
            >
                在线咨询
            </h2>
            <p
                style={{
                    color: 'var(--gray-600)',
                    marginBottom: '1.5rem',
                }}
            >
                填写以下信息，我们将尽快与您联系
            </p>

            <AnimatePresence mode="wait">
                {isSubmitted ? (
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.9}}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '3rem',
                            textAlign: 'center',
                        }}
                    >
                        <CheckCircle
                            size={64}
                            style={{
                                color: 'var(--accent)',
                                marginBottom: '1rem',
                            }}
                        />
                        <h3
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                marginBottom: '0.5rem',
                            }}
                        >
                            提交成功！
                        </h3>
                        <p style={{color: 'var(--gray-600)'}}>
                            感谢您的咨询，我们会尽快与您联系。
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '1rem',
                            }}
                            className="form-grid"
                        >
                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.375rem',
                                        fontWeight: 500,
                                        fontSize: '0.875rem',
                                        color: 'var(--gray-700)',
                                    }}
                                >
                                    姓名 <span style={{color: 'red'}}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="请输入您的姓名"
                                    style={
                                        errors.name ? {borderColor: 'red'} : {}
                                    }
                                />
                                {errors.name && (
                                    <span
                                        style={{
                                            color: 'red',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.375rem',
                                        fontWeight: 500,
                                        fontSize: '0.875rem',
                                        color: 'var(--gray-700)',
                                    }}
                                >
                                    公司名称{' '}
                                    <span style={{color: 'red'}}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="请输入公司名称"
                                    style={
                                        errors.company
                                            ? {borderColor: 'red'}
                                            : {}
                                    }
                                />
                                {errors.company && (
                                    <span
                                        style={{
                                            color: 'red',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        {errors.company}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '1rem',
                            }}
                            className="form-grid"
                        >
                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.375rem',
                                        fontWeight: 500,
                                        fontSize: '0.875rem',
                                        color: 'var(--gray-700)',
                                    }}
                                >
                                    联系电话{' '}
                                    <span style={{color: 'red'}}>*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="请输入联系电话"
                                    style={
                                        errors.phone ? {borderColor: 'red'} : {}
                                    }
                                />
                                {errors.phone && (
                                    <span
                                        style={{
                                            color: 'red',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        {errors.phone}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.375rem',
                                        fontWeight: 500,
                                        fontSize: '0.875rem',
                                        color: 'var(--gray-700)',
                                    }}
                                >
                                    邮箱 <span style={{color: 'red'}}>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="请输入邮箱地址"
                                    style={
                                        errors.email ? {borderColor: 'red'} : {}
                                    }
                                />
                                {errors.email && (
                                    <span
                                        style={{
                                            color: 'red',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                style={{
                                    display: 'block',
                                    marginBottom: '0.375rem',
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    color: 'var(--gray-700)',
                                }}
                            >
                                咨询内容 <span style={{color: 'red'}}>*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="input"
                                placeholder="请描述您的需求..."
                                style={
                                    errors.message
                                        ? {
                                              borderColor: 'red',
                                              resize: 'vertical',
                                          }
                                        : {resize: 'vertical'}
                                }
                            />
                            {errors.message && (
                                <span
                                    style={{color: 'red', fontSize: '0.75rem'}}
                                >
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary"
                            style={{
                                marginTop: '0.5rem',
                                opacity: isSubmitting ? 0.7 : 1,
                            }}
                        >
                            {isSubmitting ? (
                                '提交中...'
                            ) : (
                                <>
                                    <Send
                                        size={18}
                                        style={{marginRight: '0.5rem'}}
                                    />
                                    提交咨询
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 640px) {
                    .form-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </div>
    );
}
