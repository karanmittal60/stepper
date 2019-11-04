import React from 'react';

function SelectedProductType(props) {

    return (
        <div className="App">
            <h1>SelectedProductType</h1>
            <button onClick={() => props.onClickNext(props.stepData)}>Next</button>

        </div>
    );
}

export default SelectedProductType;
