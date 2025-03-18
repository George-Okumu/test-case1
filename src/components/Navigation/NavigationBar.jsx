

import { useState, useEffect, createElement } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  // InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  // RocketLaunchIcon,
  LockClosedIcon,
  // BellAlertIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { NotificationDrawer } from "./NotificationDrawer";



// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Settings",
    icon: Cog6ToothIcon,
  },
  {
    label: "Security",
    // icon: InboxArrowDownIcon,
    icon: LockClosedIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >

          
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-black"
          >
            
            {/* <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 ms-2"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          /> */}
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 ms-2 h-7 rounded-full"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          </Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 text-black transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
        
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
                }`}
            >
              {createElement(icon, {
                className: `h-4 w-4  ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>

        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal ">
            {/* <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <BellAlertIcon className="h-[18px] w-[18px] text-blue-gray-500 text-blue-900" />{" "}
              Notification{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 text-blue-900 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem> */}
            <NotificationDrawer />
          </Typography>
        </MenuHandler>
        <MenuList className="hidden md:w-[30rem] grid-cols-4gap-2 md:gap-3 overflow-visible lg:grid">
          {/* <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card> */}
          <ul className="col-span-4 flex md:w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon  
        className="text-blue-900 h-[18px] w-[18px] 
        text-blue-gray-500" />{" "}
        {/* Notification{" "} */}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </>
  );
}

// nav list component
const navListItems = [
  {
    label: "About",
    icon: UserCircleIcon,
  },
  {
    label: "Receipts",
    icon: CubeTransparentIcon,
  },
  {
    label: "Help",
    icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-blue-900"
        >
          <MenuItem className="flex items-center gap-2 text-blue-900 lg:rounded-full">
            {createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

function NavigationBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto  lg:px-6 flex items-center justify-between">
      {/* Left Section: Welcome Message */}
      <div className="flex-1 text-blue-900">
        <Typography as="a" href="#" className="font-medium text-lg text-blue-gray-900 ">
          <img src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75" alt="logo" className="w-24" />
          {/* Welcome James */}
        </Typography>
      </div>

      {/* Right Section: Nav & Profile Menu */}
      <div className="flex items-center gap-6">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <ProfileMenu />
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-2 lg:hidden text-blue-900"
        >
          <Bars2Icon className="h-6 w-6 text-blue-900" />
        </IconButton>
      </div>

      {/* Mobile Navigation */}
      {/* <Collapse open={isNavOpen} className="overflow-scroll w-full mt-2 ">
        <NavList />
      </Collapse> */}

      {/* Mobile Navigation */}
      <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
        <Collapse open={isNavOpen} className="overflow-scroll mt-2">
          <NavList />
        </Collapse>
      </div>

    </Navbar>
  );
}

export default NavigationBar