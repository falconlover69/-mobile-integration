import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import {Picker} from '@react-native-community/picker'

const UnitsPicker = ({unitsSystem, setUnitsSystem}) => {
    return (
        <View style={styles.unitsSystem}>
            <Picker selectedValue={unitsSystem} onValueChange={(item) =>setUnitsSystem(item)} mode='dropdown' itemStyle={{fontSize: 20}}>
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem: {
        top: 0,
        ...Platform.select({
            ios: {
                top: -20
            },
            android: {
                top: 20
            }
        }),
        left: -13,
        position: 'absolute',
        height: 50,
        width: 100,
    },
})

export default UnitsPicker
