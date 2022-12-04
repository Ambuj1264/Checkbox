import React from "react";

import CmpA from "./CmpA";
export default function MyApp() {
  const State = [
    { name: "ambuj", email: ["amb1", "singh", "ram"], isChecked: false },
    { name: "rohit", email: ["amb2", "singh", "ram"], isChecked: false },
    { name: "kishan", email: ["amb3 ", "singh", "ram"], isChecked: false },
  ];
  return (
    <div>
      {/* <Form />
      <Profile></Profile>
      <h1>Welcome to my app</h1>
      <Covid19 /> */}

      <CmpA state={State} />
    </div>
  );
}
