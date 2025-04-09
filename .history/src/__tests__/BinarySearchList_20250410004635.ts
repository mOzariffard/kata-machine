import binary_fn from "@code/BinarySearchList"

export default function bs_list() {haystack:Number[], needle:Number): Boolean{
    let low = 0 ; 
    let high = haystack.length;
    do{
        const mid = Math.floor(low + (high - low)/2);
        const value = heystack[mid];

        if(value== needle){
            return true;
        }else if(value > needle){
            high = mid; 
        }else{
            low = mid+1; 
        }

    }while( low < high ){
    }

    return false; 
}

