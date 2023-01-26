function wrapping(gifts) {
    //     const giftsWrapped = [];
    //     for(let i = 0; i < gifts.length; i++){
    //         console.log(gifts[i]);
    //         let repetir = '*'.repeat(gifts[i].length +2)
    //         giftsWrapped.push(`${ repetir}\n*${ gifts[i]}*\n${ repetir}`)
    //     }
    //     return giftsWrapped;
    //   }
    const respuesta = []
    gifts.map((gift)=>respuesta.push(`${ '*'.repeat(gift.length +2)}\n*${ gift}*\n${ '*'.repeat(gift.length +2)}`))
    return respuesta 
    }