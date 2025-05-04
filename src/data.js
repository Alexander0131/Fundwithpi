
    const rowData = [
    {
        "_id": "1000001",
        "title": "Hope for Tomorrow",
        "description": "Providing education and resources for underprivileged children.",
        "content": "Many children in underserved communities lack access to quality education...  <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "goalAmount": 5000000,
        "amountRaised": 1205000,
        "withdrawable": 5000,
        "donors": "donors_001",
        "donorsCount": 4500000,
        "organizer":[ "user123"],
        "verifiedState": "pending",
        "updates": [
            {
                "updateId": "upd1001",
                "title": "Reached 10% of Goal!",
                "message": "Thanks to your support, we've hit our first milestone!",
                "date": "2025-03-12"
            }
        ],
        "category": "education",
        "status": "aborted",
        "createdAt": "2025-03-08",
        "deadline": "2025-06-01",
        "images": ["./assets/images/hope.jpg", "./assets/images/hope.jpg", "./assets/images/clean.jpg"]
    },
    {
        "_id": "1000002",
        "title": "Clean Water Initiative",
        "description": "Ensuring access to clean drinking water in remote areas.",
        "content": "Millions of people suffer from waterborne diseases due to lack of clean water...",
        "goalAmount": 750000,
        "amountRaised": 25000,
        "withdrawable": 5000,
        "donors": "donors_002",
        "donorsCount": 75000,
        "organizer": {
            "userId": "user124"
        },
        "verifiedState": "verified",
        "updates": [],
        "category": "Health",
        "status": "active",
        "createdAt": "2025-03-09",
        "deadline": "2025-05-20",
        "images": ["./assets/images/clean.jpg"]
    },
    {
        "_id": "1000003",
        "title": "Wildlife Conservation",
        "description": "Protecting endangered species through habitat restoration.",
        "content": "Deforestation and poaching are threatening the survival of many species...",
        "goalAmount": 2000000,
        "amountRaised": 850000,
        "withdrawable": 5000,
        "donors": "donors_003",
        "donorsCount": 600000,
        "organizer": {
            "userId": "user125"
        },
        "verifiedState": "unverified",
        "updates": [],
        "category": "Environment",
        "status": "active",
        "createdAt": "2025-02-28",
        "deadline": "2025-06-15",
        "images": ["./assets/images/wildlife.jpeg"]
    },
    {
        "_id": "1000004",
        "title": "Disaster Relief Fund",
        "description": "Providing immediate assistance to disaster-stricken communities.",
        "content": "Natural disasters leave families without homes, food, or medical aid...",
        "goalAmount": 10000000,
        "amountRaised": 5000000,
        "withdrawable": 5000,
        "donors": "donors_004",
        "donorsCount": 1000000,
        "organizer": {
            "userId": "user126"
        },
        "verifiedState": "pending",
        "updates": [
            {
                "updateId": "upd1002",
                "title": "Emergency Response Activated!",
                "message": "Our first relief supplies have reached the affected area.",
                "date": "2025-03-10"
            }
        ],
        "category": "Emergency",
        "status": "active",
        "createdAt": "2025-03-05",
        "deadline": "2025-04-30",
        "images": ["./assets/images/disaster.jpeg"]
    },
    {
        "_id": "1000005",
        "title": "Elderly Care Support",
        "description": "Helping senior citizens with healthcare and daily necessities.",
        "content": "Many elderly individuals struggle with medical expenses and daily essentials...",
        "goalAmount": 3000000,
        "amountRaised": 1250000,
        "withdrawable": 5000,
        "donors": "donors_005",
        "donorsCount": 500000,
        "organizer": {
            "userId": "user127"
        },
        "verifiedState": "verified",
        "updates": [],
        "category": "Social Welfare",
        "status": "aborted",
        "createdAt": "2025-03-07",
        "deadline": "2025-07-01",
        "images": ["./assets/images/food.jpeg"]
    },
    {
        "_id": "1000006",
        "title": "Hope for Tomorrow",
        "description": "Providing education and resources for underprivileged children.",
        "content": "Many children in underserved communities lack access to quality education...",
        "goalAmount": 5000000,
        "amountRaised": 120500,
        "withdrawable": 5000,
        "donors": "donors_001",
        "donorsCount": 4500000,
        "organizer": { "userId": "user123" },
        "verifiedState": "pending",
        "updates": [
            {
                "updateId": "upd1001",
                "title": "Reached 10% of Goal!",
                "message": "Thanks to your support, we've hit our first milestone!",
                "date": "2025-03-12"
            }
        ],
        "category": "education",
        "status": "active",
        "createdAt": "2025-03-08",
        "deadline": "2025-06-01",
        "images": ["./assets/images/hope.jpg"]
    },
    {
        "_id": "1000007",
        "title": "Clean Water Initiative",
        "description": "Ensuring access to clean drinking water in remote areas.",
        "content": "Millions of people suffer from waterborne diseases due to lack of clean water...",
        "goalAmount": 750000,
        "amountRaised": 25000,
        "withdrawable": 5000,
        "donors": "donors_002",
        "donorsCount": 75000,
        "organizer": { "userId": "user124" },
        "verifiedState": "verified",
        "updates": [],
        "category": "Health",
        "status": "active",
        "createdAt": "2025-03-09",
        "deadline": "2025-05-20",
        "images": ["./assets/images/clean.jpg"]
    },
    {
        "_id": "1000008",
        "title": "Wildlife Conservation",
        "description": "Protecting endangered species through habitat restoration.",
        "content": "Deforestation and poaching are threatening the survival of many species...",
        "goalAmount": 2000000,
        "amountRaised": 850000,
        "withdrawable": 5000,
        "donors": "donors_003",
        "donorsCount": 600000,
        "organizer": { "userId": "user125" },
        "verifiedState": "unverified",
        "updates": [],
        "category": "Environment",
        "status": "active",
        "createdAt": "2025-02-28",
        "deadline": "2025-06-15",
        "images": ["./assets/images/wildlife.jpeg"]
    },
    {
        "_id": "1000009",
        "title": "Disaster Relief Fund",
        "description": "Providing immediate assistance to disaster-stricken communities.",
        "content": "Natural disasters leave families without homes, food, or medical aid...",
        "goalAmount": 10000000,
        "amountRaised": 5000000,
        "withdrawable": 5000,
        "donors": "donors_004",
        "donorsCount": 1000000,
        "organizer": { "userId": "user126" },
        "verifiedState": "pending",
        "updates": [
            {
                "updateId": "upd1002",
                "title": "Emergency Response Activated!",
                "message": "Our first relief supplies have reached the affected area.",
                "date": "2025-03-10"
            }
        ],
        "category": "Emergency",
        "status": "active",
        "createdAt": "2025-03-05",
        "deadline": "2025-04-30",
        "images": ["./assets/images/disaster.jpeg"]
    },
    {
        "_id": "1000010",
        "title": "Elderly Care Support",
        "description": "Helping senior citizens with healthcare and daily necessities.",
        "content": "Many elderly individuals struggle with medical expenses and daily essentials...",
        "goalAmount": 3000000,
        "amountRaised": 1250000,
        "withdrawable": 5000,
        "donors": "donors_005",
        "donorsCount": 500000,
        "organizer": { "userId": "user127" },
        "verifiedState": "verified",
        "updates": [],
        "category": "Social Welfare",
        "status": "active",
        "createdAt": "2025-03-07",
        "deadline": "2025-07-01",
        "images": ["./assets/images/food.jpeg"]
    },
    {
        "_id": "006",
        "title": "Renewable Energy Project",
        "description": "Funding solar energy projects for sustainable development.",
        "content": "With increasing energy demands, shifting to renewable sources is crucial...",
        "goalAmount": 5000000,
        "amountRaised": 2200000,
        "withdrawable": 5000,
        "donors": "donors_006",
        "donorsCount": 750000,
        "organizer": { "userId": "user128" },
        "verifiedState": "pending",
        "updates": [],
        "category": "Environment",
        "status": "active",
        "createdAt": "2025-02-18",
        "deadline": "2025-06-30",
        "images": ["./assets/images/disaster.jpeg"]
    },
    {
        "_id": "007",
        "title": "Animal Rescue Foundation",
        "description": "Rescuing and rehabilitating abandoned animals.",
        "content": "Thousands of animals are left homeless each year...",
        "goalAmount": 1000000,
        "amountRaised": 400000,
        "withdrawable": 5000,
        "donors": "donors_007",
        "donorsCount": 300000,
        "organizer": { "userId": "user129" },
        "verifiedState": "verified",
        "updates": [],
        "category": "Animal Welfare",
        "status": "active",
        "createdAt": "2025-03-01",
        "deadline": "2025-08-15",
        "images": ["./assets/images/wildlife.jpeg"]
    },
    {
        "_id": "008",
        "title": "Food for All",
        "description": "Providing meals to homeless and underprivileged families.",
        "content": "Hunger is a major issue affecting millions worldwide...",
        "goalAmount": 2000000,
        "amountRaised": 1000000,
        "withdrawable": 5000,
        "donors": "donors_008",
        "donorsCount": 650000,
        "organizer": { "userId": "user130" },
        "verifiedState": "unverified",
        "updates": [],
        "category": "Social Welfare",
        "status": "active",
        "createdAt": "2025-03-02",
        "deadline": "2025-09-01",
        "images": ["./assets/images/food.jpeg"]
    }
];





