import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.StatelessComponent<{ message: string }> =
  ({ message }) => <div>{message}</div>;
App.displayName = "App";

ReactDOM.render(
  <App message={"Hello is it me you are looking for?"}/>,
  document.getElementById('root')
);