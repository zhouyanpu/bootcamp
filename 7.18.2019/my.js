arr=[1,2,3];

console.log(arr);

Array.prototype.myeach=function(cback){
    for(let i=0;i<this.length;i++){
        cback(this[i]);
    }
}

myeach = function(arr,cback){
    for(let i=0;i<arr.length;i++){
        cback(arr[i]);
    }
}

arr.myeach(function(ele){
    console.log(ele);
})

Array.prototype.myMap = function(cback){
    arr2=this;
    for(let i=0;i<this.length;i++){
        arr2[i]=cback(this[i]);
    }
    return arr2;
}
myMap = function(arr,cback){
    arr2=arr;
    for(let i=0;i<arr.length;i++){
        arr2[i]=cback(arr[i]);
    }
    return arr2;
}

Array.prototype.myFilter = function(cback){
    arr2=[];
    for(let i=0;i<this.length;i++){
        if(cback(this[i])) arr2[arr2.length]=this[i];
    }
    return arr2;
}
myFilter = function(arr, cback){
    arr2=[];
    for(let i=0;i<arr.length;i++){
        if(cback(arr[i])) arr2[arr2.length]=arr[i];
    }
    return arr2;
}

Array.prototype.myPush = function(item){
    this[this.length]=item;
}
myPush = function(arr, item){
    arr[arr.length]=item;
}

Array.prototype.myIncludes = function(item){
    for(let i=0;i<this.length;i++){
        if(this[i]===item) return true; 
    }
    return false;
}
myIncludes = function(arr, item){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===item) return true; 
    }
    return false;
}

Array.prototype.mySome = function(cback){
    for(let i=0;i<this.length;i++){
        if(cback(this[i])) return true; 
    }
    return false;
}
mySome = function(arr, cback){
    for(let i=0;i<arr.length;i++){
        if(cback(arr[i])) return true; 
    }
    return false;
}

Array.prototype.myEvery = function(cback){
    for(let i=0;i<this.length;i++){
        if(!cback(this[i])) return false; 
    }
    return true;
}
myEvery = function(arr, cback){
    for(let i=0;i<arr.length;i++){
        if(!cback(arr[i])) return false; 
    }
    return true;
}

Array.prototype.myIndexOf = function(item){
    for(let i=0;i<this.length;i++){
        if(this[i]===item) return i; 
    }
    return -1;
}
myIndexOf = function(arr, item){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===item) return i; 
    }
    return -1;
}

Array.prototype.mylastIndexOf = function(item){
    count=-1;
    for(let i=0;i<this.length;i++){
        if(this[i]===item) count=i; 
    }
    return count;
}
mylastIndexOf = function(arr, item){
    count=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===item) count=i; 
    }
    return count;
}

Array.prototype.myReduce = function(cback){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum = cback(sum, this[i]);
    }
    return sum;
}
myReduce = function(arr, cback){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum = cback(sum, arr[i]);
    }
    return sum;
}
