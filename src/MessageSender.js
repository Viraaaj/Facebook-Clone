import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import React, { useState } from "react";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";


function MessageSender() {

  const [{user}, disptach] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    }); 

    //after hitting enter it will clear the input

    setInput("");
    setImageUrl("");
  };


  return (
    <div className="messageSender">

      <div className="messageSender_top">
        <Avatar src={user.photoURL} />

        <form>
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          className="messageSender_input" placeholder={`What's on your mind, ${user.displayName}?`}/>

          <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="image URL (Optional)"/>

          <button onClick={handleSubmit} type="submit"  >
            Post
          </button>
        </form>
      </div>


      
      <div className="messageSender_bottom">

        <div className="messageSender_option">
          <VideocamIcon style={{ color:"red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color:"green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color:"orange" }} />
          <h3>feeling/Activity</h3>
        </div>

      </div>
    
    </div>
  )
}

export default MessageSender;
