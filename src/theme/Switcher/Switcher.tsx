/* NEW (START) */

export const Switcher = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          // NEW
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};
