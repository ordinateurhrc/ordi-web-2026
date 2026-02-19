export const motmData: Record<string, Record<string, string>> = {
  "January": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "February": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "March": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "April": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "May": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "June": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "July": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "August": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "September": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "October": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "November": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  },
  "December": {
    "No Name 1": "No Dept",
    "No Name 2": "No Dept",
    "No Name 3": "No Dept",
    "No Name 4": "No Dept",
    "No Name 5": "No Dept"
  }
};

export const getMonthOrder = (): string[] => {
  const monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthOrder.filter(month => motmData[month]);
};

