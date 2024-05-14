import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";

const Navbarx = () => {
  
  return (
    <div className="relative z-10">
      <div className={`bg-green flex py-2 justify-between`}>
        <div className="flex gap-x-4 px-4 align-middle">
        </div>

        <div className="flex gap-x-4 px-4">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
                }}
                className="transition-transform"
                description="@admin"
                name="Admin"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">@admin</p>
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

      </div>
    </div>
  );
};

export default Navbarx;
