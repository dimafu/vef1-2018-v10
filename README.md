# Project 10

Calculation game based on the homework 7 should be implemented. All of the tools used during the semester should be used. All the outlook is given with sass along with an appropriate HTML file. It is allowed to change what is given.

Functionality example is given in `demo.mp4`.

## Game

When `Byrja leik` is clicked a countdown is started, which count 10 seconds. Meanwhile a user is shown an exercise obtained from `lib/question.js`. After every answer a new exercise is shown. Total number of exercises along with the number of correct answers is counted and when time is out this information displays alongside the score.

Base for the game is given in `lib/game.js`. Functionality to make questions is given in `lib/question.js`. Assistant functions are given in `lib/helpers.js`.

## Score table

Initially score table is empty. After the first value is obtained the message that there is no score registered is deleted and a score table displayed. Under the score table whih is not empty a button which allows to delete all inputs from the score table. When the game is over the score should be calculated (this formula was extremely clever late in the evening in November, but has its shortcomings which early became clear, allowed to add, please do so):

```math
correct := number of correct answers
total := number of questions
time := length of games, in seconds
score := ((correct / total)^2 + correct) * total / time
```

`score` is then rounded and multiplied by `100`.

All the input in the score table should be stored in `localStorage`.

Base for the score table is given in `lib/highscore.js` along with functionality to save scores in `lib/storage.js`.

## Tools and base code

The following tools are set up in the project:

* rollup to pack up code
* babel to transpile code and make it accessible for more web-browsers
* node-sass for Sass
* eslint for lint in JavaScript
* stylelint for lint in Sass
* browser-sync to run the project

```bash
> npm install
> npm test -s
# Upp koma villur
> npm run dev
# Vefþjónn keyrir á localhost:3000
```

All the base code is under `src/` and translated code is under `dist/`. `index.html` refers correctly into the correct code.

In the given code there are functions with comments. Allowed to change all the search.

`game.js` built only using modules but `highscore.js` on using class.

## Mat

* 10% – Snyrtilegur kóði, engar villur þegar `npm test` er keyrt
* 50% – Spila leik og sjá niðurstöður eftir leik
* 20% – Vista niðurstöður í stigatöflu
* 20% – Hlaða inn stigatöflu og hreinsa stigatöflu

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 12. nóvember 2018.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags þriðjudaginn 20. nóvember 2018.

Skilaboð skulu innihalda:

* Slóð á verkefni á heimasvæði
* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `arnar44`, `mimiqkz`, `gorri4`, `hinriksnaer`, `gunkol`, `freyrdanielsson`, `osk`

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

---

> Útgáfa 0.1
