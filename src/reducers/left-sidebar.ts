export default function leftSidebar(
  state = {
    showButtonText: true,
    showSectionTitle: true,
    showLogo: true,
    showCard: true,
    showAccountLinks: false,
    showProjects: true,
    showTags: true,
    card: 1
  },
  action:any
) {
  switch (action.type) {
    case 'SET_LEFT_SIDEBAR_CONFIG':
      return {
        ...state,
        [`${action.key}`]: action.value
      }
    default:
      return state
  }
}
