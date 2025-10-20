"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [{"id":"hero-image","url":"https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Charming café interior in Geelong featuring vinyl records, blackboard menu, and retro decor."},{"id":"about-image","url":"https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two men enjoying a relaxed conversation with laptops in a cozy Brazilian café."},{"id":"product-image-1","url":"https://images.pexels.com/photos/2159128/pexels-photo-2159128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Barista using syphon method to prepare coffee in a café setting. Indoors with coffee equipment."},{"id":"product-image-2","url":"https://images.pexels.com/photos/34321386/pexels-photo-34321386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"espresso coffee shot - Photo by Novkov Visuals"},{"id":"product-image-3","url":"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a barista pouring milk to create latte art in a coffee cup."}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Coffee Bliss"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Coffee Bliss"
            description="Experience the best coffee in town"
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[{ text: "Explore Menu", href: "menu" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "Coffee Bliss is dedicated to offering the finest coffee experience.",
              "Our mission is to bring the best taste and atmosphere to our community.",
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Coffee Collection"
            products={[
              { id: "coffee-1", name: "Brewed Coffee", price: "$3.00", imageSrc: assetMap.find(a => a.id === 'product-image-1')?.url },
              { id: "coffee-2", name: "Espresso", price: "$2.50", imageSrc: assetMap.find(a => a.id === 'product-image-2')?.url },
              { id: "coffee-3", name: "Latte", price: "$4.00", imageSrc: assetMap.find(a => a.id === 'product-image-3')?.url },
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Get in Touch"
            description="We'd love to hear from you. Get in touch for any inquiries or feedback."
            inputPlaceholder="Your email address"
            buttonText="Contact"
            termsText="We respect your privacy. Unsubscribe at any time."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Explore",
                items: [
                  { label: "About", href: "about" },
                  { label: "Menu", href: "menu" },
                ],
              },
              {
                title: "Resources",
                items: [
                  { label: "Blog", href: "blog" },
                  { label: "Privacy Policy", href: "privacy" },
                ],
              },
            ]}
            copyrightText="© 2023 Coffee Bliss"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}