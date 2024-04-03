const fs = require('fs')
const path = require('path')
const content = fs.readFileSync(path.join(__dirname,'results.md'),{ encoding: 'utf-8' }).toString();
const movies = content
    .split('\n')
    .filter((_, index) => index > 1)
    .map(line => {
        const [title,year,first_contact,traitorous, plot] = line
            .split('|')
            .filter((_, index) => index > 0)
            .map(_=>_.trim())
        return {title,year:parseInt(year),first_contact,traitorous, plot}
    })

let { max, min } = movies.reduce((acc, obj) => ({
    max: obj.year > acc.max ? obj.year : acc.max,
    min: obj.year < acc.min ? obj.year : acc.min,
}), { max: -Infinity, min: Infinity });

const fcMovies = movies.filter(movie => movie.first_contact === 'FC')
const fcPercentage = (fcMovies.length / movies.length) * 100
const traitorous = fcMovies.filter(movie => movie.traitorous === 'T')
const traitorousPercentage = ( traitorous.length / fcMovies.length ) * 100

console.log(`There are ${movies.length} Scifi movies listed on Wikipedia, the earliest is ${min} and oldest ${max}`)
console.log(`Total count of First Contact movies: ${fcMovies.length} which is ${fcPercentage.toFixed(2)}% of all Scifi movies`)
console.log(`Of the ${fcMovies.length} First contact movies, Humans were traitor ${traitorous.length} times which is ${traitorousPercentage.toFixed(2)}% of the time.`)

