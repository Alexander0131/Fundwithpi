const countries = [
    {
        "name": "United States",
        "code": "US",
        "dial_code": "+1",
        "flag": "🇺🇸"
    },
    {
      "name": "Afghanistan",
      "code": "AF",
      "dial_code": "+93",
      "flag": "🇦🇫"
    },
    {
      "name": "Albania",
      "code": "AL",
      "dial_code": "+355",
      "flag": "🇦🇱"
    },
    {
      "name": "Algeria",
      "code": "DZ",
      "dial_code": "+213",
      "flag": "🇩🇿"
    },
    {
      "name": "Andorra",
      "code": "AD",
      "dial_code": "+376",
      "flag": "🇦🇩"
    },
    {
      "name": "Angola",
      "code": "AO",
      "dial_code": "+244",
      "flag": "🇦🇴"
    },
    {
      "name": "Argentina",
      "code": "AR",
      "dial_code": "+54",
      "flag": "🇦🇷"
    },
    {
      "name": "Armenia",
      "code": "AM",
      "dial_code": "+374",
      "flag": "🇦🇲"
    },
    {
      "name": "Australia",
      "code": "AU",
      "dial_code": "+61",
      "flag": "🇦🇺"
    },
    {
      "name": "Austria",
      "code": "AT",
      "dial_code": "+43",
      "flag": "🇦🇹"
    },
    {
      "name": "Azerbaijan",
      "code": "AZ",
      "dial_code": "+994",
      "flag": "🇦🇿"
    },
    {
      "name": "Bangladesh",
      "code": "BD",
      "dial_code": "+880",
      "flag": "🇧🇩"
    },
    {
      "name": "Belgium",
      "code": "BE",
      "dial_code": "+32",
      "flag": "🇧🇪"
    },
    {
      "name": "Benin",
      "code": "BJ",
      "dial_code": "+229",
      "flag": "🇧🇯"
    },
    {
      "name": "Bolivia, Plurinational State of",
      "code": "BO",
      "dial_code": "+591",
      "flag": "🇧🇴"
    },
    {
      "name": "Brazil",
      "code": "BR",
      "dial_code": "+55",
      "flag": "🇧🇷"
    },
    {
      "name": "Bulgaria",
      "code": "BG",
      "dial_code": "+359",
      "flag": "🇧🇬"
    },
    {
      "name": "Cambodia",
      "code": "KH",
      "dial_code": "+855",
      "flag": "🇰🇭"
    },
    {
      "name": "Cameroon",
      "code": "CM",
      "dial_code": "+237",
      "flag": "🇨🇲"
    },
    {
      "name": "Canada",
      "code": "CA",
      "dial_code": "+1",
      "flag": "🇨🇦"
    },
    {
      "name": "Chile",
      "code": "CL",
      "dial_code": "+56",
      "flag": "🇨🇱"
    },
    {
      "name": "China",
      "code": "CN",
      "dial_code": "+86",
      "flag": "🇨🇳"
    },
    {
      "name": "Colombia",
      "code": "CO",
      "dial_code": "+57",
      "flag": "🇨🇴"
    },
    {
      "name": "Costa Rica",
      "code": "CR",
      "dial_code": "+506",
      "flag": "🇨🇷"
    },
    {
      "name": "Croatia",
      "code": "HR",
      "dial_code": "+385",
      "flag": "🇭🇷"
    },
    {
      "name": "Cuba",
      "code": "CU",
      "dial_code": "+53",
      "flag": "🇨🇺"
    },
    {
      "name": "Cyprus",
      "code": "CY",
      "dial_code": "+357",
      "flag": "🇨🇾"
    },
    {
      "name": "Czechia",
      "code": "CZ",
      "dial_code": "+420",
      "flag": "🇨🇿"
    },
    {
      "name": "Denmark",
      "code": "DK",
      "dial_code": "+45",
      "flag": "🇩🇰"
    },
    {
      "name": "Dominican Republic",
      "code": "DO",
      "dial_code": "+1",
      "flag": "🇩🇴"
    },
    {
      "name": "Ecuador",
      "code": "EC",
      "dial_code": "+593",
      "flag": "🇪🇨"
    },
    {
      "name": "Egypt",
      "code": "EG",
      "dial_code": "+20",
      "flag": "🇪🇬"
    },
    {
      "name": "El Salvador",
      "code": "SV",
      "dial_code": "+503",
      "flag": "🇸🇻"
    },
    {
      "name": "Estonia",
      "code": "EE",
      "dial_code": "+372",
      "flag": "🇪🇪"
    },
    {
      "name": "Ethiopia",
      "code": "ET",
      "dial_code": "+251",
      "flag": "🇪🇹"
    },
    {
      "name": "Finland",
      "code": "FI",
      "dial_code": "+358",
      "flag": "🇫🇮"
    },
    {
      "name": "France",
      "code": "FR",
      "dial_code": "+33",
      "flag": "🇫🇷"
    },
    {
      "name": "Georgia",
      "code": "GE",
      "dial_code": "+995",
      "flag": "🇬🇪"
    },
    {
      "name": "Germany",
      "code": "DE",
      "dial_code": "+49",
      "flag": "🇩🇪"
    },
    {
      "name": "Ghana",
      "code": "GH",
      "dial_code": "+233",
      "flag": "🇬🇭"
    },
    {
      "name": "Greece",
      "code": "GR",
      "dial_code": "+30",
      "flag": "🇬🇷"
    },
    {
      "name": "Guatemala",
      "code": "GT",
      "dial_code": "+502",
      "flag": "🇬🇹"
    },
    {
      "name": "Haiti",
      "code": "HT",
      "dial_code": "+509",
      "flag": "🇭🇹"
    },
    {
      "name": "Hungary",
      "code": "HU",
      "dial_code": "+36",
      "flag": "🇭🇺"
    },
    {
      "name": "India",
      "code": "IN",
      "dial_code": "+91",
      "flag": "🇮🇳"
    },
    {
      "name": "Indonesia",
      "code": "ID",
      "dial_code": "+62",
      "flag": "🇮🇩"
    },
    {
      "name": "Iran, Islamic Republic of",
      "code": "IR",
      "dial_code": "+98",
      "flag": "🇮🇷"
    },
    {
      "name": "Iraq",
      "code": "IQ",
      "dial_code": "+964",
      "flag": "🇮🇶"
    },
    {
      "name": "Ireland",
      "code": "IE",
      "dial_code": "+353",
      "flag": "🇮🇪"
    },
    {
      "name": "Israel",
      "code": "IL",
      "dial_code": "+972",
      "flag": "🇮🇱"
    },
    {
      "name": "Italy",
      "code": "IT",
      "dial_code": "+39",
      "flag": "🇮🇹"
    },
    {
      "name": "Japan",
      "code": "JP",
      "dial_code": "+81",
      "flag": "🇯🇵"
    },
    {
      "name": "Jordan",
      "code": "JO",
      "dial_code": "+962",
      "flag": "🇯🇴"
    },
    {
      "name": "Kazakhstan",
      "code": "KZ",
      "dial_code": "+7",
      "flag": "🇰🇿"
    },
    {
      "name": "Kenya",
      "code": "KE",
      "dial_code": "+254",
      "flag": "🇰🇪"
    },
    {
      "name": "Korea, Republic of",
      "code": "KR",
      "dial_code": "+82",
      "flag": "🇰🇷"
    },
    {
      "name": "Kuwait",
      "code": "KW",
      "dial_code": "+965",
      "flag": "🇰🇼"
    },
    {
      "name": "Lao People's Democratic Republic",
      "code": "LA",
      "dial_code": "+856",
      "flag": "🇱🇦"
    },
    {
      "name": "Latvia",
      "code": "LV",
      "dial_code": "+371",
      "flag": "🇱🇻"
    },
    {
      "name": "Lebanon",
      "code": "LB",
      "dial_code": "+961",
      "flag": "🇱🇧"
    },
    {
      "name": "Libya",
      "code": "LY",
      "dial_code": "+218",
      "flag": "🇱🇾"
    },
    {
      "name": "Lithuania",
      "code": "LT",
      "dial_code": "+370",
      "flag": "🇱🇹"
    },
    {
      "name": "Luxembourg",
      "code": "LU",
      "dial_code": "+352",
      "flag": "🇱🇺"
    },
    {
      "name": "Malaysia",
      "code": "MY",
      "dial_code": "+60",
      "flag": "🇲🇾"
    },
    {
      "name": "Mexico",
      "code": "MX",
      "dial_code": "+52",
      "flag": "🇲🇽"
    },
    {
      "name": "Morocco",
      "code": "MA",
      "dial_code": "+212",
      "flag": "🇲🇦"
    },
    {
      "name": "Nepal",
      "code": "NP",
      "dial_code": "+977",
      "flag": "🇳🇵"
    },
    {
      "name": "Netherlands",
      "code": "NL",
      "dial_code": "+31",
      "flag": "🇳🇱"
    },
    {
      "name": "New Zealand",
      "code": "NZ",
      "dial_code": "+64",
      "flag": "🇳🇿"
    },
    {
      "name": "Nigeria",
      "code": "NG",
      "dial_code": "+234",
      "flag": "🇳🇬"
    },
    {
      "name": "Norway",
      "code": "NO",
      "dial_code": "+47",
      "flag": "🇳🇴"
    },
    {
      "name": "Oman",
      "code": "OM",
      "dial_code": "+968",
      "flag": "🇴🇲"
    },
    {
      "name": "Pakistan",
      "code": "PK",
      "dial_code": "+92",
      "flag": "🇵🇰"
    },
    {
      "name": "Panama",
      "code": "PA",
      "dial_code": "+507",
      "flag": "🇵🇦"
    },
    {
      "name": "Peru",
      "code": "PE",
      "dial_code": "+51",
      "flag": "🇵🇪"
    },
    {
      "name": "Philippines",
      "code": "PH",
      "dial_code": "+63",
      "flag": "🇵🇭"
    },
    {
      "name": "Poland",
      "code": "PL",
      "dial_code": "+48",
      "flag": "🇵🇱"
    },
    {
      "name": "Portugal",
      "code": "PT",
      "dial_code": "+351",
      "flag": "🇵🇹"
    },
    {
      "name": "Qatar",
      "code": "QA",
      "dial_code": "+974",
      "flag": "🇶🇦"
    },
    {
      "name": "Romania",
      "code": "RO",
      "dial_code": "+40",
      "flag": "🇷🇴"
    },
    {
      "name": "Russian Federation",
      "code": "RU",
      "dial_code": "+7",
      "flag": "🇷🇺"
    },
    {
      "name": "Saudi Arabia",
      "code": "SA",
      "dial_code": "+966",
      "flag": "🇸🇦"
    },
    {
      "name": "Serbia",
      "code": "RS",
      "dial_code": "+381",
      "flag": "🇷🇸"
    },
    {
      "name": "Singapore",
      "code": "SG",
      "dial_code": "+65",
      "flag": "🇸🇬"
    },
    {
      "name": "Slovakia",
      "code": "SK",
      "dial_code": "+421",
      "flag": "🇸🇰"
    },
    {
      "name": "Slovenia",
      "code": "SI",
      "dial_code": "+386",
      "flag": "🇸🇮"
    },
    {
      "name": "South Africa",
      "code": "ZA",
      "dial_code": "+27",
      "flag": "🇿🇦"
    },
    {
      "name": "Spain",
      "code": "ES",
      "dial_code": "+34",
      "flag": "🇪🇸"
    },
    {
      "name": "Sweden",
      "code": "SE",
      "dial_code": "+46",
      "flag": "🇸🇪"
    },
    {
      "name": "Switzerland",
      "code": "CH",
      "dial_code": "+41",
      "flag": "🇨🇭"
    },
    {
      "name": "Syrian Arab Republic",
      "code": "SY",
      "dial_code": "+963",
      "flag": "🇸🇾"
    },
    {
      "name": "Taiwan, Province of China",
      "code": "TW",
      "dial_code": "+886",
      "flag": "🇹🇼"
    },
    {
      "name": "Thailand",
      "code": "TH",
      "dial_code": "+66",
      "flag": "🇹🇭"
    },
    {
      "name": "Turkey",
      "code": "TR",
      "dial_code": "+90",
      "flag": "🇹🇷"
    },
    {
      "name": "Ukraine",
      "code": "UA",
      "dial_code": "+380",
      "flag": "🇺🇦"
    },
    {
      "name": "United Arab Emirates",
      "code": "AE",
      "dial_code": "+971",
      "flag": "🇦🇪"
    },
    {
      "name": "United Kingdom",
      "code": "GB",
      "dial_code": "+44",
      "flag": "🇬🇧"
    },
    {
      "name": "Uruguay",
      "code": "UY",
      "dial_code": "+598",
      "flag": "🇺🇾"
    },
    {
      "name": "Uzbekistan",
      "code": "UZ",
      "dial_code": "+998",
      "flag": "🇺🇿"
    },
    {
      "name": "Venezuela, Bolivarian Republic of",
      "code": "VE",
      "dial_code": "+58",
      "flag": "🇻🇪"
    },
    {
      "name": "Viet Nam",
      "code": "VN",
      "dial_code": "+84",
      "flag": "🇻🇳"
    },
    {
      "name": "Yemen",
      "code": "YE",
      "dial_code": "+967",
      "flag": "🇾🇪"
    },
    {
      "name": "Zambia",
      "code": "ZM",
      "dial_code": "+260",
      "flag": "🇿🇲"
    },
    {
      "name": "Zimbabwe",
      "code": "ZW",
      "dial_code": "+263",
      "flag": "🇿🇼"
    }
  ]