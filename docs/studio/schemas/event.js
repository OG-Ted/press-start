export default {
  name: "game",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
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
    {
      name: "date",
      title: "Date",
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    }
  ],
};
