// getting places from APIs
function loadPlaces(position) {
    // const params = {
    //     radius: 300,    // search places not farther than this value (in meters)
    //     clientId: 'Y5JWRBN4RH03TOAEYHPBLUW041GYT1LG4FBZWUC1K5RQ3HCT',
    //     clientSecret: '4C2POPTU24Z2BITZCSUQMPGBC0JCPEF1QOK4I51K1PSJUNR5',
    //     version: '20220901',    // foursquare versioning, required but unuseful for this demo
    // };

    // // CORS Proxy to avoid CORS problems
    // const corsProxy = 'https://cors-anywhere.herokuapp.com/';

    // // Foursquare API (limit param: number of maximum places to fetch)
    // const endpoint = `https://api.foursquare.com/v2/venues/search?intent=checkin
    //     &ll=${position.latitude},${position.longitude}
    //     &radius=${params.radius}
    //     &client_id=${params.clientId}
    //     &client_secret=${params.clientSecret}
    //     &limit=30 
    //     &v=${params.version}`;
    // console.log(endpoint)
    // return fetch(endpoint)
    //     .then((res) => {
    //         return res.json()
    //             .then((resp) => {
    //                 return resp.response.venues;
    //             })
    //     })
    //     .catch((err) => {
    //         console.error('Error with places API', err);
    //     })

};




