import Link from "next/link";
import React, { FC } from "react";

interface Props {}

const LabMainPage: FC<Props> = () => {
  return (
    <section>
      <ol>
        <li>
          <Link href={`/lab/space-warp`}>
            My first Lab Project, The space warp effect using Threejs
          </Link>
        </li>
      </ol>
    </section>
  );
};

export default LabMainPage;
