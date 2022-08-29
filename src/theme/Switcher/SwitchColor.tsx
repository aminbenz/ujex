import { useEffect, useState } from 'react';
import './styles.css';

const defaultColor = '#006afe';

export const SwitchColor: React.FC = () => {
  const [appThemeColor, setAppColorTheme] = useState<string>(defaultColor);

  const handleSwitchThemeColor = (color: string) => {
    setAppColorTheme(color);
  };

  //track color
  useEffect(() => {
    if (appThemeColor) {
      document.documentElement.style.setProperty('--primary', appThemeColor);
      // window.localStorage.setItem('appThemeColor', appThemeColor);
    }
  }, [appThemeColor]);

  return (
    <>
      <label className="link" htmlFor="input-color">
        Change Color
      </label>
      <input
        type="color"
        list="presetColors"
        id="input-color"
        value={appThemeColor}
        onChange={(e) => handleSwitchThemeColor(e.target.value)}
      />
      <datalist id="presetColors">
        <option>#842ce9</option>
        <option>#4946ff</option>
        <option>#006afe</option>
        <option>#36c991</option>
        <option>#d14bec</option>
        <option>#d572ab</option>
        <option>#F46036</option>
        <option>#E3D888</option>
        <option>#bf8e80</option>
        <option>#5d8985</option>
      </datalist>
    </>
  );
};
