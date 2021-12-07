import { atom } from "recoil";

const LocationState = atom<number>({
  key: "LocationState",
  default: 0,
});

const states = {
  LocationState,
};

export default states;
