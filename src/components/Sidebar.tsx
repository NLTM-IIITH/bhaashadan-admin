import { useNavigate } from "react-router-dom";

import { IoAnalytics } from "react-icons/io5";
import { SiPowerpages } from "react-icons/si";
import { ImUpload3 } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

interface SidebarProps {
  expanded: boolean;
}

const Sidebar = ({expanded}: SidebarProps) => {
  const navigate = useNavigate();
  
  return (
    <aside className={`absolute h-screen transition-all bg-darkGreen ${expanded ? 'w-[15rem]' : 'w-0'}`}>
      <nav className='h-full flex flex-col shadow-sm transition-all relative z-0'>
        <div className={`bg-[#ffffff] py-4 m-2 rounded-xl flex align-middle transition-all cursor-pointer ${expanded? 'w-[14rem]' : 'w-0'}`} onClick={()=> {navigate('/')}}>
          <IoAnalytics style={{color: "#172554"}} className={`ml-4 mr-2 transition-all ${expanded? 'w-6 h-6' : 'w-0 h-0'} `} />
          <h1 className={`transition-all font-semibold text-navyBlue ${expanded? 'w-20' : 'hidden'}`}>Analytics</h1>
        </div>
        <div className={`bg-[#ffffff] py-4 m-2 rounded-xl flex align-middle transition-all cursor-pointer ${expanded? 'w-[14rem]' : 'w-0'}`} onClick={()=> {navigate('/pages')}}>
          <SiPowerpages style={{color: "#172554"}} className={`ml-4 mr-2 transition-all ${expanded? 'w-6 h-6' : 'w-0 h-0'} `} />
          <h1 className={`transition-all font-semibold text-navyBlue ${expanded? 'w-20' : 'hidden'}`}>Pages</h1>
        </div>
        <div className={`bg-[#ffffff] py-4 m-2 rounded-xl flex align-middle transition-all cursor-pointer ${expanded? 'w-[14rem]' : 'w-0'}`} onClick={()=> {navigate('/submissions')}}>
          <ImUpload3 style={{color: "#172554"}} className={`ml-4 mr-2 transition-all ${expanded? 'w-6 h-6' : 'w-0 h-0'} `} />
          <h1 className={`transition-all font-semibold text-navyBlue ${expanded? 'w-20' : 'hidden'}`}>Submissions</h1>
        </div>
        <div className={`bg-[#ffffff] py-4 m-2 rounded-xl flex align-middle transition-all cursor-pointer ${expanded? 'w-[14rem]' : 'w-0'}`} onClick={()=> {navigate('/users')}}>
          <FaUserAlt style={{color: "#172554"}} className={`ml-4 mr-2 transition-all ${expanded? 'w-6 h-6' : 'w-0 h-0'} `} />
          <h1 className={`transition-all font-semibold text-navyBlue ${expanded? 'w-20' : 'hidden'}`}>Users</h1>
        </div>
        <div className={`bg-[#ffffff] py-4 m-2 rounded-xl flex align-middle transition-all cursor-pointer ${expanded? 'w-[14rem]' : 'w-0'}`} onClick={()=> {navigate('/upload')}}>
          <FaPlus style={{color: "#172554"}} className={`ml-4 mr-2 transition-all ${expanded? 'w-6 h-6' : 'w-0 h-0'} `} />
          <h1 className={`transition-all font-semibold text-navyBlue ${expanded? 'w-22' : 'hidden'}`}>New Page</h1>
        </div>
      </nav>
    </aside>
  )
};

export default Sidebar;
