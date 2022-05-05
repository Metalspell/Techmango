import './App.css';
import Mainpage from './Components/MainPage/Mainpage';
import ModalWindow from './Components/ModalWindow/ModalWindow';
import { useState } from "react";
import Modal from "react-modal";
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen])

  return (
    <section className='main-wrapper'>
      <Mainpage setIsOpen={setIsOpen} />
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
