import { motion } from 'framer-motion';
import { ShoppingCart, Phone, MapPin, Mail } from 'lucide-react';
import { navLinks } from '../data/subjects';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="purchase" className="bg-slate-900 text-white">
            {/* Purchase CTA Section */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            準備好開始複習了嗎？
                        </h3>
                        <p className="text-white/80 mb-6 max-w-xl mx-auto">
                            購書可洽當區經銷商或至南一綠市集選購
                        </p>
                        <motion.a
                            href="https://shop.nani1953.com.tw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            前往南一綠市集購書
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="nani-ed-group-text-logo.png"
                                alt="南一書局"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                            <div>
                                <span className="text-lg font-bold">南一書局</span>
                                <span className="block text-xs text-slate-400">升高中總複習</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            南一書局致力於提供最優質的教育資源，助學生輕鬆應對會考挑戰。
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-slate-200">快速連結</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="https://www.nani.com.tw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    南一書局官網
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4 text-slate-200">聯絡資訊</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>台南市中西區中山路79號</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span>(06) 226-1251</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span>service@nani.com.tw</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
                    <p>© {currentYear} 南一書局企業股份有限公司. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
