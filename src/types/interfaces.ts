export interface SauceInterface {
    _id:          string;
    userId:       UserID;
    name:         string;
    manufacturer: string;
    description:  string;
    mainPepper:   string;
    imageUrl:     string;
    heat:         number;
    likes:        number;
    dislikes:     number;
    userLiked:    string[];
    userDisliked: string[];
    createdAt:    Date;
    updatedAt:    Date;
    __v:          number;
}
export interface UserInterface {
    userId:      null | UserID;
    email:    null | string;
    token: null | string;
}

export enum UserID {
    The6287B3Bc7463870C5F1Eb0F0 = "6287b3bc7463870c5f1eb0f0",
}
