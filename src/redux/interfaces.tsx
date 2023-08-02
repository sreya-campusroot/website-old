import { AnyCnameRecord } from "dns"

export interface sendOtpResState {
    success: boolean,
    message: string,
    data: number
}

export interface verifyOtpResState {
    success: boolean,
    message: string,
    data: {
        userEntryFound: boolean,
        AccessToken: string
    }
}
export interface registerResState {
    success: boolean,
    message: string,
    data: {
        token: string
    }
}

export interface popUpState {
    open: boolean,
    itemId: string,
    handleOk: () => void,
};
export interface modalState {
    open: boolean,
    modal_type: string,
    modal_data: any,
    handleOk: any,
};

export interface toastState {
    open: boolean,
    data: any
};
export interface constantsState {
    show_ok_btn: boolean
};

export interface authFormTypeState {

    form_type: string,

};

export interface dataState {
    loading: boolean,
    data: any,
    error: any,
};

export interface authState {
    loading: boolean,
    data: any,
    error: any,
};
export interface sendOtpState {
    loading: boolean,
    data: any,
    phoneNumber: string,
    error: any,
};

export interface objDataState {
    loading: boolean,
    data: any,

    error: any,
};
export interface counsellorState {
    loading: boolean,
    data: any,
    error: any,
};


