import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Target, BookOpen } from 'lucide-react';

export default function Hero() {
    const scrollToProducts = () => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float animate-delay-200" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-accent-400" />
                    <span className="text-white/90 text-sm font-medium">114年會考最佳複習夥伴</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                >
                    升高中
                    <span className="block mt-2 bg-gradient-to-r from-secondary-300 via-accent-300 to-secondary-300 bg-clip-text text-transparent">
                        總複習
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10"
                >
                    你知道如何會考準備嗎？南一書局為你準備最完整的複習資源，
                    <br className="hidden sm:block" />
                    涵蓋全科目，助你輕鬆應戰！
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <button
                        onClick={scrollToProducts}
                        className="btn-primary text-lg px-8 py-4 shadow-xl shadow-primary-500/30"
                    >
                        <BookOpen className="w-5 h-5 mr-2" />
                        瀏覽複習講義
                    </button>
                    <a
                        href="https://shop.nani1953.com.tw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-lg px-8 py-4"
                    >
                        🛒 前往購書
                    </a>
                </motion.div>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-3"
                >
                    {[
                        { icon: '📚', text: '19大議題' },
                        { icon: '🌍', text: 'SDGs融入' },
                        { icon: '📊', text: '圖表統整' },
                        { icon: '✨', text: '跨域試題' },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                        >
                            <span>{feature.icon}</span>
                            <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.button
                        onClick={scrollToProducts}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label="Scroll down"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
