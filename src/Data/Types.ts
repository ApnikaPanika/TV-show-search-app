export type searchInfoType ={
    score: number,
    show: {
      id: number,
      url: string,
      name: string,
      type: string,
      language: string,
      genres: string[]
      status: string,
      runtime: number,
      averageRuntime: number,
      premiered: string,
      ended: string,
      officialSite: string,
      schedule: {
        time: string,
        days: string[]
      },
      rating: {
        average: number
      },
      weight: number,
      network: {
        id: number,
        name: string,
        country: {
          name: string,
          code: string,
          timezone: string
        }
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: number,
        thetvdb: number,
        imdb: number
      },
      image: {
        medium: string,
        original: string,
      } | null,
      summary: string,
      updated: number,
      _links: {
        self: {
          href: string
        },
        previousepisode: {
          href: string
        }
      }
    }};

export type singleShowInfo = {
  id: number,
  url: string,
  name: string,
  type: string,
  language: string,
  genres: string[],
  status: string,
  runtime: number,
  averageRuntime: number,
  premiered: string,
  ended: string,
  officialSite: string,
  schedule: {
    time: string,
    days: string[],
  },
  rating: {
    average: number
  },
  weight: number,
  network: {
    id: number,
    name: string,
    country: {
      name: string,
      code: string,
      timezone: string
    }
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: number,
    thetvdb: number,
    imdb: string
  },
  image: {
    medium: string,
    original: string
  },
  summary: string,
  updated: number,
  _links: {
    self: {
      href: string
    },
    previousepisode: {
      href: string
    }
  }
};

export type episodeTypeList = {
        id: number,
        url: string,
        name: string,
        season: number,
        number: number,
        type: string,
        airdate: string,
        airtime: string,
        airstamp: string,
        runtime: number,
        rating: {
          average: number
        },
        image: {
          medium: string,
          original: string
        },
        summary: string,
        _links: {
          self: {
            href: string
          }
        }
      };
