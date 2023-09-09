import { Text, View, TouchableOpacity } from 'react-native'
import Style from '../../../../utils/styles'
import Tab from '../tab'
import { AllLinksProps } from '../../../../types/navigationTypes'

const LinksList = ({ navigation, route }: AllLinksProps) => {
    return (
        <Tab>
            <Text style={{ color: Style.text }}>Link tab</Text>
            <TouchableOpacity
                onPress={() => {
                    console.log('????')
                    navigation.navigate('link', { id: '' })
                }}
            >
                <Text>Press me to navigate</Text>
            </TouchableOpacity>
        </Tab>
    )
}

export default LinksList
