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
const IntFormater = (
  n: number,
  locale: string = 'en',
  notation: any = 'compact'
): string => {
  const formatter = Intl.NumberFormat(locale, { notation: notation });
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

// calculate time
const calculateTime = (secs: number, type: 'secs') => {
  const minutes = Math.floor(secs / 60);
  const returnMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const seconds = Math.floor(secs % 60);
  const returnSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${returnMinutes}:${returnSeconds}`;
};

const millisToString = (millis: number): string => {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const msToStr = (millis: number): string => {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  let hours = Math.floor((millis / (1000 * 60 * 60)) % 24);
};

function msToTime(duration) {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours && `${hours}h`;
  minutes = minutes && `${minutes}min`;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ' ' + minutes;
}

const toDate = (added_at: string): string => {
  const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
  const date = new Date(added_at);
  return `${date.getUTCDate()} ${formatter.format(
    date
  )},  ${date.getUTCFullYear()}`;
};

const getSmalestImage = (images) => {
  images.map((item) => {
    let smallestImage = item.images.reduce((smallest, image) => {
      if (image.height < smallest.height) return image;
      return smallest;
    });
  });
};

const sort = (items: array, key: string = 'name', reverse: boolean = false) => {
  const list = items.sort((a, b) => {
    const nameA =
      typeof a[key] === 'string' ? a[key].toLocaleLowerCase() : a[key];
    const nameB =
      typeof b[key] === 'string' ? b[key].toLocaleLowerCase() : b[key];
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });
  if (reverse) {
    return list.reverse();
  } else {
    return list;
  }
};

const getCountries = (label = 'label', value = 'value', list = []) => {
  const COUNTRIES = [
    { name: 'Albania', code: 'AL' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas (the)', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia (Plurinational State of)', code: 'BO' },
    { name: 'Bonaire, Sint Eustatius and Saba', code: 'BQ' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory (the)', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cabo Verde', code: 'CV' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cayman Islands (the)', code: 'KY' },
    { name: 'Central African Republic (the)', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands (the)', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros (the)', code: 'KM' },
    { name: 'Congo (the Democratic Republic of the)', code: 'CD' },
    { name: 'Congo (the)', code: 'CG' },
    { name: 'Cook Islands (the)', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Curaçao', code: 'CW' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czechia', code: 'CZ' },
    { name: "Côte d'Ivoire", code: 'CI' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic (the)', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Eswatini', code: 'SZ' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (the) [Malvinas]', code: 'FK' },
    { name: 'Faroe Islands (the)', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories (the)', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia (the)', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and McDonald Islands', code: 'HM' },
    { name: 'Holy See (the)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran (Islamic Republic of)', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: "Korea (the Democratic People's Republic of)", code: 'KP' },
    { name: 'Korea (the Republic of)', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: "Lao People's Democratic Republic (the)", code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands (the)', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia (Federated States of)', code: 'FM' },
    { name: 'Moldova (the Republic of)', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands (the)', code: 'NL' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger (the)', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands (the)', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestine, State of', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines (the)', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Republic of North Macedonia', code: 'MK' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation (the)', code: 'RU' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Réunion', code: 'RE' },
    { name: 'Saint Barthélemy', code: 'BL' },
    { name: 'Saint Helena, Ascension and Tristan da Cunha', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Martin (French part)', code: 'MF' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Sint Maarten (Dutch part)', code: 'SX' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'South Sudan', code: 'SS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan (the)', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan (Province of China)', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands (the)', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates (the)', code: 'AE' },
    {
      name: 'United Kingdom of Great Britain and Northern Ireland (the)',
      code: 'GB',
    },
    { name: 'United States Minor Outlying Islands (the)', code: 'UM' },
    { name: 'United States of America (the)', code: 'US' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela (Bolivarian Republic of)', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands (British)', code: 'VG' },
    { name: 'Virgin Islands (U.S.)', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' },
  ];
  return COUNTRIES.map(({ name, code }) => {
    return {
      [label]: name,
      [value]: code,
    };
  });
};

export {
  genretateCSSUtils,
  getSmalestImage,
  millisToString,
  toDate,
  calculateTime,
  IntFormater,
  ellipsis,
  getRandomInt,
  selectImageFile,
  getCountries,
  msToStr,
  msToTime,
  sort,
};
