import React, { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";

const Footer = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Sportify Clone</h2>
            <p>&copy; 2024 {translations.myWebsite}. {translations.allRightsReserved}</p>
          </div>
          <div className="flex space-x-4">
            <a href="/about" className="hover:underline">
              {translations.aboutUs}
            </a>
            <a href="/services" className="hover:underline">
              {translations.services}
            </a>
            <a href="/contact" className="hover:underline">
              {translations.contact}
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <p>{translations.contactUs}: nhom6@frontendframework2.com</p>
            <p>{translations.phone}: 094662121212</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
