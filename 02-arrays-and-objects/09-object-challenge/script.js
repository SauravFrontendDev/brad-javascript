const library = [
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Big Little Lies",
    author: "Liane Moriarty",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

for (let i = 0; i < Object.keys(library).length; i++) {
  library[i].status.read = true;
}

const { title: firstBook } = library[0];
console.log(firstBook);

const libraryJson = JSON.stringify(library);

console.log(libraryJson);
