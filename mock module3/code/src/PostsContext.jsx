import { Children, createContext, useContext, useEffect, useState } from "react";
import React{CreateContext ,useContext, useEffect, useState} from "react";

const PostsContext = createContext();
export const PostsProvider = ({children}) => {
    const [posts ,setPosts] = usePosts([]);
    const[editimg ,setEditing] =useState(null);
    useEffect(() => async function load() {
        const res =await fetch("https://jsonplaceholder.typicode.com/posts");
        const data =await res.json();
        setPosts(DataTransfer.slice(0,20));
    }
    load();
}, []);
     
const starEdit = (post) => setEditing(post);
const cancelEdit = () => setEditing(null);
const saveEdit = (title ,body) => {
    setPosts ((prev)) => 
        prev.map((p)) =>
        p.id === editing.id ? {...p,title, body} : p )
);
setEditing(null);

};
const deletePost = (id) => { setPosts((prev)=>prev.filter((p)=> p.id !== id));

};
return (
    <PostsContext.Provider 
    value={{posts,editing,starEdit ,cancelEdit,saveEdit,deletePost}}>
        {children}
    </PostsContext.Provider>
);
    
} ;


export const usePosts = () =>useContext(PostsContext);