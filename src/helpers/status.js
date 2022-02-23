export const getStatusList = (status) => {
  switch (status) {
    case 0:
      return 'Unworked';
    case 1:
      return 'In Analyst Review';
    case 2:
      return 'Pending';
    case 3:
      return 'Done';
    case 4:
      return 'Unworked QA';
    case 5:
      return 'In QA Review';
    case 6:
      return 'QA Done';
    case 7:
      return 'Published';
    case 8:
      return 'Updated';
    default:
      return 'unknown';
  }
};
