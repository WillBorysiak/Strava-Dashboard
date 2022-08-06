<h1  align="center">Cycling Dashboard</h1>
 
<h2  align="center">Purpose of the Website/App:</h2>
 
<h3 align="center">To display my cycling data using the Strava API.<p>
 
<h2 align="center">Technology used</h2>
 
<div align="center">
  <img align="center" src="/assets/readme-icons/react-logo.svg" alt="HTML" height="50"/>
  <p align="center">React</p>
</div>

<div align="center">
  <img align="center" src="/assets/readme-icons/nextjs-logo.svg" alt="HTML" height="50"/>
  <p align="center">NextJS</p>
</div>

<div align="center">
  <img align="center" src="/assets/readme-icons/tailwindcss-logo.svg" alt="HTML" height="50"/>
  <p align="center">Tailwind CSS</p>
</div>

<div align="center">
  <img src="/assets/readme-icons/strava-logo.svg" alt="HTML" height="50"/>
  <p align="center">Strava API</p>
</div>

<div align="center">
  <img align="center" src="/assets/readme-icons/jest-logo.svg" alt="HTML" height="50"/>
  <p align="center">Jest</p>
 </div>

<div align="center">
  <img align="center" src="/assets/readme-icons/chartjs-logo.svg" alt="HTML" height="50"/>
  <p align="center">Chart JS</p>
</div>

<div align="center">
  <img align="center" src="/assets/readme-icons/postman-logo.svg" alt="HTML" height="50"/>
  <p align="center">Postman</p>
</div>

<h2 align="center">How The Application Works</h2>

- The application uses NextJS to create the user interface and fetch the data.
- TailwindCSS provides the styling, both with inline properties and the Tailwind UI library for components.
- Strava API supplies the data for the application which includes my stats, workouts and segments.
- Jest is used to unit test the application to ensure that the components render with the correct values.
- Chart JS brings a library that creates interactive charts using my data. This data is processed via my own helper functions.
- Postman was used to test the Strava API Auth flow and data endpoints in a sandbox enviroment.

<h2 align="center">What I Learnt</h2>

- How to use an external API to fetch data and display it inside a NextJS app using the built in API routing.
- Use Jest to unit test certain components to ensure they render with the correct data.
- How to follow an OAuth flow to dynamcially generate access tokens using HTTP requests.
- Using Postman to effectively test API calls in a sandbox enviroment and covert that into JavaScript code.
- How to use React-chartjs-2 to display graphs showing monthly and weekly metrics using my workout data.
- Configure and monitor serverless functions using the Vercel dashboard.

<h2 align="center">What Was The Biggest Challenge</h2>

The biggest challenge was following the authentication flow for the Strava API. It involved using Postman and lots of trial/error until I understood the process of Auth2.0, which I had never encountered before. The usage of refresh tokens was a new concept to me and understanding how to use the Next API routing was another challenge. I also had some bugs regarding the enviromental variables on Vercel that took time to solve.
