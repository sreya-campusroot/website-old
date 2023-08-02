import { TextInput } from "flowbite-react";
import React, { FC, useState } from "react";
import { CheckIcon } from "../../../../assets/svgIcons";
import { ReactNode } from "react";
import { editProfile } from "../../../../services";


interface UserInfoProps {
    info: {
        name: string;

        email: string;
    };
}

const UserInfo: FC<UserInfoProps> = ({ info }) => {
    const editState = {
        name: false,
        email: false,
    };
    const [edit, setEdit] = useState(editState);
    const [userInfo, setUserInfo] = useState({
        name: info.name,
        email: info.email,
    });



    // interface EditButtonProps {
    //     handleEdit: () => void;
    // }
    // const dispatch = useDispatch();
    // const EditButton: FC<EditButtonProps> = ({ handleEdit }) => {
    //     return (
    //         <button
    //             className="absolute right-4 top-4 "
    //             onClick={() => {
    //                 handleEdit();
    //             }}
    //         >
    //             <EditIcon />
    //         </button>
    //     );
    // };

    interface UserInfoWrapperProps {
        children: ReactNode;
        value: string;
    }
    const UserInfoWrapper: FC<UserInfoWrapperProps> = ({ value, children }) => {
        return (
            <div className="col-span-12">
                <div className="p-4 bg-[var(--grey-shade-light)]  relative">
                    <p className="text-sm text-center">{value}</p>

                    {children}
                </div>
            </div>
        );
    };


    // const editProfile = async (postJson:any) => {
    //     const token = localStorage.getItem('token')

    //     dispatch({ type: types.EDIT_USER_PROFILE_LOADING })
    //     try {
    //         const { data } = await api.put(editProfileEndPoint(), postJson, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         })
    //         console.log('user profile res', data);

    //         if (data.success) {
    //             dispatch({ type: types.EDIT_USER_PROFILE_SUCCESS, payload: data.data })
    //         }

    //     }
    //     catch {
    //         dispatch({ type: types.EDIT_USER_PROFILE_FAILED })
    //     }

    // }
    return (
        <div className="grid grid-cols-12 gap-4">
            {edit.name ? (
                <div className="col-span-12 user-details-input">
                    <div className="relative">

                        <TextInput
                            id="email1"
                            placeholder="Name"
                            required
                            type="text"
                            sizing={"lg"}
                            value={userInfo.name}
                            onChange={(e) => {
                                console.log(";lll");
                                setUserInfo({ ...userInfo, name: e.target.value });
                            }}
                        />
                        <button
                            className="absolute right-4 top-4 "
                            onClick={() => {
                                editProfile({ name: userInfo.name });
                                setEdit({ ...edit, name: false });
                            }}
                        >
                            <CheckIcon />
                        </button>
                    </div>
                </div>
            ) : (
                <UserInfoWrapper value={info.name}>
                    {/* <EditButton
                        handleEdit={() => {
                            setEdit({ ...edit, name: true });
                        }}
                    /> */}
                </UserInfoWrapper>
            )}

            {edit.email ? (
                <div className="col-span-12 user-details-input">
                    <div className="relative">
                        <TextInput
                            id="email1"
                            placeholder="Email"
                            required
                            type="email"
                            sizing={"lg"}
                            value={userInfo.email}
                            onChange={(e) => {
                                setUserInfo({ ...userInfo, email: e.target.value });
                            }}
                        />
                        <button
                            className="absolute right-4 top-4 "
                            onClick={() => {
                                setEdit({ ...edit, email: false });
                            }}
                        >
                            <CheckIcon />
                        </button>
                    </div>
                </div>
            ) : (
                <UserInfoWrapper value={info.email}>
                    {/* <EditButton
                        handleEdit={() => {
                            setEdit({ ...edit, email: true });
                        }}
                    /> */}
                </UserInfoWrapper>
            )}
        </div>
    );
};

export default UserInfo;
