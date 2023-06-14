/**
 * types of testing
 *    - Manual testing
 *    - Automated Testing - Code testing code
 *        - Selenium Testing
 *    - End 2 End Testing  - Cover entire user journey
 *    - Headless Browser - Kind of like a actual browser without any view.
 *    - Unit Testing
 *    - Integration Testing
 * 
 *  - Install react testing library
 *  - install jest
 *  - cinfigure jest
 *  -  create jest.config file by - npx jest -- init why i use npx beacuse we want to install only once 
 *  - install jest-environment-jsdom 
 *  - create our first test env
 *  - configure babel - jest with babel
 *  - npm install --save-dev babel-jest @babel/core @babel/preset-env
 *  - need babel.config.js
 * add this - module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
   - why we need beacuse our code in test does not understand what is import so babel will help us to to it
   - babelrc and babel config same so both are same - we used to remove console.log
   - jsdom - has something browser like functionality
   - write test cases
   - gitignore my coverage
    - who will help us to understand jsx in test file - babel - we add @babel/preset-react in .bablerc file
    - <Provider />
    - <StaticRouter />
    - created mock image
    - fetch break - wrote own fetch




    - unit testing
    - Integrating testing
 */  



export const sum = (a,b) => a+b;
