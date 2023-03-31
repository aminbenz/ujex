import { useEffect, useState } from 'react';
import switcherCSS  from './Switcher.module.css';

const defaultColor = '#006afe';
const COLOR_PALETTE = [
  '#842ce9 ',
  '#4946ff ',
  '#006afe ',
  '#36c991 ',
  '#d14bec ',
  '#d572ab ',
  '#F46036 ',
  '#E3D888 ',
  '#bf8e80 ',
  '#5d8985 ',
];

export const SwitchColor: React.FC = () => {
  const [themeColor, setAppColorTheme] = useState<string>(defaultColor);

  const handleSwitchThemeColor = (color: string) => {
    setAppColorTheme(color);
  };

  //track color
  useEffect(() => {
    if (themeColor) {
      document.documentElement.style.setProperty('--primary', themeColor);
      window.localStorage.setItem('theme_color', themeColor);
    }
  }, [themeColor]);

  return (
    <>
      <label className="link" htmlFor="input-color">
        Change Color
      </label>
      <input
        type="color"
        list="color-palette"
        id="input-color"
        className={switcherCSS.input_color}
        value={themeColor}
        onChange={(e) => handleSwitchThemeColor(e.target.value)}
      />
      <datalist id="color-palette" className={switcherCSS.color_palette}>
        {COLOR_PALETTE.map((color, i) => (
          <option key={i}>{color}</option>
        ))}
      </datalist>
    </>
  );
};
