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
    }
  ],
  "metadata": {
    "lastUpdated": "2024-05-01",
    "totalCourts": 2,
    "dataVersion": "1.0"
  }
};