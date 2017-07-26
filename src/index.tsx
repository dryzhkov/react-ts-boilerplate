import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IAppState {
    content: string;
}

class DateTimeButton extends React.Component<{appState: IAppState}, IAppState> {
    constructor(props){
        super(props);
        this.state = this.props.appState;
    }

    render() {
        return (
            <div>
                <span>Click to refresh time</span>
                <button onClick={this.getTime}>
                    Current Time: {this.state.content}
                </button>
            </div>
        );
     }

     getTime = () => {
         this.setState({
             content: new Date().toLocaleString()
         });
     }
};

const appState: IAppState =  {
    content: new Date().toLocaleString()
};
ReactDOM.render(<DateTimeButton appState={appState} />, document.getElementById('root'));
