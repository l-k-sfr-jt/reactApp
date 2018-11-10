
class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visibility: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);

    };

    toggleVisibility() {
        this.setState((prevState) =>({
            visibility: !prevState.visibility
        }));
    };

    render() {
        const {visibility} = this.state;
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
                {visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>

        )
    };
}

/*let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
*/

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
