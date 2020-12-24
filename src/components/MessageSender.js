import { Avatar, Button, Input } from '@material-ui/core'
import React , {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import db from '../firebase'
import firebase from 'firebase'
import { storage } from '../firebase'
import {firebaseConfig} from '../firebase'

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [{user}, dispatch] = useStateValue();

    const [fileUrl, setFileUrl] = useState(null);

    const handleImageAsFile = async  (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
        console.log(fileUrl)
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input || !fileUrl){
            alert('Please enter the post')
            return
        }

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username: user.displayName,
            image: fileUrl
        })
        
        setInput('')
        setImageURL('')
        setFileUrl(null)
    }   

    

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="messageSender__input" value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={`What's on your mind? ${user.displayName}`}/>
                   
                    <Input type="file" onChange={handleImageAsFile}/>
                    
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
