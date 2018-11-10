import React from 'react';

//components
import AddOption from './AddOption';
import Options from './Options'
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options)
                this.setState(() =>({ options }))
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() =>({ options: [] }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random()* this.state.options.length);
        const option = this.state.options[randomNum];
       this.setState(() => ({
           selectedOption: option
           })

       )
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add an item'
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'

        }else {
            this.setState((prevState) =>({
                options: [...prevState.options, option]
            }));
        }
    };

    handleDeleteOption = (option) => {
        this.setState((prevState) =>({
            options: prevState.options.filter(value => value !== option)
        }))
    };

    handleClearSelected = () =>{
        this.setState(()=> ({
            selectedOption: undefined
        }))
    };

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const {options}= this.state;

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className={'container'}>
                    <Action
                        hasOptions={options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className={'widget'}>
                        <Options
                            options={options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>


                    <OptionModal  handleClearSelected={this.handleClearSelected} selectedOption={this.state.selectedOption} />
                </div>
            </div>
        );
    }
}

