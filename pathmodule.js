const path= require('path')

const a1= path.basename('file:///C:/Users/91620/Desktop/drink%20water/index.html')
const a2= path.dirname('file:///C:/Users/91620/Desktop/drink%20water/index.html')
console.log(a1)
console.log(a2)
const a3=path.extname(__filename)
console.log(a3)