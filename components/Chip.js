import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Chip.module.scss";
import { colors } from "../utils";

export default function Chip({ chip, bgColor, noicon }) {
  return (
    <div
      className={styles.mdChip}
      style={{ background: colors[bgColor] }}
    >
      {noicon?null:
      <div className={styles.mdChipIcon}>
        {chip.icon?<FontAwesomeIcon icon={faBrands[chip.icon]} />: chip.name.slice(0, 2)}
      </div>}
      {chip.name}
    </div>
  );
}
