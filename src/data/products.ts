export type Category = 'industrial' | 'electronics' | 'chemicals' | 'other';

export interface Product {
    id: string;
    name: string;
    category: Category;
    description: string;
    priceRange: string;
    images: string[];
    specs: Record<string, string>;
    featured: boolean;
}

export const products: Product[] = [
    {
        id: '1',
        name: '工业数控机床',
        category: 'industrial',
        description: '高精度数控机床，适用于各种金属加工需求。采用先进的数控系统，精度高、效率快。',
        priceRange: '¥50,000 - ¥200,000',
        images: [
            'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
        ],
        specs: {
            '型号': 'CNC-5000',
            '工作行程': '500×500×500mm',
            '主轴转速': '8000rpm',
            '定位精度': '±0.005mm',
            '控制系统': 'FANUC',
        },
        featured: true,
    },
    {
        id: '2',
        name: '工业机器人',
        category: 'industrial',
        description: '六轴工业机器人，广泛应用于装配、搬运、焊接等自动化生产线。',
        priceRange: '¥80,000 - ¥350,000',
        images: [
            'https://images.unsplash.com/photo-1565514020175-8507b3c3dc53?w=800',
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
        ],
        specs: {
            '型号': 'IR-2000',
            '自由度': '6轴',
            '工作半径': '2000mm',
            '负载': '20kg',
            '重复精度': '±0.05mm',
        },
        featured: true,
    },
    {
        id: '3',
        name: '激光切割机',
        category: 'industrial',
        description: '高性能激光切割设备，适用于金属和非金属材料的精密切割。',
        priceRange: '¥120,000 - ¥500,000',
        images: [
            'https://images.unsplash.com/photo-1565439398535-895e7220b86d?w=800',
        ],
        specs: {
            '型号': 'LC-3000',
            '功率': '2000W',
            '切割厚度': '0-25mm',
            '工作台': '3000×1500mm',
            '切割速度': '0-30m/min',
        },
        featured: false,
    },
    {
        id: '4',
        name: '自动化流水线',
        category: 'industrial',
        description: '模块化设计可根据需求灵活配置的自动化生产线解决方案。',
        priceRange: '¥200,000 - ¥1,000,000',
        images: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
        ],
        specs: {
            '型号': 'APL-100',
            '输送速度': '0-30m/min',
            '承载能力': '100kg/m',
            '控制系统': 'PLC',
            '长度': '可定制',
        },
        featured: false,
    },
    {
        id: '5',
        name: '智能传感器',
        category: 'electronics',
        description: '高精度工业级传感器，支持多种信号输出，适用于各种监测场景。',
        priceRange: '¥500 - ¥5,000',
        images: [
            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
        ],
        specs: {
            '型号': 'SS-100',
            '测量范围': '0-100℃',
            '精度': '±0.1℃',
            '输出': '4-20mA/RS485',
            '防护等级': 'IP67',
        },
        featured: true,
    },
    {
        id: '6',
        name: '工业控制器',
        category: 'electronics',
        description: '高性能可编程控制器，支持多种工业协议，适用于复杂控制系统。',
        priceRange: '¥2,000 - ¥15,000',
        images: [
            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
        ],
        specs: {
            '型号': 'PLC-1200',
            'I/O点数': '24/16',
            '程序容量': '16K步',
            '通信接口': 'RS232/RS485/以太网',
            '电源': 'DC24V',
        },
        featured: true,
    },
    {
        id: '7',
        name: '变频器',
        category: 'electronics',
        description: '高性能矢量变频器，节能效果显著，适用于电机调速控制。',
        priceRange: '¥1,500 - ¥12,000',
        images: [
            'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800',
        ],
        specs: {
            '型号': 'VFD-5000',
            '功率范围': '0.75-400kW',
            '输入电压': '380V',
            '输出频率': '0-400Hz',
            '控制方式': 'V/F/矢量控制',
        },
        featured: false,
    },
    {
        id: '8',
        name: '触摸屏',
        category: 'electronics',
        description: '工业级人机界面显示器，支持多种通信协议，显示清晰、操作流畅。',
        priceRange: '¥1,200 - ¥8,000',
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        ],
        specs: {
            '型号': 'HMI-700',
            '屏幕尺寸': '7-15英寸',
            '分辨率': '1024×600',
            '通信口': 'RS232/RS485/USB',
            '防护等级': 'IP65',
        },
        featured: false,
    },
    {
        id: '9',
        name: '工业清洗剂',
        category: 'chemicals',
        description: '高效环保的工业清洗产品，适用于金属表面清洗和防锈处理。',
        priceRange: '¥50 - ¥500/桶',
        images: [
            'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
        ],
        specs: {
            '型号': 'CL-200',
            '外观': '透明液体',
            'pH值': '7-9',
            '使用温度': '20-60℃',
            '包装': '25kg/桶',
        },
        featured: true,
    },
    {
        id: '10',
        name: '润滑油脂',
        category: 'chemicals',
        description: '高性能工业润滑油脂，适用于高温、重载等恶劣工况。',
        priceRange: '¥80 - ¥800/桶',
        images: [
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
        ],
        specs: {
            '型号': 'LG-500',
            '类型': '复合锂基脂',
            '滴点': '280℃',
            'NLGI': '2号',
            '包装': '15kg/桶',
        },
        featured: false,
    },
    {
        id: '11',
        name: '工业胶粘剂',
        category: 'chemicals',
        description: '高强度结构胶，适用于金属、塑料、陶瓷等多种材料的粘接。',
        priceRange: '¥100 - ¥1,000',
        images: [
            'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800',
        ],
        specs: {
            '型号': 'AD-300',
            '类型': '环氧树脂',
            '固化时间': '24h',
            '工作温度': '-40-120℃',
            '包装': '50ml/支',
        },
        featured: false,
    },
    {
        id: '12',
        name: '防腐涂料',
        category: 'chemicals',
        description: '长效防腐涂料，适用于钢结构、管道等设备的防腐保护。',
        priceRange: '¥200 - ¥2,000/桶',
        images: [
            'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800',
        ],
        specs: {
            '型号': 'PT-100',
            '类型': '环氧富锌',
            '锌含量': '60%',
            '固化时间': '30min',
            '理论涂布率': '5㎡/kg',
        },
        featured: true,
    },
];

export const categories: { value: Category | 'all'; label: string }[] = [
    { value: 'all', label: '全部' },
    { value: 'industrial', label: '工业设备' },
    { value: 'electronics', label: '电子产品' },
    { value: 'chemicals', label: '化工材料' },
    { value: 'other', label: '其他' },
];
