import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Admin1";
import Page2 from "./Employee";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import accountImg from "../img/free-icon-user-149071 1.png";
import logoimg from "../img/Group 109.png";
import "./AllAdmin.css";
import { FaPhone } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { SlSocialVkontakte } from "react-icons/sl";
import ImgScrol from "../img/free-icon-news-5995360 1.png";
import { AiFillCaretUp } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import url from "../host";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Emp2 from "./Emp2";
import SpiskDti from "./SpiskDti";
import GroupDti from "./GroupDti";
import SpsRodtl from "./SpsRodtl";
import Zayavv from "./Zayavv";
import Vztsasd from "./Vztsasd";
import Zodaniii from "./Zodaniii";
import Plan from "./Plan";
import ByGrupss from "./ByGrupss";
import PageProfilr from "./PageProfilr";
import Statics from "./Statics";
import Zapissi from "./Zapissi";
import PostEmployee from "./PostEmployee/PostEmployee";
import user from '../img/profile-icon-orange-symbol-soccer-ball-football-team-sport-transparent-png-1014106-removebg-preview.png'
import imgLogo from '../img/logo.png'
import { CgDetailsMore } from 'react-icons/cg'



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AllAdmin() {
  const [page12, setPage12] = React.useState(
    sessionStorage.getItem("page12") ? sessionStorage.getItem("page12") : 1
  );
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    if (3 > 2) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${url}/person`);
          const filteredData = response.data.filter(
            (person) => person.email === localStorage.getItem("name")
          );
          setData(filteredData);
          localStorage.setItem("personid", filteredData[0].personid);
          /* console.log(filteredData) */
        } catch (err) {
          console.error(err);
        }
      };
    }
    // fetchData()

    const fetchData2 = async () => {
      try {
        const response = await axios.get(`${url}/employee`);
        const filteredData2 = response.data.filter(
          (person) => person.personid === localStorage.getItem("personid")
        );
        setData2(filteredData2);
        console.log(filteredData2);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData2();
  }, []);

  function openModal11() {
    document.querySelector(".pageUser11").style = "display:block";
    document.querySelector(".pageUser112").style = "display:block";
  }


function closeModal11() {
    document.querySelector(".pageUser11").style = "display:none";
    document.querySelector(".pageUser112").style = "display:none";
  }

  function otke1() {
    var navigation = document.querySelector(".BottomNavigation");
    navigation.style = "bottom: 0;";
    document.querySelector(".och").style = "display: none;";
    document.querySelector(".yop").style = "display: block;";
  }
  function otke2() {
    var navigation = document.querySelector(".BottomNavigation");
    navigation.style = " bottom: -110px";

    document.querySelector(".och").style = "display: block;";
    document.querySelector(".yop").style = "display: none;";
  }

  function openSansOpen() {
    document.querySelector('.ScrollBar').style = 'left: 0'
    document.querySelector('.closeDmodl').style = 'display: block'
    document.querySelector('.openScrollBar').style = 'display: none'
  }
  function closeSansOpen() {
    document.querySelector('.ScrollBar').style = 'left: -100%'
    document.querySelector('.closeDmodl').style = 'display: none'
    document.querySelector('.openScrollBar').style = 'display: block'
  }
  function kali() {
    sessionStorage.setItem("page", 1);
    window.location = "/";
  }
  return (
    <BrowserRouter>
      <div className="The-Big">
        <Navbar expand="lg" className='Navbar'>
          <div className='divBtnn'>
            <CgDetailsMore className='closeDmodl' onClick={() => closeSansOpen()} />
            <button className='openScrollBar' onClick={() => openSansOpen()}><CgDetailsMore /></button>
          </div>
          <Container>
            <Navbar.Brand className="deets" onClick={() => kali()} >
              <img src={imgLogo} alt='' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#Malumot">Malumot</Nav.Link>
                <Nav.Link href="#aloqa">Aloqa</Nav.Link>
                <Nav.Link href="#Aloqa2">Aloqa2</Nav.Link>
              </Nav>
              <Nav className='navbarNav'>
                <Nav.Link className="deets" id='deeets'>
                  8 800 550-03-74
                </Nav.Link>
                <a className='buttonVxd2' href='/PageProfilr'>
                  <img src={user} />
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="bigbox">
        <div className='ScrollBar'>
            <a href='/'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol} alt='' />
                <h2>ЛЕНТА НОВОСТЕЙ</h2>
              </div>
            </a>
            <a href='/SpiskDti'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol} alt='' />
                <h2>Video darsliklar</h2>
              </div>
            </a>
            <a href='/onlaynTest'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol} alt='' /> 
                <h2>Onlayn Test</h2>
              </div>
            </a>
          </div>
          <div className="routerDiv">
            <Routes>
              <Route path="/" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/Emp2" element={<Emp2 />} />
              <Route path="/SpiskDti" element={<SpiskDti />} />
              <Route path="/groupDti" element={<GroupDti />} />
              <Route path="/onlaynTest" element={<SpsRodtl />} />
              <Route path="/Zayavv" element={<Zayavv />} />
              <Route path="/Vztsasd" element={<Vztsasd />} />
              <Route path="/Zodaniii" element={<Zodaniii />} />
              <Route path="/Plan" element={<Plan />} />
              <Route path="/ByGrupss" element={<ByGrupss />} />
              <Route path="/PageProfilr" element={<PageProfilr />} />
              <Route path="/Zapissi" element={<Zapissi />} />
              <Route path="/PostEmployee" element={<PostEmployee />} />
              <Route path="/Statics" element={<Statics />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
