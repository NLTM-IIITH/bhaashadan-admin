import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoAnalytics } from "react-icons/io5";
import { SiPowerpages } from "react-icons/si";
import { ImUpload3 } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("/");

  const handleTabClick = (path: string) => {
    navigate(path);
    setSelectedTab(path);
  }

  const getTabClasses = (path: string) => {
    return path === selectedTab ? 'bg-[#ffffff]' : 'text-[#fff]';
  }
  
  return (
    <aside className="h-screen bg-darkGreen w-[15rem] fixed">
      <nav className='h-full flex flex-col shadow-sm'>
        <h1 className="py-4 flex justify-center items-center gap-x-2 text-2xl font-bold text-[#fff]"><GrLanguage /> Bhashadaan</h1>
        <div className={`py-4 m-2 rounded-full flex items-center cursor-pointer w-[14rem] ${getTabClasses('/')}`} onClick={()=> {handleTabClick('/')}}>
          <IoAnalytics style={{color: selectedTab === '/' ? "#172554" : "#fff"}} className={`ml-4 mr-2 w-6 h-6} `} />
          <h1 className={`font-semibold ${selectedTab === '/' ? 'text-navyBlue' : 'text-white'} 'w-20'`}>Analytics</h1>
        </div>
        <div className={`py-4 m-2 rounded-full flex items-center cursor-pointer w-[14rem] ${getTabClasses('/pages')}`} onClick={()=> {handleTabClick('/pages')}}>
          <SiPowerpages style={{color: selectedTab === '/pages' ? "#172554" : "#fff"}} className={`ml-4 mr-2 w-6 h-6} `} />
          <h1 className={`font-semibold ${selectedTab === '/pages' ? 'text-navyBlue' : 'text-white'} 'w-20'`}>Paragraphs</h1>
        </div>
        <div className={`py-4 m-2 rounded-full flex items-center cursor-pointer w-[14rem] ${getTabClasses('/submissions')}`} onClick={()=> {handleTabClick('/submissions')}}>
          <ImUpload3 style={{color: selectedTab === '/submissions' ? "#172554" : "#fff"}} className={`ml-4 mr-2 w-6 h-6} `} />
          <h1 className={`font-semibold ${selectedTab === '/submissions' ? 'text-navyBlue' : 'text-white'} 'w-20'`}>Submissions</h1>
        </div>
        <div className={`py-4 m-2 rounded-full flex items-center cursor-pointer w-[14rem] ${getTabClasses('/users')}`} onClick={()=> {handleTabClick('/users')}}>
          <FaUserAlt style={{color: selectedTab === '/users' ? "#172554" : "#fff"}} className={`ml-4 mr-2 w-6 h-6} `} />
          <h1 className={`font-semibold ${selectedTab === '/users' ? 'text-navyBlue' : 'text-white'} 'w-20'`}>Users</h1>
        </div>
        <div className={`py-4 m-2 rounded-full flex items-center cursor-pointer w-[14rem] ${getTabClasses('/upload')}`} onClick={()=> {handleTabClick('/upload')}}>
          <FaPlus style={{color: selectedTab === '/upload' ? "#172554" : "#fff"}} className={`ml-4 mr-2 w-6 h-6} `} />
          <h1 className={`font-semibold ${selectedTab === '/upload' ? 'text-navyBlue' : 'text-white'} 'w-22'`}>New Page</h1>
        </div>
      </nav>
    </aside>
  )
};

export default Sidebar;
