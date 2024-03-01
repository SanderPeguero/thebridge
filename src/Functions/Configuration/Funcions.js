import Cards from "../../Components/Cards/Cards";
import { db } from "../../Firebase/Firebase";
import { set, ref, push, get, onValue } from "firebase/database";


export const confiCards = (Cards) => {
    console.log("firebase")
    const newRef = push(ref(db, "CardConfig/"))
    set(newRef, Cards)
}

// CardList

export const CardList = (setCardlist) => {
    const cardRef = ref(db, 'CardConfig')
    onValue(cardRef, (snapshot) => {
        const data = snapshot.val();
        const allCard = Object.values(data || {});
        console.log("Datos de firebases")
        console.log(allCard)
        setCardlist(allCard)
    });

}
