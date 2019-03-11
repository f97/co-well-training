$(document).ready(function () {
    function formClass() {

        this.id;
        this.form
        this.content;
        this.group;
        this.extraGroup;
        this.inputGroup;

        this.init = function (id, content) {
            this.id = $('#' + id);
            this.content = $('#' + content);
            return this.form;

        }

        this.addGroup = function (div, label, item) {
            div.append(label);
            if ($.isArray(item)) {
                for (let i = 0; i < item.length; i++) {
                    div.append(item[i]);
                }
            } else {
                div.append(item);
            }
            this.group = this.content.append(div);
            return this.group;
        }

        this.addExtraGroup = function (container, div, label, item) {
            div.append(label);
            div.append(item);
            this.inputGroup = container.append(div);
            this.extraGroup = this.content.append(this.inputGroup);

            // this.extraGroup = container.append(this.inputGroup);
            return this.extraGroup;
        }


        this.changeStyle = function (style) {

        }

        this.submit = function () {

        }
    }

    function formItemClass() {
        this.name;
        this.lable;
        this.type;
        this.lableTag;
        this.divTag;
        this.inputTag;

        this.init = function (type, label, name, value) {
            this.name = name;
            this.label = label;
            this.value = value;
            this.type = type;
            this.buildItem();
        }

        this.buildItem = function () {
            this.addDiv('input-group');
            this.addLabel(this.label);
            if (this.type == 'textarea') {
                this.addTextarea()
            } else {
                this.addInput(this.type, this.value, this.name);
            }
        }

        this.addDiv = function (divClass) {
            this.divTag = $("<div/>", {
                class: divClass
            });;
            return this.divTag;
        }

        this.addLabel = function (label) {
            this.lableTag = $("<label/>", {
                text: label
            });;
            return this.lableTag;
        }

        this.addInput = function (type, value, name) {
            if (type == 'radio' || type == 'checkbox') {
                this.inputTag = $('<input/>', {
                    type: type,
                    value: value,
                    name: name,
                    class: 'input'
                });
                this.inputTag = this.inputTag.add("<b>" + value + "</b>");
            }
            else {
                this.inputTag = $('<input/>', {
                    type: type,
                    value: value,
                    name: name,
                    class: 'input'
                });
            }
            return this.inputTag;
        }

        this.addTextarea = function () {
            this.inputTag = $('<textarea/>', {
                value: this.value,
                name: this.name,
                class: 'textarea'
            });
            return this.inputTag;
        }
    }



    $('#add-form').on('click', function () {
        let form = new formClass('form');
        form.init('form', 'form-content');
        let inputType = $('#input-type').children('option:selected').val();
        let item = new formItemClass();
        if (inputType == 'radio' || inputType == 'checkbox') {
            var inputNames = [];
            var inputValues = [];
            $('.extra-name').each(function () {
                inputNames.push($(this).val());
            });
            $('.extra-value').each(function () {
                inputValues.push($(this).val());
            });
            var itemTags = [];
            for (let i = 0; i < inputNames.length; i++) {
                itemTags.push(item.addInput(inputType, inputValues[i], inputNames[i]));
            }
            item.addLabel($('#input-label').val());
            item.addDiv('input-group')
            form.addGroup(item.divTag, item.lableTag, itemTags);
        }
        else {
            item.init(inputType, $('#input-label').val(), $('#input-name').val(), $('#input-value').val());
            form.addGroup(item.divTag, item.lableTag, item.inputTag);
        }
    })

    $('#more-item').on('click', function () {
        $(".editor__content__extra:first").clone(true, true).insertAfter(".editor__content__main > div:nth-child(2)")
        // let form = new formClass('editor-form');
        // form.init('editor-form', 'editor-main');
        // let item = new formItemClass();
        // form.addExtraGroup(item.addDiv('editor__content__extra'), item.addDiv('form-group'), item.addLabel('Value'), item.addInput('input', 'text', ''));
    })

    $('.btn-remove-extra').on('click', function () {
        $(this).parent().remove();
    })

    $('#input-type').on('change', '', function (e) {
        let inputType = $(this).children('option:selected').val();
        if (inputType == 'radio' || inputType == 'checkbox') {
            $('#more-button').show(200);
            $('.editor__content__extra').show(200);
        }
        else {
            $('#more-button').hide(200);
            $('.editor__content__extra').hide(200);
        }
    });

    $('#theme').on('change', '', function (e) {
        let theme = $(this).children('option:selected').val();
        if (theme == 'blue') {
            $('#form-target').addClass('blue');
        } else {
            $('#form-target').removeClass('blue');
        }
    });
    $("#form-active").keypress(function (event) {
        $("#form-target").attr("action", $('#form-active').val());
    });
})