import Render from './assets/render/Rendered';

export default async function Start(DOM) {
  
    DOM.innerHTML = (`
        <div>
            <div id='JS'></div>
        </div>
    `)
  
    // Dynamically import and execute the Render function
    Render();
  }
  