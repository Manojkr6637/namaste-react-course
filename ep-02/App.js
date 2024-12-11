 import React from 'react';
 import ReactDOM from 'react-dom/client';

      const reactObject = React.createElement('div',
                   {id:'parent'}, [

           React.createElement('div',
          {id:'child'}, [React.createElement('h1',{},'hello child'),
          React.createElement('h2',{},'hello child')]),

          React.createElement('div',
            {id:'child2'}, [React.createElement('h1',{},'hello child'),
            React.createElement('h2',{},'hello child')])],


         '');



     console.log(reactObject);
      const root =ReactDOM.createRoot(document.getElementById('root'));
      root.render(reactObject);