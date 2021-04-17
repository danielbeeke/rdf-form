export const attributesDiff = attributes => node => {
  for (const { name } of node.attributes) {
    if (!(name in attributes) || attributes[name] === false) {
      node.removeAttribute(name)
    }
  }
  
  for (const key of Object.keys(attributes)) {
    if (attributes[key]) {
      const attributeValue = Array.isArray(attributes[key]) ? attributes[key].join(' ') : attributes[key]
      if (typeof attributeValue !== 'string' || attributeValue.trim()) node.setAttribute(key, attributeValue)
    }
  }
};