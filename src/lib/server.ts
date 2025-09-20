// import pi from "../data/pi-billion.txt";
// import piFile from "../data/pi-hundred-thousand.txt";
import path from "path";
import fs from "fs";

const LINK_COLORS: string[] = [
    "green", "indianred", "brown", "coral", "salmon", "cadetblue", "rebeccapurple", "burlywood", "chocolate", "cornflowerblue", "crimson", "darkcyan", "darkgoldenrod", "darkgreen", "red", "blue", "darkolivegreen", "darkorange", "darkorchid", "darkslateblue", "firebrick", "indigo", "mediumpurple", "navy", "olive", "olivedrab", "orangered", "orchid", "palevioletred", "peru", "pink", "plum", "royalblue", "sandybrown", "saddlebrown", "seagreen", "sienna", "slateblue", "steelblue", "teal", "tomato", "yellowgreen", "tan"
]

const LINKS: Record<string, string[]> = {
    "0": [
        "0_(album)",
        "0_(year)",
        "Symbols_for_zero",
        "/dev/zero",
        "Zero_sharp",
        "0!",
        "0%25_apr",
        "0%25_finance",
        "Duck_(cricket)",
        "Names_for_the_number_0_in_English",
        "Big_O_notation",
        "0s_BC",
        "0s",

    ],
    "1": [
        "Bangladeshi_1-taka_note",
        "Formula_One",
        "One_Love/People_Get_Ready",
        "Wonder_Woman",
        "Wonders_of_the_World",
        "Gold_medal",
        "One_World_Trade_Center",
        "One_Direction",
        "One-way_traffic",
        "One_Way_or_Another",
        "One-child_policy",
        "One_Flew_Over_the_Cuckoo's_Nest_(novel)",
        "One_Flew_Over_the_Cuckoo's_Nest_(film)",
        "One_(pronoun)",
        "One_(band)",
        "One:_The_Movie",
        "BBC_One",
        "The_Chosen_One_(trope)",
        "California_State_Route_1",
        "List_of_world_number_one_snooker_players",
        "American_Airlines_Flight_1_(1936)",
    ],
    "2": [
        "To_(film)",
        "Too_(Fantastic_Plastic_Machine_album)",
        "The_Double_(Dostoevsky_novel)",
        "Double_(lunar_crater)",
        "Doppelgänger",
        "Pear",
        "Pair_skating",
        "Sequel",
        "2_Pallas",
        "Type_2_diabetes",
        "Duo_(shopping_mall)",
        "It_Takes_Two_(video_game)",
        "Power_of_two",
    ],
    "3": [
        "Standing_triple_jump",
        "3_ft_gauge_rail_modelling",
        "Triangle_mesh",
        "Three_Gorges_Dam",
        "Rule_of_three",
        "Rule_of_three_(writing)",
        "Rule_of_Three_(Wicca)",
        "Rule_of_thirds",
        "Three_Laws_of_Robotics",
        "Triumvirate",
        "Three_Pashas",
        "Troika_of_tyranny",
        "Troika_(driving)",
        "Troika!_(role-playing_game)",
        "Three_of_a_kind_(poker)",
        "Third_rail",
        "Third_Way",
        "Third-wave_feminism",
        "Power_of_three",
        "Triangular_number",
    ],
    "4": [
        "Fore_Abbey",
        "Fore_(golf)",
        "Four-minute_mile",
        "Fourth_Way",
        "4chan",
        "For_loop",
        "Four,_Isère",
        "Renault_4",
        "Oakland_Four",
        "BBC_Radio_4",
        "Channel_4",
        "4_(Beyoncé_album)",
        "Four_(composition)",
        "4_Vesta",
        "Fantastic_Four",
        "Gang_of_Four",
        "Four_Asian_Tigers",
        "Fourth_power",
    ],
    "5": [
        "High_five#Too_slow",
        "High_five",
        "High_five#Air_five",
        "Five_Nights_at_Freddy's",
        "5G",
        "Five_and_dime_stores",
        "Fifth_power_(algebra)",
    ],
    "6": [
        "Sixth_power",
        "Half_a_Dozen_Babies",
        "Half_Dozen_Group_of_Artists",
        "Six_Sigma",
        "Six_Feet_Under",
        "Six_Foot_Track",
        "Six_Flags",
        "Six_degrees_of_separation",
        "Sixth_form",
        "Senary",
        "Andrew_Six",
        "Jan_Six",
        "Jan_Six_(art_historian)",
        "Alphonse_Six",
        "Celebrity_Number_Six",
        "Rectus_abdominis_muscle",
        "Sixpack_(EU_law)",
        "Six-pack_rings",
        "Six-lined_racerunner",
        "Six_limbs_(Indian_painting)",
        "Pan_Am_Flight_6",
    ],
    "7": [
        "Seven_Wonders_of_the_Ancient_World",
        "Seven_deadly_sins",
        "Seven_Years'_War",
        "Seven_(1995_film)",
        "7_Up",
        "Seventh_power",
        "Seventh-day_Adventist_Church",
        "Lucky_7_(pirate_TV_station)",
        "Cristiano_Ronaldo",

    ],
    "007": ["James_Bond"],
    "8": [
        "Eighth_power",
        "Eight-hour_day_movement",
        "Eight-ball",
        "Magic_8_Ball",
        "Eight_Consciousnesses",
        "Wolseley_Eight",
        "After_Eight",
        "Mario_Kart_8",
        "Infinity_symbol",
        "Figure-eight_knot",
        "8½",
        "Gainesville_Eight",
        "Traitorous_eight",
        "The_Eight_(painters)",
        "8-bit_computing",
        "Byte",
        "8-bit_color",
        "Ate_(mythology)",
    ],
    "9": [
        "Nazgûl",
        "Nine_Inch_Nails",
        "Planet_Nine",
        "9_mm_caliber",
        "Nine-Eared_Hound",
        "Nine-Mile_Bridge",
        "Nine-ball",
        "Nine_Chapter_Law",
        "Nine_Bridges_Bridge",
        "Number_Nine,_Arkansas",
        "Order_of_Nine_Angles",
        "Nineveh",
    ],
    "009": ["American_Airlines_Flight_009"],
    "10": [
        "Tennessee",
        "Ten_Commandments",
        "Tender_(rail)",
        "Tenderloin,_San_Francisco",
        "Tencent",
        "10_Downing_Street",
        "10_Gigabit_Ethernet",
        "10_Things_I_Hate_About_You",
        "Mount_Ten",
        "Shō_Ten",
        "Ten_American_Painters",
        "Hong_Kong_ten-dollar_coin",
    ],
    "11": [
        "Ocean's_11",
        "Elevenses",
        "Snake_eyes",
    ],
    "12": [
        "Dozen",
        "One,_Two,_Buckle_My_Shoe",
        "Twelve-step_program",
        "Twelfth_Night",
        "Apostles_in_the_New_Testament",
        "Foot_(unit)",
        "Twelve-bar_blues",
    ],
    "13": [
        "Baker's_dozen",
        "Friday_the_13th",
    ],
    "14": [
        "14th_Dalai_Lama",
        "Fourteen,_West_Virginia",
        "Fourteener",
        "Fourteen_Points",
        "FedEx_Express_Flight_14",
    ],
    "15": [
        "15-minute_city",
        "Fifteen_Million_Merits",
        "Fifteen,_Ohio",
        "Fifteens",
        "Quinceañera",
        "15_puzzle",

    ],
    "16": [
        "16_mm_film",
        "Sixteen_Candles",
        "Sixteen_Tons",
        "Pathinaaru",
        "Christine_Sixteen",
        "16_Psyche",
    ],
    "17": [
        "Lockheed_X-17",
        "Seventeen_(South_Korean_band)",
        "Seventeen_Moments_of_Spring",
    ],
    "18": [
        "Semi-trailer_truck",
        "Eighteenth_Amendment_to_the_United_States_Constitution",
    ],
    "19": [
        "Number_Nineteen",
        "COVID-19",
    ],
    "20": [
        "U.S._Route_20",
        "Twenty,_Lincolnshire",
        "Twenty_(film)",
    ],
    "21": [
        "Twenty_One_Pilots",
        "21st_Century_Fox",
        "21_Savage",
        "21-gun_salute",
        "Legal_drinking_age#United_States",
        "21_Lutetia",
        "21_Club",
    ],
    "22": ["Too_Too", "Catch-22", "22_(Taylor_Swift_song)"],
    "23": [
        "23andMe",
        "23_skidoo",
        "Hilbert's_problems",
        "Twenty-Three_Tales",
    ],
    "24": [
        "24-hour_clock",
        "24_Hours_of_Le_Mans",
        "24_Hours_of_Lemons",
        "Frame_rate",
        "Polka",
        "Twenty-Four_Eyes",
    ],
    "25": [
        "Quarter_(United_States_coin)",
        "Twenty-five_Year_Award",
        "25_Days_of_Christmas",
    ],
    "26": [
        "26_Broadway",
    ],
    "27": [

    ],
    "28": [

    ],
    "29": [

    ],
    "30": ["30_Rock"],
    "31": ["Gallium", "AD_31", "31_BC", "Channel_31_(Kazakhstan)", "Thirty-one_(card_game)", "Baskin-Robbins", "31st_station", "Thirty-first_Dynasty_of_Egypt", "Andromeda_Galaxy"],
    "32": ["32-bit_computing", "Thirty-two-bar_form"],
    "33": ["Thirty-three_gods"],
    "34": ["United_Air_Lines_Flight_34"],
    "50": [
        "50_Cent",
        "50_State_quarters",
    ],
    "60": ["Bagel_(tennis)"],
    "060": ["0-6-0"],
    "61": ["Highway_61_Revisited",],
    "072": ["Air_France_Flight_072"],
    "80": [
        "Tethea_ocularis",
        "FedEx_Express_Flight_80",
    ],
    "89": [
        "Eight_or_Nine_Wise_Words_about_Letter-Writing",
    ],
    "92": ["Messier_92"],
    "99": ["99-year_lease"],
    "100": [
        "One_Hundred_Years_of_Solitude",
        "Hundred_Years'_War",
        "List_of_hundreds_of_Sweden",
    ],
    "111": [
        "NHS_111",
        "Swissair_Flight_111",
        "One_Hundred_and_One_Dalmatians",
    ],
    "120": [
        "Long_hundred",
        "120-cell",
    ],
    "0201": ["JIS_X_0201"],
    "202": ["Pan_Am_Flight_202"],
    "265": ["265_Anna"],
    "314": ["wiki/Pi", "wiki/Pi_O", "wiki/Life_of_Pi", "wiki/Pi_(instrument)", "wiki/314_Action", "wiki/314_Rosalia", "wiki/Boeing_314_Clipper", "wiki/314", "wiki/314_BC", "wiki/Pi_Islands"],
    "338": ["338Canada"],
    "501": ["501(c)_organization", "501st_Legion"],
    "538": ["FiveThirtyEight"],
    "548": ["Sabena_Flight_548"],
    "631": ["Latécoère_631"],
    "642": ["China_Airlines_Flight_642"],
    "653": ["653d_Bombardment_Squadron"],
    "711": ["7-Eleven"],
    "747": ["747_Supertanker", "Boeing_Dreamlifter", "747_Wing_House"],
    "789": ["789_series", "Mathematical_joke"],
    "808": ["Roland_TR-808"],
    "897": ["897_Barcelona_raid"],
    "932": ["Code_page_932_(IBM)", "Code_page_932_(Microsoft_Windows)"],
    "996": ["996_working_hour_system"],
    "0999": ["0.999..."],
    "1001": ["One_Thousand_and_One_Nights", "1001_(number)"],
    "1058": ["Code_page_1058", "I._and_E._Greenwald_Steam_Engine_No._1058", "United_Nations_Security_Council_Resolution_1058", "1058_Grubba", "NGC_1058", "AH-1058"],
    "1414": ["Fourteen_14"],
    "1428": ["1428_Elm_Street"],
    "1492": ["1492_conclave"],
    "1618": ["Golden_ratio"],
    "1620": ["1620_Geographos"],
    "1770": ["Seventeen_Seventy,_Queensland"],
    "1777": ["1777_in_science"],
    "1889": ["Land_Rush_of_1889"],
    "1947": ["1947_Columbus_mid-air_collision"],
    "1984": ["Nineteen_Eighty-Four"],
    "2011": ["2011_Malawian_Air_Fouling_Legislation"],
    "2103": ["VAZ-2103"],
    "2564": ["25_or_6_to_4"],
    "2666": ["2666"],
    "2807": ["2807_Karl_Marx"],
    "2884": ["GWR_2884_Class"],
    "3122": ["3122_Florence"],
    "3141": ["3141_Buchar"],
    "3200": [
        "3200_Phaethon",
        "3200_meters",
    ],
    "3270": ["IBM_3270"],
    "3296": ["PenAir_Flight_3296"],
    "3511": ["3511"],
    "3844": ["Smith_%26_Wesson_.38/44"],
    "4104": ["4104"],
    "4179": ["4179_Toutatis"],
    "4183": ["4183_Cuno"],
    "4626": ["STANAG_4626", "No._4626_Squadron_RAuxAF"],
    "4953": ["(4953)_1990_MU"],
    "6001": ["American_Airlines_Flight_6001"],
    "6174": ["6174"],
    "6280": ["Nokia_6280_Series"],
    "7744": ["7744"],
    "7825": ["7825"],
    "8020": ["Pareto_principle"],
    "8128": ["8128"],
    "8192": ["8192"],
    "8460": ["Lufthansa_Cargo_Flight_8460"],
    "9749": ["Ro07-9749"],
    "9855": ["9855"],
    "10000": ["10,000_Maniacs"],
    "31415": ["3.1415_(album)"],
    "53319": ["(53319)_1999_JM8"],
    "64079": ["64,079"],
    "65537": ["65,537"],
    "99942": ["99942_Apophis"],
    "999999": ["Six_nines_in_pi"],
} as const;

