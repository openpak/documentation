import React, { JSX } from "react";
import Layout from "@theme/Layout";

import OpenpakDocs from "../../static/img/openpak-docs.svg";

export default function Home(): JSX.Element {
  return (
    <Layout title={`Welcome`} description="Openpak documentation">
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1>Welcome to the Openpak documentation!</h1>
        <p>
          Openpak is the home of Flatpak applications. It is a community effort
          to provide a central place for people to discover, install and keep up
          to date with Flatpak applications.
        </p>
        <p>
          Openpak is a public repo of Flatpak applications. It is run by the
          community, and is not owned by any single company or individual.
        </p>
        <p>
          If you have any questions, you can ask them on our{" "}
          <a href="https://matrix.to/#/#openpak:matrix.org">Matrix channel</a>.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "24px",
          }}
        >
          <OpenpakDocs />
        </div>

        <h2>Getting started</h2>
        <p>
          If you're new to Flatpak and Openpak, you can read our{" "}
          <a href="/docs/category/for-users">user guide</a> to learn how to
          install Flatpak and Openpak on your system.
        </p>
      </main>
    </Layout>
  );
}
