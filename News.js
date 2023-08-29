import React, { Component } from 'react'
import NewsItem from './newsItem'
import './News.css'
export class News extends Component {
  articles = [
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Nick Timiraos",
      "title": "Powell Says Fed Will 'Proceed Carefully' on Further Rate Rises - The Wall Street Journal",
      "description": "Fed chair notes economy hasn’t cooled as expected, saying more strength could warrant additional action",
      "url": "https://www.wsj.com/economy/central-banking/powell-says-fed-will-proceed-carefully-on-any-further-rate-rises-31b6fc6a",
      "urlToImage": "https://images.wsj.net/im-842273/social",
      "publishedAt": "2023-08-25T22:31:00Z",
      "content": null
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Ross Devonport",
      "title": "Martino: Lionel Messi in doubt to make MLS debut Saturday - ESPN",
      "description": "Inter Miami manager Gerardo \"Tata\" Martino said Friday that Lionel Messi's availability for his potential MLS debut this weekend remains up in the air.",
      "url": "https://www.espn.com/soccer/story/_/id/38259083/lionel-messi-doubt-make-mls-debut-saturday-martino",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0825%2Fr1215563_1296x729_16%2D9.jpg",
      "publishedAt": "2023-08-25T21:37:00Z",
      "content": "Aug 25, 2023, 05:37 PM ET\r\nInter Miami manager Gerardo \"Tata\" Martino said Friday that Lionel Messi's availability for his potential MLS debut this weekend remains up in the air.\r\nInter Miami is in N… [+3182 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Noah Lyles THREEPEATS 200m for WORLD CHAMPIONSHIP DOUBLE, first since Usain Bolt | NBC Sports - NBC Sports",
      "description": "Noah Lyles won his third consecutive World Title in the men’s 200m, becoming the first man to win the 100m and 200m at the same World Championships since Usa...",
      "url": "https://www.youtube.com/watch?v=OAiIq1qzPrA",
      "urlToImage": "https://i.ytimg.com/vi/OAiIq1qzPrA/maxresdefault.jpg",
      "publishedAt": "2023-08-25T21:21:17Z",
      "content": null
    },
    
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Marianne Garvey",
      "title": "'Bottoms' cast features both new and familiar faces - CNN",
      "description": "The new dark comedy “Bottoms” is getting a lot of buzz.",
      "url": "https://www.cnn.com/2023/08/25/entertainment/bottoms-movie-film-comedy/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230825121140-01-bottoms-movie.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-25T21:16:00Z",
      "content": "The new dark comedy Bottoms is getting a lot of buzz.\r\nThe R-rated movie, directed by Emma Seligman, stars Rachel Sennott and Ayo Edebiri, and previously premiered at this years SXSW Festival in Marc… [+2100 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Phillip M. Bailey, Rachel Looker",
      "title": "Georgia governor pressured to publicly back Fani Willis in Trump case - USA TODAY",
      "description": "One of Georgia's most outspoken faith leader wants assurances prosecutor Fani Willis won't be punished amid election case as GOP scrutiny intensifies.",
      "url": "https://www.usatoday.com/story/news/politics/2023/08/25/georgia-brian-kemp-support-fani-willis-trump-indictment/70677179007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/15/USAT/70593326007-gty-1615613099.jpg?crop=2996,1695,x3,y77&width=2996&height=1695&format=pjpg&auto=webp",
      "publishedAt": "2023-08-25T20:59:24Z",
      "content": "ATLANTA A Georgia faith leader representing more than 530 churches is calling upon Gov. Brian Kemp to publicly oppose Republican efforts to remove or discipline Fulton County District Attorney Fani W… [+7452 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NBC 6 South Florida"
      },
      "author": "John Morales",
      "title": "Will a tropical system form in the Gulf? John Morales looks at what to expect - NBC 6 South Florida",
      "description": "NBC6 hurricane specialist John Morales takes a look at a possible tropical system in the Gulf and what impacts it may have on Florida.",
      "url": "https://www.nbcmiami.com/weather/hurricane-season/will-a-tropical-system-form-in-the-gulf-john-morales-looks-at-what-to-expect/3098830/",
      "urlToImage": "https://media.nbcmiami.com/2023/08/082523-NBC6-potential-tropical-development.jpg?quality=85&strip=all&resize=1200%2C675",
      "publishedAt": "2023-08-25T20:46:30Z",
      "content": "Beware of the \"I\" storm.\r\nSince 2001, eleven infamous Atlantic hurricane names starting with the letter \"I\" have been retired due to the severe damage theyve generated.\r\nMost recently, Major Hurrican… [+3261 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Jackie Wattles",
      "title": "See stunning footage captured by India’s Chandrayaan-3 lunar lander - CNN",
      "description": "India’s lunar lander deployed a tiny six-wheeled rover to traverse the moon’s surface and analyze the chemical composition of the soil.",
      "url": "https://www.cnn.com/2023/08/25/world/india-chandrayaan-3-lander-rover-images-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230825104900-03-india-chandrayaan-3-lander-rover-new-photos-0823-screenshot.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-25T19:50:00Z",
      "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nThe history-making Chandrayaan-3 mission, which landed… [+2758 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Mari Yamaguchi, USA TODAY",
      "title": "Japan begins release of radioactive wastewater from Fukushima nuclear plant into Pacific Ocean - USA TODAY",
      "description": "The operator of the Fukushima Daiichi nuclear power plant says it has begun releasing its first batch of treated radioactive water into the ocean.",
      "url": "https://www.usatoday.com/story/news/world/2023/08/24/radioactive-wastewater-fukushima-nuclear-plant/70666092007/",
      "urlToImage": "https://www.gannett-cdn.com/authoring/authoring-images/2023/08/24/USAT/70666098007-ap-23235853682797.jpg?auto=webp&crop=5255,2970,x0,y266&format=pjpg&width=1200",
      "publishedAt": "2023-08-25T19:41:19Z",
      "content": "OKUMA, Japan The operator of the tsunami-wrecked Fukushima Daiichi nuclear power plant says it has begun releasing its first batch of treated radioactive water into the Pacific Ocean a controversial … [+4455 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Ashley Strickland",
      "title": "Mysterious dark spot detected on Neptune - CNN",
      "description": "Astronomers have observed a mysterious large dark spot in Neptune’s atmosphere, along with a bright feature that has never been spotted before.",
      "url": "https://www.cnn.com/2023/08/25/world/neptune-dark-spot-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230825130230-02-neptune-dark-spot.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-25T19:26:00Z",
      "content": "Editors note: Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAstronomers have spotted a large and mys… [+4532 chars]"
    },
   
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "JOSEPH WILSON",
      "title": "Soccer player Jenni Hermoso says 'in no moment' was kiss with Luis Rubiales consensual - The Associated Press",
      "description": "The president of Spain’s soccer federation has defiantly refused to resign for kissing a female player on the lips after the Women’s World Cup final. Luis Rubiales told a general assembly of the federation on Friday that his kiss with player Jenni Hermoso on …",
      "url": "https://apnews.com/article/rubiales-spanish-soccer-federation-president-kiss-womens-world-cup-3be367f0de6fbf1984e4885df0dcb00c",
      "urlToImage": "https://dims.apnews.com/dims4/default/208f343/2147483647/strip/true/crop/3172x1784+0+165/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F40%2F9ad4bc1bf8c5f16455ca4548a4b5%2F5bca965bdaa94b90b5f30d09c7b6c5df",
      "publishedAt": "2023-08-25T18:15:00Z",
      "content": "BARCELONA, Spain (AP) The embattled president of Spains soccer federation defiantly refused to step down Friday after insisting that a kiss on the lips with Womens Soccer player Jenni Hermoso was con… [+7301 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WESH Orlando"
      },
      "author": "Eric Burris",
      "title": "SpaceX Crew-7 launch scrubbed - WESH 2 Orlando",
      "description": "The Crew-7 launch scheduled for early Friday morning was scrubbed.",
      "url": "https://www.wesh.com/article/spacex-crew-7-launch-scrubbed/44909297",
      "urlToImage": "https://kubrick.htvapps.com/vidthumb/2c18699b-5d9f-4c90-9243-ed41e8ae6ef8/df8f69fa-c68b-46f3-a7ef-a651e21f6dac.jpg?crop=0.776xw:0.775xh;0.176xw,0.225xh&resize=1200:*",
      "publishedAt": "2023-08-25T17:12:00Z",
      "content": "BREVARD COUNTY, Fla. —The Crew-7 launch scheduled for early Friday morning was scrubbed.\r\nNASA says everything is working fine, but they want more time to make sure it is safe. Specifically, the team… [+3215 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Erum Salam, Oliver Laughland",
      "title": "Louisiana residents told to 'get out now' in face of sweeping wildfire - The Guardian US",
      "description": "Nearly 1,000 people in Merryville, in Beauregard parish close to Texas border, ordered to evacuate as Tiger Island fire burns nearby",
      "url": "https://www.theguardian.com/us-news/2023/aug/25/louisiana-wildfire-tiger-island-fire-evacuation",
      "urlToImage": "https://i.guim.co.uk/img/media/e1c51f7883a6114da5f493366772fce46a7f0c69/0_120_1201_721/master/1201.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6574f9cfb5d0db89aef9fec2c060cddc",
      "publishedAt": "2023-08-25T17:08:00Z",
      "content": "A rare uncontrollable wildfire in Louisiana has forced nearly 1,000 residents to evacuate the town of Merryville in Beauregard parish, near the states border with Texas.\r\nGet out now! the Beauregard … [+3832 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Ali Harb",
      "title": "Who is Vivek Ramaswamy, the rising Republican presidential candidate? - Al Jazeera English",
      "description": "US author and entrepreneur is confidently pushing unorthodox, right-wing ideas while promoting unity in 2024 campaign.",
      "url": "https://www.aljazeera.com/news/2023/8/25/who-is-vivek-ramaswamy-the-rising-republican-presidential-candidate",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/2023-07-15T213843Z_816498809_RC2X32A7MU26_RTRMADP_3_USA-ELECTION-REPUBLICANS-1692917752.jpg?resize=1920%2C1440",
      "publishedAt": "2023-08-25T16:37:54Z",
      "content": "Washington, DC Vivek Ramaswamy wants to be the next Donald Trump: an outsider who will take on the United States political establishment, win the presidency and push a hard-right agenda from the Oval… [+8542 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Ciara Linnane",
      "title": "New coronavirus variant has experts on alert and WHO is urging countries to step up COVID surveillance - MarketWatch",
      "description": "SARS-CoV-2 variant BA.2.86 has 30 mutations in the spike protein compared with previous variants, including those that will be included in coming boosters",
      "url": "https://www.marketwatch.com/story/new-covid-variant-has-experts-on-alert-and-who-is-urging-countries-to-step-up-surveillance-ec8eab56",
      "urlToImage": "https://images.mktw.net/im-842177/social",
      "publishedAt": "2023-08-25T16:26:00Z",
      "content": "A new variant of the SARS-CoV-2 coronavirus has put epidemiologists around the world on alert, and the World Health Organization is asking countries to sustain early warning, surveillance and reporti… [+4985 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Milan records hottest day since 1763 - Reuters",
      "description": "Italy's northern city of Milan registered a new record high average daily temperature of 33 Celsius (91.4 Fahrenheit) on Wednesday as a heatwave which began around mid-August reached its peak, the regional environmental protection agency (ARPA) said on Friday.",
      "url": "https://www.reuters.com/world/europe/milan-records-hottest-day-since-1763-2023-08-25/",
      "urlToImage": "https://www.reuters.com/resizer/1TAMlH1pbnt2RHM4tctL11J2CKY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XPEN4YTXKBITNNYWYBGNUNZ5VA.jpg",
      "publishedAt": "2023-08-25T16:01:00Z",
      "content": "ROME, Aug 25 (Reuters) - Italy's northern city of Milan registered a new record high average daily temperature of 33 Celsius (91.4 Fahrenheit) on Wednesday as a heatwave which began around mid-August… [+1144 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Kristin Myers",
      "title": "Britney Spears Reportedly ‘Needed Stitches’ After ‘Explosive’ Fight With Sam Asghari - Yahoo Entertainment",
      "description": "Singer Britney Spears reportedly needed stitches after an “explosive” argument with actor Sam Asghari. On August 16, 2023, the “Special Ops: Lioness” actor...",
      "url": "https://www.yahoo.com/entertainment/britney-spears-reportedly-needed-stitches-154504650.html",
      "urlToImage": "https://media.zenfs.com/en/theblast_73/12499f8838cb2bea8a4c34dbceb7d1cc",
      "publishedAt": "2023-08-25T15:45:04Z",
      "content": "Singer Britney Spears reportedly needed stitches after an \"explosive\" argument with actor Sam Asghari.\r\nOn August 16, 2023, the \"Special Ops: Lioness\" actor filed for divorce in court documents obtai… [+4517 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Chris Isidore",
      "title": "UAW members approve possible strikes at GM, Ford and Stellantis - CNN",
      "description": "Members of the United Auto Workers union overwhelmingly approved possible strikes at the nation’s three unionized automakers next month, as the union tries to win back many of the concessions it lost more than 15 years ago and protect members during the trans…",
      "url": "https://www.cnn.com/2023/08/25/business/uaw-strike-vote-gm-ford-stellantis/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230824163100-01-gm-factory-detroit-111721-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-25T15:40:00Z",
      "content": "Members of the United Auto Workers union overwhelmingly approved possible strikes at the nations three unionized automakers next month, as the union tries to win back many of the concessions it lost … [+4084 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Eurogamer.net"
      },
      "author": "Will Judd",
      "title": "AMD announces RX 7800 XT and RX 7700 XT graphics cards to face off against RTX 4070 and 4060 Ti - Eurogamer.net",
      "description": "Digital Foundry breaks down AMD's RX 7800 XT and RX 7700 XT graphics card announcements, including performance analysis and thanks to Yeston for fresh colours.",
      "url": "https://www.eurogamer.net/digitalfoundry-2023-amd-announces-rx-7800-xt-7700-xt-graphics-cards",
      "urlToImage": "https://assetsio.reedpopcdn.com/rx-7800-xt.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "publishedAt": "2023-08-25T15:30:00Z",
      "content": "AMD has officially unveiled its RX 7800 XT and RX 7700 XT graphics cards, finally completing its RDNA 3 lineup after announcing its first GPUs in November last year. Both cards are intended to target… [+4576 chars]"
    }
  ]
  constructor() {
    super();
    console.log('I am a constructor from new component');
    this.state = {
      articles: this.articles
    }
  }
  render() {
    return (
      <div> 
                <h1 className='top-heading'>NewsMonkey - Top Headlines</h1>

      <div className='cards-container'>
        {this.state.articles.map((element)=> {

return  <div key={element.url} className='cards-container'>
          <NewsItem   title={element.title} description={element.description} url={element.urlToImage}/>
        </div>
        })}
       



      </div>
      </div>
      
    )
  }
}

export default News
