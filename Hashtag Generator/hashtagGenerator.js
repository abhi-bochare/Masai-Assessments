let input = ["javascript", "programming", "web", "development", "code", "learning", "tutorial", "technology", "computer", "a"];

function generateHashtag(input){
    let filtered = input.filter((word) => {
        return word.length >= 3;
    });

    let tags = filtered.map((word) => {
        return "#" + word.charAt(0).toUpperCase() + word.slice(1);
    });

    let top = tags.sort((a,b) => {
        return b.length - a.length;
    }) 
    
    let hashTags = top.slice(0,5);
    
    return hashTags;
}
console.log(generateHashtag(input));