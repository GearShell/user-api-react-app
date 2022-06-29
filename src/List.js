import axios from 'axios';
import React, {useState , useEffect} from 'react';
import './List.css';

function List() {

  useEffect(() => {
    getData();
  }, [])
  

  const [result, setResult] = useState([]);

  const getData = () => {
    axios.get("https://dummyapi.io/data/v1/user", {
        headers: {
          "app-id": "628f806631241c612e9bee76"
      }}).then((res) => {
          setResult(res.data.data);
          console.log(res.data.data[0]);
      })
    }

  const deleteUser = (id) => {
    axios.delete(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: {
        "app-id": "628f806631241c612e9bee76"
    }}).then((res) => {
      alert("Deletion Sucessfull")
      getData();
    })
  }

  return (
      <div className='list'>
        <div>
          <h1>All User List</h1>
          
          <div className='data_card'>
            {
            result.map((value) => {
              return (
                <div className="card" style={{width: "28rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">ID: {value.id}</h5>
                        <h5 className="card-title">First Name: {value.firstName}</h5>
                        <h5 className="card-title">Second Name: {value.lastName}</h5>
                        <button type="button" className="btn btn-primary" onClick={() => deleteUser(value.id)}>
                          Delete<span className="badge bg-secondary"></span>
                        </button>
                    </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  );
};

export default List;
