import React from 'react';

function ClientQuestionnaire(props) {

    return (
        <div className="App">
            <h1>ClientQuestionnaire</h1>
            <button onClick={() => props.onClickNext(props.stepData)}>Next</button>
        </div>
    );
}

export default ClientQuestionnaire;
