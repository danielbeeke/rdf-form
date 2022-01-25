export const attributesDiff = (attributes, callback = null) => node => {
  for (const key of Object.keys(attributes)) {
    if (attributes[key]) {
      const attributeValue = Array.isArray(attributes[key]) ? attributes[key].join(' ') : attributes[key]
      if (typeof attributeValue !== 'string' || attributeValue.trim()) node.setAttribute(key, attributeValue)
    }
    else {
      node.removeAttribute(key)
    }

    if (callback) {
      callback(node)
      callback = null
    }
  }
};