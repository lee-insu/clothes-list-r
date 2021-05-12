import firebaseApp from './firebase';

class Storage {

    clothesList() {
        const storageClothes = firebaseApp.db.collection("clothesList").doc("clothes")
        storageClothes.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }

}

export default Storage;