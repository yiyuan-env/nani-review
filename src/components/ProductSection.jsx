import { motion } from 'framer-motion';
import SubjectCard from './SubjectCard';

export default function ProductSection({
    id,
    title,
    subtitle,
    features,
    subjects,
    variant = 'light'
}) {
    const isLight = variant === 'light';

    return (
        <section
            id={id}
            className={`py-20 md:py-28 ${isLight ? 'bg-white' : 'bg-slate-50'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    {/* Title with decorative elements */}
                    <div className="relative inline-block mb-4">
                        <h2 className="section-title text-3xl md:text-4xl">{title}</h2>
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6 border-l-2 border-t-2 border-secondary-400 hidden md:block" />
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 border-r-2 border-b-2 border-secondary-400 hidden md:block" />
                    </div>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Features */}
                {features && features.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-100 rounded-full px-5 py-2.5"
                            >
                                <span className="text-accent-500 font-bold">★</span>
                                <span className="text-slate-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Subject Cards Grid - Centered */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {subjects.map((subject, index) => (
                        <div key={subject.id} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]">
                            <SubjectCard subject={subject} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
