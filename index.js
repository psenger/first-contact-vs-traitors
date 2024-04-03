const OpenAI = require('openai')
const fs = require('fs')
const path = require('path')

const prompt = (movies) => `I'm going to provide a list of movie titles proceeded with the year it was released. These movies may or may not have included first contact with humans but they all are about extra terrestrial or aliens. What I would like you to do is identify the movies that had first contact, and if the humans in the movie had a faction of humans that sympathized with the aliens in a traitorous fashion or not. I want you to only respond with a Markdown Table, do not include the row header or header separator, with five columns nothing else. The first will be the movie title I have provided, the second the year, the third column will be titled "First Contact" and include "FC" for first contact and blank for none, the fourth column titled "Traitorous" will include "T" for traitor "NT" for non-traitorous or blank for none or not applicable, the last column will titled "Plot" and include a summary of the movie plot: \n${movies}`
const data = require('./data.json')
const appendMarkdown = (result) => {
    return fs.appendFileSync(path.join(__dirname,'results.md'), `${result.trim()}\n` );
}
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})
async function askQuestion(content) {
    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{role: 'user', content}],
        stream: false
    });

    return response.choices.map(({message}) => message.content).join('\n');
}

function chunkArray(array, size) {
    if (array.length <= size) {
        return [array]
    }
    return [array.slice(0, size), ...chunkArray(array.slice(size), size)]
}

const run = async () => {
    const chunky = chunkArray(data, 10)
        .map((movies) => {
            return prompt(movies.map(({
                                          franchise,
                                          year,
                                          title
                                      }) => `* ${title} ${year}`).join('\n'))
        })
    appendMarkdown('| Movie Title | Year | First Contact | Traitorous | Plot |\n| --- | :---: | :---: | :----: | --- |')
    for (const chunk of chunky){
        appendMarkdown( await askQuestion(chunk) )
    }
    return 'done'
}


run()
    .then((...args) => {
        console.log(...args)
        process.exit(0)
    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
