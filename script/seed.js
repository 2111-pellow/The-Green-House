'use strict'

const { db } = require("../server/db");
const User = require('../server/db/models/user')
const Plant = require('../server/db/models/plant')

//seed dummy data
const plants = [
  {
    id: 1,
    plant_name: "False Beardgrass",
    description: "Palindromic rheumatism",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$98.00",
  },
  {
    id: 2,
    plant_name: "Guayanan Waterclover",
    description: "Fall into natural body of water strk side causing oth injury",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$41.94",
  },
  {
    id: 3,
    plant_name: "Curly Mitchell Grass",
    description: "Displ transverse fx shaft of unsp rad, 7thH",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$17.37",
  },
  {
    id: 4,
    plant_name: "Silky Mousetail",
    description: "Disp fx of med condyle of unsp tibia, 7thH",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$37.46",
  },
  {
    id: 5,
    plant_name: "Toumeys Century Plant",
    description: "Complete traumatic MCP amputation of l mid finger, subs",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$40.31",
  },
  {
    id: 6,
    plant_name: "Semaphore Pricklypear",
    description: "Idiopathic chronic gout, right hip",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$69.68",
  },
  {
    id: 7,
    plant_name: "Pagumpa Milkvetch",
    description: "Injury of median nerve at upper arm level, left arm",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$87.58",
  },
  {
    id: 8,
    plant_name: "Eastern Turkeybeard",
    description: "Non-pressure chronic ulcer of right ankle w necrosis of bone",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$13.57",
  },
  {
    id: 9,
    plant_name: "Donner Lake Lupine",
    description: "Other burn on board sailboat, initial encounter",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$53.47",
  },
  {
    id: 10,
    plant_name: "Crescent Milkvetch",
    description: "Fall due to uncontrolled fire, not in building or structure",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$2.37",
  },
  {
    id: 11,
    plant_name: "Mycobilimbia Lichen",
    description: "Nondisp fx of med epicondyl of unsp humer, 7thD",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$63.59",
  },
  {
    id: 12,
    plant_name: "Longleaf Groundcherry",
    description: "Oth osteopor w crnt path fx, unsp ank/ft, 7thD",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$51.08",
  },
  {
    id: 13,
    plant_name: "Hazel Sterculia",
    description: "Obs & eval of NB for unsp suspected condition ruled out",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$99.21",
  },
  {
    id: 14,
    plant_name: "Copernicia",
    description: "Laceration of unsp blood vessel at shldr/up arm, right arm",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$44.30",
  },
  {
    id: 15,
    plant_name: "Lions Tail",
    description: "Toxic effect of smoke, assault",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$22.04",
  },
  {
    id: 16,
    plant_name: "Panhandle Spurge",
    description: "Laceration w fb of abd wall, epigst rgn w penet perit cav",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$81.29",
  },
  {
    id: 17,
    plant_name: "Puerto Rico Swallow-wort",
    description: "Pedl cyc driver injured in clsn w rail trn/veh in traf, init",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$17.51",
  },
  {
    id: 18,
    plant_name: "Kings Flax",
    description: "Disp fx of shaft of first MC bone, unsp hand, sequela",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$11.83",
  },
  {
    id: 19,
    plant_name: "Hybrid Blazing Star",
    description: "Injury of musculocutaneous nerve, right arm, sequela",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$63.49",
  },
  {
    id: 20,
    plant_name: "Alder",
    description: "Intermittent exophthalmos, left eye",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$5.73",
  },
  {
    id: 21,
    plant_name: "Mt. Diablo Manzanita",
    description: "Disp fx of med epicondyl of r humer, subs for fx w malunion",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$11.76",
  },
  {
    id: 22,
    plant_name: "Slightstemmed Miterwort",
    description: "Unspecified trochanteric fracture of right femur, sequela",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$84.19",
  },
  {
    id: 23,
    plant_name: "Lespedeza",
    description: "Displ subtrochnt fx l femur, subs for clos fx w delay heal",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$49.16",
  },
  {
    id: 24,
    plant_name: "Dwarf Milkvetch",
    description: "Bent bone of left ulna, subs for clos fx w malunion",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$59.50",
  },
  {
    id: 25,
    plant_name: "Aloina Moss",
    description: "Disp fx of neck of second metacarpal bone, right hand, init",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$68.78",
  },
  {
    id: 26,
    plant_name: "Oreoxis",
    description: "Displacement of permanent sutures",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$61.81",
  },
  {
    id: 27,
    plant_name: "Chase Threeawn",
    description: "Crushing injury of right index finger",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$97.02",
  },
  {
    id: 28,
    plant_name: "Seliger Herzogiella Moss",
    description: "Sltr-haris Type IV physeal fx upper end radius, left arm",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$9.21",
  },
  {
    id: 29,
    plant_name: "Annual Buckwheat",
    description: "Bucket-hndl tear of unsp meniscus, current injury, r knee",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$15.98",
  },
  {
    id: 30,
    plant_name: "Silver Prairie Clover",
    description: "Other subluxation of left knee, sequela",
    imageUrl: "http://dummyimageUrl.com/x.png/5fa2dd/ffffff",
    price: "$58.63",
  },
];

