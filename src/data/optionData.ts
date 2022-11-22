export const difficulty = [
  { value: "", viewData: "랜덤" },
  { value: "easy", viewData: "쉬움" },
  { value: "medium", viewData: "보통" },
  { value: "hard", viewData: "어려움" },
];

export const category = [
  { value: "", viewData: "랜덤" },
  {
    value: "9",
    viewData: "General Knowledge",
  },
  {
    value: "10",
    viewData: "Entertainment: Books",
  },
  {
    value: "11",
    viewData: "Entertainment: Film",
  },
  {
    value: "12",
    viewData: "Entertainment: Music",
  },
  {
    value: "13",
    viewData: "Entertainment: Musicals & Theatres",
  },
  {
    value: "14",
    viewData: "Entertainment: Television",
  },
  {
    value: "15",
    viewData: "Entertainment: Video Games",
  },
  {
    value: "16",
    viewData: "Entertainment: Board Games",
  },
  {
    value: "17",
    viewData: "Science & Nature",
  },
  {
    value: "18",
    viewData: "Science: Computers",
  },
  {
    value: "19",
    viewData: "Science: Mathematics",
  },
  {
    value: "20",
    viewData: "Mythology",
  },
  {
    value: "21",
    viewData: "Sports",
  },
  {
    value: "22",
    viewData: "Geography",
  },
  {
    value: "23",
    viewData: "History",
  },
  {
    value: "24",
    viewData: "Politics",
  },
  {
    value: "25",
    viewData: "Art",
  },
  {
    value: "26",
    viewData: "Celebrities",
  },
  {
    value: "27",
    viewData: "Animals",
  },
  {
    value: "28",
    viewData: "Vehicles",
  },
  {
    value: "29",
    viewData: "Entertainment: Comics",
  },
  {
    value: "30",
    viewData: "Science: Gadgets",
  },
  {
    value: "31",
    viewData: "Entertainment: Japanese Anime & Manga",
  },
  {
    value: "32",
    viewData: "Entertainment: Cartoon & Animations",
  },
];

export const amount = new Array(50).fill(0).map((_, index) => ({
  value: String(index + 1),
  viewData: String(index + 1),
}));
