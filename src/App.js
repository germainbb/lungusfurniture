import logo from "./logo.svg";
import "./App.css";
import TopBar from "./TopBar";
import p1 from "../src/1.jpg";
import p2 from "../src/2.jpg";
import p3 from "../src/3.jpg";
import p4 from "../src/4.jpg";
import p5 from "../src/5.jpg";
import p6 from "../src/6.jpg";
import p7 from "../src/7.jpg";
import p8 from "../src/8.jpg";
import p9 from "../src/9.jpg";
import p10 from "../src/10.jpg";
import p11 from "../src/11.jpg";
import p12 from "../src/12.jpg";
import p13 from "../src/13.jpg";
import p14 from "../src/14.jpg";
import p15 from "../src/15.jpg";
import p16 from "../src/16.jpg";
import p17 from "../src/17.jpg";
import p18 from "../src/18.jpg";
import p19 from "../src/19.jpg";
import p20 from "../src/20.jpg";
import p21 from "../src/21.jpg";
import p22 from "../src/22.jpg";
import p23 from "../src/23.jpg";
import p24 from "../src/24.jpg";
import p25 from "../src/25.jpg";
import p26 from "../src/26.jpg";
import p27 from "../src/27.jpg";
import p28 from "../src/28.jpg";
import p29 from "../src/29.jpg";
import mybine from "../src/mybine.png";
import thinkchat from "../src/thinkchat.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrM7bLrQRnkVJwUM6OoDBd4cKInO5gwQ8",
  authDomain: "mrlungusfurniture.firebaseapp.com",
  projectId: "mrlungusfurniture",
  storageBucket: "mrlungusfurniture.appspot.com",
  messagingSenderId: "1018351148003",
  appId: "1:1018351148003:web:2d8ebf255e8c5eab891ed6",
  measurementId: "G-3E006L1M47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const goods = [
  {
    name: "Three quarters",
    number: "1",
    image: p1,
    price: "K3000",
  },
  {
    name: "Three quarters",
    number: "2",
    image: p2,
    price: "K3000",
  },
  {
    name: "Console table",
    number: "3",
    image: p3,
    price: "K3500",
  },
  {
    name: "5 chairs dining plus stool",
    number: "4",
    image: p4,
    price: "K7500",
  },
  {
    name: "Couch",
    number: "5",
    image: p5,
    price: "K2000",
  },
  {
    name: "wardrobe double",
    number: "6",
    image: p6,
    price: "K4000",
  },
  {
    name: "L wadrobe slide door mirror",
    number: "7",
    image: p7,
    price: "K2500",
  },
  {
    name: "Study table",
    number: "8",
    image: p8,
    price: "K4000",
  },
  {
    name: "Double Gray kitchen unit",
    number: "9",
    image: p9,
    price: "K4000",
  },
  {
    name: "Two piece kitchen unit",
    number: "10",
    image: p10,
    price: "K4500",
  },
  {
    name: "Wingback chairs for two",
    number: "11",
    image: p11,
    price: "K5000",
  },
  {
    name: "Double kitchen unit",
    number: "12",
    image: p12,
    price: "K4000",
  },
  {
    name: "Wedding chairs",
    number: "13",
    image: p13,
    price: "K5000",
  },
  {
    name: "Closet wardrobe",
    number: "14",
    image: p14,
    price: "K4000",
  },
  {
    name: "Shoe rack",
    number: "15",
    image: p15,
    price: "K2300",
  },
  {
    name: "Brown wardrobe double",
    number: "16",
    image: p16,
    price: "K4000",
  },
  {
    name: "Dressing mirror",
    number: "17",
    image: p17,
    price: "K4000",
  },
  {
    name: "Double bed and side tables",
    number: "18",
    image: p18,
    price: "K4500",
  },
  {
    name: "Two piece kitchen unit",
    number: "19",
    image: p19,
    price: "K4800",
  },
  {
    name: "L shaped sofa",
    number: "20",
    image: p20,
    price: "K9500",
  },
  {
    name: "Headboard and closet",
    number: "21",
    image: p21,
    price: "K7000",
  },
  {
    name: "White wardrobe double",
    number: "22",
    image: p22,
    price: "K4000",
  },
  {
    name: "8 dining chairs",
    number: "23",
    image: p24,
    price: "K9500",
  },
  {
    name: "Wedding chairs",
    number: "25",
    image: p25,
    price: "K6500",
  },
  {
    name: "Couch",
    number: "26",
    image: p26,
    price: "K2000",
  },
  {
    name: "Chest of drawers with mirror",
    number: "27",
    image: p27,
    price: "K3000",
  },
  {
    name: "Four dining chairs",
    number: "28",
    image: p28,
    price: "K5000",
  },
  {
    name: "Double kitchen unit",
    number: "29",
    image: p29,
    price: "K4000",
  },
];

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <img className="image" width="100%" height="400" src={p20} alt="" /> */}
      <div className="title">
        <h3 className="words">
          Browse through our available furniture and place your order through
          whatsapp. You can also request your own designs.
        </h3>
      </div>
      <div className="types">
        We make beds, sofas, chairs, wardrobes, cupboard, tables, and many more
      </div>
      <div className="list">
        {goods.map((item) => (
          <div key={item.number} className="item">
            <img className="image" src={item.image} alt="Lungus" />
            <div className="number">{item.number}</div>
            <div className="name2">Name: {item.name}</div>
            <div className="price">Price: {item.price}</div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div>
          <h1>Our Location</h1>
          <div className='icons'>
            <LocationOnIcon />
            <h3>Mandevu, Lusaka, Zambia</h3>
          </div>
          <div className='icons'>
            <MyLocationIcon />
            {/* <h3>Google Maps code</h3> */}
            <a className="link" target="blank" href="https://www.google.com/maps/place/@/data=!4m2!3m1!1s0x1940f5c1b1ef27cd:0xb13feb009e8c1a97">Google Maps Location</a>
          </div>
        </div>
        <div>
          <h1>Contact</h1>
          <div className='icons'>
            <WhatsAppIcon />
            {/* <h3>whatsapp</h3> */}
            <a className="link" target="blank" href="http://api.whatsapp.com/send?phone=260979437753">WhatsApp</a>
          </div>
          <div className='icons'>
            <EmailIcon />
            {/* <h3>Email</h3> */}
            <a className="link" target="blank" href="mailto:samsonchikamveka90@gmail.com">Email us</a>
          </div>
          <div className='icons'>
            <LocalPhoneIcon />
            {/* <h3>phone</h3> */}
            <a className="link" target="blank" href="tel:+260979437753">Call us</a>
          </div>
        </div>
        <div>
          <h1>Find us</h1>
          <div className='icons'>
            <FacebookIcon />
            {/* <h3>Facebook</h3> */}
            <a className="link" target="blank" href="https://www.facebook.com/profile.php?id=100070520393614">Facebook page</a>
          </div>
          <div className='icons'>
            <InstagramIcon />
            <a className="link" target="blank" href="https://www.instagram.com/invites/contact/?i=1acx21mrqkno8&utm_content=gfjsogj">Instagram</a>
          </div>
          <div className='icons'>
            <img width="50" height="50" src={thinkchat} alt="T" />
            {/* <h3>Thinkchat</h3> */}
            <a className="link" target="blank" href="https://play.google.com/store/apps/details?id=com.gthink.think_chat">thinkchat</a>
          </div>
          <div className='icons'>
            <img width="50" height="50" src={mybine} alt="M" />
            {/* <h3>Amasampo</h3> */}
            <a className="link" target="blank" href="https://play.google.com/store/apps/details?id=com.gthink.MyBine">Amasampo</a>
          </div>
        </div>
      </div>
      <h4>Designed by GThink</h4>
      <h5>copyright Mr Lungu's furniture</h5>
    </div>
  );
}

export default App;
