Here I have a simple application that renders the div Hello World to the dom using React and React Dom.
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('root')
);
```

We can easily move this div into a stateless component called <App/> by creating a function App and returning this element.

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => <div>Hello world</div>;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

Of course the main advantage here is that you now get to use props to change the component behavior e.g we can take the message as a prop by adding it to the function arguments, using it inside the function body, and of-course passing in the message as a property to the component.

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message={"Hello world"}/>,
  document.getElementById('root')
);
```

You can see it still behave the same but now we can also control the rendering with the passed in prop. 

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message={"Hello is it me you are looking for?"}/>,
  document.getElementById('root')
);
```

Finally although this works fine for simple stateless components, if you want to create high quality components, it is recommended that you annotate your component as `React.StatlessComponent` which takes a generic argument that controls the props that allows you to provide easy type annotations for the props

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.StatelessComponent<{ message: string }>
  = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message={"Hello is it me you are looking for?"}/>,
  document.getElementById('root')
);
```

And also opens up other features like the ability to to specify the displayName

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.StatelessComponent<{ message: string }>
  = ({ message }) => <div>{message}</div>;
App.displayName = "App";

ReactDOM.render(
  <App message={"Hello is it me you are looking for?"}/>,
  document.getElementById('root')
);
```




