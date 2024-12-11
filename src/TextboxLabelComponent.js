import React, { useState } from "react";
import Happy from './happy.png';
import Sad from './sad.png';
import Like from './like.png';

function TextboxLabelComponent() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);
    if (value === "happy") {
      setImage(Happy);
    } else if (value === "like") {
      setImage(Like);
    } else if (value === "sad") {
      setImage(Sad);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter emotion (happy, sad, like)"
      />
      <div>
        {image && <img src={image} alt={text} />}
      </div>
    </div>
  );
}

export default TextboxLabelComponent;
