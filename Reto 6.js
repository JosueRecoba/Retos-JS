function createCube(size) {
    let LA = '';
    let LAB = '';
    let Contador = 1
    for(let i = size; i >  0; i -- ){
      LA+=' '.repeat(i - 1)
      LA+='/\\'.repeat(Contador)
      LA+='_\\'.repeat(size)
      LA+='\n'
      Contador++
    }
    Contador--
    for(let i = 0; i <  size; i ++ ){
      LAB+=' '.repeat(i)
      LAB+='\\/'.repeat(Contador)
      LAB+='_/'.repeat(size)
      if(i != size-1)LAB+='\n'
      Contador--
    }
    return LA + LAB
  }