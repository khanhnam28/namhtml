const numberOneTriangle = ( n ) => {
    for(let i = 0; i< n; i++){
      for(let j =0; j<i; j++) {
        document.write("*")
      }
      document.write("<br/>")
    }
  }
  numberOneTriangle(5);