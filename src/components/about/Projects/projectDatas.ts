import { Props } from "./Project";

const projects: Array<Props> = [
  {
    period: {
      from: "2021-12",
      to: "2022-02",
    },
    projectTitle: "enkor main homepage redesign and service update",
    team: "enkorwithus",
    desc: `Was in charge of frontend products(setting project to depoyment), worked on main service frontend and company inner dashboard.`,
    list: `
    <li><b>Migrate old version APIs to new versions</b>, changing libraries that were not being maintained to other libraries or team-built functions.</li>
    <li><b>Integrate CICD</b> using github actions and AWS Amplify</li>
    <li><b>Resolving global css rules issue(mostly css side effects)</b> by isolating css file imports using css modules and Tailwindcss</li>
    <li>App <b>loading time reduction using Nextjs SSG and SSR, Image optimaztion.</b></li>`,
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
];

export default projects;
