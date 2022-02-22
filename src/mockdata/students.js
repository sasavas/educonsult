const studentList = [
  {
    _id: { $oid: "6119635ff15b8c56888af631" },
    firstName: "Mustafa",
    lastName: "Tasci",
    phone: "05333333333",
    email: "mustafa@tasci.com",
    university: "Istanbul University",
    targetProgram: {
      programType: "Lisans",
      program: "Artificial Intelligence",
    },
    __v: { $numberInt: "20" },
    registeredPrograms: [
      {
        program: { $oid: "611256428854c44b20f87f44" },
        pipeline: {
          _id: { $oid: "61223f219fb1314910c978d1" },
          name: "Öğrenci Pipeline",
          steps: [
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978d2" },
              title: "leadStatus",
              text: "Lead",
              description: "Henuz ogrenci degil, lead olarak ekleniyor",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978d3" },
              title: "sales",
              text: "Satış",
              description: "Öğrenci evrakları sisteme eklendi",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978d4" },
              title: "chooseSchoolAndProgram",
              text: "Bölüm Seç",
              description: "Ogrenci okul bolum secildi",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978d5" },
              title: "uploadRequiredFiles",
              text: "Belge Yükle",
              description: "Gerekli evraklar yuklendi",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978d6" },
              title: "checkDeadlinesForPrograms",
              text: "Deadline Kontrol Et",
              description: "Bu bolumler icin deadline lar kontrol edildi",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978d7" },
              title: "applicationMadeForprograms",
              text: "Bölüm Başvurusu Yap",
              description: "Bolumlere basvuru yapildi",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978d8" },
              title: "waitingResponseForApplication",
              text: "Başvuru Yanıt Bekle",
              description: "Basvurular icin cevap bekleniyor",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978d9" },
              title: "VisaProcess",
              text: "Vize Süreci",
              description: "Vize Islemleri",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978da" },
              title: "ScholarshipProcess",
              text: "Burs Süreci",
              description: "Burs islemleri",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978db" },
              title: "ThingsToDoInItaly",
              text: "Yerel Hizmetler",
              description: "Gittigi yerde yapilacak yerel hizmetler vs.",
            },
            {
              status: "todo",
              _id: { $oid: "61223f219fb1314910c978dc" },
              title: "DoneWithTheStudent",
              text: "Süreç Tamamlandı",
              description: "Ogrenciyle is bitti",
            },
          ],
          __v: { $numberInt: "0" },
        },
        registeredAt: { $date: { $numberLong: "1629815867217" } },
      },
    ],
  },
];

export default studentList;
