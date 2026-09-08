import s from "./CapitalAndConditions.module.css";
import { getSliderValue } from "./getSliderValue";
import { type CapitalAndCondtions } from "../interfaces/CapitalAndConditions";

export function CapitalAndConditions({
  sliderIndex,
  onSliderIndexChange,
  conditions,
  onToggleSalary,
  onToggleSpendings,
}: CapitalAndCondtions) {
  return (
    <div className={s.right}>
      <div className={s.slider}>
        <div className={s.sliderHeader}>
          <h5>Доступный капитал</h5>
          <span className={s.sliderValue}>
            {getSliderValue(sliderIndex)} млн ₽
          </span>
        </div>

        <input
          className={s.input}
          type="range"
          min={1}
          max={32}
          onChange={(e) => onSliderIndexChange(Number(e.target.value))}
          value={sliderIndex}
        />

        <div className={s.sliderLabels}>
          <span>1 млн</span>
          <span>15 млн</span>
          <span>100 млн</span>
        </div>
      </div>

      <div className={s.checkboxes}>
        <label>
          <input
            type="checkbox"
            checked={conditions.hideSalary}
            onChange={onToggleSalary}
          />
          <span>Скрыть условие зарплаты</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={conditions.hideSpendings}
            onChange={onToggleSpendings}
          />
          <span>Скрыть условие трат</span>
        </label>
      </div>
    </div>
  );
}
