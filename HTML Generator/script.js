let elementPickerCounter = null
let fontFamilyFieldCounter = null
let fontWeightFieldCounter = null
let textAlignFieldCounter = null
let divElementCounter = null
let inputFieldsContainerCounter = null
let htmlElement = null

breakLineCreator = () => {
    return document.createElement('br')
}

inputFieldMarginCreator = (element) => {
    element.classList.add('inputFieldsMargin')

}

document.getElementById('elementSelect').onchange = (event) => {
    elementPickerCreator(event)
}

elementPickerCreator = (event) => {
    htmlElement = event.target.value
    console.log(htmlElement)
    if (htmlElement != null && htmlElement != '') {
        elementPickerCounter++
        console.log(elementPickerCounter)
        let selectedElement = selectedElementCreator(htmlElement, event.target.id)
        elementPickerGenerator(selectedElement)
    }
}

const elementPickerGenerator = (selectedElement) => {

    let elementPickerLabel = document.createElement('label')
    elementPickerLabel.setAttribute('for', `selectElem${elementPickerCounter}`)
    elementPickerLabel.innerHTML = 'Select html element:'
    let elementPicker = document.createElement('Select')
    elementPicker.setAttribute('id', `selectElem${elementPickerCounter}`)
    let option1 = document.createElement('option')
    option1.setAttribute('value', '')
    option1.innerText = 'Select'
    let option2 = document.createElement('option')
    option2.setAttribute('value', 'div')
    option2.innerText = 'div'
    let option3 = document.createElement('option')
    option3.setAttribute('value', 'p')
    option3.innerText = 'p'
    elementPicker.appendChild(option1)
    elementPicker.appendChild(option2)
    elementPicker.appendChild(option3)
    // document.getElementById('main').appendChild(elementPicker)
    let breakLine1 = breakLineCreator()
    selectedElement.after(breakLine1)
    breakLine1.after(elementPickerLabel)
    let breakLine = breakLineCreator()
    elementPickerLabel.after(breakLine)
    breakLine.after(elementPicker)
    elementPicker.onchange = (event) => {
        elementPickerCreator(event)
    }
}

selectedElementCreator = (htmlElement, creatorElementId) => {
    let selectedElement = null
    if (htmlElement == 'div') {
        inputFieldsContainerCounter++
        let inputFieldsContainer = document.createElement('div')
        inputFieldsContainer.setAttribute('id', `inputFieldsContainer${inputFieldsContainerCounter}`)
        let breakline1 = breakLineCreator()
        let breakline2 = breakLineCreator()
        document.getElementById(creatorElementId).after(breakline1)
        breakline1.after(breakline2)
        breakline2.after(inputFieldsContainer)
        divElementCounter++
        fontFamilyFieldCounter++

        let fontFamilylabel = document.createElement('label')
        fontFamilylabel.innerText = 'Font Family: '
        fontFamilylabel.setAttribute('for', `fontFamily${fontFamilyFieldCounter}`)
        inputFieldsContainer.appendChild(fontFamilylabel)
        let fontFamilyField = document.createElement('input')
        fontFamilyField.setAttribute('value', '');
        fontFamilyField.setAttribute('placeholder', 'Leave blank for default')
        fontFamilyField.setAttribute('id', `fontFamily${fontFamilyFieldCounter}`)
        fontFamilylabel.after(fontFamilyField)

        fontWeightFieldCounter++
        let fontWeightLabel = document.createElement('label')
        fontWeightLabel.innerText = 'Font Weight: '
        fontWeightLabel.setAttribute('for', `fontFamily${fontWeightFieldCounter}`)
        inputFieldMarginCreator(fontWeightLabel)
        inputFieldsContainer.append(fontWeightLabel)
        let fontWeightField = document.createElement('select')
        let option1 = document.createElement('option')
        option1.setAttribute('value', '')
        option1.innerText = 'Select'
        let option2 = document.createElement('option')
        option2.setAttribute('value', 'bold')
        option2.innerText = 'Bold'
        fontWeightField.appendChild(option1)
        fontWeightField.appendChild(option2)
        fontWeightField.setAttribute('id', `fontFamily${fontWeightFieldCounter}`)
        fontWeightLabel.after(fontWeightField)

        textAlignFieldCounter++
        let textAlignLabel = document.createElement('label')
        textAlignLabel.innerText = 'Text Alignment: '
        textAlignLabel.setAttribute('for', `textAlign${textAlignFieldCounter}`)
        inputFieldMarginCreator(textAlignLabel)
        inputFieldsContainer.append(textAlignLabel)

        let textAlignField = document.createElement('select')
        let option3 = document.createElement('option')
        option3.setAttribute('value', '')
        option3.innerText = 'Select'
        let option4 = document.createElement('option')
        option4.setAttribute('value', 'left')
        option4.innerText = 'Left'
        let option5 = document.createElement('option')
        option5.setAttribute('value', 'right')
        option5.innerText = 'Right'
        let option6 = document.createElement('option')
        option6.setAttribute('value', 'center')
        option6.innerText = 'Center'
        let option7 = document.createElement('option')
        option7.setAttribute('value', 'justify')
        option7.innerText = 'Justify'
        textAlignField.appendChild(option3)
        textAlignField.appendChild(option4)
        textAlignField.appendChild(option5)
        textAlignField.appendChild(option6)
        textAlignField.appendChild(option7)
        textAlignField.setAttribute('id', `textAlign${textAlignFieldCounter}`)
        textAlignLabel.after(textAlignField)

        selectedElement = document.createElement('div')
        selectedElement.setAttribute('id', `divBox${divElementCounter}`)
        selectedElement.style.minHeight = '40px'
        selectedElement.style.border = '1px solid black'
        selectedElement.contentEditable = 'true'
        let breakLine3 = breakLineCreator()
        inputFieldsContainer.after(breakLine3)
        breakLine3.after(selectedElement)
    }
    return selectedElement
}

const onClickGeenrate = () => {

}
