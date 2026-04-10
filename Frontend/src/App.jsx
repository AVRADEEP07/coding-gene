import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import pkg from 'react-simple-code-editor';
const Editor = pkg.default ?? pkg;
import Prism from "prismjs"
import Markdown from "react-markdown"
import axios from 'axios' 
import "prismjs/components/prism-javascript"

 

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
const [review , setReview]=useState('')
const [showHome, setShowHome] = useState(true)

  useEffect(() => {
    Prism.highlightAll();
  }, []);

async function reviewCode(){

const response = await axios.post('http://coding-gene.onrender.com/ai/get-review', {code})
setReview(response.data)
console.log(response.data)
}
if (showHome) {
  return (
    <div className="home">
      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>
      <div className="home-content">
        <h1 className="home-title">CodingGene</h1>
        <p className="home-subtitle">AI-powered code reviewer for any language</p>
        <button className="home-btn" onClick={() => setShowHome(false)}>
          Start Reviewing →
        </button>
      </div>
    </div>
    
  );
}


 return (
  
    <>
    {/* Add this navbar at the top */}
    <nav className="navbar">
      <span className="logo">CodingGene</span>
      <button onClick={() => setShowHome(true)}>🏠 Home</button>
    </nav>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => Prism.highlight(code , Prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: ' "Fira code", "Fira Mono", monospace',
                fontSize: 18,
                
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}

            />

            
          </div>
          <div 
          onClick={reviewCode}
          className="review">Review</div>
        </div>
        <div className="right">
          <Markdown>{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App
