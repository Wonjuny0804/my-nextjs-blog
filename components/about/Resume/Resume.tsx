/* eslint-disable react/display-name */
import React, { FC } from "react";

const Resume: FC = React.memo(() => {
  return (
    <section className={`px-4 mt-4`}>
      <p>As a frontend engineer</p>

      <h2>기술 및 역량</h2>
      <h1>프로덕트 개발</h1>
      <ul>
        <li>- Javascript ES6+ 문법에 익숙하며 TypeScript로 개발합니다.</li>
      </ul>
    </section>
  );
});

export default Resume;
