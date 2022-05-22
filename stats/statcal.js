import { student, stu_detail, stu_list, stu_skill } from "../info/student.js"
import { equipList } from "../info/equipment.js"
import { stu_bond } from "../info/bond.js"

let input_name = "유우카"
let input_lev = 73
let input_star = 5
let input_exlev = 5
let input_s1lev = 10
let input_s2lev = 10
let input_s3lev = 10
let input_eq1 = 0
let input_eq2 = 0
let input_eq3 = 0
let input_bond = 1

var lst = document.getElementById("name_list")

stu_list.forEach(element => {
    var option = document.createElement('option')
    option.value = element[0]
    lst.appendChild(option)
});
let stu = new student (input_lev,input_star, input_name)    

display()

const input = document.querySelector('#input');
input.addEventListener('click', () => {
    input_name = document.getElementById('input_name').value
    input_lev = document.getElementById('input_lev').value
    input_star = document.getElementById('input_star').value
    input_exlev = document.getElementById('input_exlev').value
    input_s1lev = document.getElementById('input_s1lev').value
    input_s2lev = document.getElementById('input_s2lev').value
    input_s3lev = document.getElementById('input_s3lev').value
    input_eq1 = document.getElementById('input_eq1').value;
    input_eq2 =input_eq2 = document.getElementById('input_eq2').value;
    input_eq3 = document.getElementById('input_eq3').value;
    input_bond = document.getElementById('input_bond').value;

    if ( isNaN(input_lev) || ( input_lev < 1 || input_lev > 100 )) {
        alert("학생 레벨 오류\n처리할 수 없는 수입니다!\n1~100사이의 정수를 입력해주시기 바랍니다!")
        throw "처리할 수 없는 레벨입니다! 입력된 레벨 : "+input_lev
    } else if ( isNaN(input_star) || ( input_star < 1 || input_star > 5 )) { 
        alert("학생 성급 오류\n처리할 수 없는 수입니다!\n1~5사이의 정수를 입력해주시기 바랍니다!")
        throw "처리할 수 없는 성급입니다! 입력된 성급 : "+input_star
    }
    if ( isNaN(input_exlev) || ( input_exlev < 1 || input_exlev > 5 )) { 
        input_exlev = 5
    }
    if ( isNaN(input_s1lev) || ( input_s1lev < 1 || input_s1lev > 10 )) { 
        input_s1lev = 10
    }
    if ( isNaN(input_s2lev) || ( input_s2lev < 1 || input_s2lev > 10 )) { 
        input_s2lev = 10
    }
    if ( isNaN(input_s3lev) || ( input_s3lev < 1 || input_s3lev > 10 )) { 
        input_s3lev = 10
    }

    stu = new student (input_lev,input_star, input_name)
    display()

});


