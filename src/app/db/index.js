export const db = {
  employees: [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "hashedPassword",
      profile: {
        designation: "Software Engineer",
        department: "Engineering",
        location: "Office A",
      },
      attendance: [
        {
          date: "2024-01-22",
          status: "Present",
        },
        {
          date: "2024-01-21",
          status: "Absent",
        },
      ],
    },
  ],
  users: [
    {
      id: 1,
      email: "nadir@gmail.com",
      password: "123123123",
    },
  ],
};
