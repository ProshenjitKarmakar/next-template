const baseURL = 'https://api.superlocalfans.com/api/local-fans';

const moduleName = {
    campaign: '/campaign',
    content: '/content',
    creator: '/creator',
    s3: '/s3'
};

export const campaignEndPoint = {
    publicPreview: baseURL + moduleName.campaign + '/campaign-public-preview/',
};

export const creatorEndPoint = {
    getVotableContent: baseURL + moduleName.creator + '/votable-content',
    createVotingPoll: baseURL + moduleName.creator + '/create-pull-for-votes',
    submitVote: baseURL + moduleName.creator + '/submit-vote',
};

export const contentEndPoint = {
    create: baseURL + moduleName.content + '/upload-metadata/',
    leaderboard: baseURL + moduleName.content + '/leaderboard',
};

export const s3EndPoint = {
    signedURL: baseURL + moduleName.s3 + '/put-signed-url',
    mediaUploadSignedURL: baseURL + moduleName.s3 + '/media-upload-signed-url',
    createMultiPart: baseURL + moduleName.s3 + '/create-multipart',
    partUploadSignedURL: baseURL + moduleName.s3 + '/part-upload-signed-url',
    completeMultipart: baseURL + moduleName.s3 + '/complete-multipart',
};