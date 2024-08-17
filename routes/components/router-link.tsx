import { FC } from "react";
import { Link, LinkProps } from "expo-router";

// ----------------------------------------------------------------------

type RouteParams = {};

const RouterLink: FC<LinkProps<RouteParams>> = (props) => {
  return <Link {...props} />;
};

export default RouterLink;
