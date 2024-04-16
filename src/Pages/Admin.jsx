import Drawer from "../components/Drawer";
import SecondaryButton from "../components/SecondaryButton"
import Table from "../components/Table";

const Admin = () => {
  return (
    <div>
        <Drawer/>
        <div className="flex justify-center ">
          <SecondaryButton/>
          <SecondaryButton/>
          </div>
        <div className="my-36 flex justify-center"><Table/></div>
    </div>
    
  )
}

export default Admin;