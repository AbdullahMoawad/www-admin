import { FiCompass, FiUser } from 'react-icons/fi';

const initialState = [
  {
    title: 'Applications',
    items: [
      {
        url: '/dashboard',
        icon: <FiCompass size={20} />,
        title: 'Dashboard',
        items: [],
      },
      {
        url: '/user/dashboard',
        icon: <FiUser size={20} />,
        title: 'User',
        items: [],
      },
    ],
  },
];

export default function navigation(state = initialState, action:any) {
  switch (action.type) {
    default:
      return state;
  }
}
