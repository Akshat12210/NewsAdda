import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import TopNews from "./TopNews";
const News = (props) => {
  const news_data = [
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "hindustantimes.com",
      "title": "Peshawar blast LIVE: Pak Taliban commander claims responsibility for attack - Hindustan Times",
      "description": "Pakistan Mosque Blast Live updates: The attack was the city's worst since March last year, when a suicide bombing at a Shi'ite Muslim mosque during Friday prayers killed at least 58 people and injured nearly 200.",
      "url": "https://www.hindustantimes.com/world-news/pakistan-peshawar-explosion-updates-at-least-19-worshippers-in-blast-at-mosque-in-pakistan-s-peshawar-101675072259787.html",
      "urlToImage": "https://images.hindustantimes.com/img/2023/01/30/1600x900/PAKISTAN-UNREST-2_1675072294298_1675072294298_1675072300931_1675072300931.jpg",
      "publishedAt": "2023-01-30T12:36:11Z",
      "content": "An explosion in a mosque killed at least 46 worshippers and wounded over 100 in Pakistan's Peshawar, a hospital official said. Many of the casualties were police officers who had gathered for daily p… [+5865 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBCTV18"
      },
      "author": "Asmita Pant",
      "title": "Market Highlights: Sensex and Nifty 50 end higher amid choppy trade; most Adani stocks extended losses - CNBCTV18",
      "description": "Stock Market Highlights: Indian equity benchmarks BSE Sensex and NSE Nifty 50 witnessed a choppy trade on the first trading day of the week. The trade remained choppy throughout the session, with Sensex and Nifty 50 oscillating between the red and the green. …",
      "url": "https://www.cnbctv18.com/market/stock-market-live-updates-share-market-today-lt-bpcl-bajaj-finserv-vedanta-ntpc-15792201.htm",
      "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/01/Top-gainers-1.jpeg",
      "publishedAt": "2023-01-30T12:30:49Z",
      "content": "Market at Close | Last hour recovery help Sensex and Nifty 50 end choppy trade higher \r\n-- Adani group stocks remain volatile as investors asses impact of Hindenburg Report.\r\n-- Adani group stocks er… [+739 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Thetechoutlook.com"
      },
      "author": "Gopika Mahajan",
      "title": "What Will Happen if Earth Suddenly Stops Rotating? - The Tech Outlook",
      "description": "Have you ever wondered what will happen if the earth suddenly stops rotating? What will happen to human life and to the universe? Let's see what actually will happen if the earth suddenly stops rotating.",
      "url": "https://www.thetechoutlook.com/news/science/what-will-happen-if-earth-suddenly-stops-rotating/",
      "urlToImage": "https://www.thetechoutlook.com/wp-content/uploads/2023/01/Techoutlook-feature-image-1-80.jpg",
      "publishedAt": "2023-01-30T12:16:58Z",
      "content": "Have you ever wondered what will happen if the earth suddenly stops rotating? What will happen to human life and to the universe? Let’s see what actually will happen if the earth suddenly stops rotat… [+1905 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Republic World"
      },
      "author": "Harsh Vardhan",
      "title": "World's most powerful Inouye solar telescope offers fresh look at Sun's boiling surface - Republic World",
      "description": "The Inouye solar telescope in Hawai’i has offered a fresh glimpse into the happenings on the solar surface where the temperature is as high as 6,000°C.",
      "url": "https://www.republicworld.com/science/space/worlds-most-powerful-inouye-solar-telescope-offers-fresh-look-at-suns-boiling-surface-articleshow.html",
      "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/bt3imtx9bqpiu4n2_1675080407.jpeg",
      "publishedAt": "2023-01-30T12:08:00Z",
      "content": "The National Science Foundation (NSF) has released the latest visuals captured by the Inouye Solar Telescope of the Suns boiling surface. Located on the island of Maui in Hawaii, the Daniel K. Inouye… [+1841 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Tribune India"
      },
      "author": "The Tribune India",
      "title": "Third Covid booster linked with 90 per cent reduction in deaths: Study - The Tribune India",
      "description": "A third booster dose of a Covid-19 vaccine was associated with a 90 per cent reduction in death in people with multiple health conditions compared to two doses, according to a study conducted in Hong Kong.",
      "url": "https://www.tribuneindia.com/news/coronavirus/third-covid-booster-linked-with-90-per-cent-reduction-in-deaths-study-475022",
      "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_192444478.jpg",
      "publishedAt": "2023-01-30T12:04:00Z",
      "content": "PTI\r\nBeijing, January 30\r\nA third booster dose of a Covid-19 vaccine was associated with a 90 per cent reduction in death in people with multiple health conditions compared to two doses, according to… [+2399 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "\"I'd Rather Die Than Tie Up With BJP Again,\" Says Nitish Kumar - NDTV",
      "description": "Nitish Kumar today said he would \"rather die\" than return to an alliance with the BJP and accused the ruling party of launching cases against his deputy Tejashwi Yadav \"deliberately, without basis\".",
      "url": "https://www.ndtv.com/india-news/nitish-kumar-after-bjps-no-to-reunion-rather-die-than-join-hands-with-them-3735513",
      "urlToImage": "https://c.ndtvimg.com/2023-01/pisujsao_nitish-kumar_625x300_17_January_23.jpg",
      "publishedAt": "2023-01-30T11:55:00Z",
      "content": "Nitish Kumars comments come after BJP leaders said there is \"no question\" of patch-up\r\nPatna: Nitish Kumar today said he would \"rather die\" than return to an alliance with the BJP and accused the rul… [+2319 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Diksha Madhok",
      "title": "Adani slams US short seller 'attack on India' as stock rout hits $70 billion - CNN",
      "description": "The Adani Group has accused a US investment firm of launching \"a calculated attack\" on India by publishing a report alleging widespread fraud at the ports-to-power conglomerate.",
      "url": "https://www.cnn.com/2023/01/30/investing/india-adani-rebuttal-hindenburg-allegations-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230130135942-adani-corporate.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-01-30T11:36:00Z",
      "content": "The Adani Group has accused a US investment firm of launching a calculated attack on India by publishing a report alleging widespread fraud at the ports-to-power conglomerate.\r\nHindenburg Research re… [+4552 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "Oppo Enco Air3 true wireless earbuds to launch in India on February 3 - Times of India",
      "description": "Oppo has already confirmed that it will launch its all-new Oppo Reno 8T smartphone in India on February 3. The smartphone maker has now confirmed that",
      "url": "https://timesofindia.indiatimes.com/gadgets-news/oppo-enco-air3-true-wireless-earbuds-to-launch-in-india-on-february-3/articleshow/97444433.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-97444380,width-1070,height-580,imgsize-13100,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-01-30T11:26:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "Abu Dhabi's IHC invests $400 million in Adani Enterprises' FPO - Moneycontrol",
      "description": "IHC, one of Abu Dhabi's most valuable listed companies, was an investor in Adani Enterprises' share offering's anchor book as well.",
      "url": "https://www.moneycontrol.com/news/companies-2/abu-dhabis-ihc-invests-400-million-in-adani-enterprises-fpo-9963381.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/01/GettyImages-1242727527-687x435.jpg",
      "publishedAt": "2023-01-30T11:22:52Z",
      "content": "Abu Dhabi's International Holding Company (IHC) on January 30 disclosed that it has invested $400 million in Adani Enterprises' ongoing Rs 20,000-crore follow-on public offer (FPO) via its subsidiary… [+3021 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "Murali Vijay announces retirement from international cricket - Times of India",
      "description": "Cricket News: Veteran India opener Murali Vijay on Monday announced his retirement from international cricket. The 38-year-old opener from Chennai last represented",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/news/murali-vijay-announces-retirement-from-international-cricket/articleshow/97442665.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-97442755,width-1070,height-580,imgsize-52960,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-01-30T10:44:00Z",
      "content": "@BCCI @TNCACricket @IPL @ChennaiIPL https://t.co/ri8CCPzzWK\r\n— Murali Vijay (@mvj888) 1675069358000"
    },
    {
      "source": {
        "id": null,
        "name": "Washington Examiner"
      },
      "author": "Jack Birle",
      "title": "NASA's Artemis program works to avoid repeating past launch disasters - msnNOW",
      "description": "NASA's Artemis program successfully launched its first mission to the moon in November 2022, but the launch came months later than expected.",
      "url": "https://www.washingtonexaminer.com/news/nasa-artemis-program-works-avoid-repeating-past-dsiasters",
      "urlToImage": "https://mediadc.brightspotcdn.com/dims4/default/ee8e0ae/2147483647/strip/true/crop/4460x2342+0+316/resize/1200x630!/quality/90/?url=http%3A%2F%2Fmediadc-brightspot.s3.amazonaws.com%2Fd0%2Fa4%2Fd667cd654fe5a59afd5a1aef4322%2Fap22320344772106.jpg",
      "publishedAt": "2023-01-30T10:30:00Z",
      "content": "NASA's Artemis program successfully launched its first mission to the moon in November 2022, but the launch came months later than expected. \r\nThe originally scheduled August launch kept getting push… [+3098 chars]"
    }
  ]
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // const [topSection, setTopSection] = useState([]);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    console.log(data)
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // setTopSection(parsedData.articles.splice(0,5));
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    if(!data.ok) {
      setArticles(news_data);
      setTotalResults(news_data.length);
    }
    // console.log(articles)
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsAdda`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1
      }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {articles && articles.length > 0 ? (
            <>
              <h1
                className="text-center"
                style={{ margin: "35px 0px", marginTop: "90px" }}
              >
                NewsAdda - Top {capitalizeFirstLetter(props.category)} Headlines
              </h1>
              <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                endMessage={<h4 className="text-center">Drink Water 🥛</h4>}
                style={{ overflow: "hidden" }}
              >
                <div className="container">
                  <div className="row">
                    {articles.map((element) => {
                      return (
                        <div className="col-md-4" key={element.url}>
                          <NewsItem
                            title={element.title ? element.title : ""}
                            description={
                              element.description ? element.description : ""
                            }
                            imageUrl={
                              element.urlToImage === null ||
                                element.urlToImage === ""
                                ? "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                                : element.urlToImage
                            }
                            newsUrl={element.url}
                            author={element.author}
                            date={element.publishedAt}
                            source={element.source.name}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </InfiniteScroll>
            </>
          ) : (
            <h4 className="text-center">error</h4>
          )}
        </>
      )}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
