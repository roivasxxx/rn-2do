import { Text, View, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from "react-native";
import Tab from "../tab";
import { useEffect, useState, Suspense } from "react";
import { getLink, getTags, saveLink } from "../../../../supabase/supabase";
import { LinkItem, Tag } from "../../../../types/types";
import { LinkProps } from "../../../../types/navigationTypes";
import styles from "../../../../utils/styles";
import TextInput from "../../../general/textInput";
import TagComponent from "../../../general/tagComponent";

const Link = (props: LinkProps) => {
    const params = props.route?.params || {};
    const [isLoading, setIsLoading] = useState(!!params.id);
    const [state, setState] = useState<LinkItem>({
        id: "",
        title: "",
        link: "",
        tags: [],
    });
    const [tags, setTags] = useState<Tag[]>([]);

    const saveItem = async () => {
        await saveLink(state);
    };

    useEffect(() => {
        const getItem = async () => {
            if (params.id) {
                const link = await getLink(params.id);
                if (link) {
                    setState(link);
                }
                setIsLoading(false);
            }
        };
        const getAllTags = async () => {
            const tags = await getTags();
            setTags(tags);
        };
        getItem();
        getAllTags();
    }, []);

    console.log(state);

    return (
        <>
            <Tab>
                <View
                    style={{ display: "flex", alignItems: "center", width: "100%", height: "100%" }}
                    nativeID="link-wrapper"
                >
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <View style={{ width: "100%", height: "100%" }}>
                            <View style={{ marginVertical: 10 }}>
                                <TextInput
                                    value={state.title}
                                    onChangeText={(text) => setState({ ...state, title: text })}
                                    label={"Title"}
                                />
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <TextInput
                                    value={state.link}
                                    onChangeText={(text) => setState({ ...state, link: text })}
                                    label={"Link"}
                                />
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                <View style={{ padding: 5, flex: 1 }}>
                                    <Text style={{ color: styles.text }}>Tags</Text>
                                </View>
                                <View style={{ flex: 8 }}>
                                    <FlatList
                                        keyExtractor={(item) => item.id}
                                        data={tags}
                                        renderItem={({ item }) => {
                                            const isTagSelected = state.tags.includes(item.id);
                                            return (
                                                <TagComponent
                                                    {...item}
                                                    isSelected={isTagSelected}
                                                    onPress={() =>
                                                        setState({
                                                            ...state,
                                                            tags: isTagSelected
                                                                ? state.tags.filter((id) => id !== item.id)
                                                                : [...state.tags, item.id],
                                                        })
                                                    }
                                                />
                                            );
                                        }}
                                        horizontal
                                        style={{ height: 50, borderRadius: 5 }}
                                    />
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </Tab>

            <TouchableOpacity
                onPress={() => console.log(state)}
                style={{
                    bottom: 0,
                    position: "absolute",
                    backgroundColor: styles.green + "bf",
                    width: "100%",
                    marginHorizontal: 10,
                    alignSelf: "center",
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ color: styles.text, fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
        </>
    );
};

export default Link;
