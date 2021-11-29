import Home from "src/components/templates/home";

const HomePage = () => {
  return (
    <Home
      userData={mock_data}
      onlineList={mock_data_on}
      offlineList={mock_data_off}
    />
  );
};

export default HomePage;

// mock data
const mock_data = {
  id: "asdfasd",
  name: "user",
  type: 2,
  place: 1,
  state_message: "asdf",
  online: true,
};

const mock_data_on = [
  {
    id: "asdfasd",
    name: "adsfsfd",
    type: 2,
    place: 1,
    state_message: "asdf",
    online: true,
  },
  {
    id: "asdfasd",
    name: "adsfsfd",
    type: 2,
    place: 1,
    state_message: "asdf",
    online: true,
  },
];

const mock_data_off = [
  {
    id: "asdfasd",
    name: "adsfsfd",
    type: 2,
    place: 1,
    state_message: "asdf",
    online: false,
  },
  {
    id: "asdfasd",
    name: "adsfsfd",
    type: 2,
    place: 1,
    state_message: "asdf",
    online: false,
  },
];
