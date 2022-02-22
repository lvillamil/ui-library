# Single Platform Portal Core

This project skeleton features and was [based on](https://github.com/HarveyD/react-component-library/)

# CHECK THIS LINK FOR ONGOING WORK https://github.com/g2webservices/Single_Platform_Portal_Core/issues/6

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

### If you wanna check compatibily between the library and a portal application

The portal must have the react version of the library linked and the same applies.
The issue for [this](https://github.com/facebook/react/issues/14257)
_You must use the absolute path don't do ~/pathtorepo_

```
cd pathtolibrary/node_modules/react/
pwd
# Copy that path
cd pathtoportal
yarn add link:pathyoucopied
yarn build

```

### Testing

```
yarn test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
yarn storybook
```

To export your Storybook as static files:

```
yarn storybook:export
```

### Generating New Components

Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
yarn generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.jsx
    YourComponentName.stories.jsx
    YourComponentName.test.jsx
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.js` exports if you want the library to export the component!

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
yarn add link:yourpath/single-platform-portal-core
yarn add link:yourpath/single-platform-portal-core/node_modules/react
yarn add link:yourpath/single-platform-portal-core/node_modules/react-router-dom
yarn add link:yourpath/single-platform-portal-core/node_modules/redux
yarn add link:yourpath/single-platform-portal-core/node_modules/react-redux
```

The react linking is neccesary to use the exact same version as the core or it won't work.

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```JSON
  ...
  "dependencies": {
    ...
    "react": "link:../react-component-library/node_modules/react",
    "single-platform-portal-core": "link:../react-component-library",
    ...
  },
  ...
```

#### If you wanna use the custom bootstrap provided by the library

Import the style on your main app file. This includes the font-face imports for Roboto

```JS
import 'single-platform-portal-core/build/bootstrap.css';
```

### If you want to use the datepicker wrapper provided by the library

Import the react-dates style on your main app file.

```JS
import 'react-dates/lib/css/_datepicker.css';
```

Your components can then be imported and used in that project.

### Naming color variables

Use as a standard the color given by this page http://chir.ag/projects/name-that-color/

## Publishing

### Hosting via GitHub

You can then install your library into other projects by running:

```
yarn add git+https://github.com/g2webservices/Single_Platform_Portal_Core.git#branch-name
```

OR

```
yarn add github:g2webservices/Single_Platform_Portal_Core#branch-name
```

## Usage

Usage of the component (after the library installed as a dependency into another project) will be:

```JSX
import React from "react";
import { TestComponent } from "single-platform-portal-core";

const DummyComponent = () => (
  <div className="dummy-component">
    <h1>Hello I'm consuming the component library</h1>
    <TestComponent />
  </div>
);

export default DummyComponent;
```

If you are planning on using Table, PoolManager, DatePicker or TabList, you will need to import the components the following way.

This was required so that the user doesn't have to install the peer dependencies right away when using components without them.

```JSX
import React from "react";
import Table from "single-platform-portal-core/build/Table";
import DatePicker from "single-platform-portal-core/build/DatePicker";
import TabList from "single-platform-portal-core/build/TabList";
import { getManager, createPool, poolDecorators } from "single-platform-portal-core/build/poolManager";
```

### Using Component Library SASS Variables

For example, let's say you installed `single-platform-portal-core` into your project. To use the exported variables/mixins, in a SASS file you would do the following:

```Sass
@import '~single-platform-portal-core/build/typography';

.example-container {
    @include heading;

    color: $white;
}
```

## Contributing

For more references about _commit convention_ and _versioning_ and _changelog_ please read our guidelines for [contributing][contributing]

[contributing]: https://github.com/g2webservices/Single_Platform_Portal_Core/blob/master/CONTRIBUTING.md
