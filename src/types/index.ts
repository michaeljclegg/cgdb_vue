// enum Unit {
//     Inch = 0,
//     cm = 1,
//   }
export interface User {
    id: string;
    avatar: string;
    name: string;
}

export interface Image {
    name: string;
    url: string;
    location: string;
    createdAt: Date;
    type: string;
}

export type AsyncState = null | "loading" | "error" | "complete";

export type Unit = "inch" | "cm";

// for later development... 
export interface Artwork {
    title: string;
    index: number;
    workID: number;
    idName: string;
    variations: number;
    year: number;
    dealer: string;
    price: number;
    curency: string;
    sold: boolean;
    width: string;
    height: string;
    depth: string;
    city: string;
    country: string;
    material: string;
    framed: string;
    gener: string;
    mounting: string;
    laminated: string;
    category: string;
    condition: string;
    type: string;
    subtype: string;
    sitters: number;
    panels: number;
    notePrint: string;
    dateShooting: string;
    cityShooting: string;
    transparencySize: string;
    transparencyNumber: number;
    productionLocation: string;
    background: string;
    accessories: string;
    reproduced: string;
    noteTransparency: string;
    entryDate: timestamp;
    imageName: string;
    imageLocation: string;
    thumbnailName: string;
    thumbnailLocation: string;
}