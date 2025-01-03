
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { ViewComponent } from '../Shared/View';
import { TextComponent } from '../Shared/Text';
import { colours } from '@/src/constants';

type CustomSheetProps = SheetProps<"options-sheet"> & {
  shoppingListId: string;
};

const OptionsBottomSheet = (props: CustomSheetProps) => {
  // console.log(props.payload.shoppingListId, 'show props');
  return (
    <ActionSheet id={props.shoppingListId}>
      <TouchableOpacity>
        <ViewComponent style={styles.listItem}>
          <TextComponent text="Invite Friends" />
          <FontAwesome5 name="user-friends" size={24} color={colours.primary} />
        </ViewComponent>
      </TouchableOpacity>
      <TouchableOpacity>
        <ViewComponent style={styles.listItem}>
          <TextComponent text="Edit List" />
          <MaterialIcons name="edit" size={24} color={colours.primary} />     
        </ViewComponent>
      </TouchableOpacity>
      <TouchableOpacity>
        <ViewComponent style={styles.listItem}>
          <TextComponent text="Delete List" />
          <MaterialIcons name="delete-forever" size={24} color={colours.primary} />
        </ViewComponent>
      </TouchableOpacity>
    </ActionSheet>
  );
};

export default OptionsBottomSheet;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});