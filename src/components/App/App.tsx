const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Star Wars Characters</h1>
      </header>
      <main className="main">
        <ul className="characters"></ul>
      </main>
    </div>
  );
};

export default App;
