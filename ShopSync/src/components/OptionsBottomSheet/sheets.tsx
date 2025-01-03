import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import OptionsBottomSheet from "./OptionsBottomSheet";

registerSheet("options-sheet", OptionsBottomSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    'options-sheet': SheetDefinition<{
      payload: {
        id: number
      }; 
    }>;
  }
}

export {};