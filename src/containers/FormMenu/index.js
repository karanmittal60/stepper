import React, {useState} from 'react'
import './FormMenu.css'
import Steps from "./../../components/Steps";
import SelectedStrategy from "./../../components/SelectStrategy";
import ResearchOrderEntry from "./../../components/ResearchOrderEntry";
import ClientQuestionnaire from "./../../components/ClientQuestionnaire";
import SelectedProductType from "./../../components/SelectedProductType";

function FormMenu (props){

    const [state, setState] = useState({

        stepperArray: [
            {id: 1, label: 'Select Strategy', active: true, done: false, disabled: false, editable: true},
            {id: 2, label: 'Client Questionnaire', active: false, done: false, disabled: true, editable: false},
            {id: 3, label: 'Select Product Type', active: false, done: false, disabled: true, editable: false},
            {id: 4, label: 'Research/Order Entry', active: false, done: false, disabled: true, editable: false},
        ]
    });

    const onClickNext = (stepData) => {
        // console.log("==stepData==", stepData);
        let stepArayAfterChange = [];

        stepperArray.map((step, index) => {
            if ( step.id ===  1) {
                step.active = true;
                step.done = true;
                step.editable = false;
                step.disabled = false;
                stepArayAfterChange.push(step)
            } else if (step.id ===  stepData.id) {
                step.active = true;
                step.done = true;
                step.editable = false;
                step.disabled = false;
                stepArayAfterChange.push(step)
            } else if (step.id ===  stepData.id+1) {
                step.active = true;
                step.done = false;
                step.editable = true;
                step.disabled = false;
                stepArayAfterChange.push(step)
            }else {
                stepArayAfterChange.push(step)
            }
        });
        // console.log("==stepArayAfterChange==",stepArayAfterChange);
        setState((prevState => {
            return {...prevState, stepperArray: stepArayAfterChange}
        }))

    }


    let {stepperArray} = state;

    const onClickStep = (id) => {
        // console.log("==id==", id);
        let stepArayAfterChange = [];

        stepperArray.map((step, index) => {

            if (step.id < id){
                step.active = true;
                step.done = true;
                step.editable = false;
                step.disabled = false;
                stepArayAfterChange.push(step)
            } else if (step.id === id){
                step.active = true;
                step.done = false;
                step.editable = true;
                step.disabled = false;
                stepArayAfterChange.push(step)
            } else {
                step.active = false;
                step.done = false;
                step.editable = false;
                step.disabled = true;
                stepArayAfterChange.push(step)
            }
        });

        setState((prevState => {
            return {...prevState, stepperArray: stepArayAfterChange}
        }))
    }
    return(
        <div className="">
            <div className="container">
                <div className="md-stepper-horizontal orange">
                    {
                        stepperArray.map((step, index) => {
                            return <Steps key={step.id}
                                          lable={step.label}
                                          active={step.active}
                                          done={step.done}
                                          disabled={step.disabled}
                                          editable={step.editable}
                                          onClickStep={onClickStep}
                                          id={step.id}
                            />

                        })
                    }
                </div>
            </div>
            <div>
                {
                    stepperArray.map((steps, index) => {
                        if (steps.id === 1 && steps.editable === true ){
                            return (
                                <SelectedStrategy key={steps.id}
                                                  stepData={steps}
                                                  onClickNext={onClickNext}/>
                            )
                        } else if (steps.id === 2 && steps.editable === true ){
                            return (
                                <ClientQuestionnaire key={steps.id}
                                                     stepData={steps}
                                                     onClickNext={onClickNext}/>
                            )
                        } else if (steps.id === 3 && steps.editable === true ){
                            return (
                                <SelectedProductType key={steps.id}
                                                     stepData={steps}
                                                     onClickNext={onClickNext}/>
                            )
                        } else if (steps.id ===4 && steps.editable === true ) {
                            return (
                                <ResearchOrderEntry key={steps.id}
                                                    stepData={steps}
                                                    onClickNext={onClickNext}/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default FormMenu;