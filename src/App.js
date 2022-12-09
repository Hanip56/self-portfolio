import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ModalProject from "./components/ModalProject";
import Navbar from "./components/Navbar";
import { useStateContext } from "./contexts/ContextProvider";
import DetailProject from "./pages/DetailProject";
import HomeContainer from "./pages/HomeContainer";
import NotFound from "./pages/NotFound";
import { useDisableBodyScroll } from "./utils/preventScroll";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentModalInfo, setCurrentModalInfo] = useState({});
  const { isViewed, setIsViewed } = useStateContext();

  useDisableBodyScroll(showModal);

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    setIsViewed((prev) => prev + 1);
  }, []);

  console.log({ isViewed });

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Optional if you want to skip the scrolling animation
      });
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
      {showModal && (
        <ModalProject
          setShowModal={setShowModal}
          setCurrentModalInfo={setCurrentModalInfo}
          currentModalInfo={currentModalInfo}
        />
      )}

      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/project/:projectId" element={<DetailProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
