import Navbar from "./component/Navbar";

import Transaction from "./component/Transaction";
import Overview from "./component/Overview";
import Header from "./component/Header";

function App() {
   

 

  return (
    <div className="flex bg-[#FAFAFA] h-[1541px]">
      <div className="w-[224px]">
        <Navbar />
      </div>
      <div className="w-screen flex flex-col ">
        <Header />

        <div className=" p-8 w-full h-full  ">
          <div className=" w-full h-full flex flex-col gap-8  ">
            <Overview/>
            <Transaction/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
