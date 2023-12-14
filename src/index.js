import './assets/css/index.css';

// Lazy loads 

const loadStart = async () => {
    const module = await import('./start');
    return module.default;
};

const loadUniqueHash = async () => {
    const module = await import('./assets/security/hashes');
    return module.default;
};


const DOM = document.querySelector('#app');

Promise.all([loadStart(), loadUniqueHash()]).then(([Start, UniqueHash]) => {
    DOM.id = UniqueHash();
    Start(DOM);
});