const AREA_CODES = [
    "205", "251", "256", "334", "483", "659", "938", "907", "480", "520", "602", "623", "928", "327", "479", "501", "870", "209", "213", "279", "310", "323", "341", "350", "357", "369", "408", "415", "424", "442", "510", "530", "559", "562", "619", "626", "628", "650", "657", "661", "669", "707", "714", "738", "747", "760", "805", "818", "820", "831", "837", "840", "858", "909", "916", "925", "949", "951", "303", "719", "720", "748", "970", "983", "203", "475", "860", "959", "302", "202", "771", "239", "305", "321", "324", "352", "386", "407", "448", "561", "645", "656", "689", "727", "728", "754", "772", "786", "813", "850", "863", "904", "941", "954", "229", "404", "470", "478", "678", "706", "762", "770", "912", "943", "808", "208", "986", "217", "224", "309", "312", "331", "447", "464", "618", "630", "708", "730", "773", "779", "815", "847", "861", "872", "219", "260", "317", "463", "574", "765", "812", "930", "319", "515", "563", "641", "712", "316", "620", "785", "913", "270", "364", "502", "606", "859", "225", "318", "337", "457", "504", "985", "207", "227", "240", "301", "410", "443", "667", "339", "351", "413", "508", "617", "774", "781", "857", "978", "231", "248", "269", "313", "517", "586", "616", "679", "734", "810", "906", "947", "989", "218", "320", "507", "612", "651", "763", "924", "952", "228", "471", "601", "662", "769", "235", "314", "417", "557", "573", "636", "660", "816", "975", "406", "308", "402", "531", "702", "725", "775", "603", "201", "551", "609", "640", "732", "848", "856", "862", "908", "973", "505", "575", "212", "315", "329", "332", "347", "363", "516", "518", "585", "607", "624", "631", "646", "680", "716", "718", "838", "845", "914", "917", "929", "934", "252", "336", "472", "704", "743", "828", "910", "919", "980", "984", "701", "216", "220", "234", "283", "326", "330", "380", "419", "436", "440", "513", "567", "614", "740", "937", "405", "539", "572", "580", "918", "458", "503", "541", "971", "215", "223", "267", "272", "412", "445", "484", "570", "582", "610", "717", "724", "814", "835", "878", "401", "803", "821", "839", "843", "854", "864", "605", "423", "615", "629", "729", "731", "865", "901", "931", "210", "214", "254", "281", "325", "346", "361", "409", "430", "432", "469", "512", "621", "682", "713", "726", "737", "806", "817", "830", "832", "903", "915", "936", "940", "945", "956", "972", "979", "385", "435", "801", "802", "276", "434", "540", "571", "686", "703", "757", "804", "826", "948", "206", "253", "360", "425", "509", "564", "304", "681", "262", "274", "353", "414", "534", "608", "715", "920", "307"
] as const;

const NUMBER_PAGES = [
    "318", "323", "325", "341", "353", "359", "360", "363", "365", "369", "377", "384", "400", "420", "440", "495", "496", "500", "501", "511", "512", "555", "600", "610", "613", "616", "666", "693", "700", "720", "743", "744", "777", "786", "800", "801", "836", "840", "880", "881", "888", "900", "911", "971", "987", "999", "1000", "1001", "1023", "1024", "1089", "1093", "1105", "1234", "1289", "1458", "1510", "1728", "1729", "1967", "1980", "1987", "2000", "2016", "2520", "3000", "4000", "5000", "5040", "6000", "7000", "8000", "9000", "9999",
];

