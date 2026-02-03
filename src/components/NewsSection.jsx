import { motion } from 'framer-motion';
import { ArrowRight, Newspaper } from 'lucide-react';
import { newsletters } from '../data/subjects';

export default function NewsSection() {
    return (
        <section id="newsletter" className="py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
                        <Newspaper className="w-4 h-4 text-accent-400" />
                        <span className="text-white/90 text-sm font-medium">學生電子報</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        你知道如何會考準備嗎？
                    </h2>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">
                        閱讀我們的學生電子報，獲取最新的會考準備技巧與學習資源
                    </p>
                </motion.div>

                {/* Newsletter Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {newsletters.map((newsletter, index) => (
                        <motion.a
                            key={newsletter.id}
                            href={newsletter.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <span className="text-2xl">{newsletter.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent-300 transition-colors">
                                        {newsletter.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-3">{newsletter.description}</p>
                                    <div className="flex items-center gap-1 text-accent-400 text-sm font-medium group-hover:gap-2 transition-all">
                                        <span>閱讀更多</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