const users =
[{"id": 1,firstName: "Fawne",lastName: "Lunt",email: "flunt0@va.gov",password: "WrwpJz",image: "http://dummyimage.com/x.png/cc0000/ffffff",creditCard: "3553386734099169"},
{"id":2, firstName: "Sarina",lastName: "Cranham",email: "scranham1@biglobe.ne.jp",password: "a11LEFOGHYM",image: "http://dummyimage.com/x.png/ff4444/ffffff",creditCard: "4844087180715467"},
{"id":3,"firstName":"Maiga","lastName":"Sigg","email":"msigg2@yahoo.co.jp","password":"dRGPjP","image":"http://dummyimage.com/x.png/5fa2dd/ffffff","creditCard":"30356510277759"},
{"id":4,"firstName":"Etheline","lastName":"Wardle","email":"ewardle3@washington.edu","password":"6Eq3Ld0sE","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"3557474566891576"},
{"id":5,"firstName":"Kori","lastName":"Doig","email":"kdoig4@chronoengine.com","password":"PValKs","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"56022106041440869"},
{"id":6,"firstName":"Calhoun","lastName":"Riley","email":"criley5@bbc.co.uk","password":"QK1wEhWpQipe","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"3543018002553295"},
{"id":7,"firstName":"Guntar","lastName":"Works","email":"gworks6@scientificamerican.com","password":"zYj5pkM4V","image":"http://dummyimage.com/x.png/ff4444/ffffff","creditCard":"3551452110394848"},
{"id":8,"firstName":"Britt","lastName":"Burroughes","email":"bburroughes7@addtoany.com","password":"zY3OpK","image":"http://dummyimage.com/x.png/5fa2dd/ffffff","creditCard":"3572512095378655"},
{"id":9,"firstName":"Sammy","lastName":"Camolli","email":"scamolli8@theglobeandmail.com","password":"dsHpmuHb","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"36215661618936"},
{"id":10,"firstName":"Marve","lastName":"Singyard","email":"msingyard9@taobao.com","password":"67QCvPsO0v","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"676743033920616471"},
{"id":11,"firstName":"Tripp","lastName":"Vasey","email":"tvaseya@pagesperso-orange.fr","password":"uPoJfsn","image":"http://dummyimage.com/x.png/cc0000/ffffff","creditCard":"3566326342490850"},
{"id":12,"firstName":"Eleanor","lastName":"Igoe","email":"eigoeb@bluehost.com","password":"5u4RVKVqT9Gu","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"5519215249540870"},
{"id":13,"firstName":"Thurston","lastName":"Charsley","email":"tcharsleyc@chronoengine.com","password":"eMB1c3WMfNz","image":"http://dummyimage.com/x.png/ff4444/ffffff","creditCard":"3546524213168432"},
{"id":14,"firstName":"Ashien","lastName":"Avraham","email":"aavrahamd@washington.edu","password":"zBafKvfOiHr","image":"http://dummyimage.com/x.png/cc0000/ffffff","creditCard":"3589227318519974"},
{"id":15,"firstName":"Gilemette","lastName":"Hadcroft","email":"ghadcrofte@admin.ch","password":"KPBexFSzqkFL","image":"http://dummyimage.com/x.png/cc0000/ffffff","creditCard":"30394033367864"},
{"id":16,"firstName":"Belinda","lastName":"Santer","email":"bsanterf@google.de","password":"uVLpiY2Xs","image":"http://dummyimage.com/x.png/5fa2dd/ffffff","creditCard":"5412925549721842"},
{"id":17,"firstName":"Meta","lastName":"Dunkerly","email":"mdunkerlyg@hubpages.com","password":"lZG3a9E5y3","image":"http://dummyimage.com/x.png/ff4444/ffffff","creditCard":"3557866914492769"},
{"id":18,"firstName":"Shep","lastName":"Nobes","email":"snobesh@myspace.com","password":"3NPjOcOV","image":"http://dummyimage.com/x.png/cc0000/ffffff","creditCard":"5048371044663407"},
{"id":19,"firstName":"Cristina","lastName":"Tombling","email":"ctomblingi@github.io","password":"0dFos4kN","image":"http://dummyimage.com/x.png/5fa2dd/ffffff","creditCard":"374283814021879"},
{"id":20,"firstName":"Berget","lastName":"Rainard","email":"brainardj@dedecms.com","password":"rQQ3iFHP15D","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"3559410320074750"},
{"id":21,"firstName":"Janella","lastName":"Logsdale","email":"jlogsdalek@ucoz.com","password":"rBdsHO7cwLN","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"3556224052982061"},
{"id":22,"firstName":"Jaime","lastName":"Quinlan","email":"jquinlanl@google.co.uk","password":"wbuhLlMgZ8bG","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"3537994524894912"},
{"id":23,"firstName":"Alisun","lastName":"De Vuyst","email":"adevuystm@dagondesign.com","password":"tld8hGM80v","image":"http://dummyimage.com/x.png/5fa2dd/ffffff","creditCard":"3536014665687073"},
{"id":24,"firstName":"Kacy","lastName":"Gartery","email":"kgarteryn@sohu.com","password":"YegNlwMY","image":"http://dummyimage.com/x.png/cc0000/ffffff","creditCard":"201523700563537"},
{"id":25,"firstName":"Codie","lastName":"Frantz","email":"cfrantzo@usa.gov","password":"E0PDT7xVP5L","image":"http://dummyimage.com/x.png/5fa2dd/ffffff","creditCard":"6759571749375366"},
{"id":26,"firstName":"Mead","lastName":"Clapson","email":"mclapsonp@squarespace.com","password":"L6ASCQhd","image":"http://dummyimage.com/x.png/ff4444/ffffff","creditCard":"6331105523200685"},
{"id":27,"firstName":"Essie","lastName":"Posselt","email":"eposseltq@jigsy.com","password":"vskN6N8","image":"http://dummyimage.com/x.png/cc0000/ffffff","creditCard":"374622234064896"},
{"id":28,"firstName":"Milton","lastName":"Paolo","email":"mpaolor@wordpress.com","password":"qpoNu4VCqfq","image":"http://dummyimage.com/x.png/ff4444/ffffff","creditCard":"6399825394724641"},
{"id":29,"firstName":"Kalvin","lastName":"Disman","email":"kdismans@yelp.com","password":"qtnJt9","image":"http://dummyimage.com/x.png/dddddd/000000","creditCard":"3579532525940216"},
{"id":30,"firstName":"Delly","lastName":"Pidduck","email":"dpidduckt@squidoo.com","password":"G5LOC3NM","image":"http://dummyimage.com/x.png/ff4444/ffffff","creditCard":"3566927484544493"}]


const seed = async () => {

  try {
    await db.sync({ force: true });

    await Promise.all(users.map(user=> {
      return User.create(user)
    }));
    
    await Plant.bulkCreate(plants);
    
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;


if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch(err => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
      db.close();
    });
}

