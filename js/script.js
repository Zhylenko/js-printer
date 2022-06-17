"use strict";
window.addEventListener("load", function () {

    let 
        textareaBlock = document.getElementById('textarea'),
        textarea = textareaBlock.querySelector('p'),
        buttonsBlock = document.getElementsByClassName('editor__buttons')[0],
        textAlignButtons = document.getElementsByClassName('text-align'),
        lineHeight = document.getElementById('line-height'),
        fontSize = document.getElementById('font-size'),
        fontFamily = document.getElementById('font-family'),
        textareaSize = document.getElementById('textarea-size'),
        print = document.getElementById('print');

    //Text align
    textarea.style.textAlign = 'center'
    for(let button of textAlignButtons) {
        button.addEventListener('click', function() {
            textarea.style.textAlign = this.dataset.value;
        });
    }

    //Line height
    textarea.style.lineHeight = `12px`;
    lineHeight.addEventListener('input', function() {
        textarea.style.lineHeight = this.value + `px`;
    });

    //Font size
    textarea.style.fontSize = `12px`;
    fontSize.addEventListener('input', function() {
        if(parseInt(this.value) > 0) {
            if(parseInt(lineHeight.value) != 0) {
                lineHeight.value = lineHeight.value * this.value / parseInt(textarea.style.fontSize);
                textarea.style.lineHeight = lineHeight.value + `px`;
            }else {
                lineHeight.value = this.value;
                textarea.style.lineHeight = lineHeight.value + `px`;
            }
        }

        textarea.style.fontSize = this.value + `px`;
    });

    //Font family
    fontFamily.addEventListener('input', function() {
        textarea.style.fontFamily = this.value;
    });

    //Textarea size
    textareaSize.addEventListener('input', function() {
        textareaBlock.classList = `textarea`;
        textareaBlock.classList.add(this.value);
    });

    //Print result
    print.addEventListener('click', function() {
        let 
            border = textareaBlock.style.border;
        
        buttonsBlock.style.display = 'none';
        textareaBlock.style.border = 'none';

        window.print();

        buttonsBlock.style.display = 'block';
        textareaBlock.style.border = border;

    });
});