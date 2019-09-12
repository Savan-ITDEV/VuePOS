<template>
  <div class="feedback">
  
      <v-card-title>
        <v-icon color="black ">mdi-account</v-icon>
        <b>Users management</b>
      </v-card-title>
      <v-col cols="6" sm="3" class="py-4 pl-4">
        <v-text-field v-model="search" label="Search" placeholder></v-text-field>
      </v-col>

      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        class="elevation-4 ma-lg-5" >
        <template v-slot:item.UserIsActive="{ item }">
          <a @click="getUserID(item.UserUsername)" class="text-center">
            <v-icon>mdi-delete-circle-outline</v-icon>
          </a>
        </template>
      </v-data-table>
      <br />
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      search: "",
      headers: [
        {
          // text: "Dessert (100g serving)",
          // align: "left",
          sortable: true,
          value: "name"
        },
        { text: "Username", value: "UserUsername" },
        { text: "EmpID", value: "UserEmpID" },
        { text: "Firstname", value: "UserFname" },
        { text: "Lastname ", value: "UserLname" },
        { text: "Active ", value: "UserIsActive" }
        // { text: "UserReportGroups ", value: "UserReportGroups" },
        // { text: "UserReportModules ", value: "UserReportModules" }
      ],
      desserts: [
        {
          UserID: "114",
          UserUsername: "cha.tho",
          UserEmpID: "208122",
          UserFname: "Chanthavy",
          UserLname: "Thongsouk",
          UserEmail: "cha.tho@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,4,6,7,8",
          UserReportModules: "1,2,3,11,12,13,14,15,16,17,18,19,20"
        },
        {
          UserID: "112",
          UserUsername: "sin.xay",
          UserEmpID: "201642",
          UserFname: "Sin",
          UserLname: "Xayoudom",
          UserEmail: "Sin.xay@savanresorts.com",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "111",
          UserUsername: "Lar.kha",
          UserEmpID: "204413",
          UserFname: "Larkeo",
          UserLname: "Khamphavong",
          UserEmail: "Lar.kha@savanresorts.com ",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "110",
          UserUsername: "Lam.cha",
          UserEmpID: "200916",
          UserFname: "Lamduan",
          UserLname: "Chanthakhen",
          UserEmail: "Lam.cha@savanresorts.com ",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "109",
          UserUsername: "pho.sou5",
          UserEmpID: "206596",
          UserFname: "Phoumiphone ",
          UserLname: "Souvandnarat",
          UserEmail: "Pho.sou5@savanresorts.com",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "108",
          UserUsername: "Pho.dao",
          UserEmpID: "200907",
          UserFname: "Phonepaserth",
          UserLname: "Daoheuang",
          UserEmail: "Pho.dao@savanresorts.com",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "104",
          UserUsername: "var.tho",
          UserEmpID: "208124",
          UserFname: "Thongtaem",
          UserLname: "Na Ayuthaya Varasiri",
          UserEmail: "tho.var@svanresorts.com",
          DeptName: "KITCHEN",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "93",
          UserUsername: "sup.pan",
          UserEmpID: "208093",
          UserFname: "Supramarth ",
          UserLname: "Pankamhang",
          UserEmail: "sup.pan@savanresorts.com",
          DeptName: "HUMAN RESOURCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "90",
          UserUsername: "han.kha1",
          UserEmpID: "203626",
          UserFname: "Hannee",
          UserLname: "Khamsavanh",
          UserEmail: "han.kha@savanresorts.com",
          DeptName: "HUMAN RESOURCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "89",
          UserUsername: "raj.rai",
          UserEmpID: "200718",
          UserFname: "Raj Kumar",
          UserLname: "Rai",
          UserEmail: "raj.rai@savanresorts.com",
          DeptName: "SECURITY",
          UserIsActive: "Active",
          UserReportGroups: "4,8",
          UserReportModules: "7,8,9,10,26,27,28,18,19,20"
        },
        {
          UserID: "86",
          UserUsername: "sun.non",
          UserEmpID: "206247",
          UserFname: "Suntipap ",
          UserLname: "Nongnueang",
          UserEmail: "sun.non@savanresorts.com",
          DeptName: "HUMAN RESOURCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "85",
          UserUsername: "Tan.kwa",
          UserEmpID: "208047",
          UserFname: "Tangkuay",
          UserLname: "Kwangkaew",
          UserEmail: "Tan.kwa@savanresorts.com",
          DeptName: "KITCHEN",
          UserIsActive: "Active",
          UserReportGroups: "4,5,1",
          UserReportModules: "7,8,9,10,26,27,28,1,2,3"
        },
        {
          UserID: "84",
          UserUsername: "cha.sou",
          UserEmpID: "204062",
          UserFname: "Chaisomphone ",
          UserLname: "Soukphasert ",
          UserEmail: "cha.sou1@savanresorts.com",
          DeptName: "TRANSPORT",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "83",
          UserUsername: "cha.dit",
          UserEmpID: "208000",
          UserFname: "Chareenat",
          UserLname: "Ditsiribaworn",
          UserEmail: "ditsiribaworn@gmail.com",
          DeptName: "SPA",
          UserIsActive: "Active",
          UserReportGroups: "4,5,11",
          UserReportModules: "7,8,9,10,26,27,28,21,22,23,29,30"
        },
        {
          UserID: "82",
          UserUsername: "nua.kho",
          UserEmpID: "206493",
          UserFname: "Nuanchan",
          UserLname: "Khodsombath",
          UserEmail: "nua.kho@savanresorts.com",
          DeptName: "CAGE",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "81",
          UserUsername: "pho.tan",
          UserEmpID: "207941",
          UserFname: "Phonemelar",
          UserLname: "Tanvongphab",
          UserEmail: "pho.tan@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11,12",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "80",
          UserUsername: "sil.pho",
          UserEmpID: "207755",
          UserFname: "Siliphon",
          UserLname: "Phonsavanh",
          UserEmail: "sil.pho@savanresorts.com",
          DeptName: "ADMIN",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "79",
          UserUsername: "kha.kon",
          UserEmpID: "207891",
          UserFname: "Khamkhong",
          UserLname: "Kongmany",
          UserEmail: "kha.kon@savanresorts.com",
          DeptName: "SPA",
          UserIsActive: "Active",
          UserReportGroups: "4,5,11",
          UserReportModules: "7,8,9,10,26,27,28,21,22,23"
        },
        {
          UserID: "78",
          UserUsername: "som.cha2",
          UserEmpID: "206405",
          UserFname: "Somphone",
          UserLname: "Chanthalangsy",
          UserEmail: "som.cha2@savanresorts.com",
          DeptName: "FINANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"
        },
        {
          UserID: "77",
          UserUsername: "nok.sav",
          UserEmpID: "207312",
          UserFname: "Nokkeo",
          UserLname: "Savika",
          UserEmail: "nok.sav@savanresorts.com",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "76",
          UserUsername: "pho.bur",
          UserEmpID: "202790",
          UserFname: "Phongsak",
          UserLname: "Burandet",
          UserEmail: "pho.bur@savanresorts.com",
          DeptName: "KITCHEN",
          UserIsActive: "Active",
          UserReportGroups: "4,1",
          UserReportModules: "7,8,9,10,26,27,28,1,2,3"
        },
        {
          UserID: "67",
          UserUsername: "sab.keo",
          UserEmpID: "201853",
          UserFname: "Sabayphone",
          UserLname: "Keothanousone",
          UserEmail: "sab.keo@savanresorts.com",
          DeptName: "TRANSPORT",
          UserIsActive: "Active",
          UserReportGroups: "4,5,7",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "66",
          UserUsername: "vee.dou",
          UserEmpID: "207544",
          UserFname: "Veerapong",
          UserLname: "Doungkasone",
          UserEmail: "vee.dou@savanresorts.com",
          DeptName: "OPERATIONS",
          UserIsActive: "Active",
          UserReportGroups: "4,5,10",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "65",
          UserUsername: "vie.ins",
          UserEmpID: "206546",
          UserFname: "Viengkeo",
          UserLname: "Insixiengmai",
          UserEmail: "vie.ins@savanresorts.com",
          DeptName: "VIP SERVICE",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "64",
          UserUsername: "nil.the",
          UserEmpID: "205010",
          UserFname: "Nilandone ",
          UserLname: "Thepphavong",
          UserEmail: "nil.the@savanresorts.com",
          DeptName: "Executive Office",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "60",
          UserUsername: "sou.lau",
          UserEmpID: "201252",
          UserFname: "Soupanee",
          UserLname: "Louangpaserth",
          UserEmail: "sou.lau@savanresorts.com",
          DeptName: "CAGE",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "57",
          UserUsername: "jes.yap",
          UserEmpID: "202374",
          UserFname: "Yap Mun Chooi",
          UserLname: "Jess",
          UserEmail: "jes.yap@savanresorts.com",
          DeptName: "SURVEILLANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,4,5",
          UserReportModules: "1,2,3,7,8,9,10,26,27,28"
        },
        {
          UserID: "56",
          UserUsername: "san.orl",
          UserEmpID: "207859",
          UserFname: "Sanon Non",
          UserLname: "Orlavanh",
          UserEmail: "san.orl@savanresorts.com",
          DeptName: "MARKETING",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "55",
          UserUsername: "cha.pha",
          UserEmpID: "206277",
          UserFname: "Chansamone",
          UserLname: "Phasavat",
          UserEmail: "cha.pha@savanresorts.com",
          DeptName: "SLOT",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28\r\n"
        },
        {
          UserID: "54",
          UserUsername: "lad.syh",
          UserEmpID: "206922",
          UserFname: "Laddavone",
          UserLname: "Xaylavong",
          UserEmail: "lad.syh@savanresorts.com",
          DeptName: "SECURITY",
          UserIsActive: "Active",
          UserReportGroups: "4,5,8",
          UserReportModules: "7,8,9,10,26,27,28,18,19,20"
        },
        {
          UserID: "53",
          UserUsername: "sou.cha",
          UserEmpID: "202897",
          UserFname: "Soulideth",
          UserLname: "Chanthavongsa",
          UserEmail: "sou.cha@savanresorts.com",
          DeptName: "HUMAN RESOURCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "52",
          UserUsername: "pha.kho",
          UserEmpID: "205781",
          UserFname: "Phavady",
          UserLname: "Khounnouvong",
          UserEmail: "pha.kho@savanvegas.com",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "51",
          UserUsername: "wil.int",
          UserEmpID: "202545",
          UserFname: "Suchada",
          UserLname: "Intharaksa",
          UserEmail: "wil.int@savanresorts.com",
          DeptName: "GAMING",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "50",
          UserUsername: "pho.son1",
          UserEmpID: "205958",
          UserFname: "Phonethip",
          UserLname: "Sonenouvong",
          UserEmail: "pho.son1@savanresorts.com",
          DeptName: "FACILITY",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "49",
          UserUsername: "aph.nan",
          UserEmpID: "204236",
          UserFname: "Aphisith",
          UserLname: "Nanthavanh",
          UserEmail: "aph.nan@savanresorts.com",
          DeptName: "TRANSPORT",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "48",
          UserUsername: "phe.sen",
          UserEmpID: "200135",
          UserFname: "Phetsamone",
          UserLname: "Sengphasoum",
          UserEmail: "phe.sen@savanresorts.com",
          DeptName: "LAUNDRY",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "47",
          UserUsername: "tha.sae1",
          UserEmpID: "207162",
          UserFname: "Tharathip",
          UserLname: "Saengwatho",
          UserEmail: "tha.sae1@savanresorts.com",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "46",
          UserUsername: "lat.khe",
          UserEmpID: "207628",
          UserFname: "Laththayakone",
          UserLname: "Khetthavong",
          UserEmail: "lat.khe@savanresorts.com",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "45",
          UserUsername: "keo.int",
          UserEmpID: "200341",
          UserFname: "Keodorkmany",
          UserLname: "Inthajack",
          UserEmail: "keo.int@savanresorts.com",
          DeptName: "F&B VIP",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "44",
          UserUsername: "pir.hen",
          UserEmpID: "207688",
          UserFname: "Piraya",
          UserLname: "Hengprasert",
          UserEmail: "pir.hen@savanresorts.com",
          DeptName: "F&B VIP",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "43",
          UserUsername: "gra.vel",
          UserEmpID: "201231",
          UserFname: "Grace",
          UserLname: "Velasco",
          UserEmail: "gra.vel@savanresorts.com",
          DeptName: "FINANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"
        },
        {
          UserID: "42",
          UserUsername: "nil.tha",
          UserEmpID: "205629",
          UserFname: "Nilakoun",
          UserLname: "Thammavong",
          UserEmail: "nil.tha@savanresorts.com",
          DeptName: "FINANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"
        },
        {
          UserID: "41",
          UserUsername: "dan.vic",
          UserEmpID: "201230",
          UserFname: "Danilo",
          UserLname: "Victoria",
          UserEmail: "dan.vic@savanresorts.com",
          DeptName: "FINANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"
        },
        {
          UserID: "40",
          UserUsername: "adu.pro",
          UserEmpID: "202132",
          UserFname: "Adulkhate",
          UserLname: "Prommarad",
          UserEmail: "adu.pro@savanresorts.com",
          DeptName: "FRONT OFFICE",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "39",
          UserUsername: "tha.pan",
          UserEmpID: "206427",
          UserFname: "Thapanan",
          UserLname: "Panjama",
          UserEmail: "tha.pan@savanresorts.com",
          DeptName: "FRONT OFFICE",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "38",
          UserUsername: "tho.sou",
          UserEmpID: "200668",
          UserFname: "Thotsakhan",
          UserLname: "Soutthivongnorath",
          UserEmail: "tho.sou@savanresorts.com",
          DeptName: "GAMING",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "37",
          UserUsername: "apa.tha",
          UserEmpID: "202908",
          UserFname: "Aphaisouk",
          UserLname: "Thanavanh",
          UserEmail: "apa.tha@savanresorts.com",
          DeptName: "HUMAN RESOURCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "36",
          UserUsername: "phe.phi1",
          UserEmpID: "200721",
          UserFname: "Phetsadakhone",
          UserLname: "Philamakost",
          UserEmail: "phe.phi1@savanresorts.com",
          DeptName: "KITCHEN",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "35",
          UserUsername: "cha.pan1",
          UserEmpID: "206525",
          UserFname: "Chaiyot",
          UserLname: "Pansakun",
          UserEmail: "cha.pan1@savanresorts.com",
          DeptName: "KITCHEN",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "34",
          UserUsername: "aye.mon",
          UserEmpID: "200050",
          UserFname: "Aye",
          UserLname: "Myat Mon",
          UserEmail: "aye.mon@savanresorts.com",
          DeptName: "OPERATIONS",
          UserIsActive: "Active",
          UserReportGroups: "4,5,10",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "33",
          UserUsername: "san.thi",
          UserEmpID: "200952",
          UserFname: "Sunlathda",
          UserLname: "Thitsumlan",
          UserEmail: "san.thi@savanresorts.com",
          DeptName: "RETAILSHOP",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "32",
          UserUsername: "non.inp",
          UserEmpID: "207736",
          UserFname: "Nonglak",
          UserLname: "Inpotong",
          UserEmail: "non.inp@savanresorts.com",
          DeptName: "MARKETING",
          UserIsActive: "Active",
          UserReportGroups: "2,4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "31",
          UserUsername: "zi.li",
          UserEmpID: "207231",
          UserFname: "Ziying",
          UserLname: "Li",
          UserEmail: "zi.li@savanresorts.com",
          DeptName: "MARKETING",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "30",
          UserUsername: "mar.cri",
          UserEmpID: "202837",
          UserFname: "Mark",
          UserLname: "Crickett",
          UserEmail: "mar.cri@savanresorts.com",
          DeptName: "SECURITY",
          UserIsActive: "Active",
          UserReportGroups: "4,5,8",
          UserReportModules: "7,8,9,10,26,27,28,18,19,20"
        },
        {
          UserID: "29",
          UserUsername: "kit.sri",
          UserEmpID: "207401",
          UserFname: "Kittiyaprapa",
          UserLname: "Srisuracha",
          UserEmail: "kit.sri@savanresorts.com",
          DeptName: "SLOT",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28\r\n"
        },
        {
          UserID: "28",
          UserUsername: "nan.wan",
          UserEmpID: "207333",
          UserFname: "Nanthana",
          UserLname: "Wansoo",
          UserEmail: "nan.wan@savanresorts.com",
          DeptName: "SPA",
          UserIsActive: "Active",
          UserReportGroups: "4,5,11",
          UserReportModules: "7,8,9,10,26,27,28,21,22,23"
        },
        {
          UserID: "27",
          UserUsername: "tha.tha",
          UserEmpID: "200565",
          UserFname: "Thanouya",
          UserLname: "Thammavong",
          UserEmail: "tha.tha@savanresorts.com",
          DeptName: "SURVEILLANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,4,5",
          UserReportModules: "1,2,3,7,8,9,10,26,27,28"
        },
        {
          UserID: "26",
          UserUsername: "amp.xay",
          UserEmpID: "206025",
          UserFname: "Amphaivan",
          UserLname: "Xayyalath",
          UserEmail: "amp.xay@savanresorts.com",
          DeptName: "HUMAN RESOURCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "25",
          UserUsername: "nav.gul",
          UserEmpID: "205175",
          UserFname: "Naveed",
          UserLname: "Gul",
          UserEmail: "nav.gul@savanresorts.com",
          DeptName: "OPERATIONS",
          UserIsActive: "Active",
          UserReportGroups: "4,5,10",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "24",
          UserUsername: "mee.phe",
          UserEmpID: "205960",
          UserFname: "Meesouk",
          UserLname: "Phetsomphou",
          UserEmail: "mee.phe@savanresorts.com",
          DeptName: "FACILITY",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "23",
          UserUsername: "mic.fit",
          UserEmpID: "204562",
          UserFname: "Michael James",
          UserLname: "Fitchett",
          UserEmail: "mic.fit@savanresorts.com",
          DeptName: "FACILITY",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "22",
          UserUsername: "raq.eus",
          UserEmpID: "200651",
          UserFname: "Raquel",
          UserLname: "Legaspi Eusantos",
          UserEmail: "raq.eus@savanresorts.com",
          DeptName: "CAGE",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "21",
          UserUsername: "amp.kho",
          UserEmpID: "205520",
          UserFname: "Amphone",
          UserLname: "Khounmueangsaen",
          UserEmail: "amp.kho@savanresorts.com",
          DeptName: "GAMING",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "20",
          UserUsername: "kwa.suw",
          UserEmpID: "207759",
          UserFname: "Kwanchai",
          UserLname: "Suwandecha",
          UserEmail: "kwa.suw@savanresorts.com",
          DeptName: "HOUSE KEEPING",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "19",
          UserUsername: "kha.bou1",
          UserEmpID: "207404",
          UserFname: "Khamphasouk",
          UserLname: "Bouttavangsy",
          UserEmail: "kha.bou1@savanresorts.com",
          DeptName: "HOUSE KEEPING",
          UserIsActive: "Active",
          UserReportGroups: "4,5",
          UserReportModules: "7,8,9,10,26,27,28"
        },
        {
          UserID: "18",
          UserUsername: "wit.sir",
          UserEmpID: "207720",
          UserFname: "Withaya",
          UserLname: "Sirithanomwong",
          UserEmail: "wit.sir@savanresorts.com",
          DeptName: "HUMAN RESOURCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "15",
          UserUsername: "kha.cha2",
          UserEmpID: "204906",
          UserFname: "Khammai",
          UserLname: "Chanthasom",
          UserEmail: "kha.cha2@savanresorts.com",
          DeptName: "F&B",
          UserIsActive: "Active",
          UserReportGroups: "4,5,6",
          UserReportModules: "7,8,9,10,26,27,28,11,12,14,15,16"
        },
        {
          UserID: "14",
          UserUsername: "cha.van",
          UserEmpID: "200567",
          UserFname: "Champy",
          UserLname: "Vanhvongvichit",
          UserEmail: "cha.van@savanresorts.com ",
          DeptName: "FINANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"
        },
        {
          UserID: "13",
          UserUsername: "von.say",
          UserEmpID: "206666",
          UserFname: "Vongsakda",
          UserLname: "Saysengphet",
          UserEmail: "von.say@savanresorts.com",
          DeptName: "FINANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"
        },
        {
          UserID: "12",
          UserUsername: "dez.man",
          UserEmpID: "207421",
          UserFname: "Dezar",
          UserLname: "Manypakone",
          UserEmail: "dez.man@savanresorts.com",
          DeptName: "FINANCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"
        },
        {
          UserID: "11",
          UserUsername: "sys.keo",
          UserEmpID: "205852",
          UserFname: "Sysongkham",
          UserLname: "Keomoukpha",
          UserEmail: "sys.keo@savanresorts.com",
          DeptName: "HUMAN RESOURCE",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "10",
          UserUsername: "kha.xay2",
          UserEmpID: "206714",
          UserFname: "Khamlar",
          UserLname: "Xaysomphone",
          UserEmail: "kha.xay2@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11,12",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "9",
          UserUsername: "vil.sou1",
          UserEmpID: "207640",
          UserFname: "Vilaysack",
          UserLname: "Soukmany",
          UserEmail: "vil.sou1@savanresort.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "8",
          UserUsername: "itt.sou",
          UserEmpID: "207639",
          UserFname: "Itthiphon",
          UserLname: "Souvunnamaity",
          UserEmail: "itt.sou@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "7",
          UserUsername: "sor.san",
          UserEmpID: "206523",
          UserFname: "Sor",
          UserLname: "Sann",
          UserEmail: "sor.san@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "6",
          UserUsername: "pas.cha",
          UserEmpID: "201952",
          UserFname: "Pasert",
          UserLname: "Chanthavilay",
          UserEmail: "pas.cha@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "5",
          UserUsername: "mic.gau",
          UserEmpID: "200486",
          UserFname: "Mike",
          UserLname: "Gauton",
          UserEmail: "mic.gau@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "4",
          UserUsername: "sou.von",
          UserEmpID: "205249",
          UserFname: "Souvanvixay",
          UserLname: "Vongsa",
          UserEmail: "sou.von@savanreosorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "3",
          UserUsername: "sco.lau",
          UserEmpID: "200823",
          UserFname: "Scott",
          UserLname: "Laughlin",
          UserEmail: "sco.lau@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "2",
          UserUsername: "nop.vor",
          UserEmpID: "207848",
          UserFname: "Noppasoon",
          UserLname: "Vorraming",
          UserEmail: "nop.vor@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        },
        {
          UserID: "1",
          UserUsername: "sev.nin",
          UserEmpID: "207830",
          UserFname: "Seven",
          UserLname: "Ninlavanh",
          UserEmail: "sev.nin@savanresorts.com",
          DeptName: "IT",
          UserIsActive: "Active",
          UserReportGroups: "1,2,3,4,5,6,7,8,9,10,11",
          UserReportModules:
            "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"
        }
      ]
    };
  },
  methods: {
    getUserID(id) {
      console.log(id);
    }
  }
};
</script>