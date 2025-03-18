import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  FaCubes,
  FaBoxes,
  FaCity,
  FaHome,
  FaMountain,
  FaPaintBrush,
  FaTree,
} from "react-icons/fa";

export function DesignSideNav() {
  return (
    <Card className="fixed top-0 left-0 h-screen w-full max-w-[20rem] p-4 shadow-none rounded-none bg-white border-r border-gray-200">
      <div className="mb-4 p-4 text-center border-b border-gray-300">
        <Typography variant="h5" color="blue-gray" className="font-semibold">
          Design Categories
        </Typography>
      </div>
      <Link to="/design/all">
        <ListItem>
          <ListItemPrefix>
            <FaBoxes className="h-5 w-5" />
          </ListItemPrefix>
          All Products
        </ListItem>
      </Link>
      <List>
        <Link to="/design/maisonettes">
          <ListItem>
            <ListItemPrefix>
              <FaHome className="h-5 w-5 " />
            </ListItemPrefix>
            Maisonettes
          </ListItem>
        </Link>

        <Link to="/design/bungalows">
          <ListItem>
            <ListItemPrefix>
              <FaBoxes className="h-5 w-5" />
            </ListItemPrefix>
            Bungalows
          </ListItem>
        </Link>

        <Link to="/design/apartments">
          <ListItem>
            <ListItemPrefix>
              <FaCubes className="h-5 w-5 " />
            </ListItemPrefix>
            Apartments
          </ListItem>
        </Link>

        <Link to="/design/commercials">
          <ListItem>
            <ListItemPrefix>
              <FaCity className="h-5 w-5 " />
            </ListItemPrefix>
            Commercials
          </ListItem>
        </Link>

        <Link to="/design/socials">
          <ListItem>
            <ListItemPrefix>
              <FaMountain className="h-5 w-5 " />
            </ListItemPrefix>
            Socials
          </ListItem>
        </Link>

        <Link to="/services/interior-design">
          <ListItem>
            <ListItemPrefix>
              <FaPaintBrush className="h-5 w-5 " />
            </ListItemPrefix>
            Interior Design
          </ListItem>
        </Link>

        <Link to="/services/landscape">
          <ListItem>
            <ListItemPrefix>
              <FaTree className="h-5 w-5 " />
            </ListItemPrefix>
            Landscape
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
