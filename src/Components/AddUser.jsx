import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";

import PostApi from "../service/PostApi";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const AddUser = () => {
  const [btn, setBtn] = useState(true);
  const [editVal, setEditVal] = useState();

  const empty = {
    name: "",
    u_name: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState(empty);

  const addUserDetails = async () => {
    await PostApi(user);
    setUser({
      name: "",
      u_name: "",
      email: "",
      phone: "",
    });
    fetchData();
  };

  const onValueChange = (e) => {
    //setValue(e.target.value )
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log("name = " + e.target.name + " value = " + user);
    console.log(user);
  };

  //.................... featch data ........................
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url = await fetch(`http://localhost:4000/get`);
    const store = await url.json();
    setData(store);
  };
  // ........ delete data ...............
  const del = async (id) => {
    const url = await fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  // ...........  edit
  const edit = async (id) => {
    console.log("id", id);
    const res = await fetch(`http://localhost:4000/get/${id}`);
    const result = await res.json();
    console.log("result.....", result);
    setUser(result);
    setEditVal(id);
    setBtn(false);
  };

  const edit2 = async () => {
    let edit_id = editVal;
    await fetch(`http://localhost:4000/update/${edit_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log("data", user);
    fetchData();
    setBtn(true);
    //setHandle(emptyInput);
    setUser(empty);
  };

  // const edit2 = async () => {
  //   const edit_id = editVal;
  //   const url = await fetch(`http://localhost:4000/update/${edit_id}`, {
  //     method: "PUT",
  //     headers: { "content-Type": "application/json" },
  //     body: JSON.stringify(user),
  //   });
  //   fetchData();
  //   setBtn(true);
  // };

  return (
    <>
      <Container>
        <Typography variant="h4"> Add User</Typography>
        <FormControl>
          <InputLabel>Full Name</InputLabel>
          <Input
            value={user.name}
            onChange={(e) => {
              onValueChange(e);
            }}
            name="name"
          />
        </FormControl>

        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input
            value={user.u_name}
            onChange={(e) => {
              onValueChange(e);
            }}
            name="u_name"
          />
        </FormControl>

        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            value={user.email}
            onChange={(e) => {
              onValueChange(e);
            }}
            name="email"
          />
        </FormControl>

        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            value={user.phone}
            onChange={(e) => {
              onValueChange(e);
            }}
            name="phone"
          />
        </FormControl>
        <FormControl>
          {/* <Button
            onClick={() => {
              addUserDetails();
            }}
            variant="contained"
          >
            Add User
          </Button> */}
          {btn ? (
            <Button
              onClick={() => {
                addUserDetails();
              }}
            >
              Add User
            </Button>
          ) : (
            <Button
              onClick={() => {
                edit2();
              }}
            >
              edit user
            </Button>
          )}
        </FormControl>
      </Container>

      {/*   ''''''''''''''''''''''''''      Show data ........................ */}

      <table
        cellpadding="20"
        style={{ border: "1px solid black", borderCollapse: "collapse" }}
      >
        <tr>
          <th style={{ border: "2px solid black" }}>Name</th>
          <th style={{ border: "2px solid black" }}>User Name</th>
          <th style={{ border: "2px solid black" }}>Email</th>
          <th style={{ border: "2px solid black" }}>Phone</th>
          <th style={{ border: "2px solid black" }}>Actions</th>
        </tr>
        {data.map((elem, index) => {
          return (
            <tr>
              <td
                style={{
                  height: "100px",
                  width: "100px",
                  border: "2px solid black",
                }}
              >
                {elem.name}
              </td>
              <td
                style={{
                  height: "100px",
                  width: "100px",
                  border: "2px solid black",
                }}
              >
                {elem.u_name}
              </td>
              <td
                style={{
                  height: "100px",
                  width: "100px",
                  border: "2px solid black",
                }}
              >
                {elem.email}
              </td>
              <td
                style={{
                  height: "100px",
                  width: "100px",
                  border: "2px solid black",
                }}
              >
                {elem.phone}
              </td>
              <td
                style={{
                  height: "100px",
                  width: "100px",
                  border: "2px solid black",
                }}
              >
                <Button
                  onClick={() => {
                    edit(elem._id);
                  }}
                >
                  Edit
                </Button>
                <button
                  onClick={() => {
                    del(elem._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default AddUser;

// ..........   edit button togle.............

// {btn ? (
//   <Button
//     variant="contained"
//     onClick={() => {
//       edit();
//     }}
//   >
//     Add User
//   </Button>
// ) : (
//   <Button
//     variant="contained"
//     onClick={() => {
//       edit2();
//     }}
//   >
//     Edit User
//   </Button>
// )}