const MINOR_PLANETS: Record<string, string> = {
    "1": "1_Ceres", "2": "2_Pallas", "3": "3_Juno", "4": "4_Vesta", "5": "5_Astraea", "6": "6_Hebe", "7": "7_Iris", "8": "8_Flora", "9": "9_Metis", "10": "10_Hygiea", "11": "11_Parthenope", "12": "12_Victoria", "13": "13_Egeria", "14": "14_Irene", "15": "15_Eunomia", "16": "16_Psyche", "17": "17_Thetis", "18": "18_Melpomene", "19": "19_Fortuna", "20": "20_Massalia", "21": "21_Lutetia", "22": "22_Kalliope", "23": "23_Thalia", "24": "24_Themis", "25": "25_Phocaea", "26": "26_Proserpina", "27": "27_Euterpe", "28": "28_Bellona", "29": "29_Amphitrite", "30": "30_Urania", "31": "31_Euphrosyne", "32": "32_Pomona", "33": "33_Polyhymnia", "34": "34_Circe", "35": "35_Leukothea", "36": "36_Atalante", "37": "37_Fides", "38": "38_Leda", "39": "39_Laetitia", "40": "40_Harmonia", "41": "41_Daphne", "42": "42_Isis", "43": "43_Ariadne", "44": "44_Nysa", "45": "45_Eugenia", "46": "46_Hestia", "47": "47_Aglaja", "48": "48_Doris", "49": "49_Pales", "50": "50_Virginia", "51": "51_Nemausa", "52": "52_Europa", "53": "53_Kalypso", "54": "54_Alexandra", "55": "55_Pandora", "56": "56_Melete", "57": "57_Mnemosyne", "58": "58_Concordia", "59": "59_Elpis", "60": "60_Echo", "61": "61_Danaë", "62": "62_Erato", "63": "63_Ausonia", "64": "64_Angelina", "65": "65_Cybele", "66": "66_Maja", "67": "67_Asia", "68": "68_Leto", "69": "69_Hesperia", "70": "70_Panopaea", "71": "71_Niobe", "72": "72_Feronia", "73": "73_Klytia", "74": "74_Galatea", "75": "75_Eurydike", "76": "76_Freia", "77": "77_Frigga", "78": "78_Diana", "79": "79_Eurynome", "80": "80_Sappho", "81": "81_Terpsichore", "82": "82_Alkmene", "83": "83_Beatrix", "84": "84_Klio", "85": "85_Io", "86": "86_Semele", "87": "87_Sylvia", "88": "88_Thisbe", "89": "89_Julia", "90": "90_Antiope", "91": "91_Aegina", "92": "92_Undina", "93": "93_Minerva", "94": "94_Aurora", "95": "95_Arethusa", "96": "96_Aegle", "97": "97_Klotho", "98": "98_Ianthe", "99": "99_Dike", "100": "100_Hekate", "101": "101_Helena", "102": "102_Miriam", "103": "103_Hera", "104": "104_Klymene", "105": "105_Artemis", "106": "106_Dione", "107": "107_Camilla", "108": "108_Hecuba", "109": "109_Felicitas", "110": "110_Lydia", "111": "111_Ate", "112": "112_Iphigenia", "113": "113_Amalthea", "114": "114_Kassandra", "115": "115_Thyra", "116": "116_Sirona", "117": "117_Lomia", "118": "118_Peitho", "119": "119_Althaea", "120": "120_Lachesis", "121": "121_Hermione", "122": "122_Gerda", "123": "123_Brunhild", "124": "124_Alkeste", "125": "125_Liberatrix", "126": "126_Velleda", "127": "127_Johanna", "128": "128_Nemesis", "129": "129_Antigone", "130": "130_Elektra", "131": "131_Vala", "132": "132_Aethra", "133": "133_Cyrene", "134": "134_Sophrosyne", "135": "135_Hertha", "136": "136_Austria", "137": "137_Meliboea", "138": "138_Tolosa", "139": "139_Juewa", "140": "140_Siwa", "141": "141_Lumen", "142": "142_Polana", "143": "143_Adria", "144": "144_Vibilia", "145": "145_Adeona", "146": "146_Lucina", "147": "147_Protogeneia", "148": "148_Gallia", "149": "149_Medusa", "150": "150_Nuwa", "151": "151_Abundantia", "152": "152_Atala", "153": "153_Hilda", "154": "154_Bertha", "155": "155_Scylla", "156": "156_Xanthippe", "157": "157_Dejanira", "158": "158_Koronis", "159": "159_Aemilia", "160": "160_Una", "161": "161_Athor", "162": "162_Laurentia", "163": "163_Erigone", "164": "164_Eva", "165": "165_Loreley", "166": "166_Rhodope", "167": "167_Urda", "168": "168_Sibylla", "169": "169_Zelia", "170": "170_Maria", "171": "171_Ophelia", "172": "172_Baucis", "173": "173_Ino", "174": "174_Phaedra", "175": "175_Andromache", "176": "176_Iduna", "177": "177_Irma", "178": "178_Belisana", "179": "179_Klytaemnestra", "180": "180_Garumna", "181": "181_Eucharis", "182": "182_Elsa", "183": "183_Istria", "184": "184_Dejopeja", "185": "185_Eunike", "186": "186_Celuta", "187": "187_Lamberta", "188": "188_Menippe", "189": "189_Phthia", "190": "190_Ismene", "191": "191_Kolga", "192": "192_Nausikaa", "193": "193_Ambrosia", "194": "194_Prokne", "195": "195_Eurykleia", "196": "196_Philomela", "197": "197_Arete", "198": "198_Ampella", "199": "199_Byblis", "200": "200_Dynamene", "201": "201_Penelope", "202": "202_Chryseïs", "203": "203_Pompeja", "204": "204_Kallisto", "205": "205_Martha", "206": "206_Hersilia", "207": "207_Hedda", "208": "208_Lacrimosa", "209": "209_Dido", "210": "210_Isabella", "211": "211_Isolda", "212": "212_Medea", "213": "213_Lilaea", "214": "214_Aschera", "215": "215_Oenone", "216": "216_Kleopatra", "217": "217_Eudora", "218": "218_Bianca", "219": "219_Thusnelda", "220": "220_Stephania", "221": "221_Eos", "222": "222_Lucia", "223": "223_Rosa", "224": "224_Oceana", "225": "225_Henrietta", "226": "226_Weringia", "227": "227_Philosophia", "228": "228_Agathe", "229": "229_Adelinda", "230": "230_Athamantis", "231": "231_Vindobona", "232": "232_Russia", "233": "233_Asterope", "234": "234_Barbara", "235": "235_Carolina", "236": "236_Honoria", "237": "237_Coelestina", "238": "238_Hypatia", "239": "239_Adrastea", "240": "240_Vanadis", "241": "241_Germania", "242": "242_Kriemhild", "243": "243_Ida", "244": "244_Sita", "245": "245_Vera", "246": "246_Asporina", "247": "247_Eukrate", "248": "248_Lameia", "249": "249_Ilse", "250": "250_Bettina", "251": "251_Sophia", "252": "252_Clementina", "253": "253_Mathilde", "254": "254_Augusta", "255": "255_Oppavia", "256": "256_Walpurga", "257": "257_Silesia", "258": "258_Tyche", "259": "259_Aletheia", "260": "260_Huberta", "261": "261_Prymno", "262": "262_Valda", "263": "263_Dresda", "264": "264_Libussa", "265": "265_Anna", "266": "266_Aline", "267": "267_Tirza", "268": "268_Adorea", "269": "269_Justitia", "270": "270_Anahita", "271": "271_Penthesilea", "272": "272_Antonia", "273": "273_Atropos", "274": "274_Philagoria", "275": "275_Sapientia", "276": "276_Adelheid", "277": "277_Elvira", "278": "278_Paulina", "279": "279_Thule", "280": "280_Philia", "281": "281_Lucretia", "282": "282_Clorinde", "283": "283_Emma", "284": "284_Amalia", "285": "285_Regina", "286": "286_Iclea", "287": "287_Nephthys", "288": "288_Glauke", "289": "289_Nenetta", "290": "290_Bruna", "291": "291_Alice", "292": "292_Ludovica", "293": "293_Brasilia", "294": "294_Felicia", "295": "295_Theresia", "296": "296_Phaëtusa", "297": "297_Caecilia", "299": "299_Thora", "300": "300_Geraldina", "301": "301_Bavaria", "302": "302_Clarissa", "303": "303_Josephina", "304": "304_Olga", "305": "305_Gordonia", "306": "306_Unitas", "307": "307_Nike", "308": "308_Polyxo", "309": "309_Fraternitas", "310": "310_Margarita", "311": "311_Claudia", "312": "312_Pierretta", "313": "313_Chaldaea", "314": "314_Rosalia", "315": "315_Constantia", "316": "316_Goberta", "317": "317_Roxane", "318": "318_Magdalena", "319": "319_Leona", "320": "320_Katharina", "321": "321_Florentina", "322": "322_Phaeo", "323": "323_Brucia", "324": "324_Bamberga", "325": "325_Heidelberga", "326": "326_Tamara", "327": "327_Columbia", "328": "328_Gudrun", "329": "329_Svea", "330": "330_Adalberta", "331": "331_Etheridgea", "332": "332_Siri", "333": "333_Badenia", "334": "334_Chicago", "335": "335_Roberta", "336": "336_Lacadiera", "337": "337_Devosa", "338": "338_Budrosa", "339": "339_Dorothea", "340": "340_Eduarda", "341": "341_California", "342": "342_Endymion", "343": "343_Ostara", "344": "344_Desiderata", "345": "345_Tercidina", "346": "346_Hermentaria", "347": "347_Pariana", "348": "348_May", "349": "349_Dembowska", "350": "350_Ornamenta", "351": "351_Yrsa", "352": "352_Gisela", "353": "353_Ruperto-Carola", "354": "354_Eleonora", "355": "355_Gabriella", "356": "356_Liguria", "357": "357_Ninina", "358": "358_Apollonia", "359": "359_Georgia", "360": "360_Carlova", "361": "361_Bononia", "362": "362_Havnia", "363": "363_Padua", "364": "364_Isara", "365": "365_Corduba", "366": "366_Vincentina", "367": "367_Amicitia", "368": "368_Haidea", "369": "369_Aëria", "370": "370_Modestia", "371": "371_Bohemia", "372": "372_Palma", "373": "373_Melusina", "374": "374_Burgundia", "375": "375_Ursula", "376": "376_Geometria", "377": "377_Campania", "378": "378_Holmia", "379": "379_Huenna", "380": "380_Fiducia", "381": "381_Myrrha", "382": "382_Dodona", "383": "383_Janina", "384": "384_Burdigala", "385": "385_Ilmatar", "386": "386_Siegena", "387": "387_Aquitania", "388": "388_Charybdis", "389": "389_Industria", "390": "390_Alma", "391": "391_Ingeborg", "392": "392_Wilhelmina", "393": "393_Lampetia", "394": "394_Arduina", "395": "395_Delia", "396": "396_Aeolia", "397": "397_Vienna", "398": "398_Admete", "399": "399_Persephone", "400": "400_Ducrosa", "401": "401_Ottilia", "402": "402_Chloë", "403": "403_Cyane", "404": "404_Arsinoë", "405": "405_Thia", "406": "406_Erna", "407": "407_Arachne", "408": "408_Fama", "409": "409_Aspasia", "410": "410_Chloris", "411": "411_Xanthe", "412": "412_Elisabetha", "413": "413_Edburga", "414": "414_Liriope", "415": "415_Palatia", "416": "416_Vaticana", "417": "417_Suevia", "418": "418_Alemannia", "419": "419_Aurelia", "420": "420_Bertholda", "421": "421_Zähringia", "422": "422_Berolina", "423": "423_Diotima", "424": "424_Gratia", "425": "425_Cornelia", "426": "426_Hippo", "427": "427_Galene", "428": "428_Monachia", "429": "429_Lotis", "430": "430_Hybris", "431": "431_Nephele", "432": "432_Pythia", "433": "433_Eros", "434": "434_Hungaria", "435": "435_Ella", "436": "436_Patricia", "437": "437_Rhodia", "438": "438_Zeuxo", "439": "439_Ohio", "440": "440_Theodora", "441": "441_Bathilde", "442": "442_Eichsfeldia", "443": "443_Photographica", "444": "444_Gyptis", "445": "445_Edna", "446": "446_Aeternitas", "447": "447_Valentine", "448": "448_Natalie", "449": "449_Hamburga", "450": "450_Brigitta", "451": "451_Patientia", "452": "452_Hamiltonia", "453": "453_Tea", "454": "454_Mathesis", "455": "455_Bruchsalia", "456": "456_Abnoba", "457": "457_Alleghenia", "458": "458_Hercynia", "459": "459_Signe", "460": "460_Scania", "461": "461_Saskia", "462": "462_Eriphyla", "463": "463_Lola", "464": "464_Megaira", "465": "465_Alekto", "466": "466_Tisiphone", "467": "467_Laura", "468": "468_Lina", "469": "469_Argentina", "470": "470_Kilia", "471": "471_Papagena", "472": "472_Roma", "473": "473_Nolli", "474": "474_Prudentia", "475": "475_Ocllo", "476": "476_Hedwig", "477": "477_Italia", "478": "478_Tergeste", "479": "479_Caprera", "480": "480_Hansa", "481": "481_Emita", "482": "482_Petrina", "483": "483_Seppina", "484": "484_Pittsburghia", "485": "485_Genua", "486": "486_Cremona", "487": "487_Venetia", "488": "488_Kreusa", "489": "489_Comacina", "490": "490_Veritas", "491": "491_Carina", "492": "492_Gismonda", "493": "493_Griseldis", "494": "494_Virtus", "495": "495_Eulalia", "496": "496_Gryphia", "497": "497_Iva", "498": "498_Tokio", "499": "499_Venusia", "500": "500_Selinur", "501": "501_Urhixidur", "502": "502_Sigune", "503": "503_Evelyn", "504": "504_Cora", "505": "505_Cava", "506": "506_Marion", "507": "507_Laodica", "508": "508_Princetonia", "509": "509_Iolanda", "510": "510_Mabella", "511": "511_Davida", "512": "512_Taurinensis", "513": "513_Centesima", "514": "514_Armida", "515": "515_Athalia", "516": "516_Amherstia", "517": "517_Edith", "518": "518_Halawe", "519": "519_Sylvania", "520": "520_Franziska", "521": "521_Brixia", "522": "522_Helga", "523": "523_Ada", "524": "524_Fidelio", "525": "525_Adelaide", "526": "526_Jena", "527": "527_Euryanthe", "528": "528_Rezia", "529": "529_Preziosa", "530": "530_Turandot", "531": "531_Zerlina", "532": "532_Herculina", "533": "533_Sara", "534": "534_Nassovia", "535": "535_Montague", "536": "536_Merapi", "537": "537_Pauly", "538": "538_Friederike", "539": "539_Pamina", "540": "540_Rosamunde", "541": "541_Deborah", "542": "542_Susanna", "543": "543_Charlotte", "544": "544_Jetta", "545": "545_Messalina", "546": "546_Herodias", "547": "547_Praxedis", "548": "548_Kressida", "549": "549_Jessonda", "550": "550_Senta", "551": "551_Ortrud", "552": "552_Sigelinde", "553": "553_Kundry", "554": "554_Peraga", "555": "555_Norma", "556": "556_Phyllis", "557": "557_Violetta", "558": "558_Carmen", "559": "559_Nanon", "560": "560_Delila", "561": "561_Ingwelde", "562": "562_Salome", "563": "563_Suleika", "564": "564_Dudu", "565": "565_Marbachia", "566": "566_Stereoskopia", "567": "567_Eleutheria", "568": "568_Cheruskia", "569": "569_Misa", "570": "570_Kythera", "571": "571_Dulcinea", "572": "572_Rebekka", "573": "573_Recha", "574": "574_Reginhild", "575": "575_Renate", "576": "576_Emanuela", "577": "577_Rhea", "578": "578_Happelia", "579": "579_Sidonia", "580": "580_Selene", "581": "581_Tauntonia", "582": "582_Olympia", "583": "583_Klotilde", "584": "584_Semiramis", "585": "585_Bilkis", "586": "586_Thekla", "587": "587_Hypsipyle", "588": "588_Achilles", "589": "589_Croatia", "590": "590_Tomyris", "591": "591_Irmgard", "592": "592_Bathseba", "593": "593_Titania", "594": "594_Mireille", "595": "595_Polyxena", "596": "596_Scheila", "597": "597_Bandusia", "598": "598_Octavia", "599": "599_Luisa", "600": "600_Musa", "601": "601_Nerthus", "602": "602_Marianna", "603": "603_Timandra", "604": "604_Tekmessa", "605": "605_Juvisia", "606": "606_Brangäne", "607": "607_Jenny", "608": "608_Adolfine", "609": "609_Fulvia", "610": "610_Valeska", "611": "611_Valeria", "612": "612_Veronika", "613": "613_Ginevra", "614": "614_Pia", "615": "615_Roswitha", "616": "616_Elly", "617": "617_Patroclus", "618": "618_Elfriede", "619": "619_Triberga", "620": "620_Drakonia", "621": "621_Werdandi", "622": "622_Esther", "623": "623_Chimaera", "624": "624_Hektor", "625": "625_Xenia", "626": "626_Notburga", "627": "627_Charis", "628": "628_Christine", "629": "629_Bernardina", "630": "630_Euphemia", "631": "631_Philippina", "632": "632_Pyrrha", "633": "633_Zelima", "634": "634_Ute", "635": "635_Vundtia", "636": "636_Erika", "637": "637_Chrysothemis", "638": "638_Moira", "639": "639_Latona", "640": "640_Brambilla", "641": "641_Agnes", "642": "642_Clara", "643": "643_Scheherezade", "644": "644_Cosima", "645": "645_Agrippina", "646": "646_Kastalia", "647": "647_Adelgunde", "648": "648_Pippa", "649": "649_Josefa", "650": "650_Amalasuntha", "651": "651_Antikleia", "652": "652_Jubilatrix", "653": "653_Berenike", "654": "654_Zelinda", "655": "655_Briseïs", "656": "656_Beagle", "657": "657_Gunlöd", "658": "658_Asteria", "659": "659_Nestor", "660": "660_Crescentia", "661": "661_Cloelia", "662": "662_Newtonia", "663": "663_Gerlinde", "664": "664_Judith", "665": "665_Sabine", "666": "666_Desdemona", "667": "667_Denise", "668": "668_Dora", "669": "669_Kypria", "670": "670_Ottegebe", "671": "671_Carnegia", "672": "672_Astarte", "673": "673_Edda", "674": "674_Rachele", "675": "675_Ludmilla", "676": "676_Melitta", "677": "677_Aaltje", "678": "678_Fredegundis", "679": "679_Pax", "680": "680_Genoveva", "681": "681_Gorgo", "682": "682_Hagar", "683": "683_Lanzia", "684": "684_Hildburg", "685": "685_Hermia", "686": "686_Gersuind", "687": "687_Tinette", "688": "688_Melanie", "689": "689_Zita", "690": "690_Wratislavia", "691": "691_Lehigh", "692": "692_Hippodamia", "693": "693_Zerbinetta", "694": "694_Ekard", "695": "695_Bella", "696": "696_Leonora", "697": "697_Galilea", "698": "698_Ernestina", "699": "699_Hela", "700": "700_Auravictrix", "701": "701_Oriola", "702": "702_Alauda", "703": "703_Noëmi", "704": "704_Interamnia", "705": "705_Erminia", "706": "706_Hirundo", "707": "707_Steina", "708": "708_Raphaela", "709": "709_Fringilla", "710": "710_Gertrud", "711": "711_Marmulla", "712": "712_Boliviana", "713": "713_Luscinia", "714": "714_Ulula", "715": "715_Transvaalia", "716": "716_Berkeley", "717": "717_Wisibada", "718": "718_Erida", "719": "719_Albert", "720": "720_Bohlinia", "721": "721_Tabora", "722": "722_Frieda", "723": "723_Hammonia", "724": "724_Hapag", "725": "725_Amanda", "726": "726_Joëlla", "727": "727_Nipponia", "728": "728_Leonisis", "729": "729_Watsonia", "730": "730_Athanasia", "731": "731_Sorga", "732": "732_Tjilaki", "733": "733_Mocia", "734": "734_Benda", "735": "735_Marghanna", "736": "736_Harvard", "737": "737_Arequipa", "738": "738_Alagasta", "739": "739_Mandeville", "740": "740_Cantabia", "741": "741_Botolphia", "742": "742_Edisona", "743": "743_Eugenisis", "744": "744_Aguntina", "745": "745_Mauritia", "746": "746_Marlu", "747": "747_Winchester", "748": "748_Simeïsa", "749": "749_Malzovia", "750": "750_Oskar", "751": "751_Faïna", "752": "752_Sulamitis", "753": "753_Tiflis", "754": "754_Malabar", "755": "755_Quintilla", "756": "756_Lilliana", "757": "757_Portlandia", "758": "758_Mancunia", "759": "759_Vinifera", "760": "760_Massinga", "761": "761_Brendelia", "762": "762_Pulcova", "763": "763_Cupido", "764": "764_Gedania", "765": "765_Mattiaca", "766": "766_Moguntia", "767": "767_Bondia", "768": "768_Struveana", "769": "769_Tatjana", "770": "770_Bali", "771": "771_Libera", "772": "772_Tanete", "773": "773_Irmintraud", "774": "774_Armor", "775": "775_Lumière", "776": "776_Berbericia", "777": "777_Gutemberga", "778": "778_Theobalda", "779": "779_Nina", "780": "780_Armenia", "781": "781_Kartvelia", "782": "782_Montefiore", "783": "783_Nora", "784": "784_Pickeringia", "785": "785_Zwetana", "786": "786_Bredichina", "787": "787_Moskva", "788": "788_Hohensteina", "789": "789_Lena", "790": "790_Pretoria", "791": "791_Ani", "792": "792_Metcalfia", "793": "793_Arizona", "794": "794_Irenaea", "795": "795_Fini", "796": "796_Sarita", "797": "797_Montana", "798": "798_Ruth", "799": "799_Gudula", "800": "800_Kressmannia", "801": "801_Helwerthia", "802": "802_Epyaxa", "803": "803_Picka", "804": "804_Hispania", "805": "805_Hormuthia", "806": "806_Gyldénia", "807": "807_Ceraskia", "808": "808_Merxia", "809": "809_Lundia", "810": "810_Atossa", "811": "811_Nauheima", "812": "812_Adele", "813": "813_Baumeia", "814": "814_Tauris", "815": "815_Coppelia", "816": "816_Juliana", "817": "817_Annika", "818": "818_Kapteynia", "819": "819_Barnardiana", "820": "820_Adriana", "821": "821_Fanny", "822": "822_Lalage", "823": "823_Sisigambis", "824": "824_Anastasia", "825": "825_Tanina", "826": "826_Henrika", "827": "827_Wolfiana", "828": "828_Lindemannia", "829": "829_Academia", "830": "830_Petropolitana", "831": "831_Stateira", "832": "832_Karin", "833": "833_Monica", "834": "834_Burnhamia", "835": "835_Olivia", "836": "836_Jole", "837": "837_Schwarzschilda", "838": "838_Seraphina", "839": "839_Valborg", "840": "840_Zenobia", "841": "841_Arabella", "842": "842_Kerstin", "843": "843_Nicolaia", "844": "844_Leontina", "845": "845_Naëma", "846": "846_Lipperta", "847": "847_Agnia", "848": "848_Inna", "849": "849_Ara", "850": "850_Altona", "851": "851_Zeissia", "852": "852_Wladilena", "853": "853_Nansenia", "854": "854_Frostia", "855": "855_Newcombia", "856": "856_Backlunda", "857": "857_Glasenappia", "858": "858_El_Djezaïr", "859": "859_Bouzaréah", "860": "860_Ursina", "861": "861_Aïda", "862": "862_Franzia", "863": "863_Benkoela", "864": "864_Aase", "865": "865_Zubaida", "866": "866_Fatme", "867": "867_Kovacia", "868": "868_Lova", "869": "869_Mellena", "870": "870_Manto", "871": "871_Amneris", "872": "872_Holda", "873": "873_Mechthild", "874": "874_Rotraut", "875": "875_Nymphe", "876": "876_Scott", "877": "877_Walküre", "878": "878_Mildred", "879": "879_Ricarda", "880": "880_Herba", "881": "881_Athene", "882": "882_Swetlana", "883": "883_Matterania", "884": "884_Priamus", "885": "885_Ulrike", "886": "886_Washingtonia", "887": "887_Alinda", "888": "888_Parysatis", "889": "889_Erynia", "890": "890_Waltraut", "891": "891_Gunhild", "892": "892_Seeligeria", "893": "893_Leopoldina", "894": "894_Erda", "895": "895_Helio", "896": "896_Sphinx", "897": "897_Lysistrata", "898": "898_Hildegard", "899": "899_Jokaste", "900": "900_Rosalinde", "901": "901_Brunsia", "902": "902_Probitas", "903": "903_Nealley", "904": "904_Rockefellia", "905": "905_Universitas", "906": "906_Repsolda", "907": "907_Rhoda", "908": "908_Buda", "909": "909_Ulla", "910": "910_Anneliese", "911": "911_Agamemnon", "912": "912_Maritima", "913": "913_Otila", "914": "914_Palisana", "915": "915_Cosette", "916": "916_America", "917": "917_Lyka", "918": "918_Itha", "919": "919_Ilsebill", "920": "920_Rogeria", "921": "921_Jovita", "922": "922_Schlutia", "923": "923_Herluga", "924": "924_Toni", "925": "925_Alphonsina", "926": "926_Imhilde", "927": "927_Ratisbona", "928": "928_Hildrun", "929": "929_Algunde", "930": "930_Westphalia", "931": "931_Whittemora", "932": "932_Hooveria", "933": "933_Susi", "934": "934_Thüringia", "935": "935_Clivia", "936": "936_Kunigunde", "937": "937_Bethgea", "938": "938_Chlosinde", "939": "939_Isberga", "940": "940_Kordula", "941": "941_Murray", "942": "942_Romilda", "943": "943_Begonia", "944": "944_Hidalgo", "945": "945_Barcelona", "946": "946_Poësia", "947": "947_Monterosa", "948": "948_Jucunda", "949": "949_Hel", "950": "950_Ahrensa", "951": "951_Gaspra", "952": "952_Caia", "953": "953_Painleva", "954": "954_Li", "955": "955_Alstede", "956": "956_Elisa", "957": "957_Camelia", "958": "958_Asplinda", "959": "959_Arne", "960": "960_Birgit", "961": "961_Gunnie", "962": "962_Aslög", "963": "963_Iduberga", "964": "964_Subamara", "965": "965_Angelica", "966": "966_Muschi", "967": "967_Helionape", "968": "968_Petunia", "969": "969_Leocadia", "970": "970_Primula", "971": "971_Alsatia", "972": "972_Cohnia", "973": "973_Aralia", "974": "974_Lioba", "975": "975_Perseverantia", "976": "976_Benjamina", "977": "977_Philippa", "978": "978_Aidamina", "979": "979_Ilsewa", "980": "980_Anacostia", "981": "981_Martina", "982": "982_Franklina", "983": "983_Gunila", "984": "984_Gretia", "985": "985_Rosina", "986": "986_Amelia", "987": "987_Wallia", "988": "988_Appella", "989": "989_Schwassmannia", "990": "990_Yerkes", "991": "991_McDonalda", "992": "992_Swasey", "993": "993_Moultona", "994": "994_Otthild", "995": "995_Sternberga", "996": "996_Hilaritas", "997": "997_Priska", "998": "998_Bodea", "999": "999_Zachia", "1000": "1000_Piazzia", "1001": "1001_Gaussia", "1002": "1002_Olbersia", "1003": "1003_Lilofee", "1004": "1004_Belopolskya", "1005": "1005_Arago", "1006": "1006_Lagrangea", "1007": "1007_Pawlowia", "1008": "1008_La_Paz", "1009": "1009_Sirene", "1010": "1010_Marlene", "1011": "1011_Laodamia", "1012": "1012_Sarema", "1013": "1013_Tombecka", "1014": "1014_Semphyra", "1015": "1015_Christa", "1016": "1016_Anitra", "1017": "1017_Jacqueline", "1018": "1018_Arnolda", "1019": "1019_Strackea", "1020": "1020_Arcadia", "1021": "1021_Flammario", "1022": "1022_Olympiada", "1023": "1023_Thomana", "1024": "1024_Hale", "1025": "1025_Riema", "1026": "1026_Ingrid", "1027": "1027_Aesculapia", "1028": "1028_Lydina", "1029": "1029_La_Plata", "1030": "1030_Vitja", "1031": "1031_Arctica", "1032": "1032_Pafuri", "1033": "1033_Simona", "1034": "1034_Mozartia", "1035": "1035_Amata", "1036": "1036_Ganymed", "1037": "1037_Davidweilla", "1038": "1038_Tuckia", "1039": "1039_Sonneberga", "1040": "1040_Klumpkea", "1041": "1041_Asta", "1042": "1042_Amazone", "1043": "1043_Beate", "1044": "1044_Teutonia", "1045": "1045_Michela", "1046": "1046_Edwin", "1047": "1047_Geisha", "1048": "1048_Feodosia", "1049": "1049_Gotho", "1050": "1050_Meta", "1051": "1051_Merope", "1052": "1052_Belgica", "1053": "1053_Vigdis", "1054": "1054_Forsytia", "1055": "1055_Tynka", "1056": "1056_Azalea", "1057": "1057_Wanda", "1058": "1058_Grubba", "1059": "1059_Mussorgskia", "1060": "1060_Magnolia", "1061": "1061_Paeonia", "1062": "1062_Ljuba", "1063": "1063_Aquilegia", "1064": "1064_Aethusa", "1065": "1065_Amundsenia", "1066": "1066_Lobelia", "1067": "1067_Lunaria", "1068": "1068_Nofretete", "1069": "1069_Planckia", "1070": "1070_Tunica", "1071": "1071_Brita", "1072": "1072_Malva", "1073": "1073_Gellivara", "1074": "1074_Beljawskya", "1075": "1075_Helina", "1076": "1076_Viola", "1077": "1077_Campanula", "1078": "1078_Mentha", "1079": "1079_Mimosa", "1080": "1080_Orchis", "1081": "1081_Reseda", "1082": "1082_Pirola", "1083": "1083_Salvia", "1084": "1084_Tamariwa", "1085": "1085_Amaryllis", "1086": "1086_Nata", "1087": "1087_Arabis", "1088": "1088_Mitaka", "1089": "1089_Tama", "1091": "1091_Spiraea", "1092": "1092_Lilium", "1093": "1093_Freda", "1094": "1094_Siberia", "1095": "1095_Tulipa", "1096": "1096_Reunerta", "1097": "1097_Vicia", "1098": "1098_Hakone", "1099": "1099_Figneria", "1100": "1100_Arnica", "1101": "1101_Clematis", "1102": "1102_Pepita", "1103": "1103_Sequoia", "1104": "1104_Syringa", "1105": "1105_Fragaria", "1106": "1106_Cydonia", "1107": "1107_Lictoria", "1108": "1108_Demeter", "1109": "1109_Tata", "1110": "1110_Jaroslawa", "1111": "1111_Reinmuthia", "1112": "1112_Polonia", "1113": "1113_Katja", "1114": "1114_Lorraine", "1115": "1115_Sabauda", "1116": "1116_Catriona", "1117": "1117_Reginita", "1118": "1118_Hanskya", "1119": "1119_Euboea", "1120": "1120_Cannonia", "1121": "1121_Natascha", "1122": "1122_Neith", "1123": "1123_Shapleya", "1124": "1124_Stroobantia", "1125": "1125_China", "1126": "1126_Otero", "1127": "1127_Mimi", "1128": "1128_Astrid", "1129": "1129_Neujmina", "1130": "1130_Skuld", "1131": "1131_Porzia", "1132": "1132_Hollandia", "1133": "1133_Lugduna", "1134": "1134_Kepler", "1135": "1135_Colchis", "1136": "1136_Mercedes", "1137": "1137_Raïssa", "1138": "1138_Attica", "1139": "1139_Atami", "1140": "1140_Crimea", "1141": "1141_Bohmia", "1142": "1142_Aetolia", "1143": "1143_Odysseus", "1144": "1144_Oda", "1145": "1145_Robelmonte", "1146": "1146_Biarmia", "1147": "1147_Stavropolis", "1148": "1148_Rarahu", "1149": "1149_Volga", "1150": "1150_Achaia", "1151": "1151_Ithaka", "1152": "1152_Pawona", "1153": "1153_Wallenbergia", "1154": "1154_Astronomia", "1155": "1155_Aënna", "1156": "1156_Kira", "1157": "1157_Arabia", "1158": "1158_Luda", "1159": "1159_Granada", "1160": "1160_Illyria", "1161": "1161_Thessalia", "1162": "1162_Larissa", "1163": "1163_Saga", "1164": "1164_Kobolda", "1165": "1165_Imprinetta", "1166": "1166_Sakuntala", "1167": "1167_Dubiago", "1168": "1168_Brandia", "1169": "1169_Alwine", "1170": "1170_Siva", "1171": "1171_Rusthawelia", "1172": "1172_Äneas", "1173": "1173_Anchises", "1174": "1174_Marmara", "1175": "1175_Margo", "1176": "1176_Lucidor", "1177": "1177_Gonnessia", "1178": "1178_Irmela", "1179": "1179_Mally", "1180": "1180_Rita", "1181": "1181_Lilith", "1182": "1182_Ilona", "1183": "1183_Jutta", "1184": "1184_Gaea", "1185": "1185_Nikko", "1186": "1186_Turnera", "1187": "1187_Afra", "1188": "1188_Gothlandia", "1189": "1189_Terentia", "1190": "1190_Pelagia", "1191": "1191_Alfaterna", "1192": "1192_Prisma", "1193": "1193_Africa", "1194": "1194_Aletta", "1195": "1195_Orangia", "1196": "1196_Sheba", "1197": "1197_Rhodesia", "1198": "1198_Atlantis", "1199": "1199_Geldonia", "1200": "1200_Imperatrix", "1202": "1202_Marina", "1203": "1203_Nanna", "1204": "1204_Renzia", "1205": "1205_Ebella", "1206": "1206_Numerowia", "1207": "1207_Ostenia", "1208": "1208_Troilus", "1209": "1209_Pumma", "1212": "1212_Francette", "1213": "1213_Algeria", "1214": "1214_Richilde", "1215": "1215_Boyer", "1216": "1216_Askania", "1217": "1217_Maximiliana", "1218": "1218_Aster", "1219": "1219_Britta", "1220": "1220_Crocus", "1221": "1221_Amor", "1222": "1222_Tina", "1223": "1223_Neckar", "1225": "1225_Ariane", "1226": "1226_Golia", "1227": "1227_Geranium", "1229": "1229_Tilia", "1230": "1230_Riceia", "1231": "1231_Auricula", "1232": "1232_Cortusa", "1233": "1233_Kobresia", "1234": "1234_Elyna", "1235": "1235_Schorria", "1236": "1236_Thaïs", "1237": "1237_Geneviève", "1238": "1238_Predappia", "1239": "1239_Queteleta", "1240": "1240_Centenaria", "1241": "1241_Dysona", "1242": "1242_Zambesia", "1243": "1243_Pamela", "1244": "1244_Deira", "1245": "1245_Calvinia", "1246": "1246_Chaka", "1247": "1247_Memoria", "1248": "1248_Jugurtha", "1249": "1249_Rutherfordia", "1250": "1250_Galanthus", "1251": "1251_Hedera", "1252": "1252_Celestia", "1253": "1253_Frisia", "1255": "1255_Schilowa", "1256": "1256_Normannia", "1257": "1257_Móra", "1258": "1258_Sicilia", "1259": "1259_Ógyalla", "1261": "1261_Legia", "1262": "1262_Sniadeckia", "1263": "1263_Varsavia", "1264": "1264_Letaba", "1266": "1266_Tone", "1267": "1267_Geertruida", "1268": "1268_Libya", "1269": "1269_Rollandia", "1270": "1270_Datura", "1271": "1271_Isergina", "1272": "1272_Gefion", "1274": "1274_Delportia", "1275": "1275_Cimbria", "1276": "1276_Ucclia", "1277": "1277_Dolores", "1280": "1280_Baillauda", "1281": "1281_Jeanne", "1282": "1282_Utopia", "1283": "1283_Komsomolia", "1284": "1284_Latvia", "1286": "1286_Banachiewicza", "1287": "1287_Lorcia", "1289": "1289_Kutaïssi", "1291": "1291_Phryne", "1293": "1293_Sonja", "1294": "1294_Antwerpia", "1295": "1295_Deflotte", "1296": "1296_Andrée", "1297": "1297_Quadea", "1298": "1298_Nocturna", "1299": "1299_Mertona", "1300": "1300_Marcelle", "1301": "1301_Yvonne", "1302": "1302_Werra", "1303": "1303_Luthera", "1304": "1304_Arosa", "1305": "1305_Pongola", "1306": "1306_Scythia", "1307": "1307_Cimmeria", "1308": "1308_Halleria", "1309": "1309_Hyperborea", "1310": "1310_Villigera", "1312": "1312_Vassar", "1313": "1313_Berna", "1316": "1316_Kasan", "1318": "1318_Nerina", "1319": "1319_Disa", "1322": "1322_Coppernicus", "1323": "1323_Tugela", "1325": "1325_Inanda", "1328": "1328_Devota", "1329": "1329_Eliane", "1330": "1330_Spiridonia", "1332": "1332_Marconia", "1333": "1333_Cevenola", "1334": "1334_Lundmarka", "1335": "1335_Demoulina", "1336": "1336_Zeelandia", "1337": "1337_Gerarda", "1338": "1338_Duponta", "1339": "1339_Désagneauxa", "1340": "1340_Yvette", "1341": "1341_Edmée", "1345": "1345_Potomac", "1346": "1346_Gotha", "1347": "1347_Patria", "1349": "1349_Bechuana", "1350": "1350_Rosselia", "1353": "1353_Maartje", "1354": "1354_Botha", "1355": "1355_Magoeba", "1356": "1356_Nyanza", "1359": "1359_Prieska", "1361": "1361_Leuschneria", "1362": "1362_Griqua", "1364": "1364_Safara", "1365": "1365_Henyey", "1366": "1366_Piccolo", "1368": "1368_Numidia", "1369": "1369_Ostanina", "1370": "1370_Hella", "1372": "1372_Haremari", "1373": "1373_Cincinnati", "1374": "1374_Isora", "1376": "1376_Michelle", "1378": "1378_Leonce", "1379": "1379_Lomonosowa", "1380": "1380_Volodia", "1382": "1382_Gerti", "1383": "1383_Limburgia", "1384": "1384_Kniertje", "1388": "1388_Aphrodite", "1389": "1389_Onnie", "1390": "1390_Abastumani", "1391": "1391_Carelia", "1392": "1392_Pierre", "1393": "1393_Sofala", "1394": "1394_Algoa", "1397": "1397_Umtata", "1400": "1400_Tirela", "1404": "1404_Ajax", "1405": "1405_Sibelius", "1407": "1407_Lindelöf", "1409": "1409_Isko", "1410": "1410_Margret", "1411": "1411_Brauna", "1412": "1412_Lagrula", "1414": "1414_Jérôme", "1416": "1416_Renauxa", "1419": "1419_Danzig", "1421": "1421_Esperanto", "1422": "1422_Strömgrenia", "1423": "1423_Jose", "1424": "1424_Sundmania", "1425": "1425_Tuorla", "1426": "1426_Riviera", "1428": "1428_Mombasa", "1429": "1429_Pemba", "1430": "1430_Somalia", "1431": "1431_Luanda", "1433": "1433_Geramtina", "1434": "1434_Margot", "1436": "1436_Salonta", "1437": "1437_Diomedes", "1439": "1439_Vogtia", "1441": "1441_Bolyai", "1443": "1443_Ruppina", "1444": "1444_Pannonia", "1446": "1446_Sillanpää", "1447": "1447_Utra", "1449": "1449_Virtanen", "1450": "1450_Raimonda", "1451": "1451_Granö", "1452": "1452_Hunnia", "1453": "1453_Fennia", "1455": "1455_Mitchella", "1457": "1457_Ankara", "1459": "1459_Magnya", "1460": "1460_Haltia", "1461": "1461_Jean-Jacques", "1462": "1462_Zamenhof", "1466": "1466_Mündleria", "1467": "1467_Mashona", "1468": "1468_Zomba", "1469": "1469_Linzia", "1470": "1470_Carla", "1473": "1473_Ounas", "1474": "1474_Beira", "1477": "1477_Bonsdorffia", "1478": "1478_Vihuri", "1479": "1479_Inkeri", "1481": "1481_Tübingia", "1484": "1484_Postrema", "1486": "1486_Marilyn", "1490": "1490_Limpopo", "1493": "1493_Sigrid", "1494": "1494_Savo", "1496": "1496_Turku", "1499": "1499_Pori", "1500": "1500_Jyväskylä", "1503": "1503_Kuopio", "1504": "1504_Lappeenranta", "1505": "1505_Koranna", "1506": "1506_Xosa", "1508": "1508_Kemi", "1509": "1509_Esclangona", "1510": "1510_Charlois", "1511": "1511_Daléra", "1512": "1512_Oulu", "1513": "1513_Mátra", "1514": "1514_Ricouxa", "1516": "1516_Henry", "1517": "1517_Beograd", "1518": "1518_Rovaniemi", "1520": "1520_Imatra", "1521": "1521_Seinäjoki", "1522": "1522_Kokkola", "1523": "1523_Pieksämäki", "1524": "1524_Joensuu", "1525": "1525_Savonlinna", "1527": "1527_Malmquista", "1529": "1529_Oterma", "1530": "1530_Rantaseppä", "1532": "1532_Inari", "1533": "1533_Saimaa", "1534": "1534_Näsi", "1535": "1535_Päijänne", "1536": "1536_Pielinen", "1537": "1537_Transylvania", "1540": "1540_Kevola", "1541": "1541_Estonia", "1542": "1542_Schalén", "1543": "1543_Bourgeois", "1544": "1544_Vinterhansenia", "1545": "1545_Thernöe", "1546": "1546_Izsák", "1550": "1550_Tito", "1551": "1551_Argelander", "1552": "1552_Bessel", "1553": "1553_Bauersfelda", "1554": "1554_Yugoslavia", "1555": "1555_Dejan", "1556": "1556_Wingolfia", "1558": "1558_Järnefelt", "1559": "1559_Kustaanheimo", "1563": "1563_Noël", "1564": "1564_Srbija", "1565": "1565_Lemaître", "1566": "1566_Icarus", "1567": "1567_Alikoski", "1568": "1568_Aisleen", "1569": "1569_Evita", "1570": "1570_Brunonia", "1573": "1573_Väisälä", "1574": "1574_Meyer", "1575": "1575_Winifred", "1576": "1576_Fabiola", "1578": "1578_Kirkwood", "1580": "1580_Betulia", "1581": "1581_Abanderada", "1582": "1582_Martir", "1583": "1583_Antilochus", "1585": "1585_Union", "1588": "1588_Descamisada", "1589": "1589_Fanatica", "1590": "1590_Tsiolkovskaja", "1597": "1597_Laugier", "1600": "1600_Vyssotsky", "1602": "1602_Indiana", "1604": "1604_Tombaugh", "1605": "1605_Milankovitch", "1607": "1607_Mavis", "1608": "1608_Muñoz", "1609": "1609_Brenda", "1611": "1611_Beyer", "1615": "1615_Bardwell", "1617": "1617_Alschmitt", "1619": "1619_Ueta", "1620": "1620_Geographos", "1621": "1621_Druzhba", "1622": "1622_Chacornac", "1623": "1623_Vivian", "1625": "1625_The_NORC", "1626": "1626_Sadeya", "1627": "1627_Ivar", "1628": "1628_Strobel", "1631": "1631_Kopff", "1632": "1632_Sieböhme", "1633": "1633_Chimay", "1635": "1635_Bohrmann", "1637": "1637_Swings", "1644": "1644_Rafita", "1646": "1646_Rosseland", "1647": "1647_Menelaus", "1648": "1648_Shajna", "1650": "1650_Heckmann", "1651": "1651_Behrens", "1652": "1652_Hergé", "1655": "1655_Comas_Solà", "1656": "1656_Suomi", "1657": "1657_Roemera", "1658": "1658_Innes", "1659": "1659_Punkaharju", "1660": "1660_Wood", "1661": "1661_Granule", "1663": "1663_van_den_Bos", "1665": "1665_Gaby", "1669": "1669_Dagmar", "1671": "1671_Chaika", "1672": "1672_Gezelle", "1675": "1675_Simonida", "1677": "1677_Tycho_Brahe", "1680": "1680_Per_Brahe", "1681": "1681_Steinmetz", "1682": "1682_Karel", "1683": "1683_Castafiore", "1684": "1684_Iguassú", "1685": "1685_Toro", "1687": "1687_Glarona", "1688": "1688_Wilkens", "1689": "1689_Floris-Jan", "1690": "1690_Mayrhofer", "1691": "1691_Oort", "1692": "1692_Subbotina", "1693": "1693_Hertzsprung", "1694": "1694_Kaiser", "1695": "1695_Walbeck", "1696": "1696_Nurmela", "1700": "1700_Zvezdara", "1703": "1703_Barry", "1704": "1704_Wachmann", "1707": "1707_Chantal", "1708": "1708_Pólit", "1709": "1709_Ukraina", "1710": "1710_Gothard", "1711": "1711_Sandrine", "1712": "1712_Angola", "1713": "1713_Bancilhon", "1714": "1714_Sy", "1717": "1717_Arlon", "1719": "1719_Jens", "1720": "1720_Niels", "1721": "1721_Wells", "1722": "1722_Goffin", "1724": "1724_Vladimir", "1726": "1726_Hoffmeister", "1727": "1727_Mette", "1728": "1728_Goethe_Link", "1729": "1729_Beryl", "1731": "1731_Smuts", "1732": "1732_Heike", "1734": "1734_Zhongolovich", "1735": "1735_ITA", "1736": "1736_Floirac", "1737": "1737_Severny", "1739": "1739_Meyermann", "1740": "1740_Paavo_Nurmi", "1741": "1741_Giclas", "1743": "1743_Schmidt", "1746": "1746_Brouwer", "1747": "1747_Wright", "1748": "1748_Mauderli", "1749": "1749_Telamon", "1750": "1750_Eckert", "1751": "1751_Herget", "1753": "1753_Mieke", "1754": "1754_Cunningham", "1755": "1755_Lorbach", "1757": "1757_Porvoo", "1759": "1759_Kienle", "1760": "1760_Sandra", "1761": "1761_Edmondson", "1762": "1762_Russell", "1763": "1763_Williams", "1764": "1764_Cogshall", "1765": "1765_Wrubel", "1766": "1766_Slipher", "1767": "1767_Lampland", "1768": "1768_Appenzella", "1771": "1771_Makover", "1772": "1772_Gagarin", "1775": "1775_Zimmerwald", "1776": "1776_Kuiper", "1777": "1777_Gehrels", "1778": "1778_Alfvén", "1779": "1779_Paraná", "1780": "1780_Kippes", "1781": "1781_Van_Biesbroeck", "1783": "1783_Albitskij", "1784": "1784_Benguella", "1788": "1788_Kiess", "1789": "1789_Dobrovolsky", "1790": "1790_Volkov", "1791": "1791_Patsayev", "1793": "1793_Zoya", "1796": "1796_Riga", "1798": "1798_Watts", "1799": "1799_Koussevitzky", "1800": "1800_Aguilar", "1801": "1801_Titicaca", "1803": "1803_Zwicky", "1804": "1804_Chebotarev", "1805": "1805_Dirikis", "1806": "1806_Derice", "1807": "1807_Slovakia", "1809": "1809_Prometheus", "1810": "1810_Epimetheus", "1815": "1815_Beethoven", "1817": "1817_Katanga", "1818": "1818_Brahms", "1822": "1822_Waterman", "1823": "1823_Gliese", "1824": "1824_Haworth", "1825": "1825_Klare", "1826": "1826_Miller", "1827": "1827_Atkinson", "1830": "1830_Pogson", "1831": "1831_Nicholson", "1832": "1832_Mrkos", "1834": "1834_Palach", "1835": "1835_Gajdariya", "1836": "1836_Komarov", "1837": "1837_Osita", "1840": "1840_Hus", "1841": "1841_Masaryk", "1842": "1842_Hynek", "1844": "1844_Susilva", "1845": "1845_Helewalda", "1846": "1846_Bengt", "1847": "1847_Stobbe", "1848": "1848_Delvaux", "1849": "1849_Kresák", "1850": "1850_Kohoutek", "1851": "1851_Lacroute", "1852": "1852_Carpenter", "1853": "1853_McElroy", "1854": "1854_Skvortsov", "1855": "1855_Korolev", "1856": "1856_Růžena", "1857": "1857_Parchomenko", "1858": "1858_Lobachevskij", "1859": "1859_Kovalevskaya", "1861": "1861_Komenský", "1862": "1862_Apollo", "1863": "1863_Antinous", "1864": "1864_Daedalus", "1865": "1865_Cerberus", "1866": "1866_Sisyphus", "1867": "1867_Deiphobus", "1868": "1868_Thersites", "1869": "1869_Philoctetes", "1870": "1870_Glaukos", "1873": "1873_Agenor", "1877": "1877_Marsden", "1879": "1879_Broederstroom", "1881": "1881_Shao", "1887": "1887_Virton", "1889": "1889_Pakhmutova", "1897": "1897_Hind", "1900": "1900_Katyusha", "1902": "1902_Shaposhnikov", "1904": "1904_Massevitch", "1905": "1905_Ambartsumian", "1906": "1906_Naef", "1907": "1907_Rudneva", "1909": "1909_Alekhin", "1910": "1910_Mikhailov", "1911": "1911_Schubart", "1912": "1912_Anubis", "1915": "1915_Quetzálcoatl", "1916": "1916_Boreas", "1917": "1917_Cuyo", "1918": "1918_Aiguillon", "1919": "1919_Clemence", "1921": "1921_Pala", "1922": "1922_Zulu", "1923": "1923_Osiris", "1924": "1924_Horus", "1925": "1925_Franklin-Adams", "1927": "1927_Suvanto", "1928": "1928_Summa", "1929": "1929_Kollaa", "1930": "1930_Lucifer", "1931": "1931_Čapek", "1933": "1933_Tinchen", "1936": "1936_Lugano", "1938": "1938_Lausanna", "1939": "1939_Loretta", "1940": "1940_Whipple", "1941": "1941_Wild", "1943": "1943_Anteros", "1944": "1944_Günter", "1946": "1946_Walraven", "1947": "1947_Iso-Heikkilä", "1951": "1951_Lick", "1952": "1952_Hesburgh", "1953": "1953_Rupertwildt", "1954": "1954_Kukarkin", "1955": "1955_McMath", "1956": "1956_Artek", "1957": "1957_Angara", "1958": "1958_Chandra", "1960": "1960_Guisan", "1961": "1961_Dufour", "1965": "1965_van_de_Kamp", "1967": "1967_Menzel", "1971": "1971_Hagihara", "1977": "1977_Shura", "1979": "1979_Sakharov", "1980": "1980_Tezcatlipoca", "1981": "1981_Midas", "1982": "1982_Cline", "1983": "1983_Bok", "1985": "1985_Hopmann", "1987": "1987_Kaplan", "1988": "1988_Delores", "1989": "1989_Tatry", "1990": "1990_Pilcher", "1991": "1991_Darwin", "1992": "1992_Galvarino", "1994": "1994_Shane", "1995": "1995_Hajek", "1996": "1996_Adams", "1997": "1997_Leverrier", "1998": "1998_Titius", "1999": "1999_Hirayama", "2000": "2000_Herschel", "2001": "2001_Einstein", "2002": "2002_Euler", "2003": "2003_Harding", "2004": "2004_Lexell", "2005": "2005_Hencke", "2006": "2006_Polonskaya", "2007": "2007_McCuskey", "2008": "2008_Konstitutsiya", "2009": "2009_Voloshina", "2010": "2010_Chebyshev", "2011": "2011_Veteraniya", "2012": "2012_Guo_Shou-Jing", "2013": "2013_Tucapel", "2014": "2014_Vasilevskis", "2016": "2016_Heinemann", "2017": "2017_Wesson", "2019": "2019_van_Albada", "2022": "2022_West", "2023": "2023_Asaph", "2024": "2024_McLaughlin", "2026": "2026_Cottrell", "2028": "2028_Janequeo", "2029": "2029_Binomi", "2031": "2031_BAM", "2032": "2032_Ethel", "2033": "2033_Basilea", "2034": "2034_Bernoulli", "2035": "2035_Stearns", "2036": "2036_Sheragul", "2037": "2037_Tripaxeptalis", "2038": "2038_Bistro", "2039": "2039_Payne-Gaposchkin", "2043": "2043_Ortutay", "2044": "2044_Wirt", "2046": "2046_Leningrad", "2047": "2047_Smetana", "2052": "2052_Tamriko", "2054": "2054_Gawain", "2055": "2055_Dvořák", "2056": "2056_Nancy", "2058": "2058_Róka", "2059": "2059_Baboquivari", "2060": "2060_Chiron", "2061": "2061_Anza", "2062": "2062_Aten", "2063": "2063_Bacchus", "2064": "2064_Thomsen", "2065": "2065_Spicer", "2067": "2067_Aksnes", "2069": "2069_Hubble", "2072": "2072_Kosmodemyanskaya", "2074": "2074_Shoemaker", "2080": "2080_Jihlava", "2085": "2085_Henan", "2090": "2090_Mizuho", "2091": "2091_Sampo", "2093": "2093_Genichesk", "2094": "2094_Magnitka", "2098": "2098_Zyskin", "2099": "2099_Öpik", "2100": "2100_Ra-Shalom", "2101": "2101_Adonis", "2102": "2102_Tantalus", "2104": "2104_Toronto", "2111": "2111_Tselina", "2114": "2114_Wallenquist", "2120": "2120_Tyumenia", "2121": "2121_Sevastopol", "2122": "2122_Pyatiletka", "2123": "2123_Vltava", "2126": "2126_Gerasimovich", "2127": "2127_Tanya", "2131": "2131_Mayall", "2134": "2134_Dennispalm", "2135": "2135_Aristaeus", "2139": "2139_Makharadze", "2140": "2140_Kemerovo", "2143": "2143_Jimarnold", "2145": "2145_Blaauw", "2146": "2146_Stentor", "2148": "2148_Epeios", "2151": "2151_Hadwiger", "2153": "2153_Akiyama", "2156": "2156_Kate", "2159": "2159_Kukkamäki", "2169": "2169_Taiwan", "2173": "2173_Maresjev", "2175": "2175_Andrea_Doria", "2181": "2181_Fogelin", "2187": "2187_La_Silla", "2195": "2195_Tengström", "2197": "2197_Shanghai", "2201": "2201_Oljato", "2202": "2202_Pele", "2204": "2204_Lyyli", "2207": "2207_Antenor", "2212": "2212_Hephaistos", "2213": "2213_Meeus", "2223": "2223_Sarpedon", "2227": "2227_Otto_Struve", "2228": "2228_Soyuz-Apollo", "2241": "2241_Alcathous", "2244": "2244_Tesla", "2246": "2246_Bowell", "2253": "2253_Espinette", "2260": "2260_Neoptolemus", "2278": "2278_Götz", "2285": "2285_Ron_Helin", "2296": "2296_Kugultinov", "2301": "2301_Whitford", "2308": "2308_Schilt", "2311": "2311_El_Leoncito", "2312": "2312_Duboshin", "2324": "2324_Janice", "2325": "2325_Chernykh", "2328": "2328_Robeson", "2340": "2340_Hathor", "2348": "2348_Michkovitch", "2349": "2349_Kurchenko", "2357": "2357_Phereclos", "2363": "2363_Cebriones", "2368": "2368_Beltrovata", "2384": "2384_Schulhof", "2391": "2391_Tomita", "2420": "2420_Čiurlionis", "2423": "2423_Ibarruri", "2429": "2429_Schürer", "2430": "2430_Bruce_Helin", "2433": "2433_Sootiyo", "2436": "2436_Hatshepsut", "2440": "2440_Educatio", "2442": "2442_Corbett", "2443": "2443_Tomeileen", "2449": "2449_Kenos", "2456": "2456_Palamedes", "2478": "2478_Tokai", "2483": "2483_Guinevere", "2486": "2486_Metsähovi", "2490": "2490_Bussolini", "2500": "2500_Alascattalo", "2513": "2513_Baetslé", "2518": "2518_Rutllant", "2531": "2531_Cambridge", "2537": "2537_Gilmore", "2542": "2542_Calpurnia", "2554": "2554_Skiff", "2571": "2571_Geisei", "2572": "2572_Annschnell", "2575": "2575_Bulgaria", "2577": "2577_Litva", "2578": "2578_Saint-Exupéry", "2590": "2590_Mourão", "2591": "2591_Dworetsky", "2594": "2594_Acamas", "2598": "2598_Merlin", "2606": "2606_Odessa", "2608": "2608_Seneca", "2613": "2613_Plzeň", "2623": "2623_Zech", "2629": "2629_Rudra", "2637": "2637_Bobrovnikoff", "2644": "2644_Victor_Jara", "2648": "2648_Owa", "2658": "2658_Gingerich", "2661": "2661_Bydžovský", "2672": "2672_Písek", "2674": "2674_Pandarus", "2675": "2675_Tolkien", "2678": "2678_Aavasaksa", "2685": "2685_Masursky", "2691": "2691_Sérsic", "2696": "2696_Magion", "2697": "2697_Albina", "2708": "2708_Burns", "2709": "2709_Sagan", "2726": "2726_Kotelnikov", "2730": "2730_Barks", "2732": "2732_Witt", "2741": "2741_Valdivia", "2744": "2744_Birgitta", "2747": "2747_Český_Krumlov", "2751": "2751_Campbell", "2752": "2752_Wu_Chien-Shiung", "2754": "2754_Efimov", "2759": "2759_Idomeneus", "2797": "2797_Teucer", "2807": "2807_Karl_Marx", "2815": "2815_Soma", "2826": "2826_Ahti", "2829": "2829_Bobhope", "2830": "2830_Greenwich", "2839": "2839_Annette", "2862": "2862_Vavilov", "2865": "2865_Laurel", "2867": "2867_Šteins", "2873": "2873_Binzel", "2874": "2874_Jim_Young", "2882": "2882_Tedesco", "2892": "2892_Filipenko", "2893": "2893_Peiroos", "2895": "2895_Memnon", "2903": "2903_Zhuhai", "2905": "2905_Plaskett", "2906": "2906_Caltech", "2920": "2920_Automedon", "2927": "2927_Alamosa", "2934": "2934_Aristophanes", "2937": "2937_Gibbs", "2939": "2939_Coconino", "2940": "2940_Bacon", "2942": "2942_Cordie", "2956": "2956_Yeomans", "2959": "2959_Scholl", "2975": "2975_Spahr", "2980": "2980_Cameron", "2981": "2981_Chagall", "2984": "2984_Chaucer", "2985": "2985_Shakespeare", "2995": "2995_Taratuta", "2997": "2997_Cabrera", "3000": "3000_Leonardo", "3015": "3015_Candy", "3031": "3031_Houston", "3034": "3034_Climenhaga", "3037": "3037_Alku", "3040": "3040_Kozai", "3043": "3043_San_Diego", "3045": "3045_Alois", "3047": "3047_Goethe", "3054": "3054_Strugatskia", "3063": "3063_Makhaon", "3066": "3066_McFadden", "3067": "3067_Akhmatova", "3070": "3070_Aitken", "3073": "3073_Kursk", "3074": "3074_Popov", "3099": "3099_Hergenrother", "3102": "3102_Krok", "3103": "3103_Eger", "3122": "3122_Florence", "3131": "3131_Mason-Dixon", "3133": "3133_Sendai", "3137": "3137_Horky", "3141": "3141_Buchar", "3169": "3169_Ostro", "3174": "3174_Alcock", "3176": "3176_Paolicchi", "3181": "3181_Ahnert", "3184": "3184_Raab", "3192": "3192_A'Hearn", "3198": "3198_Wallonia", "3199": "3199_Nefertiti", "3200": "3200_Phaethon", "3201": "3201_Sijthoff", "3202": "3202_Graff", "3204": "3204_Lindgren", "3212": "3212_Agricola", "3225": "3225_Hoag", "3240": "3240_Laocoon", "3247": "3247_Di_Martino", "3254": "3254_Bus", "3255": "3255_Tholen", "3267": "3267_Glo", "3268": "3268_De_Sanctis", "3277": "3277_Aaronson", "3281": "3281_Maupertuis", "3288": "3288_Seleucus", "3290": "3290_Azabu", "3309": "3309_Brorfelde", "3317": "3317_Paris", "3318": "3318_Blixen", "3322": "3322_Lidiya", "3325": "3325_TARDIS", "3330": "3330_Gantrisch", "3333": "3333_Schaber", "3343": "3343_Nedzel", "3345": "3345_Tarkovskij", "3350": "3350_Scobee", "3352": "3352_McAuliffe", "3353": "3353_Jarvis", "3360": "3360_Syrinx", "3361": "3361_Orpheus", "3362": "3362_Khufu", "3367": "3367_Alex", "3391": "3391_Sinon", "3401": "3401_Vanphilos", "3402": "3402_Wisdom", "3406": "3406_Omsk", "3409": "3409_Abramov", "3412": "3412_Kafka", "3425": "3425_Hurukawa", "3428": "3428_Roberts", "3430": "3430_Bradfield", "3451": "3451_Mentor", "3494": "3494_Purple_Mountain", "3537": "3537_Jürgen", "3540": "3540_Protesilaos", "3544": "3544_Borodino", "3548": "3548_Eurybates", "3551": "3551_Verenia", "3552": "3552_Don_Quixote", "3553": "3553_Mera", "3554": "3554_Amun", "3556": "3556_Lixiaohua", "3563": "3563_Canterbury", "3564": "3564_Talthybius", "3567": "3567_Alvema", "3568": "3568_ASCII", "3578": "3578_Carestia", "3581": "3581_Alvarez", "3596": "3596_Meriones", "3628": "3628_Božněmcová", "3635": "3635_Kreutz", "3640": "3640_Gostin", "3642": "3642_Frieden", "3669": "3669_Vertinskij", "3671": "3671_Dionysus", "3673": "3673_Levy", "3674": "3674_Erbisbühl", "3682": "3682_Welther", "3687": "3687_Dzus", "3688": "3688_Navajo", "3691": "3691_Bede", "3700": "3700_Geowilliams", "3703": "3703_Volkonskaya", "3708": "3708_Socus", "3709": "3709_Polypoites", "3710": "3710_Bogoslovskij", "3714": "3714_Kenrussell", "3724": "3724_Annenskij", "3728": "3728_IRAS", "3737": "3737_Beckman", "3749": "3749_Balam", "3752": "3752_Camillo", "3753": "3753_Cruithne", "3754": "3754_Kathleen", "3757": "3757_Anagolay", "3771": "3771_Alexejtolstoj", "3782": "3782_Celle", "3785": "3785_Kitami", "3787": "3787_Aivazovskij", "3789": "3789_Zhongguo", "3790": "3790_Raywilson", "3793": "3793_Leonteus", "3794": "3794_Sthenelos", "3800": "3800_Karayusuf", "3801": "3801_Thrasymedes", "3822": "3822_Segovia", "3823": "3823_Yorii", "3841": "3841_Dicicco", "3844": "3844_Lujiaxi", "3850": "3850_Peltier", "3851": "3851_Alhambra", "3854": "3854_George", "3868": "3868_Mendoza", "3872": "3872_Akirafujii", "3873": "3873_Roddy", "3893": "3893_DeLaeter", "3905": "3905_Doppler", "3908": "3908_Nyx", "3915": "3915_Fukushima", "3917": "3917_Franz_Schubert", "3936": "3936_Elst", "3951": "3951_Zichichi", "3953": "3953_Perth", "3960": "3960_Chaliubieju", "3962": "3962_Valyaev", "3963": "3963_Paradzhanov", "3982": "3982_Kastelʹ", "3988": "3988_Huma", "3996": "3996_Fugaku", "4000": "4000_Hipparchus", "4001": "4001_Ptolemaeus", "4003": "4003_Schumann", "4007": "4007_Euryalos", "4008": "4008_Corbin", "4009": "4009_Drobyshevskij", "4015": "4015_Wilson–Harrington", "4022": "4022_Nonna", "4029": "4029_Bridges", "4031": "4031_Mueller", "4034": "4034_Vishnu", "4035": "4035_Thestor", "4045": "4045_Lowengrub", "4055": "4055_Magellan", "4057": "4057_Demophon", "4060": "4060_Deipylos", "4063": "4063_Euforbo", "4065": "4065_Meinel", "4068": "4068_Menestheus", "4082": "4082_Swann", "4085": "4085_Weir", "4086": "4086_Podalirius", "4090": "4090_Říšehvězd", "4118": "4118_Sveta", "4138": "4138_Kalchas", "4142": "4142_Dersu-Uzala", "4147": "4147_Lennon", "4149": "4149_Harrison", "4150": "4150_Starr", "4151": "4151_Alanhale", "4175": "4175_Billbaum", "4176": "4176_Sudek", "4177": "4177_Kohman", "4179": "4179_Toutatis", "4183": "4183_Cuno", "4185": "4185_Phystech", "4197": "4197_Morpheus", "4205": "4205_David_Hughes", "4209": "4209_Briggs", "4217": "4217_Engelhardt", "4222": "4222_Nancita", "4230": "4230_van_den_Bergh", "4257": "4257_Ubasti", "4263": "4263_Abashiri", "4265": "4265_Kani", "4276": "4276_Clifford", "4282": "4282_Endate", "4318": "4318_Baťa", "4324": "4324_Bickel", "4332": "4332_Milton", "4337": "4337_Arecibo", "4340": "4340_Dence", "4341": "4341_Poseidon", "4348": "4348_Poulydamas", "4349": "4349_Tibúrcio", "4354": "4354_Euclides", "4358": "4358_Lynn", "4362": "4362_Carlisle", "4364": "4364_Shkodrov", "4383": "4383_Suruga", "4388": "4388_Jürgenstock", "4391": "4391_Balodis", "4401": "4401_Aditi", "4429": "4429_Chinmoy", "4432": "4432_McGraw-Hill", "4435": "4435_Holt", "4440": "4440_Tchantchès", "4446": "4446_Carolyn", "4450": "4450_Pan", "4451": "4451_Grieve", "4486": "4486_Mithra", "4489": "4489_Dracius", "4492": "4492_Debussy", "4501": "4501_Eurypylos", "4524": "4524_Barklajdetolli", "4525": "4525_Johnbauer", "4543": "4543_Phoinix", "4544": "4544_Xanthus", "4547": "4547_Massachusetts", "4581": "4581_Asclepius", "4585": "4585_Ainonai", "4587": "4587_Rees", "4606": "4606_Saheki", "4607": "4607_Seilandfarm", "4608": "4608_Wodehouse", "4647": "4647_Syuji", "4659": "4659_Roddenberry", "4660": "4660_Nereus", "4672": "4672_Takuboku", "4674": "4674_Pauling", "4707": "4707_Khryses", "4708": "4708_Polydoros", "4709": "4709_Ennomos", "4713": "4713_Steel", "4715": "4715_Medesicaste", "4722": "4722_Agelaos", "4754": "4754_Panthoos", "4756": "4756_Asaramas", "4760": "4760_Jia-xiang", "4765": "4765_Wasserburg", "4769": "4769_Castalia", "4776": "4776_Luyi", "4786": "4786_Tatianina", "4789": "4789_Sprattia", "4790": "4790_Petrpravec", "4791": "4791_Iphidamas", "4792": "4792_Lykaon", "4797": "4797_Ako", "4804": "4804_Pasteur", "4805": "4805_Asteropaios", "4822": "4822_Karge", "4827": "4827_Dares", "4828": "4828_Misenus", "4832": "4832_Palinurus", "4833": "4833_Meges", "4834": "4834_Thoas", "4836": "4836_Medon", "4867": "4867_Polites", "4868": "4868_Knushevia", "4897": "4897_Tomhamilton", "4899": "4899_Candace", "4902": "4902_Thessandrus", "4904": "4904_Makio", "4923": "4923_Clarke", "4936": "4936_Butakov", "4942": "4942_Munroe", "4944": "4944_Kozlovskij", "4946": "4946_Askalaphus", "4947": "4947_Ninkasi", "4949": "4949_Akasofu", "4951": "4951_Iwamoto", "4954": "4954_Eric", "4957": "4957_Brucemurray", "4959": "4959_Niinoama", "4962": "4962_Vecherka", "4979": "4979_Otawara", "4997": "4997_Ksana", "5010": "5010_Amenemhêt", "5011": "5011_Ptah", "5012": "5012_Eurymedon", "5023": "5023_Agapenor", "5025": "5025_Mecisteus", "5026": "5026_Martes", "5027": "5027_Androgeos", "5028": "5028_Halaesus", "5040": "5040_Rabinowitz", "5041": "5041_Theotes", "5080": "5080_Oja", "5088": "5088_Tancredi", "5101": "5101_Akhmerov", "5119": "5119_Imbrius", "5120": "5120_Bitias", "5126": "5126_Achaemenides", "5130": "5130_Ilioneus", "5143": "5143_Heracles", "5144": "5144_Achates", "5145": "5145_Pholus", "5148": "5148_Giordano", "5160": "5160_Camoes", "5171": "5171_Augustesen", "5175": "5175_Ables", "5176": "5176_Yoichi", "5185": "5185_Alerossi", "5196": "5196_Bustelli", "5201": "5201_Ferraz-Mello", "5208": "5208_Royer", "5222": "5222_Ioffe", "5244": "5244_Amphilochos", "5254": "5254_Ulysses", "5256": "5256_Farquhar", "5258": "5258_Rhoeo", "5259": "5259_Epeigeus", "5261": "5261_Eureka", "5264": "5264_Telephus", "5283": "5283_Pyrrhus", "5284": "5284_Orsilocus", "5285": "5285_Krethon", "5316": "5316_Filatov", "5318": "5318_Dientzenhofer", "5331": "5331_Erimomisaki", "5333": "5333_Kanaya", "5335": "5335_Damocles", "5357": "5357_Sekiguchi", "5370": "5370_Taranis", "5380": "5380_Sprigg", "5381": "5381_Sekhmet", "5385": "5385_Kamenka", "5391": "5391_Emmons", "5426": "5426_Sharp", "5430": "5430_Luu", "5436": "5436_Eumelos", "5474": "5474_Gingasen", "5475": "5475_Hanskennedy", "5476": "5476_Mulius", "5477": "5477_Holmes", "5481": "5481_Kiuchi", "5511": "5511_Cloanthus", "5535": "5535_Annefrank", "5542": "5542_Moffatt", "5592": "5592_Oshima", "5635": "5635_Cole", "5638": "5638_Deikoon", "5641": "5641_McCleese", "5642": "5642_Bobbywilliams", "5648": "5648_Axius", "5652": "5652_Amphimachus", "5653": "5653_Camarillo", "5655": "5655_Barney", "5656": "5656_Oldfield", "5677": "5677_Aberdonia", "5682": "5682_Beresford", "5692": "5692_Shirao", "5731": "5731_Zeus", "5751": "5751_Zao", "5756": "5756_Wassenbergh", "5771": "5771_Somerville", "5786": "5786_Talos", "5806": "5806_Archieroy", "5855": "5855_Yukitsuna", "5899": "5899_Jedicke", "5900": "5900_Jensen", "5905": "5905_Johnson", "5951": "5951_Alicemonet", "6002": "6002_Eetion", "6025": "6025_Naotosato", "6042": "6042_Cheshirecat", "6063": "6063_Jason", "6070": "6070_Rheinland", "6084": "6084_Bascom", "6090": "6090_Aulis", "6102": "6102_Visby", "6117": "6117_Brevardastro", "6141": "6141_Durda", "6144": "6144_Kondojiro", "6159": "6159_Andréseloy", "6170": "6170_Levasseur", "6181": "6181_Bobweber", "6189": "6189_Völk", "6216": "6216_San_Jose", "6223": "6223_Dahl", "6229": "6229_Tursachan", "6235": "6235_Burney", "6239": "6239_Minos", "6244": "6244_Okamoto", "6247": "6247_Amanogawa", "6250": "6250_Saekohayashi", "6255": "6255_Kuma", "6257": "6257_Thorvaldsen", "6267": "6267_Rozhen", "6296": "6296_Cleveland", "6312": "6312_Robheinlein", "6349": "6349_Acapulco", "6376": "6376_Schamp", "6377": "6377_Cagney", "6395": "6395_Hilliard", "6398": "6398_Timhunter", "6433": "6433_Enya", "6460": "6460_Bassano", "6469": "6469_Armstrong", "6470": "6470_Aldrin", "6478": "6478_Gault", "6489": "6489_Golevka", "6498": "6498_Ko", "6500": "6500_Kodaira", "6522": "6522_Aci", "6537": "6537_Adamovich", "6545": "6545_Leitus", "6546": "6546_Kaye", "6615": "6615_Plutarchos", "6708": "6708_Bobbievaile", "6709": "6709_Hiromiyuki", "6726": "6726_Suthers", "6793": "6793_Palazzolo", "6805": "6805_Abstracta", "6882": "6882_Sormano", "6980": "6980_Kyusakamoto", "7066": "7066_Nessus", "7088": "7088_Ishtar", "7092": "7092_Cadmus", "7119": "7119_Hiera", "7152": "7152_Euneus", "7166": "7166_Kennedy", "7167": "7167_Laupheim", "7187": "7187_Isobe", "7204": "7204_Ondřejov", "7225": "7225_Huntress", "7317": "7317_Cabot", "7336": "7336_Saunders", "7346": "7346_Boulanger", "7352": "7352_Hypsenor", "7369": "7369_Gavrilin", "7385": "7385_Aktsynovia", "7387": "7387_Malbil", "7440": "7440_Závist", "7449": "7449_Döllen", "7476": "7476_Ogilsbie", "7505": "7505_Furusho", "7517": "7517_Alisondoane", "7526": "7526_Ohtsuka", "7529": "7529_Vagnozzi", "7543": "7543_Prylis", "7545": "7545_Smaklösa", "7548": "7548_Engström", "7553": "7553_Buie", "7604": "7604_Kridsadaporn", "7638": "7638_Gladman", "7641": "7641_Cteatus", "7648": "7648_Tomboles", "7655": "7655_Adamries", "7675": "7675_Gorizia", "7687": "7687_Matthias", "7742": "7742_Altamira", "7776": "7776_Takeishi", "7784": "7784_Watterson", "7794": "7794_Sanvito", "7796": "7796_Járacimrman", "7803": "7803_Adachi", "7816": "7816_Hanoi", "7835": "7835_Myroncope", "7846": "7846_Setvák", "7866": "7866_Sicoli", "7958": "7958_Leakey", "7959": "7959_Alysecherri", "7968": "7968_Elst–Pizarro", "8013": "8013_Gordonmoore", "8026": "8026_Johnmckay", "8034": "8034_Akka", "8116": "8116_Jeanperrin", "8121": "8121_Altdorfer", "8187": "8187_Akiramisawa", "8306": "8306_Shoko", "8318": "8318_Averroes", "8373": "8373_Stephengould", "8405": "8405_Asbolus", "8441": "8441_Lapponica", "8549": "8549_Alcide", "8661": "8661_Ratzinger", "8776": "8776_Campestris", "8815": "8815_Deanregas", "8900": "8900_AAVSO", "8967": "8967_Calandra", "8991": "8991_Solidarity", "8992": "8992_Magnanimity", "9000": "9000_Hal", "9023": "9023_Mnesthus", "9069": "9069_Hovland", "9084": "9084_Achristou", "9115": "9115_Battisti", "9142": "9142_Rhesus", "9165": "9165_Raup", "9175": "9175_Graun", "9223": "9223_Leifandersson", "9260": "9260_Edwardolson", "9298": "9298_Geake", "9321": "9321_Alexkonopliv", "9344": "9344_Klopstock", "9423": "9423_Abt", "9524": "9524_O'Rourke", "9549": "9549_Akplatonov", "9564": "9564_Jeffwynn", "9617": "9617_Grahamchapman", "9641": "9641_Demazière", "9694": "9694_Lycomedes", "9712": "9712_Nauplius", "9767": "9767_Midsomer_Norton", "9799": "9799_Thronium", "9826": "9826_Ehrenfreund", "9844": "9844_Otani", "9902": "9902_Kirkpatrick", "9903": "9903_Leonhardt", "9905": "9905_Tiziano", "9909": "9909_Eschenbach", "9910": "9910_Vogelweide", "9912": "9912_Donizetti", "9916": "9916_Kibirev", "9921": "9921_Rubincam", "9931": "9931_Herbhauptman", "9936": "9936_Al-Biruni", "9949": "9949_Brontosaurus", "9950": "9950_ESA", "9951": "9951_Tyrannosaurus", "9963": "9963_Sandage", "9965": "9965_GNU", "9968": "9968_Serpe", "9969": "9969_Braille", "9971": "9971_Ishihara", "9983": "9983_Rickfienberg", "9991": "9991_Anežka", "9994": "9994_Grotius", "9999": "9999_Wiles", "10001": "10001_Palermo", "10046": "10046_Creighton", "10121": "10121_Arzamas", "10140": "10140_Villon", "10199": "10199_Chariklo", "10208": "10208_Germanicus", "10241": "10241_Miličević", "10244": "10244_Thüringer_Wald", "10245": "10245_Inselsberg", "10247": "10247_Amphiaraos", "10249": "10249_Harz", "10251": "10251_Mulisch", "10252": "10252_Heidigraf", "10258": "10258_Sárneczky", "10370": "10370_Hylonome", "10415": "10415_Mali_Lošinj", "10476": "10476_Los_Molinos", "10502": "10502_Armaghobs", "10551": "10551_Göteborg", "10645": "10645_Brač", "10656": "10656_Albrecht", "10660": "10660_Felixhormuth", "10711": "10711_Pskov", "10830": "10830_Desforges", "10979": "10979_Fristephenson", "10988": "10988_Feinstein", "11020": "11020_Orwell", "11066": "11066_Sigurd", "11118": "11118_Modra", "11132": "11132_Horne", "11133": "11133_Kumotori", "11252": "11252_Laërtes", "11264": "11264_Claudiomaccone", "11277": "11277_Ballard", "11351": "11351_Leucus", "11395": "11395_Iphinous", "11409": "11409_Horkheimer", "11429": "11429_Demodokus", "11441": "11441_Anadiego", "11509": "11509_Thersilochos", "11552": "11552_Boucolion", "11573": "11573_Helmholtz", "11665": "11665_Dirichlet", "11714": "11714_Mikebrown", "11824": "11824_Alpaidze", "11885": "11885_Summanus", "11887": "11887_Echemmon", "11948": "11948_Justinehénin", "11949": "11949_Kagayayutaka", "12002": "12002_Suess", "12052": "12052_Aretaon", "12238": "12238_Actor", "12359": "12359_Cajigal", "12373": "12373_Lancearmstrong", "12374": "12374_Rakhat", "12444": "12444_Prothoon", "12482": "12482_Pajka", "12564": "12564_Ikeller", "12621": "12621_Alsufi", "12696": "12696_Camus", "12714": "12714_Alkimos", "12838": "12838_Adamsmith", "12848": "12848_Agostino", "12923": "12923_Zephyr", "12929": "12929_Periboea", "12999": "12999_Toruń", "13003": "13003_Dickbeasley", "13006": "13006_Schwaar", "13025": "13025_Zürich", "13058": "13058_Alfredstevens", "13062": "13062_Podarkes", "13070": "13070_Seanconnery", "13123": "13123_Tyson", "13154": "13154_Petermrva", "13184": "13184_Augeias", "13241": "13241_Biyo", "13260": "13260_Sabadell", "13390": "13390_Bouška", "13474": "13474_Vʹyus", "13732": "13732_Woodall", "13963": "13963_Euphrates", "14335": "14335_Alexosipov", "14436": "14436_Morishita", "14627": "14627_Emilkowalski", "14789": "14789_GAISH", "14827": "14827_Hypnos", "14832": "14832_Alechinsky", "14871": "14871_Pyramus", "14968": "14968_Kubáček", "14974": "14974_Počátky", "15017": "15017_Cuppy", "15092": "15092_Beegees", "15094": "15094_Polymele", "15224": "15224_Penttilä", "15258": "15258_Alfilipenko", "15262": "15262_Abderhalden", "15268": "15268_Wendelinefroger", "15350": "15350_Naganuma", "15374": "15374_Teta", "15415": "15415_Rika", "15436": "15436_Dexius", "15440": "15440_Eioneus", "15460": "15460_Manca", "15502": "15502_Hypeirochus", "15760": "15760_Albion", "15810": "15810_Arawn", "15811": "15811_Nüsslein-Volhard", "15817": "15817_Lucianotesi", "15977": "15977_Pyraechmes", "16070": "16070_Charops", "16525": "16525_Shumarinaiko", "16560": "16560_Daitor", "16765": "16765_Agnesi", "16879": "16879_Campai", "16974": "16974_Iphthime", "17035": "17035_Velichko", "17102": "17102_Begzhigitova", "17119": "17119_Alexisrodrz", "17163": "17163_Vasifedoseev", "17198": "17198_Gorjup", "17246": "17246_Christophedumas", "17314": "17314_Aisakos", "17365": "17365_Thymbraeus", "17473": "17473_Freddiemercury", "17492": "17492_Hippasos", "17683": "17683_Kanagawa", "17795": "17795_Elysiasegal", "18117": "18117_Jonhodge", "18493": "18493_Demoleon", "18610": "18610_Arthurdent", "18880": "18880_Toddblumberg", "19139": "19139_Apian", "19367": "19367_Pink_Floyd", "19383": "19383_Rolling_Stones", "19521": "19521_Chaos", "19738": "19738_Calinger", "19741": "19741_Callahan", "19763": "19763_Klimesh", "19848": "19848_Yeungchuchiu", "19982": "19982_Barbaradoore", "20000": "20000_Varuna", "20325": "20325_Julianoey", "20461": "20461_Dioretsa", "20488": "20488_Pic-du-Midi", "20729": "20729_Opheltius", "20898": "20898_Fountainhills", "20936": "20936_Nemrut_Dagi", "21062": "21062_Iasky", "21088": "21088_Chelyabinsk", "21436": "21436_Chaoyichi", "21501": "21501_Acevedo", "21509": "21509_Lucascavin", "21558": "21558_Alisonliu", "21601": "21601_Aias", "21795": "21795_Masi", "21873": "21873_Jindřichůvhradec", "21900": "21900_Orus", "22149": "22149_Cinyras", "22577": "22577_Alfiuccio", "22740": "22740_Rayleigh", "22899": "22899_Alconrad", "23131": "23131_Debenedictis", "23135": "23135_Pheidas", "23327": "23327_Luchernandez", "23436": "23436_Alekfursenko", "23712": "23712_Willpatrick", "23718": "23718_Horgos", "23958": "23958_Theronice", "24101": "24101_Cassini", "24105": "24105_Broughton", "24260": "24260_Kriváň", "24626": "24626_Astrowizard", "24827": "24827_Maryphil", "24988": "24988_Alainmilsztajn", "25000": "25000_Astrometria", "25108": "25108_Boström", "25143": "25143_Itokawa", "25924": "25924_Douglasadams", "26074": "26074_Carlwirtz", "26858": "26858_Misterrogers", "27270": "27270_Guidotti", "28439": "28439_Miguelreyes", "28978": "28978_Ixion", "29292": "29292_Conniewalker", "30000": "30000_Camenzind", "30705": "30705_Idaios", "30718": "30718_Records", "30942": "30942_Helicaon", "31179": "31179_Gongju", "31192": "31192_Aigoual", "31249": "31249_Renéefleming", "31641": "31641_Cevasco", "31824": "31824_Elatus", "32008": "32008_Adriángalád", "32145": "32145_Katberman", "32226": "32226_Vikulgupta", "32496": "32496_Deïopites", "32532": "32532_Thereus", "34351": "34351_Decatur", "34746": "34746_Thoon", "37432": "37432_Piszkéstető", "37452": "37452_Spirit", "37519": "37519_Amphios", "37655": "37655_Illapa", "38050": "38050_Bias", "38083": "38083_Rhadamanthus", "38628": "38628_Huya", "39382": "39382_Opportunity", "39741": "39741_Komm", "39890": "39890_Bobstephens", "40463": "40463_Frankkameny", "42355": "42355_Typhon", "45300": "45300_Thewrewk", "45737": "45737_Benita", "46610": "46610_Bésixdouze", "47171": "47171_Lempo", "49777": "49777_Cappi", "50719": "50719_Elizabethgriffin", "51823": "51823_Rickhusband", "51824": "51824_Mikeanderson", "51825": "51825_Davidbrown", "51826": "51826_Kalpanachawla", "51827": "51827_Laurelclark", "51828": "51828_Ilanramon", "51829": "51829_Williemccool", "51983": "51983_Hönig", "52246": "52246_Donaldjohanson", "52266": "52266_Van_Flandern", "52872": "52872_Okyrhoe", "52975": "52975_Cyllarus", "53311": "53311_Deucalion", "54509": "54509_YORP", "54598": "54598_Bienor", "55565": "55565_Aya", "55576": "55576_Amycus", "55637": "55637_Uni", "57424": "57424_Caelumnoctu", "57868": "57868_Pupin", "58097": "58097_Alimov", "58534": "58534_Logos", "60558": "60558_Echeclus", "63305": "63305_Bobkepple", "65489": "65489_Ceto", "65803": "65803_Didymos", "66391": "66391_Moshup", "66652": "66652_Borasisi", "68109": "68109_Naomipasachoff", "69230": "69230_Hermes", "74503": "74503_Madola", "77185": "77185_Cherryh", "78431": "78431_Kemble", "78799": "78799_Xewioso", "78816": "78816_Caripito", "79360": "79360_Sila–Nunam", "79912": "79912_Terrell", "83982": "83982_Crantor", "84882": "84882_Table_Mountain", "88611": "88611_Teharonhiawako", "95179": "95179_Berkó", "98943": "98943_Torifune", "99906": "99906_Uofalberta", "99942": "99942_Apophis", "100000": "100000_Astronautica", "100268": "100268_Rosenthal", "101955": "101955_Bennu", "110393": "110393_Rammstein", "113390": "113390_Helvetia", "116903": "116903_Jeromeapt", "118401": "118401_LINEAR", "120347": "120347_Salacia", "120375": "120375_Kugel", "132524": "132524_APL", "133528": "133528_Ceragioli", "145451": "145451_Rumina", "145452": "145452_Ritona", "145523": "145523_Lulin", "145534": "145534_Jhongda", "148780": "148780_Altjira", "151997": "151997_Bauhinia", "152188": "152188_Morricone", "152830": "152830_Dinkinesh", "161989": "161989_Cacus", "162173": "162173_Ryugu", "163693": "163693_Atira", "164207": "164207_Cardea", "164589": "164589_La_Sagra", "174567": "174567_Varda", "184314": "184314_Mbabamwanawaresa", "185638": "185638_Erwinschwab", "208996": "208996_Achlys", "216433": "216433_Milianleo", "221628": "221628_Hyatt", "229762": "229762_Gǃkúnǁʼhòmdímà", "274301": "274301_Wikipedia", "284996": "284996_Rosaparks", "307261": "307261_Máni", "326732": "326732_Nice", "341520": "341520_Mors–Somnus", "342843": "342843_Davidbowie", "343158": "343158_Marsyas", "367943": "367943_Duende", "385446": "385446_Manwë", "385571": "385571_Otrera", "385695": "385695_Clete", "420356": "420356_Praamzius", "469219": "469219_Kamoʻoalewa", "469705": "469705_ǂKá̦gára", "471143": "471143_Dziewanna", "471325": "471325_Taowu", "474640": "474640_Alicanto", "486958": "486958_Arrokoth", "514107": "514107_Kaʻepaokaʻāwela", "524522": "524522_Zoozve", "532037": "532037_Chiminigagua", "541132": "541132_Leleākūhonua", "594913": "594913_ꞌAylóꞌchaxnim", "697402": "697402_Ao", "718492": "718492_Quro"
};

