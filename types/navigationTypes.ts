import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LinkScreenParamList = {
  "all-links": undefined;
  link: { id: string };
};

export type AllLinksProps = NativeStackScreenProps<
  LinkScreenParamList,
  "all-links"
>;

export type LinkProps = NativeStackScreenProps<LinkScreenParamList, "link">;
