import Broduct from "./componds/Broduct";

export default function App() {
  return (
    <div className="container">
      <h1 className="header"> the trips </h1>
      <div className="all-broduct">
        <Broduct />
        <Broduct />
        <Broduct />
      </div>
    </div>
  );
}
