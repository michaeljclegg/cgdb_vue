import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, watch } from "vue";
import getCollection from "@/composables/firestore/getCollection";

export const useCollection = defineStore
  ('artworks', () => {


// const changeLowerCase = useLowerCase();
const error = ref("");
const artwork = ref({});


//! getCollection
//! add params of cityShoot like
//getCollection("artwork", "New York");
// to filter result set.
const getColl = () => {
  try {
    const { documents } = getCollection("artworks_cg", "");
    watch(documents, (documents, pre_documents) => {
      artwork.value = documents;
    //   console.log("artwork: ", artwork);
      return { artwork };
    });
  } catch (err: any) {
    console.log(err.message);
    error.value = "Could not retrieve data from Firestore / C&G Artworks collection";
  }
};


  

    return { artwork, getColl, error }
  })
// export default { useCollection }

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCollection, import.meta.hot))