export class MenuConfig {

  public config: any = {};

  constructor() {
    this.config = {
      aside: {
        items: [
          // { section: 'Menu' },
          {
            title: 'Home',
            icon: 'la la-home',
            page: '/home'
          },
          {
            title: 'Trending',
            icon: 'la la-fire',
            page: '/trending'
          },
          {
            title: 'Podcasts',
            icon: 'la la-microphone',
            page: '/podcasts'
          },
          {
            title: 'People',
            icon: 'la la-users',
            page: '/people'
          },
          {
            title: 'Categories',
            icon: 'la la-files-o',
            page: '/categories'
          },

          // {
          //   title: 'Genres',
          //   icon: 'la la-diamond',
          //   page: '/genres'
          // },
          // {
          //   title: 'Free Music',
          //   icon: 'la la-music',
          //   page: '/music'
          // },

          // {
          //   title: 'Stations',
          //   icon: 'la la-bullseye',
          //   page: '/stations'
          // },
          // { section: 'Your Music' },
          // {
          //   title: 'Analytics',
          //   icon: 'la la-bar-chart',
          //   page: '/analytics'
          // },
          // {
          //   title: 'Favorites',
          //   icon: 'la la-heart-o',
          //   page: '/favorites'
          // },
          // {
          //   title: 'History',
          //   icon: 'la la-history',
          //   page: '/history'
          // },
          // { section: 'Music Events' },
          // {
          //   title: 'Events',
          //   icon: 'la la-calendar',
          //   page: '/events'
          // },
          // {
          //   title: 'Add Event',
          //   icon: 'la la-home',
          //   page: '/add-event'
          // },
          // { section: 'Extra Pages' },
          // {
          //   title: 'Error',
          //   icon: 'la la-times-circle-o',
          //   page: '/404'
          // }
        ]
      },
      userMenu: {
        items: [
          {
            title: 'Profile',
            icon: 'ion-md-contact',
            page: '/profile'
          },
          {
            title: 'Your Plan',
            icon: 'ion-md-radio-button-off',
            page: '/plan'
          },
          {
            title: 'Settings',
            icon: 'ion-md-settings',
            page: '/settings'
          }
        ]
      }
    };
  }
}
