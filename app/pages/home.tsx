import { useState } from 'react';
import AboutSection from '~/components/about-us';
import ContactForm from '~/components/component-form';
import Footer from '~/components/footer';
import Introduction from '~/components/introduction';
import Navbar from '~/components/navbar';
import Products from '~/components/Products';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll flex flex-col bg-white text-primary-gray text-center">
        <section className="h-screen snap-start flex items-center justify-center">
          <Introduction />
        </section>
        <section className="h-screen snap-start flex items-center justify-center">
          <AboutSection />
        </section>
        <section className="h-screen snap-start flex items-center justify-center">
          <Products />
        </section>
        <section className="h-screen snap-start flex items-center justify-center">
          <ContactForm color="primary-gray" />
        </section>
      </main>
      <Footer />
    </>
  );
}
