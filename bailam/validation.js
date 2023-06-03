function Validation() {
    this.checkEmty = function (value, spanID, message) {
        if (value === '') {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }
        document.getElementById(spanID).innerHTML = '';
        document.getElementById(spanID).style.display = 'none';
        return true;
    }

    this.checkTK = function (value, spanID, message) {
        var parttern = /^[A-Z a-z 0-9]+$/;
        if (value.match(parttern) && value.length >= 4 && value.length <= 9) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkTkTrung = function (value, spanID, message, mangNV) {
        var trung = mangNV.some(function (sv) {
            return sv.taikhoan === value;
        })

        if (trung) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";

        return true;
    }

    this.checkName = function (value, spanID, message) {

        var parttern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        if (value.match(parttern)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";

        return false;


    }

    this.checkEmail = function (value, spanID, message) {
        var parttern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(parttern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.checkPassword = function (value, spanID, message) {

        var parttern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.match(parttern) && value.length >= 6 && value.length <= 10) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.checkDate = function (value, spanID, message) {
        var parttern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        if (value.match(parttern) && value.length >= 6 && value.length <= 10) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;


    }

    this.checkLuongCB = function (value, spanID, message) {
        if (value >= 1000000 && value <= 20000000) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkTime = function (value, spanID, message) {
        if (value >= 80 && value <= 200) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkChucVu = function (value, spanID, message) {
        if (value === 'Sếp' || value === 'Trưởng phòng' || value === 'Nhân viên') {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
}