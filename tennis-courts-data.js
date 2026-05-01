// 京都テニスコート データベース
const tennisCourtData = {
  "courts": [
    {
      "id": 1,
      "name": "京都市西京極総合運動公園テニスコート",
      "location": {
        "address": "京都市右京区西京極新明町29",
        "lat": 35.0089,
        "lng": 135.7136
      },
      "contact": {
        "phone": "075-315-4571",
        "website": "https://www.kyoto-park.or.jp/nishikyogoku/"
      },
      "schedule": {
        "weekdays": "9:00-21:00",
        "weekends": "9:00-21:00",
        "holidays": "9:00-21:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "1ヶ月前から",
        "membershipRequired": false,
        "onlineBooking": true,
        "bookingUrl": "https://www.kyoto-park.or.jp/nishikyogoku/tennis/"
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 8,
          "lighting": true
        },
        {
          "type": "オムニコート", 
          "count": 4,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 610,
          "evening": 1220
        },
        "weekends": {
          "daytime": 1220,
          "evening": 1220
        }
      },
      "facilities": [
        "更衣室",
        "シャワー",
        "駐車場（有料）",
        "自動販売機"
      ],
      "notes": "京都市最大規模のテニス施設。ナイター設備充実。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "やや混雑",
        "weekendMorning": "混雑",
        "weekendEvening": "非常に混雑"
      }
    },
    {
      "id": 2,
      "name": "京都府立山城総合運動公園テニスコート",
      "location": {
        "address": "宇治市広野町八軒屋谷1",
        "lat": 34.8831,
        "lng": 135.8267
      },
      "contact": {
        "phone": "0774-24-1313",
        "website": "https://www.kyoto-park.or.jp/yamashiro/"
      },
      "schedule": {
        "weekdays": "9:00-21:00",
        "weekends": "9:00-21:00", 
        "holidays": "9:00-21:00"
      },
      "reservation": {
        "unitHours": 2,
        "advanceBooking": "2ヶ月前から",
        "membershipRequired": false,
        "onlineBooking": true,
        "bookingUrl": "https://www.kyoto-park.or.jp/yamashiro/tennis/"
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 16,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 1020,
          "evening": 2040
        },
        "weekends": {
          "daytime": 2040,
          "evening": 2040
        }
      },
      "facilities": [
        "更衣室",
        "シャワー",
        "レストラン",
        "駐車場（無料）"
      ],
      "notes": "16面の大規模施設。駐車場無料が魅力。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "普通",
        "weekendMorning": "やや混雑",
        "weekendEvening": "混雑"
      }
    },
    {
      "id": 3,
      "name": "京都市宝が池公園運動施設テニスコート",
      "location": {
        "address": "京都市左京区上高野流田町8",
        "lat": 35.0566,
        "lng": 135.7878
      },
      "contact": {
        "phone": "075-781-3010",
        "website": "https://www.kyoto-park.or.jp/takaragaike/"
      },
      "schedule": {
        "weekdays": "9:00-21:00",
        "weekends": "9:00-21:00",
        "holidays": "9:00-21:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "1ヶ月前から",
        "membershipRequired": false,
        "onlineBooking": true,
        "bookingUrl": "https://www.kyoto-park.or.jp/takaragaike/tennis/"
      },
      "courts": [
        {
          "type": "オムニコート",
          "count": 8,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 610,
          "evening": 1220
        },
        "weekends": {
          "daytime": 1220,
          "evening": 1220
        }
      },
      "facilities": [
        "更衣室",
        "シャワー",
        "駐車場（有料）",
        "自動販売機",
        "レストラン"
      ],
      "notes": "宝が池公園内の緑豊かな環境。全面オムニコート。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "やや混雑",
        "weekendMorning": "混雑",
        "weekendEvening": "混雑"
      }
    },
    {
      "id": 4,
      "name": "京都市円山公園テニスコート",
      "location": {
        "address": "京都市東山区円山町473",
        "lat": 35.0036,
        "lng": 135.7811
      },
      "contact": {
        "phone": "075-561-1350",
        "website": ""
      },
      "schedule": {
        "weekdays": "6:00-21:00",
        "weekends": "6:00-21:00",
        "holidays": "6:00-21:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "2週間前から",
        "membershipRequired": false,
        "onlineBooking": false,
        "bookingUrl": ""
      },
      "courts": [
        {
          "type": "クレイコート",
          "count": 4,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 410,
          "evening": 820
        },
        "weekends": {
          "daytime": 820,
          "evening": 820
        }
      },
      "facilities": [
        "更衣室",
        "自動販売機"
      ],
      "notes": "円山公園内の歴史あるクレイコート。桜の季節は特に人気。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "普通",
        "weekdayEvening": "やや混雑",
        "weekendMorning": "非常に混雑",
        "weekendEvening": "混雑"
      }
    },
    {
      "id": 5,
      "name": "島津アリーナ京都テニスコート",
      "location": {
        "address": "京都市右京区西京極新明町29",
        "lat": 35.0089,
        "lng": 135.7136
      },
      "contact": {
        "phone": "075-315-4571",
        "website": "https://www.kyoto-arena.jp/"
      },
      "schedule": {
        "weekdays": "9:00-22:00",
        "weekends": "9:00-22:00",
        "holidays": "9:00-22:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "3ヶ月前から",
        "membershipRequired": false,
        "onlineBooking": true,
        "bookingUrl": "https://www.kyoto-arena.jp/tennis/"
      },
      "courts": [
        {
          "type": "インドア",
          "count": 4,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 1540,
          "evening": 2060
        },
        "weekends": {
          "daytime": 2060,
          "evening": 2060
        }
      },
      "facilities": [
        "更衣室",
        "シャワー",
        "冷暖房",
        "駐車場（有料）",
        "自動販売機",
        "ラウンジ"
      ],
      "notes": "全天候型インドアコート。冷暖房完備で年中快適。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "普通",
        "weekendMorning": "やや混雑",
        "weekendEvening": "やや混雑"
      }
    },
    {
      "id": 6,
      "name": "京都市深草中央公園テニスコート",
      "location": {
        "address": "京都市伏見区深草大亀谷大山町21",
        "lat": 34.9498,
        "lng": 135.7681
      },
      "contact": {
        "phone": "075-645-0715",
        "website": ""
      },
      "schedule": {
        "weekdays": "9:00-17:00",
        "weekends": "9:00-17:00",
        "holidays": "9:00-17:00"
      },
      "reservation": {
        "unitHours": 2,
        "advanceBooking": "1週間前から",
        "membershipRequired": false,
        "onlineBooking": false,
        "bookingUrl": ""
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 2,
          "lighting": false
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 200,
          "evening": 200
        },
        "weekends": {
          "daytime": 200,
          "evening": 200
        }
      },
      "facilities": [
        "駐車場（無料）",
        "自動販売機"
      ],
      "notes": "地域密着型の公園施設。格安料金が魅力。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "普通",
        "weekendMorning": "やや混雑",
        "weekendEvening": "普通"
      }
    },
    {
      "id": 7,
      "name": "京都市北野公園テニスコート",
      "location": {
        "address": "京都市北区北野下白梅町",
        "lat": 35.0311,
        "lng": 135.7356
      },
      "contact": {
        "phone": "075-432-0030",
        "website": ""
      },
      "schedule": {
        "weekdays": "6:00-19:00",
        "weekends": "6:00-19:00",
        "holidays": "6:00-19:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "当日申込",
        "membershipRequired": false,
        "onlineBooking": false,
        "bookingUrl": ""
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 2,
          "lighting": false
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 410,
          "evening": 410
        },
        "weekends": {
          "daytime": 820,
          "evening": 820
        }
      },
      "facilities": [
        "自動販売機"
      ],
      "notes": "北野天満宮近くの小規模コート。当日申込制。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "普通",
        "weekdayEvening": "普通",
        "weekendMorning": "混雑",
        "weekendEvening": "やや混雑"
      }
    },
    {
      "id": 8,
      "name": "京都テルサテニスコート",
      "location": {
        "address": "京都市南区東九条下殿田町70",
        "lat": 34.9811,
        "lng": 135.7622
      },
      "contact": {
        "phone": "075-692-3400",
        "website": "https://www.kyoto-terrsa.or.jp/"
      },
      "schedule": {
        "weekdays": "9:00-21:00",
        "weekends": "9:00-21:00",
        "holidays": "9:00-21:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "2ヶ月前から",
        "membershipRequired": false,
        "onlineBooking": true,
        "bookingUrl": "https://www.kyoto-terrsa.or.jp/sports/tennis/"
      },
      "courts": [
        {
          "type": "オムニコート",
          "count": 4,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 720,
          "evening": 1440
        },
        "weekends": {
          "daytime": 1440,
          "evening": 1440
        }
      },
      "facilities": [
        "更衣室",
        "シャワー",
        "駐車場（有料）",
        "温浴施設",
        "レストラン"
      ],
      "notes": "京都駅からアクセス良好。温浴施設併設。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "やや混雑",
        "weekendMorning": "やや混雑",
        "weekendEvening": "混雑"
      }
    },
    {
      "id": 9,
      "name": "向島テニスコート",
      "location": {
        "address": "京都市伏見区向島二ノ丸町",
        "lat": 34.9278,
        "lng": 135.7889
      },
      "contact": {
        "phone": "075-623-7037",
        "website": ""
      },
      "schedule": {
        "weekdays": "9:00-17:00",
        "weekends": "9:00-17:00",
        "holidays": "9:00-17:00"
      },
      "reservation": {
        "unitHours": 2,
        "advanceBooking": "1週間前から",
        "membershipRequired": false,
        "onlineBooking": false,
        "bookingUrl": ""
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 4,
          "lighting": false
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 300,
          "evening": 300
        },
        "weekends": {
          "daytime": 300,
          "evening": 300
        }
      },
      "facilities": [
        "駐車場（無料）",
        "自動販売機"
      ],
      "notes": "向島ニュータウン内の公営コート。非常に格安。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "普通",
        "weekendMorning": "やや混雑",
        "weekendEvening": "普通"
      }
    },
    {
      "id": 10,
      "name": "京都市横大路運動公園テニスコート",
      "location": {
        "address": "京都市伏見区横大路下三栖城ノ前町68",
        "lat": 34.9456,
        "lng": 135.7234
      },
      "contact": {
        "phone": "075-611-7081",
        "website": ""
      },
      "schedule": {
        "weekdays": "9:00-21:00",
        "weekends": "9:00-21:00",
        "holidays": "9:00-21:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "1ヶ月前から",
        "membershipRequired": false,
        "onlineBooking": false,
        "bookingUrl": ""
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 6,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 610,
          "evening": 1220
        },
        "weekends": {
          "daytime": 1220,
          "evening": 1220
        }
      },
      "facilities": [
        "更衣室",
        "駐車場（無料）",
        "自動販売機"
      ],
      "notes": "伏見区南部の充実した公営施設。ナイター設備あり。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "やや混雑",
        "weekendMorning": "やや混雑",
        "weekendEvening": "混雑"
      }
    },
    {
      "id": 11,
      "name": "ラケットパーク洛西",
      "location": {
        "address": "京都市西京区大枝沓掛町26-244",
        "lat": 34.9667,
        "lng": 135.6789
      },
      "contact": {
        "phone": "075-333-5522",
        "website": "https://racket-park-rakusai.com/"
      },
      "schedule": {
        "weekdays": "9:00-24:00",
        "weekends": "7:00-24:00",
        "holidays": "7:00-24:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "会員は1ヶ月前、ビジターは1週間前",
        "membershipRequired": true,
        "onlineBooking": true,
        "bookingUrl": "https://racket-park-rakusai.com/booking/"
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 8,
          "lighting": true
        },
        {
          "type": "インドア",
          "count": 4,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 1980,
          "evening": 2640
        },
        "weekends": {
          "daytime": 2640,
          "evening": 2640
        }
      },
      "facilities": [
        "更衣室",
        "シャワー",
        "冷暖房（インドア）",
        "駐車場（無料）",
        "プロショップ",
        "ラウンジ",
        "レンタルラケット"
      ],
      "notes": "民間クラブ。インドア・アウトドア完備。会員制。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "普通",
        "weekendMorning": "普通",
        "weekendEvening": "やや混雑"
      }
    },
    {
      "id": 12,
      "name": "京都市醍醐中央公園テニスコート",
      "location": {
        "address": "京都市伏見区醍醐高畑町30-1",
        "lat": 34.9389,
        "lng": 135.8194
      },
      "contact": {
        "phone": "075-571-7292",
        "website": ""
      },
      "schedule": {
        "weekdays": "9:00-17:00",
        "weekends": "9:00-17:00",
        "holidays": "9:00-17:00"
      },
      "reservation": {
        "unitHours": 2,
        "advanceBooking": "1週間前から",
        "membershipRequired": false,
        "onlineBooking": false,
        "bookingUrl": ""
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 2,
          "lighting": false
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 200,
          "evening": 200
        },
        "weekends": {
          "daytime": 200,
          "evening": 200
        }
      },
      "facilities": [
        "駐車場（無料）",
        "自動販売機",
        "トイレ"
      ],
      "notes": "醍醐地域の公園内コート。地域住民に人気。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "普通",
        "weekendMorning": "やや混雑",
        "weekendEvening": "普通"
      }
    },
    {
      "id": 13,
      "name": "京都産業大学神山テニスコート（一般開放）",
      "location": {
        "address": "京都市北区上賀茂本山",
        "lat": 35.0611,
        "lng": 135.7472
      },
      "contact": {
        "phone": "075-705-1425",
        "website": "https://www.kyoto-su.ac.jp/"
      },
      "schedule": {
        "weekdays": "平日のみ 9:00-17:00",
        "weekends": "利用不可",
        "holidays": "利用不可"
      },
      "reservation": {
        "unitHours": 2,
        "advanceBooking": "1週間前から",
        "membershipRequired": false,
        "onlineBooking": false,
        "bookingUrl": ""
      },
      "courts": [
        {
          "type": "オムニコート",
          "count": 6,
          "lighting": false
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 500,
          "evening": 500
        },
        "weekends": {
          "daytime": 0,
          "evening": 0
        }
      },
      "facilities": [
        "駐車場（有料）",
        "更衣室"
      ],
      "notes": "大学施設の一般開放。平日のみ利用可能。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "空いている",
        "weekendMorning": "利用不可",
        "weekendEvening": "利用不可"
      }
    },
    {
      "id": 14,
      "name": "桂川テニスクラブ",
      "location": {
        "address": "京都市西京区桂上野今井町37",
        "lat": 34.9778,
        "lng": 135.6944
      },
      "contact": {
        "phone": "075-391-5522",
        "website": "http://katsuragawa-tc.com/"
      },
      "schedule": {
        "weekdays": "7:00-23:00",
        "weekends": "7:00-23:00",
        "holidays": "7:00-23:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "会員は1ヶ月前、ビジターは3日前",
        "membershipRequired": true,
        "onlineBooking": true,
        "bookingUrl": "http://katsuragawa-tc.com/booking/"
      },
      "courts": [
        {
          "type": "オムニコート",
          "count": 6,
          "lighting": true
        },
        {
          "type": "インドア",
          "count": 2,
          "lighting": true
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 2200,
          "evening": 2750
        },
        "weekends": {
          "daytime": 2750,
          "evening": 2750
        }
      },
      "facilities": [
        "更衣室",
        "シャワー",
        "冷暖房（インドア）",
        "駐車場（無料）",
        "プロショップ",
        "カフェ",
        "レンタルラケット",
        "レッスン"
      ],
      "notes": "桂川沿いの会員制クラブ。レッスンプロ常駐。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "空いている",
        "weekdayEvening": "普通",
        "weekendMorning": "やや混雑",
        "weekendEvening": "混雑"
      }
    },
    {
      "id": 15,
      "name": "京都市修学院中央公園テニスコート",
      "location": {
        "address": "京都市左京区修学院薬師堂町1",
        "lat": 35.0611,
        "lng": 135.7944
      },
      "contact": {
        "phone": "075-781-5131",
        "website": ""
      },
      "schedule": {
        "weekdays": "9:00-17:00",
        "weekends": "9:00-17:00",
        "holidays": "9:00-17:00"
      },
      "reservation": {
        "unitHours": 1,
        "advanceBooking": "当日申込",
        "membershipRequired": false,
        "onlineBooking": false,
        "bookingUrl": ""
      },
      "courts": [
        {
          "type": "ハードコート",
          "count": 2,
          "lighting": false
        }
      ],
      "pricing": {
        "weekdays": {
          "daytime": 410,
          "evening": 410
        },
        "weekends": {
          "daytime": 820,
          "evening": 820
        }
      },
      "facilities": [
        "自動販売機",
        "トイレ"
      ],
      "notes": "修学院地区の小規模公園コート。当日申込制。",
      "lastUpdated": "2024-05-01",
      "crowdingInfo": {
        "weekdayMorning": "普通",
        "weekdayEvening": "普通",
        "weekendMorning": "混雑",
        "weekendEvening": "やや混雑"
      }
    }
  ],
  "metadata": {
    "lastUpdated": "2024-05-01",
    "totalCourts": 15,
    "dataVersion": "2.0"
  }
};