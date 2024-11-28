import Card from "./card";
export default function Main() {
  return (
    <div className="container mx-auto">
      <div className="row justify-content-center">
        <div className="col-5 p-3">
          <Card></Card>
        </div>
        <div className="col-5 p-3">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
