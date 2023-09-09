import { Text, View, TouchableOpacity, FlatList } from "react-native";
import Style from "../../../../utils/styles";
import Tab from "../tab";
import { AllLinksProps } from "../../../../types/navigationTypes";
import { useEffect, useState } from "react";
import { getLinks } from "../../../../supabase/supabase";
import { LinkItem } from "../../../../types/types";
import LinkListItem from "../../../general/linkListItem";

const LinksList = ({ navigation, route }: AllLinksProps) => {
    const [links, setLinks] = useState<LinkItem[]>([]);
    useEffect(() => {
        const getItems = async () => {
            const links = await getLinks();
            console.log("LINKS:", links);
            setLinks(links);
        };
        getItems();
    }, []);
    return (
        <Tab>
            <Text style={{ color: Style.text }}>Link tab</Text>
            <FlatList
                data={links}
                renderItem={({ item }) => (
                    <LinkListItem
                        {...item}
                        {...{ navigation, route }}
                    />
                )}
            />
            <TouchableOpacity
                onPress={() => {
                    console.log("????");
                    navigation.navigate("link", { id: "" });
                }}
            >
                <Text>Press me to navigate</Text>
            </TouchableOpacity>
        </Tab>
    );
};

export default LinksList;
