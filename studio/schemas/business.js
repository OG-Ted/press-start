export default {
  name: "business",
  title: "Business",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "keywords",
      title: "Keywords",
      validation: (validate) => validate.required(),
      type: "string",
    },
    {
      name: "cocktail_list",
      title: "Cocktail List",
      validation: (validate) => validate.required(),
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "craft_bottle_list",
      validation: (validate) => validate.required(),
      title: "Craft Bottle List",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "domestic_bottle_list",
      validation: (validate) => validate.required(),
      title: "Domestic Bottle List",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "on_tap_list",
      validation: (validate) => validate.required(),
      title: "On Tap List",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "prices",
      validation: (validate) => validate.required(),
      title: "Prices",
      type: "object",
      fields: [
        {
          name: "pint_price",
          title: "Pint Price",
          type: "string",
        },
        {
          name: "pitcher_price",
          title: "Pitcher Price",
          type: "string",
        },
        {
          name: "domestic_price",
          title: "Domestic Price",
          type: "string",
        },
        {
          name: "craft_price",
          title: "Craft Price",
          type: "string",
        },
        {
          name: "cocktail_price",
          title: "Cocktail Price",
          type: "string",
        },
      ],
    },
    {
      name: "social",
      title: "Social",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "Facebook",
          validation: (validate) => validate.required(),
          type: "string",
        },
        {
          name: "instagram",
          title: "Instagram",
          validation: (validate) => validate.required(),
          type: "string",
        },
      ],
    },
    {
      name: "hours_location",
      title: "Hours and Location",
      type: "object",
      fields: [
        {
          name: "address",
          title: "Address",
          validation: (validate) => validate.required(),
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "hours",
          title: "Hours",
          validation: (validate) => validate.required(),
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
};
