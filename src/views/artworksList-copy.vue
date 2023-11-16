<script setup lang="ts">

import { getFirestore } from "firebase/firestore";
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot 
} from "firebase/firestore";

const db = getFirestore();
const q = query(
    collection(db, 'artworks_cg'),
    where("city", "==", 'NEW YORK'), 
    orderBy("index", "asc")
  );

const useUseCity = async () => {
  const unsubscribe = await onSnapshot(q, (snapshot) => {
    let documents = [];
    
    snapshot.forEach(doc => {
      documents.push({
        ...doc.data(),
        id: doc.id  
      });
    });
    
    return { documents };
  });
};
</script>
<template>
  <div>{{ documents }}</div>

</template>

