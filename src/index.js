import React from 'react';
import reactDom from 'react-dom';
import BoardView from './components/Board';
import './main.scss';
import './styles.scss';

const App = () => {
    return (
        <BoardView/>
    )
};

reactDom.render(<App/>, document.getElementById("root"))
