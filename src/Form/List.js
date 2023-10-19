import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData, editData } from "../Store/FormThunk";
import { NavLink } from "react-router-dom";

const List = () => {
  const formVal = useSelector((state) => state.form.data);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(null);
  const editHandler = (data) => {
    setEdit(data);
  };
  const deleteHandler = (data) => {
    setEdit(null);
    dispatch(deleteData(data.id));
  };
  const saveEditHandler = (data) => {
    setEdit(null);
    dispatch(editData(data));
  };
  const show = (
    <ul style={{ maxHeight: "20rem", overflowY: "scroll" }}>
      {formVal.map((data) => (
        <li
          key={data.id}
          style={{
            backgroundColor: "blue",
            borderBottom: "2px solid red",
            marginBottom: "1rem",
            fontFamily: "cursive",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div>{` Name : ${data.firstName} ${data.lastName}`}</div>
            <div>{`State: ${data.state} , District: ${data.district} , Village: ${data.village}`}</div>
            <div>
              {`PAN Number : ${data.panNumber} , Aadhar : ${data.Aadhar}`}{" "}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <button
              style={{ color: "white", backgroundColor: "blue" }}
              onClick={() => editHandler(data)}
            >
              Edit
            </button>
            <button
              style={{ color: "white", backgroundColor: "red" }}
              onClick={() => deleteHandler(data)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {!edit && <div>{show} </div>}
      {edit && (
        <div>
          <form
          style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}
            onSubmit={(e) => {
              e.preventDefault();
              const updatedForm = {
                ...edit,
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                state: e.target.state.value,
                district: e.target.district.value,
                village: e.target.village.value,
                panNumber: e.target.panNumber.value,
                aadhaarNumber:e.target.aadhaarNumber.value,
              };
              saveEditHandler(updatedForm);
            }}
          >
            <label>
                    firstName:
                    <input type="text" name="firstName" defaultValue={edit.firstName} />
            </label>
            <label>
                    lastName:
                    <input type="text" name="lastName" defaultValue={edit.lastName} />
            </label>
            <label>
                    state:
                    <input type="text" name="state" defaultValue={edit.state} />
            </label>
            <label>
                    district:
                    <input type="text" name="district" defaultValue={edit.district} />
            </label>
            <label>
                    village:
                    <input type="text" name="village" defaultValue={edit.village} />
            </label>
                  <label>
                    pan Number:
                    <input type="text" name="panNumber" defaultValue={edit.panNumber} />
            </label>
            <label>
                    Aadhar Number:
                    <input type="text" name="aadhaarNumber" defaultValue={edit.aadhaarNumber} />
            </label>
            <button type="submit" variant="outline-success" style={{marginRight:"1.5rem"}}>Save</button>
            <button onClick={() => setEdit(null)}>Cancel</button>
          </form>
        </div>
      )}
      <div style={{color:"brown",fontWeight:"bold",fontSize:"large",textAlign:"center"}}><NavLink to='/form'>Click here</NavLink> to add more details into the list </div>
   
    </div>
  );
};

export default List;
