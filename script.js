const NAME = "Leopoldo"
const LAST_NAME = "Miranda"
let school = "SDGKU"
let hobbie = "movies theater"
let favoriteFood = "Pizza"
let favoriteColor = "red"
let marvelHero1 = "Iron man"
let marvelHero2 = "Hulk"
let marvelHero3 = "Thor"
let marvelHero4 = "Spiderman"
let sport = "Basketball"

let date = "03/01/2022"
let daysOfTheWeek = 7
let weeksOfTheMonth = 4
let monthsOfTheYear = 365

let professor = "Samantha Jimenez"
const html = "Hyper Text Markup Language"
const css = "Cascading Style Sheet"
const js = "Javascript"
let programmingLanguage = "React"

let template = `Hello my name is <b>${NAME} ${LAST_NAME}</b>  i am studying in <b>${school}</b>,
              my hobbie is go to ${hobbie}, favorite sport: ${sport}, favorite food: ${favoriteFood}, favorite color: ${favoriteColor}.

              <hr/>
              professor: ${professor},
              <br/>
              101,102 unit: (HTML)${html} and (CSS)${css},
              <br/>
              103 unit: (JS)${js} and ${programmingLanguage}

              <br><hr/>
              <i>
                the week has ${daysOfTheWeek} days
                the month has ${weeksOfTheMonth} weeks
                the year has ${monthsOfTheYear} months.
              </i>

              <br><hr/>
              Some Marvel characters are:
              <mark>${marvelHero1}, ${marvelHero2}, ${marvelHero3}, ${marvelHero4}</mark>

              <hr/>
              Date: ${date}
`
document.write(template)

