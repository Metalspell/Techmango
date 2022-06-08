import './App.css';
import Mainpage from './Components/MainPage/Mainpage';
import ModalWindow from './Components/ModalWindow/ModalWindow';
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient()

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "TechMANGO | Home"
  }, [])

  return (
    <section className='main-wrapper'>
      <Router>
        <Mainpage isOpen={isOpen} setIsOpen={setIsOpen} />
      </Router>
      <QueryClientProvider client={queryClient}>
        <Modal
          ariaHideApp={false}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before"
          }}
          className={{
            base: "content-base",
            afterOpen: "content-after",
            beforeClose: "content-before"
          }}
        >
          <ModalWindow setIsOpen={setIsOpen} />
        </Modal>
      </QueryClientProvider>
    </section>
  );
}

export default App;
