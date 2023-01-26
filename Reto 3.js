function distributeGifts(packOfGifts, reindeers) {
    let pesoRegalo = 0;
    let pesoDeRenosMax = 0;
    packOfGifts.map((regalo) => {
      pesoRegalo += regalo.length;
    });
    
    reindeers.map((renos) => {
    pesoDeRenosMax += (renos.length * 2);
   });
  
   return Math.floor(pesoDeRenosMax / pesoRegalo); 
  }