function display() {
    var stu_path = "../img/"+stu.name+".png"

    set_image("stu_img", stu_path)

    if (input_eq1 > 0 && input_eq1 <=6) {
        stu.bonus_equip(stu.equip1, input_eq1, equipList)
        document.getElementById("equip1_detail").innerHTML = stu.equip1_detail;
    } else { document.getElementById("equip1_detail").innerHTML = "장비 없음"; }
    
    if (input_eq2 > 0 && input_eq2 <=6) {
        stu.bonus_equip(stu.equip2, input_eq2, equipList)
        document.getElementById("equip2_detail").innerHTML = stu.equip2_detail;
    } else { document.getElementById("equip2_detail").innerHTML = "장비 없음"; }

    if (input_eq3 > 0 && input_eq3 <=6) {
        stu.bonus_equip(stu.equip3, input_eq3, equipList)
        document.getElementById("equip3_detail").innerHTML = stu.equip3_detail;
    } else { document.getElementById("equip3_detail").innerHTML = "장비 없음"; }

    stu.bonus_sum_atk += isNaN(parseFloat(document.getElementById('bonus_atk').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_atk').innerHTML)
    stu.bonus_times_atk += isNaN(parseFloat(document.getElementById('bonus_atkP').innerHTML)) ? 0 : parseFloat(document.getElementById('bonus_atkP').innerHTML)
    stu.bonus_sum_hp += isNaN(parseFloat(document.getElementById('bonus_hp').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_hp').innerHTML)
    stu.bonus_times_hp += isNaN(parseFloat(document.getElementById('bonus_hpP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_hpP').innerHTML)
    stu.bonus_sum_def += isNaN(parseFloat(document.getElementById('bonus_def').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_def').innerHTML)
    stu.bonus_times_def += isNaN(parseFloat(document.getElementById('bonus_defP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_defP').innerHTML)
    stu.bonus_sum_heal += isNaN(parseFloat(document.getElementById('bonus_heal').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_heal').innerHTML)
    stu.bonus_times_heal += isNaN(parseFloat(document.getElementById('bonus_healP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_healP').innerHTML)
    stu.bonus_sum_evade += isNaN(parseFloat(document.getElementById('bonus_evade').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_evade').innerHTML)
    stu.bonus_times_evade += isNaN(parseFloat(document.getElementById('bonus_evadeP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_evadeP').innerHTML)
    stu.bonus_sum_crate += isNaN(parseFloat(document.getElementById('bonus_crate').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_crate').innerHTML)
    if (isNaN(stu.btcr)) {
        stu.btcr = 0
    }
    if (isNaN(parseFloat(document.getElementById('bonus_crateP').innerHTML))) {
        stu.btcr += 0
    } else { stu.btcr += parseFloat(document.getElementById('bonus_crateP').innerHTML)}

    stu.bonus_sum_cdmg += isNaN(parseFloat(document.getElementById('bonus_cdmg').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_cdmg').innerHTML)
    stu.bonus_times_cdmg += isNaN(parseFloat(document.getElementById('bonus_cdmgP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_cdmgP').innerHTML)
    stu.bonus_sum_acc += isNaN(parseFloat(document.getElementById('bonus_acc').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_acc').innerHTML)
    stu.bonus_times_acc += isNaN(parseFloat(document.getElementById('bonus_accP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_accP').innerHTML)
    stu.bonus_sum_cres += isNaN(parseFloat(document.getElementById('bonus_cres').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_cres').innerHTML)
    stu.bonus_times_cres += isNaN(parseFloat(document.getElementById('bonus_cresP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_cresP').innerHTML)
    stu.bonus_sum_cdmres += isNaN(parseFloat(document.getElementById('bonus_cdmres').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_cdmres').innerHTML)
    stu.bonus_times_cdmres += isNaN(parseFloat(document.getElementById('bonus_cdmresP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_cdmresP').innerHTML)
    stu.bonus_sum_ccup += isNaN(parseFloat(document.getElementById('bonus_ccup').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_ccup').innerHTML)
    stu.bonus_times_ccup += isNaN(parseFloat(document.getElementById('bonus_ccupP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_ccupP').innerHTML)
    stu.bonus_sum_ccres += isNaN(parseFloat(document.getElementById('bonus_ccres').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_ccres').innerHTML)
    stu.bonus_times_ccres += isNaN(parseFloat(document.getElementById('bonus_ccresP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_ccresP').innerHTML)

    stu.bonus_bond(input_name,input_bond,stu_bond)
    stu.bonus_cal()
    
    document.getElementById("stu_name").innerHTML = stu.name;
    document.getElementById("stu_lev").innerHTML = stu.lev;
    document.getElementById("stu_star").innerHTML = stu.star;
    document.getElementById("stu_atk").innerHTML = Math.round(stu.atk);
    document.getElementById("stu_atk1").innerHTML = Math.round(stu.atk);
    document.getElementById("stu_def").innerHTML = Math.round(stu.def);
    document.getElementById("stu_def1").innerHTML = Math.round(stu.def);
    document.getElementById("stu_hp").innerHTML = Math.round(stu.hp);
    document.getElementById("stu_hp1").innerHTML = Math.round(stu.hp);
    document.getElementById("stu_heal").innerHTML = Math.round(stu.heal);
    document.getElementById("stu_heal1").innerHTML = Math.round(stu.heal);
    document.getElementById("stu_acc").innerHTML = Math.round(stu.acc);
    document.getElementById("stu_evade").innerHTML = Math.round(stu.evade);
    document.getElementById("stu_crt").innerHTML = Math.round(stu.crate);
    document.getElementById("stu_crtDmg").innerHTML = Math.round(stu.cdmg_display);
    document.getElementById("stu_stab").innerHTML = Math.round(stu.stab);
    document.getElementById("stu_range").innerHTML = Math.round(stu.range);
    document.getElementById("stu_ccup").innerHTML = Math.round(stu.ccup);
    document.getElementById("stu_ccres").innerHTML = Math.round(stu.ccres);
    document.getElementById("stu_cost").innerHTML = 700;

    document.getElementById("box5").innerHTML = stu_detail[stu.stuNum][1]
    document.getElementById("box5_1").innerHTML = stu_detail[stu.stuNum][2]

    document.getElementById("stu_urban").innerHTML = stu.urban;
    document.getElementById("stu_urban1").innerHTML = stu.urban;
    document.getElementById("stu_outdoor").innerHTML = stu.outdoor;
    document.getElementById("stu_outdoor1").innerHTML = stu.outdoor;
    document.getElementById("stu_indoor").innerHTML = stu.indoor;
    document.getElementById("stu_indoor1").innerHTML = stu.indoor;

    document.getElementById("stu_ex_name").innerHTML = stu_skill[stu.stuNum][1];
    document.getElementById("stu_ex_cost").innerHTML = stu_skill[stu.stuNum][2];
    document.getElementById('ex_lev').innerHTML = input_exlev;
    document.getElementById("stu_ex_detail").innerHTML = stu_skill[stu.stuNum][Number(input_exlev)+2];
    document.getElementById("stu_s1_name").innerHTML = stu_skill[stu.stuNum][8];
    document.getElementById('s1_lev').innerHTML = input_s1lev;
    document.getElementById("stu_s1_detail").innerHTML = stu_skill[stu.stuNum][Number(input_s1lev)+8];
    document.getElementById("stu_s2_name").innerHTML = stu_skill[stu.stuNum][19];
    document.getElementById('s2_lev').innerHTML = input_s2lev;
    document.getElementById("stu_s2_detail").innerHTML = stu_skill[stu.stuNum][Number(input_s2lev)+19];
    document.getElementById("stu_s3_name").innerHTML = stu_skill[stu.stuNum][30];
    document.getElementById('s3_lev').innerHTML = input_s3lev;
    document.getElementById("stu_s3_detail").innerHTML = stu_skill[stu.stuNum][Number(input_s3lev)+30];
    document.getElementById("display_lv").innerHTML = input_lev;
    
    document.getElementById("weapon_name").innerHTML = stu_detail[stu.stuNum][5]
    var weapon_type = "../img/"+stu_detail[stu.stuNum][5]+".png"
    set_image("weapon_type", weapon_type)

    document.getElementById("equip1").innerHTML = stu.equip1;
    document.getElementById("equip2").innerHTML = stu.equip2;
    document.getElementById("equip3").innerHTML = stu.equip3;

    switch (stu_detail[stu.stuNum][3]) {
        case "폭발":
            document.getElementById("box6_type").style.backgroundColor = "#930008";
            document.getElementById("box6_type").innerHTML = "폭발"
            set_image("image_exskill","../img/background.png", "filter: brightness(0) saturate(100%) invert(7%) sepia(81%) saturate(6999%) hue-rotate(354deg) brightness(86%) contrast(94%);")
            set_image("image_s1","../img/background.png", "filter: brightness(0) saturate(100%) invert(7%) sepia(81%) saturate(6999%) hue-rotate(354deg) brightness(86%) contrast(94%);")
            set_image("image_s2","../img/background.png", "filter: brightness(0) saturate(100%) invert(7%) sepia(81%) saturate(6999%) hue-rotate(354deg) brightness(86%) contrast(94%);")
            set_image("image_s3","../img/background.png", "filter: brightness(0) saturate(100%) invert(7%) sepia(81%) saturate(6999%) hue-rotate(354deg) brightness(86%) contrast(94%);")
            break;
        case "관통":
            document.getElementById("box6_type").style.backgroundColor = "#be8a12";
            document.getElementById("box6_type").innerHTML = "관통"
            set_image("image_exskill","../img/background.png", "filter: brightness(0) saturate(100%) invert(58%) sepia(62%) saturate(2378%) hue-rotate(12deg) brightness(91%) contrast(86%);")
            set_image("image_s1","../img/background.png", "filter: brightness(0) saturate(100%) invert(58%) sepia(62%) saturate(2378%) hue-rotate(12deg) brightness(91%) contrast(86%);")
            set_image("image_s2","../img/background.png", "filter: brightness(0) saturate(100%) invert(58%) sepia(62%) saturate(2378%) hue-rotate(12deg) brightness(91%) contrast(86%);")
            set_image("image_s3","../img/background.png", "filter: brightness(0) saturate(100%) invert(58%) sepia(62%) saturate(2378%) hue-rotate(12deg) brightness(91%) contrast(86%);")
            break;
        case "신비":
            document.getElementById("box6_type").style.backgroundColor = "#226f9d";
            document.getElementById("box6_type").innerHTML = "신비"
            set_image("image_exskill","../img/background.png", "filter: brightness(0) saturate(100%) invert(33%) sepia(100%) saturate(377%) hue-rotate(158deg) brightness(96%) contrast(93%);")
            set_image("image_s1","../img/background.png", "filter: brightness(0) saturate(100%) invert(33%) sepia(100%) saturate(377%) hue-rotate(158deg) brightness(96%) contrast(93%);")
            set_image("image_s2","../img/background.png", "filter: brightness(0) saturate(100%) invert(33%) sepia(100%) saturate(377%) hue-rotate(158deg) brightness(96%) contrast(93%);")
            set_image("image_s3","../img/background.png", "filter: brightness(0) saturate(100%) invert(33%) sepia(100%) saturate(377%) hue-rotate(158deg) brightness(96%) contrast(93%);")
            break;
    }

    switch (stu_detail[stu.stuNum][4]) {
        case "경장갑":
            document.getElementById("box7_type").style.backgroundColor = "#930008";
            document.getElementById("box7_type").innerHTML = "경장갑"
            break;
        case "중장갑":
            document.getElementById("box7_type").style.backgroundColor = "#be8a12";
            document.getElementById("box7_type").innerHTML = "중장갑"
            break;
        case "특수장갑":
            document.getElementById("box7_type").style.backgroundColor = "#226f9d";
            document.getElementById("box7_type").innerHTML = "특수장갑"
            break;
    }

    var ex_icon = "../img/"+stu_skill[stu.stuNum][41]+".png"
    var s1_icon = "../img/"+stu_skill[stu.stuNum][42]+".png"
    var s2_icon = "../img/"+stu_skill[stu.stuNum][43]+".png"
    var s3_icon = "../img/"+stu_skill[stu.stuNum][44]+".png"

    set_image("image_exskill2", ex_icon)
    set_image("image_s12", s1_icon)
    set_image("image_s22", s2_icon)
    set_image("image_s32", s3_icon)

    var a=0
    var star_list=""

    while (a<input_star){
        star_list+="⭐"
        a+=1
    }
    document.getElementById("star").innerHTML=star_list

    function set_image (id, src,style="") {
        var a = document.getElementById(id)
        a.src = src
        a.style = style
    }
}
