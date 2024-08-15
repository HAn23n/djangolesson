//เซฟใช้ ajax py ตัวรับ แทนก

var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.type = "text/css";
linkElement.href = "{% static 'css/all_member.css' %}"; 
document.head.appendChild(linkElement);



$('#addbutton').click(function() {
    if (!validateForm()) {
        $('#addModal').modal('show');
}});


function updateTypeStatus(selectElement) {
    var selectedValue = selectElement.value;
    document.getElementById('type_status').value = selectedValue;
}

function validateForm() {
    if (document.getElementById('firstname').value == '' ||
        document.getElementById('lastname').value == '' ||
        document.getElementById('id_card').value == '' ||
        document.getElementById('address').value == '' ||
        document.getElementById('birth_date').value == '' ||
        document.getElementById('phone_number').value == '' ||
        document.getElementById('email').value == '') {

            $('#alertMsg').show();
            setTimeout(function() {
                $('#alertMsg').hide();
            }, 3000);
            return false;         
}


var add_idCard = document.getElementById('id_card').value;
var add_phoneNumber = document.getElementById('phone_number').value;

            if (add_idCard.length !== 13 || isNaN(add_idCard)) {
                $('#add_alertIDCard').show();
                return false;
            } else {
                $('#add_alertIDCard').hide();
            }

            if (add_phoneNumber.length !== 10 || isNaN(add_phoneNumber)) {
                $('#add_alertPhoneNumber').show();
                return false;
            } else {
                $('#add_alertPhoneNumber').hide();
            }
                return true;  
  
                
}


function checknumber(){
$(document).ready(function(){
    $("#id_card").on('input', function(){
        var add_idCard = $(this).val();
        var isNumeric = /^\d+$/.test(add_idCard);
        var isValidLength = add_idCard.length == 13;
        if(!isNumeric || !isValidLength) {
            $("#add_alertIDCard").show();
        } else {
            $("#add_alertIDCard").hide();
        }
    });
});
        
$(document).ready(function(){
        $("#phone_number").on('input', function(){
            var add_phone_number = $(this).val();
            var isNumeric = /^\d+$/.test(add_phone_number);
            var isValidLength = add_phone_number.length === 10;
            if(!isNumeric || !isValidLength) {
                $("#add_alertPhoneNumber").show();
            } else {
                $("#add_alertPhoneNumber").hide();
            }
        });
});

}




function editValided(){
var edit_phoneNumber = document.getElementById('phone_number').value;
    if(edit_phoneNumber.length !== 10 || isNaN(edit_phoneNumber)){
        $('#edit_alertPhoneNumber').show();
        return false;
    }else{
        $('#edit_alertPhoneNumber').hide();
        return true;  
    }
        
}

function resetmsg() {

    document.getElementById("addForm").reset();

    $('#alertMsg').hide();
    $('#alertIDCard').hide();
    $('#alertPhoneNumber').hide();
}

$('button[data-bs-dismiss="modal"]').click(function() {
    resetmsg();
});





var scrolled = 400; $(window).scroll(function() {
    if ( $(window).scrollTop() > scrolled ) {
      $('a.btt').fadeIn('slow');
    } else {
      $('a.btt').fadeOut('slow');
    }
});



$('a.btt').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 700);
    return false;
});

function confirmDelete(memberId){
    if(confirm("คุณจะลบสมาชิกนี้หรือไม่")){
        document.getElementById('delete' + memberId).submit();

    }
}



$(document).ready(function(){
    var visibleRowCount = $("tbody tr:visible").length;
    $("#memlenght").text("Member List Total: " + visibleRowCount);

    $("#toggle").click(function(){
        $("tbody tr").each(function(){
            var inactive_fg = $(this).find("td:eq(8)").text().trim();
            if (inactive_fg !== "False") {
                $(this).toggle();
            }
        });
        var icon = $(this).find("i");
        if (icon.hasClass("fa-eye")) {
            icon.removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
            icon.removeClass("fa-eye-slash").addClass("fa-eye");
        }

        visibleRowCount = $("tbody tr:visible").length;
        $("#memlenght").text("Member List Total: " + visibleRowCount);
    });
});


