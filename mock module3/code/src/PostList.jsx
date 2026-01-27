import React, {useState} from "react";
import {usePosts} from "./PostsContext";

const PostList = () =>{
 const {posts ,editing ,starEdit ,cancelEdit,saveEdit,deleteEdit} =usePosts();
 const [title,setTitle ] =useState("");
 const [body,setBody] =useState("");
 React.useEffect(()=>{
    if(editing){
        setTitle(editing.title);
        setBody(editing.body);
    }
 },[editing]);
}
return(
    <div>
        {editing&& (
            <form className="edit-box"
        onSubmit={(e)=>{e.preventDefault();
            saveEdit(title,body);
        }}
    > 
    <h2>Edit post</h2>
    <input value={title}
    onChange={(e)=> setTitle(e.target.value)} placeholder="title" />
    </form>
    )
        }
    </div>
)


export default PostList;