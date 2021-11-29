const UserType = (type: number) => {
  switch (type) {
    case 1:
      return "학생";
    case 2:
      return "기업";
    default:
      return "일반";
  }
};

export default UserType;
