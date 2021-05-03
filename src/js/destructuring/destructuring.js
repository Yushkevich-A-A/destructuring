export function destructuring({ special = [] }) {
  for (const prop of special) {
    if (!prop.description) {
      prop.description = 'Описание недоступно';
    }
  }
  return special;
}
