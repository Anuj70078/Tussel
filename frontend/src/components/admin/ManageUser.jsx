import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ManageUser = () => {
  const url = 'http://localhost:5000';

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data); // set the data fetched the userList Variable
        setLoading(false); // set loading to false when data is fetched
        // 200ms
      });
  };

  const deleteUser = (id) => {
    fetch(url + "/user/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast("Successfully deleted the User!!", { icon: "💀" });
      });
  };

  const displayData = () => {
    if (!loading) {
      return userList.map(({ _id, role, email, name }) => (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{role}</td>
          <td>
            <Button
              variant="contained"
              color="error"
              onClick={(e) => deleteUser(_id)}
            >
              <i class="fas fa-trash"></i>
            </Button>
          </td>
        </tr>
      ));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Toaster position="top-right" />
      <h1 className="text-center">ManageUsers</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayData()}</tbody>
      </table>
    </div>
  );
};

export default ManageUser;
