$(document).ready(function () {
    function formClass(id) {
        this.id = id;
        this.div;

        this.init = function () {
            return $(id);
        }

        this.addItem = function (div, label, item) {
            this.div = this.append(div);
            this.div.append(label);
            this.div.append(item);
        }

    }

    function formItemClass(name, tag, lable) {
        this.name = name;
        this.tag = tag;

        this.addLabel = function(lable){
            return this.append(lable);
        }

        
    }



    $('#input-type').on('change', '', function (e) {
        let inputType = $(this).children('option:selected').val();
        if (inputType == 'radio' || inputType == 'checkbox') {
            $('#editor-basic').hide();
            $('#editor-more').show(200)
        }
        else {
            $('#editor-more').hide();
            $('#editor-basic').show(200)
        }
    });

    $('#add-form').on('click', function () {
        let inputType = $('#input-type').children('option:selected').val();
        let inputBacsicLabel = $('#input-basic-label').val();
        let inputBacsicName = $('#input-basic-name').val();
        let inputBacsicValue = $('#input-basic-value').val();
        let div = '<div class="form__item"></div>';
        let label = '<label for="">' + inputBacsicLabel + '</label>'
        let input = '<input type="' + inputType + '" name="' + inputBacsicName + '" value="' + inputBacsicValue + '">';
        let divtart = $('#form-content').append(div)
        divtart.append(label);
        divtart.append(input);
    })
});