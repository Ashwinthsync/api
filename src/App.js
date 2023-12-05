import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import Post from './components/Post';
import axios from 'axios';

//--Fetch Using API--
/*function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {setPosts(data);
    });
  },[]);
  return (
    <div className="App">
      <div className="container">
      { posts ? (
        posts.map((post) => {
            return <Post key={post.id} {...post} />; 
          })
      ) : (
          <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
          </div>
      )}
      </div> 
    </div>  
  );
}
*/
 

//Fetch Post method
/*function App() {
  const [postId, setPostId] = useState(null);
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
return (
  <div className="card text-center m-3">
      <h5 className="card-header">POST Request with React Hooks</h5>
      <div className="card-body">
          Returned Id: {postId}
      </div>
  </div>
);
}
*/

//Fetch Put method
/*function App() {
const [postId, setPostId] = useState(null);
useEffect(() => {
  // PUT request using fetch inside useEffect React hook
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
  };
  fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

return (
  <div className="card text-center m-3">
      <h5 className="card-header">PUT Request with React Hooks</h5>
      <div className="card-body">
          Returned Id: {postId}
      </div>
  </div>
);
}
*/


//Axios GET method
/*function App() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
    })
  return(
    <div className="App">
      {users.map(u => {
        return (
          <div className="container" key = {u.id}>
            <div className="card mt-3 card-body">
            <h5 className="card-title">{u.name}</h5>
            </div>
          </div>
        )
      })}
    </div>
  );
}
*/


//--Axios POST method--
function App() {
  const [users,setUsers] = useState([]);
  const [name,setName] = useState("");
  const[trigger,setTrigger] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
    },[])

    const postUser = () => {
      axios.post('https://jsonplaceholder.typicode.com/users',{name:name})
        .then(res => setUsers([...users,res.data]))
      }
  return(
    <div className="App">
      {users.map((u,i) => {
        return (
          <div className="container" key={i}>
            <h5 className="card-title">{u.name}</h5>
          </div> 
        ) 
      })}
      <div className="container">
           <input type="test" value={name} onChange={(e) =>setName(e.target.value)}></input>
            <button onClick={postUser}>Post</button>
       </div>
    </div>
  );
}


//--Axios PUT method--
/*function App() {
  const [users,setUsers] = useState([]);
  const [name,setName] = useState("");
  const[trigger,setTrigger] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => setUsers(res.data))
    },[])

  const updateUser = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${1}`,{name:name})
    .then(res => setUsers(res.data))
  }
  return (
      <div className="container">
        {users.name}<br/>
        <input type="test" value={name} onChange={(e) =>setName(e.target.value)}></input>
        <button onClick={updateUser}>Update</button>  
      </div>
  )
}
*/

export default App;
