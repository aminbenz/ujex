// generate CSS Utils with properties
const genretateCSSUtils = (propertiesArray: string[]): string => {
  const directions = ['', 'left', 'top', 'right', 'bottom'];
  const n = 5;

  if (!propertiesArray[0])
    alert('Please set properties array like : padding | margin ex..');

  const utils = propertiesArray
    .map((propertie) =>
      directions.map((direction) => {
        propertie = propertie.toLowerCase();
        return `${propertie}${direction && `-${direction}`}: (prefix: ${
          propertie[0]
        }${direction && direction[0]},values: (${Array(n + 1)
          .fill(n)
          .map(
            (_, i) =>
              `"${i}: $base-${propertie}*${
                i ? (i * 2 - 2 === 0 ? 1 : i * 2 - 2) : 0
              }`
          )})
    )`;
      })
    )
    .toString();

  return utils;
};

// get random number
const getRandomInt = (n: number): number => {
  return Math.floor(Math.random() * n);
};

// convert number to k and m javascript
const formatNumber = (n: number): string => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(n);
};

// text elipses
const ellipsis = (str: string, to: number = 50): string => {
  return str.length > to ? `${str.substring(0, to)}...` : str;
};

// handle upload file image (only)
const selectImageFile = (inputRef: any) => {
  if (inputRef) {
    const imageFile: any = inputRef.current;
    const file: any = imageFile.files[0];

    imageFile.click();

    const reader = new FileReader();

    reader.onload = (e: any) => {
      return e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
};

export {
  genretateCSSUtils,
  formatNumber,
  ellipsis,
  getRandomInt,
  selectImageFile,
};
