function NhanVien(tk, hoten, email, matkhau, ngaylam, luongcb, chucvu, giolam) {
    this.taikhoan = tk;
    this.ho_ten = hoten;
    this.email = email;
    this.mk = matkhau;
    this.date = ngaylam;
    this.luongCb = luongcb;
    this.title = chucvu;
    this.gio = giolam;
    this.tongLuong = 0;
    this.xepLoai = '';

    this.tinhTongLuong = function () {
        if (this.title === 'Sếp') {
            this.tongLuong = (this.luongCb * 3).toLocaleString();
        }
        else if (this.title === 'Trưởng phòng') {
            this.tongLuong = (this.luongCb * 2).toLocaleString();
        }
        else {
            this.tongLuong = (this.luongCb).toLocaleString();
        }

    }

    this.xepLoai = function () {
        if (this.gio >= 192) {
            this.xepLoai = 'Nhân viên xuất sắc';
        }
        else if (this.gio >= 176) {
            this.xepLoai = 'Nhân viên giỏi';
        }
        else if (this.gio >= 160) {
            this.xepLoai = 'Nhân viên khá';
        }
        else {
            this.xepLoai = 'Nhân viên trung bình';
        }
    }

}