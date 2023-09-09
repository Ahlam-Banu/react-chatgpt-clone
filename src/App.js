const App = () => {
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
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container"> {/* this <div> will be used to contain input elements */}
            <input placeholder="Send a message"/>
            <div id = "submit">➔</div>
          </div>
          <p className="info">
          Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
