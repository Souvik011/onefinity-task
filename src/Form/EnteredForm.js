import React, { useState, useRef , useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./ValidationForm.css";
import { useDispatch,useSelector } from "react-redux";
import { saveData,getData } from "../Store/FormThunk";
import { NavLink } from "react-router-dom";

const EnteredForm = () => {
  const data = useSelector((state)=>state.form.data);
  console.log(data);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [listenfn, setListenfn] = useState(false);
  const [listenln, setListenln] = useState(false);
  const [listenState, setListenState] = useState(false);
  const [listenDistrice, setListenDistrict] = useState(false);
  const [listenVillage, setListenVillage] = useState(false);
  const [listenPan, setListenPan] = useState(false);
  const [listenAadhar, setListenAadhar] = useState(false);

  const fnRef = useRef();
  const lnRef = useRef();
  const stateRef = useRef();
  const districtRef = useRef();
  const villageRef = useRef();
  const panRef = useRef();
  const aadharRef = useRef();

  const dispatch = useDispatch();
  
 
  const submitHandler = (e) => {
    e.preventDefault();
    let Obj = {
        firstName: fnRef.current.value,
        lastName: lnRef.current.value,
        state: stateRef.current.value,
        district: districtRef.current.value,
        village: villageRef.current.value,
        panNumber: panRef.current.value,
        aadhaarNumber: aadharRef.current.value
      };
    console.log(Obj);
    dispatch(saveData(Obj));
  };

  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleVoiceInput = (setField) => {
    resetTranscript();
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
    setField("");
  };

  const handleVoiceStop = (setField) => {
    SpeechRecognition.stopListening();
    setField(transcript);
  };
  useEffect(()=>{
    dispatch(getData())
  },[])

  return (
    <div className="App">
      <form className="form" onSubmit={submitHandler}>
        <div className="heading">Address Details</div>
        <div className="form-group">
          {listenfn ? <p className="listen">Listening .....</p> : <p></p>}
          <label className="lebel">First Name:</label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              id="firstName"
              value={firstName}
              ref={fnRef}
              onChange={(event) => setFirstName(event.target.value)}
              className="input"
            />
            {!listenfn && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceInput(setFirstName);
                  setListenfn(true);
                }}
              >
                🎙️
              </button>
            )}
            {listenfn && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceStop(setFirstName);
                  setListenfn(false);
                }}
              >
                Stop 🎙️
              </button>
            )}
          </div>
        </div>
        <div className="form-group">
          {listenln ? <p className="listen">Listening .....</p> : <p></p>}
          <label className="lebel">Last Name:</label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              id="lastName"
              value={lastName}
              ref={lnRef}
              onChange={(event) => setLastName(event.target.value)}
              className="input"
            />
            {!listenln && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceInput(setLastName);
                  setListenln(true);
                }}
              >
                🎙️
              </button>
            )}
            {listenln && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceStop(setLastName);
                  setListenln(false);
                }}
              >
                Stop 🎙️
              </button>
            )}
          </div>
        </div>
        <div className="form-group">
          {listenState ? <p className="listen">Listening .....</p> : <p></p>}
          <label className="lebel">State:</label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              id="state"
              value={state}
              ref={stateRef}
              onChange={(event) => setState(event.target.value)}
              className="input"
            />
            {!listenState && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceInput(setState);
                  setListenState(true);
                }}
              >
                🎙️
              </button>
            )}
            {listenState && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceStop(setState);
                  setListenState(false);
                }}
              >
                Stop 🎙️
              </button>
            )}
          </div>
        </div>
        <div className="form-group">
          {listenDistrice ? <p className="listen">Listening .....</p> : <p></p>}
          <div className="lebel">District:</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              id="district"
              value={district}
              ref={districtRef}
              onChange={(event) => setDistrict(event.target.value)}
              className="input"
            />
            {!listenDistrice && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceInput(setDistrict);
                  setListenDistrict(true);
                }}
              >
                🎙️
              </button>
            )}
            {listenDistrice && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceStop(setDistrict);
                  setListenDistrict(false);
                }}
              >
                Stop 🎙️
              </button>
            )}
          </div>
        </div>
        <div className="form-group">
          {listenVillage ? <p className="listen">Listening .....</p> : <p></p>}
          <label className="lebel">Village:</label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              id="village"
              value={village}
              ref={villageRef}
              onChange={(event) => setVillage(event.target.value)}
              className="input"
            />
            {!listenVillage && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceInput(setVillage);
                  setListenVillage(true);
                }}
              >
                🎙️
              </button>
            )}
            {listenVillage && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceStop(setVillage);
                  setListenVillage(false);
                }}
              >
                Stop 🎙️
              </button>
            )}
          </div>
        </div>
        <div className="form-group">
          {listenPan ? <p className="listen">Listening .....</p> : <p></p>}
          <label className="lebel">PAN Number:</label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              id="panNumber"
              value={panNumber}
              ref={panRef}
              onChange={(event) => setPanNumber(event.target.value)}
              className="input"
            />
            {!listenPan && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceInput(setPanNumber);
                  setListenPan(true);
                }}
              >
                🎙️
              </button>
            )}
            {listenPan && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceStop(setPanNumber);
                  setListenPan(false);
                }}
              >
                Stop 🎙️
              </button>
            )}
          </div>
        </div>
        <div className="form-group">
          {listenAadhar ? <p className="listen">Listening .....</p> : <p></p>}
          <div className="lebel">Aadhaar Number:</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              id="aadhaarNumber"
              value={aadhaarNumber}
              ref={aadharRef}
              onChange={(event) => setAadhaarNumber(event.target.value)}
              className="input"
            />
            {!listenAadhar && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceInput(setAadhaarNumber);
                  setListenAadhar(true);
                }}
              >
                🎙️
              </button>
            )}
            {listenAadhar && (
              <button
                type="button"
                className="mic"
                onClick={() => {
                  handleVoiceStop(setAadhaarNumber);
                  setListenAadhar(false);
                }}
              >
                Stop 🎙️
              </button>
            )}
          </div>
        </div>
        <button className="but" type="submit">
          Submit
        </button>
      </form>
      <div style={{color:"brown",fontWeight:"bold",fontSize:"large",textAlign:"center"}}><NavLink to='/list'>Click here</NavLink> to View the Already Added List </div>
    </div>
  );
};

export default EnteredForm;
