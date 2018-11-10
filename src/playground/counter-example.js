


class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        try{
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
            console.log(count);
            if(!isNaN(count))
                this.setState(() =>({ count }))
        } catch (e) {

        }

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }

    }

    handleAdd() {
        this.setState((prevState) => ({count: prevState.count+1}));
    }

    handleMinus() {
        this.setState((prevState) => ({count: prevState.count -1}));

    }

    handleReset() {
      //  this.setState(() =>({count:0}));
        this.setState({
            count: 0
        });
        /*  this.setState({
            count: this.state.count+1
        });*/

    }
    render() {
        const {count} = this.state;
       return( <div>
            <h1>Count: {count} </h1>
            <button onClick={this.handleAdd}>+1</button>
            <button onClick={this.handleMinus}>-1</button>
            <button onClick={this.handleReset}>reset</button>
        </div>
       )}
}

ReactDOM.render(<Counter count={10}/>, document.getElementById('app'));





/*let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
*/