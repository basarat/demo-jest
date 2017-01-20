Here I have a simple application that renders the div Hello World to the dom using React and React Dom.
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('root')
);
```

We can easily move this div into a stateless component by returning it from a function


