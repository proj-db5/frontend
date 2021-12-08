const LocationType = (type: number) => {
  switch (type) {
    case 0:
      return "공학관";
    case 1:
      return "백양관";
    case 2:
      return "학생회관";
    case 3:
      return "신촌역";
    default:
      return "-";
  }
};

export default LocationType;
