import './loadingScreen.css';

function loadingScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="text">Vă rugăm să așteptați...</p>
        <div class="loader"></div>
      </header>
    </div>
  );
}

export default loadingScreen;
