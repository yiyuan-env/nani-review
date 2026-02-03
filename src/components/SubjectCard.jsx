import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function SubjectCard({ subject, index }) {
    const hasCoverImage = subject.coverImage;

    return (
        <motion.a
            href={subject.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group card overflow-hidden flex flex-col cursor-pointer"
        >
            {/* Cover Image or Icon */}
            {hasCoverImage ? (
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                        src={subject.coverImage}
                        alt={`${subject.name} 複習講義封面`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Subject name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">{subject.name}</span>
                            <ExternalLink className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="p-6 flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className={`${subject.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{subject.icon}</span>
                    </div>

                    {/* Subject Name */}
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{subject.name}</h3>

                    {/* Action Button */}
                    <div className={`mt-auto flex items-center gap-1.5 text-sm font-medium bg-gradient-to-r ${subject.color} bg-clip-text text-transparent group-hover:gap-2.5 transition-all duration-300`}>
                        <span>下載講義</span>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors" />
                    </div>
                </div>
            )}

            {/* Hover Gradient Border Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${subject.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
        </motion.a>
    );
}
