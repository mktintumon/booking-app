import "./header.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faCircleHalfStroke,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { format } from "date-fns";
import React from "react";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function Header({types}) {
  const [openDate, setOpenDate] = useState(false);
  const [dest , setDest] = useState("")
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });

  const handleOption = (type , operation)=>{
    setOption((prev)=>{
      return{
        ...prev,
        [type] : operation === "i" ? option[type] + 1 : option[type] - 1,
      }
    })
  }


  const {dispatch} = useContext(SearchContext)

  const navigate = useNavigate()

  const handleSearch = ()=>{
    dispatch({
      type:"NEW_SEARCH",
      payload:{dest,date,option}
    })
    navigate("/hotelLists", {state:{dest , date , option}})
  }


  return (
    <div className="header">
      <div className={types==="list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCircleHalfStroke} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>


        {types !== "list" &&
          <>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Unlock instant savings of 20% or more with a free My booking account
        </p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going?"
              className="headerSearchInput"
              onChange={(e)=>setDest(e.target.value)}
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "dd/MM/yyyy")} to 
              ${format(date[0].endDate, "dd/MM/yyyy")}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setOpenOption(!openOption)} className="headerSearchText">
              {`${option.adult} Adult ${option.child} Child ${option.room} Room`}{" "}
            </span>
            {openOption && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={option.adult<=1} className="optionCounterButton" 
                  onClick={()=>handleOption("adult","d")}>-</button>
                  <span className="optionCounterNumber">{option.adult}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Child</span>
                <div className="optionCounter">
                  <button disabled={option.child<=0} className="optionCounterButton" 
                  onClick={()=>handleOption("child","d")}>-</button>
                  <span className="optionCounterNumber">{option.child}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("child","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button disabled={option.room<=1} className="optionCounterButton" 
                  onClick={()=>handleOption("room","d")}>-</button>
                  <span className="optionCounterNumber">{option.room}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                </div>
              </div>
            </div>}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn"onClick={handleSearch} >Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
}

export default Header;
