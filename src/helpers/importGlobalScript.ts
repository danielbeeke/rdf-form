const imported = new Set()

export const importGlobalScript = async (url: string, name: string) => {
    if (imported.has(name) || window[name]) return Promise.resolve(window[name])

    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = url
        script.onload = () => {
            imported.add(name)
            resolve(window[name])
        }
        document.head.appendChild(script)    
    })    
}