import React from "react";

interface IRobot {
  id: number;
  name: string;
  email: string;
}

const Card: React.SFC<IRobot> = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib dim br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
