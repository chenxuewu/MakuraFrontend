const state = {
  dict: new Array(),
   // 訂單狀態
   orderStates: [],
   orderStatesMap: [],

   //訂單列表標籤
   orderTabList:[],
   orderTabListMap:[],

   //訂單操作型別
   orderOperateTypeList: [],
   orderOperateTypeListMap:[]
}
const mutations = {
  SET_DICT: (state, { key, value }) => {
    if (key !== null && key !== "") {
      state.dict.push({
        key: key,
        value: value
      })
    }
  },
  REMOVE_DICT: (state, key) => {
    try {
      for (let i = 0; i < state.dict.length; i++) {
        if (state.dict[i].key == key) {
          state.dict.splice(i, i)
          return true
        }
      }
    } catch (e) {
    }
  },
  CLEAN_DICT: (state) => {
    state.dict = new Array()
  },
}

const actions = {
  // 設定字典
  setDict({ commit }, data) {
    commit('SET_DICT', data)
  },
  // 刪除字典
  removeDict({ commit }, key) {
    commit('REMOVE_DICT', key)
  },
  // 清空字典
  cleanDict({ commit }) {
    commit('CLEAN_DICT')
  },

  //獲取訂單狀態列表
  getOrderStates({ state }, that) {
    if (state.orderStates?.length > 0) {
      return;
    }
    // 列表-訂單狀態
    that.getDicts("order_status").then((res) => {
      let list = res.data;
      list = list.map((item) => {
        item["label"] = item.dictLabel;
        item["value"] = +item.dictValue;
        return item;
      });
      let map = {};
      list.forEach((item) => {
        let value = map[item.label];
        if (value) {
          value.push(item.value);
        } else {
          map[item.label] = [item.value];
        }
      });
      let listMap = Array.from(map);
      for (let key in map) {
        listMap.push({
          label: key,
          value: map[key].join(","),
        });
      }
      state.orderStatesMap = listMap;
      state.orderStates = list;
    });
  },

  //獲取訂單狀態列表
  getOrderTabList({ state }, that) {
    if (state.orderTabList?.length > 0) {
      return;
    }
    // 列表-訴求狀態
    that.getDicts("order_tab_list").then((res) => {
      let list = res.data;
      list = list.map((item) => {
        item["label"] = item.dictLabel;
        item["value"] = +item.dictValue;
        return item;
      });
      let map = {};
      list.forEach((item) => {
        let value = map[item.label];
        if (value) {
          value.push(item.value);
        } else {
          map[item.label] = [item.value];
        }
      });
      let listMap = Array.from(map);
      for (let key in map) {
        listMap.push({
          label: key,
          value: map[key].join(","),
        });
      }
      state.orderTabListMap = listMap;
      state.orderTabList = list;
    });
  },


  //獲取訂單操作型別列表
  getOrderOperateTypeList({ state }, that) {
    if (state.orderOperateTypeList?.length > 0) {
      return;
    }
    return new Promise((resolve,rejct)=>{
      that.getDicts("order_operate_type").then((res) => {
        let list = res.data;
        list = list.map((item) => {
          item["label"] = item.dictLabel;
          item["value"] = +item.dictValue;
          return item;
        });
        let map = {};
        list.forEach((item) => {
          let value = map[item.label];
          if (value) {
            value.push(item.value);
          } else {
            map[item.label] = [item.value];
          }
        });
        let listMap = Array.from(map);
        for (let key in map) {
          listMap.push({
            label: key,
            value: map[key].join(","),
          });
        }
        state.orderOperateTypeListMap = listMap;
        state.orderOperateTypeList = list;
        resolve();
      });
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

