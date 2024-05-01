export const isEmpty = (value: any, omitArray: boolean = false) => {
    if (value === null || value === undefined || value === 'null' || value === 'undefined') {
        return true;
    }
    if (typeof value === 'string') {
        return value.trim().length === 0;
    }
    if (Array.isArray(value)) {
        if (omitArray) {
            return false;
        }
        return value.length === 0;
    }
    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }
    return false;
};

export const isCheckEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        return true;
    }
};

export const isPhoneNumber = (number: string) => {
    const numericPattern = /^\d{7,15}$/;
    return numericPattern.test(number);
};

export const handleGoToUrl = ({ url, history, state, action = 'push' }: any) => {
    if (history) {
        history[action](url, { ...state });
    }
};



export const getCurrentDateTimeMilliSeconds = () => {
    const myDate = new Date();
    return myDate.getTime();
};
