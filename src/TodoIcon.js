import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";

const iconTypes = {
    "completed": <CheckSVG  />,
    "delete": <DeleteSVG  />,
  };

function TodoIcon({type}) {
    return (
        <p
            className={`check check-active check-${type}`}>
            {iconTypes[type]}
        </p>
    )
}

export {TodoIcon};