import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import { TextComponent } from "./Shared/Text";
import { SubItem } from "../types";
import { colours } from "../constants";
import { supabase } from "../utils/supabase";
import { SheetManager } from "react-native-actions-sheet";

interface ShoppingListContainerProps {
  id: number;
  title: string;
  list: SubItem[];
};

interface BottomSheetPayload {
  id: number;
  shoppingListId: number;
};

const ShoppingListContainer = ({ id, title, list }: ShoppingListContainerProps) => {

  // get users who are on this list
  // const getUsers = async () => {
  //   const { data, error } = await supabase
  //     .from('shopping_list_users')
  //     .select('*')
  //     .eq('list_id', id);
  //   if (error) {
  //     throw new Error(error.message);
  //   }
  //   return data;
  // };

  const showOptionsBottomSheet = () => {
    SheetManager.show("options-sheet", {
      payload: { 
        shoppingListId: id 
      } as BottomSheetPayload,
    });
  };

  const listLength = list?.length > 0 ? `${list.length} items` : 'No items';
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <TextComponent text={title} />
        <Pressable onPress={() => showOptionsBottomSheet()}>
          <SimpleLineIcons name="options-vertical" size={24} color={colours.primary} />
        </Pressable>
      </View>
      <View style={styles.flexRow}>
        <TextComponent text='List Users Here' />
        <TextComponent text={listLength} />
      </View>
    </View>
  );
};

export default ShoppingListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colours.white,
    borderWidth: 1,
    borderColor: colours.primary,
    borderRadius: 5,
    shadowColor: colours.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginVertical: 10,
    padding: 10,
    width: '90%'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10
  },
});