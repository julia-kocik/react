export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  headerIcon: 'home',
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'TO DO APP',
  subtitle: '',
};

export const searchContent = {
  title: 'Search results',
  icon: 'search',
};

export const faqData = {
  title: 'FAQ',
  image: 'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
export const infoData = {
  title: 'INFO',
  image: 'https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Fun',
    description: 'Things I want to do!',
    image: 'https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'list-2',
    title: 'Shopping',
    description: 'Thing I need to buy!',
    image: 'https://cdn.pixabay.com/photo/2019/02/16/14/19/shopping-4000414_1280.jpg',
  },
  {
    id: 'list-3',
    title: 'Job',
    description: 'Things I need to do!',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Food',
    icon: 'utensils',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Drink',
    icon: 'coffee',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Cosmetics',
    icon: 'bath',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Coding',
    icon: 'code',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Business',
    icon: 'business-time',
  },
  {
    id: 'column-9',
    listId: 'list-3',
    title: 'Investment',
    icon: 'wallet',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    index: 0,
    done: false,
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
    done: false,
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
    done: false,
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
    done: false,
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
    done: false,
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
    done: false,
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;