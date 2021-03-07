import { h, render } from "preact";

interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 0,
  name: "Guardian",
};

const container = document.getElementById("container");

render(
  <div>
    {user.name} (ID: {user.id})
  </div>,
  container
);
