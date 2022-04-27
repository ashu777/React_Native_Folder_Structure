/**
 * Copyright 2022  https://github.com/ashu777, Inc. All rights reserved.
 */

import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
