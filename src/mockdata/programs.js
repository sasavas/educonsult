const programList = [
  {
    _id: { $oid: "611256428854c44b20f87f44" },
    school: { $oid: "61124fb3be9d2f3e441c3fd7" },
    vacancies: { $numberInt: "30" },
    fee: { $numberInt: "120" },
    applicationDates: {
      beginDate: { $date: { $numberLong: "1631318400000" } },
      endDate: { $date: { $numberLong: "1633996800000" } },
    },
    languageRequirement: { certificateName: "IELTS", minScore: "6.5" },
    websiteLink: "www.sapienza.com",
    notes: "here are some notes about this university",
    __v: { $numberInt: "0" },
    language: "italian",
    programName: "Computer Programming",
    programType: "bachelor",
  },
  {
    _id: { $oid: "611932c868a896f609244a5f" },
    school: { $oid: "61124fb3be9d2f3e441c3fd7" },
    vacancies: { $numberInt: "30" },
    fee: { $numberInt: "240" },
    applicationDates: {
      beginDate: { $date: { $numberLong: "1631318400000" } },
      endDate: { $date: { $numberLong: "1633996800000" } },
    },
    languageRequirement: { certificateName: "TOEFL iBT", minScore: "85" },
    websiteLink: "www.sapienza.com",
    notes:
      "Italyanın en gözde şehirlerinden Milano'da yer alan bu okul yılda yaklaşık 100 yabancı uyruklu öğrenci tarafından müracaat edilen mezunlarının dünya genelinde çalışma olanağı bulunan bir bölümdür.",
    __v: { $numberInt: "0" },
    language: "english",
    programName: "Medicine",
    programType: "bachelor",
  },
];

export default programList;