// decades:
// 18-40 -> {n}th_century_BC
// 1790s_BC - 1710s_BC

// every flat 100 years:
// 1700s_BC_(decade)
// to 100s_BC_(decade)

// 1-1000_BC
// AD_10-2032

/**
 * get date article from 4-digit number string
 * for example, "September_17"
 */
function getDateSlug(number: string) {

    // ensure length
    number = number.padEnd(4, "0").substring(0, 4);

    // get month, like September
    const month = new Date(number.substring(0, 2)).toLocaleDateString("en-US", {
        month: "long",
    });

    return month + "_" + number.substring(2, 4);
}

/**
 * returns PI with links injected sequentially
 */
export async function fillSequential() {

    const piPath = path.join(process.cwd(), "/src/data/pi-hundred-thousand.txt");
    const readStream = fs.createReadStream(piPath, { encoding: 'utf8', highWaterMark: 1 });
    const areaCodes = new Set(AREA_CODES);

    const maxLinkSize = 6;
    const buffer: string[] = [];
    let output = "";

    const links = structuredClone(LINKS);
    const datesUsed = new Set<string>();
    const numberPages = new Set<string>(NUMBER_PAGES);
    const minorPlanets = structuredClone(MINOR_PLANETS);

    const colors = [...LINK_COLORS];
    const colorCooldown: string[] = [];
    function getColor() {
        // remove from elligable colors
        const color = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
        // add to cooldown
        colorCooldown.push(color);
        // if enough in cooldown, move back
        if (colorCooldown.length > LINK_COLORS.length / 2) {
            colors.push(colorCooldown.shift()!);
        }
        // return found color
        return color;
    }

    /**
     * returns a string like `[displayText](wiki.org/slug)`
     */
    function getWikiLink(displayText: string, slug: string) {
        return "[" + displayText + "](https://wikipedia.org/wiki/" + slug + " '" + getColor() + "')";
    }

    try {
        for await (const chunk of readStream) {

            // we get a new digit
            // for each digit, we look 4 digits ahead, creating a 4-digit slice
            // we check if any combination of those exist, 4-digit, then 3-digit, then 2-digit, then 1-digit
            // if none, we return the digit.
            // if a link, we set the link

            // so how does this actually work
            // the oldest number in the buffer is the 'current' one
            // each subsequent is a lookahead number
            // so for each one, we 

            // pad the buffer if not long enough yet
            buffer.push(chunk);
            if (buffer.length < maxLinkSize) {
                continue;
            }

            // get largest number we have a link for in the buffer, starting at beginning
            let validKey = "";
            let byLength = [""];
            for (let i = 0; i < buffer.length; i++) {
                const currentKey = byLength[i + 1] = byLength[i] + buffer[i];
                if (currentKey in links) {
                    if (links[currentKey].length > 0) {
                        validKey = currentKey;
                    }
                    else {
                        delete links[currentKey];
                    }
                }
            }

            // first, try set to something we've configured
            if (validKey) {
                const options = links[validKey];
                const link = options.splice(Math.floor(Math.random() * options.length), 1)[0];
                output += getWikiLink(validKey, link);
                buffer.splice(0, validKey.length);
                continue;
            }

            if (numberPages.delete(byLength[4])) {
                buffer.splice(0, 4);
                output += getWikiLink(byLength[4], byLength[4] + "_(number)");
                continue;
            }

            // try number pages (_(number))
            if (numberPages.delete(byLength[3])) {
                output += getWikiLink(byLength[3], byLength[3] + "_(number)");
                buffer.splice(0, 3);
                continue;
            }

            // try minor planets
            let planetFound = false;
            for (let i = byLength.length - 1; i > 0; i--) {
                if (byLength[i] in minorPlanets) {
                    output += getWikiLink(byLength[i], minorPlanets[byLength[i]]);
                    buffer.splice(0, i);
                    delete minorPlanets[byLength[i]]
                    planetFound = true;
                    break;
                }
            }
            if (planetFound) continue;

            // try to use the whole thing as a date
            if (!datesUsed.has(byLength[4])) {
                datesUsed.add(byLength[4]);
                const date = new Date(buffer[0] + buffer[1] + "/" + buffer[2] + buffer[3] + "/00");
                const day = date.getDate();
                if (!isNaN(day)) {
                    const month = date.toLocaleDateString("en-US", {
                        month: "long",
                    });
                    output += getWikiLink(byLength[4], month + "_" + day);
                    buffer.length = 0;
                    continue;
                }
            }

            // try three digit area code
            if (areaCodes.delete(byLength[3] as any)) {
                buffer.splice(0, 3);
                output += getWikiLink(byLength[3], "Area_code_" + byLength[3]);
            }

            output += buffer.shift();
        }
    } catch (error: any) {
        console.error(`Error reading file: ${error.message}`);
    }

    output = output.replace("3", "3.");
    return output;
}

function numDigits(x: number) {
    return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
}
