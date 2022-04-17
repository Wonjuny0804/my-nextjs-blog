import { Props } from "./Project";

const projects: Array<Props> = [
  {
    period: {
      from: "2021-04",
      to: "2021-06",
    },
    projectTitle: "Web application for finding hiking Buddies (Santa App)",
    team: "external team",
    desc: `A web application where you can find hiking mates and plan a hike with
    your buddies. Operated as the Project Manager, Backend, Frontend
    developer.`,
    list: `
    <li>
    Mobile and Desktop layout using
    <span class="font-normal">Scss and @media query</span>
  </li>
  <li>
    In charge of
    <span class="font-normal">App Authentication process</span>,
    Login, Sign up, Sign out.
  </li>
  <li>
    In charge of
    <span class="font-normal">
      Backend Server using Nodejs Express, MongoDB.
    </span>
  </li>
  <li>
    Created
    <span class="font-normal">
      UI components according to WAI-ARIA accessibility specification.
    </span>
  </li>
  <li>
    <span class="font-normal">
      Component UIs testing through Storybook.
    </span>
    So had to configure according to Webpack docs.
  </li>
  <li>Deployment and CI using Github and AWS EC2.</li>`,
    link: "https://github.com/Santa-Application/App",
  },
  {
    period: {
      from: "2021-07",
      to: "2021-09",
    },
    projectTitle: "enkor stay platform",
    team: "enkorwithus",
    desc: `Longterm stay residence house register, reserve platform. Was in charge of Frontend development and deployment.`,
    list: `
    <li>
    CI using Github and AWS Amplify.
  </li>
  <li>
    Room reservation and 
  </li>
  <li>
    In charge of
    <span class="font-normal">
      Backend Server using Nodejs Express, MongoDB.
    </span>
  </li>
  <li>
    Created
    <span class="font-normal">
      UI components according to WAI-ARIA accessibility specification.
    </span>
  </li>
  <li>
    <span class="font-normal">
      Component UIs testing through Storybook.
    </span>
    So had to configure according to Webpack docs.
  </li>
  <li>Deployment and CI using Github and AWS EC2.</li>
    `,
  },
];

export default projects;
