import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';

import PrincipalClock from './PrincipalClock';
import SecondaryClockList from './SecondaryClockList';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <PrincipalClock />

      <SecondaryClockList />

      <button type="button" onClick={openModal} className="absolute bottom-0 bg-cyan-500 rounded-lg py-2 w-full cursor-pointer hover:bg-cyan-700 hover:text-slate-50 active:bg-cyan-600 focus:ring focus:ring-cyan-400">
        Add new clock
      </button>

      <Modal
        isOpen={modalIsOpen}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 right-auto bottom-auto -mr-[50%] -translate-x-[50%] -translate-y-[50%] bg-slate-700 rounded-lg p-6 w-9/12 h-3/5"
      >
        <div className="w-full h-96 bg-slate-300" />

        <span>zona horaria seleccionada: </span>

        <button type="button" onClick={closeModal} className="relative -bottom-1/4 bg-cyan-500 rounded-lg py-2 w-full cursor-pointer hover:bg-cyan-700 hover:text-slate-50  active:bg-cyan-600 focus:ring focus:ring-cyan-400">Guardar zona</button>
      </Modal>
    </>
  );
}

export default App;
