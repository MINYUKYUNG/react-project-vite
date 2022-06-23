import { atom, selector } from 'recoil';

export const saveCart = atom({
  key: 'saveCart',
  default: {
    // 1: { id: 1, count: 2 } 형식으로 추가된다.
  }
});

export const updateCart = selector({
  key: 'updateCart',
  get: () => { // 원본훼손X
    return 0;
  },
  set: ({ set }, payload) => { // 원본훼손O
    const { getParams, num } = payload;
    let save = {};

    if (localStorage.getItem('cart_data')) {
      save = JSON.parse(localStorage.getItem('cart_data'))
    } else {
      save = {}
    }

    // saveCart 값 바꾸고 -> localStorage.setItem 업데이트
    if (save[getParams]) { // 있으면, 기존것에 추가
      if (save[getParams].count === 1 && num === -1) {
        save[getParams] = { id: getParams, count: 1 }
      } else {
        save[getParams].count = save[getParams].count + num
      }
    } else { // undefined면, 새로 추가
      if (num === 1) {
        save[getParams] = { id: getParams, count: 1 };
      }
    }

    localStorage.setItem('cart_data', JSON.stringify(save))

    set(saveCart, save)
  }
});

export const deleteItem = selector({
  key: 'deleteItem',
  get: () => { // 원본훼손X
    return 0;
  },
  set: ({ set, get }, payload) => { // 원본훼손O
    const { id } = payload;
    let save = {}
    for (const key in get(saveCart)) {
      if (Number(key) !== id) save = {...save, [key]: get(saveCart)[key]};
    }

    set(saveCart, save)
    localStorage.setItem('cart_data', JSON.stringify(save))
  }
});