// Validation para
$confirmationMessage = $('<p></p>');
$confirmationMessage.attr('class', 'confirmation-para hide-para')
$confirmationMessage.append('<i class="fas fa-check-circle"></i>');
$confirmationMessage.append('<span class="confirmation-text"></span>');

$closeAnchor = $("<a></a>");
$closeAnchor.attr({
    "href": "#",
    "id": "close-anchor",
    "onclick": "$hideValidationMessage()"
})
$closeAnchor.append('<i class="fas fa-times"></i>');
$confirmationMessage.append($closeAnchor);
$('body').append($confirmationMessage);

// Form Creation
$form = $('<form></form>')
$form.css("border", "1px solid black")
$form.attr('id', 'myForm')
$form.append('<input id="fName" type="text" style="width:310px" name="firstName" placeholder="First Name">');
$form.append('<br>');
$form.append('<br>');
$form.append('<input id="lName" type="text" style="width:310px" name="lastName" placeholder="Last Name">');
$form.append('<br>');
$form.append('<p class="gender-para">Gender</p>');
$form.append('<input class="radio-button" type="radio" name="gender">');
$form.append('<span>M</span>');
$form.append('<br>');
$form.append('<input class="radio-button" type="radio" name="gender">');
$form.append('<span>F</span>');
$form.append('<br>');
$form.append('<br>');

$textArea = $('<textarea>')
$textArea.attr({
    "id": "text-area",
    "rows": "6",
    "cols": "42",
    "placeholder": "Your Message Here",
    "name": "textArea"
})

$form.append($textArea);
$form.append('<img class="form-image" src="https://via.placeholder.com/265x310" >');
$form.append('<button class="form-button">Submit</button>');
$('body').append($form);

$formValidation = $('#myForm').on('submit', function (e) {
    e.preventDefault()

    if ($('#fName')[0].value !== '') {
        $('#fName').attr('class', 'valid-input')
    } else {
        $('#fName').attr('class', 'invalid-input')
    }

    $('#fName').on('input', function (e) {
        if (e.target.value !== '') {
            $('#fName').attr('class', 'valid-input')
        } else {
            $('#fName').attr('class', 'invalid-input')
        }
    })

    if ($('#lName')[0].value !== '') {
        $('#lName').attr('class', 'valid-input')
    } else {
        $('#lName').attr('class', 'invalid-input')
    }

    $('#lName').on('input', function (e) {
        if (e.target.value !== '') {
            $('#lName').attr('class', 'valid-input')
        } else {
            $('#lName').attr('class', 'invalid-input')
        }
    })

    if ($textArea[0].value !== '') {
        $textArea.attr('class', 'valid-input')
    } else {
        $textArea.attr('class', 'invalid-input')
    }

    $textArea.on('input', function (e) {
        if (e.target.value !== '') {
            $textArea.attr('class', 'valid-input')
        } else {
            $textArea.attr('class', 'invalid-input')
        }
    })

    if ($('#fName')[0].value !== '' && $('#lName')[0].value !== '' && $textArea[0].value !== '') {
        $('.confirmation-text')[0].textContent = `Thank you for contacting us, ${$('#fName')[0].value}`
        $confirmationMessage.toggleClass('hide-para visible')

        //Log input fields
        console.log(`First Name: ${$('#fName')[0].value}`)
        console.log(`Last Name: ${$('#lName')[0].value}`)
        console.log(`Message: ${$textArea[0].value}`)

        // Remove inserted data
        $('#myForm')[0].reset()
    }
})

$hideValidationMessage = function () {
    $confirmationMessage.toggleClass('visible hide-para')
}