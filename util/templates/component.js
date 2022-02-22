module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from 'react';

import '../custom-bootstrap.scss';
import './${componentName}.scss';

const ${componentName} = ({ foo }) => (
    <div data-testid="${componentName.toLowerCase()}" className="${componentName.toLowerCase()}">
      {foo}
    </div>
);

export default ${componentName};

`,
  extension: `.jsx`,
});
