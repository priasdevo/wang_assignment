// constants.js

const lightModePalette = {
  background: '#F0F5FA',
  backgroundAdjust: '#E0F0FD',
  primary: '#3498DB',
  secondary: '#2ECC71',
  text: '#2C3E50',
  subtext: '#627C98',
  accent: '#F1C40F',
  error: '#E74C3C',
  border: '#D9E1E8',
  shadow: 'rgba(0, 0, 0, 0.1)',
  hover: 'rgba(0, 0, 0, 0.05)',
  taskStatus: {
    Todo: '#F5F5F5',
    Develop: '#F9EBEA',
    Review: '#E8F8F5',
    Done: '#EAECEE',
  },
  taskType: {
    Design: '#E8F6F3',
    Frontend: '#FDEDEC',
    Backend: '#F4ECF7',
    Infra: '#FCF3CF',
    Testing: '#F5EEF8',
  },
}

const darkModePalette = {
  background: '#2C3E50',
  backgroundAdjust: '#3E5768',
  primary: '#3498DB',
  secondary: '#2ECC71',
  text: '#FFFFFF',
  subtext: '#95A5A6',
  accent: '#F1C40F',
  error: '#E74C3C',
  border: '#34495E',
  shadow: 'rgba(255, 255, 255, 0.1)',
  hover: 'rgba(255, 255, 255, 0.05)',
  taskStatus: {
    Todo: '#7F8C8D',
    Develop: '#641E16',
    Review: '#1B4F72',
    Done: '#626567',
  },
  taskType: {
    Design: '#1F618D',
    Frontend: '#148F77',
    Backend: '#A93226',
    Infra: '#7D3C98',
    Testing: '#CB4335',
  },
}

export { lightModePalette, darkModePalette }
