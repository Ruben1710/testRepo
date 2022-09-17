import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/app.css'

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'bb' },
    { id: 2, title: 'cc', body: 'cc' },
    { id: 3, title: 'bb', body: 'dd' },
    { id: 4, title: 'dd', body: 'aa' }
  ])


  const [selectedValue, setSelectedValue] = useState('')

  const [searchValue, setSearchValue] = useState('')
 
  const getValue = (a) => {
    return a;
  }

  useEffect(() => {
    console.log(getValue(searchValue),'effect');
  }, [selectedValue])

  useMemo(() => {
    console.log(getValue(searchValue),'memo');
  }, [selectedValue])
  // const [searchedAndSortedPosts, setSearchedAndSortedPosts] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (val) => {
    setSelectedValue(val)
    setPosts([...posts].sort((a, b) => a[val] > b[val] ? 1 : -1))
  }


  return (
    <div className="App">

      

      <PostForm create={createPost} />
      <hr style={{ margin: '20px auto', width: '800px' }} />
      <div style={{ width: '800px', margin: 'auto' }}>
        <MySelect
          title="Sort By"
          options={[
            { value: 'title', name: 'Title' },
            { value: 'body', name: 'Description' },
          ]}
          value={selectedValue}
          onChange={sortPosts}
        />

        <MyInput placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      </div>
      {
        posts.length
          ? <PostList posts={posts} remove={deletePost} title="Posts About Js" />
          : <h2 style={{ color: 'aqua', textAlign: 'center', fontSize: '50px' }}>
            Posts Not Found
          </h2>
      }
    </div>
  );
}

export default App;
