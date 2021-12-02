import "./snow.scss";

export const Snow = () => (
  <ul className="g-snows" id="jsi-snows">
    {Array(25).fill(1).map(() => <li></li>)}
  </ul>
)