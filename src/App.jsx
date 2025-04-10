import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Components/Footer/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  // BannerBtn
  const handleCreditBtn = () => {
    setCoin(coin + 5500000);
  };
  // Players Api Fetch
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // ChoosePlayerBtn
  const handleChoosePlayerBtn = (player) => {
    const exists = selectedPlayers.find(
      (selectedPlayer) => selectedPlayer.playerId === player.playerId
    );

    if (player.biddingPrice < coin) {
      if (!exists) {
        const remainingPrice = coin - player.biddingPrice;
        setCoin(remainingPrice);
        setSelectedPlayers([...selectedPlayers, player]);
      } else {
        toast.warn("🦄 Player already selected", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("🦄 You don't have available coin", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // HandleSelectedBtn
  const handleSelectedBtn = () => {
    selectedPlayers.length > 0 && setIsSelected(true);
  };

  // handleAvailableBtn
  const handleAvailableBtn = () => {
    setIsSelected(false);
  };

  // handleDeleteBtn
  const handleDeleteBtn = (selectedPlayer) => {
    const remainingPlayer = selectedPlayers.filter(
      (selectedPlay) => selectedPlay.playerId !== selectedPlayer.playerId
    );

    setSelectedPlayers([...remainingPlayer]);

    setCoin(coin + selectedPlayer.biddingPrice);
  };

  // handleAddMorePlayerBtn
  const handleAddMorePlayerBtn = () => {
    setIsSelected(false);
  };
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner handleCreditBtn={handleCreditBtn}></Banner>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Players
        players={players}
        handleChoosePlayerBtn={handleChoosePlayerBtn}
        selectedPlayers={selectedPlayers}
        handleSelectedBtn={handleSelectedBtn}
        isSelected={isSelected}
        handleAvailableBtn={handleAvailableBtn}
        handleDeleteBtn={handleDeleteBtn}
        handleAddMorePlayerBtn={handleAddMorePlayerBtn}
      ></Players>

      <Footer></Footer>
    </>
  );
}

export default App;
