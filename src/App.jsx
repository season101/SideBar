import { createContext, useState } from 'react';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';

const App = () => {
  const AppContext = createContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AppContext.Provider value={(setIsSidebarOpen, setIsModalOpen)}>
      <main>
        <Home />
      </main>
      <div className="modal-overlay">
        <Modal />
      </div>
      <aside>
        <Sidebar />
      </aside>
    </AppContext.Provider>
  );
};
export default App;
