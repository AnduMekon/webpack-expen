import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

class Ck extends React.Component {
    render() {
        return (
            <div>
            <h1> this is ck</h1>
            </div>
        )
    }
}

ReactDOM.render(< Ck />, document.getElementById('app'));
