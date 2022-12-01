// import { Link } from "react-router-dom";
import "./topbar.css";
// import SimpleDrawer from "./Drawer";
import DeckIcon from '@mui/icons-material/Deck';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function TopBar() {
  return (
    <div className="top">
      {/* <SimpleDrawer /> */}
      <DeckIcon/>
      <h2 className="name">Mr. Lungu's Furniture</h2>
      <SearchOutlinedIcon/>
    </div>
  );
}
