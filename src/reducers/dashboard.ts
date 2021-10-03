export default function dashboard(
  state = { value: 0, conversions: {} },
  action: any,
) {
  switch (action.type) {
    case 'SET_DASHBOARD':
      let { key, value }: any = { ...action };
      return {
        ...state,
        [`${key}`]: value,
      };
    default:
      return state;
  }
}
