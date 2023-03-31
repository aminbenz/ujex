// import './styles.css';

let setTheme = (property: string, color: string) => {
  document.documentElement.style.setProperty(`--${property}`, color);
};

export const SwitchTheme = () => {
  const handleSwitch = (e: any) => {
    if (e.target.checked) {
      setTheme('bg', '#c5c9d5');
      setTheme('bg-200', '#c5c9d5');
      setTheme('bg-200', '#d1d4de');
      setTheme('bg-600', '#d4d7e0');
      setTheme('text', '#040405');
      setTheme('gray', '#505050');
    } else {
      setTheme('bg', '#181a1d');
      setTheme('bg-200', '#181a1d');
      setTheme('bg-200', '#181a1d');
      setTheme('bg-600', '#25282c');
      setTheme('text', '#e1e1eb');
      setTheme('gray', '#B9B8BD');
    }
  };

  return (
    <div className="switcher">
      <div className="toggle toggle-daynight">
        <input
          onClick={handleSwitch}
          type="checkbox"
          id="toggle-daynight"
          className="toggle-checkbox"
        />
        <label className="toggle-btn" htmlFor="toggle-daynight">
          <span className="toggle-feature" />
        </label>
      </div>
    </div>
  );
};
