import React from 'react';

function SelectedStrategy(props) {

    return (
        <div className="App">
            <h1>SelectedStrategy</h1>
            <button onClick={() => props.onClickNext(props.stepData)}>Next</button>

        </div>
    );
}

export default SelectedStrategy;
