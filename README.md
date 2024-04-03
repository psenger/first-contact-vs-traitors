# First Contact vs Traitors
> an exploration into human nature, the **Id**, **Ego**, and **Super Ego**

Upon viewing the Netflix adaptation of the ["Three Body Problem" by Cixin Liu](https://en.wikipedia.org/wiki/3_Body_Problem_(TV_series)),
one can't help but be drawn emotionally into the tragic life of Ye Wenjie. Experiencing 
the brutal murder of her father and her subsequent survival in a grueling Chinese Communist 
work camp nearly dying, her story is one of profound and extreme hardship. I was drawn 
into the movie and filled with sympathy for her.

However, her eventual betrayal, siding with the aliens, is as shocking as it is 
thought-provoking. Is this somehow revealing a hidden side of humanity? Are we 
this shallow? How is it possible that an entire cabal of people, humans no less, 
engaged in subverting humanity!

## Betrayal for Survival 

Under dire circumstances, trapped animals instinctively act irrationally to survive. 
We witness this when foxes, trapped in a snare, will bite their own leg off to
escape. 

There is a primal response in us as well, from the Freudian concept of **Id**, 
**Ego**, and **Superego**. The instinctual drive referred to as the **Id** 
is the most primitive part of our psyche, and includes our biological instinct 
of survival. So, is this betrayal originating from our **Id** and manifesting
into the plot? Or is the author simply spinning a story.

If you believe like I do that movies are an extension of **Id**, **Ego**, 
and **Superego** then we should be able to see this as a theme or trend... 

_I wanted to verify this._

## How

1. I literally copied **693** from [Science Fiction Movies on Wikipedia](https://en.wikipedia.org/wiki/List_of_films_featuring_extraterrestrials)
2. Pasted said movies directly into [create-data.js](./create-data.js), performed some staged functional programming to get the data into the copy-cut-paste buffer of my Apple Mac.
3. The result of step 2, was a JSON object in my copy-cut-paste buffer, I pasted it into a new json file, [data.json](./data.json)
4. I created another file [index.js](./index.js) which loaded [data.json](./data.json) and called Open AI to ask questions about the movies ( Unfortunately I burned through $10.00 ).
5. [index.js](./index.js) made a really nice file called [results.md](./results.md). I reformatted this file a little.
6. Then I created [build-stats-from-markdown-results.js](./build-stats-from-markdown-results.js) this program ingested the [results.md](./results.md) to create the stats I present here.

## Results

There are **693** Sciences Fiction movies listed on Wikipedia, this is not comprehensive, the earliest is 1902 and latest 2025

Total count of First Contact movies is **459** which is **66.23%** of all Sciences Fiction movies

Of the **459** First contact movies, Humans were traitor **162** times which is **35.29%** of the time.

## Follow Up

This data suggests a significant trend towards betrayal. 

Are movies vastly different from reality? How close is this to reality? Or, 
is it simply there to provoke us? Does this imply a real-world propensity 
for humans to side with an Alien invasion? Are we going to experience a 
35% likelihood of a traitorous population when we have First contact?

This figure seems high to me, and frankly, I would need to explore this 
further to have a conclusion, but it was fun to do and think about. 
