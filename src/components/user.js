import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields';

class User extends Component {
    state = {
        formData: {
            name:{
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name:',
                config:{
                    type:'input',
                    name: 'name',
                    placeholder: 'enter your firstname'
                }
            },
            lastname:{
                element: 'input',
                value:'',
                label:true,
                labelText: 'LastName:',
                config:{
                    type:'input',
                    name: 'name',
                    placeholder: 'enter your lastname'
                }
            }
        }
    };

    captureChange = (newState) => {
        console.log('inside captureChange: ', JSON.stringify(newState,2));
        this.setState({
            formData: newState
        });
    };

    submitFormData = (event) => {
        event.preventDefault();
        let datatoSubmit = []
        for(let key in this.state.formData) {
            datatoSubmit.push({
                key:key,
                data: this.state.formData[key].value
            });
        };
    };


    render() {
        return(
         <div className='container'>
             <form onSubmit={this.submitFormData}>
             <FormFields formData={this.state.formData} captureChange = {(newState) => this.captureChange(newState)}/>  
             <button type='submit'>Submit</button>
             </form>
         </div>
         );
    };
};


export default User;