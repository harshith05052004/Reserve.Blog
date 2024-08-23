import Header from "../../components/header/Header"
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/Sidebar"
import React from 'react';
import{useState,useEffect} from 'react';
import "./Home.css"
import axios from "axios";
import { frontend } from "../../url";
import { useLocation } from "react-router";

function Home() {
  const [posts,setPosts]=useState([]);
  const {search}= useLocation();//for a particular user we can fetch for it all blogs of him
  useEffect(()=>{
    const fetchPosts=async()=>{
      try {
        const res=await axios.get(`${frontend}/posts`+search)
        setPosts(res.data);
      } catch (err) {
         if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
         }
         
      }
      
    }
    fetchPosts();
  },[search])
  return (
    //here iam propping posts , now move to posts 
    <>
        
        <Header/>
        <div className="home">
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
    </>
  );
}

export default Home;