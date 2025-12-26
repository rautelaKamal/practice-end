import { useState } from "react";

const Navbar = () => {
const [open,setOpen] = useState(false);
  return (
     <div className="w-full">
    <div className="flex justify-between px-3 py-5 lg:px-12 " > 
      <div className="">
        kartik
      </div>

     
      <div className="hidden lg:flex gap-6">
      <div>
        proof-of-work
      </div>
      <div>
        blogs
      </div>
      <div>
        light switch
      </div>
</div>
    <button 
    className="lg:hidden"
    onClick={()=> setOpen(!open)}>☰</button>
    
    {open && (
  <div className="md:hidden mx-3 mt-2 rounded-lg border p-4 flex flex-col gap-4">
    <div>proof-of-work</div>
    <div>blogs</div>
    <div>light switch</div>
  </div>
)}

    </div>
    </div>
  )
}


export default Navbar;
