class FormElementRegistryClass {

  readonly elements: Array<any> = []

  register (formElement: any) {
    this.elements.push(formElement)
  }

  get (type: string) {
    const formElement = this.elements.find(element => element.type === type)
    if (formElement) return new formElement()
  }

}

export const FormElementRegistry = new FormElementRegistryClass()
