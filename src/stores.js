import { writable, derived } from 'svelte/store'

export const stored_config = writable({});
export const stored_data = writable({});

function filterByRing(data, ring) {
  return data.filter(item => item.quadrant === ring).reduce((result, item) => {
    if (!result[item.ring])
      result[item.ring] = [];
    result[item.ring].push(item);
    return result;
  }, []);
}

export const ring_data = derived(stored_data, ring => {
  return filterByRing($stored_data, ring)
  return `Welcome ${$username}`
})
