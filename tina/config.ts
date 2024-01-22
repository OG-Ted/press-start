import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: '18d40a2c-9601-46d0-ab1b-7271f9b22c38',
  // Get this from tina.io
  token: '8537525d198566a81d6223ba2d349971e7bfd8d8',

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      publicFolder: "./",
      mediaRoot: "assets/uploads",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "yaml",
        label: "Drink Prices",
        name: "prices",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "prices",
        },
        fields: [
          {
            name: "pint_price",
            label: "Pint Price",
            type: "string"
          },
          {
            name: "pitcher_price",
            label: "Pitcher Price",
            type: "string"
          },
          {
            name: "domestic_price",
            label: "Domestic Price",
            type: "string"
          },
          {
            name: "craft_price",
            label: "Craft Price",
            type: "string"
          },
          {
            name: "cocktail_price",
            label: "Cocktail Price",
            type: "string"
          }
        ],
      },
      {
        label: "On Tap List",
        name: "on_tap_list",
        path: "_data",
        format: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "on-tap-list",
        },
        fields: [
          {
            name: "names",
            label: "Names",
            type: "string",
            list: true,
          }
        ],
      },
      {
        format: "yaml",
        label: "Cocktail List",
        name: "cocktail_list",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "cocktail-list",
        },
        fields: [
           {
            name: "names",
            label: "Names",
            type: "string",
            list: true,
          }
        ],
      },
      // {
      //   format: "yaml",
      //   label: "Notification Bar",
      //   name: "notification_bar",
      //   path: "_data",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "notification-bar",
      //   },
      //   fields: [
      //      {
      //       name: "text",
      //       label: "Text",
      //       type: "string",
      //     }
      //   ],
      // },
      {
        format: "yaml",
        label: "Homepage Text",
        name: "homepage_text",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "homepage-text",
        },
        fields: [
          {
            name: "first",
            label: "First Sentence",
            type: "string",
          },
          {
            name: "second",
            label: "Second Sentence",
            type: "string",
          },
          {
            name: "third",
            label: "Third Sentence",
            type: "string",
          },
        ],
      },
      {
        format: "yaml",
        label: "Craft Bottle List",
        name: "craft_bottle_list",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "craft-bottle-list",
        },
        fields: [
        {
            name: "names",
            label: "Names",
            type: "string",
            list: true,
          }
        ],
      },
      {
        format: "yaml",
        label: "Domestic Bottle List",
        name: "domestic_bottle_list",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "domestic-bottle-list",
        },
        fields: [
         {
            name: "names",
            label: "Names",
            type: "string",
            list: true,
          }
        ],
      },
      {
        format: "yaml",
        label: "Game List",
        name: "game_list",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "game-list",
        },
        fields: [
          {
            type: "object",
            list: true,
            name: "games",
            label: "Games",
            ui: {
              itemProps: (item) => {
                return { label: `${item?.name}`}
              },
              defaultItem: {
                name: "Game"
              }
            },
            fields: [
              {
                name: "name",
                label: "Name",
                type: "string"
              },
              {
                name: "company",
                label: "Company",
                type: "string",
              },
              {
                name: "cover",
                label: "Cover",
                type: "image",
              }
            ]
          },          
        ],
      },
      {
        format: "yaml",
        label: "Social Media",
        name: "social_media",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "social",
        },
        fields: [
          {
            name: "facebook",
            label: "Facebook",
            type: "string",
          },
          {
            name: "instagram",
            label: "Instagram",
            type: "string",
          },
        ],
      },
      {
        format: "yaml",
        label: "Hours and Location",
        name: "hours_and_location",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hours-location",
        },
        fields: [
        {
            type: "object",
            list: true,
            name: "hours",
            label: "Hours",
            ui: {
              itemProps: (item) => {
                return { label: `${item?.line}`}
              },
              defaultItem: {
                line: 'Hours'
              }
            },
            fields: [
              {
                name: "line",
                label: "Line",
                type: "string"
              }
            ]
          },  
          {
            type: "object",
            list: true,
            name: "address",
            label: "Address",
            ui: {
              itemProps: (item) => {
                return { label: `${item?.line}`}
              },
              defaultItem: {
                line: 'Address'
              }
            },
            fields: [
              {
                name: "line",
                label: "Line",
                type: "string"
              }
            ]
          }, 
                    
        ],
      },
      {
        format: "yaml",
        label: "SEO",
        name: "seo",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "seo",
        },
        fields: [
          {
            name: "keywords",
            label: "Keywords",
            type: "string",
          },
          {
            name: "desc",
            label: "Description",
            type: "string",
          },
          {
            name: "title",
            label: "Title",
            type: "string",
          },
        ],
      },
      {
        format: "yaml",
        label: "Gallery",
        name: "gallery",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "gallery-list",
        },
        fields: [
          {
            name: "image",
            label: "Image",
            type: "image",
            list: true
          }
        ],
      },
      {
        format: "yaml",
        label: "Events",
        name: "events",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "event-list",
        },
        fields: [
          {
            type: "object",
            list: true,
            name: "events",
            label: "Events",
            ui: {
              itemProps: (item) => {
                return { label: `${item?.name}`}
              },
              defaultItem: {
                name: "Event"
              }
            },
            fields: [
              {
                name: "name",
                label: "Name",
                type: "string"
              },
              {
                name: "description",
                label: "Description",
                type: "string",
              },
              {
                name: "cover",
                label: "Cover",
                type: "image",
              },
              {
                name: "date",
                label: "Date",
                type: "datetime"
              }
            ]
          },  
        ],
      }
    ],
  },
});
