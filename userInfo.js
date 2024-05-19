let idCounter = 1;

function createUserProfiles(names,modifiedNames){
    return names.map((anyName,index) =>{
        const userProfile ={
            id : idCounter++,
            originalName: anyName,
            modifiedNames: modifiedNames[index],
           
        }
        return userProfile;
    });
}

namesArray = ["Jesus","Genesis","Mansion","Father","Emmanuel"];
modifiedNames = ["christ","BIBLE","destiny","JEHOVAH","saviour"] ;
const userProfiles = createUserProfiles(namesArray,modifiedNames);
console.log(userProfiles);