import KlinikPintarAPI from "../../api/KlinikPintarAPI"

const state = () => {
  return {
    provinces: [],
    clinics: []
  }
}

const mutations = {
  setProvinces(state, provinces) {
    state.provinces = provinces
  },
    setClinics(state, clinics) {
    state.clinics = clinics
  }
}

const actions = {
  getProvinces({ commit }) {
    const provinces = [
      {
          "id": "5b34f47566f9f9647e2e0c9f",
          "name": "Aceh"
      },
      {
          "id": "5b34f47366f9f9647e2dfa45",
          "name": "Bali"
      },
      {
          "id": "5b34f47366f9f9647e2dfabf",
          "name": "Banten"
      },
      {
          "id": "5b34f47466f9f9647e2dfbb0",
          "name": "Bengkulu"
      },
      {
          "id": "5b34f47466f9f9647e2dfc39",
          "name": "DI Yogyakarta"
      },
      {
          "id": "5b34f47466f9f9647e2dfc8d",
          "name": "DKI Jakarta"
      },
      {
          "id": "5b34f47466f9f9647e2dfcc0",
          "name": "Gorontalo"
      },
      {
          "id": "5b34f47466f9f9647e2dfd30",
          "name": "Jambi"
      },
      {
          "id": null,
          "name": "Jawa Barat"
      },
      {
          "id": "5b34f47466f9f9647e2dfdc6",
          "name": "Jawa Barat"
      },
      {
          "id": "5b34f47466f9f9647e2e0176",
          "name": "Jawa Tengah"
      },
      {
          "id": "5b34f47466f9f9647e2e043f",
          "name": "Jawa Timur"
      },
      {
          "id": "5b34f47566f9f9647e2e07b9",
          "name": "Kalimantan Barat"
      },
      {
          "id": "5b34f47566f9f9647e2e0885",
          "name": "Kalimantan Selatan"
      },
      {
          "id": "5b34f47566f9f9647e2e092b",
          "name": "Kalimantan Tengah"
      },
      {
          "id": "5b34f47566f9f9647e2e09c2",
          "name": "Kalimantan Timur"
      },
      {
          "id": "5b34f47366f9f9647e2dfa88",
          "name": "Kepulauan Bangka Belitung"
      },
      {
          "id": "5b34f47566f9f9647e2e0a69",
          "name": "Kepulauan Riau"
      },
      {
          "id": "5b34f47566f9f9647e2e0ab2",
          "name": "Lampung"
      },
      {
          "id": "5b34f47566f9f9647e2e0ba3",
          "name": "Maluku"
      },
      {
          "id": "5b34f47566f9f9647e2e0c25",
          "name": "Maluku Utara"
      },
      {
          "id": "5b34f47666f9f9647e2e0dd8",
          "name": "Nusa Tenggara Barat"
      },
      {
          "id": "5b34f47666f9f9647e2e0e6e",
          "name": "Nusa Tenggara Timur"
      },
      {
          "id": "5b34f47666f9f9647e2e0fd4",
          "name": "Papua"
      },
      {
          "id": "5b34f47666f9f9647e2e11dd",
          "name": "Papua Barat"
      },
      {
          "id": "5b34f47666f9f9647e2e12b0",
          "name": "Riau"
      },
      {
          "id": "5b34f47666f9f9647e2e1360",
          "name": "Sulawesi Barat"
      },
      {
          "id": "5b34f47666f9f9647e2e13ab",
          "name": "Sulawesi Selatan"
      },
      {
          "id": "5b34f47666f9f9647e2e14f6",
          "name": "Sulawesi Tengah"
      },
      {
          "id": "5b34f47766f9f9647e2e15ad",
          "name": "Sulawesi Tenggara"
      },
      {
          "id": "5b34f47766f9f9647e2e1687",
          "name": "Sulawesi Utara"
      },
      {
          "id": "5b34f47766f9f9647e2e173e",
          "name": "Sumatera Barat"
      },
      {
          "id": "5b34f47766f9f9647e2e1815",
          "name": "Sumatera Selatan"
      },
      {
          "id": "5b34f47766f9f9647e2e1909",
          "name": "Sumatera Utara"
      }
    ]
    commit('setProvinces', provinces)
  },
    getClinics({ commit }, payload) {
        const clinics = [
            {
                "id": "5e223a63be12b1026d1231f8",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/permata-bunda/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/permata-bunda/pb-2.png",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/permata-bunda/pb-3.png",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/permata-bunda/pb-4.png"
                ],
                "telephone": "+6287779804708",
                "location": {
                    "id": "6179206d4a6c7d00088bc8bb",
                    "coordinate": {
                        "latitude": -6.2529526,
                        "longitude": 107.0094504
                    },
                    "postalCode": null,
                    "googleMapLink": "https://g.page/klinik-pintar-permata-bunda?share",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfdc6",
                        "name": "Jawa Barat"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfe31",
                        "type": "city",
                        "name": "Kota Bekasi"
                    },
                    "address": "Jl. Rw. Indah No.2, RT.005/RW.009, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17113",
                    "coordinates": [
                        107.0094504,
                        -6.2529526
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/62811303457",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-permata-bunda-bekasi-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152152"
                },
                "fullyBooked": false,
                "name": "Klinik Pintar Permata Bunda",
                "openHours": [
                    {
                        "id": "5dfc740ae3817b2b7b90fad4",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "5dfc740ae3817b2b7b90fad3",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "5dfc740ae3817b2b7b90fad2",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "5dfc740ae3817b2b7b90fad1",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "5dfc740ae3817b2b7b90fad0",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "5dfc740ae3817b2b7b90facf",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 08.00 - 20.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "08.00 - 20.00"
                    }
                ]
            },
            {
                "id": "5ed8928e8dedd281b0e2bd8f",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/jaac/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/jaac/jaac-1.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/jaac/jaac-2.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/jaac/jaac-3.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/jaac/jaac-4.jpg"
                ],
                "telephone": "+6283808489819",
                "location": {
                    "id": "5ed88bc6ea0958d8dfa4dd27",
                    "coordinate": {
                        "latitude": -6.2930753,
                        "longitude": 106.7286103
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/8Kc1Yd5oJ5f68R1M7",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfc8d",
                        "name": "DKI Jakarta"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfca0",
                        "type": "city",
                        "name": "Kota Jakarta Selatan"
                    },
                    "address": "Grandhika Hotel Lt.Mezzanine, Jl. Iskandarsyah Raya No.65, RT.5/RW.2, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, DKI Jakarta 12160",
                    "coordinates": [
                        106.7286103,
                        -6.2930753
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6283808489819",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-jaac-jakarta-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152095"
                },
                "fullyBooked": false,
                "name": "JAAC",
                "openHours": [
                    {
                        "id": "60750e1df0cf6382ecd73d80",
                        "time": {
                            "open": "08:30",
                            "closed": "15:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "60750e1df0cf6382ecd73d81",
                        "time": {
                            "open": "08:30",
                            "closed": "15:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "60750e1df0cf6382ecd73d82",
                        "time": {
                            "open": "08:30",
                            "closed": "15:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "60750e1df0cf6382ecd73d83",
                        "time": {
                            "open": "08:30",
                            "closed": "15:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "60750e1df0cf6382ecd73d84",
                        "time": {
                            "open": "08:30",
                            "closed": "15:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "60750e1df0cf6382ecd73d85",
                        "time": {
                            "open": "08:30",
                            "closed": "12:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 08.30 - 15.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "08.30 - 15.00"
                    }
                ]
            },
            {
                "id": "5ed88798d616c1ea7cf7438a",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/e3a/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/e3a/tampak-depan.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/e3a/ruang-tunggu-with-banner.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/e3a/ruang-tes.jpg"
                ],
                "telephone": "+628179988322",
                "location": {
                    "id": "5ed884c75d7f99fac1b6ff0b",
                    "coordinate": {
                        "latitude": -6.2330517,
                        "longitude": 106.8908627
                    },
                    "postalCode": null,
                    "googleMapLink": "https://g.page/e3aclinic?share",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfc8d",
                        "name": "DKI Jakarta"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfcab",
                        "type": "city",
                        "name": "Kota Jakarta Timur"
                    },
                    "address": "Jl. Camar Blok CC No. 15, RT 015 RW 003, Perumahan Cipinang Indah 2, Kelurahan Pondok Bambu, Kecamatan Duren Sawit, Jakarta Timur 13430.",
                    "coordinates": [
                        106.8908627,
                        -6.2330517
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/628179988322",
                    "traveloka": "https://www.traveloka.com/id-id/activities/country/product/e3a-klinik-jakarta-covid-19-rapid-test-indonesian-citizens-wni-only-2001356151324"
                },
                "fullyBooked": false,
                "name": "E3A Clinic",
                "openHours": [
                    {
                        "id": "60750d637c60d22977577b7b",
                        "time": {
                            "open": "10:00",
                            "closed": "17:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "60750d637c60d22977577b7c",
                        "time": {
                            "open": "10:00",
                            "closed": "17:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "60750d637c60d22977577b7d",
                        "time": {
                            "open": "10:00",
                            "closed": "17:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "60750d637c60d22977577b7e",
                        "time": {
                            "open": "10:00",
                            "closed": "17:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "60750d637c60d22977577b7f",
                        "time": {
                            "open": "10:00",
                            "closed": "17:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "60750d637c60d22977577b80",
                        "time": {
                            "open": "10:00",
                            "closed": "17:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 10.00 - 17.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "10.00 - 17.00"
                    }
                ]
            },
            {
                "id": "5ed887b8ace861be35cd7b68",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/nayya/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/nayya/tampak-depan.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/nayya/ruang-tunggu.jpg"
                ],
                "telephone": "+6281293505544",
                "location": {
                    "id": "5ed884c75d7f99fac1b6ff0b",
                    "coordinate": {
                        "latitude": -6.29308,
                        "longitude": 106.7964627
                    },
                    "postalCode": null,
                    "googleMapLink": "https://g.page/nayyabeautyclinic?share",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfc8d",
                        "name": "DKI Jakarta"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfca0",
                        "type": "city",
                        "name": "Kota Jakarta Selatan"
                    },
                    "address": "Jl. Intan RSPP C1 / Jl. Tunda Bara No. 3, Cilandak Barat, Cilandak, Jakarta Selatan 12430",
                    "coordinates": [
                        106.7964627,
                        -6.29308
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6281293505544",
                    "traveloka": "https://www.traveloka.com/id-id/activities/country/product/klinik-pintar-idi-nayya-clinic-jakarta-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152093"
                },
                "fullyBooked": false,
                "name": "Nayya Beauty & Skin Clinic",
                "openHours": [
                    {
                        "id": "607d4325f0cf6382ecf0b873",
                        "time": {
                            "open": "09:00",
                            "closed": "16:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "607d4325f0cf6382ecf0b874",
                        "time": {
                            "open": "09:00",
                            "closed": "16:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "607d4325f0cf6382ecf0b875",
                        "time": {
                            "open": "09:00",
                            "closed": "16:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "607d4325f0cf6382ecf0b876",
                        "time": {
                            "open": "09:00",
                            "closed": "16:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "607d4325f0cf6382ecf0b877",
                        "time": {
                            "open": "09:00",
                            "closed": "16:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "607d4325f0cf6382ecf0b878",
                        "time": {
                            "open": "09:00",
                            "closed": "16:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "607d4325f0cf6382ecf0b879",
                        "time": {
                            "open": "09:00",
                            "closed": "13:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 09.00 - 16.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "09.00 - 16.00"
                    }
                ]
            },
            {
                "id": "5ed8a1bfb20f2868071604e2",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/indosehat-2003/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/indosehat-2003/indosehat-2003-1.jpeg"
                ],
                "telephone": "+6281387636369",
                "location": {
                    "id": "5ed8a7dd4c96bfebdc425049",
                    "coordinate": {
                        "latitude": -6.292996,
                        "longitude": 106.5184473
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/tiW6BWqpU9bUYTRQA",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfc8d",
                        "name": "DKI Jakarta"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfcb6",
                        "type": "city",
                        "name": "Kota Jakarta Utara"
                    },
                    "address": "Jl. Warakas Gg. 8 No.59A, RT.6/RW.11, Warakas, Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14370",
                    "coordinates": [
                        106.5184473,
                        -6.292996
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6281387636369",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-indosehat-warakas-jakarta-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152125"
                },
                "fullyBooked": false,
                "name": "Klinik Indosehat Warakas",
                "openHours": [
                    {
                        "id": "607d44b2f0cf6382ecf0c355",
                        "time": {
                            "open": "08:00",
                            "closed": "19:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "607d44b2f0cf6382ecf0c356",
                        "time": {
                            "open": "08:00",
                            "closed": "19:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "607d44b2f0cf6382ecf0c357",
                        "time": {
                            "open": "08:00",
                            "closed": "19:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "607d44b2f0cf6382ecf0c358",
                        "time": {
                            "open": "08:00",
                            "closed": "19:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "607d44b2f0cf6382ecf0c359",
                        "time": {
                            "open": "08:00",
                            "closed": "19:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "607d44b2f0cf6382ecf0c35a",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 08.00 - 19.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "08.00 - 19.00"
                    }
                ]
            },
            {
                "id": "5ed8abfd8d09fc401c51d813",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/assyifa/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/assyifa/asysyifa-1.jpeg"
                ],
                "telephone": "+6282277862599",
                "location": {
                    "id": "606d218c09361500798ec816",
                    "coordinate": {
                        "latitude": 3.5950292,
                        "longitude": 98.6655886
                    },
                    "postalCode": "20236",
                    "googleMapLink": "https://goo.gl/maps/Ywo1yHvqpCXBCYBK8",
                    "province": {
                        "id": "5b34f47766f9f9647e2e1909",
                        "name": "Sumatera Utara"
                    },
                    "city": {
                        "id": "5b34f47766f9f9647e2e190a",
                        "type": "city",
                        "name": "Kota Medan"
                    },
                    "address": "Jl. Waringin No.10, Sekip, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20236",
                    "coordinates": [
                        98.6655886,
                        3.5950292
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6282277862599",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-assyifa-medan-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152124"
                },
                "fullyBooked": false,
                "name": "Klinik Assyifa",
                "openHours": [
                    {
                        "id": "5ed88f8910c8659a55d34ff2",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "5ed88f8adff1ea014a20d6a0",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "5ed88f8b5e9bec99a5276ae1",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "5ed88f8b40ed75397c5b9288",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "5ed88f8cfcf78e452dce47eb",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "5ed88f8c81323b90421e65c9",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 09.00 - 14.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "09.00 - 14.00"
                    }
                ]
            },
            {
                "id": "5ed8b00dcaf82e02b667f6d4",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/al-ikhlas/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/al-ikhlas/al-ikhlas-1.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/al-ikhlas/al-ikhlas-2.jpg"
                ],
                "telephone": "+6282188041664",
                "location": {
                    "id": "606d212009361500798ec689",
                    "coordinate": {
                        "latitude": 3.5999299,
                        "longitude": 98.7096647
                    },
                    "postalCode": "20223",
                    "googleMapLink": "https://goo.gl/maps/M9SAiu24QTjMq9JE6",
                    "province": {
                        "id": "5b34f47766f9f9647e2e1909",
                        "name": "Sumatera Utara"
                    },
                    "city": {
                        "id": "5b34f47766f9f9647e2e190a",
                        "type": "city",
                        "name": "Kota Medan"
                    },
                    "address": "Jl. Selamat Ketaren No.38, Bandar Selamat, Kota Medan, Sumatera Utara",
                    "coordinates": [
                        98.7096647,
                        3.5999299
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6282188041664",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-al-ikhlas-medan-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152123"
                },
                "fullyBooked": false,
                "name": "Klinik Al Ikhlas",
                "openHours": [
                    {
                        "id": "6007db75e24b73001a7445bf",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "6007db75e24b73001a7445c0",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "6007db75e24b73001a7445c1",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "6007db75e24b73001a7445c2",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "6007db75e24b73001a7445c3",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "6007db75e24b73001a7445c4",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 09.00 - 14.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "09.00 - 14.00"
                    }
                ]
            },
            {
                "id": "5ed9ba24444283b2bd6508fd",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/penyejuk/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/penyejuk/tampak-depan-1.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/penyejuk/ruang-tes.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/penyejuk/tampak-depan-2.jpg"
                ],
                "telephone": "+6281380382102",
                "location": {
                    "id": "606d1fcc09361500798ec502",
                    "coordinate": {
                        "latitude": -0.8532851,
                        "longitude": 100.3343971
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/qo8tCcRBJjr5mc6T6",
                    "province": {
                        "id": "5b34f47766f9f9647e2e173e",
                        "name": "Sumatera Barat"
                    },
                    "city": {
                        "id": "5b34f47766f9f9647e2e173f",
                        "type": "city",
                        "name": "Kota Padang"
                    },
                    "address": "Wisma Mayang Sani Blok B No. 1, Jl. Adinegoro, Batang Kabung Ganting, Kec. Koto Tangah, Kota Padang, Sumatera Barat 25586",
                    "coordinates": [
                        100.3343971,
                        -0.8532851
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6281380382102",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-penyejuk-padang-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152122"
                },
                "fullyBooked": false,
                "name": "Klinik Penyejuk",
                "openHours": [
                    {
                        "id": "5ed88f8910c8659a55d34ff2",
                        "time": {
                            "open": "09:00",
                            "closed": "17:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "5ed88f8adff1ea014a20d6a0",
                        "time": {
                            "open": "09:00",
                            "closed": "17:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "5ed88f8b5e9bec99a5276ae1",
                        "time": {
                            "open": "09:00",
                            "closed": "17:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "5ed88f8b40ed75397c5b9288",
                        "time": {
                            "open": "09:00",
                            "closed": "17:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "5ed88f8cfcf78e452dce47eb",
                        "time": {
                            "open": "09:00",
                            "closed": "17:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "5ed88f8c81323b90421e65c9",
                        "time": {
                            "open": "09:00",
                            "closed": "17:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 09.00 - 17.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "09.00 - 17.00"
                    }
                ]
            },
            {
                "id": "5ed9ceae102f149158743e92",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/utama-amanda/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/utama-amanda/utama-amanda-1.jpeg"
                ],
                "telephone": "+6282285428731",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": 0.5208074,
                        "longitude": 101.4489096
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/njpWZdj3P3Zx3zpi9",
                    "province": {
                        "id": "5b34f47666f9f9647e2e12b0",
                        "name": "Riau"
                    },
                    "city": {
                        "id": "5b34f47666f9f9647e2e12b1",
                        "type": "city",
                        "name": "Kota Pekanbaru"
                    },
                    "address": "Jl. Kartini No. 31, Sumahilang, Pekanbaru Kota, Kota Pekanbaru, Riau 28156",
                    "coordinates": [
                        101.4489096,
                        0.5208074
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6282285428731",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-amanda-pekanbaru-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152121"
                },
                "fullyBooked": false,
                "name": "Klinik Utama Amanda",
                "openHours": [
                    {
                        "id": "5ed88f8910c8659a55d34ff2",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "5ed88f8adff1ea014a20d6a0",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "5ed88f8b5e9bec99a5276ae1",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "5ed88f8b40ed75397c5b9288",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "5ed88f8cfcf78e452dce47eb",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "5ed88f8c81323b90421e65c9",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "5ee027f55b7e86cf6ef7ff7a",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 08.00 - 16.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "08.00 - 16.00"
                    }
                ]
            },
            {
                "id": "5edf2bb14ca97f53b59a7066",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/satmoko/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/satmoko/satmoko-1.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/satmoko/satmoko-2.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/satmoko/satmoko-3.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/satmoko/satmoko-4.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/satmoko/satmoko-5.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/satmoko/satmoko-6.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/satmoko/satmoko-7.jpg"
                ],
                "telephone": "+628112999653",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -7.0027787,
                        "longitude": 110.3983803
                    },
                    "postalCode": null,
                    "googleMapLink": "https://g.page/kliniksatmoko?share",
                    "province": {
                        "id": "5b34f47466f9f9647e2e0176",
                        "name": "Jawa Tengah"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2e0177",
                        "type": "city",
                        "name": "Kota Semarang"
                    },
                    "address": "Jl. Kelud Raya No.4, RT 04 RW 05, Kelurahan Petompon, Kecamatan Gajahmungkur, Kota Semarang, Jawa Tengah 50237",
                    "coordinates": [
                        110.3983803,
                        -7.0027787
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/628112999653",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-satmoko-semarang-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152129"
                },
                "fullyBooked": false,
                "name": "Klinik Satmoko",
                "openHours": [
                    {
                        "id": "6090f8320be42d47882cbb2f",
                        "time": {
                            "open": "09:00",
                            "closed": "20:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "6090f8320be42d47882cbb30",
                        "time": {
                            "open": "09:00",
                            "closed": "20:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "6090f8320be42d47882cbb31",
                        "time": {
                            "open": "09:00",
                            "closed": "20:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "6090f8320be42d47882cbb32",
                        "time": {
                            "open": "09:00",
                            "closed": "20:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "6090f8320be42d47882cbb33",
                        "time": {
                            "open": "09:00",
                            "closed": "20:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "6090f8320be42d47882cbb34",
                        "time": {
                            "open": "09:00",
                            "closed": "20:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "6090f8320be42d47882cbb35",
                        "time": {
                            "open": "09:00",
                            "closed": "20:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 09.00 - 20.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "09.00 - 20.00"
                    }
                ]
            },
            {
                "id": "5edf2fda00386727a4acb7c1",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/pratama-derla/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/pratama-derla/ruang-pendaftaran.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/pratama-derla/tampak-depan2.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/pratama-derla/ruang-tunggu.JPG"
                ],
                "telephone": "085271770791",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -6.98133,
                        "longitude": 110.4153733
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/myoy4qjW2ZZYyPFPA",
                    "province": {
                        "id": "5b34f47466f9f9647e2e0176",
                        "name": "Jawa Tengah"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2e0177",
                        "type": "city",
                        "name": "Kota Semarang"
                    },
                    "address": "Jl. MH.Thamrin No.74 Kembangsari Semarang Jawa Tengah 50133",
                    "coordinates": [
                        110.4153733,
                        -6.98133
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/628156530390",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-derla-semarang-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152157"
                },
                "fullyBooked": false,
                "name": "Klinik Pratama Derla",
                "openHours": [
                    {
                        "id": "6006a447e24b73001a72896a",
                        "time": {
                            "open": "10:00",
                            "closed": "18:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "6006a447e24b73001a72896b",
                        "time": {
                            "open": "10:00",
                            "closed": "18:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "6006a447e24b73001a72896c",
                        "time": {
                            "open": "10:00",
                            "closed": "18:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "6006a447e24b73001a72896d",
                        "time": {
                            "open": "10:00",
                            "closed": "18:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "6006a447e24b73001a72896e",
                        "time": {
                            "open": "10:00",
                            "closed": "18:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "6006a447e24b73001a72896f",
                        "time": {
                            "open": "10:00",
                            "closed": "12:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 10.00 - 18.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "10.00 - 18.00"
                    }
                ]
            },
            {
                "id": "5edf31df334472a0f5548a6b",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/mugi-sehat/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/mugi-sehat/tampak-depan.png",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/mugi-sehat/ruang-tunggu.png",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/mugi-sehat/ruang-tes.png"
                ],
                "telephone": "+62818452762",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -7.0311109,
                        "longitude": 110.4046935
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/1yyR3DU2tQUu53297",
                    "province": {
                        "id": "5b34f47466f9f9647e2e0176",
                        "name": "Jawa Tengah"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2e0177",
                        "type": "city",
                        "name": "Kota Semarang"
                    },
                    "address": "Jl. Jatingaleh III No.37, Jatingaleh, Kec. Candisari, Kota Semarang, Jawa Tengah 50254",
                    "coordinates": [
                        110.4046935,
                        -7.0311109
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/62818452762",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-mugi-sehat-semarang-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152214"
                },
                "fullyBooked": false,
                "name": "Klinik Pratama Mugi Sehat",
                "openHours": [
                    {
                        "id": "5ed88f8910c8659a55d34ff2",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "5ed88f8adff1ea014a20d6a0",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "5ed88f8b5e9bec99a5276ae1",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "5ed88f8b40ed75397c5b9288",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "5ed88f8cfcf78e452dce47eb",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "5ed88f8c81323b90421e65c9",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "5edf32832ece60c639c281b4",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 08.00 - 20.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "08.00 - 20.00"
                    }
                ]
            },
            {
                "id": "5ee0420d7190fa63b0b318b1",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/surya-medika/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/surya-medika/surya-medika-1.jpeg"
                ],
                "telephone": "+6281393032358",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -7.5104723,
                        "longitude": 110.7740649
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/jiWvWd1xQJVg9PuKA",
                    "province": {
                        "id": "5b34f47466f9f9647e2e0176",
                        "name": "Jawa Tengah"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2e0382",
                        "type": "regency",
                        "name": "Kab. Boyolali"
                    },
                    "address": "Jl. Cendrawasih No. 41 Wangkis, Ngasinan, RT 02/07 Dibal, Ngemplak, Boyolali, Jawa Tengah 57375",
                    "coordinates": [
                        110.7740649,
                        -7.5104723
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6281390533683",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-surya-medika-boyolali-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152192"
                },
                "fullyBooked": false,
                "name": "Klinik Pratama Surya Medika",
                "openHours": [
                    {
                        "id": "5ed88f8910c8659a55d34ff2",
                        "time": {
                            "open": "07:30",
                            "closed": "19:30"
                        },
                        "day": 1
                    },
                    {
                        "id": "5ed88f8adff1ea014a20d6a0",
                        "time": {
                            "open": "07:30",
                            "closed": "19:30"
                        },
                        "day": 2
                    },
                    {
                        "id": "5ed88f8b5e9bec99a5276ae1",
                        "time": {
                            "open": "07:30",
                            "closed": "19:30"
                        },
                        "day": 3
                    },
                    {
                        "id": "5ed88f8b40ed75397c5b9288",
                        "time": {
                            "open": "07:30",
                            "closed": "19:30"
                        },
                        "day": 4
                    },
                    {
                        "id": "5ed88f8cfcf78e452dce47eb",
                        "time": {
                            "open": "07:30",
                            "closed": "19:30"
                        },
                        "day": 5
                    },
                    {
                        "id": "5ed88f8c81323b90421e65c9",
                        "time": {
                            "open": "07:30",
                            "closed": "13:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "5edf32832ece60c639c281b4",
                        "time": {
                            "open": "16:00",
                            "closed": "19:30"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 07.30 - 19.30",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "07.30 - 19.30"
                    }
                ]
            },
            {
                "id": "5ee0450cd0e81482fe4fbadf",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/milla-husada/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/milla-husada/tampak-depan.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/milla-husada/ruang-tunggu.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/milla-husada/ruang-test.jpg"
                ],
                "telephone": "+62811295432",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -7.5464309,
                        "longitude": 110.6768812
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/nRo6r9SBq2FbZMA47",
                    "province": {
                        "id": "5b34f47466f9f9647e2e0176",
                        "name": "Jawa Tengah"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2e0382",
                        "type": "regency",
                        "name": "Kab. Boyolali"
                    },
                    "address": "Jl. Raya Pengging KM 2 Banyudono Boyolali Jawa Tengah 27373",
                    "coordinates": [
                        110.6768812,
                        -7.5464309
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/62811295432",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-milla-husada-boyolali-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152191"
                },
                "fullyBooked": false,
                "name": "Klinik Pratama Rawat Inap Milla Husada",
                "openHours": [
                    {
                        "id": "607d4ae428c1ac97fc688ad6",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "607d4ae428c1ac97fc688ad7",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "607d4ae428c1ac97fc688ad8",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "607d4ae428c1ac97fc688ad9",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "607d4ae428c1ac97fc688ada",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "607d4ae428c1ac97fc688adb",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "607d4ae428c1ac97fc688adc",
                        "time": {
                            "open": "08:00",
                            "closed": "20:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 08.00 - 20.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "08.00 - 20.00"
                    }
                ]
            },
            {
                "id": "5ee049f7e46e4792dbbe9c1e",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/rejosari-husada/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/rejosari-husada/rejosari-2.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/rejosari-husada/rejosari-3.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/rejosari-husada/rejosari-4.jpg"
                ],
                "telephone": "+628156690840",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -7.5703227,
                        "longitude": 110.6365219
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/dKkEpwK8nbPppyfBA",
                    "province": {
                        "id": "5b34f47466f9f9647e2e0176",
                        "name": "Jawa Tengah"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2e0396",
                        "type": "regency",
                        "name": "Kab. Klaten"
                    },
                    "address": "Jl. Delanggu- Polanharjo No.41, Rejosari, Sabrang, Kec. Delanggu, Kabupaten Klaten, Jawa Tengah 57471",
                    "coordinates": [
                        110.6365219,
                        -7.5703227
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/628156690840",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-rejosari-husada-solo-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152190"
                },
                "fullyBooked": false,
                "name": "Klinik Pratama Rawat Inap Rejosari Husada",
                "openHours": [
                    {
                        "id": "607d4b44f0cf6382ecf0deeb",
                        "time": {
                            "open": "09:00",
                            "closed": "12:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "607d4b44f0cf6382ecf0deec",
                        "time": {
                            "open": "09:00",
                            "closed": "12:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "607d4b44f0cf6382ecf0deed",
                        "time": {
                            "open": "09:00",
                            "closed": "12:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "607d4b44f0cf6382ecf0deee",
                        "time": {
                            "open": "09:00",
                            "closed": "12:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "607d4b44f0cf6382ecf0deef",
                        "time": {
                            "open": "09:00",
                            "closed": "12:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "607d4b44f0cf6382ecf0def0",
                        "time": {
                            "open": "09:00",
                            "closed": "12:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "607d4b44f0cf6382ecf0def1",
                        "time": {
                            "open": "09:00",
                            "closed": "12:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 09.00 - 12.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "09.00 - 12.00"
                    }
                ]
            },
            {
                "id": "5ee04bb7a70fef58749a80a7",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-pakem/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-pakem/muhammadiyah-pakem-1.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-pakem/muhammadiyah-pakem-2.jpg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-pakem/muhammadiyah-pakem-3.jpg"
                ],
                "telephone": "+6287734267900",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -7.668159,
                        "longitude": 110.4194553
                    },
                    "postalCode": null,
                    "googleMapLink": "https://g.page/pku-pakem?share",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfc39",
                        "name": "DI Yogyakarta"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfc5b",
                        "type": "regency",
                        "name": "Kab. Sleman"
                    },
                    "address": "Jl. Pakem - Cangkringan KM 0.4, Pakembinangun, Pakem, Area Sawah, Pakembinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55582",
                    "coordinates": [
                        110.4194553,
                        -7.668159
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6287734267900",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-pku-muhammadiyah-pakem-yogyakarta-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152189"
                },
                "fullyBooked": false,
                "name": "Klinik PKU Muhammadiyah Pakem",
                "openHours": [
                    {
                        "id": "60750f6bf0cf6382ecd74435",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "60750f6bf0cf6382ecd74436",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "60750f6bf0cf6382ecd74437",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "60750f6bf0cf6382ecd74438",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "60750f6bf0cf6382ecd74439",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "60750f6bf0cf6382ecd7443a",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "60750f6bf0cf6382ecd7443b",
                        "time": {
                            "open": "09:00",
                            "closed": "14:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 09.00 - 14.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "09.00 - 14.00"
                    }
                ]
            },
            {
                "id": "5ee05806d55058dd27e72f02",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-wates/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-wates/tampak-depan.png",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-wates/ruang-pendaftaran.png",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-wates/ruang-tunggu.png",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/muhammadiyah-wates/ruang-pemeriksaan.png"
                ],
                "telephone": "+6285868353666",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -7.867429,
                        "longitude": 110.1476175
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/VJ8Fe4JswAYtkb9g7",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfc39",
                        "name": "DI Yogyakarta"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfc6d",
                        "type": "regency",
                        "name": "Kab. Kulon Progo"
                    },
                    "address": "Jl. KH Ahmad Dahlan No. 11, Dipan, Wates, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta 55651",
                    "coordinates": [
                        110.1476175,
                        -7.867429
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6285868353666",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-pku-muhammadiyah-yk-wates-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152188"
                },
                "fullyBooked": false,
                "name": "Klinik Pratama PKU Muhammadiyah Wates",
                "openHours": [
                    {
                        "id": "5ed88f8910c8659a55d34ff2",
                        "time": {
                            "open": "07:00",
                            "closed": "21:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "5ed88f8adff1ea014a20d6a0",
                        "time": {
                            "open": "07:00",
                            "closed": "21:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "5ed88f8b5e9bec99a5276ae1",
                        "time": {
                            "open": "07:00",
                            "closed": "21:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "5ed88f8b40ed75397c5b9288",
                        "time": {
                            "open": "07:00",
                            "closed": "21:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "5ed88f8cfcf78e452dce47eb",
                        "time": {
                            "open": "07:00",
                            "closed": "21:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "5ed88f8c81323b90421e65c9",
                        "time": {
                            "open": "07:00",
                            "closed": "21:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "5edf32832ece60c639c281b4",
                        "time": {
                            "open": "07:00",
                            "closed": "21:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 07.00 - 21.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "07.00 - 21.00"
                    }
                ]
            },
            {
                "id": "5ee08b423458468ccdf94057",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/amc/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/amc/amc-1.jpg"
                ],
                "telephone": "+628170618400",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -7.7996812,
                        "longitude": 110.3496425
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/yTE8QUongZBk7rhz8",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfc39",
                        "name": "DI Yogyakarta"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfc3a",
                        "type": "city",
                        "name": "Kota Yogyakarta"
                    },
                    "address": "Jl. HOS Cokroaminoto No. 17B, Pakuncen, Wirobrajan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55252",
                    "coordinates": [
                        110.3496425,
                        -7.7996812
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/628170618400"
                },
                "fullyBooked": false,
                "name": "Asri Medical Center",
                "openHours": [
                    {
                        "id": "6090f9c477e2cf001bde131d",
                        "time": {
                            "open": "09:00",
                            "closed": "19:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "6090f9c477e2cf001bde131e",
                        "time": {
                            "open": "09:00",
                            "closed": "19:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "6090f9c477e2cf001bde131f",
                        "time": {
                            "open": "09:00",
                            "closed": "19:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "6090f9c477e2cf001bde1320",
                        "time": {
                            "open": "09:00",
                            "closed": "19:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "6090f9c477e2cf001bde1321",
                        "time": {
                            "open": "09:00",
                            "closed": "19:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "6090f9c477e2cf001bde1322",
                        "time": {
                            "open": "09:00",
                            "closed": "19:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 09.00 - 19.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "09.00 - 19.00"
                    }
                ]
            },
            {
                "id": "5ee09158efff3af4def90ba4",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/labuh-baru/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/labuh-baru/tampak-depan.jpeg",
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/labuh-baru/labuh-baru-2.jpg"
                ],
                "telephone": "+62811769045",
                "location": {
                    "id": "604ae6e600c5680055417783",
                    "coordinate": {
                        "latitude": 0.5169422,
                        "longitude": 101.4244432
                    },
                    "postalCode": "28291",
                    "googleMapLink": "https://goo.gl/maps/GxoQ16RpeRtUdue68",
                    "province": {
                        "id": "5b34f47666f9f9647e2e12b0",
                        "name": "Riau"
                    },
                    "city": {
                        "id": "5b34f47666f9f9647e2e12b1",
                        "type": "city",
                        "name": "Kota Pekanbaru"
                    },
                    "address": "Jl. Durian No.45B RT001 RW005 Kel, Labuh Baru Timur, Payung Sekaki, Pekanbaru, Riau 28291",
                    "coordinates": [
                        101.4244432,
                        0.5169422
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/62811769045",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-labuh-baru-pekanbaru-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152099"
                },
                "fullyBooked": false,
                "name": "Klinik Pratama Labuh Baru",
                "openHours": [
                    {
                        "id": "5ed88f8910c8659a55d34ff2",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "5ed88f8adff1ea014a20d6a0",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "5ed88f8b5e9bec99a5276ae1",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "5ed88f8b40ed75397c5b9288",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "5ed88f8cfcf78e452dce47eb",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "5ed88f8c81323b90421e65c9",
                        "time": {
                            "open": "08:00",
                            "closed": "16:00"
                        },
                        "day": 6
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 08.00 - 16.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "08.00 - 16.00"
                    }
                ]
            },
            {
                "id": "5ee094c6863684256c2d0781",
                "logo": "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/rizky-medika/logo.png",
                "pictures": [
                    "https://medigo-images.s3-ap-southeast-1.amazonaws.com/clinics/rizky-medika/rizky-medika-1.jpeg"
                ],
                "telephone": "+6285369550973",
                "location": {
                    "id": "5ed9cf7ed456c91560bb066e",
                    "coordinate": {
                        "latitude": -3.726578,
                        "longitude": 102.4588088
                    },
                    "postalCode": null,
                    "googleMapLink": "https://goo.gl/maps/TfKyG9LX2sH3AKp77",
                    "province": {
                        "id": "5b34f47466f9f9647e2dfbb0",
                        "name": "Bengkulu"
                    },
                    "city": {
                        "id": "5b34f47466f9f9647e2dfbcd",
                        "type": "regency",
                        "name": "Kab. Bengkulu Tengah"
                    },
                    "address": "Jl. Bengkulu - Kepahiang KM 14 No. 002, Kembang Seri, Kec. Talang Empat, Kabupaten Bengkulu Tengah 38385",
                    "coordinates": [
                        102.4588088,
                        -3.726578
                    ]
                },
                "bookableOnline": true,
                "externalUrl": {
                    "whatsapp": "https://wa.me/6285369550973",
                    "traveloka": "https://www.traveloka.com/id-id/activities/indonesia/product/klinik-pintar-idi-rizky-medika-bengkulu-covid-19-rapid-test-indonesian-citizens-wni-only-2001356152098"
                },
                "fullyBooked": false,
                "name": "Klinik Rizky Medika",
                "openHours": [
                    {
                        "id": "5ed88f8910c8659a55d34ff2",
                        "time": {
                            "open": "08:00",
                            "closed": "21:00"
                        },
                        "day": 1
                    },
                    {
                        "id": "5ed88f8adff1ea014a20d6a0",
                        "time": {
                            "open": "08:00",
                            "closed": "21:00"
                        },
                        "day": 2
                    },
                    {
                        "id": "5ed88f8b5e9bec99a5276ae1",
                        "time": {
                            "open": "08:00",
                            "closed": "21:00"
                        },
                        "day": 3
                    },
                    {
                        "id": "5ed88f8b40ed75397c5b9288",
                        "time": {
                            "open": "08:00",
                            "closed": "21:00"
                        },
                        "day": 4
                    },
                    {
                        "id": "5ed88f8cfcf78e452dce47eb",
                        "time": {
                            "open": "08:00",
                            "closed": "21:00"
                        },
                        "day": 5
                    },
                    {
                        "id": "5ed88f8c81323b90421e65c9",
                        "time": {
                            "open": "08:00",
                            "closed": "21:00"
                        },
                        "day": 6
                    },
                    {
                        "id": "5f3b85fcda9a089e2efd6678",
                        "time": {
                            "open": "08:00",
                            "closed": "21:00"
                        },
                        "day": 7
                    }
                ],
                "services": [
                    {
                        "id": "5ff83ac45d2f7948a42a259d",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antibodi"
                    },
                    {
                        "id": "5ff83add5d2f7948a42a259f",
                        "mdId": null,
                        "status": "active",
                        "name": "Tes Rapid Antigen"
                    }
                ],
                "statusOpen": "Buka hari ini 08.00 - 21.00",
                "isOpen": true,
                "groupOpenHours": [
                    {
                        "days": "Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu",
                        "time": "08.00 - 21.00"
                    }
                ]
            }
        ]
        commit('setClinics', clinics)
    }
}

const covidModule = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default covidModule
