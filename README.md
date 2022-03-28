# CurlyOctoDoodle: a JoinCoin App by Florent

This [Create React App](https://github.com/facebook/create-react-app) TypeScript project is a simple 2-page app driven by Gemini's JobCoin [API](https://jobcoin.gemini.com/candied-hardwood).

## :rocket:&nbsp;&nbsp;Features

- Colorful design with a fresh logo :rainbow: :heart_eyes:
- Includes a `Welcome` and `Home` page
- User authentication via a `fakeAuth` service
- User authentication persistence via `localStorage`
- Automatically redirects to `Home` or `Welcome` page based on prior authentication state
- Fetches live data and display current balance and transactions
- Data visualization of past transactions with line chart
- Transaction details display with tooltips
- Supports sending JobCoins to other addresses
- Frontend form validations for required fields and incorrect values
- Loading state with simple shimer effect
- Effort handling using HTML alert patterns
- A11Y: AA compliance for contrast ratios, semantic markup
- CI: Github action workflow with testing and deployment to Github Pages

## Disclaimer:&nbsp;&nbsp;:warning:

This app lacks crucial security features, especially with regards to authentication, authorization, and user inputs sanitation. This is a **NOT** a production-ready app and it was never intented to be. I hope we're clear here. :wink:

## Libraries:&nbsp;&nbsp;:books:

This Typescript project was completed with the help of these fantastic open-source projects:

- `create-react-app`
- `react-router-dom`
- `clsx`
- `react-hook-form`
- `recharts`
- `date-fns`

## Development:&nbsp;&nbsp;:nerd_face:

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
