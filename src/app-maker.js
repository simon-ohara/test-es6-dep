import App from './App';

const NAME = 'Test App'
    , DESCRIPTION = 'An application to be used as a dependency in the transpiled ES6 import test';

let app = new App(NAME, DESCRIPTION);

export { app };

export App from './App';
