import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import { chaoHuiKaoSubjects, baiFenBaiSubjects } from './data/subjects';

function App() {
    return (
        <>
            <Helmet>
                <title>南一書局 升高中總複習 | 國中會考複習教材</title>
                <meta
                    name="description"
                    content="南一書局升高中總複習系列，包含超會考複習講義、百分百複習講義，涵蓋國文、英語、數學、自然、社會全科目。"
                />
            </Helmet>

            <div className="min-h-screen">
                <Navbar />

                <main>
                    <Hero />

                    {/* 超會考複習講義 Section */}
                    <div id="products">
                        <ProductSection
                            id="chao-hui-kao"
                            title="超會考複習講義"
                            subtitle="最完整的會考準備教材，助你輕鬆應戰"
                            features={[
                                '取材囊括19大議題、SDGs',
                                '強化閱讀及圖表判讀能力',
                                '收錄跨域及跨科試題',
                            ]}
                            subjects={chaoHuiKaoSubjects}
                            variant="light"
                        />

                        {/* 百分百複習講義 Section */}
                        <ProductSection
                            id="bai-fen-bai"
                            title="百分百複習講義"
                            subtitle="精準掌握重點，高效複習最佳選擇"
                            features={[
                                '分量適中，圖表統整最清晰',
                                '收納跨科、跨域試題',
                                '情境融入生活時事、19大議題、SDGs',
                            ]}
                            subjects={baiFenBaiSubjects}
                            variant="dark"
                        />
                    </div>

                    <NewsSection />
                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
