import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutBanner from '../components/about/AboutBanner';
import AboutIntro from '../components/about/AboutIntro';
import AboutFounder from '../components/about/AboutFounder';
import AboutMiddleBanner from '../components/about/AboutMiddleBanner';
import AboutServices from '../components/about/AboutServices';
import AboutTeam from '../components/about/AboutTeam';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-50 selection:text-[#EA1273] font-sans overflow-x-hidden">
      <Header />
      
      <main>
        <AboutBanner />
        <AboutIntro />
        <AboutFounder />
        <AboutMiddleBanner />
        <AboutServices />
        <AboutTeam />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
