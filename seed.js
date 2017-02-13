// this file allows us to seed our application with data.
// run node seed.js from the root of the project folder.

var db = require('./models');

var camping_list = [
    {
    id: 1,
    title: 'Limekiln State Park',
    park: 'Limekiln State Park',
    description: 'Limekiln State Park is a hidden gen in Big Sur, California. I have only gone during the winter, but it is perfect because it is within a short walk to a secluded beach and a short hike to Limekiln Falls. It is also incredible to sleep next to the creek and listen to the sounds of the roaring water rush by. The Limekiln Falls Trail is for the adventurous. There are multiple creek crossings and during a season when the tide is high and rain abundant, it will be particularly trickier to complete each fork. You can either wade through the creek or balance on tree branch bridges. Be careful! The branches can be slippery to walk on top of. The view of the Limekiln Falls is breahtaking. There are two waterfalls. Along the way, you can visit the remnants of the old Limekilns. An added bonus: there are heated showers! Great camping for jam sessions, looking at the moonlight reflecting off the crashing waves.',
    trail: 'Limekiln Falls Trail',
    image: 'images/LimekilnStatePark_RainbowoverLimekilnCreekFalls.png',
    features:
      [
        'Coast',
        'Creeks',
        'Redwoods',
        'Waterfalls'
      ],
    coordinates:
      [
        36.049446,
        -121.5904369
      ]
    },
    {
  //  id: 2,
    title: 'Wildcat Camp',
    park: 'Point Reyes National Seashore',
    description: 'Find serenity at the Wildcat Camp on an open meadow on a bluff overlooking the Pacific Ocean with a short walk to a secluded beach, 2 miles round-trip hike to Alamere Falls. This is a 5.5 miles hike-in campsite on the Coast Trail from Palomarin Trailhead. The hike is worth it, because the camp is very close to a calm beach, perfect for a day or evening dip. The campsite is popular, so book early in the year! Along the way back to the trailhead, stop by Bass Lake, where there are watering holes and swing sets to plunge into the crystal clear waters. I have only gone during the summer, but if you camp during the winter you may spot Tule elk!',
    trail: 'Coast Trail',
    image: 'images/PointReyesNationalSeashore_CoastTrail_AlamereFalls.jpg',
    features:
      [
        'Beach walks',
        'Coastline',
        'Lakes',
        'Meadows',
        'Ocean views',
        'Waterfalls',
        'Wildflowers'
      ],
    coordinates:
      [
        37.9704281,
        -122.7926528
      ]
    },
    {
  //  id: 3,
    title: 'Henry W. Coe State Park',
    park: 'Henry W. Coe State Park',
    description: 'Henry Coe State Park is great for hiking and camping. The trail to China Hole is about ten miles round-trip with gradual inclines. Throughout the hike you will notice lush green rolling hills and once you reach the canyon the views are expansive. The Madrone forest is spectacular to meander through; its auburn brick red, twisted bark so different from typical trees you will see in the cities. The coyote creek is calm and teeming with wildlife. If you look closely in the spring, you might spot some tadpoles and frogs! This park is great for group camping.',
    trail: 'China Hole Trail Loop',
    image: 'images/HenryCoeStatePark_MadroneForest.jpg',
    features: [
      'Canyons',
      'Creek',
      'Forest',
      'Vistapoint',
      'Springs',
      'Wildlife',
      'Wildflowers'
    ],
  coordinates:
      [
       37.1867803,
       -121.5493913
      ]
    },
    {
  //  id: 4,
    title: 'Live Oak Campground',
    park: 'Mt. Diablo State Park',
    description: 'Mt. Diablo is great to camp in the summer or fall. There is so much to explore from spectacular sandstone rock formations at Rock City to hiking up to the summit at elevation of 3,849 feet. If you look up you might even see a raptor! The hike along the Summit Trail to the Summit is about 8.5 miles round-trip, with breathtaking views of the San Francisco Bay Area and Central Valley. On a clear day, you might be able to view west to the Golden Gate Bridge, south to Mount Loma Prieta in the Santa Cruz Mountains, southeast to the James Lick Observatory on Mount Hamilton, or Mount Saint Helena in the Coast Range. I recommend checking out the nature programs. During one camping trip in the fall, we went for a night hike to the Juniper area vista point to meet with volunteer astronomers. These volunteers provided incredible telescopes to view Jupiter.',
    trail: 'Summit Trail',
    image: 'images/MtDiabloStatePark_SummitviewofNorthPeak.jpg',
    features:
      [
        'Caves',
        'Peaks',
        'Sandstone',
        'Wildlife',

      ],
    coordinates:
      [
        37.8489842,
        -121.9419142
      ]
    },
    {
  //  id: 5,
    title: 'Lower Blooms Creek',
    park: 'Henry Cowell Redwoods State Park',
    description: 'Henry Cowell Redwoods State Park is next to Big Basin, and although not as popular, has refreshing creek crossings and swimming areas in the Santa Cruz Mountains. This trail is for the adventurous. You might scramble up a log to cross the San Lorenzo River or wade through the creek on the way to Frisbee Beach, a watering hole nestled in Santa Cruz Mountains. Stop midway to have a picnic along the creek. Go for a dip during the summer. Serene, abundant with wildflowers, intriguing fungi and giant redwoods, Henry Cowell Redwoods State Park is one of my favorite redwoods park to explore.',
    trail: 'Four Crossings',
    image: 'images/HenryCowellStatePark_CrossingSanLorenzoRiver.jpg',
    features:
      [
        'Creeks',
        'Redwoods',
        'River',
        'Sandhills',
      ],
    coordinates:
      [
        37.041693,
        -122.0667354
      ]
    },
    {
//    id: 6,
    title: 'Huckleberry',
    park: 'Big Basin Redwoods State Park',
    description: 'Nestled in the Santa Cruz Mountains, Big Basin Redwoods State Park offers many different trails meandering through redwoods and providing expansive views of Monterey Bay and San José. The Berry Creek Loop is a ten mile round-trip hike where you are sure to find interesting species of fungi and wildflowers along the way to Berry Creek Falls. Berry Creek Falls is loud and refreshing.',
    trail: 'Berry Creek Loop',
    image: 'images/BigBasinStatePark_BerryCreekFalls.jpg',
    features:
      [
        'Creeks',
        'Redwoods',
        'Waterfalls',
        'Wildflowers'
      ],
    coordinates:
      [
        37.1723615,
        -122.2239407
      ]
    }
];

