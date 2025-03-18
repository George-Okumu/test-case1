import { useLocation, Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import { 
  FaCubes, FaHammer, FaMountain, FaBuilding, FaTree, FaPaintBrush, 
  FaLayerGroup, FaThLarge, FaBoxes, FaTools, FaTint, FaWarehouse, FaColumns, FaWrench 
} from "react-icons/fa";

export function SideNavigation() {
  const location = useLocation();

  // Define navigation links
  const navLinks = [
    { path: "/hardware_shop/hardware-products", icon: <FaBoxes className="h-5 w-5" />, label: "All Products" },
    { path: "/hardware_shop/hardware-products/cement", icon: <FaCubes className="h-5 w-5" />, label: "Cement" },
    { path: "/hardware_shop/hardware-products/steel", icon: <FaHammer className="h-5 w-5" />, label: "Steel" },
    { path: "/hardware_shop/hardware-products/quarry", icon: <FaMountain className="h-5 w-5" />, label: "Quarry" },
    { path: "/hardware_shop/hardware-products/concrete", icon: <FaBuilding className="h-5 w-5" />, label: "Concrete" },
    { path: "/hardware_shop/hardware-products/timber", icon: <FaTree className="h-5 w-5" />, label: "Timber" },
    { path: "/hardware_shop/hardware-products/ceiling", icon: <FaLayerGroup className="h-5 w-5" />, label: "Ceiling" },
    { path: "/hardware_shop/hardware-products/paints", icon: <FaPaintBrush className="h-5 w-5" />, label: "Paints" },
    { path: "/hardware_shop/hardware-products/ceramics", icon: <FaThLarge className="h-5 w-5" />, label: "Ceramics and Tiles" },
    { path: "/hardware_shop/hardware-products/pipes", icon: <FaWrench className="h-5 w-5" />, label: "Pipes and Fittings" },
    { path: "/hardware_shop/hardware-products/aluminum", icon: <FaColumns className="h-5 w-5" />, label: "Aluminum" },
    { path: "/hardware_shop/hardware-products/glass", icon: <FaTint className="h-5 w-5" />, label: "Glass" },
    { path: "/hardware_shop/hardware-products/roofing", icon: <FaWarehouse className="h-5 w-5" />, label: "Roofing" },
    { path: "/hardware_shop/hardware-products/tools", icon: <FaTools className="h-5 w-5" />, label: "Tools and Equipment" },
  ];

  return (
    <Card className="h-[calc(100vh-6rem)] w-full max-w-[18rem] p-4 fixed top-24 overflow-y-auto">
      <div className="mb-4 p-4 text-center">
        <Typography variant="h5" color="blue-gray" className="font-semibold">
          Hardware Categories
        </Typography>
      </div>
      <List>
        {navLinks.map(({ path, icon, label }) => (
          <Link key={path} to={path}>
            <ListItem
              className={`flex items-center rounded-lg transition ${
                location.pathname === path ? "bg-[rgb(0,0,122)] text-white" : "hover:bg-gray-200"
              }`}
            >
              <ListItemPrefix>{icon}</ListItemPrefix>
              {label}
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}
