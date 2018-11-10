import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() =>({ error }));

        e.target.elements.option.value = '';
    };

    render() {
        const {error} = this.state;
        return (
            <div>
                {error && <p className={'add-option-error'}>{error}</p>}
                <form className={'add-option'} onSubmit={this.handleAddOption}>
                    <input className={'add-option__input'} type="text" name="option" />

                    <button className={'button'}>Add Option</button>
                </form>
            </div>
        );
    }
}