const newsData = [
    {
        "_id": "25626hdhgs",
        "title": "title 1",
        "desc": "Description 1",
        "pinned": "Pinned 1",
        "clickText": "Click 1",
        "img": "./assets/images/sample.jpeg",
        "content": "This is number 1 content."
    },
    {
        "_id": "25626hjkgs",
        "title": "title 2",
        "desc": "Description 2",
        "pinned": "Pinned 2",
        "clickText": "Click 2",
        "img": "./assets/images/wildlife.jpeg",
        "content": "This is number 2 content."
    },
    {
        "_id": "25678826hdhgs",
        "title": "title 3",
        "desc": "Description 3",
        "pinned": "Pinned 3",
        "clickText": "Click 3",
        "img": "./assets/images/food.jpeg",
        "content": "This is number 3 content."
    }
]; 







const allCat = [
  { id: 1, name: "Disaster Relief", faClass: "fa-solid fa-house-damage" },
  { id: 2, name: "Animal Welfare", faClass: "fa-solid fa-paw" },
  { id: 3, name: "education", faClass: "fa-solid fa-graduation-cap" },  
  { id: 4, name: "Healthcare & Medical", faClass: "fa-solid fa-heartbeat" },
  { id: 5, name: "Community Projects", faClass: "fa-solid fa-users" },
  { id: 6, name: "Environmental Causes", faClass: "fa-solid fa-leaf" },
  { id: 7, name: "Arts & Culture", faClass: "fa-solid fa-palette" },
  { id: 8, name: "Religious Causes", faClass: "fa-solid fa-praying-hands" },
  { id: 9, name: "Sports & Recreation", faClass: "fa-solid fa-futbol" },
  { id: 10, name: "Children & Youth", faClass: "fa-solid fa-child" },
  { id: 11, name: "Elderly Support", faClass: "fa-solid fa-blind" },
  { id: 12, name: "Poverty Alleviation", faClass: "fa-solid fa-hands-helping" },
  { id: 13, name: "Refugees & Human Rights", faClass: "fa-solid fa-handshake" },
  { id: 14, name: "Nonprofits & NGOs", faClass: "fa-solid fa-building" },
  { id: 15, name: "Memorial & Funeral", faClass: "fa-solid fa-cross" },
  { id: 16, name: "Scientific Research", faClass: "fa-solid fa-flask" },
  { id: 17, name: "Business & Startup Support", faClass: "fa-solid fa-briefcase" },
  { id: 18, name: "Veterans & Military", faClass: "fa-solid fa-medal" },
  { id: 19, name: "Mental Health Awareness", faClass: "fa-solid fa-brain" },
  { id: 20, name: "LGBTQ+ Support", faClass: "fa-solid fa-rainbow" },
  { id: 21, name: "Legal Aid & Justice", faClass: "fa-solid fa-balance-scale" },
  { id: 22, name: "Housing & Homelessness", faClass: "fa-solid fa-home" },
  { id: 23, name: "Technology & Innovation", faClass: "fa-solid fa-microchip" },
  { id: 24, name: "Social Justice", faClass: "fa-solid fa-equals" },
  { id: 25, name: "Personal Emergencies", faClass: "fa-solid fa-exclamation-triangle" },
  { id: 26, name: "Charity Challenges", faClass: "fa-solid fa-flag" },
  { id: 27, name: "Water & Sanitation", faClass: "fa-solid fa-tint" }
];





