import KlinikPintarAPI from "../../api/KlinikPintarAPI"

const state = () => {
  return {
    provinces: []
  }
}

const mutations = {
  setProvinces(state, provinces) {
    state.provinces = provinces
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
  }
}

const covidModule = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default covidModule