window.onload = () => {
    const places = 
    
   [
           
    {
              "id": "4c96c22c58d4b60c68063e29",
              "name": "Prestige Richmond",
              "contact": {},
              "location": {
                "address": "Lalbaugh Road",
                "lat": 12.963090369327947,
                "lng": 77.59467915421814,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.963090369327947,
                    "lng": 77.59467915421814
                  }
                ],
                "distance": 9,
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Lalbaugh Road</span>",
                  "<span itemprop=\"addressLocality\">Bangalore</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/prestige-richmond/4c96c22c58d4b60c68063e29",
              "canonicalPath": "/v/prestige-richmond/4c96c22c58d4b60c68063e29",
              "categories": [
                {
                  "id": "4d954b06a243a5684965b473",
                  "name": "Residential Building (Apartment / Condo)",
                  "pluralName": "Residential Buildings (Apartments / Condos)",
                  "shortName": "Residential",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 12,
                "checkinsCount": 33
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4f94dfa0a17c2feb9d26719e",
              "name": "Institute of Baking & Cake Art",
              "contact": {
                "phone": "09886305404",
                "formattedPhone": "098863 05404",
                "twitter": "ibcablr"
              },
              "location": {
                "address": "46/3, Mission road",
                "crossStreet": "Junction of double road and Mission road",
                "lat": 12.962187438676137,
                "lng": 77.59438817341373,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962187438676137,
                    "lng": 77.59438817341373
                  }
                ],
                "distance": 96,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "KAR",
                "country": "India",
                "contextLine": "Bangalore, KAR",
                "contextGeoId": -362882985,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">46/3, Mission road</span> (Junction of double road and Mission road)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">KAR</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/institute-of-baking--cake-art/4f94dfa0a17c2feb9d26719e",
              "canonicalPath": "/v/institute-of-baking--cake-art/4f94dfa0a17c2feb9d26719e",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1ad941735",
                  "name": "Trade School",
                  "pluralName": "Trade Schools",
                  "shortName": "Trade School",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/education/tradeschool_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/education/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": true,
              "stats": {
                "tipCount": 2,
                "usersCount": 37,
                "checkinsCount": 62
              },
              "url": "http://www.ibcablr.com",
              "urlSig": "JvxnqAWYiyiZeZhT8XjIGgOpMTI=",
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "venuePage": {
                "id": "64874064"
              },
              "storeId": "",
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "5ba77169acb37f002c6da8dc",
              "name": "The Bangalore Cafe",
              "contact": {},
              "location": {
                "lat": 12.96151,
                "lng": 77.594883,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.96151,
                    "lng": 77.594883
                  }
                ],
                "distance": 170,
                "postalCode": "560027",
                "cc": "IN",
                "neighborhood": "Shanti Nagar",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Shanti Nagar",
                "contextGeoId": 10000200,
                "formattedAddress": [
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/the-bangalore-cafe/5ba77169acb37f002c6da8dc",
              "canonicalPath": "/v/the-bangalore-cafe/5ba77169acb37f002c6da8dc",
              "categories": [
                {
                  "id": "4bf58dd8d48988d10f941735",
                  "name": "Indian Restaurant",
                  "pluralName": "Indian Restaurants",
                  "shortName": "Indian",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/indian_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/food/indian",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 71,
                "checkinsCount": 112
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4de14a1e45dd3eae8784a109",
              "name": "Bharat Petroleum Petrol Bunk",
              "contact": {},
              "location": {
                "address": "Mission road",
                "lat": 12.962159598918927,
                "lng": 77.59434340706957,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962159598918927,
                    "lng": 77.59434340706957
                  }
                ],
                "distance": 100,
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Mission road</span>",
                  "<span itemprop=\"addressLocality\">Bangalore</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/bharat-petroleum-petrol-bunk/4de14a1e45dd3eae8784a109",
              "canonicalPath": "/v/bharat-petroleum-petrol-bunk/4de14a1e45dd3eae8784a109",
              "categories": [
                {
                  "id": "4bf58dd8d48988d113951735",
                  "name": "Gas Station",
                  "pluralName": "Gas Stations",
                  "shortName": "Gas Station",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/gas_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/gas",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 61,
                "checkinsCount": 189
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4eca781a49010f98cffa2d89",
              "name": "Richmond Rd FlyOver",
              "contact": {},
              "location": {
                "address": "KH Road",
                "lat": 12.962204406604956,
                "lng": 77.59419232052699,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962204406604956,
                    "lng": 77.59419232052699
                  }
                ],
                "distance": 102,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">KH Road</span>",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/richmond-rd-flyover/4eca781a49010f98cffa2d89",
              "canonicalPath": "/v/richmond-rd-flyover/4eca781a49010f98cffa2d89",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1df941735",
                  "name": "Bridge",
                  "pluralName": "Bridges",
                  "shortName": "Bridge",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/bridge_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/parks_outdoors/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 2,
                "usersCount": 402,
                "checkinsCount": 1279
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4f7c0584e4b0b7ee681d906f",
              "name": "Sunheri Restaurant",
              "contact": {},
              "location": {
                "address": "Woodlands Hotel, 5 Rajaram Mohan Roy Rd.",
                "crossStreet": "Off Richmond Circle, next to Ramanashree Hotel",
                "lat": 12.964787516750432,
                "lng": 77.59498692156059,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.964787516750432,
                    "lng": 77.59498692156059
                  }
                ],
                "distance": 200,
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Woodlands Hotel, 5 Rajaram Mohan Roy Rd.</span> (Off Richmond Circle, next to Ramanashree Hotel)",
                  "<span itemprop=\"addressLocality\">Bangalore</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/sunheri-restaurant/4f7c0584e4b0b7ee681d906f",
              "canonicalPath": "/v/sunheri-restaurant/4f7c0584e4b0b7ee681d906f",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1d3941735",
                  "name": "Vegetarian / Vegan Restaurant",
                  "pluralName": "Vegetarian / Vegan Restaurants",
                  "shortName": "Vegetarian / Vegan",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/vegetarian_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/food/vegetarian",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 4,
                "usersCount": 55,
                "checkinsCount": 95
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4bc2a81c920eb713d68d1c2c",
              "name": "Woodlands Hotel Pvt. Ltd.",
              "contact": {
                "phone": "08040411111",
                "formattedPhone": "080 4041 1111"
              },
              "location": {
                "address": "5 Raja Ram Mohan Roy Road",
                "lat": 12.964688287918491,
                "lng": 77.59484847813147,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.964688287918491,
                    "lng": 77.59484847813147
                  }
                ],
                "distance": 187,
                "postalCode": "560025",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">5 Raja Ram Mohan Roy Road</span>",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560025</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/woodlands-hotel-pvt-ltd/4bc2a81c920eb713d68d1c2c",
              "canonicalPath": "/v/woodlands-hotel-pvt-ltd/4bc2a81c920eb713d68d1c2c",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1fa931735",
                  "name": "Hotel",
                  "pluralName": "Hotels",
                  "shortName": "Hotel",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/hotel_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/travel/hotel",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": true,
              "stats": {
                "tipCount": 9,
                "usersCount": 330,
                "checkinsCount": 537
              },
              "url": "http://woodlands.in",
              "urlSig": "5WsdXLqA6KHWBTNI7LaLO/EpOaw=",
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "storeId": "",
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4f0301ec9911b33a13d4458a",
              "name": "Olympic Sports",
              "contact": {
                "phone": "08880088777",
                "formattedPhone": "088800 88777"
              },
              "location": {
                "address": "Olympic The Sports Shop, #84, K.H.Road",
                "lat": 12.96134590958747,
                "lng": 77.5941353951143,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.96134590958747,
                    "lng": 77.5941353951143
                  }
                ],
                "distance": 193,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Olympic The Sports Shop, #84, K.H.Road</span>",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/olympic-sports/4f0301ec9911b33a13d4458a",
              "canonicalPath": "/v/olympic-sports/4f0301ec9911b33a13d4458a",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1f2941735",
                  "name": "Sporting Goods Shop",
                  "pluralName": "Sporting Goods Shops",
                  "shortName": "Sporting Goods",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/sports_outdoors_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/sports_outdoors",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 45,
                "checkinsCount": 106
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4cb7e7004352a1cde4c081f5",
              "name": "Dr Rudrappas Hospital",
              "contact": {},
              "location": {
                "lat": 12.965032321512592,
                "lng": 77.5955017305125,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.965032321512592,
                    "lng": 77.5955017305125
                  }
                ],
                "distance": 243,
                "cc": "IN",
                "country": "India",
                "contextLine": "India",
                "contextGeoId": 72057594039197680,
                "formattedAddress": [
                  ""
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/dr-rudrappas-hospital/4cb7e7004352a1cde4c081f5",
              "canonicalPath": "/v/dr-rudrappas-hospital/4cb7e7004352a1cde4c081f5",
              "categories": [
                {
                  "id": "4bf58dd8d48988d196941735",
                  "name": "Hospital",
                  "pluralName": "Hospitals",
                  "shortName": "Hospital",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/medical_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/medical_hospital",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 22,
                "checkinsCount": 35
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "57348b29498edc5362dcedd6",
              "name": "Aura",
              "contact": {},
              "location": {
                "lat": 12.96185,
                "lng": 77.594621,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.96185,
                    "lng": 77.594621
                  }
                ],
                "distance": 130,
                "cc": "IN",
                "neighborhood": "Shanti Nagar",
                "country": "India",
                "contextLine": "Shanti Nagar",
                "contextGeoId": 10000200,
                "formattedAddress": [
                  ""
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/aura/57348b29498edc5362dcedd6",
              "canonicalPath": "/v/aura/57348b29498edc5362dcedd6",
              "categories": [
                {
                  "id": "55888a5a498e782e3303b43a",
                  "name": "Lighting Store",
                  "pluralName": "Lighting Stores",
                  "shortName": "Lighting",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/default_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 7,
                "checkinsCount": 18
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4f83d604e4b09e5c4dd4300b",
              "name": "Indian Oil Corporation Limited (Marketing Division)",
              "contact": {},
              "location": {
                "address": "Sampangi Rama Nagar",
                "lat": 12.96236780054598,
                "lng": 77.59334735132113,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.96236780054598,
                    "lng": 77.59334735132113
                  }
                ],
                "distance": 156,
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Sampangi Rama Nagar</span>",
                  "<span itemprop=\"addressLocality\">Bangalore</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/indian-oil-corporation-limited-marketing-division/4f83d604e4b09e5c4dd4300b",
              "canonicalPath": "/v/indian-oil-corporation-limited-marketing-division/4f83d604e4b09e5c4dd4300b",
              "categories": [
                {
                  "id": "4bf58dd8d48988d126941735",
                  "name": "Government Building",
                  "pluralName": "Government Buildings",
                  "shortName": "Government",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/government_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 16,
                "checkinsCount": 26
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "6246b35b8b781563c6df8559",
              "name": "Mccann/Mrm",
              "contact": {},
              "location": {
                "address": "Saroja Complex",
                "crossStreet": "Andree Road",
                "lat": 12.962021,
                "lng": 77.59582,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962021,
                    "lng": 77.59582
                  }
                ],
                "distance": 170,
                "postalCode": "560027",
                "cc": "IN",
                "neighborhood": "Shanti Nagar",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Shanti Nagar",
                "contextGeoId": 10000200,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Saroja Complex</span> (Andree Road)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/mccannmrm/6246b35b8b781563c6df8559",
              "canonicalPath": "/v/mccannmrm/6246b35b8b781563c6df8559",
              "categories": [
                {
                  "id": "4bf58dd8d48988d124941735",
                  "name": "Office",
                  "pluralName": "Offices",
                  "shortName": "Office",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 1,
                "checkinsCount": 1
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4f0c70d9e4b097d4a341e3f4",
              "name": "Sky lounge",
              "contact": {},
              "location": {
                "address": "Vithal mallya road",
                "crossStreet": "UB city",
                "lat": 12.962111356851164,
                "lng": 77.5961004727536,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962111356851164,
                    "lng": 77.5961004727536
                  }
                ],
                "distance": 189,
                "cc": "IN",
                "neighborhood": "Shanti Nagar",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Shanti Nagar",
                "contextGeoId": 10000200,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Vithal mallya road</span> (UB city)",
                  "<span itemprop=\"addressLocality\">Bangalore</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/sky-lounge/4f0c70d9e4b097d4a341e3f4",
              "canonicalPath": "/v/sky-lounge/4f0c70d9e4b097d4a341e3f4",
              "categories": [
                {
                  "id": "4bf58dd8d48988d121941735",
                  "name": "Lounge",
                  "pluralName": "Lounges",
                  "shortName": "Lounge",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/nightlife/lounge",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 34,
                "checkinsCount": 42
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "58eb615a668af70c7923e5ef",
              "name": "Kawasaki Bangalore",
              "contact": {},
              "location": {
                "address": "Langford Road",
                "lat": 12.962319,
                "lng": 77.595586,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962319,
                    "lng": 77.595586
                  }
                ],
                "distance": 130,
                "postalCode": "560027",
                "cc": "IN",
                "neighborhood": "Shanti Nagar",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Shanti Nagar",
                "contextGeoId": 10000200,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Langford Road</span>",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/kawasaki-bangalore/58eb615a668af70c7923e5ef",
              "canonicalPath": "/v/kawasaki-bangalore/58eb615a668af70c7923e5ef",
              "categories": [
                {
                  "id": "5032833091d4c4b30a586d60",
                  "name": "Motorcycle Shop",
                  "pluralName": "Motorcycle Shops",
                  "shortName": "Motorcycle Shop",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/motorcycle_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 9,
                "checkinsCount": 16
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4f7e8093e4b0ac821ccfc68a",
              "name": "thirumala pitstop",
              "contact": {},
              "location": {
                "lat": 12.962451934814453,
                "lng": 77.59507751464844,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962451934814453,
                    "lng": 77.59507751464844
                  }
                ],
                "distance": 80,
                "cc": "IN",
                "country": "India",
                "contextLine": "India",
                "contextGeoId": 72057594039197680,
                "formattedAddress": [
                  ""
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/thirumala-pitstop/4f7e8093e4b0ac821ccfc68a",
              "canonicalPath": "/v/thirumala-pitstop/4f7e8093e4b0ac821ccfc68a",
              "categories": [
                {
                  "id": "4bf58dd8d48988d124951735",
                  "name": "Automotive Shop",
                  "pluralName": "Automotive Shops",
                  "shortName": "Automotive",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/automotive_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/automotive",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 28,
                "checkinsCount": 57
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "60f9536d70addb7f314734fe",
              "name": "CORE Diagnostics",
              "contact": {},
              "location": {
                "lat": 12.961911,
                "lng": 77.59419,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.961911,
                    "lng": 77.59419
                  }
                ],
                "distance": 132,
                "cc": "IN",
                "country": "India",
                "contextLine": "India",
                "contextGeoId": 72057594039197680,
                "formattedAddress": [
                  ""
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/core-diagnostics/60f9536d70addb7f314734fe",
              "canonicalPath": "/v/core-diagnostics/60f9536d70addb7f314734fe",
              "categories": [
                {
                  "id": "4f4531b14b9074f6e4fb0103",
                  "name": "Medical Lab",
                  "pluralName": "Medical Labs",
                  "shortName": "Medical Lab",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/education/lab_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/medical",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 3,
                "checkinsCount": 4
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4c52800c2543a593325ea085",
              "name": "Shiv Sagar",
              "contact": {
                "phone": "08025323737",
                "formattedPhone": "080 2532 3737"
              },
              "location": {
                "address": "Nanjappa Circle",
                "crossStreet": "Mission Rd",
                "lat": 12.960569191096134,
                "lng": 77.59298001467307,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.960569191096134,
                    "lng": 77.59298001467307
                  }
                ],
                "distance": 326,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Nanjappa Circle</span> (Mission Rd)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/shiv-sagar/4c52800c2543a593325ea085",
              "canonicalPath": "/v/shiv-sagar/4c52800c2543a593325ea085",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1d3941735",
                  "name": "Vegetarian / Vegan Restaurant",
                  "pluralName": "Vegetarian / Vegan Restaurants",
                  "shortName": "Vegetarian / Vegan",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/vegetarian_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/food/vegetarian",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 8,
                "usersCount": 70,
                "checkinsCount": 463
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "53a7b6fa498ec1cebcafc5db",
              "name": "St. Joseph's Arts and Science College",
              "contact": {},
              "location": {
                "address": "Langford Rd",
                "crossStreet": "Shantinagar",
                "lat": 12.96226436569846,
                "lng": 77.59664325503151,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.96226436569846,
                    "lng": 77.59664325503151
                  }
                ],
                "distance": 234,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Langford Rd</span> (Shantinagar)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/st-josephs-arts-and-science-college/53a7b6fa498ec1cebcafc5db",
              "canonicalPath": "/v/st-josephs-arts-and-science-college/53a7b6fa498ec1cebcafc5db",
              "categories": [
                {
                  "id": "4bf58dd8d48988d128941735",
                  "name": "Cafeteria",
                  "pluralName": "Cafeterias",
                  "shortName": "Cafeteria",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/education/cafeteria_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/office_cafeteria",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 14,
                "checkinsCount": 58
              },
              "venueRatingBlacklisted": true,
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4ed3419102d5feaa1f95de12",
              "name": "Sandarshini",
              "contact": {},
              "location": {
                "address": "Mission Road",
                "crossStreet": "Mission Road",
                "lat": 12.962164309622183,
                "lng": 77.59318507174325,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962164309622183,
                    "lng": 77.59318507174325
                  }
                ],
                "distance": 182,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Mission Road</span> (Mission Road)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/sandarshini/4ed3419102d5feaa1f95de12",
              "canonicalPath": "/v/sandarshini/4ed3419102d5feaa1f95de12",
              "categories": [
                {
                  "id": "4bf58dd8d48988d143941735",
                  "name": "Breakfast Spot",
                  "pluralName": "Breakfast Spots",
                  "shortName": "Breakfast",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/food/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 27,
                "checkinsCount": 95
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4e0c8713d1646f151786ffc1",
              "name": "Mysore Hall",
              "contact": {
                "phone": "08043455186",
                "formattedPhone": "080 4345 5186"
              },
              "location": {
                "address": "Vittal Mallya Road",
                "crossStreet": "No.1, Residency Road",
                "lat": 12.965062872237384,
                "lng": 77.59557447506641,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.965062872237384,
                    "lng": 77.59557447506641
                  }
                ],
                "distance": 249,
                "postalCode": "560025",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Vittal Mallya Road</span> (No.1, Residency Road)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560025</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/mysore-hall/4e0c8713d1646f151786ffc1",
              "canonicalPath": "/v/mysore-hall/4e0c8713d1646f151786ffc1",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1ff931735",
                  "name": "Convention Center",
                  "pluralName": "Convention Centers",
                  "shortName": "Convention Center",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/conventioncenter_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/conventioncenter",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 37,
                "checkinsCount": 48
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4d26afd8f7a9224baba4e49f",
              "name": "IDG India",
              "contact": {},
              "location": {
                "address": "geetha building, 49, 3rd cross",
                "crossStreet": "mission road,",
                "lat": 12.963690849999999,
                "lng": 77.59441425,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.963690849999999,
                    "lng": 77.59441425
                  }
                ],
                "distance": 77,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">geetha building, 49, 3rd cross</span> (mission road,)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/idg-india/4d26afd8f7a9224baba4e49f",
              "canonicalPath": "/v/idg-india/4d26afd8f7a9224baba4e49f",
              "categories": [
                {
                  "id": "4bf58dd8d48988d174941735",
                  "name": "Coworking Space",
                  "pluralName": "Coworking Spaces",
                  "shortName": "Coworking Space",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 11,
                "checkinsCount": 76
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4ee76215e4b06ce674753aaf",
              "name": "Noble Stores",
              "contact": {
                "phone": "08022220362",
                "formattedPhone": "080 2222 0362"
              },
              "location": {
                "address": "#46/B",
                "crossStreet": "Mission Rd",
                "lat": 12.962204785419647,
                "lng": 77.59429864070766,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962204785419647,
                    "lng": 77.59429864070766
                  }
                ],
                "distance": 97,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">#46/B</span> (Mission Rd)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/noble-stores/4ee76215e4b06ce674753aaf",
              "canonicalPath": "/v/noble-stores/4ee76215e4b06ce674753aaf",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1f6941735",
                  "name": "Department Store",
                  "pluralName": "Department Stores",
                  "shortName": "Department Store",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/departmentstore_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 31,
                "checkinsCount": 103
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4d903810788c5481451260fd",
              "name": "HDFC Bank ATM",
              "contact": {
                "twitter": "hdfcbank_cares"
              },
              "location": {
                "address": "Cops, Richmond Circle Richmond Circle Near Richmond Signal",
                "lat": 12.96217076053935,
                "lng": 77.59308434637072,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.96217076053935,
                    "lng": 77.59308434637072
                  }
                ],
                "distance": 191,
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Cops, Richmond Circle Richmond Circle Near Richmond Signal</span>",
                  "<span itemprop=\"addressLocality\">Bangalore</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/hdfc-bank-atm/4d903810788c5481451260fd",
              "canonicalPath": "/v/hdfc-bank-atm/4d903810788c5481451260fd",
              "categories": [
                {
                  "id": "4bf58dd8d48988d10a951735",
                  "name": "Bank",
                  "pluralName": "Banks",
                  "shortName": "Bank",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/financial_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/financial",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": true,
              "stats": {
                "tipCount": 0,
                "usersCount": 15,
                "checkinsCount": 52
              },
              "url": "http://www.hdfcbank.com",
              "urlSig": "4UIfq9yyiZwdqevtw2FW+qep0Kk=",
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "storeId": "2472",
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [
                {
                  "id": "56b154e6498e2592eafc4b25"
                },
                {
                  "id": "556f5631bd6a75a99036ab9f"
                }
              ],
              "hasPerk": false
            },
            {
              "id": "51c55d85498eb9001d386e47",
              "name": "Car Lounge",
              "contact": {},
              "location": {
                "lat": 12.962941810926743,
                "lng": 77.59300600435218,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962941810926743,
                    "lng": 77.59300600435218
                  }
                ],
                "distance": 175,
                "cc": "IN",
                "country": "India",
                "contextLine": "India",
                "contextGeoId": 72057594039197680,
                "formattedAddress": [
                  ""
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/car-lounge/51c55d85498eb9001d386e47",
              "canonicalPath": "/v/car-lounge/51c55d85498eb9001d386e47",
              "categories": [
                {
                  "id": "4bf58dd8d48988d124951735",
                  "name": "Automotive Shop",
                  "pluralName": "Automotive Shops",
                  "shortName": "Automotive",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/automotive_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/automotive",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 2,
                "checkinsCount": 2
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4ee8c7ebaa1f29ac62eaf76d",
              "name": "Cane Fresh",
              "contact": {},
              "location": {
                "address": "Shiv Sagar",
                "crossStreet": "Mission Road",
                "lat": 12.962181082644808,
                "lng": 77.59343057134367,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962181082644808,
                    "lng": 77.59343057134367
                  }
                ],
                "distance": 159,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Shiv Sagar</span> (Mission Road)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/cane-fresh/4ee8c7ebaa1f29ac62eaf76d",
              "canonicalPath": "/v/cane-fresh/4ee8c7ebaa1f29ac62eaf76d",
              "categories": [
                {
                  "id": "4bf58dd8d48988d112941735",
                  "name": "Juice Bar",
                  "pluralName": "Juice Bars",
                  "shortName": "Juice Bar",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/juicebar_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/food/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 2,
                "usersCount": 14,
                "checkinsCount": 115
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "5a50e14660d11b75309c029e",
              "name": "Crown Cricketers",
              "contact": {},
              "location": {
                "lat": 12.965235,
                "lng": 77.595604,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.965235,
                    "lng": 77.595604
                  }
                ],
                "distance": 268,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/crown-cricketers/5a50e14660d11b75309c029e",
              "canonicalPath": "/v/crown-cricketers/5a50e14660d11b75309c029e",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1f2941735",
                  "name": "Sporting Goods Shop",
                  "pluralName": "Sporting Goods Shops",
                  "shortName": "Sporting Goods",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/sports_outdoors_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/shops/sports_outdoors",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 3,
                "checkinsCount": 3
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "509a20ebe4b0314c352e873c",
              "name": "The Professional Couriers",
              "contact": {
                "phone": "08022110641",
                "formattedPhone": "080 2211 0641"
              },
              "location": {
                "address": "#57, Professional Landmark",
                "crossStreet": "Mission Rd",
                "lat": 12.962043854358136,
                "lng": 77.59338092637708,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962043854358136,
                    "lng": 77.59338092637708
                  }
                ],
                "distance": 173,
                "postalCode": "560027",
                "cc": "IN",
                "city": "Bangalore",
                "state": "Karnātaka",
                "country": "India",
                "contextLine": "Bangalore, Karnātaka",
                "contextGeoId": 72057594039205260,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">#57, Professional Landmark</span> (Mission Rd)",
                  "<span itemprop=\"addressLocality\">Bangalore</span> <span itemprop=\"postalCode\">560027</span>",
                  "<span itemprop=\"addressRegion\">Karn&#257;taka</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/the-professional-couriers/509a20ebe4b0314c352e873c",
              "canonicalPath": "/v/the-professional-couriers/509a20ebe4b0314c352e873c",
              "categories": [
                {
                  "id": "4bf58dd8d48988d124941735",
                  "name": "Office",
                  "pluralName": "Offices",
                  "shortName": "Office",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/building/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 7,
                "checkinsCount": 12
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "55449364498ec86e6e18ad1f",
              "name": "Tiento football",
              "contact": {},
              "location": {
                "address": "Mission Road",
                "lat": 12.962014,
                "lng": 77.592431,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962014,
                    "lng": 77.592431
                  }
                ],
                "distance": 262,
                "cc": "IN",
                "country": "India",
                "contextLine": "India",
                "contextGeoId": 72057594039197680,
                "formattedAddress": [
                  "<span itemprop=\"streetAddress\">Mission Road</span>"
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/tiento-football/55449364498ec86e6e18ad1f",
              "canonicalPath": "/v/tiento-football/55449364498ec86e6e18ad1f",
              "categories": [
                {
                  "id": "4bf58dd8d48988d15f941735",
                  "name": "Field",
                  "pluralName": "Fields",
                  "shortName": "Field",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/field_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/parks_outdoors/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 17,
                "checkinsCount": 24
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4eeaffc0f9abe756b89ef81d",
              "name": "Utsav Restaurant",
              "contact": {},
              "location": {
                "lat": 12.961377869266135,
                "lng": 77.59605570708841,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.961377869266135,
                    "lng": 77.59605570708841
                  }
                ],
                "distance": 239,
                "cc": "IN",
                "neighborhood": "Shanti Nagar",
                "country": "India",
                "contextLine": "Shanti Nagar",
                "contextGeoId": 10000200,
                "formattedAddress": [
                  ""
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/utsav-restaurant/4eeaffc0f9abe756b89ef81d",
              "canonicalPath": "/v/utsav-restaurant/4eeaffc0f9abe756b89ef81d",
              "categories": [
                {
                  "id": "4bf58dd8d48988d10f941735",
                  "name": "Indian Restaurant",
                  "pluralName": "Indian Restaurants",
                  "shortName": "Indian",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/indian_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/food/indian",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 0,
                "usersCount": 2,
                "checkinsCount": 5
              },
              "allowMenuUrlEdit": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            },
            {
              "id": "4d80946a7c956dcbbb3fe27b",
              "name": "St. Joseph's Arts and Science College",
              "contact": {},
              "location": {
                "lat": 12.962613102961896,
                "lng": 77.5963019180273,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 12.962613102961896,
                    "lng": 77.5963019180273
                  }
                ],
                "distance": 187,
                "cc": "IN",
                "country": "India",
                "contextLine": "India",
                "contextGeoId": 72057594039197680,
                "formattedAddress": [
                  ""
                ]
              },
              "canonicalUrl": "https://foursquare.com/v/st-josephs-arts-and-science-college/4d80946a7c956dcbbb3fe27b",
              "canonicalPath": "/v/st-josephs-arts-and-science-college/4d80946a7c956dcbbb3fe27b",
              "categories": [
                {
                  "id": "4bf58dd8d48988d1a8941735",
                  "name": "General College & University",
                  "pluralName": "General Colleges & Universities",
                  "shortName": "Education",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/education/other_",
                    "mapPrefix": "https://ss3.4sqi.net/img/categories_map/education/default",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "verified": false,
              "stats": {
                "tipCount": 1,
                "usersCount": 134,
                "checkinsCount": 359
              },
              "venueRatingBlacklisted": true,
              "beenHere": {
                "lastCheckinExpiredAt": 0
              },
              "hereNow": {
                "count": 0,
                "summary": "Nobody here",
                "groups": []
              },
              "referralId": "v-1662043138",
              "venueChains": [],
              "hasPerk": false
            }
          ]
    const scene = document.querySelector('a-scene');

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {

        // than use it to load from remote APIs some places nearby
        // loadPlaces(position.coords)
        //     .then((places) => {
                places.forEach((place) => {
                    const latitude = place.location.lat;
                    const longitude = place.location.lng;

                    // add place name
                    const placeText = document.createElement('a-link');
                    placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                    placeText.setAttribute('title', place.name);
                    placeText.setAttribute('scale', '15 15 15');
                    
                    placeText.addEventListener('loaded', () => {
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                    });

                    scene.appendChild(placeText);
                });
            // })
    },
        (err) => console.error('Error in retrieving position', err),
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000,
        }
    );
};
