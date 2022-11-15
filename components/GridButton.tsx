import { useState } from "react";

function GridButton() {
  // var btn = window.document.getElementById("BtnGenerateGrid");
  // var data = document.getElementById("num").value;
  // console.log(data);

  const [gridValue, setValue] = useState({
    size: "",
  });

  const handleChange = (event: any) => {
    setValue({ ...gridValue, [event.target.size]: [event.target.value] });
  };

  // btn?.addEventListener("click", function () {
  //   console.log(gridValue);
  //   // if (value > 0) {
  //   //   console.log(value);
  //   // }
  // });

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          id="num"
          type="number"
          value={gridValue.size}
          className="border-black border-2"
        />

        <button
          id="BtnGenerateGrid"
          onClick={() => console.log("test")}
          className="bg-black w-20 h-8 text-red-500"
        >
          Button
        </button>
      </form>{" "}
    </div>
  );
}

export default GridButton;
