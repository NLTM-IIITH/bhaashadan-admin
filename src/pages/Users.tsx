import { Input, ScrollShadow, Divider, Progress, } from "@nextui-org/react";
import { useState, useEffect} from "react";

import { BsArrowDownUp, } from "react-icons/bs";
import axios from "axios";

interface User {
  id : number; // user_id
  username : string;
  email: string;
  submission_count: number;
  languages: string[];
}

const Users = () => {
  let [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [nameSort, setNameSort] = useState(null);
  const [subSort, setSubSort] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const fetchUsers = async() => {
        try {
            setLoading(true);
            const users = await axios.get("http://localhost:3525/users");
            setUsers(users.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    fetchUsers();
  }, []);

  if(searchTerm.length > 0){ 
    users = users.filter(para=> para.username.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  switch(nameSort){
    case "asc":
      users.sort((a, b) => a.username.localeCompare(b.username));
      break;
    case "desc":
      users.sort((a, b) => b.username.localeCompare(a.username));
      break;
    default:
      break;
  }

  switch(subSort){
    case "asc":
      users.sort((a, b) => a.submission_count - b.submission_count);
      break;
    case "desc":
      users.sort((a, b) => b.submission_count - a.submission_count);
      break;
    default:
      break;
  }
  
  return (
    <ScrollShadow className="h-[90vh]">

      <div className="flex items-center justify-center">
        <div className="flex justify-center font-bold text-5xl p-6">
          <Input
            isClearable
            variant="bordered"
            placeholder="Search users by name "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[40rem]"
          />
        </div>
      </div>

      <div className="flex bg-default-400 h-[4rem] items-center text-[#fff]">
        <div className="w-1/5 flex justify-center items-center gap-x-4">
            NAME
            <div onClick={()=> setNameSort(nameSort === 'desc' ? 'asc' : nameSort === 'asc' ? 'desc' : 'asc')} className="cursor-pointer">  
              <BsArrowDownUp />
            </div>
        </div>
        <div className="w-2/5 flex justify-center">LANGUAGES</div>
        <div className="w-1/5 flex justify-center">EMAIL</div>
        <div className="w-1/5 flex justify-center items-center gap-x-4">
            SUBMISSION COUNT
            <div onClick={()=> setSubSort(subSort === 'desc' ? 'asc' : subSort === 'asc' ? 'desc' : 'asc')} className="cursor-pointer">  
              <BsArrowDownUp />
            </div>
        </div>
      </div>
      <div className="py-2"></div>

    {loading ? 
      <div>
        <div className="py-4">
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="w-4/5"
          />
        </div>
      </div>
      :
      <div>
        {users.map(user => (
            <div key={user.id}>
                <div className="flex items-center">
                    <div className="w-1/5 flex justify-center h-[2rem] items-center">{user.username}</div> 
                    <div className="w-2/5 flex justify-center h-[2rem] items-center">{user.languages}</div>
                    <div className="w-1/5 flex justify-center h-[2rem] items-center">{user.email}</div>
                    <div className="w-1/5 flex justify-evenly h-[2rem] items-center"><div />{user.submission_count}</div>
                </div>
                <Divider className="my-2"/>
            </div>
        ))}
      </div>
    }

    </ScrollShadow>
  )
}

export default Users;