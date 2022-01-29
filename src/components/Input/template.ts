export const template = `label.input-label(for=inputName) #{labelName}
        input(type=type id=inputName class=!isValid ?"input-field input-field-error":"input-field" name=inputName value=inputValue)
        if(!isValid)
          span.error-text #{errorText}`;