function updateTypeStatus(selectElement) {
    var selectedValue = selectElement.value;
    document.getElementById('member_type_status').value = selectedValue;
}


window.handleSelectChange = function() {
    var selectedValue = document.getElementById('srow').value;
    var rowsPerPage = parseInt(selectedValue);
    var rows = document.querySelectorAll('#memberTable tbody tr');

    if (selectedValue === 'All Row') {
        rows.forEach(function(row) {
            row.style.display = '';
        });

        var oldPaginationControls = document.querySelector('.pagination-controls');
        if (oldPaginationControls) {
            oldPaginationControls.parentNode.removeChild(oldPaginationControls);
        }
    } else {
        var visibleRows = rowsPerPage;

        rows.forEach(function(row, index) {
            if (index < visibleRows) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });

        var oldPaginationControls = document.querySelector('.pagination-controls');
        if (oldPaginationControls) {
            oldPaginationControls.parentNode.removeChild(oldPaginationControls);
        }

        var totalPages = Math.ceil(rows.length / rowsPerPage);
        var currentPage = 1;

        var paginationControls = document.createElement('div');
        paginationControls.classList.add('pagination-controls');

        var prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.classList.add('btn', 'btn-primary', 'me-2');
        prevButton.disabled = true;
        prevButton.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });

        var nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.classList.add('btn', 'btn-primary');
        nextButton.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });

        paginationControls.appendChild(prevButton);
        paginationControls.appendChild(nextButton);
        document.getElementById('pagination-container').appendChild(paginationControls);

        function updatePagination() {
            var start = (currentPage - 1) * rowsPerPage;
            var end = start + rowsPerPage;

            rows.forEach(function(row, index) {
                if (index >= start && index < end) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });

            if (currentPage === 1) {
                prevButton.disabled = true;
            } else {
                prevButton.disabled = false;
            }

            if (currentPage === totalPages) {
                nextButton.disabled = true;
            } else {
                nextButton.disabled = false;
            }
        }
    }
};


//////////js with jquery

// ///edit 
function updateMember(memberId) {
    var formData = new FormData(document.getElementById('editForm' + memberId));
    $.ajax({
        type: 'POST',
        url: 'update/' + memberId + '/',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            if (response.success) {
                updateTableRow(memberId, response.member);
                $('#updateAlert').show();
                setTimeout(function() {
                    $('#updateAlert').hide(); 
                }, 1500);
            } else {
                alert('Error updating member: ' + response.errors);
            }
        },
        error: function(xhr, status, error) {
            alert('Error: ' + error);
        }
    });
}


function updateTableRow(memberId, memberData) {
    var tableRow = $('#memberTable').find('tr[data-member-id="' + memberId + '"]');
    if (tableRow.length > 0) {
        tableRow.find('td[data-field="id_card"]').text(memberData.id_card);
        tableRow.find('td[data-field="firstname"]').text(memberData.firstname);
        tableRow.find('td[data-field="lastname"]').text(memberData.lastname);
        tableRow.find('td[data-field="birth_date"]').text(memberData.birth_date);
        tableRow.find('td[data-field="address"]').text(memberData.address);
        tableRow.find('td[data-field="phone_number"]').text(memberData.phone_number);
        tableRow.find('td[data-field="email"]').text(memberData.email);
        tableRow.find('td[data-field="inactive_fg"]').text(memberData.inactive_fg);
    }
}


///edit checkdata

function checkPhoneNumber(input) {
    var phoneNumber = input.value;
    var errorDiv1 = document.getElementById('phedit2');
    var errorDiv2 = document.getElementById('phedit1');
    var updateButton = input.closest('.modal-content').querySelector('#updateButton');

    var regex = /^[0-9]+$/;
    if (!regex.test(phoneNumber)) {
        errorDiv1.style.display = 'block';
        errorDiv2.style.display = 'none';
        updateButton.disabled = true;
        return;
    }

    if (phoneNumber.length !== 10) {
        errorDiv1.style.display = 'none';
        errorDiv2.style.display = 'block';
        updateButton.disabled = true;
        return;
    }

    errorDiv1.style.display = 'none';
    errorDiv2.style.display = 'none';
    updateButton.disabled = false;
}


