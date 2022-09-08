import React, { useState } from "react";
import  PostList  from "./components/PostList";
import MyButton from "./components/UI/MyButton";
import './styles/app.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', desc: 'Learn JavaScript today'},
    {id: 2, title: 'JavaScript2', desc: 'Learn JavaScript today2'},
    {id: 3, title: 'JavaScript3', desc: 'Learn JavaScript today3'},
    {id: 4, title: 'JavaScript4', desc: 'Learn JavaScript today4'},
    {id: 5, title: 'JavaScript5', desc: 'Learn JavaScript today5'},
  ])

  const addPost = () => {

  }

  return (
    <div className="App">
      <button className="myButton">bbb</button>
      <form>
        <input type="text" placeholder="Enter Title" />
        <input type="text" placeholder="Enter Description" />
        <MyButton disabled>Add</MyButton>
        {/* <button onClick={addPost}>Add</button> */}
      </form>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
