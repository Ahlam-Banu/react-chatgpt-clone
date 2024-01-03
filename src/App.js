import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(null); //to hookup the input
  const [message, setMessage] = useState(null);

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try { 
      const response = await fetch("http://localhost:8000/completions", options);
      console.log("thsi is a test, after fetch")
      const data = await response.json();
      // console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error)
    }
  }

  console.log(message)

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        {/* Going to add a Button next to 'New Chat' button to toggle the sidebar */}
        <ul className="history">Previous Chats</ul>
        <nav>
          <p>Made by Ahlam</p>
        </nav>
      </section>
      <section className="main">
        <h1>AhlamGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            {/* this <div> will be used to contain input elements */}
            <input value = {value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>
              ➔
            </div>
          </div>
          <p className="info">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
