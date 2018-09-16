import React from 'react';


const FormFields = (props) => {

    let fieldArray = [];
    const convertToArray = () => {
        for(let element in props.formData) {
            fieldArray.push({
                id: element,
                settings: props.formData[element]
            });
        };
    };

    const renderFields = () => {
        return fieldArray.map((item, idx) => {
            return(
                <div key={idx} className='form_element'>
                    {renderTemplates(item)}
                </div>
            );
        });
    };
    
    const renderTemplates = (item) => {
        const values = item.settings;
        switch(values.element) {
            case 'input':
                return  (
                    <div>
                        {showLabels(values.label, values.labelText)}
                        <input 
                            {...values.config}
                            onChange = {(event) => changeHandler(event, item.id)}
                        />
                    </div>
                );
        };
    };

    const changeHandler = (event, id) => {
        
        let newState = props.formData;
        console.log('inside changeHandler:', id)
        newState[id].value = event.target.value;
        props.captureChange(newState);
    }

    const showLabels = (showLabel, labelText) => {
        return showLabel ? 
        <label>{labelText}</label> : null;
    }
    
    return(
        <div>
            {convertToArray()}
            {renderFields()}
        </div>
    );
};

export default FormFields;