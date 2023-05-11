const onMyBirthday = (isKayoSick)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isKayoSick){
                resolve(2)
            }else {
                reject(new Error("I am sad"))
            }
        },2000)
    });
};
function leKyNiem(isKayoSick) {
    onMyBirthday(isKayoSick)
        .then((result)=>{
            console.log(`I have  ${result} cakes`)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("Party")
        })

}
leKyNiem(true);
leKyNiem(false)
// onMyBirthday(false)
// .then((result)=>{
//     console.log(`I have  ${result}} cakes`)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Party")
// })
// onMyBirthday(true)
// .then((result)=>{
//     console.log(`I have ${result} cakes`)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Party")
// })