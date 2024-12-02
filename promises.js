let prom=new Promise(
    (res,rej)=>{
    console.log("mandy");
    let flag=false;
     if(flag){
        res("mandy less go");
     }
     else{
        rej("mandy stop");
     }
    });
    prom.then(
        (message)=>{
            console.log("your status is",message);         
        }
    ).catch((mes)=>{
        console.log("your status is",mes);
    }).finally(()=>{
        console.log("hello i will run whatsoever");
    })
setTimeout(()=>{
    console.log("mandy");
 },5000);
// let prom1=new Promise((res,rej)=>{
//   setTimeout(res,4000,"first")
// })
// let prom2=new Promise((res,rej)=>{
//     setTimeout(res,6000,"second")
//   })
//   let prom3=new Promise((res,rej)=>{
//     setTimeout(res,8000,"third")
//   })
//   Promise.all([prom2,prom1,prom3]).then((val)=>{
//      console.log(val);
//   })
let prom1=new Promise((res,rej)=>{
    setTimeout(res,4000,"first")
  })
  let prom2=new Promise((res,rej)=>{
      setTimeout(res,6000,"second")
    })
    let prom3=new Promise((res,rej)=>{
      setTimeout(rej,8000,"third")
    })
    Promise.all([prom2,prom1,prom3]).then((val)=>{
       console.log(val);
    }).catch((mes)=>{
        console.log("oh shit",mes);
    })

