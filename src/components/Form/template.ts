export const template = `form
        .form-container-content
            .form-container__fields
               each value in content  
                | !{value}
            .form-container__buttons
                input(type="submit", value=submitName, class="input-field-submit")
                if(linkPath && linkName)
                   a(href=linkPath) !{linkName}`;