const donorsData = [ 
{
 _id: "63636636637", 
 amt: "54566", 
 date: 5147726, 
 userId: "user123", 
 comments: "get well soon" 
 },
  { 
  _id: "63636636638", 
  amt: "32045", 
  date: 5147730, 
  userId: "user124", 
  comments: "stay strong"
  }, 
  { 
  _id: "63636636639", 
  amt: "78025", 
  date: 5147735, 
  userId: "user125", 
  comments: "keep up the great work" 
  }, 
  { 
  _id: "63636636640", 
  amt: "95000", 
  date: 5147740, 
  userId: "user126", 
  comments: "helping where I can" 
  }, 
  { 
  _id: "63636636641", 
  amt: "4307.5", 
  date: 5147745, 
  userId: "user127", 
  comments: "wishing good health" 
  }, 
  { 
  _id: "63636636642", 
  amt: "60090", 
  date: 5147750, 
  userId: "user128", 
  comments: "renewable energy is the future" 
  }, 
  { 
  _id: "63636636643", 
  amt: "200156.76", 
  date: 5147755, 
  userId: "user129", comments: "love for animals" 
  }, 
  { _id: "63636636644", 
  amt: "35080", 
  date: 5147760, 
  userId: "user130", 
  comments: "food is a basic right" 
  },
  {
 _id: "63636636637", 
 amt: "54566", 
 date: 5147726, 
 userId: "user123", 
 comments: "get well soon" 
 },
  { 
  _id: "63636636638", 
  amt: "32045", 
  date: 5147730, 
  userId: "user124", 
  comments: "stay strong"
  }, 
  { 
  _id: "63636636639", 
  amt: "78025", 
  date: 5147735, 
  userId: "user125", 
  comments: "keep up the great work" 
  }, 
  { 
  _id: "63636636640", 
  amt: "95000", 
  date: 5147740, 
  userId: "user126", 
  comments: "helping where I can" 
  }, 
  { 
  _id: "63636636641", 
  amt: "4307.5", 
  date: 5147745, 
  userId: "user127", 
  comments: "wishing good health" 
  }, 
  { 
  _id: "63636636642", 
  amt: "60090", 
  date: 5147750, 
  userId: "user128", 
  comments: "renewable energy is the future" 
  }, 
  { 
  _id: "63636636643", 
  amt: "200156.76", 
  date: 5147755, 
  userId: "user129", 
  comments: "love for animals" 
  }, 
  { _id: "63636636644", 
  objId: "donors_008", 
  amt: "35080", 
  date: 5147760, 
  userId: "user130", 
  comments: "food is a basic right" 
  } ,
  {
 _id: "63636636637", 
 objId: "donors_001", 
 amt: "54566", 
 date: 5147726, 
 userId: "user123", 
 comments: "get well soon" 
 },
  { 
  _id: "63636636638", 
  objId: "donors_002", 
  amt: "32045", 
  date: 5147730, 
  userId: "user124", 
  comments: "stay strong"
  }, 
  { 
  _id: "63636636639", 
  objId: "donors_003", 
  amt: "78025", 
  date: 5147735, 
  userId: "user125", 
  comments: "keep up the great work" 
  }, 
  { 
  _id: "63636636640", 
  objId: "donors_004", 
  amt: "95000", 
  date: 5147740, 
  userId: "user126", 
  comments: "helping where I can" 
  }, 
  { 
  _id: "63636636641", 
  objId: "donors_001", 
  amt: "4307.5", 
  date: 5147745, 
  userId: "user127", 
  comments: "wishing good health" 
  }, 
  { 
  _id: "63636636642", 
  objId: "donors_001", 
  amt: "60090", 
  date: 5147750, 
  userId: "user128", 
  comments: "renewable energy is the future" 
  }, 
  { 
  _id: "63636636643", 
  objId: "donors_001", 
  amt: "200156.76", 
  date: 5147755, 
  userId: "user129", comments: "love for animals" 
  }, 
  { _id: "63636636644", 
  objId: "donors_008", 
  amt: "35080", 
  date: 5147760, 
  userId: "user130", 
  comments: "food is a basic right" 
  } ,
  {
 _id: "63636636637", 
 objId: "donors_001", 
 amt: "54566", 
 date: 5147726, 
 userId: "user123", 
 comments: "get well soon" 
 },
  { 
  _id: "63636636638", 
  objId: "donors_002", 
  amt: "32045", 
  date: 5147730, 
  userId: "user124", 
  comments: "stay strong"
  }, 
  { 
  _id: "63636636639", 
  objId: "donors_003", 
  amt: "78025", 
  date: 5147735, 
  userId: "user125", 
  comments: "keep up the great work" 
  }, 
  { 
  _id: "63636636640", 
  objId: "donors_004", 
  amt: "95000", 
  date: 5147740, 
  userId: "user126", 
  comments: "helping where I can" 
  }, 
  { 
  _id: "63636636641", 
  objId: "donors_001", 
  amt: "4307.5", 
  date: 5147745, 
  userId: "user127", 
  comments: "wishing good health" 
  }, 
  { 
  _id: "63636636642", 
  objId: "donors_001", 
  amt: "60090", 
  date: 5147750, 
  userId: "user128", 
  comments: "renewable energy is the future" 
  }, 
  { 
  _id: "63636636643", 
  objId: "donors_001", 
  amt: "200156.76", 
  date: 5147755, 
  userId: "user129", comments: "love for animals" 
  }, 
  { _id: "63636636644", 
  objId: "donors_008", 
  amt: "35080", 
  date: 5147760, 
  userId: "user130", 
  comments: "food is a basic right" 
  },
  {
 _id: "63636636637", 
 objId: "donors_001", 
 amt: "54566", 
 date: 5147726, 
 userId: "user123", 
 comments: "get well soon" 
 },
  { 
  _id: "63636636638", 
  objId: "donors_002", 
  amt: "32045", 
  date: 5147730, 
  userId: "user124", 
  comments: "stay strong"
  }, 
  { 
  _id: "63636636639", 
  objId: "donors_003", 
  amt: "78025", 
  date: 5147735, 
  userId: "user125", 
  comments: "keep up the great work" 
  }, 
  { 
  _id: "63636636640", 
  objId: "donors_004", 
  amt: "95000", 
  date: 5147740, 
  userId: "user126", 
  comments: "helping where I can" 
  }, 
  { 
  _id: "63636636641", 
  objId: "donors_001", 
  amt: "4307.5", 
  date: 5147745, 
  userId: "user127", 
  comments: "wishing good health" 
  }, 
  { 
  _id: "63636636642", 
  objId: "donors_001", 
  amt: "60090", 
  date: 5147750, 
  userId: "user128", 
  comments: "renewable energy is the future" 
  }, 
  { 
  _id: "63636636643", 
  objId: "donors_001", 
  amt: "200156.76", 
  date: 5147755, 
  userId: "user129", comments: "love for animals" 
  }, 
  { _id: "63636636644", 
  objId: "donors_008", 
  amt: "35080", 
  date: 5147760, 
  userId: "user130", 
  comments: "food is a basic right" 
  } 
  ];






   const fundWithPiTips = {
  tips: [
    {
      id: "1",
      title: "How to get started",
      items: [
        {
          id: 1,
          title: "Our tools help create your fundraiser",
          text: "Click the ‘Start a fundWithPi’ button to get started. You’ll be guided by prompts to add fundraiser details and set your goal, which can be changed anytime.",
          img: "./assets/images/sample.jpeg",
          link: "ourtools"
        },
        {
          id: 2,
          title: "Share to reach more supporters",
          text: "Once your fundraiser is live, share it on social media, email, and messaging apps to increase visibility and donations.",
          img: "./assets/images/share.jpg",
          link: "sharing"
        },
        {
          id: 3,
          title: "Track donations and thank donors",
          text: "Easily monitor your fundraiser's progress and express gratitude to your donors through our built-in tools.",
          img: "./assets/images/tracking.jpg",
          link: "tracking"
        },
        {
          id: 4,
          title: "Withdraw funds when you need them",
          text: "Access your funds quickly and securely. You can withdraw at any time during or after your campaign.",
          img: "./assets/images/withdraw.jpeg",
          link: "withdraw"
        }
      ]
    },
    {
      id: "2",
      title: "How to create a team",
      items: [
        {
          id: 1,
          title: "Invite trusted friends or colleagues",
          text: "You can add teammates to help you manage, promote, and grow your fundraiser.",
          img: "./assets/images/team1.jpg",
          link: "invite"
        },
        {
          id: 2,
          title: "Assign roles and permissions",
          text: "Customize access levels for each team member to maintain control and security.",
          img: "./assets/images/roles.jpg",
          link: "roles"
        },
        {
          id: 3,
          title: "Collaborate in real time",
          text: "Share updates, respond to donors, and post thank-yous together with your team.",
          img: "./assets/images/collaborate.jpg",
          link: "collab"
        }
      ]
    },
    {
      id: "3",
      title: "Charity funds raised",
      items: [
        {
          id: 1,
          title: "Support verified charities",
          text: "Browse a list of verified organizations and donate directly or raise funds for them.",
          img: "./assets/images/charity.jpg",
          link: "verifiedcharities"
        },
        {
          id: 2,
          title: "Track impact",
          text: "See how much has been raised and where the funds are going.",
          img: "./assets/images/impact.jpg",
          link: "impact"
        },
        {
          id: 3,
          title: "Connect with nonprofit teams",
          text: "Get updates and communication from the charity you’re supporting.",
          img: "./assets/images/connect.jpg",
          link: "nonprofit"
        }
      ]
    },
    {
      id: "4",
      title: "Fundraising best practices",
      items: [
        {
          id: 1,
          title: "Set a realistic and inspiring goal",
          text: "People are more likely to donate when they understand the goal and believe it’s achievable.",
          img: "./assets/images/goal.jpg",
          link: "goalsetting"
        },
        {
          id: 2,
          title: "Tell a compelling story",
          text: "Explain why the fundraiser matters. Use photos, videos, and details to connect with potential supporters.",
          img: "./assets/images/storytelling.jpg",
          link: "story"
        },
        {
          id: 3,
          title: "Keep your community updated",
          text: "Post updates regularly to keep supporters informed and engaged.",
          img: "./assets/images/update.jpg",
          link: "updates"
        }
      ]
    }
  ]
};