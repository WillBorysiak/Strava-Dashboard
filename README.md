<h1  align="center">Strava Dashboard</h1>
 
<h2  align="center">Purpose of the App:</h2>
 
<h3 align="center"><i>To display my workout data using the Strava API.</i><p>
 
<h2 align="center">Technology used</h2>
 
<div align="center">
  <img align="center" src="/docs/readme/icons/react.svg" alt="HTML" height="50"/>
  <p align="center"><i>React</i></p>
</div>

<div align="center">
  <img align="center" src="/docs/readme/icons/nextjs.svg" alt="HTML" height="50"/>
  <p align="center"><i>NextJS</i></p>
</div>

<div align="center">
  <img align="center" src="/docs/readme/icons/tailwindcss.svg" alt="HTML" height="50"/>
  <p align="center"><i>Tailwind CSS</i></p>
</div>

<div align="center">
  <img align="center" src="/docs/readme/icons/chartjs.svg" alt="HTML" height="50"/>
  <p align="center"><i>Chart JS</i></p>
</div>

<div align="center">
  <img src="/docs/readme/icons/strava.svg" alt="HTML" height="50"/>
  <p align="center"><i>Strava API</i></p>
</div>

<div align="center">
  <img align="center" src="/docs/readme/icons/postman.svg" alt="HTML" height="50"/>
  <p align="center"><i>Postman</i></p>
</div>

<div align="center">
  <img align="center" src="/docs/readme/icons/jest.svg" alt="HTML" height="50"/>
  <p align="center"><i>Jest</i></p>
 </div>

<h2 align="center">How The Application Works</h2>

- The application uses NextJS to render the site and its components.
- TailwindCSS provides the styling, both with inline properties and the Tailwind UI library for components.
- Strava API supplies the data for the application which includes my stats, workouts and segments.
- Chart JS renders the various charts using formatted data that’s created via helper functions.
- Postman was used to test the Strava API Auth flow and data endpoints in a sandbox environment.
- Jest is used to unit test the application to ensure that the components render with the correct values.

<h2 align="center">What I Learnt</h2>

- How to use an external API to fetch data and display it inside a NextJS app using the built in API routing.
- How to follow an OAuth flow to dynamically generate access tokens using HTTP requests.
- Using Postman to effectively test API calls in a sandbox environment and covert that into JavaScript code.
- How to use React-chartjs-2 to display graphs showing monthly and weekly metrics using my workout data.
- Use Jest to unit test certain components to ensure they render with the correct data.
- Configure and monitor serverless functions using the Vercel dashboard.

<h2 align="center">What Was The Biggest Challenge</h2>

The biggest challenge was following the authentication flow for the Strava API. It involved using Postman and lots of trial/error until I understood the process of Auth2.0, which I had never encountered before. The usage of refresh tokens was a new concept to me and understanding how to use the Next API routing was another challenge. I also had some bugs regarding the environmental variables on Vercel that took time to solve.
