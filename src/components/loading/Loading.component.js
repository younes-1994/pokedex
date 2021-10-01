import React from "react";
import { ActivityIndicator } from "react-native";
import { primary } from "../../constants/theme.constant";

const Loading = ({ status = true }) => status && <ActivityIndicator size="large" color={primary} />;
export default Loading;
