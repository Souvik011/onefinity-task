import { FormActions } from "./FormSlice";
export const getData = () => {
    return async (dispatch) => {
      const getFormData = async (email) => {
        try {
          const response = await fetch(
            `https://first-dummy-ef331-default-rtdb.firebaseio.com/onefinityForm.json`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log(data);
          let itemsArray = [];
          if (!!data) {
            itemsArray = Object.keys(data).map((i) => {
              return {
                id: i,
                firstName:data[i].fastName,
                lastName:data[i].lastName,
                state:data[i].state,
                district:data[i].district,
                village:data[i].village,
                panNumber:data[i].panNumber,
                aadhaarNumber:data[i].aadhaarNumber
              };
            });
          }
          dispatch(
              FormActions.addData(itemsArray)
          );
        } catch (error) {
          console.log(error.message);
        }
      };
      getFormData();
    };
  };

export const saveData = (Obj) => {
  return async (distatch) => {
    const postFormData = async () => {
      try {
        const response = await fetch(
          `https://first-dummy-ef331-default-rtdb.firebaseio.com/onefinityForm.json`,
          {
            method: "POST",
            body: JSON.stringify(Obj),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          console.log(data);
          distatch(getData());
      } catch (err) {
        alert(err.message)
      }
    };
    postFormData();
  };
};
export const editData = (Obj) => {
    return async (dispatch) => {
      const editFormData = async () => {
        try {
          const response = await fetch(
            `https://first-dummy-ef331-default-rtdb.firebaseio.com/onefinityForm/${Obj.id}.json`,
            {
              method: "PUT",
              body: JSON.stringify({
                firstName:Obj.fastName,
                lastName:Obj.lastName,
                state:Obj.state,
                district:Obj.district,
                village:Obj.village,
                panNumber:Obj.panNumber,
                aadhaarNumber:Obj.aadhaarNumber
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log(data);
          dispatch(getData());
        } catch (error) {
          alert(error.message);
        }
      };
      editFormData();
    };
  };
  
  export const deleteData = (id) => {
    return async (dispatch) => {
      const deleteFormData = async () => {
        try {
          const response = await fetch(
            `https://first-dummy-ef331-default-rtdb.firebaseio.com/onefinityForm/${id}.json`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log( data);
          dispatch(getData());
        } catch (error) {
          alert(error.message);
        }
      };
      deleteFormData();
    };
  };
  