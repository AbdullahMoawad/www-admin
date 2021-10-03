export default function config(
  state = {
    name: 'Baraka',
    description: 'Next.js Tailwind CSS admin dashboard',
    url: '',
    layout: 'layout-1',
    collapsed: false,
    rightSidebar: false,
    backdrop: false,
  },
  action: { type: any; config: any; key: any; value: any },
) {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        ...action.config,
      };
    case 'SET_CONFIG_KEY':
      return {
        ...state,
        [`${action.key}`]: action.value,
      };
    default:
      return state;
  }
}
