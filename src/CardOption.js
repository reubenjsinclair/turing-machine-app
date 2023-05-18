import "./App.css";

function CardOption({optDesc,updateOpts,selected}) {
  // console.log(optNum)
  return (
    <div>
      <li><p className={"option option"+selected} onClick={updateOpts}>{optDesc}</p></li>
    </div>
  );
}

export default CardOption;