var camping_features_list = [
    {
  //  id: 1,
    features:
      [
        'Coast',
        'Creeks',
        'Redwoods',
        'Waterfalls'
      ]
    },
    {
  //  id: 2,
    features:
      [
        'Beach walks',
        'Coastline',
        'Lakes',
        'Meadows',
        'Ocean views',
        'Waterfalls',
        'Wildflowers'
      ]
    },
    {
  //  id: 3,
    features: [
      'Canyons',
      'Creek',
      'Forest',
      'Vistapoint',
      'Springs',
      'Wildlife',
      'Wildflowers'
    ]
    },
    {
  //  id: 4,
    features:
      [
        'Caves',
        'Peaks',
        'Sandstone',
        'Wildlife',

      ]
    },
    {
//    id: 5,
    features:
      [
        'Creeks',
        'Redwoods',
        'River',
        'Sandhills',
      ]
    },
    {
//    id: 6,
    features:
      [
        'Creeks',
        'Redwoods',
        'Waterfalls',
        'Wildflowers'
      ]
    }
];


 /* Note - in the future, include more information on trails:
  Limekiln Falls
  [36.0109112,-121.518983]

  Palomarin Trailhead
  [37.934095,-122.74709]

  China Hole Trail Loop
  [ 37.1867803, -121.5493913]

  Summit Trail
  [37.8506947,-121.9394228]

  Four Crossings
  [37.041693, -122.0667354]

  Berry Creek Loop
  [ 37.1723615,-122.2239407 ]

  */

    db.Camping.remove({}, function(err, camping){
      console.log('removed all camping');
      camping_list.forEach(function (campingData) {
        var camping = new db.Camping({
          title: campingData.title,
          park: campingData.park,
          description: campingData.description,
          trail: campingData.trail,
          image: campingData.image,
          features: campingData.features,
          coordinates: campingData.coordinates

        });
          camping.save(function(err, savedCamping){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedCamping);
        });
      });
    })
