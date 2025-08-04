// Example React component
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// For example, if you want to use Authentication:
import { getAuth } from "firebase/auth";
// For Realtime Database:
import { getDatabase } from "firebase/database";
// etc.

function ImageShuffler() {
    
    const images = ["c1.jpg", "c2.png", "c3.jpg", "c4.jpg", "c5.jpg", "c6.jpg"];
    const [currentImage, setCurrentImage] = React.useState(images[0]);

    function shuffleImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentImage(images[randomIndex]);
    }

    return (
        <div>
            <img id="myImage" src={currentImage} alt="Image" width="300" />
            <button onClick={shuffleImage}>Click Me</button>
        </div>
    );
}