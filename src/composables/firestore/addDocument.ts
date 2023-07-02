
// NOTE : IMPORTED from OPL Viewers Need to be rewritten for current db fields 
import { ref, watchEffect } from "vue";
import { getFirestore } from "firebase/firestore"
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
    addDoc,
    Timestamp
} from "firebase/firestore";

const db = getFirestore()
const colRef = collection(db, "artworks_cg");
//! write file to firestore - note createdAT field!
const newItem = await addDoc(colRef, {

    title = artTitle.value,
    index = artIndex.value,
    idName = artIdName.value,
    variations = numVariations.value,
    year = numYear.value,
    dealer = artDealer.value,
    price = numPrice.value,
    curency = artCurrency.value || "dollar",
    sold = artSold.value,
    width = artWidth.value,
    height = artHeight.value,
    depth = artDepth.value,
    city = artCity.value,
    country = artCountry.value,
    noteDetails = artNote.value,
    material = artMaterial.value,
    framed = artFramed.value,
    gener = artGener.value,
    mounting = artMounting.value,
    laminated = artLaminated.value,
    category = artCategory.value,
    condition = artCondition.value,
    type = artType.value,
    subtype = artSubtype.value,
    sitters = artSitters.value,
    city = artLocationCity.value,
    panels = artPanels.value,
    notePrint = artPrintNotes.value,
    dateShooting = artShootingDate.value,
    cityShooting = artShootingCity.value,
    transparencySize = artTransparencyNumber.value ,
    transparencyNumber = artTransparencyNumber.value,
    productionLocation = artPhotographedAt.value,
    background = artBackground.value,
    accessories = artAccessories.value,
    reproduced = artReproduced.value,
    noteTransparency = artTransparencyNotes.value,
    image = artImage.value,
    
    createdAt = timestampe(now),


});
fileID.value = newItem.id
console.log('added file:', fileID.value);

//* update id field 
// id field can be removed ?
const updateDocId = doc(db, "posts", fileID.value);
await updateDoc(updateDocId, { id: fileID.value })
// wait 1,5 seconds for screen show 
const waitTwoSeconds = setTimeout(() => {
    router.push("/")
}, 1000) 
}

//! to clear form
// artTitle = null
// artIndex = null
// artIndex = null
// artIdName = null
// artVariations = null
// artYear = null
// artDealer = null
// artPrice = null
// numPrice = null
// artSold = null
// artHeight = null
// artDepth = null
// artCity = null