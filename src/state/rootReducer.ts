import {combineReducers} from 'redux';
import {sliceName} from "@/state/sliceName.state";
import folderSlice from "@/state/features/folder/folderSlice";

const appReducers = {
    [sliceName.folder]: folderSlice,

}
export const rootReducers = combineReducers(appReducers)