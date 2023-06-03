const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
    var data = JSON.parse(localStorage.getItem("DSNV"));
    if (data !== null) {
        HienThi(data);
        dsnv.mangNV = data;
    }
}
getLocalStorage();


document.getElementById('btnThemNV').onclick =
    function ThemNV() {
        var tk = document.getElementById('tknv').value;
        var hoten = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var matkhau = document.getElementById('password').value;
        var ngaylam = document.getElementById('datepicker').value;
        var luongcb = document.getElementById('luongCB').value;
        var chucvu = document.getElementById('chucvu').value;
        var giolam = document.getElementById('gioLam').value;

        var isValid = true;
        // Check TK
        isValid &= validation.checkEmty(tk, "tbTKNV", "Tài khoản không được để trống") && validation.checkTK(tk, "tbTKNV", "Tài khoản không đúng định dạng") &&  validation.checkTkTrung(tk, "tbTKNV", "Tài khoản không được trùng", dsnv.mangNV);

        // Ten NV
        isValid &= validation.checkEmty(hoten, "tbTen", "Tên không được để trống") && validation.checkName(hoten, "tbTen", "Tên chỉ gồm các ký tự chữ");

        // Email
        isValid &= validation.checkEmty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");

        // Password
        isValid &= validation.checkEmty(matkhau, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPassword(matkhau, "tbMatKhau", "Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt (6 -> 10 kí tự)");

        // Date
        isValid &= validation.checkEmty(ngaylam, "tbNgay", "Ngày làm không được để trống") && validation.checkDate(ngaylam, "tbNgay", "Ngày làm không đúng định dạng");

        // Luong
        isValid &= validation.checkEmty(luongcb, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkLuongCB(luongcb, "tbLuongCB", "Lương cơ bản không hợp lệ");

        // Chuc vu
        isValid &= validation.checkChucVu(chucvu, "tbChucVu", "Chức vụ không hợp lệ");

        // Time
        isValid &= validation.checkEmty(giolam, "tbGiolam", "Giờ làm không được để trống") && validation.checkTime(giolam, "tbGiolam", "Giờ làm không hợp lệ");

        if (isValid) {
            var nv = new NhanVien(tk, hoten, email, matkhau, ngaylam, Number(luongcb), chucvu, giolam);
            nv.tinhTongLuong();
            nv.xepLoai();
            dsnv.themNV(nv);

            setLocalStorage();
            HienThi(dsnv.mangNV);
        }

    }

function HienThi(mang) {
    var content = '';

    mang.map(function (nv) {
        var trSV = `<tr>
            <td>${nv.taikhoan}</td>
            <td>${nv.ho_ten}</td>
            <td>${nv.email}</td>
            <td>${nv.date}</td>
            <td>${nv.title}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
                <button class="btn btn-danger" onclick="Xoa('${nv.taikhoan}')"  >Xóa</button>
                <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="XemThongTin('${nv.taikhoan}')" >Xem</button>
            </td>
        </tr>`;
        content += trSV;
    })

    document.getElementById("tableDanhSach").innerHTML = content;
}

function Xoa(tk) {
    dsnv.xoa(tk);
    HienThi(dsnv.mangNV);
    setLocalStorage();
}

function XemThongTin(tk) {
    var indexFind = dsnv.indexXoa(tk);
    if (indexFind > -1) {
        var nv = dsnv.mangNV[indexFind];
        document.getElementById('tknv').value = nv.taikhoan;
        document.getElementById('tknv').disabled = true;

        document.getElementById('name').value = nv.ho_ten;
        document.getElementById('email').value = nv.email;
        document.getElementById('password').value = nv.mk;
        document.getElementById('datepicker').value = nv.date;
        document.getElementById('luongCB').value = nv.luongCb;
        document.getElementById('chucvu').value = nv.title;
        document.getElementById('gioLam').value = nv.gio;
    }
}

document.getElementById('btnCapNhat').onclick =
    function CapNhat() {
        var tk = document.getElementById('tknv').value;
        var hoten = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var matkhau = document.getElementById('password').value;
        var ngaylam = document.getElementById('datepicker').value;
        var luongcb = document.getElementById('luongCB').value;
        var chucvu = document.getElementById('chucvu').value;
        var giolam = document.getElementById('gioLam').value;

        var nv = new NhanVien(tk, hoten, email, matkhau, ngaylam, Number(luongcb), chucvu, giolam);
        nv.tinhTongLuong();
        nv.xepLoai();
        var result = dsnv.capNhat(nv);
        if (result) {
            setLocalStorage();
            HienThi(dsnv.mangNV);
        }
        else {
            alert('Cập nhật thất bại');
        }
    }

document.getElementById('searchName').onkeyup =
    function () {
        var tuTim = document.getElementById('searchName').value;
        var mangTK = dsnv.timKiemTheoLoai(tuTim);
        HienThi(mangTK);
    }