import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Chip.module.scss";
import { colors } from "../utils";

export default function Chip({ chip, bgColor, noicon }) {
  return (
    <div
      className={styles.mdChip}
      style={{ border: `1px solid ${colors[bgColor]}` }}
    >
      {noicon?null:
      <div className={styles.mdChipIcon}>
        {chip.icon?<FontAwesomeIcon icon={faBrands[chip.icon]} />: null}
        <p>{chip.name}</p>
      </div>}
    </div>
  );
}
