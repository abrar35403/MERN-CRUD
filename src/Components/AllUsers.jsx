// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const AllUsers = () => {
//     const [data, setData] = useState([]);
//     const fetchData = async () => {
//       const url = await fetch(`http://localhost:4000/get`);
//       const store = await url.json();
//       setData(store);
//     };
//     useEffect(() => {
//       fetchData();
//     }, []);
//     // ......   delete
//     // let del = async (id) => {
//     //   console.log(id);
//     //   const url = await fetch(`http://localhost:4000/delete/${id}`, {
//     //     method: "DELETE",
//     //   });
//     //   fetchData();
//     // };
//   // ...........  edit
//   const edit=async(id,data)=>{
//     console.log(id);
//     // const url=await fetch(`http://localhost:4000/update/${id}`,{})
//     await axios.put(`http://localhost:4000/update/${id}`,data)
//   }
//   return (
//   <table
//     cellpadding="20"
//     style={{ border: "1px solid black", borderCollapse: "collapse" }}
//   >
//     <tr>
//       <th style={{ border: "2px solid black" }}>Name</th>
//       <th style={{ border: "2px solid black" }}>User Name</th>
//       <th style={{ border: "2px solid black" }}>Email</th>
//       <th style={{ border: "2px solid black" }}>Phone</th>
//       <th style={{ border: "2px solid black" }}>Actions</th>
//     </tr>
//     {data.map((elem, index) => {
//       return (
//         <tr>
//           <td
//             style={{
//               height: "100px",
//               width: "100px",
//               border: "2px solid black",
//             }}
//           >
//             {elem.name}
//           </td>
//           <td
//             style={{
//               height: "100px",
//               width: "100px",
//               border: "2px solid black",
//             }}
//           >
//             {elem.u_name}
//           </td>
//           <td
//             style={{
//               height: "100px",
//               width: "100px",
//               border: "2px solid black",
//             }}
//           >
//             {elem.email}
//           </td>
//           <td
//             style={{
//               height: "100px",
//               width: "100px",
//               border: "2px solid black",
//             }}
//           >
//             {elem.phone}
//           </td>
//           <td
//             style={{
//               height: "100px",
//               width: "100px",
//               border: "2px solid black",
//             }}
//           >
//             <button
//               onClick={() => {
//                 edit(elem._id);
//               }}
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => {
//                 del(elem._id);
//               }}
//             >
//               Delete
//             </button>
//           </td>
//         </tr>
//       );
//     })}
//   </table>
//   );
// };


// export default AllUsers;

















// // ......   delete
//   // let del = async (id) => {
//   //   //console.log(id);
//   //   const url = await fetch(`http://localhost:4000/delete/${id}`, {
//   //     method: "DELETE",
//   //   });
//   //   fetchData();
//   // };

//   // ...........  edit
//   // const edit = async (id, data) => {
//   //   console.log(id);
//   //   // const url=await fetch(`http://localhost:4000/update/${id}`,{})
//   //   await axios.put(`http://localhost:4000/update/${id}`, data);
//   //   setUser({
//   //     name: "data.name",
//   //     u_name: "",
//   //     email: "",
//   //     phone: "",
//   //   });

//   //   setBtn(false);
//   // };


//   // const edit2 = async () => {
//   //   setBtn(true);
//   // };



