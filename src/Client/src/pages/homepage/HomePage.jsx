import React, { useState, useEffect, useContext } from "react";
import RowItems from "../../components/row_items/RowItems";
import RowItems1 from "../../components/row_items/RowItems1";
import Footer from "../../components/footer/Footer";
import { getArtists } from "../../config/apiConfig";
import { getAlbums } from "../../config/apiConfig";
import LanguageContext from "../../contexts/LanguageContext";
// Import thêm hàm lấy radio nếu có
// import { getRadio } from "../../config/radioConfig";

const HomePage = () => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [radio, setRadio] = useState([]);
  const { translations } = useContext(LanguageContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistData = await getArtists();
        setArtists(artistData);
        
        const albumData = await getAlbums(); // Sử dụng getAlbums để lấy dữ liệu album
        setAlbums(albumData);
        
        // Nếu có hàm getRadio, gọi hàm đó để lấy dữ liệu radio
        // const radioData = await getRadio();
        // setRadio(radioData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <RowItems
        title={translations.popularArtist}
        data={artists}
      />
      <RowItems1
        title={translations.popularAlbum}
        data={albums}
      />
      <RowItems
        title={translations.popularRadio}
        data={radio}
      />
      <Footer />
    </div>
  );
};

export default HomePage;