export const REGIONS = ["SOUTH EAST ASIA", "JAPAN", "TAIWAN", "HONG KONG"];

// if this wasn't mocked, I woud have made the API call here and add the respective regions based on their teams / nationality
const SEA = REGIONS[0];
const JP = REGIONS[1];
const TW = REGIONS[2];
const HK = REGIONS[3];

// mocked some API calls here to manipulate the data

export const increasePlayerLikes = (targetPlayer) => {
    playersMock.forEach(player => {
        if (player.participantId && player.participantId === targetPlayer.participantId) {
            return player.likes++;
        }
    })
}

export const decreasePlayerLikes = (targetPlayer) => {
    playersMock.forEach(player => {
        if (player.participantId && player.participantId === targetPlayer.participantId) {
            return player.likes--;
        }
    })
}

export const playersMock = [
  {
      teams: 'zh',
      participantId: '5a73dbd603343b0dsfgsdfg',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Dwalin',
      message: '人生就像爐石，有快慢之分',
      country: 'jp',
      region: JP,
      likes: 44
  },
  {
      teams: 'jp',
      participantId: '5a7483dbe55d603343b0hhhdfhdf',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Narvi',
      message: "I'm the anchor/captain of the Singapore team that is going to BlizzCon for the HGG Playoffs, and I also recently finished 5th in the HCT APAC Fall Playoffs. Definitely one of the best players in SEA, so please vote for me, you know you want me in the team!",
      country: 'sg',
      region: SEA,
      likes: 43
  },
  {
      teams: 'es',
      participantId: 'd5d603343b0bbbfdfb',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Thrain',
      message: "百萬象迷站出來!!!(最好成績大概是2018年二月賽季亞服#1)",
      country: 'sg',
      region: SEA,
      likes: 321
  },
  {
      teams: 'jp',
      participantId: '5a7sdfas32424sfffffw',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Durin',
      message: "I'm the anchor/captain of the Singapore team that is going to BlizzCon for the HGG Playoffs, and I also recently finished 5th in the HCT APAC Fall Playoffs. Definitely one of the best players in SEA, so please vote for me, you know you want me in the team!",
      country: 'jp',
      region: JP,
      likes: 231
  },
  {
      teams: 'zh',
      participantId: '5a3333389dd5d603343b0gdfdgfd',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Borin',
      message: "勝つために全力で戦います。投票よろしくお願いします。",
      country: 'ch',
      region: TW,
      likes: 433
  },
  {
      teams: 'zh',
      participantId: '54222222dsasd89dd5d603343b0rtgrt',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Ori',
      message: "このゲームには必勝法がある。",
      country: 'hk',
      region: HK,
      likes: 23
  },
  {
      teams: 'zh',
      participantId: 'aaaasd333389dd5d603343b0vvbbgg',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Bombur',
      message: "豊富な国際大会の経験を活かしてお役に立てると思います",
      country: 'jp',
      region: HK,
      likes: 52
  },
  {
      teams: 'zh',
      participantId: 'fsd3334549dd5d603343b0zxzxzxx',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Bifur',
      message: "選手権プレイオフに2度出場し、ベスト8に残った実績があります。プリーストの勝利数が累計8000を超えていて扱いには自信があります。ぜひ投票お願いします",
      country: 'ch',
      region: HK,
      likes: 43
  },
  {
      teams: 'zh',
      participantId: 'sdf23339dd5d603343b0xcvx',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Girith',
      message: "今のところ日本で1番HCTポイントを持っていて、HSに対するモチベーションが高いです :)",
      country: 'hk',
      region: HK,
      likes: 12
  },
  {
      teams: 'zh',
      participantId: 'sdf32222e589dd5d603343b0ascsasascc',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Maer',
      message: "One of the top players in Singapore with the most top 100 finishes.",
      country: 'jp',
      region: JP,
      likes: 33
  },
  {
      teams: 'zh',
      participantId: 'sdf2333389dd5d603343b0sdfAA',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Hadlath',
      message: "To achieve my dream of being a better player! To inspire other players to achieve their dreams! Trying is the first step!",
      country: 'tw',
      region: TW,
      likes: 322
  },
  {
      teams: 'zh',
      participantId: 'sdf233451222589dd5d603343b0dsf',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Duimben',
      message: "I cast hard and I tryhard while balancing a working life. Your Average Joe with above average goals",
      country: 'th',
      region: SEA,
      likes: null
  },
  {
      teams: 'zh',
      participantId: 'sdf324523589dd5d603343b0asdfas',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Hador',
      message: "Suuuuuper washed up Hearthstone player from the Philippines. I hate losing more than I like winning. Please vote so I can make SEA great again. :D",
      country: 'ph',
      region: JP,
      likes: 111
  },
  {
      teams: 'zh',
      participantId: 'sdf3245222289dd5d603343b0dfsd',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Brandybuck',
      message: "Asian Games 2018 Hearthstone Bronze medalist, Priest/Paladin expert at TempoStorm snapshot.",
      country: 'jp',
      region: JP,
      likes: 22
  },
  {
      teams: 'zh',
      participantId: '234asddddbe589dd5d603343b0ssa',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Gerontius',
      message: "2nd Tavern Hero Qualifier Indonesia. My deck : Tempo Mage, Secret Hunter, Big Spell Mage, Even Warlock.",
      country: 'tw',
      region: TW,
      likes: 5
  },
  {
      teams: 'zh',
      participantId: '234asssse589dd5d60aaa3343b0xcvxc',
      avatarUrl: 'https://cdn.dekki.com/uploads/users/5a7483dbe589dd5d603343b0/avatar/original',
      nickname: 'Fallohide',
      message: "The best/luckiest hearthstone player in SEA",
      country: 'hk',
      region: HK,
      likes: 4
  },
];
