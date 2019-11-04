import React from 'react';

function Steps (props) {

    let {active, done, disabled, editable, lable, id} = props;

     return (
         <div className={`md-step ${active ? 'active' : ''} ${done ? 'done': ''} ${editable ? 'editable': ''} ${disabled ? 'disabled': ''}`}
              onClick={disabled ? ()=>{} :() => props.onClickStep(id)}
         >
             <div className="md-step-title">{lable}</div>
             <div className="md-step-circle">
                 {/*<span>*/}
                     {
                         done ? <i className="fas fa-check"></i> : ''
                     }
                 {/*</span>*/}
             </div>
             <div className="md-step-bar-left"></div>
             <div className="md-step-bar-right"></div>
         </div>
    );
}

export default Steps;