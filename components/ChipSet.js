import styles from '../styles/ChipSet.module.scss'
import Chip from './Chip';

export default function ChipSet({ chips }) {
  return (
    <div className={styles.mdChips}>
      {chips.map((chip) => (
        <Chip chip={chip} bgColor={chip.xp} key={chip.id}>{chip.name}</Chip>
      ))}
    </div>
  );
}
