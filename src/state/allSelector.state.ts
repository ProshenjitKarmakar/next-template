import { sliceName } from './sliceName.state';

const campaignPreviewStates = (state: any) => state[sliceName.campaignPreviewSlice];
const uploadStates = (state: any) => state[sliceName.uploadSlice];

export {
    campaignPreviewStates,
    uploadStates,
};