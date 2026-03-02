import {Routes, Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Header />
            <main style={{flex: 1}}>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/product/:id"
                            element={<ProductDetail />}
                        />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

export default App;
