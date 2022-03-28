# CurlyOctoDoodle: a JobCoin App by Florent

This [Create React App](https://github.com/facebook/create-react-app) TypeScript project is a simple 2-page app driven by Gemini's JobCoin [API](https://jobcoin.gemini.com/candied-hardwood).

![Screen Shot 2022-03-27 at 15 34 50](https://user-images.githubusercontent.com/102430916/160311977-9b723523-cefa-4dcf-8d3b-bfad0dfca793.jpg)


## :rocket:&nbsp;&nbsp;Features

- Colorful design with a fresh logo :rainbow: :heart_eyes:
- Includes a `Welcome` and `Home` page
- User authentication with a very basic, unsecured `fakeAuth` service
- User authentication persistence via `localStorage`
- Automatically redirects to `Home` or `Welcome` page based on prior auth state
- Fetches live data then displays current balance and transactions
- Data visualization of past transactions with line chart
- Transaction details in graph tooltips
- Supports sending JobCoins to other addresses
- Frontend form validations for required fields and incorrect values
- Loading state with simple shimer effect
- Error handling using HTML alert patterns
- A11Y: AA compliance for contrast ratios + semantic markup
- CI: Github action workflow with testing and deployment to Github Pages

## :warning:&nbsp;&nbsp;Disclaimer:

This app lacks crucial security features, especially with regards to authentication, authorization, and user inputs sanitation. This is a **NOT** a production-ready app and it was never intented to be. I hope we're clear here. :wink:

## :books:&nbsp;&nbsp;Libraries:

This Typescript project was completed with the help of these fantastic open-source projects:

- `create-react-app`
- `react-router-dom`
- `clsx`
- `react-hook-form`
- `recharts`
- `date-fns`

## :nerd_face:&nbsp;&nbsp;Development:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
