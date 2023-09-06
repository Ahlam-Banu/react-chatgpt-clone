const App = () => {
  return (
    <div className="app">
      <section className="sidebar">
        <button>+ New Chat</button>
        {/* Going to add a Button next to 'New Chat' button to toggle the sidebar */}
        <ul className="history"></ul>
        <nav> {/* <nav> is used to semantically mark up navigation menus, which can include links to various pages or sections of the website.
It is often placed in the header or footer of a webpage to provide navigation options for users. */}
          <p>Made by Ahlam</p>
        </nav>
      </section>
      <section className="main"></section>
    </div>
  );
}

export default App;
