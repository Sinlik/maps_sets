// 1: 1,2,3,4
// 2: ref
// 3: array(3) => true, array(3) => false
// 4: 

const hasDuplicate = arr => new Set(arr).size !== (arr).length

function isVowel(char)
{
    return "aeiou".includes(char)
}

function vowelCount(arr)
{
    const vowelMap = new Map()
    for(let char of arr)
    {
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar))
        {
            if(vowelMap.has(lowerCaseChar))
            {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
            }
            else
            {
                vowelMap.set(lowerCaseChar, 1)
            }
        }
    }
    return vowelMap
}