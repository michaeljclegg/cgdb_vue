// NOTE ald copy form opl for demon - can be deleted.w

import { ref, watchEffect, onMounted } from 'vue'
import { db } from '../boot/firebase'
import {
    collection,
    getDocs,
    onSnapshot,
    query,
    limit,
    where,
    orderBy,
} from 'firebase/firestore'

const documents = ref(null)
let locationName = 'London' //search item (city)
let col = 'posts' //collection name
let options = ref({}) //used by select Location dropDown
const locationValue = ref(null) // used by select Location dropDown
let colRef = '' // collection reference
let cityName = ''
let cityCount = 0

//* -----------------------------------------------------
const getLocations = async () => {
    const q = query(collection(db, 'posts'))
    let results = []

    const getLocation = await getDocs(q)
    results = getLocation.docs.map((doc) => doc.data()['location'])
    results.sort()
    //* count locations
    const locationCount = results.reduce((obj, results) => {
        !obj[results] ? (obj[results] = 1) : obj[results]++
        return obj
    }, {})
    // Convert to Array with ES6!
    const locationArray = Object.entries(locationCount) // nested array-> [array(2), [Array(2)]...
    let newCleanArray = []
    locationArray.forEach(([key, value]) => {
        newCleanArray.push(key + ' - ' + value)
    }) // destructure into new array
    options.value = newCleanArray
    //? previous solution move array into set and back again.
    // let mySet1 = new Set(results)
    // results = locationCount
}

//RUN FIRESTORE QUERY (used by select Location dropDown)
//* --------------------------------------------------------- 1
const runQuery = () => {
    //let colRef = query(collection(db, col), where("location", "==", "Berlin"));
    if (locationValue.value === null) {
        colRef = query(collection(db, 'posts'))
    } else {
        cityCount = locationValue.value.split(' ').pop() // get Count of city locations //! can use for limit in query bellow.
        cityName = locationValue.value.split(' ')[0] // get city name
        colRef = query(
            collection(db, 'posts'),
            limit(25),
            where('location', '==', cityName)
        )
    }
    // orderBy("createdAt", "desc"), //? need new index if used ??

    const unsub = onSnapshot(colRef, (snapshot) => {
        let results = []
        snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        return { documents }
        unsub() //!
    })
}

//RUN FIRESTORE QUERY II
//* ------------------------------------------------------------------ 2
const runQuery2 = () => {
    console.log('running query 2!')
    let q = query(
        collection(db, 'posts'),
        where('location', '==', locationName)
    )
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cities = []
        querySnapshot.forEach((doc) => {
            cities.push(doc.data().location)
        })
        console.log(
            `Current number of OPL in ${locationName} is ${cities.length}`
        )
        unsubscribe()
    })
}

//RUN FIRESTORE QUERY III - using getDocs()
//* ------------------------------------------------------------------ 3

const runQuery3 = async () => {
    const querySnapshot = await getDocs(collection(db, col))
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
    })
}

//RUN FIRESTORE getAuth() - require author ID input
//* ------------------------------------------------------------------ 3

/* const runQuery4 = async () => {
    const querySnapshot = await getAuth(collection(db, col))
} */

/* watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  }); */

onMounted(() => {
    console.log('mounted!')
    getLocations()
})

watchEffect(() => {
    console.log('Location search value is: ', locationValue.value)
    console.log(locationValue.value)
    runQuery()
})
</script>

<style lang="sass"></style>
