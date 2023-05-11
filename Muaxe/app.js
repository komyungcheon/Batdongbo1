const buyCar = (money) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(money >= 10000){
                resolve("co the mua xe")
            } else {
            reject("K du tien mua xe")
            }
        },1000);


    })
}
function buyCars(money) {
buyCar(money).then(()=>{
    console.log("co the mua xe")
})
    .catch((error)=>{
        console.log(error)
    })
}

buyCars(100001);
// buyCars(5000);

