function DanhSachNhanVien(){
    this.mangNV = [];
    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    this.indexXoa = function(tk){
        var indexFind = -1;
        this.mangNV.map(function(sv, index){
            if(sv.taikhoan === tk){
                indexFind = index;
            }
        })
        return indexFind;
    }
    this.xoa = function(tk){
        var index = this.indexXoa(tk);
        if(index > -1){
            this.mangNV.splice(index, 1);
        }
    }

    this.capNhat = function(sv){
        var indexFind = this.indexXoa(sv.taikhoan);
        if(indexFind > -1){
            dsnv.mangNV[indexFind] = sv;
            return true;
        }
        else{
            return false;
        }
    }
}

DanhSachNhanVien.prototype.timKiemTheoLoai = function (tuTim) {
    var mangTK = [];
    var tuThuong = tuTim.toLowerCase();

    var xoaKhoangTrang = tuThuong.replace(/\s/g, "");

    this.mangNV.map(function (nv) {
        var tenThuong = nv.xepLoai.toLowerCase();
        var tenReplace = tenThuong.replace(/\s/g, "");

        var result = tenReplace.indexOf(xoaKhoangTrang);

        if (result > -1) {
            mangTK.push(nv);
        }

    });

    return mangTK;

}