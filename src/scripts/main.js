import ReactDOM from 'react-dom';

// import ReactJs components
import App from '../components/app.jsx';

/*
* create React root element and insert it into document
*/
const bootstrapReact =
  () => ReactDOM.render(
            <App />,
            document.getElementById('insertReactHere')
        );


window.addEventListener('DOMContentLoaded', bootstrapReact );


console.log('le bundle a été généré !');
