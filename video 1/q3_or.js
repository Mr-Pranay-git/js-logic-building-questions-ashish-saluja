function Area(length, width){
    if(length<=0){
        throw new RangeError("Length should be a positive and greater than 0.");
    }
    if(width<=0){
        throw new RangeError("width should be a positive and greater than 0.");
    }
    else{
        const area = length*width;
        console.log('area of Rectangle is' ,area);
    }
}

Area(2,5);
Area(1,0);
