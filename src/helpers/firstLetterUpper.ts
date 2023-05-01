export function firstLetterUpper(str: string){

    const formatedFirstLetterString = str.charAt(0).toUpperCase() + str.slice(1);

    return formatedFirstLetterString;
}