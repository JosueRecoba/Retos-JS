function countHours(year, holidays) {
    let resp = 0 
    let holidaysconcat = []
      holidays.map((holidays) => {
      holidaysconcat.push(`${holidays}/${year}`)
  
    })
    resp = holidaysconcat.map((holidays) => {
      return new Date(holidays).getDay()
    }).filter((item) => item !== 0 && item !== 6)
    resp = resp.length * 2
    return resp
  }