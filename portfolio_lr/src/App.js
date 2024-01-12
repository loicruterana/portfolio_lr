import React from 'react';
import './App.css';

//
function App() {
  return (
    <div className='body'> 
      <div class="flareTransition">
        <div class="flareOverlay">
          <img class= 'flare' src ='/images/flare2.gif' alt='flare'/>
        </div>
      </div>
      <div class="noise"></div>
      <div class="container">
          <div class="bokeh">
            {/* <img class= 'floaty' src ='/images/bokeh.png' alt='bokeh'/>
            <img class= 'floaty2' src ='/images/bokeh.png' alt='bokeh'/>
             */}
          </div>
          <div class="text">
            <h5 class='flipx'>Designer & Developer</h5>
            <h1 class='flipx'>Loïc Ruterana</h1>
            {/* <img class= 'flipx' src ='/images/titlz.png' alt='title' /> */}
          </div>
          <div class= 'about'>
          <p>Passionné de cinéma, de code et de design, j'aime mélanger ces univers pour créer des univers originaux</p>
          </div>
          <div class= 'about'>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
          </div>
      </div>
      <div class="line">
        <img class='jumpy' src='/images/Ligne.png' alt='line'/>
      </div>
      <div class="navbar">
        <p class="nav">Accueil</p>
        <p class="nav">À propos</p>
        <p class="nav">Réalisations</p>
        <p class="nav">Contact</p>
      </div>
    </div>
  );
}

export default App;
