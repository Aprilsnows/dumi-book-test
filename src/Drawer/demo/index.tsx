import React,{useState} from "react";

import Drawer from '../index'

const App: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  const handleCloseDrawer = ()=>{
    setShowModal(!showModal)
  }

  return (
    <div>
      <Drawer showModal={showModal} handleCloseDrawer={handleCloseDrawer} childrens='right' >
        <p>你好啊</p>
      </Drawer>
    </div>
  );
};

export default App;