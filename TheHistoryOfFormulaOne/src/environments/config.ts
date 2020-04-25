import { ConfigSchema } from './../app/models/ConfigSchema';

export const CONFIG: ConfigSchema = {
  navItems: [
    { id: 1,
      title: 'Seasons',
      link: 'seasons/'
    },
    { id: 2,
      title: 'Drivers',
      link: 'drivers/'
    },
    { id: 3,
      title: 'Constructors',
      link: 'constructors/'
    }
  ],
  paginationSize: 12
}
