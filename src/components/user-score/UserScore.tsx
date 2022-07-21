import { FunctionComponent } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

type TProps = {
  score: number;
};

export const UserScore: FunctionComponent<TProps> = ({ score }) => {
  //SHOULD WRAP WITH A DIV TO ADJUST HIEGTH AND WITDH
  return (
    <div>
      <CircularProgressbarWithChildren
        styles={{
          // pathColor:
          //   score < 0.7
          //     ? "var(--yellow-color)"
          //     : "var(--green-color)",
          // width: "50px",
          trail: {
            // Trail color
            stroke:
              score > 7
                ? "var(--green-color)"
                : score > 2
                ? "var(--yellow-color)"
                : "var(--red-color)",
            opacity: "0.3",
          },
          path: {
            // Path color
            stroke:
              score > 7
                ? "var(--green-color)"
                : score > 3
                ? "var(--yellow-color)"
                : "var(--red-color)",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transformOrigin: "center center",
          },
          text: {
            fill: "#f88",
            fontSize: "16px",
            transformOrigin: "center center",
          },
        }}
        value={score * 10}
      >
        <h1 className="text-[2.2rem]">{score ? score.toFixed(1) : 0}</h1>
      </CircularProgressbarWithChildren>
    </div>
  );
};
