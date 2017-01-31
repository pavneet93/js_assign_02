let arr1=[]

arrAdd(arr1)

function arrAdd(array1){
    arr1.push(1,2,3)
    console.log(`Initial Values of Array Elements`,arr1)
    for(let i=0;i<arr1.length;i++){
        arr1[i]=arr1[i]+2
    }
    
    console.log(`Values of array Elements after Addition`,arr1)
}