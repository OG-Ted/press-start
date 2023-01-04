export default {
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "cover",
      title: "Cover",
      type: "image",
      validation: (validate) => validate.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (validate) => validate.required(),
    },
  ],
};
