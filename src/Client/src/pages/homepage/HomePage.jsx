import React, { useEffect, useState } from "react";
import RowItems from "../../components/row_items/RowItems";
import RowItems1 from "../../components/row_items/RowItems1";
import Footer from "../../components/footer/Footer";
import { getArtists } from "../../config/artistConfig";
import { getAlbums } from "../../config/albumConfig";
// Import thêm hàm lấy radio nếu có
// import { getRadio } from "../../config/radioConfig";

const HomePage = () => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [radio, setRadio] = useState([]);

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
        title={"Popular artist"}
        data={artist}
        type={"Artist"}
      />
      <RowItems1
        title={"Popular albums"}
        data={albums}
      />
      <RowItems
        title={"Popular Radio"}
        data={radio}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
