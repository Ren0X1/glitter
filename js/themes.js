const categories = ['Light', 'Dark', 'Neon', 'Minimal', 'Flat'];

const themes = [
  {
    name: 'theme-light',
    title: 'Default',
    category: 'Light',
    primarycolor: '#1DA1F2',
    backgroundcolor: '#f1f1f1',
    hovercolor: '#f7f7f7',
    cardbackground: '#ffffff',
    accentcolor: '#f1f1f1',
    bordercolor: '#bbbbbb',
    textcolor: '#222222',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-light-red',
    title: 'Red',
    category: 'Light',
    primarycolor: '#ff3211',
    backgroundcolor: '#f1f1f1',
    hovercolor: '#f7f7f7',
    cardbackground: '#ffffff',
    accentcolor: '#f1f1f1',
    bordercolor: '#bbbbbb',
    textcolor: '#222222',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-light-pink',
    title: 'Pink',
    category: 'Light',
    primarycolor: '#f711a6',
    backgroundcolor: '#f1f1f1',
    hovercolor: '#f7f7f7',
    cardbackground: '#ffffff',
    accentcolor: '#f1f1f1',
    bordercolor: '#bbbbbb',
    textcolor: '#222222',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-light-purple',
    title: 'Purple',
    category: 'Light',
    primarycolor: '#7d24f3',
    backgroundcolor: '#f1f1f1',
    hovercolor: '#f7f7f7',
    cardbackground: '#ffffff',
    accentcolor: '#f1f1f1',
    bordercolor: '#bbbbbb',
    textcolor: '#222222',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-light-green',
    title: 'Green',
    category: 'Light',
    primarycolor: '#00dc52',
    backgroundcolor: '#f1f1f1',
    hovercolor: '#f7f7f7',
    cardbackground: '#ffffff',
    accentcolor: '#f1f1f1',
    bordercolor: '#bbbbbb',
    textcolor: '#222222',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-dark',
    title: 'Default',
    category: 'Dark',
    primarycolor: '#1DA1F2',
    backgroundcolor: '#000000',
    hovercolor: '#313131',
    cardbackground: '#232323',
    accentcolor: '#555555',
    bordercolor: '#777777',
    textcolor: '#fbfbfb',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-dark-white',
    title: 'White',
    category: 'Dark',
    primarycolor: '#ffffff',
    backgroundcolor: '#000000',
    hovercolor: '#313131',
    cardbackground: '#232323',
    accentcolor: '#555555',
    bordercolor: '#777777',
    textcolor: '#fbfbfb',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#000000',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-dark-red',
    title: 'Red',
    category: 'Dark',
    primarycolor: '#ff3211',
    backgroundcolor: '#000000',
    hovercolor: '#313131',
    cardbackground: '#232323',
    accentcolor: '#555555',
    bordercolor: '#777777',
    textcolor: '#fbfbfb',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-dark-pink',
    title: 'Pink',
    category: 'Dark',
    primarycolor: '#f711a6',
    backgroundcolor: '#000000',
    hovercolor: '#313131',
    cardbackground: '#232323',
    accentcolor: '#555555',
    bordercolor: '#777777',
    textcolor: '#fbfbfb',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-dark-purple',
    title: 'Purple',
    category: 'Dark',
    primarycolor: '#7d24f3',
    backgroundcolor: '#000000',
    hovercolor: '#313131',
    cardbackground: '#232323',
    accentcolor: '#555555',
    bordercolor: '#777777',
    textcolor: '#fbfbfb',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-dark-green',
    title: 'Green',
    category: 'Dark',
    primarycolor: '#00dc52',
    backgroundcolor: '#000000',
    hovercolor: '#313131',
    cardbackground: '#232323',
    accentcolor: '#555555',
    bordercolor: '#777777',
    textcolor: '#fbfbfb',
    cardborderradius: '8px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    buttonborderradius: '6px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-minimal',
    title: 'Default',
    category: 'Minimal',
    primarycolor: '#1da1f2',
    backgroundcolor: '#f7f7f7',
    hovercolor: '#f8fcff',
    cardbackground: '#ffffff',
    accentcolor: '#e8e8e8',
    bordercolor: '#bbbbbb',
    textcolor: '#111111',
    cardborderradius: '2px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow: 'none',
    buttonborderradius: '2px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-minimal-black',
    title: 'Black',
    category: 'Minimal',
    primarycolor: '#000000',
    backgroundcolor: '#f7f7f7',
    hovercolor: '#f7f7f7',
    cardbackground: '#ffffff',
    accentcolor: '#e8e8e8',
    bordercolor: '#bbbbbb',
    textcolor: '#111111',
    cardborderradius: '2px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow: 'none',
    buttonborderradius: '2px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-minimal-red',
    title: 'Red',
    category: 'Minimal',
    primarycolor: '#ff3211',
    backgroundcolor: '#f7f7f7',
    hovercolor: '#fff9f8',
    cardbackground: '#ffffff',
    accentcolor: '#e8e8e8',
    bordercolor: '#bbbbbb',
    textcolor: '#111111',
    cardborderradius: '2px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow: 'none',
    buttonborderradius: '2px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-minimal-pink',
    title: 'Pink',
    category: 'Minimal',
    primarycolor: '#f711a6',
    backgroundcolor: '#f7f7f7',
    hovercolor: '#fff8fc',
    cardbackground: '#ffffff',
    accentcolor: '#e8e8e8',
    bordercolor: '#bbbbbb',
    textcolor: '#111111',
    cardborderradius: '2px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow: 'none',
    buttonborderradius: '2px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-minimal-purple',
    title: 'Purple',
    category: 'Minimal',
    primarycolor: '#7d24f3',
    backgroundcolor: '#f7f7f7',
    hovercolor: '#fbf8ff',
    cardbackground: '#ffffff',
    accentcolor: '#e8e8e8',
    bordercolor: '#bbbbbb',
    textcolor: '#111111',
    cardborderradius: '2px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow: 'none',
    buttonborderradius: '2px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-minimal-green',
    title: 'Green',
    category: 'Minimal',
    primarycolor: '#00dc52',
    backgroundcolor: '#f7f7f7',
    hovercolor: '#f0faf4',
    cardbackground: '#ffffff',
    accentcolor: '#e8e8e8',
    bordercolor: '#bbbbbb',
    textcolor: '#111111',
    cardborderradius: '2px',
    cardbordercolor: '#000000',
    cardborderwidth: '0',
    cardshadow: 'none',
    buttonborderradius: '2px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-neon',
    title: 'Default',
    category: 'Neon',
    primarycolor: '#1da1f2',
    backgroundcolor: '#000000',
    hovercolor: '#020a0f',
    accentcolor: '#121212',
    bordercolor: '#555555',
    textcolor: '#ffffff',
    cardbackground: '#000000',
    cardborderradius: '8px',
    cardbordercolor: '#1da1f2',
    cardborderwidth: '1',
    cardshadow: '0 0 0 4px #1da1f230, 0px 0px 0px 8px #1da1f212',
    buttontextcolor: '#ffffff',
    buttonborderradius: '6px',
    inputtextcolor: '#ffffff',
    inputbackground: '#121212',
  },
  {
    name: 'theme-neon-red',
    title: 'Red',
    category: 'Neon',
    primarycolor: '#ff3211',
    backgroundcolor: '#000000',
    hovercolor: '#100301',
    accentcolor: '#121212',
    bordercolor: '#555555',
    textcolor: '#ffffff',
    cardbackground: '#000000',
    cardborderradius: '8px',
    cardbordercolor: '#ff3211',
    cardborderwidth: '1',
    cardshadow: '0 0 0 4px #ff321130, 0px 0px 0px 8px #ff321112',
    buttontextcolor: '#ffffff',
    buttonborderradius: '6px',
    inputtextcolor: '#ffffff',
    inputbackground: '#121212',
  },
  {
    name: 'theme-neon-pink',
    title: 'Pink',
    category: 'Neon',
    primarycolor: '#f711a6',
    backgroundcolor: '#000000',
    hovercolor: '#0f010a',
    accentcolor: '#121212',
    bordercolor: '#555555',
    textcolor: '#ffffff',
    cardbackground: '#000000',
    cardborderradius: '8px',
    cardbordercolor: '#f711a6',
    cardborderwidth: '1',
    cardshadow: '0 0 0 4px #f711a630, 0px 0px 0px 8px #f711a612',
    buttontextcolor: '#ffffff',
    buttonborderradius: '6px',
    inputtextcolor: '#ffffff',
    inputbackground: '#121212',
  },
  {
    name: 'theme-neon-purple',
    title: 'Purple',
    category: 'Neon',
    primarycolor: '#7d24f3',
    backgroundcolor: '#000000',
    hovercolor: '#08020f',
    accentcolor: '#121212',
    bordercolor: '#555555',
    textcolor: '#ffffff',
    cardbackground: '#000000',
    cardborderradius: '8px',
    cardbordercolor: '#7d24f3',
    cardborderwidth: '1',
    cardshadow: '0 0 0 4px #7d24f330, 0px 0px 0px 8px #7d24f312',
    buttontextcolor: '#ffffff',
    buttonborderradius: '6px',
    inputtextcolor: '#ffffff',
    inputbackground: '#121212',
  },
  {
    name: 'theme-neon-green',
    title: 'Green',
    category: 'Neon',
    primarycolor: '#00dc52',
    backgroundcolor: '#000000',
    hovercolor: '#000e05',
    accentcolor: '#121212',
    bordercolor: '#555555',
    textcolor: '#ffffff',
    cardbackground: '#000000',
    cardborderradius: '8px',
    cardbordercolor: '#00dc52',
    cardborderwidth: '1',
    cardshadow: '0 0 0 4px #00dc5230, 0px 0px 0px 8px #00dc5212',
    buttontextcolor: '#ffffff',
    buttonborderradius: '6px',
    inputtextcolor: '#ffffff',
    inputbackground: '#121212',
  },
  {
    name: 'theme-flat',
    title: 'Default',
    category: 'Flat',
    primarycolor: '#1DA1F2',
    backgroundcolor: '#ffffff',
    hovercolor: '#e8e8e8',
    cardbackground: '#f7f7f7',
    accentcolor: '#dddddd',
    bordercolor: '#cecece',
    textcolor: '#222222',
    cardborderradius: '3px',
    cardbordercolor: '#cecece',
    cardborderwidth: '1',
    cardshadow: 'none',
    buttonborderradius: '3px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-flat-red',
    title: 'Red',
    category: 'Flat',
    primarycolor: '#ff3211',
    backgroundcolor: '#ffffff',
    hovercolor: '#e8e8e8',
    cardbackground: '#f7f7f7',
    accentcolor: '#dddddd',
    bordercolor: '#cecece',
    textcolor: '#222222',
    cardborderradius: '3px',
    cardbordercolor: '#cecece',
    cardborderwidth: '1',
    cardshadow: 'none',
    buttonborderradius: '3px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-flat-pink',
    title: 'Pink',
    category: 'Flat',
    primarycolor: '#f711a6',
    backgroundcolor: '#ffffff',
    hovercolor: '#e8e8e8',
    cardbackground: '#f7f7f7',
    accentcolor: '#dddddd',
    bordercolor: '#cecece',
    textcolor: '#222222',
    cardborderradius: '3px',
    cardbordercolor: '#cecece',
    cardborderwidth: '1',
    cardshadow: 'none',
    buttonborderradius: '3px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-flat-purple',
    title: 'Purple',
    category: 'Flat',
    primarycolor: '#7d24f3',
    backgroundcolor: '#ffffff',
    hovercolor: '#e8e8e8',
    cardbackground: '#f7f7f7',
    accentcolor: '#dddddd',
    bordercolor: '#cecece',
    textcolor: '#222222',
    cardborderradius: '3px',
    cardbordercolor: '#cecece',
    cardborderwidth: '1',
    cardshadow: 'none',
    buttonborderradius: '3px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
  {
    name: 'theme-flat-green',
    title: 'Green',
    category: 'Flat',
    primarycolor: '#00dc52',
    backgroundcolor: '#ffffff',
    hovercolor: '#e8e8e8',
    cardbackground: '#f7f7f7',
    accentcolor: '#dddddd',
    bordercolor: '#cecece',
    textcolor: '#222222',
    cardborderradius: '3px',
    cardbordercolor: '#cecece',
    cardborderwidth: '1',
    cardshadow: 'none',
    buttonborderradius: '3px',
    buttontextcolor: '#ffffff',
    inputtextcolor: '#111111',
    inputbackground: '#ffffff',
  },
];